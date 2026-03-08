---
layout: post
title: "The Complete Website Audit Checklist You Can Run from Safari"
description: "Run a full website audit from Safari on Mac. Covers SEO, performance, accessibility, broken links, tech stack analysis, and structured data validation with Safari extensions."
date: 2026-05-16
categories: [developer-tools]
tags: [website-audit, seo, performance, accessibility]
silo: developer-tools
pillar: developer-tools
related_apps: [seo-for-safari, web-inspector-for-safari, built-with, link-gopher, audit-plus-plus, format-json-for-safari]
---

A comprehensive website audit typically involves installing Chrome, downloading DevTools extensions, setting up Node.js-based crawlers, configuring Lighthouse CI, and juggling a half-dozen different tools — each with its own interface, output format, and learning curve. For agency professionals running audits across dozens of client sites, that toolchain overhead is unavoidable. But for developers, small business owners, freelancers, and marketers who need to audit a site quickly and thoroughly, that setup cost is a barrier that often means audits simply do not get done.

Safari on Mac, equipped with the right extensions, can run a complete website audit covering SEO, performance, accessibility, link integrity, tech stack analysis, and structured data validation — without leaving the browser. No terminal commands. No separate applications. No Chrome required.

This guide is a systematic checklist you can follow from top to bottom, running each check directly in Safari. Bookmark it, and you have a repeatable audit process for any website.

## Before You Start: Prepare Your Safari Audit Toolkit

Install these extensions from the Mac App Store before beginning your first audit. Each one handles a specific category of checks:

- **[SEO for Safari](/apps/seo-for-safari/)** — On-page SEO analysis including meta tags, headings, word count, and keyword density.
- **[Web Inspector for Safari](/apps/web-inspector-for-safari/)** — DOM inspection, CSS debugging, and source code analysis.
- **[Built With](/apps/built-with/)** — Technology stack identification.
- **[Link Gopher](/apps/link-gopher/)** — Link extraction and broken link detection.
- **[Audit++](/apps/audit-plus-plus/)** — Performance and accessibility auditing.
- **[Format JSON for Safari](/apps/format-json-for-safari/)** — JSON formatting for API response and structured data inspection.

Enable all extensions in Safari > Settings > Extensions. You are now ready to audit any site you visit.

## Part 1: SEO Audit

SEO issues are the most common reason for website audits. These checks cover the technical and on-page factors that directly affect search visibility.

### 1.1 Title Tags

**What to check:**
- Every page has a unique `<title>` tag.
- Title length is between 50 and 60 characters (Google truncates after ~60 characters in search results).
- The primary keyword appears in the title, preferably near the beginning.
- The title is descriptive and compelling — it is your search result headline.

**How to check in Safari:** Open [SEO for Safari](/apps/seo-for-safari/) on the page. It displays the title tag with character count and highlights issues like missing titles, duplicate titles (across a site crawl), or titles that exceed the recommended length.

### 1.2 Meta Descriptions

**What to check:**
- Every page has a unique meta description.
- Length is between 150 and 160 characters.
- The description includes the primary keyword naturally.
- The description accurately summarizes the page content and includes a call to action.

**Common issue:** Many sites either have no meta descriptions (forcing Google to auto-generate snippets from page content) or use the same description across every page. Both reduce click-through rates from search results.

### 1.3 Heading Hierarchy

**What to check:**
- Each page has exactly one `<h1>` tag.
- Headings follow a logical hierarchy: H1 > H2 > H3. No skipping levels (e.g., jumping from H1 to H3).
- Headings contain relevant keywords without keyword stuffing.
- Headings accurately describe the content that follows them.

**How to check:** SEO for Safari displays the full heading structure of any page, flagging missing H1s, multiple H1s, and broken hierarchy.

### 1.4 Image Optimization

**What to check:**
- All images have descriptive `alt` attributes. Missing alt text is both an SEO issue (search engines cannot read images) and an accessibility violation (screen readers cannot describe the image).
- Image file sizes are optimized. Images over 200KB on a standard web page indicate a lack of compression or inappropriate format choice.
- Images use modern formats (WebP, AVIF) with fallbacks for older browsers.
- Images specify `width` and `height` attributes to prevent layout shifts during loading.

### 1.5 URL Structure

**What to check:**
- URLs are readable and descriptive: `/products/blue-running-shoes` not `/p?id=3847`.
- URLs use hyphens as word separators (not underscores).
- URLs are lowercase (mixed case can cause duplicate content issues on case-sensitive servers).
- URLs do not contain unnecessary parameters, session IDs, or tracking codes.

### 1.6 Canonical Tags

