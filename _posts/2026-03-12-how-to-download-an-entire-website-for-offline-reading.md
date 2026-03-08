---
layout: post
title: "How to Download an Entire Website for Offline Reading"
description: "Learn how to download complete websites for offline access using Safari extensions. Save documentation, articles, and entire sites for reading without an internet connection."
date: 2026-03-12
categories: [safari-extensions]
tags: [offline, website-download, archiving, safari]
silo: safari-extensions
pillar: safari-extensions
related_apps: [website-downloader, site-slurpr]
---

## 3.7 Billion People Are Still Offline — And the Rest of Us Sometimes Are Too

The International Telecommunication Union estimates that roughly 2.6 billion people worldwide lack regular internet access. But even among the connected, offline periods are more common than most people assume. Airplane cabins, underground transit systems, rural areas with dead zones, international travel with expensive roaming, camping trips, power outages, and ISP failures all create windows where web-dependent workflows grind to a halt.

The irony is acute: you might have 200 tabs of reference material, documentation, and research sitting in your browser — all of it instantly inaccessible the moment your connection drops. A saved bookmark is useless without connectivity. Even Safari's Reading List, while designed for offline reading, captures only the article text and often loses formatting, images, and navigation structure.

Downloading entire websites for offline access is the definitive solution to this problem. Rather than saving individual pages one at a time, you capture a complete site — every page, every image, every linked resource — in a form you can browse locally exactly as if you were online.

## How Website Downloading Works Under the Hood

Understanding the technical process helps you configure downloads effectively and troubleshoot when things go wrong.

A website downloader is essentially a specialized web crawler. Starting from a URL you provide, it:

1. **Fetches the starting page** and parses its HTML to identify all linked resources.
2. **Downloads linked assets** — images, CSS stylesheets, JavaScript files, fonts, and other resources needed to render the page correctly.
3. **Discovers linked pages** by extracting all hyperlinks from the HTML.
4. **Follows internal links** to additional pages within the same domain, repeating the fetch-parse-discover cycle for each page.
5. **Rewrites URLs** in the downloaded HTML files so that links between pages point to the local copies rather than the live website. This is what makes offline navigation work.
6. **Respects depth limits** to prevent runaway crawling — you control how many "link hops" from the starting page the crawler follows.

The result is a folder of HTML files, images, stylesheets, and other assets that, when opened in a browser, renders and navigates identically to the live website — no internet connection required.

### The Crawl Depth Parameter

Crawl depth is the most important setting to understand:

- **Depth 0** — downloads only the starting page and its direct assets (images, CSS, JS).
- **Depth 1** — downloads the starting page plus every page linked from it. For a documentation site's index page, this captures the entire first-level table of contents.
- **Depth 2** — follows links on the depth-1 pages as well. This captures two levels of navigation.
- **Depth 3+** — each increment exponentially increases the number of pages. A depth of 3 on a well-linked site can easily mean thousands of pages.

The relationship between depth and download size is not linear — it is exponential. A depth of 1 might capture 50 pages. Depth 2 might capture 500. Depth 3 could reach 5,000. Setting depth too high on a large site is the single most common mistake people make when downloading websites.

## Downloading Websites with Safari Extensions

Safari offers two dedicated extensions for this task, each with a different approach.

### Website Downloader

[Website Downloader](/apps/website-downloader/) provides granular control over the crawling and downloading process, making it suitable for both simple single-section downloads and complex multi-level site captures.

{% include blog-cta.html app_slug="website-downloader" %}

#### Step-by-Step Download Process

1. **Install and enable** Website Downloader in Safari's extension settings.
2. **Navigate to your starting URL.** Choose carefully — this page determines what the crawler discovers. For documentation, start at the index or table of contents page. For a blog, start at the archive page. For a specific section, start at that section's landing page.
3. **Open the extension** from the toolbar.
4. **Configure download parameters:**
   - **Crawl depth** — start with 1 for your first attempt. You can always increase it later.
   - **File types to include** — HTML, images, CSS, and JavaScript are typically all you need. Exclude video and large binary files unless you specifically need them.
   - **Domain scope** — "Same domain only" prevents the crawler from following external links to other websites, which would massively inflate the download.
   - **Download location** — choose a folder on your device. Create a dedicated directory for downloaded sites.
5. **Start the download** and monitor progress.
6. **Open the downloaded files** in Safari or any browser to verify the offline copy works correctly.

### Site Slurpr

[Site Slurpr](/apps/site-slurpr/) prioritizes the offline browsing experience over download configuration granularity. It packages downloaded sites in a format optimized for local navigation.

#### How Site Slurpr Differs

- **Optimized packaging** — downloaded content is organized for seamless local browsing rather than as a raw collection of files.
- **Intelligent link rewriting** — internal navigation works reliably, with links correctly pointing to local copies.
- **Selective capture** — choose specific pages or sections instead of crawling from a starting point.
- **Storage management** — built-in tools show how much space each downloaded site consumes and let you manage your offline library.

For straightforward downloads where you want to get content offline quickly without fine-tuning crawl parameters, Site Slurpr's approach is often more efficient.

