---
layout: post
title: "How to Convert EPUB to MOBI, AZW3 and PDF Without Losing Formatting"
description: "Convert EPUB to MOBI, AZW3 or PDF without wrecking your formatting. Learn reflowable vs fixed layout, what conversion really changes, and how to batch convert well."
date: 2026-07-03
categories: [productivity]
tags: [convert-epub-to-mobi, epub-to-azw3, epub-to-pdf, ebook-converter, azw3, ebook-formats]
silo: ebook-management
related_apps: [ebouquin, convert, pdf-compressor, photo-to-pdf, save-as-pdf]
---

You bought the book, or downloaded it DRM-free from a legitimate source, and now you are staring at a file that is the wrong shape for the device you want to read it on. The EPUB will not sideload cleanly onto an older Kindle. The MOBI is a format Amazon has quietly stopped accepting by email. The PDF is technically readable on your phone but the text is the size of an ant. Format friction is one of the most persistent annoyances of owning ebooks, and the answer is almost always conversion — turning one file into another so it fits where you want to read.

The catch is that "conversion" has a bad reputation, earned by tools that mangle a beautifully typeset book into a wall of run-together paragraphs and broken headings. It does not have to be that way. Once you understand what actually happens when a book is converted — and, crucially, which conversions are safe and which are inherently lossy — you can convert EPUB to MOBI, AZW3, or PDF and keep your formatting intact. This guide explains the mechanics and shows how to do it cleanly on your Apple devices.

## Why you would convert a book at all

Before the how, the why, because it explains which target format you should pick. There are three common reasons people convert.

The first is **the destination device**. Amazon's ecosystem is the big one. Kindle e-readers do not natively open EPUB files the way an Apple Books reader does; historically Amazon used MOBI and later AZW3, its own Kindle Format 8. If you sideload a book directly onto a Kindle over a cable, AZW3 is the format that behaves best on modern devices, while MOBI lingers only for very old hardware. Other e-ink devices from Kobo, Boox, and PocketBook generally prefer EPUB, which is the open standard, so for those you are often converting *to* EPUB rather than away from it.

The second is **the reading experience on a specific screen**. A book meant for a six-inch e-reader and a document meant for an A4 page are different animals. PDF preserves an exact page layout, which is perfect for a document you want to look identical everywhere, and painful on a small phone where you end up pinching and scrolling. Reflowable formats like EPUB adapt the text to the screen. Choosing a target format is really choosing how you want the text to behave.

The third is **sharing and archiving**. PDF is the universal "everyone can open this" format, ideal for sending a document to someone who may not have an e-reader at all. And keeping a clean master copy in an open format protects you against the day a vendor abandons yet another proprietary silo — a genuine risk that we explore in [how to truly own your ebooks and escape DRM and vendor lock-in](/blog/productivity/own-your-ebooks-drm-lock-in/).

## Reflowable vs. fixed layout: the thing that governs everything

Here is the single most useful concept for understanding conversion, and almost nobody explains it: ebook formats fall into two families, and the family matters more than the file extension.

**Reflowable** formats — EPUB, MOBI, and AZW3 — store a book as structured text with styling rules, much like a web page. There is no fixed notion of "page 42." Instead, the reader app takes the text and *flows* it onto whatever screen you have, at whatever font size you chose. Make the text bigger and the paragraphs simply rewrap. This is why a novel feels natural on a phone, a tablet, and an e-reader alike: the content adapts to the container. Under the hood, EPUB is essentially a zipped bundle of XHTML and CSS, which is why it is so flexible and so open.

**Fixed layout** — the classic PDF — stores a book as pages with everything nailed to exact coordinates. A PDF of a printed book looks identical on every device because it is, in a sense, a picture of the pages. That fidelity is a feature for documents where layout carries meaning: technical manuals, sheet music, comics, textbooks with complex figures. It is a liability for plain prose on a small screen, because the text cannot rewrap; you get the whole page shrunk to fit, or you zoom and pan.

