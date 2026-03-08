---
layout: post
title: "Web Accessibility Is Broken: Here's How to Fix Your Own Browsing Experience"
description: "96.3% of top websites have accessibility failures. Learn how to build a personal accessibility toolkit using Safari extensions, VoiceOver, and Reader mode."
date: 2026-06-26
categories: [safari-extensions]
tags: [accessibility, web, a11y, disabilities, assistive-technology]
silo: safari-extensions
pillar: safari-extensions
related_apps: [dyslexia, presbyopia, read-easier, make-it-dark-mode, auto-scroll, allow-copy]
---

## 96.3% of the Web Fails Basic Accessibility Standards

Every year, the WebAIM (Web Accessibility In Mind) research group at Utah State University crawls the home pages of the top one million websites and tests them against the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standard. The 2025 WebAIM Million report found that 96.3% of home pages had detectable WCAG failures.

That is not a misprint. Fewer than 4% of the most popular websites on the internet meet the minimum standard for accessibility. The number has barely improved since the first WebAIM Million report in 2019, when 97.8% of pages had failures.

The most common failures:
- **Low contrast text:** 81% of home pages had text that failed minimum contrast ratios
- **Missing alternative text for images:** 54.5% had images without alt attributes
- **Missing form input labels:** 45.8% had form fields without associated labels
- **Empty links:** 44.6% had links with no discernible text
- **Missing document language:** 17.1% did not declare the page language
- **Empty buttons:** 12.2% had buttons without accessible names

These are not obscure technical requirements. Low contrast text means millions of people cannot read the content. Missing alt text means screen reader users encounter meaningless blanks where images should convey information. Missing form labels mean people using assistive technology cannot fill out forms, make purchases, or complete applications.

The people most affected are not a small fringe group. The World Health Organization estimates that 1.3 billion people globally live with some form of significant disability. In the United States, 27% of adults have a disability, according to the CDC. And age-related changes in vision, hearing, motor function, and cognition affect virtually everyone eventually.

## Why the Web Remains Inaccessible

Understanding why accessibility remains so poor, despite two decades of standards and growing legal pressure, explains why individual solutions matter.

### The Economics Problem

Implementing comprehensive accessibility requires sustained investment. Accessible design must be built into the development process from the beginning, tested regularly, and maintained as the website evolves. Retrofitting accessibility onto an existing website is expensive, often requiring significant redesign and code refactoring.

For most companies, accessibility is a cost center with no direct revenue attribution. A 2023 survey by the International Association of Accessibility Professionals (IAAP) found that 62% of organizations cited "lack of budget" as their primary barrier to accessibility compliance, and 48% cited "lack of organizational priority."

### The Awareness Problem

Many web developers have never been trained in accessibility. A 2024 study by Stack Overflow's Developer Survey found that only 24% of professional web developers had received any formal accessibility training. University computer science programs rarely include accessibility in their curricula. The result is that developers do not build accessible websites because they do not know how, and they do not know how because no one taught them.

### The Enforcement Problem

Legal enforcement of web accessibility is inconsistent. In the US, the Americans with Disabilities Act (ADA) applies to websites, but specific technical standards have only recently been codified (the Department of Justice issued its final rule on web accessibility in April 2024, requiring WCAG 2.1 Level AA compliance for state and local governments). Private sector enforcement relies primarily on lawsuits, which are reactive rather than preventive.

The result is a web that works well for the typical user persona (young, sighted, mouse-using, native-language-speaking) and poorly for everyone else.

## Building Your Personal Accessibility Toolkit

Since you cannot fix the web, you can fix your experience of it. Safari on iPhone and Mac, combined with built-in accessibility features and targeted extensions, gives you tools to address the most common accessibility failures on your end.

### Tool 1: Safari Reader Mode

Safari's Reader mode (accessible by tapping the page icon in the address bar on iPhone or the text button on Mac) strips a page down to its essential content: the article text, headings, and images, rendered in a clean, customizable format.

Reader mode solves multiple accessibility problems simultaneously:
- **Low contrast:** Reader mode applies your chosen color scheme with high-contrast text
- **Poor typography:** You control the font, size, and spacing
- **Cluttered layouts:** Navigation, sidebars, ads, and decorative elements are removed
- **Distracting animations:** All motion is eliminated

