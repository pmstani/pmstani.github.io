# Semantic Cocoon Blog Strategy for pmstani.github.io

## Executive Summary

This plan adds a blog section to the site using a **semantic cocoon** architecture — a content strategy where articles are organized into thematic silos with strategic internal linking that builds topical authority, funnels link equity to app pages, and captures organic search traffic across all 77 apps.

The blog targets informational search queries ("how to...", "best way to...", "what is...") that map to problems each app solves. Every article links naturally to 1-3 relevant app pages, turning readers into users.

---

## Architecture Overview

```
                          ┌─────────────────────┐
                          │   /blog/ (index)     │
                          │   Blog Landing Page  │
                          └──────────┬──────────┘
                                     │
         ┌───────────┬───────────┬───┴───┬───────────┬───────────┐
         ▼           ▼           ▼       ▼           ▼           ▼
   ┌──────────┐┌──────────┐┌────────┐┌────────┐┌──────────┐┌────────┐
   │  Safari  ││Producti- ││Health &││Digital ││Education ││  Dev   │
   │Extensions││  vity    ││Wellness││Privacy ││& Learn   ││& Tech  │
   │  Silo    ││  Silo    ││ Silo   ││ Silo   ││  Silo    ││ Silo   │
   └────┬─────┘└────┬─────┘└───┬────┘└───┬────┘└────┬─────┘└───┬────┘
        │           │          │         │          │          │
   ┌────┴────┐ ┌────┴────┐ ┌──┴───┐ ┌───┴──┐ ┌────┴────┐ ┌───┴──┐
   │ Pillar  │ │ Pillar  │ │Pillar│ │Pillar│ │ Pillar  │ │Pillar│
   │  Page   │ │  Page   │ │ Page │ │ Page │ │  Page   │ │ Page │
   └────┬────┘ └────┬────┘ └──┬───┘ └──┬───┘ └────┬────┘ └──┬───┘
        │           │         │        │          │         │
   ┌────┴────┐ ┌────┴────┐ ┌─┴──┐  ┌──┴──┐ ┌────┴────┐ ┌──┴──┐
   │ 8-10   │ │  6-8    │ │ 6-8│  │ 4-6 │ │  5-7    │ │ 4-5 │
   │articles│ │articles │ │arts│  │arts │ │articles │ │arts │
   └────┬────┘ └────┬────┘ └─┬──┘  └──┬──┘ └────┬────┘ └──┬──┘
        │           │        │        │         │         │
        └───────────┴────────┴────┬───┴─────────┴─────────┘
                                  ▼
                          ┌──────────────┐
                          │  /apps/*     │
                          │  App Pages   │
                          │  (77 apps)   │
                          └──────────────┘
```

---

## Technical Implementation

### 1. Jekyll Blog Setup

**New directories and files:**
```
_posts/                          # All blog posts (Jekyll convention)
_layouts/
  blog-index.html                # Blog landing page layout
  post.html                      # Individual blog post layout
blog/
  index.html                     # Blog landing page
  safari-extensions.html         # Silo pillar page
  productivity.html              # Silo pillar page
  health-wellness.html           # Silo pillar page
  digital-privacy-security.html  # Silo pillar page
  education-learning.html        # Silo pillar page
  developer-tools.html           # Silo pillar page
_includes/
  related-apps.html              # Reusable component: app cards within posts
  related-posts.html             # Reusable component: related articles sidebar
  breadcrumbs.html               # Breadcrumb navigation for SEO
  blog-cta.html                  # Call-to-action block linking to apps
```

**_config.yml additions:**
```yaml
# Blog settings
permalink: /blog/:categories/:title/
paginate: 10
paginate_path: "/blog/page/:num/"

# Collections for pillar pages
collections:
  pillars:
    output: true
    permalink: /blog/:path/

# Default front matter
defaults:
  - scope:
      path: "_posts"
      type: "posts"
    values:
      layout: "post"
      author: "Tenpercent Apps"
  - scope:
      path: "_pillars"
      type: "pillars"
    values:
      layout: "pillar"
```

