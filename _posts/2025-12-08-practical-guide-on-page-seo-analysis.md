---
layout: post
title: "A Practical Guide to On-Page SEO Analysis"
description: "Learn how to analyze and improve on-page SEO factors for better search rankings. Practical techniques for title tags, meta descriptions, headings, links, and content optimization."
date: 2025-12-08
categories: [developer-tools]
tags: [seo, analysis, search-optimization, on-page]
silo: developer-tools
pillar: developer-tools
related_apps: [seo-for-safari, link-gopher]
---

A 2024 study by Backlinko analyzing 11.8 million Google search results found that the #1 organic result has an average click-through rate of 27.6%, while the #10 result gets just 2.4%. Moving from the second page of results to position 5 on the first page can increase organic traffic by 10x or more. For most websites, organic search is the single largest traffic source, and on-page SEO is the set of optimizations you have the most direct control over.

On-page SEO is the practice of optimizing individual web pages — their content, HTML structure, and metadata — to rank higher in search engine results. Unlike off-page SEO (backlinks, brand mentions, social signals) or technical SEO (site speed, crawlability, structured data), on-page optimization focuses on what is visible to both users and search engine crawlers on each page. It is also the most immediately actionable: you can audit and improve a page's on-page SEO in an afternoon and see ranking changes within weeks.

## How Search Engines Evaluate a Page

Before diving into optimization techniques, it helps to understand what Google's crawler actually sees when it visits a page. Googlebot renders the full page (JavaScript included, since 2019) and evaluates:

1. **The HTML `<head>` section** — title tag, meta description, canonical URL, Open Graph tags, language declarations, structured data
2. **The content body** — heading hierarchy, paragraph text, image alt attributes, internal and external links, content length and depth
3. **User experience signals** — Core Web Vitals (LCP, FID/INP, CLS), mobile-friendliness, HTTPS security, interstitial handling
4. **Semantic understanding** — entity recognition, topic clustering, search intent matching, E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals

Modern Google does not simply count keywords. It uses BERT and MUM language models to understand the semantic meaning of your content, match it against search intent, and evaluate whether it provides genuine value. This means the old approach of stuffing keywords into every element is not just ineffective — it is actively harmful.

## Title Tag Optimization: The Highest-Leverage Element

The title tag (`<title>`) remains the single most impactful on-page ranking factor. It serves three purposes simultaneously:

1. **Search ranking signal** — Google uses the title to understand what the page is about
2. **Search result headline** — users see it as the clickable blue link in search results
3. **Browser tab label** — helps users identify the tab

### Technical Requirements

```html
<!-- Good: Specific, keyword-leading, under 60 characters -->
<title>How to Set Up PostgreSQL Replication on Ubuntu 24.04</title>

<!-- Bad: Generic, keyword-stuffed, too long -->
<title>PostgreSQL Database Replication Setup Guide Tutorial for Ubuntu Linux Server Database Administration</title>

<!-- Bad: Missing entirely -->
<!-- (no title tag) -->

<!-- Bad: Same title on multiple pages -->
<title>My Company</title>  <!-- used on every page -->
```

**Character limit:** Google displays approximately 55-60 characters of a title tag (technically, 600 pixels wide). Titles longer than this get truncated with an ellipsis. Place your most important information within the first 55 characters.

**Keyword placement:** Keywords closer to the beginning of the title carry slightly more weight. "PostgreSQL Replication Guide" will typically outrank "A Complete Guide to PostgreSQL Replication" for the query "PostgreSQL replication," all else being equal.

**Click-through rate optimization:** Rankings get you visibility; click-through rate determines if that visibility converts to traffic. Titles that include numbers ("7 Ways to..."), parenthetical clarifications ("(2026 Guide)"), or power words ("Complete," "Practical," "Step-by-Step") tend to earn higher CTR.

**Common mistakes:**
- Duplicate titles across pages (each page must have a unique title)
- Using just the brand name without page-specific keywords
- Keyword stuffing (repeating the same term multiple times)
- Titles that do not match the page content (Google may rewrite them)

### When Google Rewrites Your Title

