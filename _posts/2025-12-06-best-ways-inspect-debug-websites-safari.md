---
layout: post
title: "Best Ways to Inspect and Debug Websites on Safari"
description: "Learn how to inspect, debug, and analyze websites using Safari developer tools and extensions. View page source, debug CSS, analyze JSON, and identify web technologies."
date: 2025-12-06
categories: [developer-tools]
tags: [web-inspector, debugging, css, html, safari]
silo: developer-tools
pillar: developer-tools
related_apps: [web-inspector, format-json, built-with]
---

Safari handles over 1 billion active users worldwide across macOS, iOS, and iPadOS. Every one of those browsers runs WebKit — including third-party browsers on iOS, which are required to use WebKit under Apple's platform rules. For web developers, this makes Safari a non-negotiable testing target, and its developer tools are the primary means of diagnosing the rendering differences, CSS quirks, and JavaScript issues that distinguish WebKit from Blink and Gecko.

Yet Safari's debugging story has historically been fragmented. The desktop Web Inspector on macOS is capable, but mobile Safari on iPhone and iPad has been dramatically limited — requiring a tethered Mac connection for full inspection. This gap matters most where it hurts most: diagnosing layout bugs that only manifest on actual mobile hardware, where touch interactions, viewport behavior, and font rendering differ from any desktop simulation.

## Safari Web Inspector on macOS: The Core Toolkit

Before reaching for extensions, it is worth understanding what Safari ships with natively. The built-in Web Inspector on macOS is more powerful than many developers realize, particularly those who have spent most of their time in Chrome DevTools.

### Enabling Web Inspector

Developer tools are disabled by default. To enable them:

1. Open **Safari > Settings** (or `Cmd + ,`)
2. Go to the **Advanced** tab
3. Check **Show features for web developers**

This adds the **Develop** menu to the menu bar and enables right-click **Inspect Element** on any page.

Keyboard shortcut to open Web Inspector: `Cmd + Option + I`

### Elements Tab: DOM and CSS Inspection

The Elements tab works similarly to Chrome's Elements panel but with several WebKit-specific features:

**Computed styles panel.** Shows the final computed value of every CSS property on the selected element, organized by property name. This is essential when debugging cascade issues where multiple rules affect the same property.

**Box model visualization.** Displays margin, border, padding, and content dimensions in a visual diagram. Hovering over each zone highlights the corresponding area on the page.

**Style inheritance chain.** Shows exactly which CSS rules apply to an element and in what order, including inherited styles from parent elements. Crossed-out rules are overridden — click through to see what is overriding them.

**Quick tip:** Use `Cmd + Shift + C` to activate the element picker, then click any element on the page to jump directly to it in the Elements tab. This is faster than navigating the DOM tree manually.

### Console Tab: JavaScript Debugging

The console in Safari Web Inspector supports standard JavaScript debugging, but a few features are particularly useful:

```javascript
// Inspect the currently selected DOM element
$0

// Select an element by CSS selector
document.querySelector('.header-nav')

// Monitor all events fired on an element
monitorEvents($0, ['click', 'mouseenter', 'mouseleave'])

// Stop monitoring
unmonitorEvents($0)

// Time a function execution
console.time('render');
renderComponent();
console.timeEnd('render');
// Output: render: 14.238ms

// Log a styled message
console.log('%cWarning: Layout shift detected', 'color: orange; font-size: 14px; font-weight: bold;');
```

### Network Tab: Request Analysis

The Network tab captures all HTTP requests made by the page. Key features for debugging:

**Filtering by type.** Click the document, stylesheet, image, script, XHR, or other type buttons to isolate specific request categories. The XHR/Fetch filter is particularly useful when debugging API calls.

**Request timing waterfall.** Shows DNS lookup, TCP connection, TLS handshake, request, and response timing for each request. Large gaps in the waterfall indicate bottlenecks.

**Request/response inspection.** Click any request to view headers, request body, response body, cookies, and timing details. For API debugging, the response body viewer formats JSON automatically.

**Throttling.** Simulate slow network conditions (3G, Edge) to test how your site performs on poor connections. Access this via the throttling dropdown at the top of the Network tab.

### The Responsive Design Mode

`Cmd + Ctrl + R` activates Responsive Design Mode, which simulates different device viewports without opening a separate tool. You can select preset device sizes (iPhone, iPad) or enter custom dimensions.

This is useful for quick viewport testing, but it has limitations. Responsive Design Mode does **not** replicate:

- Actual mobile font rendering (which uses different hinting)
- Touch event behavior (you get mouse events, not touch events)
- Mobile Safari's address bar show/hide behavior, which changes the viewport height
- The notch/Dynamic Island safe area on modern iPhones
- iOS-specific CSS properties like `-webkit-touch-callout`

For these, you need testing on actual devices.

## Debugging Mobile Safari: Bridging the Gap

### Remote Debugging via USB (The Mac-Tethered Approach)

Apple's official solution for mobile Safari debugging requires:

1. An iPhone or iPad running iOS/iPadOS
2. A Mac with Safari
3. A Lightning or USB-C cable connecting the two

**Setup:**
- On iOS: **Settings > Safari > Advanced > Web Inspector** (toggle on)
- On Mac: Connect the device, open Safari, and look under **Develop > [Device Name]** in the menu bar
- Each open tab on the iOS device appears as a submenu item

Selecting a tab opens a full Web Inspector session on the Mac that controls the mobile Safari tab. You get the complete Elements, Console, Network, and Timeline tabs, with real-time synchronization between the Mac inspector and the mobile browser.

This approach works well in a desk setup but fails for the common scenario of needing to debug something while away from your Mac — at a client meeting, on a commute, or testing on a device that is not connected to your development machine.

### On-Device Inspection with Web Inspector for Safari

[Web Inspector for Safari](/apps/web-inspector/) brings element inspection directly to iPhone and iPad, eliminating the Mac dependency. The extension operates inside Safari itself, overlaying inspection controls on any page you visit.

**Element inspection.** Tap any element to view its HTML tag, attributes, CSS styles, computed properties, and box model. This is the same workflow as right-clicking "Inspect Element" on desktop, translated to a touch interface.

**DOM tree navigation.** Browse the full document hierarchy, expand and collapse nodes, and understand the page structure. Long-pressing an element reveals its position in the DOM tree.

**CSS debugging.** View all applied style rules for a selected element, including inherited styles and specificity information. This is critical for diagnosing mobile-only CSS issues — a `@media` query that fires on a 390px-wide iPhone screen but not in a 400px-wide desktop simulation.

**When this saves real time:**

- Debugging a client's production site on your phone without access to a Mac
- Testing responsive layouts on the actual device viewport, not a simulation
- Investigating CSS issues that only manifest on WebKit mobile (position: sticky bugs, viewport unit inconsistencies, safe-area-inset behavior)
- Quick inspection of competitor sites while browsing

{% include blog-cta.html app_slug="web-inspector" %}

## Working with JSON in Safari

APIs return JSON. Webhooks send JSON payloads. Configuration endpoints serve JSON. If you are building or consuming any web service, you spend a significant portion of your debugging time reading JSON.

Safari, unlike Firefox, does not natively format JSON responses. When you navigate to an API endpoint in Safari, you get a wall of unformatted text — dense, unindented, and nearly impossible to parse visually when the response exceeds a few hundred characters.

### The Pain of Unformatted JSON

Consider a typical API response:

```json
{"users":[{"id":1,"name":"Alice Chen","email":"alice@example.com","roles":["admin","editor"],"settings":{"theme":"dark","notifications":{"email":true,"push":false,"sms":false},"timezone":"America/Los_Angeles"}},{"id":2,"name":"Bob Martinez","email":"bob@example.com","roles":["viewer"],"settings":{"theme":"light","notifications":{"email":true,"push":true,"sms":false},"timezone":"Europe/London"}}],"pagination":{"page":1,"per_page":20,"total":2},"meta":{"request_id":"abc-123","response_time_ms":42}}
```

That is a relatively simple response. Production API responses routinely exceed 10KB, with nested objects five or six levels deep. Reading this as raw text is an exercise in bracket-counting frustration.

### Format JSON for Safari

[Format JSON for Safari](/apps/format-json/) detects JSON responses and automatically renders them with:

- **Proper indentation.** Nested objects and arrays are visually indented, making the hierarchy immediately clear.
- **Syntax highlighting.** Strings, numbers, booleans, null values, and keys are color-coded. Spotting a `null` where you expected a string becomes trivial.
- **Collapsible nodes.** Click any object or array to collapse it. When debugging a 200-element array, collapse the ones you have already inspected and focus on the entries that matter.
- **Search.** `Cmd+F` or tap the search icon to find specific keys or values within large responses. Looking for a specific user ID in a paginated response? Search beats scrolling.
- **Copy path.** Right-click any value to copy its JSON path (`users[0].settings.notifications.push`), which you can paste directly into your code.

