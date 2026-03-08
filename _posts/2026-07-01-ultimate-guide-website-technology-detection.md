---
layout: post
title: "The Ultimate Guide to Detecting What Technology a Website Uses"
description: "Learn to identify any website's tech stack through HTTP headers, JavaScript globals, CSS fingerprints, CMS detection, CDN identification, and source analysis."
date: 2026-07-01
categories: [developer-tools]
tags: [technology-detection, web-development, competitive-analysis, tech-stack]
silo: developer-tools
pillar: developer-tools
related_apps: [built-with, web-inspector, seo-for-safari]
---

## Why Knowing a Website's Technology Stack Matters

Every website is a layer cake of technology decisions. The content management system, the JavaScript framework, the CSS methodology, the hosting provider, the CDN, the analytics platform, the A/B testing tool, the payment processor, and dozens of other components all leave detectable fingerprints in the publicly accessible surface of the site.

For web developers, this information is professionally valuable. Understanding what tools successful competitors use informs technology selection decisions. Seeing which frameworks are gaining adoption across your industry provides market intelligence. Identifying the tech stack of a potential client helps you prepare accurate project proposals and migration estimates.

For business strategists, technology detection reveals competitive positioning. A competitor using enterprise-grade infrastructure (Akamai CDN, Salesforce CRM, Adobe Analytics) is making different investment decisions than one running on WordPress with a shared hosting plan. These technology choices reflect budgets, priorities, and organizational maturity.

For security researchers, exposed technology versions reveal potential vulnerabilities. A website running WordPress 5.8 (released 2021) without updates has known security vulnerabilities that a current version does not. Visible server versions, framework versions, and plugin versions are reconnaissance data.

This guide covers both automated tools and manual techniques for identifying the technology behind any website, from quick identification to deep forensic analysis.

## HTTP Headers: The First Layer of Detection

HTTP response headers are sent by the web server with every page request. They are invisible to casual visitors but contain explicit technology declarations and implicit fingerprints.

### How to View HTTP Headers

**In Safari on Mac:** Open Web Inspector (Develop > Show Web Inspector or Option+Command+I), click the Network tab, select the initial page request, and look at the Response Headers section.

**Using curl:** In Terminal, `curl -I https://example.com` returns only the headers without downloading the page body.

**Using browser extensions:** [Web Inspector](/apps/web-inspector/) provides accessible header analysis without requiring the full Safari Developer Tools.

### What Headers Reveal

**Server header:** Often explicitly names the web server software. `Server: nginx/1.24.0` identifies both the software and version. `Server: Apache/2.4.57` does the same. Some servers omit or obscure this header for security, showing only `Server: nginx` or `Server: cloudflare`.

**X-Powered-By:** Many application frameworks add this header. `X-Powered-By: PHP/8.2.10` reveals the server-side language and version. `X-Powered-By: Express` indicates a Node.js Express application. `X-Powered-By: ASP.NET` identifies Microsoft's framework.

**Set-Cookie:** Cookie names often fingerprint specific platforms. `PHPSESSID` indicates PHP. `JSESSIONID` indicates Java. `ASP.NET_SessionId` indicates .NET. `_shopify_y` and `_shopify_s` identify Shopify stores.

**X-Generator:** Some CMS platforms add this header. WordPress does not use it in headers but includes a `<meta name="generator">` tag in the HTML. Drupal adds `X-Generator: Drupal` with the version number.

**Content-Security-Policy:** The CSP header lists all domains the site is authorized to load resources from, revealing CDNs, analytics services, font providers, ad networks, and third-party integrations.

**Via and X-Cache:** These headers identify CDN and caching layers. `Via: 1.1 varnish` indicates a Varnish caching server. `X-Cache: Hit from cloudfront` identifies Amazon CloudFront. `cf-cache-status: HIT` identifies Cloudflare.

### Common Header Fingerprints

| Header Pattern | Technology |
|---|---|
| `Server: cloudflare` | Cloudflare CDN/proxy |
| `X-Vercel-Id` | Vercel hosting |
| `X-Netlify-*` | Netlify hosting |
| `Server: GitHub.com` | GitHub Pages |
| `X-Amz-*` | Amazon Web Services |
| `X-GoogApps-*` | Google Cloud Platform |
| `X-Shopify-Stage` | Shopify |
| `X-WP-*` | WordPress REST API |

