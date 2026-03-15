---
layout: post
title: "How to Download All Images from a Website on Safari"
description: "Learn how to bulk download all images from any website using the Image Downloader Safari extension. Save photos, graphics, and media files in just a few clicks."
date: 2025-10-22
categories: [safari-extensions]
tags: [image-download, bulk-download, safari, photos]
silo: safari-extensions
pillar: safari-extensions
related_apps: [image-downloader]
---

## Right-Click, Save As, Repeat 47 Times

A product page with 12 images. A portfolio site with 30 design samples. A real estate listing with 25 property photos. A research paper with 15 figures and charts. Every time you need multiple images from a single web page, you face the same tedious workflow: right-click, "Save Image As," navigate to a folder, name the file, click Save, and repeat for every single image. If the site has disabled right-click (a frustratingly common practice), you are stuck inspecting elements in developer tools or screenshotting the page.

For a handful of images, this is merely annoying. For twenty or more, it is a genuine productivity drain. A designer building a mood board from multiple reference sites might need to download hundreds of images in a session. A real estate agent comparing listings needs all property photos side by side. A researcher documenting web-based visual data needs reliable, repeatable extraction. Manual downloading does not scale, and it does not need to.

## How Websites Serve Images: Understanding What You Are Downloading

Before diving into tools, understanding how websites deliver images helps you get better results from any download method.

### Standard HTML Images

The most straightforward case: `<img>` tags with `src` attributes pointing directly to image files. These are the images you see in page content, product galleries, and blog post illustrations. Any download method, from right-click to extensions, handles these reliably.

### CSS Background Images

Many websites use CSS `background-image` properties instead of HTML `<img>` tags, particularly for hero banners, decorative elements, and card-style layouts. Background images are invisible to right-click menus and basic download approaches. They require inspecting the page's CSS or using a tool that specifically parses stylesheets for background image URLs.

### Lazy-Loaded Images

To improve page load performance, most modern websites use lazy loading: images below the visible viewport are not loaded until the user scrolls to them. A web page with 50 images might initially load only the 5 visible in the viewport and defer the remaining 45. If you attempt to download images before scrolling through the entire page, you will miss the majority of the content.

The HTML standard added native lazy loading via the `loading="lazy"` attribute in 2019, and JavaScript-based lazy loading (using Intersection Observer or scroll event listeners) predates that by several years. Both techniques mean that what you see in the initial page source does not represent the full image inventory.

### Responsive Images

Websites serve different image sizes for different viewport widths using `<picture>` elements or `srcset` attributes. A product image might exist as a 400px thumbnail, an 800px medium version, and a 2400px full-resolution original. When downloading, you want the highest resolution available, but the version displayed in the browser depends on your screen size and pixel density. An extension that understands `srcset` can identify and offer the full-resolution original rather than the scaled-down display version.

### WebP, AVIF, and Modern Formats

The image format landscape has diversified. Many sites now serve WebP (supported by all modern browsers) or AVIF (increasingly supported) instead of JPEG and PNG. These formats offer 25-50% better compression at equivalent quality, which is great for page performance but can cause compatibility issues if you need to open downloaded images in older software. Be aware that downloaded images might be in formats your intended workflow does not support.

### Images in JavaScript-Rendered Content

Single-page applications (SPAs) built with React, Vue, or Angular may load images entirely through JavaScript. These images do not exist in the initial HTML source and are only available in the rendered DOM after JavaScript execution. Download approaches that rely on parsing the initial HTML will miss them entirely.

## Methods for Downloading Images from Web Pages

### Method 1: Right-Click Save (Individual Images)

Right-click (or Control-click on Mac) on an image and select "Save Image As." This works for individual `<img>` elements but fails for CSS background images, WebP images displayed through `<picture>` elements (which may save as the wrong format), images on sites that have disabled the context menu, and any scenario involving more than a few images.

**When to use it:** You need exactly one or two images and the site allows right-click.

### Method 2: Safari Developer Tools

Open Safari's Web Inspector (Develop > Show Web Inspector), navigate to the Sources or Resources tab, and browse the page's loaded resources. You can find and download image files from there, including CSS background images and lazy-loaded resources that have been triggered.

**When to use it:** You need to find a specific image that right-click cannot access, or you need to identify the highest-resolution version of a responsive image. This is a power-user approach that requires familiarity with developer tools.

### Method 3: Screenshot and Crop

Take a screenshot of the page (Shift+Cmd+4 on Mac for selection, or Shift+Cmd+3 for full screen) and crop the image you want. This produces a rasterized copy at your screen resolution, not the original file.

**When to use it:** The image is embedded in a canvas element, rendered by WebGL, or otherwise not available as a standard file. This is a last resort since you lose original resolution and metadata.