### 2. Post Front Matter Schema

Every blog post uses this front matter to enable the semantic cocoon linking:

```yaml
---
layout: post
title: "How to Enable Dark Mode on Every Website in Safari"
description: "Learn how to force dark mode on all websites using Safari extensions for iPhone and Mac."
date: 2026-03-15
categories: [safari-extensions]
tags: [dark-mode, eye-strain, safari, accessibility]
silo: safari-extensions              # Which silo this belongs to
pillar: safari-extensions            # Links back to pillar page
related_apps: [make-it-dark-mode]    # App slugs to promote (from apps.yml)
related_posts:                       # Manual semantic links within silo
  - best-safari-extensions-2026
  - reduce-eye-strain-iphone
image: /img/blog/dark-mode-safari.jpg
---
```

### 3. Internal Linking Rules (Semantic Cocoon Structure)

Every article MUST follow these linking rules:

| Link Type | Direction | Rule |
|-----------|-----------|------|
| **Pillar link** | Article → Pillar page | Every article links to its silo's pillar page (in breadcrumbs + body) |
| **Sibling links** | Article ↔ Article | Each article links to 2-4 other articles within the same silo |
| **App links** | Article → App page | Each article links to 1-3 relevant app pages with CTA blocks |
| **Cross-silo links** | Silo A → Silo B | Limited strategic links between silos (max 1-2 per article) |
| **Blog index** | Pillar → Blog index | Each pillar page links back to the blog index |
| **Homepage link** | Blog index → Homepage | Blog nav links back to main site |

---

## Content Silos

### SILO 1: Safari Extensions (Primary Silo — Largest App Category)

**Pillar Page:** `/blog/safari-extensions/`
**Title:** "The Complete Guide to Safari Extensions for iPhone, iPad & Mac"
**Target keyword:** "best safari extensions"

This is the largest silo because 34 of 77 apps are Safari extensions. Sub-group articles by use-case:

| # | Article Title | Target Keyword | Apps Promoted | Search Intent |
|---|---------------|----------------|---------------|---------------|
| 1 | "Best Safari Extensions for iPhone and Mac in 2026" | best safari extensions 2026 | All Safari ext. apps | Informational/Commercial |
| 2 | "How to Enable Dark Mode on Every Website in Safari" | dark mode safari extension | Make It Dark Mode | How-to |
| 3 | "How to Translate Web Pages in Safari on iPhone and Mac" | translate safari extension | Translator Safari Extension | How-to |
| 4 | "How to Download All Images from a Website on Safari" | download images safari | Image Downloader | How-to |
| 5 | "How to Save Any Web Page as a PDF in Safari" | save webpage as pdf safari | Save as PDF | How-to |
| 6 | "Best Accessibility Extensions for Safari: Dyslexia, Low Vision & More" | safari accessibility extensions | Dyslexia, Presbyopia, Read Easier | Informational |
| 7 | "How to Auto-Scroll and Auto-Refresh Pages in Safari" | auto scroll safari | Auto Scroll, Auto Refresh | How-to |
| 8 | "Best Developer Tools and Extensions for Safari" | safari developer extensions | Web Inspector, Format JSON, Built With, HTML to Markdown, Link Gopher, SEO for Safari | Commercial |
| 9 | "How to Extract Emails and Links from Any Website" | extract emails from website | Email Finder, Link Gopher | How-to |
| 10 | "Best Note-Taking and Productivity Safari Extensions" | safari extensions productivity | Sticky Notes, Snapmark, Copy On Select, Allow Copy, Plain Paste | Commercial |
| 11 | "How to Check if a Website is Down (and Find Cached Versions)" | is website down check | Is it Down, Get Archive | How-to |
| 12 | "How to Download an Entire Website for Offline Reading" | download website offline | Website Downloader, Site Slurpr | How-to |
| 13 | "Daily Inspiration on Every New Tab: Bible, Quran & Motivational Quotes" | new tab quotes extension | Bible Tab, Quran Tab, Motivation Quotes Affirmations | Informational |
| 14 | "Safari Extensions for Smarter Online Shopping" | safari shopping extensions | Convert (currency), Food Scanner | Commercial |
| 15 | "How to Use AI in Safari: Extensions for Summarizing, Writing & More" | AI safari extensions | Extension AI, Prompt Wizard | Informational |