Once you internalize this, the golden rule of lossless conversion writes itself. **Converting within a family is generally safe. Converting across families is inherently lossy.** EPUB to AZW3 is reflowable to reflowable — the text, structure, and most styling carry over cleanly. EPUB to PDF, or PDF to EPUB, crosses the boundary, and something has to give. We unpack each format's strengths in detail in [ebook formats explained: EPUB vs MOBI vs AZW3 vs PDF](/blog/productivity/ebook-formats-explained-epub-mobi-azw3-pdf/), which is worth reading alongside this one.

## What each target format expects

With the two families in mind, here is what you are actually aiming at when you pick a target.

**EPUB** is the open, reflowable standard and the best choice for a master copy. It supports rich CSS styling, embedded fonts, a real table of contents, and metadata. If you keep only one copy of a book, keep the EPUB. Most non-Amazon e-readers and virtually every mobile reading app open it directly.

**AZW3 (Kindle Format 8)** is Amazon's more modern reflowable format, introduced to support far richer CSS than old MOBI could. It is the format to convert to when you want to sideload onto a Kindle and have styling — headings, block quotes, drop caps, decent typography — survive the trip. For most Kindle sideloading in 2026, AZW3 is the sensible target.

**MOBI** is the legacy Kindle format, and its role has shrunk. Its styling capabilities are limited compared with AZW3, and — importantly — Amazon stopped accepting MOBI files through its Send to Kindle service back in late 2022. It is worth converting to MOBI only for genuinely old Kindle hardware that cannot handle AZW3. For everything else, prefer AZW3 or EPUB.

**PDF** is fixed layout and belongs to a different job entirely. Convert *to* PDF when you need an exact, print-faithful copy to share or archive, and accept that on a small screen the reading experience will be page-based rather than reflowing. It is the wrong target for a novel you want to read on a phone, and often exactly the right one for a document you need to look identical everywhere.

## What conversion actually does to your file

Now the part everyone worries about: will converting wreck the formatting? The honest answer depends entirely on which boundary you cross.

For a **reflowable-to-reflowable** conversion — EPUB to AZW3, for example — a good converter parses the source's XHTML and CSS, then re-expresses the same structure and styling in the target format. Headings stay headings, italics stay italics, the table of contents is rebuilt, chapter breaks are preserved, and the metadata comes along. Because both formats think about a book the same way, very little is lost. The occasional casualty is an exotic CSS trick or an embedded font that the target renders differently, but the reading experience is essentially identical. This is the conversion you can do freely.

For a **crossing-the-boundary** conversion, expect trade-offs, and pick the direction deliberately. Converting reflowable to PDF is the gentler of the two: the converter has to *choose* a page size and typeset the flowing text onto fixed pages, so you decide the shape of a book that never had one. It usually looks clean, but it is now frozen — no more resizing text on the fly. Converting a PDF *to* a reflowable format is the hard direction and the one most likely to disappoint, because the converter must reverse-engineer flowing text out of fixed coordinates. Multi-column layouts, headers and footers, footnotes, and figures often come out scrambled. When someone complains that "conversion ruined my book," it is almost always a PDF-to-EPUB job that was doomed before it started.

The practical takeaway: convert reflowable-to-reflowable without hesitation, convert reflowable-to-PDF when you genuinely need fixed pages, and treat PDF-to-reflowable as a last resort you inspect carefully afterward.

## Converting on your Apple devices with eBouquin

Historically, clean ebook conversion meant sitting at a desktop with Calibre's powerful but knob-heavy conversion dialog. That is fine at a desk and overkill in your hand. [eBouquin](/apps/ebouquin/) brings the same capability to iPhone, iPad, and Mac as a native app, and deliberately hides the complexity: it converts between **EPUB, MOBI, AZW3, and PDF** with sensible defaults and no confusing knobs. You pick the target format, and it produces a clean result without asking you to reason about a dozen typography options you never wanted to think about.