**What to check:**
- Every page has a `<link rel="canonical">` tag pointing to its preferred URL.
- The canonical URL matches the page's actual URL (unless intentionally consolidating duplicate content).
- Paginated content uses proper canonical handling — either self-referencing canonicals with `rel="prev"/"next"` or canonical to the first page, depending on your SEO strategy.

**How to check:** View the page source via [Web Inspector for Safari](/apps/web-inspector-for-safari/) and search for `canonical` in the `<head>` section.

{% include blog-cta.html app_slug="seo-for-safari" %}

## Part 2: Performance Audit

Page speed directly affects both user experience and SEO. Google's Core Web Vitals are now ranking factors, and pages that load slowly lose visitors at a measurable rate — a 2024 Portent study found that conversion rates drop by an average of 4.42% for every additional second of load time.

### 2.1 Core Web Vitals

**Largest Contentful Paint (LCP):** Measures when the largest visible element finishes loading. Target: under 2.5 seconds. Common causes of poor LCP: unoptimized hero images, slow server response, render-blocking JavaScript.

**First Input Delay (FID) / Interaction to Next Paint (INP):** Measures responsiveness to user interaction. Target: under 200ms. Common causes of poor INP: heavy JavaScript execution, long tasks blocking the main thread, excessive third-party scripts.

**Cumulative Layout Shift (CLS):** Measures visual stability — how much the page layout shifts during loading. Target: under 0.1. Common causes: images without dimensions, dynamically injected content, late-loading fonts.

**How to check:** [Audit++](/apps/audit-plus-plus/) runs performance checks directly in Safari and reports Core Web Vitals metrics along with specific recommendations for improvement.

### 2.2 Resource Loading

**What to check:**
- Total page weight (all resources combined). Target: under 3 MB for content pages, under 5 MB for media-heavy pages.
- Number of HTTP requests. Every request adds latency. Target: under 50 requests for a typical page.
- Render-blocking resources — CSS and JavaScript files that prevent the page from displaying until they load. These should be minimized, deferred, or inlined.
- Third-party resource impact. Analytics, ads, chat widgets, and social embeds often account for 50-70% of total page weight and request count.

**How to check:** Use Web Inspector for Safari to open the Network tab. Reload the page and observe the waterfall view — the visual timeline showing when each resource loads and how long it takes.

### 2.3 Caching Headers

**What to check:**
- Static assets (images, CSS, JavaScript, fonts) have `Cache-Control` headers with appropriate `max-age` values. Static assets that rarely change should have long cache durations (1 year).
- HTML pages have short or no cache durations to ensure users see fresh content.
- ETags are used for validation caching on resources that change periodically.

**How to check:** In Web Inspector's Network tab, click any resource to view its response headers. Look for `Cache-Control`, `Expires`, and `ETag` headers.

## Part 3: Accessibility Audit

Web accessibility is not optional — it is a legal requirement in many jurisdictions (ADA in the US, EAA in the EU) and affects approximately 15% of the global population who live with some form of disability, according to the World Health Organization.

### 3.1 Color Contrast

**What to check:**
- Text has a contrast ratio of at least 4.5:1 against its background (WCAG AA standard).
- Large text (18pt or larger, or 14pt bold) has a minimum contrast ratio of 3:1.
- Interactive elements (buttons, links, form controls) are distinguishable by more than just color — they should also have a visible shape difference.

### 3.2 Keyboard Navigation

**What to check:**
- Every interactive element is accessible via keyboard (Tab key navigation).
- Focus indicators are visible — you can see which element is currently focused.
- Focus order follows a logical sequence (typically left-to-right, top-to-bottom).
- No keyboard traps — you can Tab into and out of every element, including modals, dropdowns, and embedded content.

**How to test:** Put your mouse aside and try navigating the entire page using only the keyboard. Tab through every element. If you get stuck, there is a keyboard trap. If you cannot reach an interactive element, it is inaccessible.

### 3.3 ARIA and Semantic HTML

**What to check:**
- The page uses semantic HTML elements (`<nav>`, `<main>`, `<article>`, `<aside>`, `<header>`, `<footer>`) rather than generic `<div>` elements for page structure.
- ARIA labels are used correctly on elements that lack visible text labels (icon buttons, decorative links, form inputs without visible labels).
- Dynamic content changes are announced to screen readers via ARIA live regions.

**How to check:** Use [Web Inspector for Safari](/apps/web-inspector-for-safari/) to examine the DOM structure. Look for semantic elements and verify ARIA attributes.

{% include blog-cta.html app_slug="audit-plus-plus" %}

## Part 4: Link Integrity Audit

