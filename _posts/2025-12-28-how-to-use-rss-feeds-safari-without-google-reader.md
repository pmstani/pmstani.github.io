---
layout: post
title: "How to Use RSS Feeds in Safari: The Google Reader Alternative You Need"
description: "Learn how to use RSS feeds in Safari to build a curated, algorithm-free news reading experience. Covers finding feeds, OPML management, and curation strategies."
date: 2025-12-28
categories: [developer-tools]
tags: [rss, feeds, news, information-management]
silo: developer-tools
pillar: developer-tools
related_apps: [rss-reader]
---

## The Year RSS "Died" and Why It Never Actually Did

On July 1, 2013, Google shut down Google Reader. The service had been the dominant RSS reader, with an estimated 24 million users at its peak. Google cited declining usage as the reason, though many attributed the shutdown to Google's strategic pivot toward Google+ and algorithmic content delivery. In the tech press, headlines proclaimed the "death of RSS."

Twelve years later, RSS is not only alive but experiencing a quiet renaissance among users who are fed up with algorithmic feeds. A 2025 survey by the Reuters Institute found that 42% of respondents felt "overwhelmed" by algorithmic content recommendations on social platforms, and 31% had actively sought alternatives for staying informed. RSS sits at the center of this alternative: a protocol that gives you exactly what you asked for, in chronological order, without engagement optimization, without ads inserted between items, and without an algorithm deciding what you should and should not see.

The technology behind RSS is remarkably simple. RSS (Really Simple Syndication) is an XML-based format that websites publish to announce new content. An RSS feed is a structured list of items (articles, podcast episodes, video uploads, forum posts) with titles, descriptions, links, and publication dates. An RSS reader checks these feeds at regular intervals and presents new items to you in a unified interface. No account creation on each site, no notification permission prompts, no email newsletter clutter, no social algorithm.

What Google Reader's shutdown actually killed was not RSS itself but the assumption that RSS should be free, centralized, and subsidized by a tech giant. What has emerged in its place is a diverse ecosystem of RSS readers, from self-hosted open-source solutions to polished native apps, all built on the same underlying protocol that has remained stable since RSS 2.0 was published in 2002.

## How RSS Works: A Quick Technical Overview

Understanding RSS at a basic level helps you use it more effectively and troubleshoot when things do not work as expected.

### The Feed URL

Every RSS-enabled website publishes a feed at a URL. Common patterns include:

- `https://example.com/feed`
- `https://example.com/rss`
- `https://example.com/feed.xml`
- `https://example.com/rss.xml`
- `https://example.com/atom.xml` (Atom is a related but distinct format)
- `https://example.com/index.xml`

Most blogs built on WordPress, Ghost, Jekyll, Hugo, or other content management systems generate RSS feeds automatically. Major news sites (BBC, Reuters, NPR, The New York Times) publish multiple feeds organized by topic (world news, technology, sports, opinion).

### The Feed Content

A typical RSS item contains:

```xml
<item>
  <title>How to Build a Design System</title>
  <link>https://example.com/blog/design-system</link>
  <description>A practical guide to creating a consistent design system...</description>
  <pubDate>Mon, 01 May 2026 08:00:00 GMT</pubDate>
  <category>Design</category>
  <guid>https://example.com/blog/design-system</guid>
</item>
```

The RSS reader parses this XML and presents it in a readable format: title, publication date, preview text, and a link to the full article. Some feeds include the full article content in the `<description>` or `<content:encoded>` field, allowing you to read the entire piece within the reader without visiting the website. Others include only a summary, requiring a click-through to the original site.

### Atom: RSS's Better-Designed Cousin

Atom (RFC 4287) is an alternative syndication format that addresses some of RSS 2.0's ambiguities. Atom feeds use different tag names (`<entry>` instead of `<item>`, `<updated>` instead of `<pubDate>`) and have a more rigorous specification. Most RSS readers support both formats transparently, so the distinction rarely matters from a user perspective. When you add a feed URL to a reader, it handles the format detection automatically.

### JSON Feed: The Modern Alternative

JSON Feed, introduced in 2017, provides the same functionality as RSS/Atom but uses JSON instead of XML. It is simpler to parse and write, and its adoption is growing among developer-focused sites and blogs. A JSON Feed looks like:

```json
{
  "version": "https://jsonfeed.org/version/1.1",
  "title": "Example Blog",
  "items": [
    {
      "id": "https://example.com/blog/design-system",
      "title": "How to Build a Design System",
      "url": "https://example.com/blog/design-system",
      "date_published": "2026-05-01T08:00:00Z",
      "content_text": "A practical guide..."
    }
  ]
}
```

Modern RSS readers support JSON Feed alongside RSS and Atom.

## Setting Up RSS in Safari

Safari removed its native RSS reader in Safari 6 (2012), which predated Google Reader's shutdown by a year. Since then, RSS in Safari requires either a dedicated app or a browser extension.