Because eBouquin is a full Calibre-compatible library manager rather than a one-off converter, conversion happens *inside* your library. The converted file lands right next to the original in the same book's folder, so you can keep both formats — the EPUB master and the AZW3 you made for your Kindle — attached to one catalog entry. Nothing gets orphaned in a Downloads folder, and your metadata stays intact because the app is writing to the same standard `metadata.db` Calibre uses. If you want the background on that library structure, our guide to [using your Calibre library on iPhone and iPad](/blog/productivity/use-calibre-library-on-iphone-ipad/) explains how the pieces fit.

{% include blog-cta.html app_slug="ebouquin" %}

The "sensible defaults" point is worth dwelling on, because it is where most conversion tools fail beginners. Powerful converters expose everything — margins, base font size, chapter-detection heuristics, cover handling, table-of-contents depth — and a wrong setting quietly damages the output. eBouquin's approach is to choose good values for the common case, so a straightforward EPUB-to-AZW3 or EPUB-to-PDF conversion just works and looks right the first time. You keep the power of the underlying conversion without the burden of tuning it.

And once a book is converted, the natural next step is often to get it onto a device. eBouquin closes that loop too: it can send any book straight to a Kindle email address in a couple of taps, which pairs neatly with converting to a Kindle-friendly format. We cover that end-to-end in [how to send any ebook to your Kindle by email](/blog/productivity/send-ebooks-to-kindle-email/), including which formats Amazon's service accepts today.

## Batch conversion without the fuss

Converting one book is a minor task; converting a hundred is where good tooling earns its keep. Say you just acquired a large DRM-free collection in EPUB and you want AZW3 versions of your favorites for a Kindle, or you are standardizing an entire shelf on a single format. Doing that one file at a time is the kind of chore that never gets done.

eBouquin supports **batch conversion**: select a whole stack of books, choose one target format, and convert them in a single step. Each converted file is filed back beside its original in the library, so a big batch does not turn into a mess of loose downloads you then have to sort. This is exactly the sort of bulk operation that used to require a desktop, now available on the tablet you actually have with you.

A little upstream tidiness makes batch work smoother. Loose files that arrive in random formats are easier to deal with if you normalize them first. A quick browser-based tool like [Convert](/apps/convert/) is handy for one-off format changes before a file even reaches your library, and if you are pulling reading material off the web, [Save as PDF](/apps/save-as-pdf/) turns an article into a clean PDF you can add to the collection. Scanned pages are their own case: [Photo to PDF](/apps/photo-to-pdf/) assembles images of physical pages into a single PDF, which you can then treat like any other book. Keeping incoming material orderly means your batch conversions operate on a clean library rather than a junk drawer.

## The settings that actually matter, and keeping a master copy

Even with good defaults, a few decisions are yours to make, and they are worth making consciously.

**Choose your master format and keep it.** For almost everyone, the master should be EPUB: open, reflowable, richly styled, and readable nearly everywhere. Convert *from* that master into whatever a given device needs, but never throw the master away. Because a Calibre library lets you attach multiple formats to one book, you can hold the EPUB master and any number of derived AZW3, MOBI, or PDF copies under a single entry without duplication or confusion.

**Match the target to the destination, not to habit.** Reach for AZW3 when you are sideloading to a modern Kindle, EPUB for Kobo and most apps, and PDF only when fixed pages are the actual goal. Converting to MOBI should be a rare, deliberate choice for old hardware, given that it is both weaker and no longer accepted by Amazon's email service.

**Mind PDF size when sharing.** Converting a richly illustrated book to PDF, or scanning pages into one, can produce a large file that is awkward to email or send to a Kindle. On the Mac, [PDF Compressor](/apps/pdf-compressor/) shrinks a bloated PDF ebook without visibly degrading it, and our walkthrough on [how to compress PDF files without losing quality](/blog/digital-privacy-security/how-to-compress-pdf-files-without-losing-quality/) explains the trade-offs. If your work revolves around PDFs generally, the [complete guide to PDF workflows on iPhone and Mac](/blog/productivity/complete-guide-pdf-workflows-iphone-mac/) is a good companion.