This turns JSON debugging from a manual parsing exercise into a visual navigation experience.

{% include blog-cta.html app_slug="format-json" %}

## Technology Detection: Understanding What You're Looking At

When you encounter a website with impressive performance, an elegant animation, or a peculiar rendering behavior, the natural developer instinct is to ask: "What is this built with?"

### Manual Detection Techniques

You can identify many technologies manually:

```javascript
// Check for React
document.querySelector('[data-reactroot]') !== null  // React 15+
document.querySelector('#__next') !== null            // Next.js
window.__NEXT_DATA__                                 // Next.js (data)

// Check for Vue
document.querySelector('[data-v-]') !== null          // Vue with scoped CSS
window.__VUE__                                       // Vue 2
window.__VUE_DEVTOOLS_GLOBAL_HOOK__                  // Vue DevTools installed

// Check for Angular
window.getAllAngularRootElements()                    // Angular 2+
window.angular                                       // AngularJS

// Check for jQuery
window.jQuery && jQuery.fn.jquery                    // Returns version string

// Check for WordPress
document.querySelector('meta[name="generator"][content*="WordPress"]')
document.querySelector('link[href*="wp-content"]')

// Check for Shopify
window.Shopify
```

But manual detection is tedious and incomplete. It requires knowing the fingerprint of each technology in advance, and it misses server-side technologies, CDN providers, analytics tools, and the dozens of other components that make up a modern web stack.

### Automated Detection with Built With

[Built With](/apps/built-with/) automates technology identification by analyzing page source, HTTP headers, JavaScript global variables, cookie patterns, DNS records, and script signatures. It detects:

**Frontend frameworks:** React, Vue, Angular, Svelte, Solid, Preact, Alpine.js, htmx, jQuery, and dozens more, including specific version numbers when detectable.

**Meta-frameworks:** Next.js, Nuxt, Remix, SvelteKit, Astro, Gatsby — distinguished from their underlying framework.

**CMS platforms:** WordPress (including theme detection), Shopify, Squarespace, Webflow, Ghost, Contentful, Sanity, Strapi.

**Analytics and tracking:** Google Analytics (UA and GA4), Mixpanel, Amplitude, Hotjar, FullStory, Segment, Plausible, Fathom.

**Hosting and CDN:** Cloudflare, AWS CloudFront, Vercel, Netlify, Fastly, Akamai, Google Cloud CDN.

**Server-side indicators:** PHP, Node.js, Ruby, Python, Go, ASP.NET — detected through response headers, cookie names, and URL patterns.

**Advertising:** Google AdSense, Carbon Ads, BuySellAds, and programmatic advertising platforms.

**Practical applications:**

- **Architecture research.** Before choosing a tech stack for a new project, survey how similar companies have built their sites.
- **Performance benchmarking.** If a competitor's site loads noticeably faster, knowing their hosting and CDN stack helps you understand why.
- **Client consulting.** When evaluating a potential client's site, understanding their current stack informs your proposal and migration estimate.
- **Job preparation.** Before a technical interview, check what technologies the company uses in production.

{% include blog-cta.html app_slug="built-with" %}

## Safari-Specific CSS Debugging: Common Issues and Fixes

WebKit has rendering behaviors that differ from Blink (Chrome/Edge) and Gecko (Firefox). Here are the issues that most frequently require Safari-specific debugging:

### The 100vh Problem

On mobile Safari, `100vh` includes the area behind the address bar, causing content to be hidden when the bar is visible. This has bitten almost every web developer at some point.

```css
/* Broken on mobile Safari */
.hero {
  height: 100vh;
}

/* Fix: Use the dynamic viewport unit (Safari 15.4+) */
.hero {
  height: 100dvh;
}

/* Fallback for older Safari versions */
.hero {
  height: 100vh;
  height: -webkit-fill-available;
}
```

### Flexbox Gaps

Safari did not support the `gap` property in flexbox layouts until Safari 14.1 (released April 2021). If you need to support older Safari versions:

```css
/* Modern approach */
.container {
  display: flex;
  gap: 16px;
}

/* Safari <14.1 fallback */
.container {
  display: flex;
}
.container > * + * {
  margin-left: 16px;
}
```

### Backdrop Filter

Safari was the first browser to support `backdrop-filter`, but it requires the `-webkit-` prefix on older versions:

```css
.glass-panel {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.3);
}
```