[RSS Reader for Safari](/apps/rss-reader/) integrates RSS feed reading directly into Safari, providing a native browsing experience for following websites without leaving your browser.

{% include blog-cta.html app_slug="rss-reader" %}

### Installation and Initial Setup

**On Mac:**

1. Install RSS Reader from the Mac App Store.
2. Open **Safari > Settings > Extensions** and enable the extension.
3. Grant website access permissions.
4. Click the extension icon in Safari's toolbar to access the reader interface.

**On iPhone and iPad:**

1. Install from the App Store.
2. Enable in **Settings > Apps > Safari > Extensions**.
3. Access through Safari's toolbar or extension menu.

### Adding Your First Feeds

Start with 5-10 feeds to build your reading habit before scaling up. Here is a practical starting approach:

1. **Identify your top 5 information sources.** Which websites do you visit most regularly for news, industry updates, or personal interests?
2. **Find their RSS feeds.** Visit each site and look for an RSS icon (the orange broadcast symbol), a link labeled "RSS" or "Feed" in the footer, or try appending `/feed` or `/rss` to the base URL. Many extensions also auto-detect feeds when you visit a site.
3. **Add the feed URL** to your reader. Paste the feed URL or use the reader's auto-detect feature.
4. **Organize into categories** (optional for 5-10 feeds, essential for 30+).

### Finding RSS Feeds When They Are Not Obvious

Many websites have RSS feeds but do not prominently link to them. Here are discovery techniques:

**View Page Source.** RSS feeds are typically declared in the `<head>` section of a website's HTML:
```html
<link rel="alternate" type="application/rss+xml" title="Site Name" href="/feed.xml">
```
Safari's View Source (Command+Option+U) lets you search for "rss" or "atom" to find feed declarations.

**Platform-specific patterns:**
- **WordPress sites**: Try `/feed/` or `/feed/rss/`
- **Medium publications**: Try `/feed`
- **Substack newsletters**: Try `/feed`
- **YouTube channels**: Use `https://www.youtube.com/feeds/videos.xml?channel_id=CHANNEL_ID`
- **Reddit subreddits**: Append `.rss` to any subreddit URL (e.g., `https://www.reddit.com/r/technology/.rss`)
- **GitHub releases**: Append `.atom` to any releases page (e.g., `https://github.com/user/repo/releases.atom`)

**Feed search engines.** Services like Feedly's search, RSS.app, and Feed Creator can help find feeds for sites that do not obviously publish them.

## OPML: Importing, Exporting, and Sharing Feed Lists

OPML (Outline Processor Markup Language) is the standard format for sharing collections of RSS feeds. It is essentially an XML file listing feed URLs, titles, and folder organization.

### Why OPML Matters

- **Portability.** If you switch RSS readers, export your feeds as OPML from the old reader and import into the new one. No manual re-entry of feed URLs.
- **Backup.** Your curated feed list is intellectual work. An OPML export preserves it.
- **Sharing.** You can share your OPML file with colleagues who want to follow the same sources. This is particularly useful for onboarding new team members: hand them an OPML file with the industry feeds the team follows.

### Managing OPML

Most RSS readers provide OPML import and export in their settings:

1. **Export:** Look for an "Export OPML" or "Export Feeds" option in the reader's settings. This creates an .opml file containing all your feed URLs and folder organization.
2. **Import:** Look for "Import OPML" or "Import Feeds." Select the .opml file, and the reader adds all feeds from the file, preserving folder structure.

**Best practice:** Export your OPML every month or after adding significant new feeds. Store the export in a cloud folder (iCloud Drive, Dropbox). This protects your curation work against app data loss, device replacement, or reader service shutdown, the exact scenario that made Google Reader's closure painful for millions.

## Building an Effective Feed Curation Strategy

The value of RSS is directly proportional to the quality of your feed curation. An uncurated feed list quickly becomes as overwhelming as the social media feeds you are trying to escape. Here is a systematic approach to building and maintaining a high-signal feed list.

### The Pyramid Structure

Organize your feeds into three tiers based on priority and reading frequency:

**Tier 1: Must-Read (5-10 feeds).** These are sources so consistently valuable that you read every item. They might include your company's blog (to stay aware of what is published), your primary industry news source, and 2-3 individual experts whose analysis you trust. Give these feeds their own folder and check them daily.

**Tier 2: Scan-and-Select (15-25 feeds).** These are quality sources where you read roughly 30-50% of items based on headline relevance. Industry publications, secondary news sources, and topic-specific blogs fall here. Scan headlines once or twice daily and open items that match your current interests or responsibilities.

**Tier 3: Occasional Browse (10-20 feeds).** These are sources you enjoy but do not need to stay current with: personal interest blogs, less frequent publications, podcast feeds. Browse these when you have spare reading time. Accept that you will skip most items, and mark all as read weekly to prevent accumulation guilt.

### The 50-Feed Rule

