---
layout: post
title: "Apple Maps vs Google Maps: What Each One Knows About You"
description: "A fair comparison of what Apple Maps and Google Maps collect, what the App Store privacy labels declare, and how to check your own location exposure today."
date: 2026-07-26
categories: [safari-extensions]
tags: [apple-maps, google-maps, location-privacy, data-collection, maps, privacy, app-privacy-labels]
silo: maps-navigation
pillar: maps-navigation
related_apps: [redirect-map-for-safari, health-export, panicvault, local-weather-yawa, safe]
---

## The Timeline That Remembers Better Than You Do

Open Google Maps, tap your profile picture, and choose Timeline. If you have ever had Location History switched on, scroll back to a month you barely remember. Not last week, which you can reconstruct from memory. Pick March of a year ago.

The screen will show you something you had genuinely forgotten. A restaurant you went to once and never returned to. A twenty-minute stop at an address you cannot place. There is a specific, slightly cold feeling in reading a record of your own movements that is more accurate than your recollection of them.

That feeling is the subject of this article. Not whether Google is villainous, because it is not, and not whether Apple Maps is a sanctuary, because it is not. The question is narrower: what does each service collect, what can be inferred from it, and how do you choose deliberately instead of by default?

## Why Location Is the Most Revealing Category of App Data

A single coordinate is close to meaningless. A sequence of coordinates over time is one of the most identifying datasets a person can produce.

Consider what a few weeks of movement discloses without anyone needing to label it. Where you spend most nights is home. Where you spend weekday daytime hours is work. A stop at the same building every weekday at 08:20 and 16:10 is a school. A weekly visit at a fixed hour to a building that is neither shop nor office is often a place of worship or a therapist. A ninety-minute hospital stop followed by three shorter ones over six weeks is a course of treatment.

None of that needs a name attached to the trail, which is why location is treated as sensitive rather than ordinary in privacy law. European data protection law treats it as personal data outright, and what you can infer from it, including health and religious belief, as needing stronger protection still. California's statute names precise geolocation specifically as sensitive personal information. Regulators arrived there because researchers working with mobility datasets kept showing that trails stripped of names are easier to re-attach to individuals than intuition suggests: home plus work plus routine is close to a fingerprint.

So comparing two map apps is not about which asks for fewer permissions. Both need your location to work; that is the product. It is about what happens to the trail afterwards, who it is joined to, and how long it persists.

## Two Business Models, Two Sets of Defaults

Apple's revenue is overwhelmingly hardware and services attached to hardware. Maps is a reason to keep buying iPhones, and it does not need to know who you are to serve that purpose, so Apple has room to build it without an identity layer.

Google's revenue is overwhelmingly advertising. That does not mean Google Maps hands your route to advertisers, and precision matters, because the sloppy version of this argument gets repeated constantly. It means Google's commercial instincts are built around understanding users well, and a product built inside that culture tends to default towards signed-in, personalised, retained.

Two qualifications. Apple runs an ads business of its own, so "Apple does not sell ads" is wrong. And Google's privacy controls are real, better than most of the industry's. Business models predict defaults; they do not replace reading what each company publishes.

## What Each Company Publishes About Itself

### How to read an App Store privacy label yourself

You can read Google Maps' label in thirty seconds. Open the App Store listing, scroll to App Privacy, and tap "See Details". Three headings matter:

- **Data Used to Track You** — linked to your identity across other companies' apps and websites, the advertising sense of tracking.
- **Data Linked to You** — collected and associated with your identity.
- **Data Not Linked to You** — collected but not tied to you.

At the time of writing, the listing declares a wide set of categories across those headings, including location, contact information, search and browsing history, identifiers, usage data, diagnostics and user content, and it does declare data used to track you. Labels change with releases, so read the current one.

Two caveats. Labels are developer declarations, not audits: Apple reviews and can challenge them, but the disclosure originates with the developer. And the categories are coarse, since "location" covers a one-off city lookup and a continuous trail alike.

Apple Maps has no App Store listing, because it ships with the operating system, so there is no label to compare. The equivalent disclosure lives where almost nobody looks: Settings, then Maps, then **About Apple Maps & Privacy**.

### What Apple states about Maps

Apple's position rests on structural choices. You are not required to sign in, which matters more than it sounds: with no account attached, there is no natural key to hang a history on. Apple states it does not associate Maps activity with your Apple Account and keeps no history of where you have been. Requests use random identifiers that rotate rather than a stable per-user ID, so a run of searches is harder to stitch into one profile. Apple also describes fuzzing the origin of a request, converting the precise location a search started from into a less exact one.

One separate on-device feature causes regular panic when people find it: **Significant Locations**. iOS learns places you visit often to power predicted routes and Photos memories. Apple describes it as encrypted and on-device, not shared without consent. It is still a list of where you have been, and you can inspect and clear it.

Fairness in the other direction: search, routing and traffic all need a round trip, so queries do go to Apple servers. What leaves is designed not to accumulate under your name, which is not the same as nothing leaving.

### What Google gives you control over

Google's controls are substantial, and anyone who dismisses them has not used them.