## JavaScript Global Objects: Framework Fingerprinting

JavaScript frameworks and libraries create global objects and variables that are accessible from the browser's developer console. These are reliable fingerprints because they are fundamental to how the frameworks operate.

### How to Check

Open Safari's Web Inspector (Develop > Show Web Inspector), click the Console tab, and type the following checks:

### Common Framework Detection

**React:** Check for `__REACT_DEVTOOLS_GLOBAL_HOOK__` or inspect elements for `_reactRootContainer` data attributes. React 18+ applications render into root elements identifiable through `document.getElementById('root')._reactRootContainer`.

**Vue.js:** Type `window.__VUE__` or check for `__vue__` property on DOM elements. Vue 3 applications expose `__VUE_DEVTOOLS_GLOBAL_HOOK__`.

**Angular:** Check `window.ng` or `window.getAllAngularRootElements()`. Angular applications typically have an `ng-version` attribute on the root element.

**jQuery:** `window.jQuery` or `window.$` returns the jQuery function if present. `jQuery.fn.jquery` returns the version number.

**Next.js:** Check for `window.__NEXT_DATA__`, which contains the page props, build ID, and route information. This is a definitive Next.js identifier.

**Nuxt.js:** Check for `window.__NUXT__`, which contains the Nuxt.js state and configuration.

**Svelte:** Svelte compiles away at build time, making it harder to detect. Look for `__svelte` in element attributes or specific compiled code patterns in the source.

**Webpack:** Check for `window.webpackJsonp` (Webpack 4) or `self.webpackChunk` (Webpack 5). While Webpack is a build tool rather than a framework, its presence indicates a modern JavaScript build pipeline.

**Google Analytics:** `window.ga` (Universal Analytics), `window.gtag` (GA4), or `window.dataLayer` (Google Tag Manager).

{% include blog-cta.html app_slug="built-with" %}

## CSS Framework Fingerprints

CSS frameworks leave characteristic patterns in class names, CSS custom properties, and structural conventions.

### Class Name Patterns

**Tailwind CSS:** Utility-first class names like `flex`, `pt-4`, `text-center`, `bg-blue-500`, `hover:bg-blue-700`. The density and specificity of these utility classes is distinctive. Look for classes with responsive prefixes: `md:flex`, `lg:grid-cols-3`.

**Bootstrap:** Classes like `container`, `row`, `col-md-6`, `btn btn-primary`, `navbar`, `card`. Bootstrap 5 dropped jQuery dependency, so `bootstrap` in the source but no jQuery indicates Bootstrap 5+.

**Bulma:** Classes like `columns`, `column`, `is-primary`, `is-large`, `hero`, `notification`. The `is-*` modifier pattern is distinctive.

**Foundation:** Classes like `grid-container`, `grid-x`, `cell`, `callout`, `top-bar`. Foundation uses a `grid-*` naming convention distinct from CSS Grid.

**Material Design (MUI/Vuetify/Angular Material):** Classes with `mdc-` (Material Design Components), `MuiButton-root` (MUI/React), `v-btn` (Vuetify/Vue), or `mat-` (Angular Material) prefixes.

### CSS Custom Properties

Modern frameworks increasingly use CSS custom properties (variables) with distinctive naming patterns:

- `--tw-*` variables indicate Tailwind CSS
- `--bs-*` variables indicate Bootstrap 5
- `--mdc-*` variables indicate Material Design Components
- `--chakra-*` variables indicate Chakra UI

Inspect any element in Web Inspector and look at the Computed Styles to see which custom properties are defined.

## CMS Detection: Identifying the Content Platform

Content management systems are usually detectable through multiple signals.

### WordPress

WordPress is the most commonly detected CMS, powering approximately 43% of all websites (W3Techs, 2025).

Detection signals:
- `<meta name="generator" content="WordPress X.X.X">` in the HTML head
- `/wp-content/` and `/wp-includes/` paths in resource URLs
- `/wp-json/` REST API endpoint (try navigating to `example.com/wp-json/`)
- `wp-login.php` login page
- `xmlrpc.php` endpoint
- Theme and plugin paths in CSS/JS URLs: `/wp-content/themes/theme-name/`, `/wp-content/plugins/plugin-name/`