Since August 2021, Google has been generating its own page titles in search results when it determines the original title is suboptimal. Common triggers:

- Title is too long (Google truncates or rewrites)
- Title does not match the page content
- Title is "boilerplate" (same template across many pages)
- Title contains excessive keyword repetition
- H1 tag provides a better description than the title

You can check whether Google is rewriting your titles by searching for your page and comparing the displayed title with your `<title>` tag. If Google consistently rewrites your titles, your original titles likely need improvement.

## Meta Description: The Sales Copy of Search Results

The meta description does not directly influence rankings — Google confirmed this in 2009 and has reiterated it since. However, it heavily influences click-through rate, which indirectly affects rankings through engagement signals.

```html
<!-- Good: Compelling, includes keyword, clear value proposition -->
<meta name="description" content="Step-by-step guide to setting up streaming replication in PostgreSQL 16 on Ubuntu 24.04. Covers primary and standby configuration, failover testing, and monitoring.">

<!-- Bad: Too short, no value proposition -->
<meta name="description" content="PostgreSQL replication guide.">

<!-- Bad: Keyword-stuffed -->
<meta name="description" content="PostgreSQL replication PostgreSQL streaming replication PostgreSQL replication setup PostgreSQL replication Ubuntu PostgreSQL replication guide.">
```

**Optimal length:** 150-160 characters. Google displays up to about 155 characters (920 pixels) on desktop and slightly fewer on mobile. Descriptions shorter than 120 characters waste valuable real estate. Descriptions longer than 160 characters get truncated.

**Include your keyword.** When a search term matches text in the meta description, Google bolds it in the search results. This visual emphasis draws the eye and increases click probability.

**Write it as ad copy.** The meta description is your 155-character pitch. Answer the implicit question: "Why should I click this result instead of the other nine?"

**Note:** Google displays the specified meta description only about 37% of the time (per a 2020 Portent study). The rest of the time, it generates a snippet from page content that better matches the specific query. Despite this, writing a strong meta description is worthwhile — it serves as the default when Google does not generate its own snippet, and it helps define how you want the page to be presented.

## Heading Hierarchy: Content Structure for Machines and Humans

Headings (`<h1>` through `<h6>`) serve a dual purpose: they organize content for human readers (providing visual hierarchy and scanability) and signal topic structure to search engines.

### The Rules

**One H1 per page.** The H1 should contain your primary keyword and clearly state what the page is about. On a blog post, the H1 is typically the article title.

**Logical hierarchy.** H2 tags define major sections. H3 tags define subsections within H2 sections. Do not skip levels (e.g., jumping from H2 to H4).

```html
<!-- Correct hierarchy -->
<h1>PostgreSQL Replication Guide</h1>
  <h2>Prerequisites</h2>
  <h2>Setting Up the Primary Server</h2>
    <h3>Installing PostgreSQL</h3>
    <h3>Configuring postgresql.conf</h3>
    <h3>Configuring pg_hba.conf</h3>
  <h2>Setting Up the Standby Server</h2>
    <h3>Base Backup</h3>
    <h3>Recovery Configuration</h3>
  <h2>Testing Failover</h2>

<!-- Incorrect: Skipped levels, multiple H1s -->
<h1>PostgreSQL Replication</h1>
<h1>Setup Guide</h1>
  <h4>Prerequisites</h4>  <!-- Skipped H2 and H3 -->
  <h2>Primary Server</h2>
    <h4>Installation</h4>  <!-- Skipped H3 -->
```

**Keyword distribution.** Include your primary keyword in the H1 and at least one H2. Use semantically related terms in other headings. For a page about "PostgreSQL replication," related heading terms might include "streaming replication," "standby server," "failover," and "WAL archiving."

### Auditing Heading Structure

You can quickly audit a page's heading structure with a browser console command:

```javascript
// Print the heading hierarchy of any page
document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(h => {
  const indent = '  '.repeat(parseInt(h.tagName[1]) - 1);
  console.log(`${indent}${h.tagName}: ${h.textContent.trim().substring(0, 60)}`);
});
```