**Location History, surfaced as Timeline**, builds the record described above. It is not silently on: Google prompts you to enable it, and if it is off, no timeline is built. If it is on, you can view it, delete individual stops or whole days, delete everything, or set an auto-delete window so entries age out. Choosing the shortest window offered is the highest-value minute most Google Maps users can spend.

**Web & App Activity** is the broader setting covering searches across Google services, map searches included, with its own auto-delete. Switching off Location History and leaving this untouched is a common half-measure.

**Incognito mode in Maps** stops a session being written to your account: searches and directions are not saved, Timeline is not updated, personalisation switches off. It is real, and narrower than the name implies.

**Takeout** is Google's export tool, and it deserves credit: you can download your Maps data, including Timeline, in machine-readable form. Few companies make it this easy.

Google has also moved Timeline storage onto the device for many users, with cloud backup as an option rather than the mechanism. That is a real architectural improvement: data on your phone under your control is categorically different from data on a server keyed to your account.

I will not state retention periods or internal practices I cannot verify. The controls are the checkable part, so open them and read the current settings in your own account.

## The Web Is a Different Exposure From the App

Using the Google Maps app and loading a Google Maps page in Safari are not the same transaction. The app runs inside iOS sandboxing, with a per-app location permission you granted explicitly and can revoke in one screen. A browser page is a web session: cookies, your signed-in Google account if you have one in Safari, referrer information about where the tap came from, and the third-party context of the open web.

This matters because of how often it happens by accident. You search for a restaurant, the results show a map card, you tap it, and you are on a Google Maps web page. You did not decide to use Google Maps; you tapped a result. Repeat that a dozen times a week and a real share of your navigation runs through a browser rather than an app you chose. That mechanism is explained in [why Google Maps links open in the browser instead of the app](/blog/safari-extensions/why-google-maps-links-open-in-browser-instead-of-app/).

The same logic runs beyond maps. A [comparison of free weather apps and what they do with location](/blog/digital-privacy-security/free-weather-apps-comparison-privacy-accuracy/) found the same pattern: the question is rarely the headline feature, it is what a free surface does with the coordinates it needs. It is why a paid app like [Yawa](/apps/local-weather-yawa/) is a different proposition from a free service funded by data.

## Where Redirect Map for Safari Fits, Precisely

[Redirect Map for Safari](/apps/redirect-map-for-safari/) addresses exactly one link in that chain. When you tap a Google Maps link, map thumbnail, address card or directions button in Safari, the extension resolves the destination and hands it to Apple Maps instead, carrying the place, query or route across. It parses addresses, place names, lat/lng pairs, `q=` parameters, `place` path segments, short URLs and `@lat,long,z` strings, across Google's regional domains and subdomains rather than only `google.com`. When it cannot confidently resolve a destination from the tapped element, it opens the original Google link first to extract a clearer address, then hands off.

What changes is which surface a tap lands on: an Apple Maps handoff rather than a Google Maps web page with a browser session attached. That is a small, concrete reduction in exposure for a common action, not a privacy solution.

The honest boundaries:

- It redirects **links you tap in Safari**. It does not change any system default, does not intercept links from other apps, and does nothing outside Safari. The settings side of that story is [how to change the default maps app on iPhone and iPad](/blog/safari-extensions/how-to-change-default-maps-app-iphone-ipad/).
- It needs broad host access. The extension declares a match pattern covering all sites, and setup asks you to allow it on all websites once. Google serves map content across many domains and regional top-level domains, so a google.com-only scope would miss most of what it is for. The mitigating facts: it reads the current page locally to find map links, stores nothing, and sends no location or personal data off the device; the listing states no data collection. If broad page access is a line you do not cross, that is a legitimate position, and the [guide to Safari extension permissions and security](/blog/safari-extensions/complete-guide-safari-extension-security-permissions/) explains how to weigh it.
- It does not make Google Maps collect less. It reduces how often you land there unintentionally.

The full walkthrough is in [how to open Google Maps links in Apple Maps](/blog/safari-extensions/how-to-open-google-maps-links-in-apple-maps/).

{% include blog-cta.html app_slug="redirect-map-for-safari" %}

## Side by Side

| Dimension | Apple Maps | Google Maps |
|---|---|---|
| Account required | No sign-in needed to search or navigate | Works signed out, but saved places, Timeline and personalisation assume an account |
| Location history by default | No account-linked history, per Apple; iOS separately learns Significant Locations on-device, viewable and clearable | Timeline is a setting you enable; once on, it builds a viewable record |
| Processing model | Rotating random identifiers, request origin fuzzed | Tied to your account when signed in; Timeline storage moved on-device for many users |
| Ad-funded | Primarily hardware and services, though Apple does run an ads business | Advertising is the large majority of Alphabet's revenue |
| Published documentation | No App Store label; Settings → Maps → About Apple Maps & Privacy | App Store privacy label, Google's privacy policy, Maps help pages |
| Data export | Apple's Data and Privacy portal, on request | Takeout, including Timeline, in machine-readable formats |
| Controls to disable history | Turn off Location Services for Maps; clear Significant Locations | Pause Location History and Web & App Activity, set auto-delete, use Incognito |

