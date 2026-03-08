---
layout: post
title: "How to Keep Up with Tech News: Hacker News, RSS & More"
description: "Build an efficient tech news reading system using Hacker News, RSS feeds, and curated readers. Stay informed without drowning in content or wasting time on social media."
date: 2026-04-17
categories: [developer-tools]
tags: [tech-news, hacker-news, rss, reading]
silo: developer-tools
pillar: developer-tools
related_apps: [tech-news-pro, rss-reader]
---

A 2023 Stack Overflow survey found that 80% of developers learn about new tools and technologies through online communities, blogs, and news aggregators. Yet a separate study by RescueTime estimated that the average knowledge worker spends 2 hours and 11 minutes per day on news and social media — much of it low-signal content that neither informs nor advances their work. The challenge is not access to information; it is building a system that filters signal from noise without consuming your productive hours.

The developers who consistently stay ahead of the curve are not reading more. They are reading better, using structured systems that surface high-quality content automatically and minimize time spent on curation.

## Why Most Tech News Consumption Fails

Before building a better system, it helps to understand why the default approaches break down.

### The Algorithmic Feed Problem

Twitter/X, Reddit, LinkedIn, and other social platforms use engagement-optimized algorithms. These algorithms promote content that generates reactions — outrage, controversy, hot takes, memes — over content that is genuinely informative. A nuanced technical analysis of a database migration strategy will always lose in engagement metrics to a tweet-length opinion about whether tabs or spaces are better.

The algorithm is also recency-biased. You see what is trending now, not what is most relevant to your work. This creates a false sense of urgency around topics that have no bearing on your actual projects.

### The Newsletter Avalanche

Email newsletters experienced a renaissance around 2019-2022, but many developers now suffer from newsletter fatigue. The average tech-interested professional subscribes to 5-15 newsletters, each arriving on its own schedule. Monday morning might bring three newsletters totaling 15,000 words. By Wednesday, another four arrive. They pile up unread, creating guilt and eventually mass-unsubscribes.

Newsletters are also push-based — they arrive on the sender's schedule, not when you are ready to read. A weekly digest about Kubernetes that lands on Tuesday is useless if your Kubernetes work happens on Thursday.

### The Tab Accumulation Syndrome

Without a structured system, many developers fall into a pattern of opening dozens of browser tabs throughout the day. An article catches your eye on a Slack channel. A colleague shares a blog post. You stumble on an interesting GitHub repo. By afternoon, you have 30 open tabs, a nagging feeling that you should read them all, and no time to do so. Most tabs are eventually closed unread.

## The Foundation: Hacker News as a Quality Filter

Hacker News (news.ycombinator.com) has operated since 2007, run by Y Combinator. Its community of roughly 500,000 active users votes on submitted links, creating a continuously updated front page of the most interesting technical content on the internet. The content ranges across programming, science, startups, engineering, and occasionally philosophy and history — but the community's voting patterns consistently reward depth over clickbait.

### Why Hacker News Works Where Reddit Fails

Both Hacker News and Reddit are community-curated link aggregators, but they diverge in critical ways:

**Moderation philosophy.** Hacker News moderators (primarily Daniel Gackle, known as "dang") actively penalize flame wars, political threads, and low-effort comments. The guidelines explicitly ask users to avoid snark and to engage charitably with ideas they disagree with. This creates a comment section that is frequently as valuable as the linked article itself.

**No subreddits.** The single-feed structure means content competes on quality alone, not on which niche community upvotes it. A brilliant post about compiler optimization competes for front-page space with a post about a new SaaS launch, and the better content wins.

**Penalty for controversy.** Hacker News has a flame-detection system that demotes posts generating primarily contentious comments. This is the opposite of engagement-optimized platforms, where controversy boosts visibility.

**Vote ring detection.** Coordinated upvoting is detected and penalized. This limits the effectiveness of marketing campaigns trying to game the front page, keeping content quality higher than platforms where astroturfing is rampant.

### Reading Hacker News Effectively

The raw Hacker News website is intentionally minimalist — plain text, no images, no JavaScript-heavy rendering. This is by design (Paul Graham wanted it to load fast and discourage superficial engagement), but it makes extended reading sessions on mobile devices uncomfortable.

A dedicated reader app solves this. [Tech News Pro](/apps/tech-news-pro/) provides a clean, mobile-optimized interface to Hacker News with features the default site lacks:

- **Article rendering.** Opens linked articles in a clean reading view, stripping ads, navigation, and tracking scripts
- **Threaded comments.** HN's comment threads can run hundreds of replies deep. Collapsible threading makes navigation manageable
- **Offline caching.** Save articles and comment threads for reading during commutes or flights
- **Filtering and bookmarking.** Surface stories matching your interests and save threads for reference

{% include blog-cta.html app_slug="tech-news-pro" %}

### Hacker News Power User Techniques