This outputs something like:
```
H1: PostgreSQL Replication Guide
  H2: Prerequisites
  H2: Setting Up the Primary Server
    H3: Installing PostgreSQL
    H3: Configuring postgresql.conf
```

A proper analysis tool automates this and flags issues — missing H1, multiple H1s, skipped levels, headings that are too long or too short. [SEO for Safari](/apps/seo-for-safari/) performs this analysis automatically for any page you visit, displaying the heading hierarchy alongside other on-page factors.

{% include blog-cta.html app_slug="seo-for-safari" %}

## Content Optimization: Beyond Keywords

### Search Intent Alignment

The most important content optimization factor is matching search intent — the reason behind the user's query. Google categorizes intent into four types:

| Intent Type | Example Query | Expected Content |
|---|---|---|
| Informational | "what is PostgreSQL replication" | Explanatory article or guide |
| Navigational | "PostgreSQL documentation" | Link to official docs |
| Commercial | "best database replication tools" | Comparison or review |
| Transactional | "buy PostgreSQL hosting" | Product/service page |

Before writing or optimizing a page, search for your target keyword and analyze the top 10 results. If every result is a how-to guide and your page is a product landing page, you will not rank — not because your page is poorly optimized, but because it does not match the intent Google has learned to associate with that query.

### Content Depth and Comprehensiveness

Google's Helpful Content system (introduced 2022, updated 2024) evaluates whether content provides genuine value or was created primarily for search engine ranking. Signals of helpful content include:

- **Original information.** Data, research, analysis, or expertise not available elsewhere
- **Complete coverage.** Addresses follow-up questions a reader would naturally have
- **First-hand experience.** Evidence of actual experience with the topic (screenshots, specific examples, nuanced opinions)
- **Added value over existing results.** Provides something the current top results do not

**Word count is not a ranking factor** — Google has stated this explicitly. However, comprehensive coverage of a complex topic naturally requires more words than thin coverage. The correlation between content length and ranking is a side effect of comprehensiveness, not a direct signal.

### Keyword Usage (The Modern Approach)

The days of targeting a specific "keyword density" (2-3% was the old wisdom) are long gone. Modern keyword optimization means:

**Use the primary keyword in these positions:**
1. Title tag
2. H1 heading
3. First 100 words of the content
4. At least one H2 heading
5. URL slug
6. Image alt text (where relevant)
7. Meta description

**Use semantic variations naturally throughout the content.** For "PostgreSQL replication," natural variations include "database replication," "streaming replication," "replica server," "standby database," "data synchronization," and "WAL shipping." Google's language models understand these relationships.

**Do not force keywords.** If a sentence reads awkwardly because you shoehorned a keyword in, remove the keyword. Natural readability is more important than keyword placement for any individual sentence.

## Internal Linking: The Most Neglected On-Page Factor

Internal links — links from one page on your site to another — are consistently the most underutilized on-page SEO lever. They serve three functions:

1. **Help search engines discover pages.** Googlebot follows internal links to find new content. A page with no internal links pointing to it (an "orphan page") may never be crawled.
2. **Distribute ranking authority.** Pages that receive more internal links tend to rank better. By linking strategically, you can direct authority toward your most important pages.
3. **Signal content relationships.** When you link from a page about "PostgreSQL backups" to a page about "PostgreSQL replication" with anchor text "streaming replication setup," you are telling Google these topics are related and the linked page is relevant for that anchor text.

### Internal Linking Best Practices

**Descriptive anchor text.** The clickable text of a link should describe the destination page. "Click here" and "read more" are wasted opportunities.

```html
<!-- Good -->
<a href="/blog/postgresql-replication/">streaming replication guide</a>

<!-- Bad -->
<a href="/blog/postgresql-replication/">click here</a>
```

**Link from high-authority pages to important pages.** Your homepage and other high-traffic pages pass the most authority. Ensure they link to your most important content.

**The 3-click rule.** Every important page on your site should be reachable within 3 clicks from the homepage. Pages buried 5+ clicks deep are less likely to be crawled frequently and tend to rank worse.

