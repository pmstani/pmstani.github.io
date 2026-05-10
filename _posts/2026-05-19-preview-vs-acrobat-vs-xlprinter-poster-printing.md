---
layout: post
title: "Preview vs Acrobat vs XLPrinter: Mac Poster Printing Compared"
description: "A fair, accurate comparison of the three main paths to tiled poster printing on Mac. macOS Preview's Tile option and what it gets wrong, Adobe Acrobat Pro's Poster mode and its limits, and where XLPrinter is genuinely different."
date: 2026-05-19
categories: [utilities]
tags: [xlprinter, preview, acrobat, mac-printing, poster-printing, comparison, tiled-printing]
silo: utilities
pillar: utilities
related_apps: [xlprinter, pdf-compressor, pdiff, save-as-pdf, web2screen, photo-to-pdf]
---

# Preview vs Acrobat vs XLPrinter: Mac Poster Printing Compared

There are three primary ways to tile-print a poster on a Mac in 2026. The first is built into the operating system: macOS Preview's print dialog has a "Tile" option that has existed in some form since Mac OS X 10.4 (2005). The second comes from Adobe: Acrobat Pro's print dialog has a "Poster" page-handling option that pre-dates the Mac App Store era and has been refined across multiple Acrobat versions. The third is the dedicated tool category, and the running example here is [XLPrinter](/apps/xlprinter/), a native macOS app whose entire design is organised around tiled printing rather than offering it as a side feature.

Each of these has a real audience and a real use case. Preview is free, available on every Mac, and good enough for occasional poster work where the geometry is forgiving. Acrobat Pro is part of an established workflow for many professionals and handles poster tiling reasonably well alongside its many other PDF features. XLPrinter is the dedicated option that handles the geometry honestly across the full range of tiling scenarios.

This post is a fair, accurate comparison of the three. It covers what each tool actually does, where each gets the geometry right, where each gets it wrong, and which use cases fit which tool. There is no winner-take-all conclusion — different tools fit different needs — but the differences in how each handles the printer's non-printable margin, the page-order problem, and the unit-and-size interface matter and are worth understanding.

## macOS Preview: The Tile Option

Preview's Tile option appears in the print dialog when you have an image or PDF open and choose Print. Under the "Show Details" panel, the layout section includes a "Tile" pop-up that lets you choose a number of tiles per page row and column.

### What it gets right

Preview's Tile option works for the simplest case: a poster from a single source page that you want to spread across a small number of sheets, where the seam quality is not critical, and where you do not need to verify anything about the result before sending to the printer.

Specifically:

- **Free and pre-installed.** Available on every Mac, no purchase or download required.
- **Familiar interface.** The print dialog is the standard macOS print dialog; everyone knows how to find it.
- **Source format flexibility.** Works on any image or PDF that Preview can open (which is most things).
- **Direct printing.** Sends to the printer in one click.

For a casual user who needs to print one poster, has a forgiving design that does not have critical content at the edges of any tile, and is willing to accept whatever the result looks like, Preview's Tile option is the path of least resistance.

### What it gets wrong

The honest catalogue of Preview's Tile option's failure modes:

**Margin compensation is inconsistent.** Preview's Tile option does not reliably compensate for the printer's non-printable margins. The behaviour depends on the print driver, the printer model, and the macOS version. On some configurations, content at the seams is silently clipped — you discover this only after assembly. On other configurations, the layout adjusts but the adjustment is not visible in any preview, so you cannot verify the result before printing.

**Page order in Print-to-PDF is unpredictable.** This is the most often-reported failure mode. When you use Preview's Tile option with the "Save as PDF" output destination instead of a physical printer, the resulting PDF has its pages in an order that varies by macOS version. In some configurations the order is row-major (correct); in others it is column-major; in others it is centre-out. The variability means you cannot rely on the output for downstream workflows like print-shop handoff. Direct-to-printer often works correctly, but Print-to-PDF often does not.