## What to Download: The Most Valuable Offline Content

Not all web content benefits equally from offline saving. Here are the highest-value targets:

### Technical Documentation

This is the single most valuable category for offline downloads. Developer documentation is consulted repeatedly during coding sessions, often in environments where internet access is limited (airplane coding, conference hackathons, on-site work in secure facilities).

**High-priority documentation to download:**
- Language references (Python docs, MDN Web Docs for JavaScript/CSS/HTML, Rust Book)
- Framework documentation (React, Django, Rails, SwiftUI)
- API references for services you integrate with
- DevOps tool documentation (Docker, Kubernetes, Terraform)

A complete download of MDN Web Docs is approximately 2GB — a worthwhile investment of storage for what amounts to the definitive reference for web development.

### Academic and Research Materials

Open-access journals, preprint servers, university course materials, and educational wikis contain content that researchers and students consult repeatedly. Downloading these ensures uninterrupted study sessions.

**Tip:** Many academic sites use complex JavaScript-rendered layouts that can cause incomplete downloads. Test your offline copy immediately after downloading. If pages are blank or missing content, try increasing the crawl delay (if the tool supports it) or downloading sections individually.

### Travel and Field Reference

Before any trip where connectivity might be limited:

- Download destination travel guides (Wikivoyage is an excellent free resource designed for offline use)
- Download offline maps from OpenStreetMap-based services
- Save hotel, flight, and activity confirmation pages as PDFs (see our [PDF saving guide](/blog/safari-extensions/how-to-save-any-web-page-as-a-pdf-in-safari/))
- Download phrasebooks and language references for your destination
- Save emergency contact information and embassy details

### Archival Preservation

Websites disappear constantly. A 2024 Pew Research Center study found that 38% of web pages that existed in 2013 were no longer accessible a decade later. For content you care about preserving — a blog with valuable writing, a recipe collection, historical information, family websites — local downloads create a personal archive that survives regardless of what happens to the original.

For checking whether a page is still available through public web archives, see our guide on [checking website status and finding cached versions](/blog/safari-extensions/how-to-check-if-a-website-is-down-and-find-cached-versions/).

### Emergency and Survival Information

This category deserves special emphasis. First aid procedures, emergency contact numbers, offline maps, survival guides, and local emergency protocols should be available without internet dependence. These are exactly the situations where internet access is most likely to fail. Our [emergency preparedness guide](/blog/safari-extensions/emergency-preparedness-essential-survival-skills/) covers this topic in depth.

## Configuration Strategies for Different Site Types

Different types of websites require different download approaches:

### Static Content Sites (Blogs, Documentation, Wikis)

These are the easiest to download reliably. The content is primarily HTML and images with simple navigation.

**Recommended settings:** Depth 2-3, include HTML and images, same domain only, include CSS for proper rendering.

### JavaScript-Heavy Single-Page Applications (SPAs)

React, Angular, and Vue.js applications dynamically load content via JavaScript, which means the raw HTML often contains little to no content. Traditional crawlers that parse static HTML will produce empty pages.

**Workaround:** Some download tools can execute JavaScript and capture the rendered DOM. If yours cannot, use the browser's built-in "Save As Web Archive" feature (File > Save As in Safari) for individual pages, which captures the rendered state. For a complete SPA site, you may need to save pages individually.

### Media-Heavy Sites

Photography portfolios, design galleries, and video-heavy sites can consume enormous amounts of storage. A single high-resolution image can be 5-15MB. A photography site with 500 images could require 5GB+ of storage.

**Strategy:** Use file type filters to exclude video content unless you specifically need it. For image-heavy sites, check whether the site offers reduced-resolution versions and target those instead of full-resolution originals. For downloading just images without the rest of the page, see our [guide to downloading images from websites](/blog/safari-extensions/how-to-download-all-images-from-a-website-on-safari/).

### Sites with Authentication or Paywalls

Content behind login walls cannot be downloaded by extensions that crawl public URLs. If you have legitimate access (a subscription, an institutional login), you typically need to be logged in while the crawler runs, and the crawler must be able to pass your session cookies with its requests. Not all tools support this.

## Storage Planning and Management

Website downloads can consume significant storage. Plan accordingly:

| Content Type | Typical Size per Page | 100-Page Site Estimate |
|---|---|---|
| Text-only HTML | 50-150 KB | 5-15 MB |
| HTML with images | 500 KB - 3 MB | 50-300 MB |
| Documentation with diagrams | 200 KB - 1 MB | 20-100 MB |
| Media-rich pages | 5-20 MB | 500 MB - 2 GB |

**Storage tips:**

- **Monitor available space before starting large downloads.** On iPhone, storage is more constrained than on Mac. Check Settings > General > iPhone Storage.
- **Compress completed downloads.** Zip files reduce storage consumption by 50-80% for HTML-based content. Decompress only when you need to browse.
- **Delete outdated downloads.** Documentation versions change. Set a reminder to re-download critical references periodically and remove outdated copies.
- **Use external storage on Mac.** For large offline libraries, an external SSD dedicated to offline content keeps your primary drive uncluttered.

