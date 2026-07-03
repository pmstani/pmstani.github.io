---
layout: post
title: "Smart Shelves & Saved Searches: Automate Your Ebook Library"
description: "Turn a sprawling ebook collection into self-updating smart shelves with saved searches. Syntax examples, custom columns, and practical recipes for iPhone, iPad, and Mac."
date: 2026-07-03
categories: [productivity]
tags: [smart-shelves, saved-searches, calibre-search, ebook-automation, ebook-library, metadata]
silo: ebook-management
related_apps: [ebouquin, tidy-downloads, universal-data-viewer, snapmark, my-agenda-planning]
---

## Your Library Is Growing Faster Than You Can Sort It

A modest ebook collection is easy to manage by hand. You have a few dozen books, you remember what they are, and a single scroll through the cover grid tells you everything. Then a decade of buying, borrowing, downloading public-domain classics, and rescuing files from dying formats quietly turns those dozens into thousands. The scroll stops being a memory aid and becomes a wall: you know a specific book is in there somewhere, but "somewhere" now means fifteen minutes of squinting at thumbnails.

The instinct is to fix this with folders and shelves. You create a shelf called "To Read," another called "Favorites," one for each genre, and a few for series you follow. It works for exactly as long as you keep it up. The moment you add a book and forget to file it, or finish a novel and forget to move it out of "To Read," the shelf starts lying to you. Manual organization decays because it depends on you performing an errand every single time the library changes, and a few hundred additions a year is enough to collapse the system under its own maintenance cost.

There is a better model, borrowed from decades of database practice and made famous among book collectors by Calibre: the **saved search**, presented as a **smart shelf**. Instead of dragging books into a static container, you describe the books you want, and the shelf fills itself. Add a five-star mystery tomorrow and it appears on your "Best Mysteries" shelf automatically, because the shelf is not a box — it is a question the library answers continuously. This guide walks through the search syntax field by field, shows how smart shelves mirror Calibre's custom columns, and offers practical recipes you can adapt. It sits inside a broader [ebook library management guide](/blog/productivity/best-ebook-library-manager-apps-iphone-ipad-mac/), worth reading first if you are still choosing tools.

## What a Smart Shelf Actually Is

A static shelf stores a list of books. A smart shelf stores a **rule**, and displays whatever books currently match that rule. That difference sounds small and is enormous in practice.

Consider a shelf of "Unread science fiction rated four stars or higher." As a static shelf, you would have to personally add every qualifying book, remove books once you read them, and remember to promote newly rated titles. As a smart shelf, you write the rule once and it stays correct forever: rate a new SF novel four stars and it appears; mark it read and it disappears; import fifty new files and any that qualify slot in without a single manual action. The shelf maintains itself because it is recomputed from live metadata every time you open it.

This is the same idea that powers Smart Folders in the Finder and Smart Playlists in Music: you trade a moment of describing what you want for permanent freedom from filing. The catch is that a shelf is only as good as the metadata and the query behind it — a smart shelf can find "four-star unread SF" only if your books actually carry ratings, read status, and genre tags. Getting that foundation right is the subject of the companion post on [organizing a large ebook library with metadata, tags, series, and collections](/blog/productivity/organize-large-ebook-library-metadata-tags-series/); smart shelves are what you build on top of it.

## eBouquin Brings Smart Shelves to Every Apple Device

Saved searches have long been a Calibre desktop feature, which historically meant they lived on a Mac or PC and stayed there — if you did most of your reading on an iPhone or iPad, the smart shelves you carefully built were stranded on a computer you were not holding. [eBouquin](/apps/ebouquin/) closes that gap. It is a native, Calibre-compatible library manager for iPhone, iPad, and Mac that opens an existing Calibre library exactly as it is — the same per-book folders, the same `metadata.db` database — and lets you create smart shelves that update themselves right on the device in your hand.

Because eBouquin reads and writes the standard Calibre format rather than a proprietary copy, the tags, series, ratings, and custom columns your searches depend on are the real ones, not an approximation. A smart shelf you define maps onto the same metadata Calibre uses, so a library curated on your Mac behaves identically when you browse it on your iPad over the weekend. There is no import step, no account, and no upload: your library files stay wherever you keep them, on-device or in iCloud Drive, and eBouquin simply answers questions about them.

