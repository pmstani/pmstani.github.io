---
layout: post
title: "How to Quickly Create New Google Docs from Anywhere"
description: "Learn the fastest ways to create new Google Docs, Sheets, and Slides without navigating through Google Drive. Shortcuts, tips, and the best tools for instant document creation."
date: 2025-11-10
categories: [productivity]
tags: [google-docs, shortcuts, quick-create, productivity]
silo: productivity
pillar: productivity
related_apps: [new]
---

Google Workspace has over 3 billion users. For many knowledge workers, Google Docs is not just a word processor — it is the default surface for thinking. Meeting notes, project proposals, blog drafts, brainstorm dumps, interview questions, creative briefs, research summaries. The blank Google Doc is the modern equivalent of pulling out a notepad.

But the path from "I need to write something down" to "I am typing in a blank document" involves more friction than it should. Open a browser. Navigate to Google Drive. Wait for it to load. Click the "New" button. Click "Google Docs." Wait for the blank document to render. By the time the cursor is blinking, 15-30 seconds have passed — and research on interruption recovery from Microsoft Research shows that even a 15-second disruption can cause you to lose the thread of an idea.

This might sound trivial. It is not. If you create 5-10 new documents per week, those 15-30 seconds of friction add up to 1-2.5 hours per year of pure navigation overhead. More importantly, every instance of friction creates a decision point where you might decide "I will write it down later" — and later often means never.

This guide covers every method for creating a new Google Doc, Sheet, or Slide with minimal friction, from zero-install browser tricks to purpose-built tools that reduce the entire process to a single tap.

## Method 1: The .new Domain Shortcuts

In 2018, Google registered a set of `.new` top-level domain shortcuts that instantly create new documents. Type the URL into any browser's address bar and press Enter:

| Shortcut | Creates |
|----------|---------|
| `doc.new` | New Google Doc |
| `docs.new` | New Google Doc |
| `sheet.new` | New Google Sheet |
| `sheets.new` | New Google Sheet |
| `slide.new` | New Google Slides presentation |
| `slides.new` | New Google Slides presentation |
| `form.new` | New Google Form |
| `site.new` | New Google Site |
| `keep.new` | New Google Keep note |
| `cal.new` | New Google Calendar event |

These shortcuts are the fastest browser-based method for document creation. No Drive navigation, no menus, no waiting for the Drive interface to load. You type six characters and press Enter.

### How It Works Technically

When you navigate to `doc.new`, Google's servers authenticate your session (using your existing Google login), create a new untitled document in your Google Drive root folder, and redirect your browser to the editing URL — all in a single HTTP redirect chain that typically completes in under 2 seconds.

### Limitations

**Browser-only.** These shortcuts require a web browser. On iPhone, this means opening Safari, typing the URL, and waiting for the redirect chain to complete — which is slower than the desktop experience.

**Account ambiguity.** If you are signed into multiple Google accounts (personal and work, for example), the document is created in whichever account your browser considers "active." On Chrome, this is the first account you signed into. On Safari, it depends on which Google session is most recent. There is no way to specify which account from the URL alone.

**Root folder placement.** New documents are always created in the root of Google Drive, not in a specific folder. You must manually move the document to the correct folder afterward.

**No templates.** The `.new` shortcuts always create blank documents. If you regularly need documents with specific headers, formatting, or boilerplate content, you still need to apply a template after creation.

**No title prompt.** The document opens as "Untitled document," which inevitably leads to a Drive full of untitled documents if you do not immediately rename it.

## Method 2: Google Drive Keyboard Shortcuts

If you already have Google Drive open in your browser, keyboard shortcuts create new documents without any mouse interaction:

| Shortcut | Creates |
|----------|---------|
| `Shift + T` | New Google Doc |
| `Shift + S` | New Google Sheet |
| `Shift + P` | New Google Slides presentation |
| `Shift + O` | New Google Form |
| `Shift + D` | New Google Drawing |

### Requirements and Gotchas

- These only work when Google Drive has focus and no file is currently selected.
- They only work in the web interface, not in the Google Drive desktop app.
- The new document opens in a new tab, which means your Drive tab stays open — useful for continued document management but adds to tab clutter.
- Keyboard shortcuts are disabled if you are in a search field, a rename dialog, or any other text input within Drive.

## Method 3: Browser Bookmarks and Bookmark Bar

Turn the `.new` shortcuts into one-click bookmarks:

1. Navigate to `doc.new` in your browser.
2. When the new document opens, bookmark the **original URL** (`doc.new`), not the document URL that Drive generated.
3. Name the bookmark concisely — "New Doc" or just "Doc" — and save it to your bookmarks bar.
4. Repeat for `sheet.new` and `slide.new`.

