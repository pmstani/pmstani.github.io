/* =============================================================================
   Arbor Applicationum — procedural living tree
   -----------------------------------------------------------------------------
   Reads the JSON island (#orchard-data), grows a deterministic SVG tree where
   every app is a fruit. Adding an app to _data/apps.yml grows a new twig + fruit
   with no code change. Seeded so the tree is identical every visit; each branch
   is seeded from its own category + slugs so new apps don't reshuffle old limbs.

   Accessibility: the whole SVG is aria-hidden (a decorative, mouse/‑clickable
   duplicate of the crawlable app grid below). Fruits are real <a> links but kept
   out of the tab order (tabindex=-1); the grid remains the semantic source.
   All motion is gated behind prefers-reduced-motion via CSS.
   ========================================================================== */
(function () {
  'use strict';

  var svg = document.getElementById('tree-root');
  var dataEl = document.getElementById('orchard-data');
  if (!svg || !dataEl) return;

  var apps;
  try { apps = JSON.parse(dataEl.textContent); } catch (e) { return; }
  if (!Array.isArray(apps) || !apps.length) return;

  var SVGNS = 'http://www.w3.org/2000/svg';
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var CAT_NAMES = {
    'safari-extensions': 'Safari Extensions',
    'productivity': 'Productivity',
    'health-wellness': 'Health & Wellness',
    'education': 'Education',
    'developer-tools': 'Developer Tools',
    'entertainment': 'Entertainment',
    'utilities': 'Utilities',
    'social-media': 'Social Media'
  };
  /* engraving-appropriate legend swatches — inks, moss, ochre, seal red (no blue/purple) */
  var CAT_COLORS = {
    'safari-extensions': '#4a6741',
    'productivity': '#8c3226',
    'health-wellness': '#c17817',
    'education': '#5a4c3a',
    'developer-tools': '#2b241c',
    'entertainment': '#a84b2f',
    'utilities': '#6b8f5a',
    'social-media': '#8a795e'
  };

  var R = 22;            // fruit radius (SVG units; scales down responsively)
  var K = 3.4;           // pipe-model constant: branch half-width ~ K*sqrt(descendants)

  /* ---- deterministic RNG ------------------------------------------------- */
  function fnv1a(str) {
    var h = 0x811c9dc5;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 0x01000193);
    }
    return h >>> 0;
  }
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function rng(seed) { return mulberry32(fnv1a(seed)); }
  function rr(r, lo, hi) { return lo + (hi - lo) * r(); }

  /* ---- vector + bezier helpers ------------------------------------------ */
  function n2(v) { return Math.round(v * 100) / 100; }
  function norm(v) { var m = Math.hypot(v.x, v.y) || 1; return { x: v.x / m, y: v.y / m }; }
  function cubic(p0, c1, c2, p1, t) {
    var mt = 1 - t, a = mt * mt * mt, b = 3 * mt * mt * t, c = 3 * mt * t * t, d = t * t * t;
    return { x: a * p0.x + b * c1.x + c * c2.x + d * p1.x, y: a * p0.y + b * c1.y + c * c2.y + d * p1.y };
  }
  function cubicTan(p0, c1, c2, p1, t) {
    var mt = 1 - t;
    var dx = 3 * mt * mt * (c1.x - p0.x) + 6 * mt * t * (c2.x - c1.x) + 3 * t * t * (p1.x - c2.x);
    var dy = 3 * mt * mt * (c1.y - p0.y) + 6 * mt * t * (c2.y - c1.y) + 3 * t * t * (p1.y - c2.y);
    return norm({ x: dx, y: dy });
  }
  /* organic curve between two points with a seeded perpendicular bend */
  function makeCurve(p0, p1, bend, r) {
    var dx = p1.x - p0.x, dy = p1.y - p0.y, L = Math.hypot(dx, dy) || 1;
    var ux = dx / L, uy = dy / L, nx = -uy, ny = ux;
    var b1 = bend * (0.7 + 0.5 * r());
    var b2 = bend * (0.35 + 0.5 * r());
    var c1 = { x: p0.x + ux * L * 0.33 + nx * L * b1, y: p0.y + uy * L * 0.33 + ny * L * b1 };
    var c2 = { x: p0.x + ux * L * 0.66 + nx * L * b2, y: p0.y + uy * L * 0.66 + ny * L * b2 };
    return {
      p0: p0, c1: c1, c2: c2, p1: p1, L: L,
      point: function (t) { return cubic(p0, c1, c2, p1, t); },
      tangent: function (t) { return cubicTan(p0, c1, c2, p1, t); }
    };
  }
  /* filled, tapered branch shape (trunk / limbs / spines) */
  function taperFill(curve, w0, w1, samples) {
    samples = samples || 14;
    var left = [], right = [], i, t, p, tan, w, nx, ny;
    for (i = 0; i <= samples; i++) {
      t = i / samples;
      p = curve.point(t); tan = curve.tangent(t);
      nx = -tan.y; ny = tan.x;
      w = (w0 + (w1 - w0) * t) / 2;
      left.push({ x: p.x + nx * w, y: p.y + ny * w });
      right.push({ x: p.x - nx * w, y: p.y - ny * w });
    }
    var d = 'M ' + n2(left[0].x) + ' ' + n2(left[0].y);
    for (i = 1; i < left.length; i++) d += ' L ' + n2(left[i].x) + ' ' + n2(left[i].y);
    for (i = right.length - 1; i >= 0; i--) d += ' L ' + n2(right[i].x) + ' ' + n2(right[i].y);
    return d + ' Z';
  }
  function curveStroke(curve) {
    return 'M ' + n2(curve.p0.x) + ' ' + n2(curve.p0.y) +
      ' C ' + n2(curve.c1.x) + ' ' + n2(curve.c1.y) +
      ' ' + n2(curve.c2.x) + ' ' + n2(curve.c2.y) +
      ' ' + n2(curve.p1.x) + ' ' + n2(curve.p1.y);
  }

  /* ---- tiny SVG builder -------------------------------------------------- */
  function el(tag, attrs) {
    var e = document.createElementNS(SVGNS, tag);
    if (attrs) for (var k in attrs) if (attrs[k] != null) e.setAttribute(k, attrs[k]);
    return e;
  }

  /* ---- bounding box tracker --------------------------------------------- */
  var bb = { minX: 0, maxX: 0, minY: 0, maxY: 0 };
  function track(x, y) {
    if (x < bb.minX) bb.minX = x; if (x > bb.maxX) bb.maxX = x;
    if (y < bb.minY) bb.minY = y; if (y > bb.maxY) bb.maxY = y;
  }

  /* =========================================================================
     GROUP APPS BY CATEGORY (preserve YAML order; limbs sized by count)
     ======================================================================= */
  apps.forEach(function (a, i) { a._i = i; a._fig = i + 1; a._new = (i >= apps.length - 3); });

  var order = [], byCat = {};
  apps.forEach(function (a) {
    var c = a.category || 'other';
    if (!byCat[c]) { byCat[c] = []; order.push(c); }
    byCat[c].push(a);
  });
  var cats = order.map(function (c, idx) {
    return { key: c, apps: byCat[c], count: byCat[c].length, first: idx };
  });
  cats.sort(function (x, y) { return y.count - x.count || x.first - y.first; });
  var maxK = cats.reduce(function (m, c) { return Math.max(m, c.count); }, 1);

  var N = apps.length;
  var H = Math.max(520, Math.min(900, 480 + N * 4));
  var trunkH = H * 0.52;

  /* =========================================================================
     BUILD SVG STRUCTURE
     ======================================================================= */
  var defs = el('defs');
  var clip = el('clipPath', { id: 'fruitClip' });
  clip.appendChild(el('circle', { cx: 0, cy: 0, r: R }));
  defs.appendChild(clip);
  svg.appendChild(defs);

  var gSky = el('g', { id: 'tree-sky' });
  var gGround = el('g', { id: 'tree-ground' });
  var gCanopy = el('g', { id: 'tree-canopy' });
  svg.appendChild(gSky);
  svg.appendChild(gGround);
  svg.appendChild(gCanopy);

  /* trunk base sits a few units below the horizon so the wavering ground
     line visibly crosses it — planted, without roots */
  var base = { x: 0, y: 8 };
  var groundR = rng('ground|' + apps.map(function (a) { return a.slug; }).join(''));

  /* ---- trunk ------------------------------------------------------------ */
  var trunkR = rng('trunk|' + apps.map(function (a) { return a.slug; }).join(''));
  var crown = { x: base.x + rr(trunkR, -22, 22), y: -trunkH };
  var trunkW0 = Math.max(22, Math.min(40, K * Math.sqrt(N)));
  var trunkCurve = makeCurve(base, crown, rr(trunkR, -0.05, 0.05), trunkR);
  track(base.x, base.y); track(crown.x, crown.y);
  gCanopy.appendChild(el('path', { 'class': 'branch', d: taperFill(trunkCurve, trunkW0 * 1.15, 5, 16) }));

  /* trunk hatching — sparse engraving shade strokes down one side */
  var hatchG = el('g', { 'class': 'hatch' });
  for (var hi = 0; hi < 12; hi++) {
    var ht = 0.12 + (hi / 12) * 0.8;
    var hp = trunkCurve.point(ht);
    var htan = trunkCurve.tangent(ht);
    var hn = { x: -htan.y, y: htan.x };
    var hw = (trunkW0 + (5 - trunkW0) * ht) / 2;
    var side = (hi % 2 === 0) ? -1 : -0.55;
    var hx0 = hp.x + hn.x * hw * 0.15 * side, hy0 = hp.y + hn.y * hw * 0.15 * side;
    var hx1 = hp.x + hn.x * hw * 0.9 * side, hy1 = hp.y + hn.y * hw * 0.9 * side;
    hatchG.appendChild(el('path', {
      d: 'M ' + n2(hx0) + ' ' + n2(hy0) + ' Q ' + n2((hx0 + hx1) / 2 + rr(trunkR, -2, 2)) + ' ' +
        n2((hy0 + hy1) / 2) + ' ' + n2(hx1) + ' ' + n2(hy1)
    }));
  }
  gCanopy.appendChild(hatchG);

  /* ---- helper: build one hanging fruit ---------------------------------- */
  function makeFruit(twTip, app, r, phase) {
    var stemLen = rr(r, 14, 22);
    var cx = twTip.x + rr(r, -4, 4);
    var cy = twTip.y + stemLen;
    track(cx - R - 14, cy - R - 14); track(cx + R + 14, cy + R + 14);

    var swayF = el('g', { 'class': 'sway' });
    swayF.setAttribute('style',
      'transform-box:view-box;transform-origin:' + n2(twTip.x) + 'px ' + n2(twTip.y) +
      'px;--amp:' + n2(rr(r, 1.1, 1.9)) + 'deg;--dur:' + n2(rr(r, 4.5, 7.5)) +
      's;--delay:-' + n2(phase) + 's;');

    var a = el('a', { 'class': 'fruit', tabindex: '-1' });
    a.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '/apps/' + app.slug + '/');
    a.setAttribute('href', '/apps/' + app.slug + '/');
    a.setAttribute('aria-label', app.name);

    /* stem */
    a.appendChild(el('path', {
      'class': 'fruit__stem',
      d: 'M ' + n2(twTip.x) + ' ' + n2(twTip.y) + ' Q ' + n2(twTip.x + rr(r, -3, 3)) + ' ' +
        n2((twTip.y + cy - R) / 2) + ' ' + n2(cx) + ' ' + n2(cy - R)
    }));

    var pos = el('g', { transform: 'translate(' + n2(cx) + ' ' + n2(cy) + ')' });
    var body = el('g', { 'class': 'fruit__body' });
    body.setAttribute('style', '--pop-delay:' + n2(1.35 + app._i * 0.01) + 's;');
    body.appendChild(el('circle', { 'class': 'fruit__halo', r: R + 5 }));
    body.appendChild(el('circle', { 'class': 'fruit__ring', r: R }));
    var img = el('image', { x: -R, y: -R, width: 2 * R, height: 2 * R, 'clip-path': 'url(#fruitClip)' });
    img.setAttribute('href', '/img/apps/' + app.icon);
    img.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '/img/apps/' + app.icon);
    img.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    body.appendChild(img);

    /* newly grafted → a small 5-petal seal-red blossom */
    if (app._new) {
      var bl = el('g', { 'class': 'fruit__blossom', transform: 'translate(' + n2(R * 0.72) + ' ' + n2(-R * 0.72) + ')' });
      for (var p = 0; p < 5; p++) {
        bl.appendChild(el('circle', { 'class': 'petal', cx: 0, cy: -4.2, r: 2.6, transform: 'rotate(' + (p * 72) + ')' }));
      }
      bl.appendChild(el('circle', { 'class': 'pip', cx: 0, cy: 0, r: 1.7 }));
      body.appendChild(bl);
    }

    pos.appendChild(body);
    a.appendChild(pos);
    swayF.appendChild(a);
    return swayF;
  }

  /* ---- helper: leaves near a twig tip ----------------------------------- */
  function addLeaves(parent, curve, r) {
    var count = 2 + Math.floor(r() * 2);
    for (var i = 0; i < count; i++) {
      var u = rr(r, 0.5, 0.96);
      var p = curve.point(u);
      var tan = curve.tangent(u);
      var ang = Math.atan2(tan.y, tan.x) * 180 / Math.PI + rr(r, -60, 60);
      var Lf = rr(r, 9, 15), Wf = Lf * 0.42;
      parent.appendChild(el('path', {
        'class': 'leaf' + (r() < 0.5 ? ' leaf--alt' : ''),
        d: 'M 0 0 Q ' + n2(Lf * 0.5) + ' ' + n2(-Wf) + ' ' + n2(Lf) + ' 0 Q ' + n2(Lf * 0.5) + ' ' + n2(Wf) + ' 0 0 Z',
        transform: 'translate(' + n2(p.x) + ' ' + n2(p.y) + ') rotate(' + n2(ang) + ')'
      }));
    }
  }

  /* ---- helper: place a chronological run of apps along a spine ----------- */
  function placeTwigs(parent, curve, list, r, depth) {
    for (var i = 0; i < list.length; i++) {
      var app = list[i];
      var u = list.length === 1 ? 0.72 : (0.26 + 0.74 * (i / (list.length - 1)));
      var p = curve.point(u);
      var tan = curve.tangent(u);
      var nrm = { x: -tan.y, y: tan.x };
      var side = (i % 2 === 0) ? 1 : -1;
      var twLen = rr(r, 24, 42);
      var dir = norm({
        x: tan.x * 0.35 + nrm.x * side * 0.95,
        y: tan.y * 0.35 + nrm.y * side * 0.95 - 0.45
      });
      var twTip = { x: p.x + dir.x * twLen, y: p.y + dir.y * twLen };
      track(twTip.x, twTip.y);
      var twCurve = makeCurve(p, twTip, rr(r, -0.18, 0.18), r);
      parent.appendChild(el('path', {
        'class': 'twig',
        'stroke-width': n2(2.4 - 0.9 * u),
        d: curveStroke(twCurve)
      }));
      addLeaves(parent, twCurve, r);
      parent.appendChild(makeFruit(twTip, app, r, rr(r, 0, 6)));
    }
  }

  /* =========================================================================
     LIMBS — one per category, biggest lowest & most central
     ======================================================================= */
  var SPINE_CAP = 5;
  var numLimbs = cats.length;

  cats.forEach(function (cat, ci) {
    var lr = rng('limb|' + cat.key + '|' + cat.apps.map(function (a) { return a.slug; }).join(''));
    var Kc = cat.count;
    var frac = numLimbs > 1 ? ci / (numLimbs - 1) : 0.5;

    var tAttach = 0.30 + 0.56 * frac;                      // lower limb = bigger category
    var side = (ci % 2 === 0) ? 1 : -1;                    // biggest limbs grow right, away from the title cloud
    var basePt = trunkCurve.point(tAttach);
    var angleMag = (56 - 36 * frac + rr(lr, -7, 7)) * Math.PI / 180;
    var signed = side * angleMag;
    var Llimb = trunkH * (0.55 + 0.55 * (Kc / maxK));
    var tip = { x: basePt.x + Math.sin(signed) * Llimb, y: basePt.y - Math.cos(signed) * Llimb };
    track(tip.x, tip.y);
    var limbCurve = makeCurve(basePt, tip, side * rr(lr, 0.06, 0.14), lr);
    var wBase = K * Math.sqrt(Kc);

    /* sway group anchored at the limb's attachment on the trunk */
    var gLimb = el('g', { 'class': 'cat-group sway', 'data-cat': cat.key });
    gLimb.setAttribute('style',
      'transform-box:view-box;transform-origin:' + n2(basePt.x) + 'px ' + n2(basePt.y) +
      'px;--amp:' + n2(rr(lr, 0.5, 0.9)) + 'deg;--dur:' + n2(rr(lr, 8, 11)) +
      's;--delay:-' + n2(rr(lr, 0, 8)) + 's;');
    gLimb.appendChild(el('path', { 'class': 'branch', d: taperFill(limbCurve, wBase, Math.max(2.5, wBase * 0.28), 14) }));

    if (Kc <= SPINE_CAP) {
      placeTwigs(gLimb, limbCurve, cat.apps, lr, 1);
    } else {
      /* fan the limb into secondary spines carrying chronological chunks */
      var spinesN = Math.ceil(Kc / SPINE_CAP);
      var per = Math.ceil(Kc / spinesN);
      for (var s = 0; s < spinesN; s++) {
        var chunk = cat.apps.slice(s * per, (s + 1) * per);
        if (!chunk.length) continue;
        var sr = rng('spine|' + cat.key + '|' + s + '|' + chunk.map(function (a) { return a.slug; }).join(''));
        var uAtt = spinesN > 1 ? 0.34 + 0.60 * (s / (spinesN - 1)) : 0.6;   // newest chunk toward the tip
        var sBase = limbCurve.point(uAtt);
        var sTan = limbCurve.tangent(uAtt);
        var sNorm = { x: -sTan.y, y: sTan.x };
        var sSide = (s % 2 === 0) ? 1 : -1;
        var sLen = Math.min(Llimb * 0.72, 46 + chunk.length * 15);
        var sDir = norm({
          x: sTan.x * 0.55 + sNorm.x * sSide * 0.8,
          y: sTan.y * 0.55 + sNorm.y * sSide * 0.8 - 0.35
        });
        var sTip = { x: sBase.x + sDir.x * sLen, y: sBase.y + sDir.y * sLen };
        track(sTip.x, sTip.y);
        var spineCurve = makeCurve(sBase, sTip, sSide * rr(sr, 0.08, 0.2), sr);
        var wSpine = K * Math.sqrt(chunk.length);

        var gSpine = el('g', { 'class': 'sway' });
        gSpine.setAttribute('style',
          'transform-box:view-box;transform-origin:' + n2(sBase.x) + 'px ' + n2(sBase.y) +
          'px;--amp:' + n2(rr(sr, 0.9, 1.5)) + 'deg;--dur:' + n2(rr(sr, 7, 10)) +
          's;--delay:-' + n2(rr(sr, 0, 8)) + 's;');
        gSpine.appendChild(el('path', { 'class': 'branch', d: taperFill(spineCurve, wSpine, 2, 12) }));
        placeTwigs(gSpine, spineCurve, chunk, sr, 2);
        gLimb.appendChild(gSpine);
      }
    }
    gCanopy.appendChild(gLimb);
    cat._group = gLimb;
  });

  /* ---- leader twigs crowning the trunk (bare apex, no fruit) ------------- */
  var apex = trunkCurve.point(1);
  for (var li = 0; li < 3; li++) {
    var ar = rng('apex|' + li);
    var aSide = li - 1;
    var aTip = { x: apex.x + aSide * rr(ar, 10, 26), y: apex.y - rr(ar, 26, 60) };
    track(aTip.x, aTip.y);
    var aCurve = makeCurve(apex, aTip, aSide * 0.1, ar);
    gCanopy.appendChild(el('path', { 'class': 'twig', 'stroke-width': 1.6, d: curveStroke(aCurve) }));
    addLeaves(gCanopy, aCurve, ar);
  }

  /* =========================================================================
     GROUND — a single wavering horizon line; the trunk paints over it
     ======================================================================= */
  (function () {
    var gx0 = bb.minX - 30, gx1 = bb.maxX + 30;
    var gd = 'M ' + n2(gx0) + ' 0';
    var segs = 26;
    for (var i = 1; i <= segs; i++) {
      var gx = gx0 + (gx1 - gx0) * (i / segs);
      gd += ' L ' + n2(gx) + ' ' + n2(Math.sin(i * 1.3) * 1.6 + rr(groundR, -1, 1));
    }
    gGround.appendChild(el('path', { 'class': 'ground', d: gd }));
  })();

  /* =========================================================================
     NIGHT SKY — star pinpricks + a few fireflies (never blue/purple)
     ======================================================================= */
  (function () {
    var skyR = rng('sky|' + N);
    var top = bb.minY, bottom = -trunkH * 0.35;
    for (var i = 0; i < 46; i++) {
      gSky.appendChild(el('circle', {
        'class': 'star',
        cx: n2(rr(skyR, bb.minX, bb.maxX)),
        cy: n2(rr(skyR, top, bottom)),
        r: n2(rr(skyR, 0.5, 1.5))
      }));
    }
    for (var f = 0; f < 3; f++) {
      var fx = rr(skyR, bb.minX * 0.6, bb.maxX * 0.6);
      var fy = rr(skyR, -trunkH, bottom);
      var fly = el('circle', { 'class': 'firefly', cx: n2(fx), cy: n2(fy), r: 1.8 });
      fly.setAttribute('style', '--dur:' + n2(rr(skyR, 3.5, 6)) + 's;--delay:-' + n2(rr(skyR, 0, 4)) + 's;');
      gSky.appendChild(fly);
    }
  })();

  /* =========================================================================
     VIEWBOX
     ======================================================================= */
  var padX = 60, padTop = 46, padBottom = 30;
  var vx = bb.minX - padX, vy = bb.minY - padTop;
  var vw = (bb.maxX - bb.minX) + padX * 2;
  var vh = (bb.maxY - bb.minY) + padTop + padBottom;
  svg.setAttribute('viewBox', n2(vx) + ' ' + n2(vy) + ' ' + n2(vw) + ' ' + n2(vh));
  svg.setAttribute('preserveAspectRatio', 'xMidYMax meet');

  /* on the stacked mobile layout the scene sits in normal flow — match its
     height to the tree's aspect so no blank sky opens above the canopy */
  var scene = svg.parentElement;
  var stackedMq = window.matchMedia && window.matchMedia('(max-width: 700px)');
  function fitScene() {
    if (!scene || !stackedMq) return;
    if (stackedMq.matches) {
      scene.style.height = Math.max(240, Math.round(scene.clientWidth * (vh / vw))) + 'px';
    } else {
      scene.style.height = '';
    }
  }
  fitScene();
  if (stackedMq && stackedMq.addEventListener) stackedMq.addEventListener('change', fitScene);
  window.addEventListener('resize', fitScene);

  /* =========================================================================
     LEGEND — categories with counts; hover highlights a limb
     ======================================================================= */
  var legendBox = document.getElementById('tree-legend');
  if (legendBox) {
    var frag = document.createDocumentFragment();
    cats.forEach(function (cat) {
      var row = document.createElement('button');
      row.type = 'button';
      row.className = 'legend__row';
      row.setAttribute('data-cat', cat.key);
      row.innerHTML =
        '<span class="legend__swatch" style="background:' + (CAT_COLORS[cat.key] || '#5a4c3a') + '"></span>' +
        '<span class="legend__name">' + (CAT_NAMES[cat.key] || cat.key.replace(/-/g, ' ')) + '</span>' +
        '<span class="legend__count">' + cat.count + '</span>';
      var group = cat._group;
      function on() { if (group) { svg.classList.add('has-focus'); group.classList.add('is-focus'); } }
      function off() { if (group) { svg.classList.remove('has-focus'); group.classList.remove('is-focus'); } }
      row.addEventListener('mouseenter', on);
      row.addEventListener('mouseleave', off);
      row.addEventListener('focus', on);
      row.addEventListener('blur', off);
      frag.appendChild(row);
    });
    legendBox.appendChild(frag);
  }

  /* =========================================================================
     TOOLTIP — "Fig. N — Name" + tagline
     ======================================================================= */
  var tip = document.createElement('div');
  tip.className = 'tree-tooltip';
  tip.setAttribute('role', 'presentation');
  tip.style.cssText = 'position:fixed;z-index:50;pointer-events:none;opacity:0;transition:opacity .15s ease;' +
    'max-width:230px;padding:.5rem .7rem;background:var(--paper-light);border:1px solid var(--ink);' +
    'box-shadow:0 8px 20px -12px rgba(43,36,28,.6);font-family:var(--font-body);line-height:1.35;' +
    'transform:translate(-50%,-115%);';
  document.body.appendChild(tip);

  function showTip(target, app) {
    var rect = target.getBoundingClientRect();
    tip.innerHTML =
      '<strong style="font-family:var(--font-display);font-weight:700;color:var(--ink)">Fig. ' + app._fig + ' — ' + escapeHtml(app.name) + '</strong>' +
      '<br><em style="color:var(--ink-2)">' + escapeHtml(app.tagline || '') + '</em>' +
      (app._new ? '<br><span style="font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--seal)">Newly grafted</span>' : '');
    tip.style.left = (rect.left + rect.width / 2) + 'px';
    tip.style.top = (rect.top) + 'px';
    tip.style.opacity = '1';
  }
  function hideTip() { tip.style.opacity = '0'; }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  /* attach tooltip handlers, mapping each fruit <a> to its app via slug */
  Array.prototype.forEach.call(svg.querySelectorAll('a.fruit'), function (aEl) {
    var href = aEl.getAttribute('href') || '';
    var slug = href.replace(/^\/apps\//, '').replace(/\/$/, '');
    var app = apps.filter(function (a) { return a.slug === slug; })[0];
    if (!app) return;
    aEl.addEventListener('mouseenter', function () { showTip(aEl, app); });
    aEl.addEventListener('mousemove', function () { showTip(aEl, app); });
    aEl.addEventListener('mouseleave', hideTip);
    aEl.addEventListener('focus', function () { showTip(aEl, app); });
    aEl.addEventListener('blur', hideTip);
  });

  /* =========================================================================
     GROWTH — sprout once per session
     ======================================================================= */
  var grown = false;
  try { grown = sessionStorage.getItem('orchardGrown') === '1'; } catch (e) {}
  if (!reduced && !grown) {
    svg.classList.add('is-growing');
    var lastDelay = 1.35 + N * 0.01 + 0.7;
    window.setTimeout(function () {
      svg.classList.remove('is-growing');
      try { sessionStorage.setItem('orchardGrown', '1'); } catch (e) {}
    }, Math.max(3000, lastDelay * 1000));
  }

  /* =========================================================================
     PARTICLES — falling leaves (autumn) / drifting snow (winter)
     ======================================================================= */
  (function () {
    if (reduced) return;
    var season = document.documentElement.getAttribute('data-season');
    var layer = document.getElementById('tree-particles');
    if (!layer || (season !== 'autumn' && season !== 'winter')) return;
    var kind = season === 'autumn' ? 'leaf' : 'snow';
    var pr = rng('particles|' + season + '|' + N);
    for (var i = 0; i < 4; i++) {
      var d = document.createElement('span');
      d.className = 'particle particle--' + kind;
      d.style.left = n2(rr(pr, 4, 92)) + '%';
      d.style.setProperty('--dx', n2(rr(pr, -60, 60)) + 'px');
      d.style.setProperty('--dur', n2(rr(pr, kind === 'leaf' ? 8 : 10, kind === 'leaf' ? 13 : 16)) + 's');
      d.style.setProperty('--delay', '-' + n2(rr(pr, 0, 12)) + 's');
      layer.appendChild(d);
    }
  })();

})();
