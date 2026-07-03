---
layout: post
title: "Ebook Formats Explained: EPUB vs MOBI vs AZW3 vs PDF"
description: "Ebook formats explained clearly: EPUB vs MOBI vs AZW3 vs PDF, reflowable vs fixed layout, DRM caveats, and which format to keep as your master copy."
date: 2026-07-03
categories: [productivity]
tags: [ebook-formats, epub-vs-mobi, azw3, pdf, reflowable, ebook-converter]
silo: ebook-management
related_apps: [ebouquin, convert, pdf-compressor, photo-to-pdf, presbyopia]
---

Sooner or later, everyone who keeps a serious ebook collection runs into the same wall of acronyms. You buy a book and it arrives as an EPUB. Someone emails you a MOBI from years ago. Your Kindle wants an AZW3. A textbook only exists as a PDF. Each one behaves differently, opens in different apps, and looks different on a phone versus a tablet versus an e-reader — and it is genuinely confusing until someone lays out the map.

This is that map. By the end you will understand what each of the four major formats actually is, the single most important distinction that explains most of their differences, when to reach for each one, the DRM catch that quietly limits what you can do, and — the practical question most guides skip — which format you should keep as your permanent master copy. If you manage a real library, these decisions compound over hundreds of books, so it is worth getting the mental model right once. For the wider picture of managing a collection across devices, our guide to the [best ebook library manager apps for iPhone, iPad and Mac](/blog/productivity/best-ebook-library-manager-apps-iphone-ipad-mac/) is a good companion.

## The one distinction that explains everything: reflowable vs fixed

Before we look at any specific format, learn this one idea, because it does most of the explaining. Ebook formats fall into two families.

**Reflowable** formats treat a book as a stream of text and images with styling rules, not as a set of fixed pages. When you change the font size, rotate your phone, or open the same file on a small screen and a large one, the text *reflows* to fit — lines rebreak, "pages" are recalculated on the fly, and there is no such thing as a page 42 that looks identical everywhere. This is what you want for novels and most non-fiction: the reading experience adapts to your device and your eyes.

**Fixed-layout** formats are the opposite. They capture an exact page — every line break, every image position, every column — and reproduce it identically no matter where you open it. Page 42 is always page 42, pixel for pixel. This is ideal for anything where layout carries meaning: technical books with diagrams, cookbooks, sheet music, comics, scanned documents, and academic PDFs where you need to cite a page number. The cost is that it does not adapt: on a small screen you are stuck zooming and panning around a page designed for paper.

Almost every practical difference between the four formats below traces back to this split. EPUB, MOBI, and AZW3 are fundamentally reflowable (though EPUB and AZW3 can do fixed-layout too). PDF is fundamentally fixed. Keep that in mind and the rest falls into place.

## EPUB: the open, modern standard

EPUB is the closest thing the ebook world has to a universal format, and if you take one thing away from this article, let it be to prefer EPUB whenever you have a choice. It is an open standard, and the current version (EPUB 3) is built on the same web technologies as the internet itself: the content inside an EPUB is essentially HTML and CSS, packaged with images, fonts, and a table of contents into a single ZIP container that happens to end in `.epub`.

That foundation gives EPUB real advantages. It is reflowable by default, so it adapts to any screen. It supports rich styling, embedded fonts, images, and even audio and video in EPUB 3. And because it is an open standard rather than one company's property, it is read almost everywhere that is not a Kindle: Apple Books, Google Play Books, Kobo, and countless third-party reader apps all open EPUB natively. Notably, even Amazon now accepts EPUB through its Send to Kindle service and converts it on their end, which was not always true.

EPUB's only real weakness is that Kindle *devices* do not read a raw EPUB file directly — you either send it through Amazon's service, which converts it, or you convert it yourself first. That single gap is the source of most format confusion, and it is why the other formats below still exist. But as a format to receive, store, and future-proof your books in, EPUB is the safe default.

