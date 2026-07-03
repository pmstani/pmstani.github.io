---
layout: post
title: "How to Send Any Ebook to Your Kindle by Email"
description: "Send any ebook to your Kindle by email: how the @kindle.com address works, the approved sender list, which formats Amazon accepts, and bulk-sending from eBouquin."
date: 2026-07-03
categories: [productivity]
tags: [send-to-kindle, kindle-email, ebook-to-kindle, epub-kindle, azw3, ebook-manager]
silo: ebook-management
related_apps: [ebouquin, convert, save-as-pdf, photo-to-pdf, transcribe]
---

The most reliable way to get a book you already own onto a Kindle has nothing to do with the Kindle Store. It is email. Every Kindle account comes with a private email address, and anything you send to that address — a public-domain EPUB, a PDF manual, a scanned document, a report you exported yourself — lands in your Kindle library and syncs to every device and app signed in to your account. No cable, no proprietary sync app, no store purchase. Just an attachment and a send button.

For a book or two, emailing works fine straight from Mail. The friction appears when you own a real library: hundreds of files, mixed formats, and the constant question of "will Kindle actually accept this one?" That is the gap a proper ebook manager closes. This guide explains exactly how Amazon's Send to Kindle by email works — the address, the approved sender list, the formats Amazon accepts and the ones it quietly stopped accepting — and then shows how [eBouquin](/apps/ebouquin/), a native, Calibre-compatible library manager for iPhone, iPad, and Mac, turns "send to Kindle" from a fiddly per-file chore into a one-tap action you can run across a whole stack of books.

If you are still deciding which app should own your library in the first place, start with our overview of the [best ebook library manager apps for iPhone, iPad, and Mac](/blog/productivity/best-ebook-library-manager-apps-iphone-ipad-mac/). This article assumes you already have books in hand and simply want them on your Kindle.

## What "Send to Kindle" Actually Is

Send to Kindle is Amazon's system for getting *personal documents* — anything you did not buy from the Kindle Store — into your Kindle library. Amazon exposes it through several front doors: a browser extension, a desktop app, mobile share sheets, and, underneath all of them, a plain email endpoint. The email endpoint is the one that never changes and never depends on installing anything, which is why it remains the universal path.

The mechanics are simple. Amazon assigns your account a unique address ending in `@kindle.com`. Email your ebook there, and Amazon's servers process the file and deliver it to your Kindle library — within a minute or two it appears on your Kindle device, the app on your phone, and Kindle for Web, wherever you are signed in. Personal documents delivered this way are stored in your account and can be re-downloaded any time, so a single send also backs the file up to Amazon's cloud.

Two things matter about how Amazon treats what you send. First, for reflowable formats it does not store the raw file — it converts them into Amazon's internal Kindle format so the text reflows, remembers your place, and supports font changes. Second, it enforces a security gate on *who* may send to your address, which is the single most common reason a send silently fails. We will cover both.

## Finding Your Personal @kindle.com Address

Your Send to Kindle email address lives in your Amazon account, not on the device. To find it, sign in to Amazon and open **Manage Your Content and Devices**, then go to the **Preferences** tab and expand **Personal Document Settings**. There you will see a **Send-to-Kindle E-Mail Settings** section listing an address for each device and app on your account — something like `yourname_a1b2@kindle.com`.

A few details are worth knowing:

- The address must be typed exactly, including the random suffix Amazon adds so it is not trivially guessable.
- You can edit the local part (the bit before `@kindle.com`) if the default is awkward. Pick something memorable, because you will paste it into your ebook manager once and reuse it forever.
- On a shared household account, each Kindle can have its own address, which lets you route a given book to a specific device.

Copy this address somewhere you can retrieve it. In eBouquin you enter it once in settings, and every future send reuses it automatically.

## The Approved Sender List: Why Your Email Gets Rejected

