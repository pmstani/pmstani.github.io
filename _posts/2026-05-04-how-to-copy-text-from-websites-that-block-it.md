---
layout: post
title: "How to Copy Text from Websites That Block Copying"
description: "Discover multiple methods to copy text from websites that disable right-click and text selection, including Safari Reader Mode, extensions, and developer tools."
date: 2026-05-04
categories: [safari-extensions]
tags: [copy-paste, restricted-sites, web-access, safari]
silo: safari-extensions
pillar: safari-extensions
related_apps: [allow-copy, copy-on-select]
---

## Why Websites Block Text Selection in the First Place

The inability to select, copy, or right-click text on a website is not a bug. It is a deliberate design choice implemented through JavaScript event handlers and CSS properties. Understanding the motivations helps contextualize the practice and the methods for working around it.

**Content protection.** News outlets, academic publishers, and content creators use copy restrictions to prevent wholesale reproduction of their work. The New York Times, Medium (for paywalled content), and numerous recipe sites disable copying to force visitors to stay on the page rather than paste the content elsewhere.

**Exam and assessment security.** Online testing platforms like ProctorU, Respondus, and university learning management systems disable copy-paste to prevent students from extracting questions and sharing them externally. This is a core feature of their proctoring integrity.

**Paywall enforcement.** Sites that offer limited free content before requiring a subscription sometimes use copy blocking as a secondary enforcement mechanism alongside their paywall. The logic is that if users cannot copy the free content, they are less likely to circumvent the paywall by saving text piecemeal.

**User experience decisions.** Some web applications disable right-click to implement custom context menus. Google Docs, Figma, and other web-based productivity tools override the browser's default right-click behavior with their own application-specific menus. This is not about preventing copying but about providing relevant application functionality.

**Anti-scraping measures.** Businesses that aggregate proprietary data (real estate listings, job postings, product catalogs) block copying as one layer in their anti-scraping defenses, alongside rate limiting, CAPTCHAs, and bot detection.

## How Copy Blocking Works Technically

Copy blocking relies on a small number of JavaScript and CSS techniques. Understanding these helps explain why different bypass methods work against different implementations.

### JavaScript Event Listeners

The most common approach uses JavaScript to intercept and cancel user interactions:

```javascript
// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Disable text selection
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

// Disable copy action
document.addEventListener('copy', function(e) {
  e.preventDefault();
});

// Disable keyboard shortcuts
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && (e.key === 'c' || e.key === 'a' || e.key === 'u')) {
    e.preventDefault();
  }
});
```

These event listeners intercept user actions before the browser's default behavior executes. The `preventDefault()` call tells the browser "do not perform the normal action for this event."

### CSS User-Select Property

CSS offers a non-JavaScript approach:

```css
body {
  -webkit-user-select: none;
  user-select: none;
}
```

This CSS property tells the browser's rendering engine to prevent text selection at the visual level. The text is still in the DOM and can be accessed programmatically, but the click-and-drag selection interface is disabled.

### Overlay Divs

A less common but more aggressive technique places a transparent `<div>` element over the content. Your clicks land on the overlay rather than the text beneath it, preventing selection entirely. This approach is harder to implement correctly (it also blocks links and interactive elements unless carefully configured) but is more resistant to simple JavaScript-disabling approaches.

## Method 1: Safari Reader Mode

Reader Mode is the simplest bypass because it completely replaces the page's rendering with Safari's own article parser. The JavaScript that blocks copying runs in the context of the original page, and Reader Mode creates a separate rendering context where that JavaScript does not execute.

1. Navigate to the page with blocked text selection.
2. Tap the **Reader Mode icon** in the address bar (the lines icon). If the icon is not visible, Safari has not detected an article structure on the page, and Reader Mode is not available.
3. In Reader Mode, all text is selectable and copyable using normal selection gestures.