## Check Your Own Exposure in Fifteen Minutes

Looking beats reading.

### On your iPhone or iPad

1. **Settings → Privacy & Security → Location Services.** Go app by app. Anything set to Always that has no business needing background location should be While Using or Never.
2. **Check Precise Location per app.** Precise gives exact coordinates, off gives an approximate area. Navigation needs precise; a shop finder usually does not.
3. **Location Services → System Services → Significant Locations.** Authenticate and read the list of places and visit counts. It is on-device, encrypted, and the most surprising screen on the phone for most people. There is a Clear History button.
4. **Settings → Privacy & Security → App Privacy Report.** Turn it on and leave it a few days. It logs which apps touched location, camera and microphone, and which domains they contacted.

### In your Google account

1. Go to **myactivity.google.com** and look at the volume of what is there.
2. Open the **Location History / Timeline** controls and decide whether you want it on. If yes, set the shortest auto-delete window offered.
3. Check **Web & App Activity** separately and set its auto-delete too. This is the setting people miss.
4. Request a **Takeout** export of Maps data and open the file. Nothing lands as hard as your own timeline in a spreadsheet.

### In Safari

Ask whether you are signed into Google in Safari. If you are, every map page you open there is a signed-in browser session, which is a different thing from an app you granted location to once.

For the wider sweep across accounts, backups and permissions, work through [how to audit your digital privacy in 30 minutes](/blog/digital-privacy-security/how-to-audit-digital-privacy-30-minutes/). The on-device-versus-server distinction that makes Significant Locations tolerable is the one explored in [on-device AI versus cloud AI](/blog/productivity/on-device-ai-vs-cloud-ai-privacy-performance/), and it is the principle behind [Health Export](/apps/health-export/), which formats Apple Health data on your device rather than uploading it, and [PanicVault](/apps/panicvault/), which keeps passwords in a local file you own. [Safe](/apps/safe/) follows the same shape for travel paperwork.

## Where Google Maps Is Still the Right Choice

A comparison that concludes "use the privacy option for everything" is an advertisement. Google Maps is better at several jobs.

**Point-of-interest density and freshness.** In many regions Google knows about more small businesses, and knows sooner when they close, move or change hours. That gap has narrowed but not closed.

**Reviews and photos.** The volume of user reviews and photography is not something a competitor replicates quickly. When you want to know whether a place is any good, Google is the answer.

**Transit in some cities.** Coverage and live update quality vary by city and agency. In some places Apple Maps is excellent; in others Google's data is better. Test it on your commute.

**Street View.** There is no equivalent, and for checking a doorway before a first visit it is genuinely useful.

The coherent position: use Google Maps deliberately, when it is the better tool, and do not have every casual tap land there by default. Choosing a service for a job is different from being routed to it by accident. For the feature-by-feature view of daily life on Apple Maps, including what you give up and how to move saved places across, see [switching from Google Maps to Apple Maps](/blog/safari-extensions/switch-from-google-maps-to-apple-maps/). [Redirect Map for Safari](/apps/redirect-map-for-safari/) is the shortest intervention: it changes where taps land and leaves the choice to you. The roundup of [Safari extensions for privacy-conscious users](/blog/safari-extensions/best-safari-extensions-for-privacy-conscious-users/) is a good next stop, and [Translator Safari Extension](/apps/translator-safari-extension/) handles foreign address cards.

## Frequently asked questions

### Is Apple Maps more private than Google Maps?

In its default state, yes: no account is required, Apple states it keeps no account-linked history of where you have been, and requests use rotating identifiers with a fuzzed origin. Google Maps can be configured to be far more private than its defaults, and with Location History off and auto-delete on Web & App Activity the gap narrows. The difference is what happens if you change nothing.

### Does Apple Maps track my location?

Apple Maps uses your location to search and navigate, so coordinates go to Apple servers. What Apple states it does not do is tie that activity to your Apple Account or build a history of your movements. Separately, iOS keeps a Significant Locations list on the device, described as encrypted and on-device, which you can inspect and clear under Location Services → System Services.

### How do I stop Google saving my location history?

Open the Location History or Timeline controls in your Google account and turn it off. Delete what is stored, entirely or day by day, and set an auto-delete window in case you switch it back on later. Check Web & App Activity separately, because turning off Location History alone does not stop map searches being recorded there.

### Does Incognito mode in Google Maps actually help?

Yes, for what it covers: the session is not written to your account history, Timeline is not updated, and personalisation is disabled. It does not hide you from your network or carrier, does not apply to other Google apps, and stops when you turn it off.

### Is using Google Maps in a browser worse than using the app?

They are different exposures rather than strictly worse. The app has a per-app location permission you can revoke in one screen and runs in iOS sandboxing. A browser page brings cookies, your signed-in Google session if you have one, and referrer context from wherever you tapped. If you are signed into Google in Safari, the browser route is the one worth attending to.

### Can I use both Apple Maps and Google Maps?

That is the sensible setup for most people. Use Apple Maps for routine navigation and Google Maps deliberately for reviews, Street View, and places where its point-of-interest data is better. The only thing worth fixing is the accidental default.
