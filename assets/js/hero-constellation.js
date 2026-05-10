/* ============================================================================
 * Hero Constellation
 * Animates the app-icon constellation in the homepage hero.
 * - One requestAnimationFrame loop drives all icons via translate3d.
 * - Mouse parallax with linear-interpolation smoothing (per layer depth).
 * - IntersectionObserver pauses when hero scrolls off-screen.
 * - Page Visibility API pauses when tab is hidden.
 * - Honors prefers-reduced-motion: freeze drift + parallax.
 * - Mobile (<=640px): no parallax, halved velocities.
 * No external dependencies. Plain script (no module syntax).
 * ========================================================================== */
(function () {
  'use strict';

  var root = document.querySelector('.hero-constellation');
  if (!root) return;

  var reduceMotionMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mobileMQ = window.matchMedia('(max-width: 640px)');
  var reduceMotion = reduceMotionMQ.matches;
  var isMobile = mobileMQ.matches;

  var iconEls = root.querySelectorAll('.hero-icon');
  if (!iconEls.length) return;

  // Build per-icon state. Velocities and phase are seeded from the index, so
  // motion is stable across reloads (positions are server-rendered already).
  var icons = [];
  for (var i = 0; i < iconEls.length; i++) {
    var el = iconEls[i];
    // Knuth's multiplicative hash for a cheap deterministic seed.
    var seed = (i + 1) * 2654435761 >>> 0;
    var angle = (seed % 360) * (Math.PI / 180);
    var baseSpeed = 5 + (seed % 11); // 5–15 px/s
    var speed = isMobile ? baseSpeed * 0.5 : baseSpeed;
    var layer;
    if (el.classList.contains('hero-icon--front')) {
      layer = 0.05;
    } else if (el.classList.contains('hero-icon--mid')) {
      layer = 0.025;
    } else {
      layer = 0.01;
    }
    icons.push({
      el: el,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      ox: 0,
      oy: 0,
      phase: ((seed % 1000) / 1000) * Math.PI * 2,
      layer: layer
    });
  }

  var mouseX = 0, mouseY = 0;          // normalized [-0.5, 0.5]
  var parallaxX = 0, parallaxY = 0;    // smoothed parallax
  var running = true;
  var rafId = 0;
  var last = 0;

  // Mouse parallax (desktop only, motion allowed).
  function onMouseMove(e) {
    var r = root.getBoundingClientRect();
    if (!r.width || !r.height) return;
    mouseX = (e.clientX - r.left - r.width / 2) / r.width;
    mouseY = (e.clientY - r.top - r.height / 2) / r.height;
  }

  if (!isMobile && !reduceMotion) {
    window.addEventListener('mousemove', onMouseMove, { passive: true });
  }

  // IntersectionObserver pauses the loop when the hero is off-screen.
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      var entry = entries[0];
      var visible = entry && entry.isIntersecting;
      if (visible && !running) {
        running = true;
        last = performance.now();
        rafId = requestAnimationFrame(tick);
      } else if (!visible) {
        running = false;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = 0;
        }
      }
    }, { threshold: 0 });
    io.observe(root);
  }

  // Page Visibility API: pause when the tab is hidden.
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      running = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    } else {
      running = true;
      last = performance.now();
      rafId = requestAnimationFrame(tick);
    }
  });

  // React to media query changes (e.g., user toggles reduced-motion live).
  function onMQChange() {
    reduceMotion = reduceMotionMQ.matches;
    isMobile = mobileMQ.matches;
  }
  if (reduceMotionMQ.addEventListener) {
    reduceMotionMQ.addEventListener('change', onMQChange);
    mobileMQ.addEventListener('change', onMQChange);
  } else if (reduceMotionMQ.addListener) {
    // Safari < 14 fallback.
    reduceMotionMQ.addListener(onMQChange);
    mobileMQ.addListener(onMQChange);
  }

  function tick(now) {
    rafId = 0;
    if (!running) return;
    if (!last) last = now;
    var dt = (now - last) / 1000;
    if (dt > 0.05) dt = 0.05; // clamp big tab-switch jumps
    last = now;

    // Smoothly interpolate parallax target.
    if (!isMobile && !reduceMotion) {
      parallaxX += (mouseX - parallaxX) * 0.05;
      parallaxY += (mouseY - parallaxY) * 0.05;
    } else {
      parallaxX = 0;
      parallaxY = 0;
    }

    var w = root.clientWidth;
    var h = root.clientHeight;
    var margin = 100;

    for (var j = 0; j < icons.length; j++) {
      var ic = icons[j];
      if (!reduceMotion) {
        ic.ox += ic.vx * dt;
        ic.oy += ic.vy * dt + Math.sin(now / 1000 + ic.phase) * 0.05;
        // Wrap around edges so icons reappear on the opposite side.
        if (ic.ox >  w / 2 + margin) ic.ox = -w / 2 - margin;
        if (ic.ox < -w / 2 - margin) ic.ox =  w / 2 + margin;
        if (ic.oy >  h / 2 + margin) ic.oy = -h / 2 - margin;
        if (ic.oy < -h / 2 - margin) ic.oy =  h / 2 + margin;
      }
      var px = parallaxX * w * ic.layer;
      var py = parallaxY * h * ic.layer;
      ic.el.style.transform =
        'translate3d(calc(-50% + ' + (ic.ox + px).toFixed(2) + 'px), calc(-50% + ' + (ic.oy + py).toFixed(2) + 'px), 0)';
    }

    rafId = requestAnimationFrame(tick);
  }

  // Kick off.
  last = performance.now();
  rafId = requestAnimationFrame(tick);
})();