**Limitations:** Reader Mode only works on pages Safari identifies as articles with a clear content hierarchy. It does not activate on web applications, forums, product pages, search results, or pages with complex layouts. It also strips away all non-content elements, so if you need to copy text from a navigation menu, sidebar, or footer, Reader Mode will not include those elements.

## Method 2: Disabling JavaScript Temporarily

Since copy blocking relies on JavaScript event listeners, disabling JavaScript entirely removes all the listeners. In Safari:

**On Mac:**
1. Go to **Safari > Settings > Security**.
2. Uncheck **Enable JavaScript**.
3. Reload the page.
4. Select and copy the text you need.
5. Re-enable JavaScript immediately afterward.

**On iPhone/iPad:**
1. Go to **Settings > Apps > Safari**.
2. Scroll to **Advanced** and toggle **JavaScript** off.
3. Return to Safari and reload the page.
4. Copy what you need.
5. Toggle JavaScript back on.

**Limitations:** Disabling JavaScript breaks most modern websites. Pages may not render correctly, interactive elements stop working, and dynamically loaded content does not appear. This is a blunt instrument that works when you only need text that was rendered in the initial HTML, but it is impractical as a regular workflow. Also, content loaded via JavaScript (AJAX calls, single-page applications) will not appear at all with JavaScript disabled.

## Method 3: View Source / Developer Tools

The text you see on a web page exists in the HTML source code, and no amount of JavaScript can prevent you from reading the source.

**On Mac:**
1. Open **Safari > Develop > Show Page Source** (or press **Command + Option + U**). If the Develop menu is not visible, enable it in **Safari > Settings > Advanced > Show features for web developers**.
2. The page's HTML source appears. Use **Command + F** to search for the specific text you need.
3. Select and copy from the source view.

For a more targeted approach:
1. Open **Safari > Develop > Show Web Inspector**.
2. Use the element inspector (crosshair tool) to click on the specific text element you want to copy.
3. The Elements panel highlights the HTML element containing that text.
4. Right-click the element and select **Copy > Copy Element** or simply select the text content within the element's code.

**Limitations:** Reading HTML source requires basic familiarity with HTML structure. The text is interspersed with markup tags, so you need to extract just the text content. This method is too slow for copying large amounts of text. For more on using Safari's developer tools effectively, see our guide on the [best ways to inspect and debug websites in Safari](/blog/developer-tools/best-ways-inspect-debug-websites-safari/).

## Method 4: Console Commands

A more surgical JavaScript approach: instead of disabling JavaScript entirely, you can run commands in the browser console that specifically remove copy restrictions:

**On Mac:**
1. Open **Safari > Develop > Show JavaScript Console** (or **Command + Option + C**).
2. Paste and run:

```javascript
document.querySelectorAll('*').forEach(el => {
  el.style.userSelect = 'auto';
  el.style.webkitUserSelect = 'auto';
});
document.oncontextmenu = null;
document.oncopy = null;
document.onselectstart = null;
```

This removes CSS-based selection blocking and clears the event handlers for right-click, copy, and selection.

**Limitations:** This only removes restrictions applied through the methods shown above. Sophisticated implementations may re-apply restrictions using mutation observers (which detect DOM changes and reapply the blocking), use obfuscated event listener attachment, or employ other techniques. The console approach is also Mac-only, since iOS Safari does not expose a developer console without connecting to a Mac.

## Method 5: Using a Safari Extension

Extensions provide the most reliable and user-friendly approach because they can comprehensively address all copy-blocking techniques automatically, without requiring technical knowledge or manual steps each time.

[Allow Copy for Safari](/apps/allow-copy/) removes copy restrictions across websites with a single toggle. It intercepts and neutralizes the JavaScript event listeners and CSS properties that prevent text selection and copying, restoring normal browser behavior.

{% include blog-cta.html app_slug="allow-copy" %}

### How It Works

The extension injects a content script into web pages that:

1. Overrides `event.preventDefault()` calls on `copy`, `selectstart`, and `contextmenu` events.
2. Removes `user-select: none` CSS properties from all elements.
3. Removes transparent overlay divs that intercept click events.
4. Monitors for dynamically re-applied restrictions (using mutation observers) and removes them as they appear.