**Customization options in Reader:**
- Font choice (including system fonts and custom typefaces)
- Font size (scalable across a wide range)
- Background color (white, sepia, gray, black)
- Line spacing adjustments (on some versions)

**Limitations:** Reader mode only works on pages Safari identifies as articles. Web applications, dashboards, e-commerce product pages, forums, and interactive content are excluded. It also removes images and media that may be integral to the content.

### Tool 2: Dynamic Type and Text Size

iOS has a system-wide text size setting (Settings > Accessibility > Display & Text Size > Larger Text) that apps can honor. When apps properly implement Dynamic Type, adjusting this setting scales text throughout the interface.

On the web, Dynamic Type does not directly apply. But Safari's page zoom (Settings > Apps > Safari > Page Zoom) provides a global zoom level for all websites. Setting this to 115% or 125% provides a meaningful readability improvement for users with mild vision impairment, without the distortion of full-page zoom.

For more granular control over web page text, [Read Easier](/apps/read-easier/) modifies text presentation on individual pages, adjusting size, font, and spacing to match your needs. This goes beyond simple zoom by reformatting text flow, which prevents the horizontal scrolling that occurs with browser zoom on pages with fixed-width layouts.

### Tool 3: Color and Contrast Adjustment

For users with low vision or color vision deficiency, several built-in tools address contrast and color:

**Increase Contrast** (Settings > Accessibility > Display & Text Size): Subtly increases the contrast of UI elements throughout iOS. The effect is modest but noticeable.

**Bold Text** (Settings > Accessibility > Display & Text Size): Renders all system text in bold, increasing the stroke weight and making text more legible at smaller sizes. This also affects text in some (not all) apps.

**Color Filters** (Settings > Accessibility > Display & Text Size > Color Filters): Provides grayscale, red/green, green/red, and blue/yellow filters, plus a custom color tint. These are designed primarily for color vision deficiency but can also be used to reduce visual stimulation.

**Smart Invert** (Settings > Accessibility > Display & Text Size): Inverts the colors of the display while preserving the appearance of images and media. This is a blunt instrument compared to proper dark mode, but it addresses websites with bright backgrounds that lack dark mode support.

For web-specific dark mode that is more nuanced than Smart Invert, [Make It Dark Mode](/apps/make-it-dark-mode/) applies intelligent dark styling that preserves images, adjusts contrast ratios, and handles the complex CSS of modern websites.

{% include blog-cta.html app_slug="read-easier" %}

### Tool 4: VoiceOver and Spoken Content

VoiceOver is Apple's built-in screen reader, a full-featured assistive technology that reads screen content aloud and provides gesture-based navigation. While VoiceOver is designed primarily for blind and low-vision users, it also benefits:

- Users with reading disabilities (dyslexia, processing disorders)
- Users with temporary vision impairment (eye injury, surgery recovery)
- Users who want to consume text content while doing other activities
- Users with cognitive fatigue who benefit from audio reinforcement of visual text

**Full VoiceOver** (Settings > Accessibility > VoiceOver): Complete screen reader with gesture-based navigation. This is a powerful tool with a significant learning curve. New users should complete the VoiceOver Practice mode (accessible from the VoiceOver settings) before attempting to use it for general browsing.

**Speak Screen** (Settings > Accessibility > Spoken Content > Speak Screen): A lighter-weight option. Swipe down from the top of the screen with two fingers and iOS reads the entire screen aloud. A control panel appears allowing you to adjust speech rate, pause, skip forward/back, and highlight the currently spoken text.

**Speak Selection** (Settings > Accessibility > Spoken Content > Speak Selection): Select text and a "Speak" option appears in the context menu. The selected text is read aloud. This is the most targeted option, useful for having specific paragraphs or sections read aloud.

**Typing Feedback** (Settings > Accessibility > Spoken Content): Provides audio feedback as you type, reading characters, words, or auto-corrections aloud.

### Tool 5: Cognitive Accessibility Extensions

Cognitive accessibility encompasses readability, comprehension support, and reduction of cognitive load. Several issues that the WebAIM Million report does not capture fall into this category:

**Reading with dyslexia.** Standard web typography can be particularly challenging for users with dyslexia. Common issues include:
- Fonts with similar-looking characters (b/d, p/q, m/w)
- Insufficient letter spacing
- Long line lengths that make line tracking difficult
- Justified text that creates uneven word spacing
- Moving or animated content that disrupts reading focus

[Dyslexia](/apps/dyslexia/) addresses these issues by applying dyslexia-friendly formatting to web pages: adjusting letter spacing, selecting appropriate typefaces, controlling line length, and reducing visual clutter that interferes with reading.

**Vision changes with age.** Presbyopia (age-related difficulty with near vision) affects virtually everyone over 40. Standard web text at default sizes becomes increasingly difficult to read as presbyopia progresses. While browser zoom helps, it often breaks page layouts. [Presbyopia](/apps/presbyopia/) provides targeted text enhancement that adapts to the specific challenges of aging near vision.

**Content that disables user interaction.** Some websites disable text selection, right-clicking, or copying, preventing users from selecting text for screen readers, dictionary lookup, translation, or note-taking. These restrictions disproportionately affect users who rely on text manipulation for accessibility. [Allow Copy](/apps/allow-copy/) re-enables these fundamental browser capabilities on websites that inappropriately disable them.

### Tool 6: Motion and Scrolling Control

Vestibular disorders affect approximately 4% of the adult population, according to the National Institute on Deafness and Other Communication Disorders. For these users, animations, parallax scrolling, auto-playing videos, and other motion effects can trigger nausea, dizziness, and headaches.

**Reduce Motion** (Settings > Accessibility > Motion): Reduces or eliminates iOS animations (sliding transitions, parallax effects, app opening animations). This also sends a `prefers-reduced-motion` media query to websites, which well-designed sites honor by disabling animations.

However, most websites (consistent with the WebAIM data) ignore the `prefers-reduced-motion` query. For users who need to eliminate motion on non-compliant websites, using Reader mode is the most reliable approach, as it strips all page styling including animations.

For users who need controlled, predictable scrolling (users with motor impairments, users who experience motion sensitivity from unpredictable scroll behavior, or users who want hands-free reading), [Auto Scroll](/apps/auto-scroll/) provides configurable automatic scrolling at user-defined speeds.

{% include blog-cta.html app_slug="dyslexia" %}

## WCAG 2.1: Understanding the Guidelines You Are Working Around

Understanding the WCAG guidelines helps you identify what is wrong with a page and which tool will fix it.

### The Four Principles (POUR)

WCAG is organized around four principles:

**Perceivable:** Information must be presentable in ways users can perceive. This includes text alternatives for images, captions for video, sufficient color contrast, and content that can be presented in different ways (like simplified layout) without losing meaning.

**Operable:** Interface components must be operable by all users. This includes keyboard accessibility (all functions available without a mouse), sufficient time to read and interact, no content that causes seizures, and navigable structure.

**Understandable:** Information and interface operation must be understandable. This includes readable text, predictable behavior, and input assistance (error identification, labels, instructions).

**Robust:** Content must be robust enough to be interpreted by a variety of user agents, including assistive technologies. This means using standard HTML semantics, proper ARIA attributes, and following coding best practices.

### The Three Conformance Levels

**Level A:** The minimum. Addresses the most critical barriers that completely prevent access. Failure at Level A means some users literally cannot use the website at all.

**Level AA:** The standard target. Addresses barriers that create significant difficulty. Most legal requirements and organizational policies specify Level AA compliance.

**Level AAA:** The ideal. Addresses barriers that create moderate difficulty. Full Level AAA compliance across an entire website is rarely achieved, but individual guidelines at this level (like enhanced contrast ratios) are worth implementing where possible.

## The Aging Population: Why Accessibility Matters More Every Year

By 2030, all Baby Boomers will be over 65. The World Health Organization projects that by 2050, 2.1 billion people will be 60 or older. Age-related changes in vision, hearing, motor function, and cognition are not disabilities in the traditional sense, but they create identical accessibility needs.

### Vision Changes After 40