### Safe Area Insets

For sites that need to account for the iPhone notch and Dynamic Island:

```css
.fixed-bottom-bar {
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
```

Test these with Web Inspector on an actual device — the safe area values are zero in desktop simulations.

### Scroll Behavior Differences

Safari handles `overflow: scroll` differently from Chrome in several edge cases:

```css
/* Elastic (bounce) scrolling — Safari only, cannot be disabled via CSS */
/* Momentum scrolling on iOS */
.scroll-container {
  -webkit-overflow-scrolling: touch; /* Deprecated but still functional */
  overflow-y: auto;
}

/* Prevent body scroll when modal is open — Safari needs special handling */
body.modal-open {
  position: fixed;
  width: 100%;
  overflow: hidden;
}
```

## Debugging Performance in Safari

### The Timeline Tab

Safari's Timeline tab (equivalent to Chrome's Performance tab) records rendering performance, script execution, layout recalculations, and memory usage.

To profile a page:

1. Open Web Inspector and switch to the **Timelines** tab
2. Click the record button (or press `Cmd + Shift + R` to record with a page reload)
3. Interact with the page to capture the behavior you want to analyze
4. Stop recording and analyze the results

**Key things to look for:**

- **Layout thrashing.** Rapid alternation between reading layout properties (like `offsetHeight`) and writing style properties forces the browser to recalculate layout multiple times per frame. This appears as clustered purple bars in the timeline.
- **Long tasks.** Any JavaScript execution block longer than 50ms risks janking the UI. Look for wide yellow bars.
- **Excessive paint operations.** If elements repaint on every scroll event, you likely have a `position: fixed` element or a CSS property that triggers paint (like `box-shadow` changes on hover).

### Memory Debugging

Safari's Web Inspector includes a dedicated **Memory** tab for tracking JavaScript memory usage, identifying leaks, and analyzing heap snapshots. This is particularly important for single-page applications where the page is never fully reloaded and memory can accumulate.

## Things Most Debugging Guides Don't Tell You

**Safari's JavaScript engine (JavaScriptCore) has different performance characteristics than V8.** Code that runs fast in Chrome may perform differently in Safari. In particular, Safari optimizes for different patterns in its JIT compiler. If you see a performance discrepancy between browsers, profile in both.

**`-webkit-` prefixes still matter.** While most modern CSS features work without prefixes, some Safari-specific features still require them. Use `caniuse.com` as your reference and always test in Safari.

**Safari extensions can modify page content.** If you see unexpected behavior on a page, try disabling all extensions first. An extension that injects CSS or JavaScript can cause debugging confusion.

**Private Browsing mode in Safari disables some APIs.** `localStorage` throws exceptions in Private Browsing on older Safari versions. `IndexedDB` has size limitations. If your site behaves differently in Private Browsing, test storage API access explicitly.

**Safari updates are tied to macOS/iOS updates.** Unlike Chrome and Firefox, which update independently, Safari only receives major updates with OS releases (minor patches come via Software Update). This means you need to track WebKit nightly builds (`webkit.org/downloads/`) to preview upcoming changes and test compatibility before they reach stable Safari.

## Building Your Safari Debugging Workflow

A practical approach for cross-browser development with Safari as a target:

1. **Develop in your preferred browser** but open Safari periodically during development, not just at the end
2. **Use Web Inspector for Safari on your phone** to catch mobile-specific issues early
3. **Keep Format JSON for Safari active** for any API work — the time savings compound daily
4. **Check Built With on reference sites** when making architectural decisions
5. **Run Safari Technology Preview** alongside stable Safari for forward-compatibility testing

For developers who maintain their own sites, the debugging skills from this workflow feed directly into [on-page SEO analysis](/blog/developer-tools/practical-guide-on-page-seo-analysis/) — many SEO issues (missing meta tags, broken heading hierarchies, unoptimized images) are quickly diagnosed through element inspection. And when converting web content to other formats, understanding the HTML structure through inspection makes [HTML to Markdown conversion](/blog/developer-tools/how-to-convert-html-to-markdown-documentation/) more predictable.

For more Safari extension recommendations beyond debugging, our roundup of [the best developer tools and extensions for Safari](/blog/safari-extensions/best-developer-tools-and-extensions-for-safari/) covers the broader landscape, and [extracting emails and links from websites](/blog/safari-extensions/how-to-extract-emails-and-links-from-any-website/) demonstrates practical data extraction techniques using browser extensions.