This comprehensive approach handles all the common blocking techniques, including the more sophisticated ones that simple console commands miss.

### Setup

1. Install from the App Store.
2. Enable in Safari's extension settings.
3. When you encounter a page that blocks copying, activate the extension from the toolbar.
4. Text selection and copying work normally.

For an even more streamlined workflow, [Copy on Select](/apps/copy-on-select/) automatically copies any text you select, eliminating the need to press Command+C or use the context menu after selection. This is particularly useful on pages where right-click is disabled but text selection has been restored.

{% include blog-cta.html app_slug="copy-on-select" %}

## Method 6: Print or Save as PDF

Printing a web page or saving it as a PDF creates a new document that does not carry over the JavaScript restrictions from the original page.

1. Press **Command + P** on Mac or use the Share menu on iOS.
2. Choose **Save as PDF** rather than printing to a physical printer.
3. Open the resulting PDF.
4. Select and copy text normally from the PDF.

This works because the print rendering pipeline strips JavaScript and applies the page's print stylesheet (if one exists). The resulting PDF is a static document with no active scripting.

**Limitations:** Print stylesheets sometimes hide navigation, headers, footers, and other non-content elements. The formatting may differ from the on-screen version. Very long pages produce multi-page PDFs that are unwieldy to navigate. For more on PDF workflows in Safari, see our guide on [how to save any web page as a PDF in Safari](/blog/safari-extensions/how-to-save-any-web-page-as-a-pdf-in-safari/).

## Ethical Considerations and Best Practices

The ability to copy text from any website does not mean it is always appropriate to do so. Here is a framework for thinking about the ethics:

### Generally Appropriate

- **Personal reference.** Copying a paragraph from a recipe, a code snippet from documentation, or a relevant quote for your own notes. This falls squarely within fair use.
- **Accessibility.** Copying text to paste into a screen reader, text-to-speech tool, or dyslexia-friendly reading environment. Blocking accessibility tools is itself an accessibility violation under many jurisdictions' web accessibility laws.
- **Academic citation.** Copying a passage for proper attribution in an academic paper or article. This is the foundation of scholarly discourse.
- **Legal and regulatory compliance.** Copying terms of service, privacy policies, or regulatory filings that you need to review or archive. These are legal documents that you have a right to retain and review.

### Ethically Questionable

- **Wholesale reproduction.** Copying an entire article to republish it on your own site, even with attribution, may violate copyright regardless of copy restrictions.
- **Paywall circumvention.** Using copy tools specifically to avoid paying for content that is clearly behind a paywall. The copy restriction is secondary to the subscription requirement.
- **Exam integrity.** Bypassing copy restrictions on academic assessments undermines the integrity of the educational process.

### The Access Principle

Web content is delivered to your browser in plain text. The HTML, CSS, and JavaScript source code are all transmitted to and stored on your device. Copy-blocking JavaScript does not prevent your browser from receiving the content; it only prevents the default UI for selecting it. From a technical standpoint, the text is already on your device the moment the page loads. Copy restrictions are a UI-level convention, not a security mechanism.

This technical reality informs the ethical framework: the restrictions are a signal of the publisher's wishes, not an enforceable barrier. Respecting those wishes when they serve legitimate interests (paying creators for their work) while overriding them when they impede legitimate use (accessibility, personal reference, fair use) is a reasonable approach.

## Choosing the Right Method

For occasional needs on a single page, Reader Mode or the Print-to-PDF method requires no installation and handles most situations. For regular encounters with copy-restricted sites, an extension provides the most seamless experience by handling all blocking techniques automatically. The Developer Tools approach is best suited for users who need precise control over what they extract and are comfortable with HTML.

Start with the simplest method that addresses your immediate need. If you find yourself repeatedly using manual workarounds on the same sites, that is the signal to install an extension and save yourself the cumulative time investment.