One more note for the technically curious: because reflowable formats are essentially structured text and styling under the hood, converting them is fundamentally a text-transformation problem — the same instinct behind tools that turn messy web pages into clean documents. If that appeals to you, our piece on [converting HTML to Markdown for clean documentation](/blog/developer-tools/how-to-convert-html-to-markdown-documentation/) scratches the same itch from a different angle.

## Putting it together

Format conversion stops being scary the moment you stop thinking in file extensions and start thinking in families. Reflowable to reflowable — EPUB to AZW3, EPUB to MOBI — is safe and keeps your formatting; do it whenever a device demands it. Reflowable to PDF is a deliberate choice to freeze the layout for sharing or exact fidelity. PDF back to reflowable is the hard case you should inspect afterward. Keep an EPUB master, convert on demand into whatever your device wants, and let a native tool with sensible defaults handle the mechanics so you never have to fight a wall of typography knobs.

Do that, and the right shape of every book is always one tap away, on whatever device you happen to be holding. For the full landscape of managing an owned collection, start with our overview of [the best ebook library manager apps for iPhone, iPad and Mac](/blog/productivity/best-ebook-library-manager-apps-iphone-ipad-mac/).

## Frequently Asked Questions

### Will converting EPUB to AZW3 ruin my formatting?

No, not in any meaningful way. EPUB and AZW3 are both reflowable formats, so a good converter carries over the text, structure, headings, and most CSS styling cleanly. The occasional casualty is an unusual CSS effect or a substituted font, but the reading experience is essentially identical. This within-family conversion is the safe kind you can do freely.

### Why does converting a PDF to EPUB look so bad?

Because it crosses from fixed layout to reflowable, which is the hard direction. A PDF stores text at fixed page coordinates, so the converter has to reverse-engineer flowing paragraphs out of a frozen page. Multi-column layouts, footnotes, headers, and figures often come out scrambled. When conversion "ruins" a book, it is almost always a PDF-to-EPUB job, and you should inspect the result carefully.

### Should I convert my books to MOBI for my Kindle?

Usually not. MOBI is Amazon's legacy format with limited styling, and Amazon stopped accepting MOBI through its Send to Kindle email service in late 2022. For sideloading onto a modern Kindle, AZW3 preserves styling far better, and for the email route Amazon prefers EPUB or PDF. Reserve MOBI for genuinely old Kindle hardware that cannot handle anything newer.

### Which format should I keep as my master copy?

EPUB, for almost everyone. It is the open, reflowable standard: richly styled, readable on nearly every device and app, and future-proof because it is not tied to one vendor. Keep the EPUB master and convert from it into whatever a specific device needs, rather than discarding it. A Calibre library lets you attach both the master and any derived formats to a single book entry.

### Can I convert many books at once instead of one at a time?

Yes. eBouquin supports batch conversion: select a whole stack of books, pick one target format, and convert them in a single step, with each result filed back beside its original in your library. That turns a tedious one-by-one chore into a single operation you can run from an iPhone or iPad, not just a desktop.

### My converted PDF is huge. How do I make it smaller?

Convert or scan first, then compress. A richly illustrated book turned into a PDF can be large, which makes it awkward to email or send to a Kindle. On the Mac, PDF Compressor shrinks a bloated PDF without visible quality loss, and choosing a sensible target size usually solves the problem without you noticing any difference in the pages.

### Do I need a desktop to convert ebooks properly?

No. Clean conversion used to mean sitting at a computer with a complex desktop dialog, but a native app like eBouquin brings EPUB, MOBI, AZW3, and PDF conversion to iPhone, iPad, and Mac with sensible defaults and no confusing knobs. Because it works inside your library, converted files stay attached to the right book and your metadata remains intact.
