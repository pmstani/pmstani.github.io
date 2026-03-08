---
layout: post
title: "How to Enable Dark Mode on Every Website in Safari"
description: "Learn how to enable dark mode on every website in Safari using the Make It Dark Mode extension. Reduce eye strain, customize themes, and schedule automatic dark mode."
date: 2026-03-02
categories: [safari-extensions]
tags: [dark-mode, eye-strain, safari, night-mode]
silo: safari-extensions
pillar: safari-extensions
related_apps: [make-it-dark-mode]
---

## The Problem with White Backgrounds After Dark

Open Safari at 11 PM, navigate to Wikipedia, and your retinas are immediately assaulted by approximately 220 cd/m2 of luminance from that pure white background. For context, the recommended ambient lighting for comfortable evening screen use is between 50 and 100 lux. That means the screen is several times brighter than the room you are sitting in, and your pupils are caught in an impossible compromise between adapting to the dark room and the bright display.

This is not just a comfort issue. A 2018 study published in the *Journal of Biomedical Physics and Engineering* found that prolonged exposure to bright screens in dark environments increases visual fatigue symptoms by 58% compared to matched ambient-to-screen brightness ratios. The American Academy of Ophthalmology has documented the link between high-contrast bright screens and digital eye strain, a condition affecting an estimated 65% of Americans.

System-wide dark mode on macOS and iOS handles the operating system UI and first-party apps, but the web remains stubbornly bright. As of 2025, fewer than 18% of the top 10,000 websites properly implement the `prefers-color-scheme: dark` CSS media query. The rest serve the same blinding white backgrounds regardless of your system preferences. The gap between system dark mode and web dark mode is where a browser extension becomes necessary.

## The CSS Media Query Problem: Why Native Dark Mode Falls Short

The web standards community introduced `prefers-color-scheme: dark` in 2019 as part of CSS Level 5 Media Queries. The idea was elegant: websites would detect the user's system preference and automatically serve a dark color scheme. In practice, adoption has been glacially slow.

There are structural reasons for this. Implementing dark mode properly requires a complete design system overhaul. Every color in a site's palette needs a dark equivalent. Images need to be evaluated for how they look on dark backgrounds. Shadows, borders, and subtle gradients all need redesigning. For a complex web application with hundreds of unique page layouts, this is weeks or months of design and engineering work with no direct revenue impact. Most product teams simply never prioritize it.

Even websites that do implement dark mode often do it inconsistently. Login pages might be dark while the main application stays light. Some components switch while others do not. And user-generated content, embedded widgets, and third-party iframes almost never honor the dark scheme. The result is a patchwork experience that is sometimes worse than no dark mode at all.

Browser-level dark mode enforcement solves this from the user's side, bypassing the need for websites to implement anything.

## Approaches to Dark Mode in Safari

### Approach 1: Safari's Built-In Reader Mode

Safari's Reader Mode (the document icon in the address bar) strips away a page's styling and presents the article text in a customizable format, including a dark background option. This works well for blog posts and news articles, but it has significant limitations:

- Only available on pages Safari identifies as "articles"
- Removes all navigation, sidebars, comments, and interactive elements
- Does not work on web applications, dashboards, forums, or e-commerce pages
- Requires manual activation on every page

Reader Mode is a reading tool, not a dark mode solution.

### Approach 2: macOS Accessibility Invert Colors

macOS includes an "Invert Colors" accessibility option (System Settings > Accessibility > Display) and a "Smart Invert" option on iOS. These work at the system level and technically darken white backgrounds, but they also invert images, videos, and icons. The result is photographs that look like film negatives, logos with wrong colors, and videos that are unwatchable. Smart Invert on iOS is more selective, but it still produces visual artifacts on many web pages.

### Approach 3: CSS User Stylesheets

Power users can write custom CSS stylesheets and apply them to Safari through Settings > Advanced > Stylesheet. This offers precise control but requires CSS knowledge, breaks on sites with complex layouts, needs constant maintenance as sites update their markup, and cannot adapt to different page structures automatically. It is a solution for one or two specific sites, not for the entire web.

### Approach 4: Dedicated Dark Mode Extension

A purpose-built extension analyzes page structure in real time, applies dark styling contextually, preserves image and video appearance, handles dynamic content loaded after the initial page render, and offers per-site customization. This is the approach that scales.