Now creating a new document is a single click on the bookmarks bar. This is the optimal approach for users who work primarily in a browser and have the bookmarks bar visible.

### Power User Tip: Bookmark Keywords (Firefox and Chrome)

In Firefox, you can assign a keyword to a bookmark. Edit the `doc.new` bookmark and set the keyword to `d`. Now typing `d` in the address bar and pressing Enter creates a new document.

In Chrome, the same effect is achieved through search engine shortcuts: go to Settings > Search engine > Manage search engines, and add a new entry with the keyword `d` and the URL `doc.new`.

## Method 4: Desktop and Home Screen Shortcuts

### macOS Desktop Shortcut

1. Open `doc.new` in Safari or Chrome.
2. Drag the URL from the address bar directly to your desktop.
3. A `.webloc` shortcut file appears on your desktop. Double-click it to create a new document.

Alternatively, add it to your Dock: open `doc.new` in Safari, then go to File > Add to Dock (available in Safari 17+).

### iPhone Home Screen Shortcut

1. Open Safari and navigate to `doc.new`.
2. Tap the **Share** button (square with upward arrow).
3. Scroll down and tap **Add to Home Screen**.
4. Name it "New Doc" (or use a shorter name that fits under the icon).
5. Tap **Add**.

You now have a home screen icon that creates a new Google Doc with a single tap. The icon looks and behaves like an app, but it is a web shortcut that opens Safari and triggers the `.new` redirect.

### Limitation on iPhone

The home screen shortcut opens Safari, which then redirects to the Google Docs app (if installed). This redirect chain adds 3-5 seconds of latency — faster than manual navigation, but not instant.

## Method 5: Apple Shortcuts Automation

The Apple Shortcuts app can automate Google Doc creation:

### Basic Shortcut

1. Open the **Shortcuts** app.
2. Create a new shortcut.
3. Add the **Open URL** action with the URL set to `doc.new`.
4. Name the shortcut "New Doc."
5. Add it to your Home Screen or use it with Siri: "Hey Siri, New Doc."

### Advanced Shortcut with Template

1. Create a Google Doc template with your standard formatting, headers, and placeholder text.
2. In the template, go to File > Make a copy. Copy the URL of the "Make a copy" dialog.
3. In Shortcuts, create an **Open URL** action with this "Make a copy" URL.
4. Each time you run the shortcut, a copy of the template is created and opened for editing.

This approach solves the template limitation of `.new` shortcuts, though it requires maintaining the template document in Google Drive.

## Method 6: The New App for Native Document Creation

[New](/apps/new/) is an iOS app designed to eliminate every friction point in Google document creation.

### What Makes It Different

**Native app speed.** Instead of opening Safari, waiting for a redirect, and being bounced to the Google Docs app, New creates the document through the Google API directly and opens the editing interface in one step. The entire process is noticeably faster than the browser-based approach.

**Account selection.** If you have multiple Google accounts — personal, work, school — New lets you choose which account creates the document before creation. No more accidentally creating a client proposal in your personal Drive.

**Multiple document types.** Create Google Docs, Sheets, Slides, Forms, and Drawings from a single interface. Instead of remembering different URLs or managing different bookmarks, one app handles all document types.

**Home screen widget.** Add a widget to your iPhone home screen that creates documents with zero taps in the app. Tap "Doc" on the widget, and a new Google Doc opens. Tap "Sheet," and a new Sheet opens. The widget is the fastest path from locked phone to editing cursor.

**Siri integration.** "Hey Siri, create a new Google Doc" works out of the box. Siri invokes the app, creates the document, and opens it for editing — entirely hands-free.

**Spotlight integration.** Type "new doc" in Spotlight search, and the app's action appears as a suggestion. This provides a keyboard-driven path to document creation without opening any app manually.

{% include blog-cta.html app_slug="new" %}

## Workflow Optimization: Beyond Document Creation

Creating the document is the first step. These practices ensure the document remains useful rather than becoming yet another untitled file in Drive.

### Name It Immediately

The moment a blank document opens, type a descriptive title before writing a single line of content. This habit prevents the "Untitled document (47)" problem that plagues most Google Drive accounts.

Good titles are:
- **Searchable:** Include key terms you would use to find the document later. "Q2 Marketing Plan 2026" is findable. "Marketing stuff" is not.
- **Date-stamped when relevant:** "2026-03-15 Team Standup Notes" sorts chronologically and is immediately identifiable.
- **Project-prefixed for team use:** "[Project Alpha] Feature Requirements" groups related documents when sorted alphabetically.

### Use Templates for Repetitive Documents

If you create the same type of document more than three times, build a template:

1. Create a document with your standard structure — headers, formatting, placeholder text, boilerplate sections.
2. In Google Docs, go to **docs.google.com/templates** and submit your document as a template (available in Google Workspace accounts).
3. For personal Google accounts, store the template in a "Templates" folder and use "Make a copy" each time.

Common templates worth creating:
- Meeting notes (date, attendees, agenda, action items, decisions)
- Weekly status report (accomplishments, blockers, next week's priorities)
- Project brief (objective, scope, timeline, stakeholders, success criteria)
- Interview debrief (candidate, role, strengths, concerns, recommendation)

### Organize with Starred Folders

Star your 3-5 most-used Google Drive folders. After creating a new document, immediately move it to the correct starred folder using the "Move" function (File > Move, or the folder icon in the toolbar). This prevents the accumulation of orphan documents in the Drive root.

### Enable Offline Access

Google Docs' offline mode lets you create and edit documents without an internet connection. Changes sync automatically when connectivity returns.

To enable: Open Google Docs in Chrome, go to Settings (gear icon), and check "Make recent documents available offline." Install the Google Docs Offline Chrome extension if prompted.

This is particularly important for users who work on commutes, flights, or in locations with unreliable connectivity.

### Use Version History Proactively

Google Docs automatically saves every edit, but version history is more useful when you name versions deliberately. After completing a major section or reaching a milestone, go to File > Version history > Name current version and add a descriptive label: "First draft complete," "Post-review revisions," "Final for client."

Named versions make it trivial to revert to a known-good state if subsequent edits go sideways.

## Integrating Quick Document Creation Into Broader Workflows

Fast document creation becomes a productivity multiplier when connected to other tools and habits:

- **Meeting preparation.** Create a new doc for meeting notes before the meeting starts. Add the agenda, attendee list, and key questions. During the meeting, take notes in the doc. After the meeting, supplement your notes with an [AI transcription](/blog/productivity/how-to-use-ai-to-transcribe-audio-and-voice-notes-on-iphone/) of the recording.
- **Content creation.** Write video scripts in Google Docs, then deliver them using a [teleprompter app](/blog/productivity/best-teleprompter-apps-for-content-creators-and-public-speakers/). After recording, transcribe the delivered version back into a doc for repurposing as blog content.
- **Daily accomplishment tracking.** Some people maintain a running Google Doc as their daily [accomplishment log](/blog/productivity/the-done-list-method-why-tracking-accomplishments-beats-to-do-lists/), creating a new doc each week.
- **Document review.** When you receive a revised PDF, create a Google Doc for your review notes and reference specific comparison findings from your [PDF comparison](/blog/productivity/how-to-compare-pdf-documents-side-by-side/).
- For more tools that complement your document workflow, see the [best productivity apps for iPhone and Mac in 2026](/blog/productivity/best-productivity-apps-iphone-mac-2026/).

## Things Most Guides Don't Tell You

**The `.new` domains are not Google-exclusive.** Google popularized the `.new` TLD, but other services use it too: `canva.new` creates a Canva design, `repo.new` creates a GitHub repository, `pen.new` creates a CodePen, `story.new` creates a Medium story. The full list includes over 100 services.

**Browser profile matters for account selection.** If you use Chrome profiles (one for work, one for personal), each profile has its own Google account context. Using `doc.new` in your work profile always creates documents in your work account. This is a more reliable account selection method than switching accounts within a single browser profile.

**Google Docs has a built-in dictation mode.** Go to Tools > Voice typing and dictate directly into the document using your microphone. Combined with instant document creation, this provides a rapid voice-to-text capture workflow without a separate transcription step (though accuracy is lower than dedicated [transcription tools](/blog/productivity/how-to-use-ai-to-transcribe-audio-and-voice-notes-on-iphone/)).

**Shared documents inherit folder permissions.** If you create a document inside a shared Google Drive folder, it automatically inherits the sharing permissions of that folder. Creating a document in the Drive root and then moving it to a shared folder has the same effect, but creating it directly in the folder saves a sharing configuration step.

**The Google Docs mobile app has a floating action button.** In the Google Docs app on iPhone, the **+** button in the bottom-right corner creates a new document. But it still requires opening the app, waiting for it to load, and tapping the button — which is slower than a home screen widget that bypasses the app's loading screen entirely.

**Untitled documents are automatically deleted after 30 days of inactivity.** If you create a document, never name it, and never open it again, Google will eventually move it to the Trash. This is another reason to name documents immediately upon creation.

The distance between having an idea and capturing it in a document should be as close to zero as possible. Whether you use browser shortcuts, home screen icons, Siri commands, or a dedicated app like [New](/apps/new/), the investment in setting up a fast document creation workflow pays dividends every time an idea strikes and you are ready to capture it in under three seconds.
