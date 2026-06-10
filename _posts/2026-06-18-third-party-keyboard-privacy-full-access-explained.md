---
layout: post
title: "Third-Party Keyboard Privacy: What 'Allow Full Access' Really Means"
description: "A clear explanation of how iOS sandboxes third-party keyboards, what the 'Allow Full Access' toggle actually grants, the difference between legitimate and concerning uses, real keyboard data-collection incidents, the questions to ask any keyboard vendor, and why a no-network-by-design keyboard is the strongest privacy guarantee."
date: 2026-06-18
categories: [health-wellness]
tags: [biggerkeys, privacy, security, ios-keyboards, full-access, data-protection, accessibility]
silo: health-wellness
pillar: health-wellness
related_apps: [biggerkeys, panicvault, safe, health-export, symptom-log]
---

# Third-Party Keyboard Privacy: What "Allow Full Access" Really Means

You install a new keyboard, you enable it, and at some point iOS shows you a switch labelled "Allow Full Access" alongside a warning that the keyboard "may transmit anything you type." It is one of the more alarming sentences in all of iOS, and people react to it in two opposite and equally understandable ways. Some flip it on without reading, because they want the keyboard to work and the warning is just noise. Others refuse to install any third-party keyboard at all, because that sentence sounds like an invitation to a stranger to read their bank passwords.

Both reactions miss something important, because the truth is more nuanced and, frankly, more reassuring than the scary-sounding toggle implies. A keyboard is one of the most intimate pieces of software on your phone — everything you write passes through it — so its privacy deserves real scrutiny. But "Allow Full Access" does not mean what most people fear it means, the keyboards that *abuse* it have specific tell-tale signs, and a keyboard can be built so that the warning is, in its case, simply not true. This guide explains how iOS protects you, what the toggle actually grants, what to watch for, and why a keyboard like [BiggerKeys](/apps/biggerkeys/) requests Full Access for one narrow reason and works completely without it.

## How iOS Sandboxes a Keyboard in the First Place

Start with the good news, because it is substantial. Apple designed third-party keyboards with privacy as a first-class constraint, and the default state is locked down hard.

When you install a third-party keyboard and *don't* turn on Full Access, the keyboard runs in what Apple calls a sandbox with no network access whatsoever. In this default state, the keyboard extension:

- **Cannot access the network.** It cannot make any connection to the internet — no servers, no analytics endpoints, nothing. Whatever you type physically cannot leave the device, because the code has no route out.
- **Cannot access your contacts, location, photos, or most other system resources.**
- **Cannot share data with its own containing app** in the usual ways — it is walled off even from the rest of its own bundle.

This is the crucial point that the scary warning obscures: *by default, a third-party keyboard cannot transmit anything, full stop.* The "may transmit anything you type" warning describes what becomes *possible* if you grant Full Access — it is not a description of what a keyboard is doing in its default, sandboxed state. Apple's own developer documentation is explicit that keyboards without Full Access have no network access. So the baseline is already quite safe. The question is what changes when you flip the switch.

## What "Allow Full Access" Actually Grants

"Allow Full Access" lifts the sandbox restrictions and gives the keyboard extension the ability to:

- **Access the network** — make connections to the internet.
- **Communicate with its containing app** and shared storage, enabling features that need to coordinate between the keyboard and the main app.
- Use certain system services that the sandbox otherwise blocks.

Notice that Full Access is a *capability* grant, not an *action*. Turning it on does not cause the keyboard to send your keystrokes anywhere. It removes the wall that previously made sending them impossible. Whether the keyboard then does anything questionable depends entirely on what the developer wrote the code to do. Full Access is the difference between "this app physically cannot reach the internet" and "this app *could* reach the internet — trust now matters."

That is precisely why the warning exists and why it should be taken seriously: once you grant Full Access, Apple's technical guarantee steps back and your trust in the developer steps forward. The OS can no longer promise that nothing leaves; only the developer's design and integrity can. So the right question is never "is Full Access bad?" — it's "*why* does this particular keyboard want it, and what does the developer do with it?"

## Legitimate Reasons vs. Concerning Reasons

Plenty of keyboards request Full Access for entirely legitimate, benign reasons. Some legitimate uses:

- **Haptic feedback.** This is a common and slightly counter-intuitive one. The system API a keyboard extension uses to produce custom haptic taps requires Full Access. A keyboard that wants to give you a gentle vibration on each keypress needs the toggle on *purely for that*, with no data implication whatsoever.
- **Sync of personal dictionaries or settings** across your devices via the developer's cloud (which does involve sending some data, and so should be clearly disclosed and ideally optional).
- **Themes, integrations, or features** that legitimately need to talk between the keyboard and its containing app.

And then there are the concerning uses, the ones the warning is really about:

- **Sending your keystrokes to a server** for "improvement," "personalisation," analytics, or advertising profiling.
- **Building a profile** of what you type, where, and to whom.
- **Selling or sharing** typing data with third parties.

The problem is that *from the toggle alone, you cannot tell which kind you're dealing with.* Both the haptics keyboard and the data-harvesting keyboard ask for the same switch. This is why the surrounding signals — the developer's privacy policy, the App Store privacy label, the app's reputation, and crucially whether the keyboard *needs* network access at all to do its core job — matter so much. The toggle is binary; the trustworthiness behind it is not.

## This Is Not Paranoia: Documented Incidents

It would be easy to dismiss keyboard-privacy concern as overblown, except that there is a real history of keyboards mishandling exactly the data people worry about. The concern is grounded, not theoretical.

The most cited case is **ai.type**, a popular third-party keyboard. In December 2017, security researchers at the Kromtech Security Center discovered that ai.type had left a database exposed online with no password protection. The breach reportedly exposed the personal data of more than **31 million** users — and the trove included not just names, email addresses, and device details, but in many cases contact lists and other sensitive information harvested from users' phones. It was widely covered at the time (the BBC, ZDNet, and others reported on it) as a stark illustration of what a keyboard with broad access and a cloud back-end can accumulate, and how badly it can go wrong when that data is poorly secured.

The ai.type incident is the headline example, but the broader pattern recurs: keyboards (and other "free" utilities) whose real business model is data collection, monetised through advertising or sale, where the keystroke stream is the product. The lesson is not "all third-party keyboards are dangerous" — that's clearly false, given how many are perfectly trustworthy — but rather "a keyboard that collects and transmits your typing creates a serious liability, both from deliberate misuse and from accidental exposure, and you should know which kind you're installing."

This is the same instinct that drives careful people toward genuinely private tools elsewhere on their phone. If you keep passwords in an offline-first manager like [PanicVault](/apps/panicvault/) rather than a cloud service whose breach would expose every credential you own, or you store sensitive documents in a private app like [Safe](/apps/safe/) rather than scattering them across cloud accounts, you already understand the principle: the data that never leaves your device cannot be leaked from a server you don't control. The same logic applies, perhaps even more forcefully, to the keyboard that sees *everything* you type.

## The Questions to Ask Any Keyboard Vendor

Before you grant Full Access to any keyboard — or really, before you install one at all — a short checklist separates the trustworthy from the dubious:

1. **Does the keyboard need network access to do its core job?** A keyboard whose job is *typing* — entering letters — has no inherent need to touch the internet. If a keyboard's basic typing function requires Full Access and a network connection, ask why. Predictive text and most features can be done entirely on-device.
2. **What, specifically, does it use Full Access for?** A trustworthy developer will tell you plainly — "for haptic feedback only," or "for optional cloud sync, which you control." A vague or absent answer is a red flag.
3. **What does the privacy policy say about keystrokes?** Look for explicit statements: does it collect what you type? Does it transmit it? To whom? For what? "We may use your data to improve our services" is the kind of phrase that should make you pause.
4. **What does the App Store privacy label show?** Apple requires apps to declare the data they collect. A keyboard whose label lists little or nothing collected is a better sign than one declaring usage data, identifiers, and contact info.
5. **Does the core function still work *without* Full Access?** This is the single most reassuring test. If you can decline Full Access and the keyboard still types perfectly — losing only an optional extra like haptics — then you can run it in the fully sandboxed state where it physically cannot transmit anything. That is the strongest position you can be in.
6. **What's the business model?** If a keyboard is free and shows no obvious revenue source, ask how the developer is paid. Sometimes the answer is "it's a labour of love" or "there's a paid upgrade." Sometimes the answer, unstated, is "your data."