## MOBI: the legacy Kindle format

MOBI is the old-timer. It descends from the Mobipocket format, which Amazon acquired in the mid-2000s and adopted as the basis for early Kindle books. For years, if you wanted a book on a Kindle, MOBI (or its DRM-wrapped cousin, AZW) was how you did it.

Technically, MOBI is a reflowable format, but it is a dated one. Its support for modern styling is limited compared with EPUB or AZW3 — fine typography, complex layouts, and richer CSS simply do not survive well in it. More importantly, its role has faded. Amazon has moved on to newer formats for its own books, and in late 2022 it stopped accepting MOBI files through Send to Kindle entirely, steering everyone toward EPUB and PDF instead.

So where does that leave MOBI in 2026? Mostly as a compatibility format you may still encounter in old files and older devices, not something to create fresh. If you have MOBI files in your library, there is no urgency to touch them, but if you are choosing a format to save a book in going forward, MOBI is rarely the right answer. Convert older MOBIs to EPUB for storage and to AZW3 or PDF when a specific Kindle needs them.

## AZW3 (KF8): the modern Kindle format

AZW3 is Amazon's answer to MOBI's limitations. Introduced alongside the Kindle Fire, it is built on a format Amazon calls **KF8** (Kindle Format 8), which supports a much richer subset of HTML5 and CSS3 — closer in capability to EPUB than the old MOBI ever was. That means better typography, more faithful layouts, drop caps, embedded fonts, and the kind of styling modern books actually use. If you are going to put a well-formatted book onto a Kindle by sideloading it yourself, AZW3 is generally the format that preserves the most.

A couple of practical notes keep AZW3 in perspective. It is Amazon's format, so its natural home is the Kindle ecosystem; non-Kindle apps and devices often will not open it. And on the newest Kindles Amazon uses an even newer internal format for its own enhanced typesetting, but AZW3 remains the widely used, reliable choice for sideloading your own DRM-free books. In short: EPUB is what you store, AZW3 is what you often hand to a Kindle.

## PDF: the faithful, fixed-layout workhorse

PDF is the odd one out, and understanding why comes straight back to the reflowable-versus-fixed split. PDF is a fixed-layout format — originally Adobe's, now an open ISO standard — designed to reproduce a page exactly as it was laid out, on any device, forever. That fidelity is its superpower and its curse.

Where PDF shines is anything whose layout is the content: textbooks with equations and figures, technical manuals, cookbooks, comics and graphic novels, sheet music, forms, and scanned documents. If you need the page to look precisely as the author intended, and especially if you need to cite specific page numbers, PDF is unbeaten. Amazon's Send to Kindle also accepts PDF directly, so it travels well.