**No live preview of the tiling.** Preview shows a single preview of the source page, not a preview of the tiled layout. You cannot see how the source will be split, where the seam lines fall, or how content interacts with the printer's margin region until you have actually printed the tiles.

**No registration marks.** Preview does not generate registration marks at sheet corners. Alignment during assembly relies entirely on edge matching, which is harder for posters with continuous imagery (photos, gradients, illustrations spanning seams).

**No overlap option.** Preview does not offer overlap between adjacent tiles. The choice between butt-join assembly and overlap-and-tape assembly is removed from the user.

**Size specification is in tile counts only.** You can ask for a 3 × 3 tile layout but not for a 60 cm wide poster. The translation from "I want a poster this big" to "that means N tiles" has to happen in your head, and the result depends on paper size, orientation, and margin behaviour that is not visible.

**No multi-page PDF page selection.** For a multi-page PDF source, Preview's Tile option tiles every page, producing many tiled assemblies. There is no way to select a single page from a multi-page PDF for tiling.

The cumulative effect is that Preview's Tile option works for the simplest cases and fails in non-obvious ways for the more complex ones. The failures are often not visible until after the print is done and you are at the assembly stage trying to figure out why the sheets do not line up.

### When to use Preview's Tile option

For occasional posters where:
- The source has substantial margin in the design (no critical content at the edges).
- The assembly is forgiving (the seam quality is not critical).
- You do not need to export the tiled PDF for a print shop.
- You can tolerate some experimentation to figure out which print configuration works on your specific printer.

For everything else, Preview's Tile option is below the threshold of useful.

## Adobe Acrobat Pro: The Poster Option

Acrobat Pro is Adobe's commercial PDF editor and reader, currently sold as part of the Adobe Creative Cloud subscription (€20-30/month for Acrobat Pro alone, or bundled with the full Creative Cloud at higher tiers). Its print dialog offers a "Poster" page-handling mode that tiles a PDF across multiple sheets.

### What it gets right

Acrobat Pro does several things well that Preview does not:

- **Better margin handling in many cases.** Acrobat's Poster mode respects the printer's non-printable margins more reliably than Preview's Tile option. The behaviour is still configuration-dependent but more often correct.
- **Tile size in inches or millimetres.** You can specify tile dimensions in physical units rather than purely in tile counts, giving a more intuitive interface for "I want a poster this big".
- **Tile scale option.** A scale percentage lets you specify "tile this PDF at 200% size", which is convenient for known scale-up factors.
- **Cut marks and labels.** Optional cut marks at sheet corners (similar to registration marks) and tile labels (page numbers indicating tile position) make assembly easier.
- **Overlap option.** You can specify an overlap between adjacent tiles for overlap-and-tape assembly.
- **Pre-print preview.** The preview pane shows how the PDF will be split across tiles, with the tile boundaries visible. You can verify the layout before printing.

For users already in the Adobe ecosystem — designers, publishing professionals, anyone who has Acrobat Pro for other workflows — the Poster option is a usable tiling tool. It produces results that are generally clean and reliable for direct printing.

### What it gets wrong

The catalogue of Acrobat Pro's Poster mode failure modes:

**Page order defaults to centre-out, not row-major.** This is the single most common point of confusion. Acrobat's Poster mode, by default, puts the centre tile of the assembly first, then works outward in concentric rings. The reasoning is that the centre of the source PDF page is page 1, so the centre tile is page 1 of the output. The result, when you receive a stack of printed tiles, is that you cannot stack them in print order and assemble linearly — you have to identify which tile is which based on its content, then arrange. For small assemblies (4-6 tiles) this is annoying but manageable; for large assemblies (16+ tiles) it is genuinely confusing.

**Print-to-PDF preserves the centre-out order.** If you save the tiled output as a PDF for handoff, the pages remain in centre-out order. A print shop that drops the PDF into their queue will print in that order, and you receive the tiles in the same confusing arrangement. Specifying "row-major page order" requires extra Acrobat configuration that most users miss.