If you want a broader framework for thinking about this kind of question across all your apps, our guides on [auditing your digital privacy in 30 minutes](/blog/digital-privacy-security/how-to-audit-digital-privacy-30-minutes/) and [the best apps for protecting your privacy on iPhone in 2026](/blog/digital-privacy-security/best-apps-protecting-privacy-iphone/) apply the same reasoning to your whole device.

## Why BiggerKeys Asks for Full Access Only for Haptics

Here is how BiggerKeys answers each of those questions, because it was built to pass the checklist by design rather than by promise.

BiggerKeys requests "Allow Full Access" for **one reason and one reason only: optional haptic feedback.** As covered above, the iOS API for producing custom haptic taps on keypress requires Full Access — there is no way around that platform requirement. If you want a gentle physical tap to confirm each key, the toggle has to be on. That is the *entire* reason it is ever requested.

And critically, **the haptics — and therefore Full Access — are completely optional.** Core typing works fully without it. Every essential feature operates in the fully sandboxed, no-network state:

- Adjustable key size and spacing.
- Lift-off actuation, so keys type on release rather than touch-down.
- Adjustable debounce.
- Dwell-to-confirm mode.
- The high-contrast theme and larger fonts.
- The press-preview magnifier.
- The key-press *sound* (which, unlike haptics, needs no permission at all).

You can decline Full Access entirely and lose nothing but the optional vibration. In that state, BiggerKeys runs inside Apple's strictest sandbox, with no route to the network — which means there is no technical possibility of your keystrokes going anywhere, because the code cannot reach out even if it wanted to.

But here is the part that matters most, and it is a design choice rather than a setting: **BiggerKeys has no network code at all.** It does not collect data. It does not log or store what you type. It has no analytics, no accounts, no tracking, no servers to send anything to. This means that *even if you turn Full Access on for the haptics, nothing leaves your phone* — there is simply no code that sends anything anywhere. The "may transmit anything you type" warning is, in the specific case of BiggerKeys, describing a capability the app never exercises and never even contains.

This is the strongest privacy guarantee a keyboard can offer, and it is worth understanding *why* it is stronger than a privacy policy. A policy is a promise — "we won't send your data." A no-network-by-design app is a structural fact — "we *can't* send your data, because there is no code that does." Promises depend on the integrity of the developer today and every day in the future. A structural absence of data-collection code depends on nothing but the design of the software. When your keyboard sees every password, every private message, every search you type, "can't" is a far better word than "won't."

{% include blog-cta.html app_slug="biggerkeys" %}

## No-Network-by-Design: The Strongest Guarantee

It is worth lingering on this principle because it generalises well beyond keyboards. The most robust form of privacy is not strong encryption of transmitted data, nor a strict privacy policy, nor a promise to delete data after thirty days — useful as all of those are. The most robust form of privacy is **data that never leaves your device in the first place.** What is never transmitted cannot be intercepted in transit, cannot be breached from a server, cannot be subpoenaed from a company, cannot be sold in an acquisition, and cannot leak through a misconfigured database the way ai.type's did.

This is why so many of the most genuinely private apps share a family resemblance: they do their work locally and keep your data on your hardware. Offline-first password managers like [PanicVault](/apps/panicvault/) keep your credentials in a file you control rather than a vendor's cloud. Tools like [Health Export](/apps/health-export/) let you format your Apple Health data for your own use without that data ever flowing to a third party's analytics. A symptom journal such as [SymptomLog](/apps/symptom-log/) keeps deeply personal health information on the device rather than uploading it. The thread connecting all of them is the same one running through BiggerKeys: *the safest data is the data that stays put.*

When evaluating any app that touches sensitive information — and a keyboard touches the *most* sensitive information of all — "where does my data go?" is the question that matters, and the best possible answer is "nowhere." For more on this way of thinking, see our guide on [on-device versus cloud processing and what it means for your privacy](/blog/productivity/on-device-ai-vs-cloud-ai-privacy-performance/) and our roundup of [the best Safari extensions for privacy-conscious users](/blog/safari-extensions/best-safari-extensions-for-privacy-conscious-users/), both of which apply the same lens to other corners of your digital life.

## A Practical Decision Framework

To bring it together, here's how to decide about Full Access for any keyboard you're considering:

- **If the keyboard needs the network for its basic typing function** — be cautious. Typing doesn't require the internet. Find out why it does, and what it sends.
- **If the keyboard requests Full Access for a clearly-stated, narrow, optional feature** (like haptics) and *works fully without it* — that's a good sign. You can grant it for the feature, or decline it and keep the core keyboard.
- **If the keyboard collects no data and has no network code at all** — then Full Access, even when granted, carries no transmission risk, because there's nothing to transmit and nowhere to send it. This is the BiggerKeys case.
- **When in doubt, leave Full Access off.** Most keyboards' core typing works without it, and in the off state iOS guarantees the keyboard cannot reach the network. You lose at most an optional extra, and you gain Apple's strongest technical protection.

The reassuring takeaway is that you do not have to choose between "an accessible keyboard that actually helps my hands" and "a private phone." With a keyboard that collects nothing and sends nothing, you get both. The scary toggle turns out to be, in the right hands, nothing to be scared of at all.

One closing note in the spirit of the rest of this content cluster: BiggerKeys is a typing aid and a privacy-respecting one, but it is not a medical device and makes no medical claims. Its job is to make typing easier and to keep what you type entirely your own business. For the wider set of iPhone tools that support accessible typing — and how privacy fits into choosing them — see our hub guide on [the best iPhone apps for hand tremors and accessible typing in 2026](/blog/health-wellness/best-apps-hand-tremors-iphone/), our [caregiver's guide to setting up an iPhone for accessible typing](/blog/health-wellness/caregiver-guide-setting-up-iphone-accessibility-seniors/), and our explainer on [dwell typing, debounce, and lift-off actuation](/blog/health-wellness/dwell-typing-key-debounce-accessibility-explained/).

## Frequently Asked Questions

**Does "Allow Full Access" mean the keyboard is reading everything I type?**
Not by itself. Full Access is a capability, not an action — it removes the sandbox wall that otherwise prevents the keyboard from reaching the network. Whether the keyboard then sends anything depends entirely on what the developer's code does. A keyboard with no data-collection code, like BiggerKeys, sends nothing even with Full Access on, because there's no code that transmits anything.

**What does a third-party keyboard do when Full Access is OFF?**
It runs in Apple's strict sandbox with no network access at all. In that state, whatever you type physically cannot leave the device, because the keyboard has no route to the internet. Apple's developer documentation confirms keyboards without Full Access have no network access. This is the safest state, and most keyboards' core typing works perfectly in it.

**Why does BiggerKeys ask for Full Access if it's so private?**
For one reason only: optional haptic feedback. The iOS API for custom haptic taps on keypress requires Full Access — that's a platform rule, not a choice. The haptics are completely optional, and every other feature (key size, spacing, lift-off, debounce, dwell, high-contrast theme, magnifier, key-press sound) works fully without Full Access. And because BiggerKeys has no network code and collects no data, nothing leaves your phone even if you turn it on.

**Was there really a keyboard data breach?**
Yes. In December 2017, researchers found that the ai.type keyboard had left a database exposed online without password protection, reportedly exposing personal data of more than 31 million users — including, in many cases, contacts and other sensitive information. It was widely reported and remains the standard cautionary example of what can go wrong when a keyboard collects data and stores it on a server.

**How can I tell if a keyboard is safe before installing it?**
Ask whether its core typing needs the network (it shouldn't), what it specifically uses Full Access for, what its privacy policy says about keystrokes, what its App Store privacy label declares, and whether it works fully without Full Access. The strongest sign is a keyboard that collects no data and has no network code at all — then there's nothing to transmit regardless of the toggle.

**Why is "no network code" better than a strong privacy policy?**
A privacy policy is a promise that depends on the developer's integrity today and in the future; it can change, be ignored, or be undermined by a breach. A keyboard with no network code is a structural fact — it *can't* send your data because the capability doesn't exist in the software. For something that sees every password and private message you type, "can't" is a far stronger guarantee than "won't."

**Is it safe to use a third-party keyboard for passwords and banking?**
With a keyboard that collects nothing and has no network access, yes — and you can be extra cautious by leaving Full Access off, which guarantees no network capability at all. The risk with passwords and banking comes specifically from keyboards that transmit what you type, so the safe approach is to choose a no-data-collection keyboard like BiggerKeys, and to keep credentials themselves in an offline-first manager rather than anywhere they could be exposed online.