### Shopify

- `cdn.shopify.com` in resource URLs
- Shopify-specific cookies (`_shopify_y`, `_shopify_s`)
- `/cart.json` endpoint returns JSON cart data
- `Shopify.theme` JavaScript object
- Meta tags with `shopify` references

### Squarespace

- `static.squarespace.com` in resource URLs
- `<meta property="og:site_name">` often contains "Squarespace"
- JavaScript reference to `Static.SQUARESPACE_CONTEXT`
- Distinctive URL patterns for pages and blog posts

### Wix

- `static.wixstatic.com` in resource URLs
- `<meta name="generator" content="Wix.com...">`
- Wix-specific DOM structure with `#SITE_CONTAINER` and `#masterPage`

### Drupal

- `X-Generator: Drupal` response header
- `<meta name="Generator" content="Drupal">`
- `/misc/drupal.js` or `drupal.js` in script sources
- `Drupal.settings` JavaScript object

### Ghost

- `<meta name="generator" content="Ghost X.X">`
- `/ghost/api/` API endpoints
- Ghost-specific theme structure in source

### Webflow

- Webflow class naming patterns (long, auto-generated class names)
- `webflow.js` script
- `data-wf-site` and `data-wf-page` attributes on the body tag

## CDN Identification

Content Delivery Networks are identifiable through headers, DNS records, and resource URLs.

### Header-Based Detection

| CDN | Identifying Headers |
|---|---|
| Cloudflare | `Server: cloudflare`, `cf-ray`, `cf-cache-status` |
| Amazon CloudFront | `X-Cache: Hit from cloudfront`, `X-Amz-Cf-*` |
| Fastly | `Via: 1.1 varnish`, `X-Served-By`, `X-Cache: HIT` |
| Akamai | `X-Akamai-*`, Server header variations |
| Vercel | `X-Vercel-Id`, `X-Vercel-Cache` |
| Netlify | `X-NF-Request-ID`, `Server: Netlify` |

### DNS-Based Detection

Using `dig` or `nslookup` in Terminal reveals CNAME records that point to CDN domains:

- `*.cloudfront.net` → Amazon CloudFront
- `*.cdn.cloudflare.net` → Cloudflare
- `*.fastly.net` → Fastly
- `*.akamaiedge.net` → Akamai
- `*.netlify.app` → Netlify

## Analytics and Tracking Detection

Analytics platforms are detectable through JavaScript objects, network requests, and cookies.

### JavaScript Detection

```
// Google Analytics
window.ga !== undefined           // Universal Analytics
window.gtag !== undefined         // GA4
window.dataLayer !== undefined    // Google Tag Manager

// Other platforms
window._paq !== undefined         // Matomo
window.amplitude !== undefined    // Amplitude
window.mixpanel !== undefined     // Mixpanel
window.heap !== undefined         // Heap
window.plausible !== undefined    // Plausible
window.fathom !== undefined       // Fathom
```

### Network Request Detection

In Web Inspector's Network tab, filter by "XHR" or "JS" to see requests to analytics endpoints:

- `google-analytics.com` or `analytics.google.com`
- `cdn.segment.com` (Segment)
- `api.amplitude.com` (Amplitude)
- `api-js.mixpanel.com` (Mixpanel)
- `plausible.io/api/event` (Plausible)
- `cdn.usefathom.com` (Fathom)
- `static.hotjar.com` (Hotjar)

### Privacy Implications

The analytics platforms a website uses reveals its data practices. Sites using Google Analytics send visitor data to Google. Sites using privacy-focused analytics (Plausible, Fathom, Matomo self-hosted) are making a conscious choice to protect visitor privacy. This information is relevant for users concerned about their data, and tools like [SEO for Safari](/apps/seo-for-safari/) can surface these details during site analysis.

## Source Code Analysis

Viewing a page's source code provides the deepest level of technology detection.

### Viewing Source in Safari

**Mac:** Right-click the page > "Show Page Source" or Develop > Show Page Source (Option+Command+U).