{% include blog-cta.html app_slug="ebouquin" %}

The practical payoff is that the organizational work you invest pays dividends everywhere. Spend twenty minutes designing a set of smart shelves — "Currently reading," "Next up," "Kindle-ready," "Needs a cover" — and those shelves ride along on every screen you own, so you are no longer choosing between a powerful desktop tool and a comfortable pocket reader. If you are coming from a desktop-bound setup, the companion guide on [using your Calibre library on iPhone and iPad](/blog/productivity/use-calibre-library-on-iphone-ipad/) covers getting the library onto your devices; this post assumes it is already there.

## The Search Syntax, One Field at a Time

Smart shelves are only as good as the queries behind them, and the Calibre-style search language eBouquin understands is compact once you see the pattern. Every clause has the same shape: a **field name**, a colon, and a **value**, with terms combined by simple logic. Here are the fields you will use most, each with a real example you can adapt.

### By Author

The `author` field matches names in the author metadata. A plain value matches any author whose name contains the text, which is forgiving of how you have entered names:

```
author:le guin
```

This finds every book by Ursula K. Le Guin regardless of whether you stored the name as "Ursula K. Le Guin," "Le Guin, Ursula K.," or just "Le Guin." To be strict and match a name exactly rather than as a substring, prefix the value with an equals sign:

```
author:="Ursula K. Le Guin"
```

Quotation marks group multi-word values so the space inside the name is not read as the start of a new clause — which matters constantly, because so many search values contain spaces.

### By Tag

Tags are the workhorse of ebook organization, and the `tag` field is how you harvest them. Contains-matching is the default:

```
tag:history
```

That returns anything tagged "history," "art history," or "natural history." To match a single tag exactly, use the equals prefix again — `tag:=history` excludes the compound tags. Two special values are worth memorizing: `tag:true` finds every book that has at least one tag, and `tag:false` finds books with no tags at all. The second is one of the most useful queries you will run, because a smart shelf of untagged books is a live to-do list for your metadata hygiene — as you tag things, the shelf empties itself.

### By Series

Series are how multi-book stories stay in order, and the `series` field selects them by name:

```
series:="The Expanse"
```

The exact-match prefix is a good habit for series so "The Expanse" does not accidentally sweep in a similarly named collection. Position within a series lives in a separate field, `series_index`, which accepts comparisons. To find the first three books of everything:

```
series_index:<=3
```

Combine the two and you can build a shelf like "book one of every series I own" — a fine way to decide what to start next without committing to a whole saga sight unseen.

### By Rating

Ratings in the Calibre model use a zero-to-five star scale, and the `rating` field accepts both exact values and comparisons:

```
rating:>=4
```

That gathers your four- and five-star books. Because rating is numeric, the comparison operators (`>`, `<`, `>=`, `<=`, `=`) all work, so `rating:5` isolates only your absolute favorites while `rating:<3` surfaces books you were lukewarm about and might cull — the closest thing to a personal "best of" list that never goes stale.

### Unread and Read Status

Here is the interesting one: a plain Calibre library has no built-in "read" flag. Read status is something you add as a **custom column**, and custom columns are searched with a `#` prefix. If you create a yes/no column named `read`, then unread books are simply:

```
#read:false
```

and finished books are `#read:true`. This is the seed of a genuine reading workflow — a self-maintaining "To Read" shelf that shrinks every time you flip a book's read flag, with no dragging required. Custom columns are the bridge between generic metadata and the specific way *you* think about your collection, which is why they deserve a section of their own below.

### By Format

The `formats` field selects books by the file types they contain, which matters more than it sounds: Kindle hardware wants specific formats, e-ink devices prefer reflowable files, and archival copies are best kept as open EPUB. A query like:

```
formats:pdf
```

finds every book you hold as a PDF — often the exact set you would run through a cleanup or conversion pass before an e-reader sync. If the format landscape is fuzzy to you, the companion post [explaining EPUB, MOBI, AZW3, and PDF](/blog/productivity/ebook-formats-explained-epub-mobi-azw3-pdf/) lays out what each one is good for and why you might keep more than one copy of a book.