**Internal link structure:** Every article links to article #1 (the roundup) and to 2-3 thematically close siblings. Article #1 links to every article in the silo.

---

### SILO 2: Productivity & Workflow

**Pillar Page:** `/blog/productivity/`
**Title:** "iPhone & Mac Apps to Supercharge Your Productivity"
**Target keyword:** "best productivity apps iphone"

| # | Article Title | Target Keyword | Apps Promoted | Search Intent |
|---|---------------|----------------|---------------|---------------|
| 1 | "Best Productivity Apps for iPhone and Mac in 2026" | best productivity apps 2026 | All productivity apps | Commercial |
| 2 | "How to Organize Your Downloads Folder Automatically on Mac" | organize downloads mac | Tidy Downloads | How-to |
| 3 | "The Done List Method: Why Tracking Accomplishments Beats To-Do Lists" | done list productivity | The Done List | Informational |
| 4 | "How to Compare PDF Documents Side by Side" | compare pdf files | PDIFF | How-to |
| 5 | "Best Teleprompter Apps for Content Creators and Public Speakers" | teleprompter app iphone | CueVoice | Commercial |
| 6 | "How to Use AI to Transcribe Audio and Voice Notes on iPhone" | transcribe audio iphone | Transcribe | How-to |
| 7 | "How to Convert Photos to PDF on iPhone Without Extra Apps (and With)" | photo to pdf iphone | Photo to PDF | How-to |
| 8 | "How to Quickly Create New Google Docs from Anywhere" | create google doc shortcut | New | How-to |
| 9 | "Best Planning and Agenda Apps for Daily Scheduling" | daily planner app iphone | My Agenda & Planning, Day Progress | Commercial |

---

### SILO 3: Health, Wellness & Fitness

**Pillar Page:** `/blog/health-wellness/`
**Title:** "Apps for Mental Health, Meditation & Wellness on iPhone"
**Target keyword:** "best mental health apps iphone"

| # | Article Title | Target Keyword | Apps Promoted | Search Intent |
|---|---------------|----------------|---------------|---------------|
| 1 | "Best Mental Health and Wellness Apps for iPhone in 2026" | best wellness apps 2026 | All health apps | Commercial |
| 2 | "How AI Sound Therapy Can Help Relieve Tinnitus" | tinnitus sound therapy app | Tinnitus AI | Informational |
| 3 | "A Beginner's Guide to Meditation with iPhone Apps" | meditation app beginners | Lotus, Tiny Temple | Informational |
| 4 | "Daily Affirmations: The Science Behind Positive Self-Talk" | positive affirmations science | Positive Affirmations | Informational |
| 5 | "How to Track Your Mood and Improve Mental Health with Apps" | mood tracker app iphone | Mental Health by HappySteps | How-to |
| 6 | "Best Surf Forecast and Wave Report Apps for Surfers" | surf forecast app | Wave & Surf reports by Kooks | Commercial |
| 7 | "How to Make Toothbrushing Fun for Kids with Timer Apps" | toothbrush timer app kids | Toomy | How-to |
| 8 | "How to Export and Analyze Your Apple Health Data" | export apple health data | Health Export | How-to |

---

### SILO 4: Digital Privacy, Security & Utilities

**Pillar Page:** `/blog/digital-privacy-security/`
**Title:** "Protect Your Digital Life: Privacy & Security Apps for iPhone and Mac"
**Target keyword:** "best privacy apps iphone"