**iPhone:** Not directly available, but Web Inspector connected from a Mac can view the source of pages loaded on a connected iPhone.

### What to Look For

**HTML comments:** Developers sometimes leave revealing comments: `<!-- Built with Hugo -->`, `<!-- Gatsby page -->`, `<!-- Generated by Jekyll -->`.

**Meta tags:** Beyond the generator tag, look for Open Graph tags (`og:*`), Twitter Card tags, and custom meta tags that reveal CMS, framework, or deployment platform.

**Script and link tags:** JavaScript and CSS file paths contain framework names, version numbers, and build tool identifiers. A path like `/static/js/main.a1b2c3d4.js` with a hash indicates a build tool (Create React App, Vite, Webpack). Paths like `/assets/application-a1b2c3d4.css` suggest Rails Asset Pipeline.

**Data attributes:** Custom data attributes often reveal frameworks: `data-react-helmet`, `data-gatsby-*`, `data-next-head`, `data-vue-*`.

**Structured data (JSON-LD):** Many sites embed structured data for SEO that reveals the CMS and plugins used: `"@type": "WebSite"` with `"potentialAction"` configurations specific to WordPress or Shopify search.

{% include blog-cta.html app_slug="web-inspector" %}

## API Endpoint Patterns

Attempting to access common API endpoints reveals the underlying platform:

| Endpoint | Platform |
|---|---|
| `/wp-json/wp/v2/posts` | WordPress REST API |
| `/graphql` | GraphQL API (various platforms) |
| `/api/v1/*` | Generic REST API |
| `/cart.json` | Shopify |
| `/_api/v2/*` | Wix |
| `/ghost/api/content/*` | Ghost |

**Note:** Only probe endpoints on websites you own or have permission to test. Automated endpoint scanning of third-party websites may violate terms of service and could be considered unauthorized access in some jurisdictions.

## Automated Detection Tools

### Browser Extensions

[Built With](/apps/built-with/) automates the detection process described above, analyzing HTTP headers, JavaScript objects, CSS patterns, and HTML metadata to identify a website's technology stack. This saves the manual effort of checking each signal individually and catches signals that manual inspection might miss.

For developers who need deeper page analysis beyond technology detection, [Web Inspector](/apps/web-inspector/) provides comprehensive page structure analysis, resource loading diagnostics, and performance metrics.

### Online Services

Several web-based services provide technology detection:

- **BuiltWith.com:** Comprehensive technology profiles for millions of websites, including historical data showing technology changes over time
- **Wappalyzer.com:** Open-source technology detection with a browser extension and API
- **WhatRuns.com:** Technology detection focused on frameworks, plugins, and themes
- **SimilarTech.com:** Technology usage statistics and competitive analysis

These services are useful for bulk analysis across multiple sites, competitive research, and historical tracking.

## A Practical Competitive Intelligence Workflow

Combining these techniques into a systematic workflow produces actionable competitive intelligence:

### Step 1: Identify Competitors

List the 5-10 most relevant competitors or aspirational websites in your space.

### Step 2: Quick Stack Detection

Use an automated detection tool (extension or online service) for each competitor. Record the major technology categories: CMS, hosting, CDN, JavaScript framework, analytics, and e-commerce platform (if applicable).

### Step 3: Deep Analysis of Key Competitors

For the 2-3 most important competitors, perform manual analysis:

- Inspect HTTP headers for server, caching, and security configurations
- Check JavaScript globals for framework versions and configurations
- View source for build tool fingerprints and deployment patterns
- Check network requests for third-party service integrations
- Test API endpoints for platform identification

### Step 4: Pattern Analysis

Look for patterns across competitors:
- Are most using the same CMS? This may indicate industry-standard tools.
- What analytics platforms are common? This reveals data maturity.
- What CDNs are used? This indicates performance investment.
- Are competitors using newer technologies (headless CMS, Jamstack, edge computing) or traditional approaches (monolithic CMS, server-rendered pages)?

### Step 5: Decision Making

Use the analysis to inform your own technology decisions:
- If all competitors use WordPress and you are considering a custom solution, you should be confident the custom approach provides clear advantages that justify the additional cost.
- If competitors are investing in performance infrastructure (CDN, edge computing, image optimization), performance is likely a competitive differentiator in your space.
- If competitors are adopting specific tools (Segment for analytics, Contentful for CMS), these tools may solve problems common to your industry.