- **Presbyopia:** The lens loses flexibility, making near focus increasingly difficult. By age 50, most people need reading glasses or magnification for close work.
- **Reduced contrast sensitivity:** The ability to distinguish objects from their backgrounds declines, making low-contrast text (light gray on white, for example) progressively harder to read.
- **Slower dark adaptation:** The eyes take longer to adjust when moving between bright and dark environments.
- **Increased glare sensitivity:** Bright screens in dark environments become more uncomfortable.
- **Color perception changes:** The ability to distinguish between similar colors (particularly in the blue-green range) decreases.

These changes are universal. They are not disabilities. They are normal aging. And yet 81% of websites fail the contrast standards that accommodate them.

### Motor Changes After 60

- **Reduced fine motor precision:** Small tap targets, tiny links, and precise pointer control become increasingly difficult.
- **Increased reaction time:** Interfaces that time out, auto-advance, or require rapid interaction create barriers.
- **Tremor:** Intentional tremor affects approximately 5% of people over 65, making precise touch interaction difficult.

WCAG guideline 2.5.5 (Level AAA) recommends a minimum target size of 44x44 CSS pixels. Most website buttons and links are significantly smaller.

### Cognitive Changes

- **Working memory capacity decreases:** Complex multi-step processes become harder to manage without external support.
- **Processing speed decreases:** Animations, auto-playing content, and time-limited interactions create difficulty.
- **Selective attention changes:** Filtering relevant information from cluttered pages becomes harder.

These are not arguments against technology use. Older adults benefit enormously from digital tools, online services, and information access. They are arguments for accessible design that accommodates the universal changes of aging.

## Building Accessible Browsing Habits

Beyond installing tools, certain browsing habits significantly improve the accessible browsing experience:

### Use Reader Mode by Default

If you find yourself frequently adjusting text size, contrast, or formatting on websites, consider enabling Reader mode automatically for all websites (on supported versions of Safari). Safari > Settings > Reader > enable "Use Reader Automatically" for specific or all websites. This makes clean, customizable text the default rather than the exception.

### Create a Focused Reading Environment

For extended reading sessions:
1. Enable Focus mode to eliminate notifications
2. Use Reader mode for the content
3. Set font size and contrast to comfortable levels
4. Position the device at a comfortable viewing distance
5. Ensure adequate ambient lighting
6. Take visual breaks every 20-30 minutes

### Report Accessibility Issues

Most organizations have accessibility feedback channels (often linked in the website footer). Reporting issues serves two purposes: it may result in the specific issue being fixed, and it creates a record of user-reported barriers that informs organizational accessibility priorities. The more reports organizations receive, the harder it becomes to deprioritize accessibility.

### Know Your Legal Rights

In the US, the ADA protects your right to equal access to goods and services, including digital ones. The DOJ's 2024 rule makes WCAG 2.1 AA compliance mandatory for state and local government websites. Private sector websites are covered by Title III of the ADA, with WCAG 2.1 AA as the generally accepted technical standard.

If you encounter a website that is fundamentally inaccessible and the organization is unresponsive to feedback, you have legal recourse. The ADA provides for both individual complaints and systemic enforcement actions.

## The State of Mobile Accessibility

Mobile platforms have significantly better baseline accessibility than the web. Both iOS and Android have invested heavily in built-in accessibility features (VoiceOver, Dynamic Type, Switch Control, Assistive Touch, Voice Control, and more on iOS alone). These features are integrated at the operating system level and work consistently across native apps.

The web, accessed through mobile browsers, does not benefit from these system-level accessibility features in the same way. A native iOS app that supports Dynamic Type automatically scales its text when you change the system text size. A website in Safari does not, unless the developer specifically implemented responsive text sizing.

This disparity is another reason why personal accessibility tools for web browsing matter. The web standards exist. The enforcement is growing. But the reality today is that most websites fail to meet minimum accessibility standards, and individual users need tools to bridge the gap between the web as it exists and the web as it should be.

The tools described in this guide are not workarounds or hacks. They are legitimate accessibility technologies that implement the same principles WCAG codifies. That websites force users to apply these tools themselves is a failure of the web industry, not a reflection on the users who need them.