## Setting Up Make It Dark Mode

[Make It Dark Mode](/apps/make-it-dark-mode/) uses an intelligent theme engine that goes beyond simple color inversion. It parses the page's DOM structure, identifies semantic regions (headers, content areas, sidebars, footers), and applies appropriate dark styling to each. Images, videos, and SVG graphics are detected and excluded from color transformation. The result looks like a properly designed native dark theme rather than a crude inversion filter.

{% include blog-cta.html app_slug="make-it-dark-mode" %}

### Step 1: Install and Enable

**On Mac:**

1. Open Safari and go to **Safari > Settings > Extensions**.
2. Click **More Extensions** to open the App Store.
3. Search for "Make It Dark Mode" and install it.
4. Return to the Extensions tab and check the box next to Make It Dark Mode.
5. Set website access to "All Websites" for automatic dark mode everywhere, or "Ask" if you prefer to grant access per site.

**On iPhone and iPad:**

1. Go to **Settings > Apps > Safari > Extensions**.
2. Tap **More Extensions**, find Make It Dark Mode, and install it.
3. Toggle the extension on from the same settings screen.
4. Configure website access permissions.

### Step 2: Configure Global Dark Mode

Click the Make It Dark Mode icon in the Safari toolbar to open its settings panel. The global toggle enables dark mode across all websites simultaneously. When this is on, every page you visit receives dark styling automatically.

Within the global settings, you will find:

- **Darkness level:** A slider ranging from soft dark gray (around #2D2D2D) to true black (#000000). True black is ideal for OLED displays where it turns pixels completely off, saving measurable battery life. A 2021 Purdue University study found that switching from light to dark mode at 100% brightness saved 39-47% battery on OLED phones. Soft dark gray is easier on the eyes for extended reading sessions and avoids the "halation" effect where bright text on pure black backgrounds appears to glow or blur.
- **Accent colors:** Customize the color used for links, buttons, and interactive elements. The default blue works for most users, but if you have a color vision deficiency, switching to a higher-contrast accent color (like orange or green) can improve link visibility.
- **Contrast adjustment:** Fine-tune the contrast ratio between text and background. WCAG 2.1 recommends a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text. The extension defaults to values that exceed these minimums, but you can adjust further based on your preference.

### Step 3: Set Per-Site Preferences

Not every website needs extension-driven dark mode. Gmail, GitHub, YouTube, and many other popular sites have their own dark mode implementations that are usually more polished than any extension can achieve. For these sites, you want to disable the extension and let the native dark theme handle things.

To exclude a site:

1. Visit the website you want to exclude.
2. Click the Make It Dark Mode toolbar icon.
3. Toggle the extension off for that specific domain.
4. The extension remembers this preference permanently.

Build your exclusion list gradually. Over the first week of use, whenever you encounter a site whose native dark mode looks better than the extension's version, add it to the exclusion list. After a week, you will have a well-tuned setup that rarely needs further adjustment.

### Step 4: Schedule Automatic Activation

For users who want dark mode only during evening and nighttime hours, automatic scheduling eliminates the need to manually toggle the extension:

1. Open the extension settings from the toolbar icon.
2. Navigate to the scheduling section.
3. Choose between fixed times (e.g., 7 PM to 7 AM) or the sunset/sunrise option, which uses your location to calculate appropriate times.
4. The extension activates and deactivates automatically according to your schedule.

The sunset/sunrise option adapts to seasonal changes. In northern latitudes, sunset can be as early as 4 PM in winter and as late as 10 PM in summer. Fixed times do not account for this variation.

## Advanced Techniques and Edge Cases

### Handling Sites with Partial Dark Mode

Some websites implement dark mode for their main content area but leave headers, footers, or embedded widgets in light mode. You can run the extension on these sites to catch the inconsistent elements while the site's own dark styling handles the main content. If the extension conflicts with the site's native dark mode on specific elements, the per-site toggle is your escape hatch.

### Dark Mode and Print Stylesheets

When you print a web page or save it as a PDF (using Safari's built-in Print function or a tool like [Save as PDF](/apps/save-as-pdf/)), the extension's dark styling is not included in the print output. Websites use separate `@media print` stylesheets, and the extension correctly defers to these. Your printed pages will appear in their original light format, which is appropriate since dark backgrounds waste ink. Read more about PDF saving in our guide on [how to save any web page as a PDF in Safari](/blog/safari-extensions/how-to-save-any-web-page-as-a-pdf-in-safari/).

### Dark Mode on Dynamic Content

Modern web pages frequently load content after the initial page render: infinite scroll feeds, chat messages, notification panels, modal dialogs. The extension monitors DOM mutations and applies dark styling to newly inserted content in real time. This is a critical capability that static CSS approaches (like user stylesheets) cannot match.

### iFrame and Embedded Content

iFrames present a unique challenge because they are essentially separate web pages embedded within the host page. The extension handles same-origin iFrames (where the embedded content comes from the same domain), but cross-origin iFrames (like embedded YouTube videos, Twitter embeds, or advertising iFrames) have their own styling that the extension cannot modify due to browser security policies. Most cross-origin iFrames already have dark-appropriate backgrounds, but occasionally you will see a bright embedded widget on an otherwise dark page. This is a browser security limitation, not an extension limitation.

## The Science of Dark Mode and Eye Comfort

The relationship between dark mode and eye health is more nuanced than "dark good, light bad." Research paints a complex picture:

**In favor of dark mode:** Studies from the University of Lubeck found that dark mode reduces visual fatigue during extended reading in low ambient light. The reduced luminance differential between screen and environment allows pupils to maintain a more relaxed state, reducing ciliary muscle strain.

**The ambient light caveat:** In bright environments (like a sunlit office), dark mode can actually be harder to read because the screen's low contrast competes with ambient reflections. For daytime use in well-lit spaces, light mode with reduced brightness is often more comfortable. This is why automatic scheduling based on ambient conditions or time of day is valuable.

**OLED vs. LCD:** On OLED displays, true black dark mode provides a genuine battery savings benefit because black pixels are turned off entirely. On LCD displays, the backlight illuminates the entire panel regardless of displayed colors, so the battery benefit is negligible. The eye comfort benefits apply to both display types.

## Pairing Dark Mode with Other Visual Comfort Tools

Dark mode is one piece of a broader visual comfort strategy. For a comprehensive approach, consider combining it with:

- **[Presbyopia](/apps/presbyopia/)** for text enlargement if you find yourself squinting at small text on dark backgrounds. See our roundup of [accessibility extensions for Safari](/blog/safari-extensions/best-accessibility-extensions-for-safari/).
- **[Read Easier](/apps/read-easier/)** for layout simplification on cluttered pages where dark mode alone is not enough.
- **Night Shift** (built into macOS and iOS), which shifts display color temperature toward warmer tones in the evening, reducing blue light emission independently of dark mode.
- **True Tone** on supported devices, which adjusts white balance based on ambient lighting conditions.

The combination of dark mode (reducing overall luminance), Night Shift (reducing blue light), and appropriate brightness settings creates an evening browsing environment that minimizes sleep disruption and eye strain. A 2019 meta-analysis in *Chronobiology International* confirmed that reducing blue light exposure in the two hours before sleep improved sleep onset latency by an average of 24 minutes.

## Things Most Guides Won't Tell You

**Dark mode can affect reading comprehension.** A 2020 study from the University of Passau found that positive polarity (dark text on light background) produced slightly better proofreading accuracy than negative polarity (light text on dark background). The effect was small but statistically significant. If you are doing detailed editing work, consider switching to light mode temporarily.

**Some color-coded content loses meaning in dark mode.** Financial charts that use red and green, status indicators, heatmaps, and other color-dependent visualizations can be affected when background colors change. If a page looks confusing after dark mode is applied, check whether color-coded elements have shifted in meaning.

**Dark mode does not reduce blue light.** A dark background reduces overall luminance but does not change the spectral composition of the light emitted by bright text and images on the page. Blue light filtering requires a separate mechanism like Night Shift or blue-light-filtering glasses.

**Extension updates can temporarily break styling.** When an extension updates, there is occasionally a brief period where cached styles conflict with new rules. If a page looks wrong after an extension update, clearing Safari's cache (Safari > Clear History) usually resolves it.

For a complete overview of how extensions can transform your Safari browsing experience across every category, see our [best Safari extensions for iPhone and Mac in 2026](/blog/safari-extensions/best-safari-extensions-iphone-mac-2026/) guide.