**Cost.** Acrobat Pro is a subscription-only product. €20-30/month for occasional poster printing is poor value compared to the alternatives. For users who already have Acrobat for other reasons, the cost is sunk; for users who would buy Acrobat just for poster work, it is overspend.

**Adobe-account dependency.** Acrobat Pro requires an Adobe account and periodic re-authentication. For users who want a self-contained tool that does not require account management, this is friction.

**Heavy app footprint.** Acrobat Pro is a large application (multi-gigabyte install) with many features beyond PDF printing. For poster printing specifically, much of the functionality is irrelevant overhead.

**Margin behaviour still configuration-dependent.** Acrobat's margin handling is better than Preview's but still depends on the print driver and printer model. Some configurations clip content at the seams; the failure mode is rarer than Preview but not absent.

**Live preview is in the print dialog, not in the document.** You see the tiling preview only when you open the print dialog. You cannot adjust the layout interactively in the document view.

### When to use Acrobat Pro's Poster mode

For users who:
- Already have Acrobat Pro for other reasons.
- Want centre-out page order (some workflows actually prefer this).
- Need the broader feature set of Acrobat Pro alongside tile printing.
- Are doing occasional rather than frequent poster work.

For users without an existing Acrobat licence, the value proposition is weak — there are better dedicated tools at lower cost.

## XLPrinter: The Dedicated Tool

[XLPrinter](/apps/xlprinter/) is a native macOS app whose entire design is organised around tiled printing. It is sold as a one-time purchase on the Mac App Store, with no subscription, no in-app purchase, and no account required.

### What it gets right

The differentiators that come from being designed specifically for the use case:

**Margin compensation on by default with visible preview.** The printer's non-printable margins are shown in the live preview as dimmed strips around each sheet. The layout is laid out so that nothing important falls inside the dimmed area, and so that when you trim each sheet at the printable boundary, adjacent sheets butt-join with no visible gap. This is the default behaviour, not a hidden setting.

**Row-major page order for both direct print and Print-to-PDF.** The output is in the order you would naturally stack and assemble: top-left first, then across to top-right, then next row, all the way through. This works the same for direct printing and for the export-to-PDF path. You do not have to sort the printed sheets before assembly.

**Output size in pages, inches, millimetres, or fit modes.** You specify the result in the units that match your intent. "I want a 60 cm wide poster" works directly. "I want a 4 × 3 grid" works directly. "Fit to width" works directly. The unit is always the unit of your decision, not a translation through some other unit.

**First-class PDF input.** Multi-page PDFs are handled natively. Vector PDFs render at print resolution, preserving line quality at any scale. Page selection lets you choose specific pages from a multi-page PDF.

**Live interactive preview.** The preview is in the document view, updates as you change settings, and shows everything that matters: the tiled layout, the printable area on each sheet, the margin strips, the registration marks, and the overlap if configured.

**Registration marks and overlap as separate configurable options.** You choose your assembly method and configure the marks and overlap accordingly.

**Export tiled layout as multi-page PDF.** Direct-to-printer or export-to-PDF, both produce correct row-major output. The PDF is the canonical handoff to a print shop or for archival.

**Native macOS app.** Sandboxed, signed, notarised, follows standard macOS UI patterns (drag-and-drop, dark mode, SF Symbols, the standard toolbar and inspector pane, full keyboard shortcuts). Files never leave your Mac. No account, no subscription, no telemetry.

**Localised in eleven languages.** English, French, Spanish, Italian, German, Simplified Chinese, Korean, Japanese, Brazilian Portuguese, Polish, and Dutch.

### What it does not do

A fair comparison should also note what XLPrinter is not:

- **Not a PDF editor.** It does not edit PDFs, only tiles them. For PDF editing, you need Acrobat Pro, PDF Expert, or another dedicated editor.
- **Not a design tool.** It does not lay out posters from scratch. The source comes from a design tool (Canva, Figma, Affinity, Illustrator, etc.) or a photo source.
- **Not free.** It is a commercial Mac App Store purchase. Free alternatives exist (Preview, the various open-source tools) for users who cannot or will not pay.
- **Not cross-platform.** macOS only. Windows users need different tools.
- **Not a wide-format plotter substitute.** For users who genuinely need single-sheet large-format output (architectural plotting at A0 size, fine-art prints), a wide-format plotter or print shop is still the right answer. XLPrinter is the right tool when you have a Letter or A4 home printer and want to produce large-format output by tiling.

### When to use XLPrinter

For users who:
- Print posters or large-format material more than occasionally.
- Need the geometry to be honest (margin compensation, correct page order).
- Want a tool that handles the workflow without manual workarounds.
- Want a one-time purchase rather than a subscription.
- Want a native macOS experience without account management or telemetry.
- Want a tool designed for the job rather than a general tool with the feature bolted on.

{% include blog-cta.html app_slug="xlprinter" %}

## Side-by-Side: The Specific Differences

For readers who want the comparison in tabular form, the specific differences across the three tools:

**Margin compensation:**
- Preview: inconsistent, configuration-dependent, no preview.
- Acrobat: respects margins better, configuration-dependent, preview in print dialog only.
- XLPrinter: on by default, visible in live preview, layout adjusts automatically.

**Page order:**
- Preview: row-major direct print (usually); Print-to-PDF unpredictable.
- Acrobat: centre-out by default (configurable to row-major).
- XLPrinter: row-major for both direct print and Print-to-PDF.

**Output size specification:**
- Preview: tile counts only.
- Acrobat: tile dimensions or scale percentage.
- XLPrinter: pages, inches, millimetres, or fit modes.

**PDF input handling:**
- Preview: tiles all pages of a multi-page PDF, no page selection.
- Acrobat: tiles selected pages of a multi-page PDF.
- XLPrinter: page selection, vector rendering at print resolution.

**Registration marks:**
- Preview: none.
- Acrobat: cut marks (similar concept).
- XLPrinter: registration marks at sheet corners, configurable.

**Overlap:**
- Preview: none.
- Acrobat: configurable overlap between tiles.
- XLPrinter: configurable overlap between tiles.

**Cost (2026 prices):**
- Preview: free.
- Acrobat Pro: subscription, €20-30/month.
- XLPrinter: one-time Mac App Store purchase.

**Privacy:**
- Preview: local, no data leaves Mac.
- Acrobat: requires Adobe account, some cloud features.
- XLPrinter: local, no data leaves Mac, no account, no telemetry.

**Multi-language:**
- Preview: localised with macOS.
- Acrobat: localised in major languages.
- XLPrinter: 11 languages.

## Other Mac Apps Worth Knowing About

The three above are the most-used. A few others worth mentioning briefly:

- **PosteRazor.** A free, open-source poster tiling tool. Available for Mac via build-from-source or homebrew. The interface is utilitarian and the development is sporadic, but for users who want a free dedicated tool and are comfortable with command-line installation, it works.

- **Affinity Publisher's print options.** Affinity Publisher (one-time purchase, around €60) includes tiled-print options as part of its broader publishing feature set. For users already using Affinity for design work, this is a reasonable in-tool path.

- **PDF Expert's print mode.** Has basic tiling. Not the focus of the app and the implementation is less complete than dedicated tools.

- **The print shop's own tiling.** Many print shops will accept a single large PDF and do the tiling themselves on their plotter. For users who want to outsource the entire workflow, this is the simplest option — at a cost premium.

