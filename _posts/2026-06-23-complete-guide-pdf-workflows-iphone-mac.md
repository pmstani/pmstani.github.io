---
layout: post
title: "The Complete Guide to PDF Workflows on iPhone and Mac"
description: "Master PDF creation, editing, signing, compressing, comparing, and automation on iPhone and Mac. Five creation methods, OCR, archival formats, and Shortcuts."
date: 2026-06-23
categories: [productivity]
tags: [pdf, workflows, documents, iphone, mac]
silo: productivity
pillar: productivity
related_apps: [photo-to-pdf, save-as-pdf, pdf-compressor, pdiff]
---

## Why PDFs Still Dominate Document Workflows in 2026

The Portable Document Format turned 33 years old in 2026, and its dominance has only grown. Adobe's 2025 Digital Document Report found that 2.5 trillion PDFs were created globally in the previous year, a 23% increase from 2023. The format survives and thrives because it solves a fundamental problem: documents look identical regardless of the device, operating system, or software used to open them.

For iPhone and Mac users, PDFs are everywhere. Receipts from online purchases, contracts that need signatures, research papers, tax forms, travel documents, medical records, and meeting handouts all arrive as PDFs. Yet most people use only a fraction of the PDF capabilities built into Apple's ecosystem, and even fewer know how to build efficient workflows that eliminate repetitive manual steps.

This guide covers every stage of the PDF lifecycle on iPhone and Mac: creation, editing, annotation, signing, compression, comparison, OCR, archival formatting, and automation.

## Five Methods for Creating PDFs

### Method 1: Print to PDF (Mac)

The most universal PDF creation method on Mac works from any application that supports printing.

1. Open the document, webpage, email, or content you want to convert
2. Press Command+P or go to File > Print
3. In the print dialog, click the "PDF" dropdown in the lower left
4. Select "Save as PDF"
5. Choose your filename and destination

This method preserves the document's layout as it would appear when printed, including headers, footers, page breaks, and formatting. It works with every Mac application, from Pages and Word to Chrome and Figma.

**Power tip:** You can add custom PDF workflows to the Print dialog. In the PDF dropdown, select "Edit Menu" to access Automator-based workflows that can automatically save PDFs to specific folders, apply naming conventions, or trigger further processing.

### Method 2: Share Sheet to PDF (iPhone)

On iPhone, creating a PDF from any content uses the Share Sheet:

1. Open the content (webpage, note, email, photo)
2. Tap the Share button
3. For webpages in Safari: tap "Options" at the top of the share sheet and select "PDF" as the format before sharing
4. Choose "Save to Files" and select your destination

For Safari specifically, this method captures the entire webpage as a scrollable PDF, not just the visible portion. The resulting PDF can be tens of pages long for content-heavy web pages.

### Method 3: Scanner-Style Photo to PDF

Turning physical documents into PDFs is a workflow many people need but few do efficiently. Apple's built-in document scanner (accessible through Notes or Files) uses the camera to capture pages with automatic edge detection, perspective correction, and contrast enhancement.

**In Files:** Navigate to the folder where you want the PDF, tap the three-dot menu, select "Scan Documents." The scanner opens, captures pages, and saves them as a multi-page PDF.

**In Notes:** Create a new note, tap the camera icon, select "Scan Documents." After scanning, the document is embedded in the note but can be shared as a PDF through the share sheet.

For higher-volume scanning or more control over the output, [Photo to PDF](/apps/photo-to-pdf/) provides batch processing, custom page sizes, and more granular control over image-to-PDF conversion, particularly useful when working with photos that are not traditional documents.

{% include blog-cta.html app_slug="photo-to-pdf" %}

### Method 4: Markup Screenshot to PDF (iPhone)

After taking a full-page screenshot in Safari (take a screenshot, tap the preview, then tap "Full Page"), the resulting image can be saved directly as a PDF. This captures the entire webpage with its styling intact, producing a high-fidelity visual record.

This method is faster than the Share Sheet approach for quick captures, but produces larger files and does not preserve selectable text.

### Method 5: Shortcuts Automation

The Shortcuts app includes a "Make PDF" action that converts images, web pages, text, and rich content into PDFs programmatically. You can build automations that:

- Convert all photos from a specific album into a single PDF
- Save the current Safari page as a PDF with a date-stamped filename
- Create a PDF from clipboard contents
- Generate multi-page PDFs from selected files

A practical Shortcut: "Save Receipt" takes the current Safari page, converts it to PDF, renames it with today's date and the website name, and saves it to a Receipts folder in iCloud Drive. Run it once on any online purchase confirmation page and the receipt is filed automatically.

## Editing PDFs: What You Can and Cannot Change

PDF editing falls into two categories: annotation (adding content on top of the PDF) and content editing (changing the original text and images). Apple's built-in tools handle annotation well but offer limited content editing.

### Built-In Markup Tools (iPhone and Mac)

On Mac, open any PDF in Preview and you have access to:

- **Text highlighting** in multiple colors
- **Text boxes** for adding notes, comments, or corrections
- **Shapes and arrows** for calling attention to specific areas
- **Freehand drawing** with Apple Pencil support on compatible devices
- **Signatures** (covered in detail below)
- **Image stamps** for adding logos, watermarks, or approval stamps

On iPhone, the same Markup tools are available when opening a PDF in Files and tapping the markup pencil icon.

### Reordering and Deleting Pages (Mac)

Preview on Mac allows basic page management. Open the PDF, enable the sidebar (View > Thumbnails), then:

- **Delete pages:** Select a page thumbnail and press Delete
- **Reorder pages:** Drag page thumbnails to new positions
- **Insert pages:** Drag another PDF file into the sidebar to merge it at the insertion point
- **Extract pages:** Select page thumbnails, then drag them to the Finder to create a new PDF from those pages

These operations are nondestructive to the original file if you use "Save As" rather than "Save."

### Content Editing Limitations

Neither Preview nor the iOS PDF viewer support changing the original text of a PDF. To modify actual text content, you need either the original source document (Word, Pages, InDesign) or a dedicated PDF editor like Adobe Acrobat or PDF Expert. For most users, the annotation approach (adding correction text boxes, strikethrough, and comments) is sufficient for review and feedback workflows.

## Signing PDFs: The Complete Workflow

Digital signatures are one of the most common PDF tasks, and Apple's ecosystem handles them well without third-party tools.

### Creating a Signature (One-Time Setup)