**Audit regularly.** Internal link structures degrade over time as pages are added, moved, and deleted. Regular audits catch broken links and orphan pages before they damage your rankings.

### Extracting and Auditing Links

[Link Gopher](/apps/link-gopher/) extracts every link from a page, making internal link audits practical:

- **Find all internal links** on a page to verify they point to the correct destinations
- **Identify broken links** that return 404 errors
- **Analyze anchor text patterns** across your site
- **Audit competitor linking strategies** by extracting their internal link structure

Combining link extraction with on-page analysis gives you a complete picture: the SEO quality of the page itself and how it connects to the rest of your site.

{% include blog-cta.html app_slug="link-gopher" %}

## Image Optimization: Alt Text, File Names, and Performance

Images affect SEO in three ways: through their alt text (which search engines read), through their file names (which provide context), and through their file size (which affects page load speed).

### Alt Text

Alt text (`alt` attribute on `<img>` tags) serves two purposes: accessibility (screen readers read it aloud) and SEO (search engines use it to understand image content).

```html
<!-- Good: Descriptive, includes relevant keyword -->
<img src="pg-replication-diagram.webp"
     alt="PostgreSQL streaming replication architecture showing primary and standby servers">

<!-- Bad: Empty alt text -->
<img src="diagram.jpg" alt="">

<!-- Bad: Keyword-stuffed -->
<img src="diagram.jpg"
     alt="PostgreSQL replication PostgreSQL streaming replication database replication setup">

<!-- Acceptable: Decorative images can have empty alt -->
<img src="decorative-divider.svg" alt="" role="presentation">
```

### File Names

Search engines read image file names. `postgresql-replication-architecture.webp` provides more context than `IMG_4521.jpg`.

### Performance Impact

Images are typically the heaviest assets on a web page. Large, unoptimized images slow page load times, which directly affects both SEO (Core Web Vitals) and user experience.

```html
<!-- Modern responsive image with WebP and fallback -->
<picture>
  <source srcset="diagram.webp" type="image/webp">
  <source srcset="diagram.jpg" type="image/jpeg">
  <img src="diagram.jpg" alt="Architecture diagram"
       width="800" height="600" loading="lazy">
</picture>
```

Key image optimization techniques:
- **Use WebP format** for photographs (25-35% smaller than JPEG)
- **Use SVG** for icons, logos, and diagrams
- **Set explicit width and height** to prevent Cumulative Layout Shift (CLS)
- **Use `loading="lazy"`** for images below the fold
- **Compress aggressively** — most images can lose 50-70% of file size with imperceptible quality loss

## URL Structure

Clean, descriptive URLs are a minor but consistent ranking signal.

```
Good:  /blog/postgresql-streaming-replication-guide/
Bad:   /blog/?p=4521
Bad:   /blog/2024/03/15/a-complete-and-comprehensive-guide-to-setting-up-postgresql-streaming-replication-on-ubuntu/
```

**Guidelines:**
- Include the primary keyword
- Use hyphens to separate words (not underscores)
- Keep it under 60 characters when possible
- Avoid parameter strings and session IDs
- Use lowercase exclusively
- Remove stop words ("a," "the," "and," "of") when they do not affect meaning

## A Complete On-Page SEO Audit Checklist

For every important page on your site, verify each element:

**Title Tag**
- [ ] Unique across the site
- [ ] Under 60 characters
- [ ] Primary keyword within the first 55 characters
- [ ] Compelling for human readers (not just search engines)
- [ ] Not being rewritten by Google (check by searching for the page)

**Meta Description**
- [ ] Unique across the site
- [ ] 150-160 characters
- [ ] Includes primary keyword (for bold matching in results)
- [ ] Reads as a compelling pitch to click

**Heading Structure**
- [ ] Exactly one H1 containing the primary keyword
- [ ] Logical H2/H3/H4 hierarchy with no skipped levels
- [ ] H2 headings include semantically related terms
- [ ] Headings are descriptive, not clever (search engines do not understand puns)