Here is the rule that trips up almost everyone the first time. Amazon will only accept a document if it comes *from an email address you have explicitly approved*. If a random sender could email your `@kindle.com` address, anyone who guessed it could push files into your library, so Amazon requires you to maintain an allow-list.

In the same **Personal Document Settings** page, there is an **Approved Personal Document E-mail List**. Add every "from" address you intend to send with: your iCloud address, your Gmail, your work email, and — importantly — the address your ebook manager sends through. Any message arriving from an address not on that list is discarded without notice. There is no bounce, no error, no "spam" folder to check. The book simply never shows up, which feels like a bug but is working as designed.

This is the number-one cause of "I sent it and nothing happened." Before you troubleshoot anything else, confirm that the exact sending address is on the approved list. When you send from eBouquin, the app uses your device's mail account to deliver the message, so the address you approve is the one you sign in with on that device.

## Which Formats Kindle Accepts by Email

Not every ebook format is welcome at the `@kindle.com` door, and the list has changed in ways that still confuse people who set up their workflow years ago. Our companion guide, [ebook formats explained: EPUB vs MOBI vs AZW3 vs PDF](/blog/productivity/ebook-formats-explained-epub-mobi-azw3-pdf/), goes deep on how each behaves; here is what matters specifically for sending by email.

### EPUB

EPUB is now the format to send. For years EPUB was conspicuously *not* accepted by Send to Kindle, which forced everyone to convert to Kindle-native formats first. That changed: Amazon added EPUB support to Send to Kindle, and today an EPUB emailed to your address is accepted and converted on Amazon's side into the reflowable Kindle format. Because EPUB is the open, reflowable standard that most stores and libraries hand you, this makes it the natural master copy to keep and the natural thing to send.

The conversion is generally faithful for straightforward, text-first books — novels, essays, most nonfiction. Heavily designed EPUBs with complex fixed layouts, elaborate tables, or intricate CSS can shift slightly, because Amazon reflows the content to fit the Kindle reading system. For the vast majority of reading, EPUB in, clean reflowable book out.

### PDF

PDF is accepted too, and it behaves differently from EPUB. A PDF is a *fixed-layout* format: the page is a fixed canvas, so Amazon delivers it essentially as-is rather than reflowing it into Kindle text. On a large-screen Kindle or a tablet this is fine; on a small e-ink Kindle, a dense A4 PDF can be uncomfortable because the text does not resize the way a real ebook does.

There is a historical trick worth knowing: sending a PDF with the word **Convert** in the email subject line asks Amazon to attempt a conversion of the document to reflowable Kindle format rather than keeping it as a fixed page image. Results vary with how the PDF was built — a clean, text-based PDF reflows reasonably; a scanned image PDF has no real text to reflow. When a PDF reads badly on your Kindle, converting the source to EPUB first (more on that below) almost always beats fighting the PDF.

If your library is heavy on PDFs, keep their file sizes sane before they hit the email size ceiling — our guide to [PDF workflows on iPhone and Mac](/blog/productivity/complete-guide-pdf-workflows-iphone-mac/) helps here.

### MOBI and AZW3: The Legacy Story