For broader context on the workflow — when each of these tools is the right choice, and how they fit into a Mac-based print preparation pipeline — see the [hub guide on best apps for printing large posters and blueprints on Mac](/blog/utilities/best-apps-printing-large-posters-blueprints-mac-2026/). For the geometry deep-dive, [why printer margins matter for poster tiling](/blog/utilities/why-printer-margins-matter-poster-tiling-explained/). For the end-to-end how-to, [how to print a large poster across multiple sheets on Mac](/blog/utilities/how-to-print-large-poster-multiple-sheets-mac/).

## File Preparation Apps That Complement Any of These

Whichever tiling tool you use, the file preparation steps before tiling are the same:

- [PDF Compressor — ThinPDF](/apps/pdf-compressor/) for shrinking outsized source PDFs without affecting vector content. Useful for large architectural plan sets and image-heavy posters.
- [PDIFF](/apps/pdiff/) for verifying which revision of a PDF you have before committing to a print job. Important for plan sets that go through multiple revisions.
- [Save as PDF](/apps/save-as-pdf/) for converting webpages to print-ready PDFs from Safari. Useful for tiling web-sourced infographics and instructional material.
- [web2screen](/apps/web2screen/) for high-resolution PNG capture of webpages where pixel-perfect rendering matters.
- [Photo to PDF](/apps/photo-to-pdf/) for combining multiple photos into a single PDF for tiled photo work.

These tools complement the tiling step regardless of which tiling tool you use.

## FAQ

**Is XLPrinter really better than Preview for tiled printing?**
For tiled printing specifically, yes — Preview's Tile option fails in non-obvious ways for non-trivial use cases (margin clipping, unpredictable page order in Print-to-PDF, no live preview). XLPrinter handles these correctly by default. For users who only ever print one poster a year and have a forgiving design, Preview is good enough; for everyone else, XLPrinter is a meaningful improvement.

**Is XLPrinter better than Acrobat Pro?**
For tiled printing specifically, XLPrinter has the cleaner workflow: row-major page order by default, simpler interface, lower cost, no subscription, no account requirement. For users who already have Acrobat for broader PDF work, Acrobat's Poster mode is usable. For users buying a tool specifically for tiling, XLPrinter is better value and better-designed for the task.

**Why does macOS Preview's Tile option mess up page order in Print-to-PDF?**
The reasons are not officially documented. The observation is that Preview's Print-to-PDF path produces tiled output in an order that varies by macOS version and print configuration. The variability suggests an implementation bug or an undocumented design choice in macOS's print pipeline.

**Can I get correct row-major output from Acrobat?**
Yes, with configuration. Acrobat's print dialog has page-order options that include row-major (sometimes labelled "left-to-right, top-to-bottom"). The default is centre-out, which trips up most users. Once configured, Acrobat produces correct row-major output reliably.

**Is the open-source PosteRazor a viable free alternative?**
For users comfortable with command-line installation and a utilitarian interface, yes. The functionality is comparable to a basic version of XLPrinter. The downside is that PosteRazor's development is sporadic and the macOS build is not always current with recent macOS versions.

**Do print shops accept tiled PDFs from any of these tools?**
Most accept any standard multi-page PDF. The catch is that some shops apply their own scaling or auto-fit defaults that can undo your tiling. Always specify "actual size, no auto-fit" when sending a pre-tiled PDF to a print shop. The exported PDF format from XLPrinter, Acrobat, or any other tool is a standard PDF that any shop can handle.

**Which tool handles the largest sheet counts?**
All three handle large sheet counts in principle. XLPrinter's design is more comfortable at high sheet counts because the row-major page order makes assembly tractable; Acrobat's centre-out default becomes increasingly confusing as sheet count increases; Preview's lack of preview means you cannot easily verify a 30+ sheet layout before printing.

**Does the choice of tool affect the printed quality?**
Not directly — the printer hardware and the source resolution determine the print quality. But the tool affects whether the geometry is correct (margins, alignment, page order), and incorrect geometry produces visible quality issues at the seams that no amount of careful printing can fix afterwards.