### Step 6: Ongoing Monitoring

Technology stacks change. Set a quarterly reminder to re-check key competitors for major changes. A competitor migrating from WordPress to a headless CMS, or switching from Google Analytics to a privacy-focused alternative, signals strategic shifts worth understanding.

## Performance Analysis: Speed as a Technology Signal

A website's performance characteristics also reveal technology choices. Fast sites tend to use static site generators, CDNs, and optimized image pipelines. Slow sites tend to run unoptimized WordPress with excessive plugins or server-rendered applications without caching.

### Core Web Vitals as Fingerprints

Google's Core Web Vitals (Largest Contentful Paint, Cumulative Layout Shift, Interaction to Next Paint) vary systematically by technology stack. A 2024 HTTP Archive analysis found:

- **Static sites (Hugo, Jekyll, Eleventy):** Median LCP of 1.8 seconds. These sites serve pre-built HTML with minimal JavaScript, resulting in consistently fast loading.
- **Jamstack sites (Next.js, Nuxt.js, Gatsby):** Median LCP of 2.4 seconds. JavaScript hydration adds loading time, but CDN-served static assets keep performance reasonable.
- **WordPress:** Median LCP of 3.2 seconds. Performance varies enormously depending on hosting, plugins, and optimization. A well-optimized WordPress site can match static sites. A typical one is significantly slower.
- **Shopify:** Median LCP of 2.8 seconds. Shopify's managed infrastructure provides consistent but not exceptional performance.
- **Custom applications (Rails, Django, Express):** Median LCP varies from 1.5 to 5.0+ seconds depending on implementation, caching, and infrastructure.

You can check a site's performance using Chrome's Lighthouse audit or Safari's Web Inspector Performance tab. Consistently fast performance with minimal JavaScript points toward static generation. Slow initial loads with significant JavaScript execution suggest a client-rendered SPA (Single Page Application).

### Resource Loading Patterns

The Network tab in Web Inspector reveals loading patterns that fingerprint technology choices:

**Critical rendering path.** How many blocking resources (CSS, JavaScript) must load before the page renders? Frameworks like React and Angular typically have large blocking JavaScript bundles. Server-rendered pages with minimal JavaScript show faster initial rendering.

**Image optimization.** Modern sites use responsive images (srcset attribute), next-gen formats (WebP, AVIF), and lazy loading. The presence or absence of these techniques indicates the sophistication of the image pipeline and often points to specific tools (Cloudinary, Imgix, Next.js Image component).

**Font loading strategy.** How web fonts are loaded reveals development sophistication. `font-display: swap` prevents invisible text during font loading. Subsetting fonts to include only used characters reduces file sizes. Self-hosted fonts versus CDN-hosted fonts (Google Fonts, Adobe Fonts) indicate different privacy and performance trade-offs.

Using tools like [SEO for Safari](/apps/seo-for-safari/) provides structured analysis of these performance and technical signals directly within the browser, combining technology detection with SEO audit capabilities.

## Ethical Considerations

Technology detection using publicly available information (HTTP headers, HTML source, JavaScript objects) is generally considered legitimate research. This information is voluntarily exposed to every browser that visits the website.

However, certain practices cross ethical and legal lines:

- **Do not attempt to access admin panels, databases, or private APIs.** Testing `/wp-admin/` to confirm WordPress is fine. Attempting to log in is not.
- **Do not use version information to exploit vulnerabilities** on websites you do not own. Responsible disclosure (notifying the website owner) is the appropriate response if you discover a critical vulnerability.
- **Respect robots.txt and terms of service.** Automated scanning should honor rate limits and access restrictions.
- **Do not misrepresent your identity** or impersonate authorized users to gain access to restricted information.

Technology detection is a research activity. Treat it as such, with the same ethical standards you would apply to any professional research effort.

The web's openness means that every website tells you what it is built with, if you know where to look. The signals are in the headers, the source code, the JavaScript objects, and the network requests. Learning to read these signals is a fundamental skill for anyone who builds, manages, or competes on the web.