Broken links damage both user experience and SEO. A 2023 Ahrefs study found that the average website has 5.2% broken internal links — most of which the site owner is unaware of.

### 4.1 Internal Link Check

**What to check:**
- All internal links resolve to live pages (no 404 errors).
- No redirect chains (links that redirect through multiple URLs before reaching the destination).
- Important pages are internally linked from multiple relevant pages (not orphaned).
- Anchor text is descriptive — "click here" is poor; "view our pricing" is better.

**How to check:** [Link Gopher](/apps/link-gopher/) extracts every link from the current page and can identify broken links by checking their HTTP status codes. Run it on key pages — homepage, main navigation pages, and popular content — to catch broken links.

### 4.2 External Link Check

**What to check:**
- External links point to live, relevant pages.
- External links open in new tabs (using `target="_blank"`) where appropriate.
- External links to untrusted or user-generated content use `rel="nofollow"` or `rel="ugc"`.
- No links point to expired domains, parked pages, or redirected URLs.

## Part 5: Technology Stack Analysis

Understanding what technologies a website uses helps diagnose issues and identify improvement opportunities.

### 5.1 Frontend Technologies

**What to check:**
- What CMS or static site generator powers the site (WordPress, Shopify, Next.js, etc.).
- Which JavaScript frameworks are loaded and their versions.
- Whether outdated libraries are in use (jQuery 1.x, Angular 1.x, etc.).
- What CSS framework is used and whether it is adding unused bloat.

**How to check:** [Built With](/apps/built-with/) identifies technologies used by any website you visit in Safari. It detects CMS platforms, JavaScript libraries, analytics tools, advertising networks, hosting providers, and CDN services.

### 5.2 Third-Party Services

**What to check:**
- Analytics tools (Google Analytics, Plausible, Fathom, etc.) and whether they are loading correctly.
- Marketing tools (HubSpot, Mailchimp, Intercom, etc.) and their performance impact.
- CDN usage and configuration.
- Payment processors (if e-commerce).
- Security certificates (SSL/TLS configuration).

## Part 6: Structured Data Validation

Structured data (Schema.org markup) enables rich snippets in search results — star ratings, FAQs, product prices, event dates, and recipe cards. Correctly implemented structured data can increase click-through rates by 20-30% for pages that earn rich results.

### 6.1 Schema.org Markup Check

**What to check:**
- Appropriate schema types are implemented for the content (Article, Product, LocalBusiness, FAQ, HowTo, Recipe, Event, etc.).
- Required properties for each schema type are present and correctly formatted.
- No schema errors or warnings.
- Schema data matches visible page content (Google penalizes mismatched structured data).

**How to check:** View the page source to find `<script type="application/ld+json">` blocks or microdata attributes. Use [Format JSON for Safari](/apps/format-json-for-safari/) to format and validate the JSON-LD structured data, making it readable and easy to check for errors.

### 6.2 Open Graph and Twitter Cards

**What to check:**
- `og:title`, `og:description`, `og:image`, and `og:url` tags are present.
- Twitter Card meta tags are present (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).
- Social share images are the correct dimensions (1200x630 for OG, 1200x628 for Twitter).

For a deeper dive into on-page SEO analysis techniques, see the [practical guide to on-page SEO analysis](/blog/developer-tools/practical-guide-on-page-seo-analysis/) and the roundup of [best developer tools and extensions for Safari](/blog/developer-tools/best-developer-tools-and-extensions-for-safari/).

## The 30-Minute Quick Audit Checklist

When you do not have time for a full audit, this abbreviated checklist covers the highest-impact items in approximately 30 minutes:

1. **Title tags and meta descriptions** on the top 5 most important pages (5 min).
2. **Core Web Vitals** on the homepage and one content page (5 min).
3. **Broken link check** on the homepage and main navigation pages (5 min).
4. **Mobile responsiveness** — resize Safari to mobile width and check layout (3 min).
5. **Image alt text** on the homepage (3 min).
6. **Heading hierarchy** on one content page (2 min).
7. **Structured data check** on the homepage (3 min).
8. **SSL certificate** — verify the padlock icon and check expiration (1 min).
9. **Tech stack overview** with Built With (2 min).
10. **Keyboard navigation test** on the homepage (1 min).

This 30-minute audit catches the most common and highest-impact issues. Any red flags from the quick audit warrant a full audit of that specific category.

A website audit is not a one-time event. Schedule a full audit quarterly and a quick audit monthly. The web changes constantly — plugins update, content is added, third-party services modify their scripts, and search engine requirements evolve. The sites that rank well and serve their users effectively are the sites where someone runs the checklist regularly, finds the issues before visitors do, and fixes them before search engines notice.