| # | Article Title | Target Keyword | Apps Promoted | Search Intent |
|---|---------------|----------------|---------------|---------------|
| 1 | "Best Privacy and Security Apps for iPhone and Mac" | best privacy apps 2026 | PanicVault, Safe, Clean Genie | Commercial |
| 2 | "How to Manage Passwords Securely with KeePass on iPhone" | keepass iphone app | PanicVault | How-to |
| 3 | "How to Free Up iPhone Storage by Removing Duplicate Photos" | remove duplicate photos iphone | Clean Genie | How-to |
| 4 | "How to Compress PDF Files Without Losing Quality" | compress pdf free | PDF Compressor - ThinPDF | How-to |
| 5 | "How to Create a Home Inventory for Insurance" | home inventory app insurance | Safe, Equipt | How-to |
| 6 | "Best Equipment and Asset Tracking Apps for Small Business" | equipment tracking app | Equipt | Commercial |
| 7 | "How to Check the Weather Without Ads or Tracking" | weather app no ads | Local Weather - YaWa | Informational |

---

### SILO 5: Education & Self-Improvement

**Pillar Page:** `/blog/education-learning/`
**Title:** "Learn Anything: Education & Training Apps for iPhone"
**Target keyword:** "best education apps iphone"

| # | Article Title | Target Keyword | Apps Promoted | Search Intent |
|---|---------------|----------------|---------------|---------------|
| 1 | "Best Education and Self-Improvement Apps for iPhone" | best learning apps 2026 | All education apps | Commercial |
| 2 | "How to Train Martial Arts at Home: Karate, MMA & Boxing Apps" | martial arts training app | Karate, Fight IQ | Informational |
| 3 | "How to Improve Mental Math Skills with Brain Training Apps" | mental math app | Calcular | How-to |
| 4 | "Discover Your Archetype: Personality Tests Through Mythology" | archetype personality test | Mythos | Informational |
| 5 | "How to Prepare for the Boating License Exam with Flashcards" | boating license flashcards | Flash card Boat | How-to |
| 6 | "Emergency Preparedness: Essential Survival Skills Everyone Should Know" | survival guide app | Survivalist | Informational |
| 7 | "How to Read the Bible or Quran Daily (with Safari New Tab)" | daily bible reading | Bible Tab, Quran Tab | How-to |

---

### SILO 6: Developer & Tech Tools

**Pillar Page:** `/blog/developer-tools/`
**Title:** "Essential Tools for App Developers and Tech Enthusiasts"
**Target keyword:** "app store optimization tools"

| # | Article Title | Target Keyword | Apps Promoted | Search Intent |
|---|---------------|----------------|---------------|---------------|
| 1 | "How to Track App Store Keyword Rankings in Real-Time" | aso keyword tracking | ASO Widgets | How-to |
| 2 | "How to Keep Up with Tech News: Hacker News, RSS & More" | best tech news app | Tech News Pro, RSS Reader | Commercial |
| 3 | "Best Ways to Inspect and Debug Websites on Safari" | safari web inspector | Web Inspector, Format JSON, Built With | How-to |
| 4 | "How to Convert HTML to Markdown for Documentation" | html to markdown tool | HTML to Markdown | How-to |
| 5 | "A Practical Guide to On-Page SEO Analysis" | seo analysis tool | SEO for Safari, Link Gopher | Informational |

---

## Cross-Silo Linking Map

Strategic bridges between silos (limited, high-relevance only):

```
Safari Extensions ←→ Developer Tools
  (developer-focused extensions like Web Inspector, Format JSON)

Safari Extensions ←→ Productivity
  (productivity extensions like Sticky Notes, Snapmark)

Health & Wellness ←→ Education
  (martial arts: Fight IQ, Karate crossover)

Privacy & Security ←→ Productivity
  (PDF tools, file management crossover)

Safari Extensions ←→ Health & Wellness
  (Food Scanner, accessibility extensions)
```

---

## Blog Landing Page (`/blog/index.html`)

The blog index page serves as the top of the cocoon:

- **Hero section** with blog title and search
- **Silo cards** — 6 cards linking to each pillar page with article count
- **Latest articles** — chronological list of most recent posts across all silos
- **Category filter** — reuse the same filter UI pattern from the homepage

---

## Navigation Changes

Add blog to site navigation:

```
Home | Apps | Blog | Privacy | Contact
                │
                ├── Safari Extensions
                ├── Productivity
                ├── Health & Wellness
                ├── Digital Privacy & Security
                ├── Education & Learning
                └── Developer Tools
```

---

## SEO Implementation Details

### Structured Data (JSON-LD)

Each blog post includes:
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "...",
  "description": "...",
  "author": { "@type": "Person", "name": "Tenpercent Apps" },
  "datePublished": "...",
  "dateModified": "...",
  "publisher": { "@type": "Person", "name": "Tenpercent Apps" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "..." },
  "image": "..."
}
```

Pillar pages include:
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "...",
  "description": "...",
  "hasPart": [ ... list of articles ... ]
}
```

### Breadcrumbs

Every post: `Home > Blog > [Silo Name] > [Article Title]`
Every pillar: `Home > Blog > [Silo Name]`

Breadcrumbs use BreadcrumbList schema markup.

### Meta Tags

- Unique `<title>` and `<meta description>` per post (from front matter)
- Open Graph and Twitter Card tags (handled by jekyll-seo-tag)
- Canonical URLs on all pages

### Sitemap

- `jekyll-sitemap` plugin auto-generates sitemap entries for all new posts
- No manual sitemap updates needed

---

## Content Publishing Cadence

### Phase 1 — Foundation (Weeks 1-2)
- Build blog infrastructure (layouts, includes, styles)
- Create all 6 pillar pages
- Publish 2 articles per silo (12 articles total)
- Priority: target highest-volume keywords first

### Phase 2 — Expansion (Weeks 3-6)
- Publish 3 articles per week
- Complete all planned articles across silos
- Add "Related Posts" sidebar to app pages (reverse link from apps to blog)

### Phase 3 — Ongoing Growth
- 1-2 new articles per week
- Expand silos based on search console data
- Update existing articles with fresh content and new internal links

---

## Total Content Count

| Silo | Pillar Page | Articles | Apps Covered |
|------|-------------|----------|--------------|
| Safari Extensions | 1 | 15 | 34 apps |
| Productivity | 1 | 9 | 15 apps |
| Health & Wellness | 1 | 8 | 8 apps |
| Privacy & Security | 1 | 7 | 7 apps |
| Education & Learning | 1 | 7 | 8 apps |
| Developer & Tech | 1 | 5 | 5+ apps |
| **TOTAL** | **6** | **51** | **77 apps** |

Every single one of the 77 apps is referenced by at least one blog article, ensuring the semantic cocoon drives potential traffic to all app pages.

---

## Implementation Checklist

- [ ] Add `jekyll-paginate` to Gemfile
- [ ] Update `_config.yml` with blog settings, permalink structure, and defaults
- [ ] Create `_layouts/post.html` (blog post layout)
- [ ] Create `_layouts/blog-index.html` (blog landing)
- [ ] Create `_layouts/pillar.html` (pillar page layout)
- [ ] Create `_includes/related-apps.html` (app card CTA within posts)
- [ ] Create `_includes/related-posts.html` (sidebar with sibling articles)
- [ ] Create `_includes/breadcrumbs.html` (breadcrumb nav with schema)
- [ ] Create `_includes/blog-cta.html` (download CTA block)
- [ ] Create `blog/index.html` (blog landing page)
- [ ] Create 6 pillar pages in `blog/`
- [ ] Add blog link to site header/footer navigation
- [ ] Add blog styles to `style.scss`
- [ ] Create `_posts/` directory
- [ ] Write Phase 1 articles (12 articles, 2 per silo)
- [ ] Add "Related Articles" section to `_layouts/app-page.html`
- [ ] Test all internal links follow cocoon structure
- [ ] Verify structured data with Google Rich Results Test