## Combining Terms: And, Or, and Not

Individual clauses are useful, but the power of smart shelves comes from combining them, using the same three logical operators you already reason with every day. Placing two terms side by side means **and** — both conditions must hold. This query finds unread science fiction:

```
tag:science fiction #read:false
```

The word `or` broadens a search to books matching either side, which is how you gather related genres onto one shelf:

```
tag:mystery or tag:thriller or tag:crime
```

The word `not` excludes, and it is the secret to shelves that stay clean — say, everything you have finished reading *except* the reference books you keep around:

```
#read:true not tag:reference
```

Parentheses group clauses so complex rules stay unambiguous, exactly as in arithmetic. A shelf of "highly rated fiction I have not read yet" reads almost like a sentence once you know the grammar:

```
(tag:fiction or tag:novel) and rating:>=4 and #read:false
```

Compose a few queries like these and the syntax stops feeling like code — it becomes a way of describing your own taste to a librarian who never forgets.

## Mirroring Calibre's Custom Columns

Standard metadata fields — title, author, series, rating, tags — cover the common cases, but every serious collector eventually wants to track something Calibre does not model out of the box: read status, a "priority" number for your reading queue, a yes/no "signed copy" flag, a "date finished," or a personal five-point "reread value." Calibre handles all of this through **custom columns** — fields you define yourself, of a type you choose (text, number, yes/no, rating, date, or a fixed list of options).

The important thing for automation is that custom columns are first-class search targets. Every one you create becomes queryable with the `#` prefix — `#priority:1`, `#signed:true` — so every organizing scheme you invent immediately becomes a smart shelf. Custom columns are where a generic library turns into *your* library, and eBouquin mirrors them exactly rather than flattening them into plain tags: a `#priority` number stays a number you can compare against, and a yes/no column stays a clean boolean. That fidelity is what lets a shelf like "priority-one unread books rated four stars or higher" exist at all:

```
#priority:1 and #read:false and rating:>=4
```

These columns live inside the same `metadata.db` SQLite file the rest of your library uses. You can open that database read-only with a tool such as [Universal Data Viewer](/apps/universal-data-viewer/) to confirm your columns are structured the way you expect — reassuring when you are about to build a lot of automation on top of them.

## Practical Shelf Recipes

Theory is easier to absorb through concrete examples. Here is a starter set of smart shelves that work for most collections; adapt the tag names and custom columns to match your own metadata.

**Currently reading.** A yes/no `#reading` column, flipped on when you start a book, gives you an instant "what am I in the middle of" shelf:

```
#reading:true
```

**Next up.** Your on-deck queue, driven by a priority number so the shelf sorts itself into an order of intent:

```
#read:false and #priority:>=1
```

**Best of the year.** Combine a rating with the date a book entered your library to celebrate recent favorites; date fields accept comparisons just like ratings:

```
rating:>=4 and date:>=2026-01-01
```

**Kindle-ready.** Everything you can send to a Kindle without a conversion step, because it already exists in an accepted format:

```
formats:epub or formats:pdf or formats:azw3
```

**Needs conversion.** The inverse — books you hold only as EPUB, ready for a batch conversion before an e-ink sync:

```
formats:epub not formats:azw3
```

**Metadata to fix.** A janitorial shelf that surfaces incomplete records so cleanup becomes a background habit:

```
tag:false or series:false or cover:false
```

Each of these is a rule you write once and never touch again. Over a year, they save hundreds of small filing decisions, and — more valuably — they keep telling the truth about your library even as it changes underneath them.

## How Automation Tames a Large Library

The real argument for smart shelves is scale. At a hundred books, manual organization is tedious but survivable; at five or ten thousand it is impossible, and the library either stays organized automatically or does not stay organized at all. Smart shelves shift the maintenance burden from *doing* to *describing*, and description is a one-time cost.