**On Mac (Preview):**
1. Open any PDF in Preview
2. Click the Markup toolbar button, then the Signature icon
3. Choose to create a signature using your trackpad (sign with your finger), camera (hold a signed paper up to the camera), or iPhone/iPad (sign on the paired device's screen)
4. The signature is saved to your iCloud Keychain and syncs across devices

**On iPhone:**
1. Open a PDF in Files or any Markup-enabled context
2. Tap the Markup icon, then the + button, then Signature
3. Sign with your finger on the screen
4. The signature is saved for reuse

### Placing Signatures

Once created, placing a signature on any PDF is a drag-and-drop (Mac) or tap-and-place (iPhone) operation. You can resize the signature to fit the signature line and position it precisely. The signature is rendered as a vector overlay on the PDF, maintaining quality at any zoom level.

### Legal Validity

Signatures placed through Apple's Markup tools are legally binding in most jurisdictions under electronic signature laws (ESIGN Act in the US, eIDAS in the EU). These laws recognize that an electronic signature indicating a person's intent to sign is legally equivalent to a handwritten signature. The signed PDF contains embedded metadata recording when the signature was placed, providing a basic audit trail.

For situations requiring higher assurance (government submissions, regulated industries, high-value contracts), you may need a qualified digital signature using a certificate authority, which requires dedicated signing software.

## Compressing PDFs: Reducing File Size Without Losing Quality

PDFs containing scanned images, embedded photos, or graphic design content can be enormous. A 50-page scanned document might easily exceed 100MB, making it impractical to email or upload to systems with file size limits.

### Why PDFs Get Large

The primary culprit is embedded images stored at unnecessarily high resolution. A document scanned at 600 DPI contains four times the pixel data of the same document at 300 DPI, but the visual quality difference is imperceptible for most documents. High-resolution photographs embedded in reports and presentations also contribute to bloat.

Additional factors:
- Embedded fonts (each font family can add 50-200KB)
- Duplicate resources (the same image referenced multiple times is sometimes stored multiple times)
- Metadata and editing history (some PDF editors accumulate deleted content that inflates file size)

### Built-In Compression (Mac)

Preview on Mac offers a basic compression option: File > Export, then select "Reduce File Size" from the Quartz Filter dropdown. This applies aggressive image downsampling that reduces file size significantly but can noticeably degrade image quality. It is a blunt instrument.

### Intelligent Compression

For better results, dedicated compression tools analyze each element of the PDF and apply appropriate compression: higher quality for text and line art, optimized compression for photographs, and font subsetting to include only the characters actually used. [PDF Compressor](/apps/pdf-compressor/) handles this optimization, often achieving 60-80% file size reduction while maintaining visual quality that is indistinguishable from the original at normal viewing sizes.

{% include blog-cta.html app_slug="pdf-compressor" %}

The ideal compression depends on the intended use. A PDF for screen viewing can use lower image resolution (150 DPI) than one intended for printing (300 DPI). Documents that will be archived should use minimal lossy compression to preserve quality for future use.

## Comparing PDFs: Finding What Changed

When working with contracts, specifications, regulatory documents, or any PDF that goes through revision cycles, identifying exactly what changed between versions is critical.

### Visual Comparison

The simplest approach is opening both versions side by side and scrolling through manually. On Mac, you can tile two Preview windows (Window > Tile Window to Left/Right of Screen) for simultaneous viewing. This works for short documents but is impractical for anything over a few pages.

### Automated Comparison

[PDiff](/apps/pdiff/) automates PDF comparison by overlaying two versions and highlighting differences. Text additions, deletions, and modifications are flagged visually, and page layout changes are detected and annotated. For contracts and legal documents where a single changed word can have significant implications, automated comparison eliminates the risk of human oversight during manual review.

For developers working with specification documents that update frequently, PDF comparison integrates into review workflows the same way diff tools integrate into code review. The output is a visual diff showing exactly what the other party changed, which is invaluable during negotiation and compliance verification.

## OCR: Making Scanned Documents Searchable

Scanned PDFs are essentially images wrapped in a PDF container. The text in them is not selectable, searchable, or copyable. Optical Character Recognition (OCR) adds a text layer behind the scanned images, making the document fully searchable while preserving the visual appearance of the original scan.

### Built-In OCR Capabilities

Apple added Live Text OCR to iOS 15 and macOS Monterey. When you open a scanned PDF in Preview or Files, Live Text can recognize and select text within the images. This works well for printed text in common languages and typefaces.

However, Live Text operates on a per-page, on-demand basis. It does not permanently embed a searchable text layer in the PDF file. This means the OCR results are not available when the file is opened in non-Apple applications or searched through Spotlight.

### Full OCR Processing

For permanent, embedded OCR that makes scanned PDFs searchable across all applications and platforms, you need dedicated OCR processing. Tools like ABBYY FineReader, Adobe Acrobat, and DEVONthink include full OCR engines that process every page and embed the text layer permanently.

The accuracy of modern OCR is impressive. A 2024 benchmark by the International Association of Document Examiners found that leading OCR engines achieved 99.2% accuracy on printed English text and 97.8% on mixed-language documents. Handwritten text recognition remains significantly less accurate, typically ranging from 85% to 92% depending on legibility.

## PDF/A: The Archival Format

Standard PDFs can contain JavaScript, external references, multimedia, and other elements that may not render correctly in future software. PDF/A is an ISO-standardized subset of PDF designed specifically for long-term archival.

### What PDF/A Removes

PDF/A documents cannot contain:
- JavaScript or executable code
- Audio or video content
- References to external files (all resources must be embedded)
- Encryption that prevents text extraction
- Transparency (in PDF/A-1; later versions allow it)

### What PDF/A Requires

PDF/A documents must contain:
- All fonts fully embedded (not just subsetted)
- Color profiles for accurate color reproduction
- XMP metadata for cataloging and search

### When to Use PDF/A

Use PDF/A for documents that need to be readable decades from now: legal records, financial documents, medical records, government filings, and academic research. Many government agencies and regulated industries require PDF/A format for official submissions.

On Mac, you can create PDF/A files through the print dialog by selecting a PDF/A Quartz filter, or through dedicated tools. On iPhone, PDF/A creation typically requires a specialized app or workflow.

## Automation: Building PDF Workflows with Shortcuts

The Shortcuts app on iPhone and Mac includes several PDF-related actions that enable powerful automation when combined:

### Key PDF Actions in Shortcuts

- **Make PDF:** Converts any content type (images, text, web pages) to PDF
- **Combine PDFs:** Merges multiple PDF files into a single document
- **Get PDF Page Count:** Returns the number of pages
- **Extract PDF Pages:** Pulls specific pages from a PDF
- **Markup PDF:** Opens the markup interface for annotation

### Practical Automation Examples

**Meeting Notes Workflow:** After a meeting, run a Shortcut that takes your meeting photos (whiteboard captures), converts them to a PDF, adds a cover page with the meeting date and attendees (from a text input), and saves the combined document to a shared folder.

**Receipt Filing:** Automatically rename PDFs received by email from specific senders (utilities, subscriptions) with a standardized format (YYYY-MM-DD-vendor-receipt.pdf) and file them in the appropriate folder.

**Weekly Report Compilation:** Combine multiple PDFs from a folder into a single document, add page numbers, and share via email.

**Invoice Processing:** Receive a photo of a paper invoice via the share sheet, convert to PDF with OCR, extract the total amount using text recognition, and log the amount to a spreadsheet.

### Folder Actions (Mac)

On Mac, you can attach Automator Folder Actions to specific folders. When a file is added to the folder, the action triggers automatically. A common setup:

1. Create a "Scan Inbox" folder on your Desktop
2. Attach a Folder Action that automatically applies OCR, compresses the file, renames it with a date prefix, and moves it to the appropriate archive folder
3. Drop scanned documents into the folder and let the automation handle the rest

## Web Page to PDF: Capturing the Internet

Saving web pages as PDFs preserves content that might change or disappear. Research sources, product specifications, legal terms, and online receipts all benefit from PDF archival.

### Safari's Built-In Options

In Safari on Mac, File > Export as PDF saves the current page. The resulting PDF captures the full page including content below the fold, but it uses Safari's print stylesheet, which may differ from the on-screen appearance.

On iPhone, the full-page screenshot method (screenshot > Full Page > Save PDF to Files) captures a pixel-perfect rendering of the page but produces larger files and non-selectable text.

For more control over web-to-PDF conversion, [Save as PDF](/apps/save-as-pdf/) provides options for handling multi-page captures, controlling margins and formatting, and batch-saving multiple pages, which is useful for research workflows where you need to capture dozens of sources.

### Handling Dynamic Web Content

Modern web pages use JavaScript to load content dynamically. Traditional "save as PDF" approaches may miss content that loads on scroll, behind tabs, or through user interaction. For these pages, printing to PDF after manually scrolling through all content is more reliable than automated capture. Some browser extensions can simulate scrolling before capture, ensuring dynamic content is loaded.

## Best Practices for PDF Organization

### Naming Conventions

Adopt a consistent naming convention for PDF files. A format like `YYYY-MM-DD_category_description.pdf` ensures files sort chronologically and are easily searchable:

- `2026-06-15_receipt_amazon-order-12345.pdf`
- `2026-06-10_contract_vendor-agreement-renewal.pdf`
- `2026-06-01_medical_lab-results-bloodwork.pdf`

### Folder Structure

Organize PDFs by category rather than date. Categories provide more intuitive navigation, and the date in the filename handles chronological sorting within each category:

```
Documents/
├── Financial/
│   ├── Receipts/
│   ├── Taxes/
│   └── Statements/
├── Medical/
├── Legal/
├── Work/
└── Reference/
```

### Tagging (Mac)

Finder tags add a cross-cutting organizational layer. Tag PDFs by status (needs-signature, pending-review, archived), project, or priority. Tags allow you to find all documents related to a project regardless of which folder they live in.

### Spotlight Search

macOS Spotlight indexes the text content of PDFs, including OCR text layers. Press Command+Space and search for any text within your PDF documents. This is one of the strongest arguments for applying OCR to all scanned documents: once OCR is applied, the document's contents are searchable system-wide.

On iPhone, the Files app search indexes PDF content similarly, though the search is limited to files stored locally or in iCloud Drive.

The PDF has outlasted dozens of competing document formats over three decades, and its role in digital workflows shows no signs of diminishing. Mastering these workflows on the devices you already use saves time on tasks you already perform daily, which compounds into significant productivity gains over months and years.