If you set up a Send to Kindle routine a long time ago, you probably remember converting everything to **MOBI** and emailing that. Do not do this anymore. Amazon phased MOBI out of Send to Kindle — the old workhorse format is no longer the thing you send by email. AZW3 (Amazon's KF8 format) was always an on-device store format rather than a Send to Kindle input, so it is not the format to email either.

The practical upshot: **for email delivery today, think EPUB first, PDF when the layout must be preserved.** MOBI and AZW3 still exist, still open in older tools, and still matter when you are managing files locally or moving books between apps — but they are legacy choices for the email pipeline specifically. Keep an open EPUB master and you sidestep the whole problem.

### Documents and Images

Send to Kindle also accepts ordinary documents and images — Word files, plain text, RTF, HTML, and common image formats. That is what makes the `@kindle.com` address useful beyond books: a meeting brief, an exported article, or a set of scanned pages can all become comfortable Kindle reading, as the workflow below shows.

## Converting Before You Send (When and Why)

Most of the time you send an EPUB and you are done. You convert first only when the source format will not give you a good result on the Kindle — typically a MOBI you want to modernize into EPUB, or a PDF that reads badly on a small screen and would be better as reflowable text.

For quick one-off conversions from your browser, [Convert](/apps/convert/) handles common file and format changes without installing a desktop suite. For your actual library, though, you want conversion to live *next to* your books so the converted copy is filed, tagged, and ready to send in the same place. That is exactly what eBouquin does: it converts between EPUB, MOBI, AZW3, and PDF with sensible defaults and no confusing knobs, and it can batch-convert an entire selection in one step. Our deep dive on [converting EPUB to MOBI, AZW3, and PDF without losing formatting](/blog/productivity/convert-epub-to-mobi-azw3-pdf/) walks through what conversion does to a book's formatting and when reflowable-to-fixed changes are safe.

The rule of thumb is simple: **keep the most open, reflowable master you can (usually EPUB), and convert only to solve a specific delivery problem.** You almost never need to convert *for the sake of* Send to Kindle anymore, because EPUB is accepted directly.

## Sending From eBouquin: One Tap, Bulk Send, and an Outbox

Emailing books one at a time from Mail is tolerable for a handful and miserable for a shelf. You attach a file, remember the address, worry about which format Kindle wants, hit send, and have no record of what went through. Multiply that by fifty books and you see why people give up and buy a second copy from the store.

eBouquin turns the whole thing into a first-class feature of your library. You enter your `@kindle.com` address once. From then on, sending a book to your Kindle is a couple of taps from the book itself — no re-typing the address, no digging for the file, no format guesswork, because the app knows what Kindle accepts and can convert on the way out when needed. Select a whole stack of books and **bulk-send** them in a single action, and every send is recorded in an **outbox** so you can see what has been delivered, what is queued, and what needs attention. That outbox is the piece Mail can never give you: a durable record of exactly what you pushed to your Kindle and when.

Because eBouquin opens an existing Calibre library exactly as it is — the same per-book folders, the same `metadata.db` — the books you send are the well-organized copies you already curated, not stray downloads. And because your library files are never uploaded to the developer, the only place your books travel is to your own Kindle account, at your instruction.

{% include blog-cta.html app_slug="ebouquin" %}

If you are coming from desktop-only Calibre and want this send-by-email flow on your phone or tablet, our guide to [using your Calibre library on iPhone and iPad](/blog/productivity/use-calibre-library-on-iphone-ipad/) shows how the same library opens natively on Apple devices, so you can send from the couch instead of being tethered to your Mac.

## A Repeatable Send-to-Kindle Workflow

Once the pieces are in place, a durable routine looks like this:

1. **Approve your addresses once.** Add every email you might send from to Amazon's approved list, including the account your device's Mail uses. Do this a single time and forget it.
2. **Standardize on EPUB masters.** Keep your library in open EPUB wherever you can. It sends directly, converts well, and future-proofs you against format churn.
3. **Convert only to solve a problem.** If a book is a legacy MOBI or a screen-hostile PDF, convert it to EPUB in eBouquin before sending. Batch-convert when you are cleaning up many at once.
4. **Send in bulk, then check the outbox.** Select the books you want on your Kindle for the trip, send the whole group, and glance at the outbox to confirm delivery instead of hoping.
5. **Bring your own reading material, too.** The `@kindle.com` address is not just for books. Save a long web article as a PDF with [Save as PDF](/apps/save-as-pdf/) and email it over for distraction-free reading — the idea covered in our walkthrough on [saving any web page as a PDF in Safari](/blog/safari-extensions/how-to-save-any-web-page-as-a-pdf-in-safari/). Turn scanned pages into a clean PDF with [Photo to PDF](/apps/photo-to-pdf/), or run a recorded lecture through [Transcribe](/apps/transcribe/) and read the transcript on your Kindle later.

That last point is the quiet superpower of Send to Kindle: your e-reader becomes a comfortable place to read *anything* you can turn into a document. For more on building low-friction routines across your devices, our roundup of the [best productivity apps for iPhone and Mac](/blog/productivity/best-productivity-apps-iphone-mac-2026/) is a good companion.

## Troubleshooting Common Problems

**"I sent it and nothing arrived."** Ninety percent of the time this is the approved sender list. Confirm the exact address you sent *from* is on Amazon's Approved Personal Document E-mail List, character for character. There is no bounce message when it is not, so this failure is silent by design.

**"The book arrived but looks wrong."** For a reflowed EPUB, a few layout quirks are normal on complex books. For a PDF that is unreadable on a small Kindle, resend it with **Convert** in the subject line, or better, convert the source to EPUB first.

**"The attachment was rejected for size."** Send to Kindle enforces an attachment size ceiling (in the tens of megabytes). Image-heavy PDFs are the usual culprits — compress them first, per our guide on [compressing PDF files without losing quality](/blog/digital-privacy-security/how-to-compress-pdf-files-without-losing-quality/).

**"It works from my laptop but not my phone."** Your phone's Mail account may send from a different address than your laptop. Add both to the approved list, or let eBouquin handle sending so you only approve one address.

**"I want it on one specific Kindle."** If your account has multiple devices, each can have its own `@kindle.com` address — send to the device-specific one to route the book precisely.

## Frequently Asked Questions

### What email address do I send my ebooks to?

You send them to your personal `@kindle.com` address, which is unique to your Amazon account. Find it under **Manage Your Content and Devices → Preferences → Personal Document Settings**. Each Kindle device and app on your account can have its own address, so you can target a specific device. Enter the address once in eBouquin and every future send reuses it automatically.

### Why isn't my book showing up on my Kindle after I emailed it?

Almost always because you sent from an address that is not on Amazon's approved sender list. Amazon silently discards documents from unapproved addresses with no error message. Add the exact "from" address to the **Approved Personal Document E-mail List** in your Amazon account, then resend. Also confirm the attachment is a supported format and under the size limit.

### Can I still send MOBI files to my Kindle by email?

No — Amazon phased MOBI out of Send to Kindle, so emailing a MOBI is no longer the reliable path it once was. Send EPUB instead, which Amazon now accepts and converts to reflowable Kindle format on delivery. If your master copy is an old MOBI, convert it to EPUB first; eBouquin can do that in a single step, or in batch for a whole selection.

### Does Send to Kindle accept PDF, and will it look good?

Yes, PDF is accepted. Because PDF is a fixed-layout format, Amazon delivers it largely as-is rather than reflowing it, so it reads well on larger screens but can feel cramped on small e-ink Kindles. Putting **Convert** in the email subject asks Amazon to attempt a reflowable conversion, though results depend on how the PDF was built. For small screens, converting the source to EPUB usually reads far better.

### How do I send a whole batch of books at once?

Sending one at a time from Mail is tedious, so use a manager built for it. In eBouquin you select any number of books and bulk-send them to your Kindle in a single action, then track every send in the outbox so you can confirm what was delivered. This is far more reliable than attaching files individually and hoping each one went through.

### Can I send things other than books, like articles or scanned pages?

Yes. Your `@kindle.com` address accepts PDFs, Word documents, plain text, and more, so it is a general reading inbox, not just a book channel. Save a web article as a PDF, scan paper pages into a PDF with Photo to PDF, or export a transcript from Transcribe, then email any of them to your Kindle to read comfortably later.

### Is emailing books to my Kindle private?

The email travels to Amazon, which stores each personal document in your account so you can re-download it — so Amazon does see the files you send there. That is separate from where your library *lives*: eBouquin keeps your books on your own device or iCloud Drive and never uploads them to the app's developer. You control exactly which books leave your library for Amazon, and when.