Automation also compounds nicely with the rest of a tidy digital setup. New ebooks tend to arrive as downloads, and if they pile up in a Downloads folder they never make it into the library at all. A tool like [Tidy Downloads](/apps/tidy-downloads/) can sort incoming files by type on a Mac so that fresh EPUBs land in a predictable place, ready to add — a small piece of upstream plumbing that keeps the whole system fed. The same "set a rule, let the rule work" philosophy runs through the guides on [organizing your Downloads folder automatically](/blog/productivity/how-to-organize-your-downloads-folder-automatically-on-mac/) and [organizing your digital life on a Mac](/blog/productivity/best-apps-organizing-digital-life-mac/). Smart shelves are the ebook-specific version of it: automate the sorting so your attention goes to reading, not filing.

There is a psychological benefit too. A library that maintains itself lowers the activation energy of everything you do with it — when your "Next up" shelf is always accurate, choosing a book takes seconds instead of becoming a low-grade decision you keep postponing, which is a quiet but real reason people who adopt smart shelves end up reading more.

## Building a Reading System Around Your Shelves

Smart shelves are most powerful when they connect to how you actually spend your attention. Once your library answers questions cleanly, you can wrap a light system around it, starting with intention. A shelf of "priority-one unread books" is only useful if you get to it, so scheduling recurring reading blocks with a planner such as [My Agenda & Planning](/apps/my-agenda-planning/) turns "I should read more" into a concrete appointment — and the book you open is whatever sits at the top of a shelf that is always current. When you come across an article or reference online that you want to fold into your queue later, a bookmarking tool like [Snapmark](/apps/snapmark/) keeps those threads without cluttering the library, so the ebook collection stays focused on books you own.

Close the loop by tracking what you finish. Flip a `#read` flag when you close a book and three shelves update at once: "Currently reading" loses it, "To Read" shrinks, and "Best of the year" gains it if you rated it well. That single toggle, repeated over months, becomes a rich personal record with zero extra bookkeeping. For a wider view of the tools that make this kind of low-effort system stick, the roundup of the [best productivity apps for iPhone and Mac](/blog/productivity/best-productivity-apps-iphone-mac-2026/) is a useful companion. The through-line is the same throughout: describe what you want once, and let the rules do the remembering.

## Frequently Asked Questions

### What is the difference between a smart shelf and a regular shelf?

A regular shelf is a static list of books you place there by hand and must maintain yourself. A smart shelf stores a search rule and automatically displays whatever books currently match it. Add a qualifying book and it appears on the smart shelf instantly; change a book so it no longer qualifies and it drops off — all without any manual filing.

### Do I have to learn a query language to use smart shelves?

Only a little, and it is worth it. The syntax is consistent: a field name, a colon, and a value, joined by `and`, `or`, and `not`. Start with single-field shelves like `rating:>=4` or `#read:false` and add complexity as you grow comfortable — after a handful of queries, describing the books you want feels natural rather than technical.

### Will smart shelves I build in eBouquin work in Calibre too?

Because eBouquin reads and writes the standard Calibre library format and uses a Calibre-compatible search language, the metadata your searches rely on — tags, series, ratings, custom columns — is the same in both apps. Saved searches map onto the same underlying fields, so a library organized on the Mac behaves consistently in eBouquin on an iPhone or iPad. There is no separate copy and no lock-in.

### How do I make an "unread" shelf if my books have no read status?

A standard library has no built-in read flag, so you add one as a custom column — typically a yes/no column named `read`. Once it exists, you search unread books with `#read:false` and finished books with `#read:true`. The `#` prefix is how every custom column is queried, which is what makes personal fields like priority, reread value, or "signed copy" fully searchable.

### Can a smart shelf filter by file format?

Yes. The `formats` field selects books by the file types they contain, so `formats:pdf` gathers every PDF and `formats:epub` gathers every EPUB. This is especially handy for preparing books to send to a Kindle or e-ink reader: build one shelf of already-compatible files and another of books that still need conversion before your next sync.

### Do smart shelves change or move my actual book files?

No. A smart shelf is purely a view — a saved question the library answers. It never moves, copies, converts, or deletes the underlying files, and it does not alter your per-book folders on disk. Your library stays exactly where you put it, on-device or in iCloud Drive, and eBouquin simply displays whichever books currently match each rule.