**Content**
- [ ] Matches the search intent for target keywords
- [ ] Primary keyword in the first 100 words
- [ ] Comprehensive coverage of the topic
- [ ] Original information or analysis not available elsewhere
- [ ] Updated within the last 12 months (for time-sensitive topics)
- [ ] Readable: short paragraphs, clear language, scannable structure

**Internal Links**
- [ ] At least 3-5 internal links to related content
- [ ] Descriptive anchor text on all links
- [ ] No broken internal links (404s)
- [ ] Page is reachable within 3 clicks from homepage

**Images**
- [ ] All images have descriptive alt text
- [ ] File names are descriptive (not `IMG_4521.jpg`)
- [ ] Images are compressed and appropriately sized
- [ ] Width and height attributes set to prevent layout shift
- [ ] Lazy loading enabled for below-the-fold images

**URL**
- [ ] Clean, descriptive, includes primary keyword
- [ ] Uses hyphens, lowercase, no parameters

**Technical**
- [ ] Page loads in under 2.5 seconds (LCP target)
- [ ] No layout shifts during load (CLS under 0.1)
- [ ] Mobile-friendly layout
- [ ] HTTPS enabled
- [ ] Canonical URL set correctly

## Things Most SEO Guides Don't Tell You

**The #1 ranking factor is matching search intent.** You can have perfect title tags, flawless heading structure, and optimized images — but if your content does not match what users are looking for when they type a query, you will not rank. Always start optimization by analyzing the intent behind your target keywords.

**Page speed matters less than you think (until it doesn't).** Google has said that page speed is a "tiebreaker" signal — it matters when two pages are otherwise equally relevant. A page that loads in 1.8 seconds will not outrank a more relevant page that loads in 3.2 seconds. But if two pages are equally relevant, the faster one wins.

**Freshness is overrated for evergreen content.** Google applies a freshness boost for time-sensitive queries ("best laptops 2026," "election results"), but evergreen technical content does not need constant updates to maintain rankings. A well-written guide on SQL joins from 2021 can still rank #1 in 2026 if the content remains accurate and comprehensive.

**Featured snippets are won through formatting.** If you want to appear in Google's featured snippet (the answer box above result #1), structure your content to directly answer common questions. Use a question as an H2, then provide a concise 40-60 word answer immediately below it. Tables, ordered lists, and definition-style paragraphs are disproportionately featured.

**Cannibalizing your own keywords is more common than you think.** If you have multiple pages targeting the same keyword, they compete against each other. Google picks one (often the wrong one) and suppresses the others. Audit your site for keyword cannibalization by searching `site:yourdomain.com "target keyword"` and checking if multiple pages appear.

## Automating Your SEO Workflow

Rather than manually checking each element on every page, build a systematic workflow:

1. **Use browser-based analysis for spot checks.** [SEO for Safari](/apps/seo-for-safari/) lets you analyze any page instantly — your own or competitors'. Make it a habit to run a quick analysis on every page you publish.

2. **Extract and audit links periodically.** [Link Gopher](/apps/link-gopher/) makes link extraction a one-click operation. Run it monthly on your most important pages to verify internal linking is healthy.

3. **Monitor rankings for your target keywords.** On-page optimization is an input; rankings are the output. Without tracking, you cannot measure impact. For app developers, the same principle applies to [App Store keyword rankings](/blog/developer-tools/how-to-track-app-store-keyword-rankings-real-time/).

4. **Stay current with algorithm changes.** Google makes thousands of updates per year. Following SEO news through [an efficient tech news reading system](/blog/developer-tools/how-to-keep-up-tech-news-hacker-news-rss/) helps you distinguish real algorithm shifts from noise.

5. **Inspect well-ranking pages technically.** When a competitor consistently outranks you, [inspect their page with developer tools](/blog/developer-tools/best-ways-inspect-debug-websites-safari/) to understand their technical implementation — heading structure, schema markup, image optimization, and loading performance.

On-page SEO is not a one-time checklist. It is an ongoing practice of analysis, optimization, measurement, and iteration. The developers and content creators who treat it as a regular discipline — auditing pages quarterly, tracking rankings monthly, and staying current with search engine developments — are the ones who build sustainable organic traffic over time.