**Use the "past" page.** `news.ycombinator.com/front` shows previous days' front pages. If you miss a day, check yesterday's front page rather than scrolling the current one — the best stories from 24 hours ago will have settled into their final position with full comment threads.

**The "best" filter.** `news.ycombinator.com/best` shows the highest-voted recent stories, cutting through the noise of new submissions that have not been vetted yet.

**Algolia search for HN.** `hn.algolia.com` provides full-text search across all Hacker News stories and comments. This is invaluable for researching a topic — searching "Postgres vacuum tuning" returns dozens of deeply technical discussions you won't find ranked highly on Google.

**Follow specific users.** Some HN users consistently post high-quality comments in specific domains. You can view any user's comment history at `news.ycombinator.com/threads?id=USERNAME`. Bookmarking a few domain experts is like having curated micro-newsletters.

## RSS: The Most Underrated Information Technology

RSS (Really Simple Syndication) was declared dead so many times after Google Reader shut down in 2013 that it has become a cliche to say "RSS is not dead." But more than a decade later, RSS remains the single most effective technology for following diverse content sources without platform lock-in or algorithmic interference.

### How RSS Works (and Why It Matters)

Every website with an RSS feed publishes an XML file that lists its recent posts. Your RSS reader polls these feeds at regular intervals and presents new items in a unified, reverse-chronological timeline. There is no algorithm deciding what you see. There is no platform taking a cut or injecting ads. There is no engagement optimization. You see everything from your chosen sources, in order.

This architectural simplicity is what makes RSS powerful:

- **No deplatforming risk.** If Twitter changes its algorithm or a subreddit goes private, your RSS feeds continue working.
- **No attention manipulation.** Items appear in chronological order, period.
- **No vendor lock-in.** You can export your feed list as an OPML file and import it into any other reader.
- **Complete coverage.** RSS shows you every post from a source, not just the ones an algorithm selects.

### Finding RSS Feeds

Most blogs still publish RSS feeds, even if they don't prominently link to them. Common feed URL patterns:

```
https://example.com/feed
https://example.com/rss
https://example.com/feed.xml
https://example.com/atom.xml
https://example.com/index.xml
https://example.com/rss.xml
```

For sites that don't publish RSS, several services generate feeds from arbitrary web pages. Feedity, FetchRSS, and the open-source RSS-Bridge project can create feeds from almost any regularly updated page.

**GitHub repositories.** Every GitHub repo has an RSS feed for releases: `https://github.com/{owner}/{repo}/releases.atom`. This is the best way to track releases for dependencies you use.

**YouTube channels.** Every YouTube channel has a hidden RSS feed: `https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}`. No algorithm, no recommended videos — just the uploads from channels you choose.

**Subreddits.** Add `.rss` to any subreddit URL: `https://www.reddit.com/r/programming/.rss`. This gives you the subreddit content without the Reddit interface or recommendation engine.

### A Curated RSS Starter Pack for Developers

[RSS Reader](/apps/rss-reader/) provides a streamlined mobile reading experience for managing your feeds. Here are high-value feeds to start with, organized by category:

**General Technology**
- Ars Technica (`arstechnica.com/feed`) — long-form technical journalism
- The Pragmatic Engineer (`newsletter.pragmaticengineer.com/feed`) — software engineering industry analysis from Gergely Orosz
- Julia Evans' blog (`jvns.ca/atom.xml`) — systems programming explained clearly
- Dan Luu (`danluu.com/atom.xml`) — data-driven engineering analysis

**Programming Languages and Frameworks**
- Official Swift Blog (`swift.org/atom.xml`) — Swift evolution and releases
- Rust Blog (`blog.rust-lang.org/feed.xml`) — Rust release announcements
- React Blog (`react.dev/rss.xml`) — React ecosystem updates
- Python Insider (`blog.python.org/feeds/posts/default`) — CPython development

**Security**
- Krebs on Security (`krebsonsecurity.com/feed/`) — investigative security journalism
- Troy Hunt (`troyhunt.com/rss/`) — web security, data breaches, HIBP updates
- Project Zero (`googleprojectzero.blogspot.com/feeds/posts/default`) — Google's vulnerability research team

**DevOps and Infrastructure**
- Cloudflare Blog (`blog.cloudflare.com/rss/`) — CDN, DNS, and networking deep dives
- Netflix Tech Blog (`netflixtechblog.com/feed`) — distributed systems at scale
- Fly.io blog (`fly.io/blog/feed.xml`) — infrastructure and deployment

{% include blog-cta.html app_slug="rss-reader" %}

## Building a Sustainable Reading Routine

Having the right tools and sources is necessary but not sufficient. Without discipline, even a well-curated feed becomes another source of overwhelm.

### The 20-Minute Morning Scan

Allocate a fixed 20-minute block each morning for tech reading. This is not a minimum — it is a maximum. Treat it like a time-boxed standup meeting.