Start with no more than 50 feeds total. A 2019 analysis of RSS reader usage data (from the Inoreader platform) found that users with more than 100 feeds had a read rate below 15%, meaning 85% of items went unread. Users with 30-50 feeds maintained a read rate above 40%. The sweet spot for meaningful engagement is 30-50 feeds, where you can realistically read or scan every item without the list becoming a burden.

If you find yourself consistently ignoring a feed, remove it. The RSS equivalent of inbox zero is not reading everything; it is curating your feed list so tightly that everything in it is worth your attention.

### Managing Feed Volume from High-Output Sources

Some feeds publish 20+ items per day (major news sites, high-volume subreddits, aggregate feeds). These can overwhelm your reader if mixed with lower-volume feeds. Strategies for managing them:

- **Use category-specific feeds** instead of the site's main feed. The New York Times publishes separate feeds for Technology, Science, Business, etc. Subscribe to the 2-3 categories you care about instead of the main feed.
- **Set per-feed display limits.** Some readers let you show only the most recent N items from a feed, suppressing older unread items automatically.
- **Create a separate "High Volume" folder** that you process differently from your curated feeds: scan headlines quickly, open only the most relevant items, and mark the rest as read without guilt.

### Feed Hygiene: Monthly Maintenance

Once a month, spend 15 minutes on feed maintenance:

1. **Review unread counts.** Any feed with consistently high unread counts is either too high-volume or not interesting enough. Remove or replace it.
2. **Check for dead feeds.** Feeds that have not published in 60+ days may be defunct. Verify whether the site is still active or has moved its feed URL.
3. **Evaluate signal quality.** Is each feed still providing information you act on or learn from? Interests change. A feed about a technology you were evaluating six months ago may no longer be relevant.
4. **Look for new sources.** When you discover a valuable new website through a link, social media, or recommendation, check whether it has an RSS feed and add it.

## RSS for Professional Development

RSS is particularly powerful for ongoing professional learning because it provides a consistent, structured information diet that you control.

### For Developers

Curate feeds from:
- Official blogs of the frameworks and languages you use
- Security advisory feeds for your technology stack
- GitHub release feeds for key dependencies
- Conference talk announcement feeds
- 2-3 individual developer blogs known for deep technical analysis

This creates a passive learning system: without actively searching, you are exposed to new releases, security patches, best practices, and architectural patterns relevant to your work. For a complementary approach to staying current with tech news, see our guide on [how to keep up with tech news, Hacker News, and RSS](/blog/developer-tools/how-to-keep-up-tech-news-hacker-news-rss/).

### For Marketers

Curate feeds from:
- Industry publications (Search Engine Journal, Marketing Land, Content Marketing Institute)
- Competitor blogs (track their content strategy)
- Platform official blogs (Google Search Central, Meta for Business)
- Analytics and data science blogs (for measurement methodology)
- 2-3 individual marketing practitioners with proven track records

### For Designers

Curate feeds from:
- Design system blogs from major companies (Material Design, Apple HIG updates)
- Portfolio and case study sites (Dribbble editorial, Behance featured)
- Design tool update blogs (Figma, Sketch, Adobe)
- Accessibility-focused publications
- Typography and color theory resources

## RSS vs. Newsletters vs. Social Feeds: Making the Right Choice

RSS is not always the best tool. Here is when to use each channel:

**Use RSS when:**
- You want chronological, unfiltered content from specific sources
- You read regularly and want a consolidated reading interface
- You value privacy (RSS readers do not track your reading behavior)
- You want to read without creating accounts on every site

**Use newsletters when:**
- The author provides exclusive content only in newsletter format
- You want curated content (someone else selecting the best items)
- You read infrequently and want periodic digests
- The newsletter includes original commentary or analysis not on the blog

**Use social feeds when:**
- You need real-time breaking information
- Community discussion and reaction are part of the value
- The content is primarily visual or interactive
- You want serendipitous discovery outside your established interests

Many sources offer all three channels. Choose the one that matches your consumption pattern for that specific source. Your favorite tech blogger might be best followed via RSS (chronological, complete). A weekly industry roundup might be better as a newsletter (curated, periodic). A designer sharing work-in-progress might be best on social (visual, interactive).

## Getting Started Today

The most common mistake with RSS is over-committing on day one: adding 100 feeds, creating elaborate folder structures, and then feeling overwhelmed by the unread count within a week. Start small.

Add five feeds. Just five. Choose the five websites you check most frequently by manually opening them in your browser. Replace that manual checking habit with RSS. Once those five feeds feel natural, which typically takes one to two weeks, add five more. Continue until you reach a sustainable reading volume where you are consuming most items without stress.

This gradual approach builds a reading habit rather than a reading obligation. RSS should feel like a well-stocked bookshelf, where everything is worth picking up, not like an overflowing inbox where everything demands attention. Curate ruthlessly, read selectively, and let RSS do what it does best: deliver exactly what you asked for, nothing more, nothing less.