The trouble is small screens. Because a PDF does not reflow, reading one on a phone usually means zooming and scrolling around a page designed for paper — tiring, and hard on anyone who needs larger text. For readers dealing with presbyopia or simply small type, a fixed PDF is the least forgiving format there is; an app like [Presbyopia](/apps/presbyopia/) can help enlarge on-screen text where reflow is not an option, but the better fix is usually to prefer a reflowable format for prose in the first place. PDFs also tend to be large, especially when they are scans full of page images, which makes them slow to sync and awkward to email. Keeping them lean matters, which is where [PDF Compressor](/apps/pdf-compressor/) earns its place; our guide to [compressing PDFs without losing quality](/blog/digital-privacy-security/how-to-compress-pdf-files-without-losing-quality/) walks through doing that without turning text to mush. And when *you* are the one creating a PDF from scanned pages, [Photo to PDF](/apps/photo-to-pdf/) turns images into a single clean file — see our comparison of [photo-to-PDF apps versus the iPhone's built-in method](/blog/productivity/photo-to-pdf-apps-vs-iphone-built-in-method/) for the trade-offs, and the broader [guide to PDF workflows on iPhone and Mac](/blog/productivity/complete-guide-pdf-workflows-iphone-mac/) for everything else.

## A side-by-side comparison

| | EPUB | MOBI | AZW3 (KF8) | PDF |
|---|---|---|---|---|
| **Type** | Reflowable | Reflowable | Reflowable | Fixed layout |
| **Openness** | Open standard | Amazon (legacy) | Amazon | Open ISO standard |
| **Styling** | Rich (HTML/CSS) | Limited | Rich (HTML5/CSS3) | Exact page fidelity |
| **Best on** | Almost everything but Kindle devices | Old files/devices | Kindle (sideloaded) | Large screens, complex layout |
| **Send to Kindle by email** | Yes (converted by Amazon) | No longer accepted | Not the current path | Yes |
| **Good master copy?** | Yes, for prose | No | No | Yes, for layout-critical books |

The table compresses everything above into a glance, but the reasoning behind each cell is what you actually carry with you. Formats are tools, and the right one depends on the job — reading now, sending to a device, or keeping forever.

## Which format should be your master copy?

Here is the question that matters most for a library that lasts. Every other file you can regenerate by conversion; your master is the one you protect. Two simple rules cover almost everything.

For **prose** — novels and most non-fiction — keep **EPUB** as your master. It is open, reflowable, widely supported, and the least likely to be orphaned by any single company's decisions. From an EPUB master you can generate an AZW3 for a Kindle or a PDF for printing whenever you need one, and throw those derivatives away afterward without a second thought.

For **layout-critical** books — technical texts with figures, cookbooks, comics, sheet music, scans — keep the **PDF** as your master, because that is where the layout lives and converting it to a reflowable format would destroy the very thing that makes it useful. If a reflowable version would also help for casual reading, generate one as a *secondary* copy, but do not discard the PDF.

The thread running through both rules is preferring open formats you control over ecosystem-specific ones you merely borrow. Which brings us to the caveat that can quietly undo all of this planning.

## The DRM caveat that changes everything

Everything above assumes you can freely open, convert, and keep your files. Digital Rights Management is the reason that assumption sometimes fails. DRM is a lock a store applies to a file so it can only be read inside that store's approved apps and devices. A DRM-protected Kindle book is tied to Amazon; a DRM-protected EPUB from some stores is tied to that store's software. The format extension might look familiar, but the file is not fully yours to move.

The practical consequence is a fork in the road. **DRM-free** books — from Project Gutenberg, Standard Ebooks, many publisher-direct stores, indie authors, and anything you made yourself — behave exactly as this article describes: you can convert them, back them up, and choose your own master format. **DRM-locked** books cannot be freely converted, and stripping that protection raises legal questions that vary by country, which this guide does not wade into. The honest takeaway is not a workaround; it is a purchasing habit. When you have the choice, buy DRM-free, because a DRM-free EPUB is a book you own, while a locked file is a book you are licensed to read until someone changes the rules. We go deep on this in our guide to [truly owning your ebooks and escaping DRM and lock-in](/blog/productivity/own-your-ebooks-drm-lock-in/), which is essential reading if you want your collection to outlast any one store.

## Putting it together: convert deliberately, store wisely

Once you understand the formats, the workflow almost designs itself. Receive and store in an open master — EPUB for prose, PDF for layout. Convert *outward* to whatever a specific device needs, when it needs it, and treat those conversions as disposable. Keep the masters backed up like any other important files.

The one operation you will do most often is conversion, and it is worth doing well, because a careless conversion mangles formatting — broken drop caps, lost italics, scrambled tables. Our dedicated walkthrough on [converting EPUB to MOBI, AZW3 and PDF without losing formatting](/blog/productivity/convert-epub-to-mobi-azw3-pdf/) covers the pitfalls in detail, and for quick one-off jobs outside your library the [Convert](/apps/convert/) extension handles small format changes right in Safari. When the goal is specifically to get a book onto a Kindle, our guide to [sending any ebook to your Kindle by email](/blog/productivity/send-ebooks-to-kindle-email/) explains which formats Amazon accepts today and how the approved-sender email flow works.

Doing all of this by hand across a large collection gets tedious fast, which is where a real library manager pays off. [eBouquin](/apps/ebouquin/) is a native, Calibre-compatible ebook library manager for iPhone, iPad, and Mac that handles the whole format story in one place. It opens your existing Calibre library exactly as it is — the same per-book folders and `metadata.db` database — so your masters stay in an open format with no import or lock-in. From there it converts between EPUB, MOBI, AZW3, and PDF with sensible defaults and no confusing knobs, including batch-converting a whole selection in one step, and it sends any book straight to a Kindle email address, bulk-sending a stack and tracking each one in an outbox. In other words, it turns the rules in this article into buttons: store the master, generate the derivative, send it, done.

{% include blog-cta.html app_slug="ebouquin" %}

Because it reads and writes the standard Calibre format rather than importing your books into something proprietary, eBouquin also respects the ownership principle at the heart of choosing formats: your files stay wherever you put them and are never uploaded to the developer. If you are weighing your options on the desktop specifically, our survey of the [best Calibre alternatives for Mac](/blog/productivity/best-calibre-alternatives-mac/) puts it in context, and the [best productivity apps for iPhone and Mac in 2026](/blog/productivity/best-productivity-apps-iphone-mac-2026/) rounds out the toolkit.

## Frequently Asked Questions

### What is the difference between EPUB and PDF?
EPUB is reflowable: the text adapts to your screen and font size, which makes it ideal for novels and most non-fiction. PDF is fixed-layout: it reproduces an exact page identically everywhere, which is ideal for textbooks, comics, and anything where the layout carries meaning but poor for reading on small screens. Choose EPUB for prose and PDF for layout-critical books.

### Is EPUB better than MOBI?
For almost every purpose, yes. EPUB is an open standard with modern styling support and near-universal app compatibility, while MOBI is a dated, limited format that Amazon has largely retired — it stopped accepting MOBI through Send to Kindle in late 2022. If you have MOBI files, convert them to EPUB for storage and to AZW3 or PDF only when a specific device needs them.

### What is AZW3 and how is it different from MOBI?
AZW3 is Amazon's modern Kindle format, built on Kindle Format 8 (KF8), which supports a rich subset of HTML5 and CSS3. That makes it far better than the older MOBI at preserving typography and layout. Its natural use today is sideloading well-formatted, DRM-free books onto a Kindle; for storage, an open EPUB master is still the better choice.

### Which ebook format should I keep as my permanent copy?
Keep EPUB as the master for prose, because it is open, reflowable, and widely supported, and keep PDF as the master for layout-critical books, because converting them away would destroy the layout that makes them useful. Everything else — an AZW3 for a Kindle, for example — can be generated by conversion and discarded afterward.

### Can I convert a book from one format to another without losing formatting?
Usually yes for reflowable formats like EPUB and AZW3, though fine details such as complex tables or custom fonts can shift, so it is worth checking the result. Converting a fixed-layout PDF into a reflowable format is the risky case, because the original layout does not translate cleanly. A good library manager with sensible conversion defaults, like eBouquin, minimizes the damage.

### Does DRM affect which formats I can use?
Yes, significantly. DRM-free files behave exactly as described here — you can convert, back up, and choose your master format freely. DRM-protected books are locked to a specific store's apps and cannot be freely converted, and removing that protection raises legal questions that vary by country. Wherever you can, buying DRM-free keeps your format choices open.

### Why won't my Kindle open an EPUB file directly?
Kindle devices historically read Amazon's own formats, not raw EPUB, so a bare EPUB copied onto a Kindle typically will not open. The supported path is to send the EPUB through Amazon's Send to Kindle service, which converts it on their end, or to convert it to a Kindle-friendly format yourself first. Our guide to sending ebooks to Kindle by email covers the current, supported workflow.
