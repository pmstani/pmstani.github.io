---
layout: default
title: "Tecta - Menu Bar Companion for Claude Code on Mac"
description: "Tecta — Menu bar companion for Claude Code. See what every session is doing and which one needs you. Jump to its terminal tab in one click."
image: /img/apps/tecta.png
twitter:
  card: summary
permalink: /apps/tecta/
---

<div class="app-detail" style="padding-bottom: var(--space-xl);">
  <div class="app-detail-header">
    <img src="/img/apps/tecta.webp" alt="Tecta" class="app-detail-icon" width="120" height="120" style="border: 0; box-shadow: none; border-radius: 0;">
    <div class="app-detail-info">
      <h1>Tecta</h1>
      <p class="app-detail-tagline">Claude Code tabs at a glance</p>
      <div class="app-detail-platforms">
        <span class="platform-badge">macOS</span>
      </div>
    </div>
  </div>

  <div class="app-detail-description">
    <p style="margin-bottom: var(--space-md);">Tecta is a menu bar companion for Claude Code on Mac. It watches every Claude Code session you have open and tells you, at a glance, what each one is working on, what it needs from you, and what comes next.</p>
    <p>Running ten agents at once is great until you lose track of which one is waiting on you. Tecta keeps a card for each tab in your menu bar, counts the ones that need an answer, and takes you to the right terminal tab in one click. Summaries come from your own claude command on your own Claude account, so there's nothing new to sign up for. Turn on API-key mode and they use your own Anthropic API key instead.</p>
  </div>
</div>

<div class="app-detail-seo-content" markdown="1">

## Know what every tab is doing

Each session gets a card with a short summary of the task, the question it's waiting on, and the next step. A live line shows what the agent is doing right now. A finished tab shows what it got done: files changed, test results, commits.

## See who's waiting on you

The menu bar icon shows an amber count for tabs waiting on your answer and a green count for tabs that just finished. When a tab asks for permission, you get a notification with its name and what it wants to run.

## Jump to the right tab

Click Jump to tab and the terminal tab running that session comes to the front. Works with iTerm2, Terminal, Ghostty and tmux. Other terminals are brought forward with the session name copied to your clipboard.

## Catch up after a break

Cards show what changed since you last opened the menu. Tecta flags risky commands like force pushes, recursive deletes and sudo, and reminds you about a tab that has been waiting a while.

## Watch the whole fleet

Pulse is a live window with one lane per session, marking edits, shell commands and file reads as they happen. Rhythms shows a year of your Claude Code activity, read from the transcripts already on your Mac. Copy standup puts today's work on your clipboard as Markdown.

## No account, no server

Tecta has no account and no server of its own, and it doesn't collect analytics. Its data stays on your Mac. To write a summary, your claude command sends an excerpt of the session to Anthropic, the same way it sends the session itself. Tecta asks before adding its hooks to your Claude Code settings, shows you the exact change first, and can take them out again. A daily token cap limits how much summarizing it does.

## Requirements

Requires Claude Code, installed and signed in, and macOS 14 or later. Tecta is distributed through Setapp.

Tecta is an independent app and isn't affiliated with Anthropic. Claude and Claude Code are trademarks of Anthropic.

## Support

[Tecta Support](/apps/tecta/support/) · [Privacy Policy](/apps/tecta/privacy/) · [Terms of Use](/apps/tecta/terms/)

</div>