### Method 4: Dedicated Download Extension

A Safari extension designed for image extraction scans the rendered page (not just the HTML source), identifies all image resources including CSS backgrounds and lazy-loaded content, presents them with dimensions and file size metadata, and offers batch selection and download. This is the approach that scales to pages with dozens or hundreds of images.

## Using Image Downloader for Safari

[Image Downloader](/apps/image-downloader/) is a Safari extension that automates the image extraction and download process. It parses the fully rendered page, including JavaScript-generated content and CSS background images, and presents a visual gallery of every image detected.

{% include blog-cta.html app_slug="image-downloader" %}

### Step 1: Install and Enable

**On Mac:**

1. Open Safari and go to **Safari > Settings > Extensions**.
2. Click **More Extensions** to open the App Store.
3. Search for "Image Downloader" and install it.
4. Return to the Extensions tab and enable it.
5. Configure website access permissions based on your preference.

**On iPhone and iPad:**

1. Go to **Settings > Apps > Safari > Extensions**.
2. Tap **More Extensions**, find Image Downloader, and install it.
3. Toggle the extension on.

### Step 2: Prepare the Page

Before activating the extension, ensure all images on the page are loaded:

1. **Scroll through the entire page** to trigger lazy-loaded images. Scroll slowly enough that images have time to load as they enter the viewport.
2. **Expand any "Load More" or "Show All" sections.** Photo galleries often display a subset of images with an option to expand. Click these before scanning.
3. **Switch to the highest-resolution view if available.** Some galleries offer a "view all" or grid-size option. Choose the option that loads the largest thumbnails, since these often correspond to higher-resolution source files.

### Step 3: Scan and Preview

Click the Image Downloader icon in the Safari toolbar. The extension scans the current page and displays a grid of every detected image with:

- **Thumbnail preview** showing each image at a glance.
- **Dimensions** (width x height in pixels) for each image.
- **File size** to help identify high-resolution versions vs. thumbnails.
- **File format** (JPEG, PNG, WebP, AVIF, GIF, SVG).

This preview grid is essential for filtering. A typical web page contains many images you do not want: 1x1 pixel tracking beacons, tiny social media icons, advertising pixels, spacer GIFs, and branding elements. The preview lets you quickly identify the content images.

### Step 4: Filter and Select

Use the extension's filtering tools to narrow down the results:

- **Minimum dimension filter:** Set a minimum width or height (e.g., 200x200) to exclude icons, tracking pixels, and tiny decorative elements. This single filter typically eliminates 60-80% of unwanted results on a standard web page.
- **File type filter:** Show only specific formats if you need JPEGs but not PNGs, or vice versa.
- **Select all / Deselect all:** For pages where most images are relevant, select all and then deselect the few you do not need. For pages with mostly irrelevant images, start with none selected and check only what you want.

### Step 5: Download

Click the download button to save selected images. On Mac, they download to your configured Downloads folder (or you may be prompted to choose a location). On iPhone, images are saved to your Photos library or the Files app, depending on the extension's configuration.

For large batches, the download may take a moment. The extension typically downloads images sequentially to avoid overwhelming the server with concurrent requests, which could trigger rate limiting.

## Expert Tips for Better Results

### Getting the Highest Resolution

Websites frequently serve scaled-down versions in page content while keeping full-resolution originals accessible through different URLs. Here are techniques for finding the best quality:

- **Look for URL patterns.** Many sites use predictable URL structures: changing `_thumb` to `_full`, `w=400` to `w=2000`, or `/small/` to `/original/` in the image URL can yield a higher-resolution version.
- **Check srcset values.** In Safari's Web Inspector, examine the `srcset` attribute of an `<img>` element. The largest width descriptor (e.g., `image.jpg 2400w`) points to the full-resolution version.
- **Try the image's direct URL.** Open an image in a new tab and modify URL parameters. E-commerce sites, in particular, often use query parameters to control the served resolution.

### Handling Infinite Scroll Pages

Social media feeds, Pinterest, and some gallery sites use infinite scrolling where new content loads as you scroll down. To capture all images:

1. Scroll to the bottom of the content you need (or the page's end if it has one).
2. Wait for all images to load (watch for loading spinners to disappear).
3. Then activate the extension.

If the page loads hundreds of images through infinite scroll, consider downloading in batches by scrolling to a reasonable point, scanning, downloading, then scrolling further.

### Dealing with Protected Content

Some websites actively prevent image downloading through disabled right-click menus, transparent overlay `<div>` elements covering images, CSS `pointer-events: none`, and watermarked low-resolution versions. A download extension bypasses the first three techniques since it reads image URLs from the DOM rather than relying on right-click menus. However, watermarking and serving genuinely low-resolution versions are server-side protections that no client-side tool can circumvent.

## Practical Use Cases in Depth

### Design Research and Mood Boards

When collecting visual references from design inspiration sites, portfolio pages, and competitor websites, bulk downloading saves substantial time. A practical workflow: visit the reference site, scroll through to load all content, scan and filter for images above 400px minimum dimension, download the batch, and import into your design tool (Figma, Sketch, or a physical mood board). Over a multi-site research session collecting 200+ images, this approach saves one to two hours compared to manual downloading.

### E-Commerce Product Comparison

Comparing products across multiple retailers requires seeing all product images side by side. Download product images from each retailer's listing page, organize them into per-product folders, and view them in Finder's gallery view or a dedicated image viewer. This is especially useful for items where visual details matter: furniture, clothing, home decor, and electronics.

### Academic and Research Documentation

Researchers working with visual data (charts, figures, microscopy images, maps, architectural plans) can use bulk downloading to build organized reference libraries. Pair this with [Save as PDF](/apps/save-as-pdf/) to capture the surrounding text and context alongside the images. Our guide on [saving web pages as PDFs in Safari](/blog/safari-extensions/how-to-save-any-web-page-as-a-pdf-in-safari/) covers that workflow in detail.

### Web Archival

When archiving a website before it changes or disappears, images are often the most irreplaceable content. Text can sometimes be recovered through search engine caches or the Wayback Machine, but images frequently are not archived by these services. Downloading images proactively preserves visual content that would otherwise be lost. For full-site archival that includes HTML, CSS, and images together, see our guide on [downloading entire websites for offline reading](/blog/safari-extensions/how-to-download-an-entire-website-for-offline-reading/).

## Copyright and Ethical Considerations

Downloading images does not grant you rights to use them. Copyright law applies to digital images just as it applies to physical photographs and artwork. Before using downloaded images:

**Check the license.** Look for Creative Commons licenses, stock photo attribution requirements, or explicit permissions stated on the site.

**Evaluate fair use.** In the United States, fair use considers the purpose of use (commercial vs. educational), the nature of the copyrighted work, the amount used, and the effect on the market for the original. Fair use is a legal defense, not a blanket permission, and its boundaries are intentionally subjective.

**Respect robots.txt and terms of service.** Some websites explicitly prohibit automated downloading in their terms of service. While a browser extension is not the same as a web scraper, the ethical principle is the same: respect the site owner's stated wishes.

**Do not redistribute without permission.** Downloading images for personal reference, research, or comparison is generally less problematic than redistributing them publicly. When in doubt, contact the copyright holder.

## Related Tools

Image Downloader works well alongside other Safari extensions for content capture:

- **[Link Gopher](/apps/link-gopher/)** extracts all links from a page, which can help you find direct URLs to full-resolution images or navigate to individual gallery pages. See our guide on [extracting emails and links from websites](/blog/safari-extensions/how-to-extract-emails-and-links-from-any-website/).
- **[HTML to Markdown](/apps/html-to-markdown/)** converts page content to Markdown, useful when you need to capture image alt text, captions, and surrounding context alongside the images themselves.
- **[Website Downloader](/apps/website-downloader/)** saves entire sites including images, stylesheets, and scripts for comprehensive offline archival.

For a complete overview of every Safari extension category, see our [best Safari extensions for iPhone and Mac in 2026](/blog/safari-extensions/best-safari-extensions-iphone-mac-2026/) guide.

## FAQ

**Can I download images from password-protected pages?**
Yes. The extension works on any page that Safari can render, including pages behind login walls. It processes the rendered content in your browser, so whatever you can see, the extension can detect.

**Why does the extension show images I cannot see on the page?**
Web pages often include hidden images: CSS background images, preloaded images for hover states, images in collapsed accordion sections, and tracking pixels. The extension finds all images in the DOM, not just the visible ones.

**Will downloading many images get me blocked?**
Downloading dozens of images from a single page is unlikely to cause issues since you are essentially making the same requests your browser already made to display the page. However, if you rapidly download from many different pages on the same site, the server may interpret this as scraping behavior and temporarily block your IP.

**What about animated GIFs and SVGs?**
Most image download extensions handle GIFs (preserving animation) and SVGs (as scalable vector files). WebP animations are also typically preserved. Check the extension's documentation for specifics on supported formats.

**Why are some downloaded images in WebP format instead of JPEG?**
Many websites now serve WebP images by default because they are smaller and load faster. If your workflow requires JPEG or PNG, you can convert WebP files using Preview on Mac (File > Export), the `sips` command-line tool, or any image editor. macOS has supported WebP natively since Monterey.