## Website Downloading vs. Other Offline Methods

| Method | Best For | Limitations |
|---|---|---|
| **Website Downloader / Site Slurpr** | Complete multi-page sites, documentation, wikis | Large storage requirements, complex sites may not render correctly offline |
| **[Save as PDF](/apps/save-as-pdf/)** | Individual important pages, receipts, confirmations | Single pages only, loses interactive elements |
| **Safari Reading List** | Articles for later reading | Unreliable formatting, limited to article content |
| **[Image Downloader](/apps/image-downloader/)** | Photo galleries, design references | Only saves images, not page structure or text |
| **Browser "Save As" (Web Archive)** | Individual complex pages with exact rendering | Manual, one page at a time, Safari-specific format |

Each method has its place. Website downloading is the right tool when you need multiple connected pages with working navigation — documentation sites, multi-chapter tutorials, entire blog archives. For single important pages, [saving as PDF](/blog/safari-extensions/how-to-save-any-web-page-as-a-pdf-in-safari/) is simpler and produces a more portable result.

## Common Mistakes and How to Avoid Them

**Starting with the wrong URL.** The starting URL determines everything the crawler discovers. If you start on a deeply nested page, the crawler may miss the site's navigation structure and download only a small subset. Start at the highest-level page that contains links to everything you want.

**Setting depth too high.** Depth 4+ on a well-linked site can attempt to download tens of thousands of pages. Start with depth 1, check the results, then increase incrementally. A documentation site's table of contents at depth 1 often captures exactly what you need.

**Not restricting to the same domain.** Without domain restriction, the crawler follows links to external sites, potentially downloading content from dozens of unrelated websites. Always restrict to the same domain unless you specifically need external resources.

**Ignoring robots.txt.** Website owners use robots.txt to indicate which parts of their site should not be crawled. Respecting these directives is both ethical and practical — ignoring them can result in your IP being blocked.

**Downloading during peak hours on metered connections.** Large downloads consume significant bandwidth. Schedule them for off-peak hours or unlimited-bandwidth periods. On cellular connections, a single documentation site download could consume your monthly data allowance.

**Not testing the offline copy immediately.** Always browse the downloaded site offline before you actually need it offline. Broken navigation, missing images, or blank pages are far easier to fix when you still have internet access.

## Optimizing Downloaded Sites for Comfortable Reading

Downloaded websites retain their original styling, which may not be ideal for extended offline reading sessions. Consider pairing your offline library with [Make It Dark Mode](/apps/make-it-dark-mode/), which works with locally saved HTML files to reduce eye strain during long reading sessions. See our [dark mode guide](/blog/safari-extensions/how-to-enable-dark-mode-on-every-website-in-safari/) for setup instructions.

For converting downloaded HTML content into a cleaner, more portable format, [HTML to Markdown](/apps/html-to-markdown/) converts web pages into Markdown files that are lightweight, readable in any text editor, and easy to annotate. See our [HTML to Markdown guide](/blog/safari-extensions/how-to-convert-html-to-markdown-documentation/).

For a complete overview of Safari extensions across every category, browse the [best Safari extensions for iPhone and Mac in 2026](/blog/safari-extensions/best-safari-extensions-iphone-mac-2026/) roundup.

## FAQ: What the Documentation Does Not Cover

**Can I download a site that blocks right-clicking or copying?**
Website downloaders fetch page resources via HTTP requests, not through the browser's copy/paste mechanism. Anti-copy restrictions (CSS `user-select: none`, JavaScript event blocking) do not affect download tools. However, more aggressive protections like CAPTCHAs and bot detection may block automated crawling.

**Will downloaded sites work on a different device?**
Yes, if you transfer the downloaded files. HTML files are platform-independent. Copy the download folder to any device with a web browser and open the index file. For cross-platform transfer, zip the folder first.

**How do I keep an offline copy updated?**
Re-download periodically. Most download tools overwrite existing files, effectively updating your offline copy. For documentation sites, re-downloading after major version releases ensures accuracy.

**What about sites that require JavaScript to render content?**
This is the most significant limitation. JavaScript-dependent sites (SPAs, sites using client-side rendering) may produce empty or broken offline copies because the JavaScript expects to fetch data from live API endpoints. For these sites, saving individual rendered pages via "Save As Web Archive" is often more reliable than crawling.

**Is downloading a website legal?**
For personal offline reading, downloading publicly available web content is generally legal in most jurisdictions. However, redistributing downloaded content may violate copyright. Downloading content behind paywalls using session cookies that bypass the paywall mechanism is a gray area. When in doubt, check the site's terms of service.

## Build Your Offline Library Before You Need It

The best time to download a website for offline access is before you need it offline. Waiting until you are on the plane, in the field, or in the middle of a power outage means you have already lost access. Build your offline library methodically — documentation you reference regularly, research you are working through, travel information for upcoming trips — and keep it maintained. The investment of a few minutes now prevents hours of frustration when connectivity fails.
