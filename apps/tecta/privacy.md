---
layout: default
title: "Tecta Privacy Policy"
description: "What Tecta, the menu bar companion for Claude Code on Mac, reads, stores and sends."
permalink: /apps/tecta/privacy/
---

<div class="app-detail" style="padding-bottom: var(--space-xl);">
  <div class="app-detail-header">
    <img src="/img/apps/tecta.webp" alt="Tecta" class="app-detail-icon" width="120" height="120" style="border: 0; box-shadow: none; border-radius: 0;">
    <div class="app-detail-info">
      <h1>Tecta Privacy Policy</h1>
      <p class="app-detail-tagline">Effective date: September 28, 2026</p>
    </div>
  </div>
</div>

<div class="app-detail-seo-content" markdown="1">

Tecta is a Mac app made by an independent developer ("we"). This policy explains what Tecta does with your data. In short: Tecta works on your Mac, and we don't receive your data.

## What Tecta reads

Tecta reads information that Claude Code keeps on your Mac:

- Claude Code session transcripts in `~/.claude/projects`, to show what each session is doing and to count activity and token use.
- Claude Code's settings file, `~/.claude/settings.json`, to check whether Tecta's hooks are installed.
- The list of running Claude Code sessions, and whether Claude Code is signed in. Tecta gets both by running your claude command. It never reads Claude Code's login tokens.
- The list of running processes, to find which terminal app a session runs in when you use Jump to tab.

## What Tecta stores

Tecta keeps its data on your Mac, in `~/Library/Application Support/com.tenpercent.tecta`:

- a database of sessions, summaries, hook events, daily activity and token totals, and your settings;
- copies of `~/.claude/settings.json` saved before Tecta changes that file (the 10 most recent are kept);
- a working folder used while writing summaries.

It also keeps a few preferences in the standard macOS preferences store. If you enter an Anthropic API key in Settings, it is stored in your login Keychain. Tecta passes it only to the claude command it runs for summaries, and only while API-key mode is on.

Ended sessions and their summaries are deleted 14 days after Tecta last saw them, and hook events after 7 days. Daily activity and token totals are kept so Tecta can show your history.

## What Tecta changes

With your permission, Tecta adds five hook entries to `~/.claude/settings.json`. Each one sends a Claude Code event, such as a session starting, finishing or asking for permission, to Tecta at 127.0.0.1, which is your own Mac. Tecta shows you the exact change before making it, and you can remove the hooks from Tecta at any time.

## Summaries and Anthropic

To write a summary, Tecta runs your installed claude command and gives it an excerpt of a session's transcript. Claude Code sends that excerpt to Anthropic under your Claude account, the same way it sends your own sessions, or with your own API key if you turn on API-key mode. Anthropic's terms and privacy policy cover that processing. We don't receive the excerpt or the summary.

## Network

Tecta itself does not connect to any server. It listens for hook events on 127.0.0.1:48632, which accepts connections only from your own Mac. Tecta has no user accounts and does not collect analytics.

## Setapp

The Setapp version of Tecta includes the Setapp Framework from MacPaw. It checks your Setapp purchase or subscription and sends Setapp usage and diagnostic information. Setapp's privacy notice covers that processing: [https://setapp.com/privacy-notice](https://setapp.com/privacy-notice)

## Notifications

Tecta shows notifications through macOS, after macOS asks for your permission. A notification can include a session's name and the command it wants to run. Notifications are not sent anywhere else.

## Deleting your data

Remove Tecta's hooks from Tecta (Remove hooks, in Settings), quit Tecta, then delete the folder `~/Library/Application Support/com.tenpercent.tecta`. To delete a stored API key, use Remove key in Settings, or delete it in Keychain Access.

## Children

Tecta is a developer tool and is not directed at children.

## Changes

If this policy changes, we'll update this page and its effective date.

## Contact

To reach us, use the [Contact](mailto:{{ site.email }}) link.

</div>