**Minutes 1-5:** Scan Hacker News front page. Open 2-3 articles that are directly relevant to your current work or deeply interesting. Ignore the rest.

**Minutes 5-15:** Check RSS feeds. Mark everything as read that you can evaluate from the headline alone. Open the 3-5 items that deserve full reading.

**Minutes 15-20:** Skim the opened articles. For any that require more than 5 minutes of focused reading, save them for your dedicated reading session (see below).

### The Weekly Deep Read

Set aside 45-60 minutes once per week for long-form reading. This is when you read the articles you saved during your morning scans — the 3,000-word technical deep dives, the research papers, the detailed case studies. Saturday morning or Sunday evening works well for many developers.

### The Triage Mindset

The most important skill in information consumption is ruthless triage. For every item that enters your awareness:

1. **Is this relevant to my current projects?** If yes, read it now or save it for the weekly deep read.
2. **Will this be relevant within the next 6 months?** If yes, save it.
3. **Is this genuinely interesting?** If yes and you have time, read it.
4. **Everything else?** Mark as read and move on without guilt.

The key insight is that **skipping an article costs nothing**. Truly important developments will surface repeatedly — through multiple blog posts, HN discussions, colleague mentions, and conference talks. If you miss something critical, it will find its way back to you.

### Feed Hygiene

Review your feed list quarterly:

- **Unsubscribe from feeds that consistently disappoint.** If you skip 90% of a feed's items, it is adding cognitive load without proportional value.
- **Add 2-3 new feeds per quarter.** When you discover a blog that publishes excellent content, add it immediately.
- **Keep your total feed count under 50.** Beyond that, the unread count becomes anxiety-inducing rather than informative. Twenty to thirty high-quality feeds beats a hundred mediocre ones.

## Alternative Sources Worth Considering

### Technical Podcasts (Background Learning)

Podcasts fill gaps that text-based sources cannot — commutes, workouts, household chores. High-quality options include:

- **Changelog** — interviews with open-source maintainers and project leads
- **Software Engineering Daily** — daily deep dives into specific technologies
- **CoRecursive** — stories behind significant software projects
- **ATP (Accidental Tech Podcast)** — Apple ecosystem and broader tech analysis

The key is treating podcasts as background learning, not primary news. They are best for building ambient awareness of trends, not for staying current on breaking developments.

### Conference Talks (Concentrated Expertise)

Conference talks on YouTube from WWDC, Strange Loop, QCon, FOSDEM, and GopherCon represent some of the highest-quality technical content available. They are also time-intensive (30-60 minutes each), so they belong in the weekly deep read category, not the daily scan.

### Curated Aggregators

- **Lobsters** (`lobste.rs`) — invitation-only link aggregator with stricter moderation than HN. Smaller community, higher average quality.
- **Tilde News** (`tilde.news`) — similar model to Lobsters with a different community.
- **daily.dev** — browser extension that aggregates tech blog posts with a personalized feed.

## Things Most Guides Don't Tell You About Staying Informed

**Following individuals beats following publications.** A single excellent engineer's personal blog will produce more insight per post than most tech news sites. Find people who work on problems similar to yours and follow their blogs via RSS.

**Reading old content is often more valuable than reading new content.** A 2018 blog post about database indexing strategies is probably just as relevant today as it was then. Most foundational technical knowledge has a much longer shelf life than the daily news cycle implies.

**Comments are often better than articles.** On Hacker News, the comment section frequently contains corrections, additional context, alternative viewpoints, and related resources that the original article missed. Read the top comments, not just the linked piece.

**You don't need to have an opinion on everything.** The pressure to form hot takes on every new technology launch or framework release is social, not professional. It is perfectly valid to observe a trend for months before forming a view.

**Unfollowing is productive.** Every source you remove from your feed is time and attention reclaimed. Aim for a lean, high-signal system rather than comprehensive coverage of everything.

## Connecting to Your Broader Workflow

Information consumption is one component of the developer toolkit. The content you discover through your reading system often feeds directly into other work: debugging approaches you read about get applied when [inspecting websites in Safari](/blog/best-ways-inspect-debug-websites-safari/), documentation techniques get used when [converting HTML to Markdown](/blog/how-to-convert-html-to-markdown-documentation/), and SEO insights inform both [on-page SEO analysis](/blog/practical-guide-on-page-seo-analysis/) and [App Store keyword optimization](/blog/how-to-track-app-store-keyword-rankings-real-time/).

For developers who also build [Safari extensions](/blog/best-developer-tools-and-extensions-for-safari/), staying current with WebKit changes and Safari release notes through RSS is practically mandatory — Apple's WebKit blog feed (`webkit.org/feed/`) should be in every Safari extension developer's reader.

The goal is not to read everything. The goal is to build a system that surfaces the right information at the right time with minimal effort — and then to trust that system enough to stop worrying about what you might be missing.
