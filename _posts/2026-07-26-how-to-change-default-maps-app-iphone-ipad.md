---
layout: post
title: "How to Change the Default Maps App on iPhone and iPad"
description: "Whether you can set a default maps app on iPhone depends on your region. Here is how to check your Settings, what a default really does, and four workarounds."
date: 2026-07-26
categories: [safari-extensions]
tags: [default-apps, apple-maps, google-maps, iphone-settings, navigation, ios, safari-extension]
silo: maps-navigation
pillar: maps-navigation
related_apps: [redirect-map-for-safari, local-weather-yawa, my-agenda-planning, command-palette]
---

## The tap that goes to the wrong place

You search for a restaurant. The results page gives you the name, the address, a rating and a little map thumbnail. You tap it expecting Apple Maps, because Apple Maps is what your car knows about and what Siri talks to. Instead, Safari loads a Google Maps web page, asks for your location, and offers to install an app you deliberately do not have. So you go looking for the setting, and either find a Default Apps screen with no maps entry, or find one and then discover it only fixes some taps.

Here is the honest version, and it is where most articles go wrong: **whether you can set a default navigation app at all depends on where you are.** The broad Default Apps screen in iOS grew out of European regulatory requirements under the Digital Markets Act, and the categories offered outside the EU are narrower. Browser and mail have been changeable almost everywhere for years; navigation is a different story that moves with iOS releases and regulatory pressure. So this article is built around checking your own device rather than trusting a version number in a blog post.

## What a "default app" actually means on iOS

A default app is a routing rule. When the system has something of a particular type to open, it looks up which installed app you nominated and hands it over. Two consequences follow, and the second is where nearly everyone gets stuck.

### A default only applies when the system does the handing off

If a link opens inside another app's built-in browser, iOS is never asked. Instagram, Slack, Reddit and dozens of others render pages in an embedded web view inside their own process, so your default browser choice is irrelevant there. Some of those apps have a setting to open links externally; many do not.

### A default does not rewrite URLs

This is the spine of the problem. A Google Maps web address is a Google web page, a string pointing at Google's servers, and nothing in iOS turns it into an Apple Maps address. A default can only decide *which installed app is offered a link that the app has claimed*. Google Maps claims Google's map URLs through the mechanism Apple calls Universal Links, so with the Google Maps app installed, tapping one can open it. Without it, that URL is just a web page, and a browser is the only thing that can render it.

No setting anywhere says "when a link points at a Google map, take me to Apple Maps instead", because that is not routing. It is translation: something has to read the Google URL, work out which place, search or route it describes, and build the equivalent Apple Maps request. That is what a browser extension or a Shortcuts automation does, and no version of iOS has offered it as a setting.

Which saves you the most common frustration: setting a maps default, feeling pleased, then watching a Google Maps page open in Safari anyway. Both are working as designed. For why a specific link failed to open an app, see [why Google Maps links open in the browser instead of the app](/blog/safari-extensions/why-google-maps-links-open-in-browser-instead-of-app/), which covers Universal Links, broken associations and tracking redirects.

## How to check what your device actually offers

Do this before anything else.

1. Open **Settings**.
2. Tap **Apps**.
3. Tap **Default Apps**.

If there is no **Apps** entry at the top level of Settings, pull down to reveal the search field and type "default". On older iOS versions these defaults lived on each app's own settings screen, for example Settings → Safari → Default Browser App. The search field finds whichever arrangement your device uses, which beats a hard-coded path.

### Reading the list you get

The screen lists categories, and the important thing is that **the list is not the same for everyone.** Browser and mail are the two you can expect. Depending on region and iOS version it may also include messaging, calling, call filtering, keyboards, password managers, translation, and navigation. Look for a category named Navigation or Maps. Whether it is there is the fork in the road.

### If a Navigation category is listed

Tap it and choose your preferred app. Only apps that registered themselves as navigation providers appear, so a recent install may need an update first.

Then test it, because the scope is narrower than the name suggests. Tap an address on a contact card; ask Siri for directions without naming an app; tap a map thumbnail in Safari search results. The first two are system handoffs and should now go to your app. The third almost certainly will not, for the URL-rewriting reason above. That gap is normal, and closing it is the rest of this piece.

### If a Navigation category is not listed

Then there is no setting to change, and any article telling you to visit a screen that does not exist on your phone is describing a different region's build. Skip to the workarounds.

### The situation on the Mac

macOS is sparser. The default browser is a single dropdown in System Settings under Desktop & Dock. The default mail app is set from inside Mail's own settings instead, an oddity that catches people out. There is no default maps control at all: `maps.apple.com` links open Apple Maps because Apple Maps claims that domain, and Google Maps links open in your browser because that is where a Google URL belongs. Mac browser extensions are mature and unrestricted, though, so the extension approach below works at least as well there.

## The defaults that have long been changeable

Most people arriving here have half-remembered the browser change and assumed maps works the same way, so here is what a real default switch looks like. Apple opened up browser and mail with iOS 14 in 2020, and both have been widely available since. Setting a different default browser genuinely changes system-wide behaviour: tap a link in Notes, Messages or a calendar invitation and your chosen browser opens, and Siri respects it when you search the web. Default mail works the same way for `mailto:` links. The in-app browser exception still applies, which is usually what remains if your complaint is "links keep opening in the wrong browser". Our guide to [setting up Safari for maximum productivity](/blog/safari-extensions/how-to-set-up-safari-maximum-productivity/) covers the browser side.

## What a maps default covers, and what it does not

Even where a navigation default exists, map taps fall into three buckets and it touches only one.

**System handoffs** are the covered bucket: an address in Contacts, a location in a calendar event, a Siri directions request, a place received by AirDrop.

**Web URLs** are not. Any `google.com/maps/...` address, a search results page, an embedded map or a short link resolving to a Google map is a web page, so it goes to your browser, where either a Universal Link fires and opens the Google Maps app or the page renders.

**Links inside another app's in-app browser** are not either. Nothing in Settings reaches them; the host app decides.

For the last two you need a different tool, not a different setting. The [hub guide on opening Google Maps links in Apple Maps](/blog/safari-extensions/how-to-open-google-maps-links-in-apple-maps/) lays out the full landscape; what follows is the settings-adjacent subset.

## Four workarounds, honestly ranked

### 1. A Safari extension that redirects map links

Most wrong-app taps happen in Safari, because that is where search results live. An extension runs on the page, sees the map links before you tap them, and sends you to Apple Maps with the equivalent query. This is the translation no default setting performs, and it is narrow by design: it works where the extension runs.

### Redirect Map for Safari

[Redirect Map for Safari](/apps/redirect-map-for-safari/) does exactly this one job. Tap a Google Maps link, a map thumbnail, an address card or a directions button, and it opens Apple Maps with the same query, place or route instead of the Google Maps web page. It handles Google's many domains and regional variants, including `google.com`, `google.co.uk`, `google.ca` and other country TLDs, plus Google's user-content subdomains, so a search on a local Google domain behaves like one on `google.com`.

It parses whatever the tapped element contains: a plain address, a place name, a latitude and longitude pair, a `q=` query parameter, a `place` path segment, a shortened URL, or one of Google's `@lat,long,zoom` coordinate strings. When it cannot confidently resolve a destination it does not guess. It opens the original Google Maps link first to read a clearer address, then opens Apple Maps once resolution succeeds. That fallback is slower, and honest about the fact that not every URL is clean.

The permission question deserves a straight answer. The extension requests access to all websites. Google serves maps across a long list of domains, subdomains and country TLDs, and map links also appear on third-party pages that embed them, so an extension scoped to `google.com` alone would miss most of what you care about. The trade-off is real. What it does with that access, per its App Store listing and its behaviour, is read the current page's DOM to find map links; nothing is stored and no location or personal data leaves the device. Our [complete guide to Safari extension security and permissions](/blog/safari-extensions/complete-guide-safari-extension-security-permissions/) explains what "all websites" access can and cannot reach.

Now the boundary, which is what a reader of this article most needs. It is **not** a default app setting. It changes no system default, does not intercept links tapped in Messages, Mail or Instagram, and does not affect Siri, CarPlay or Contacts. It works in Safari, on the links you tap there. It runs on iPhone, iPad and Mac, enabled in Settings → Safari → Extensions on iOS or Safari → Settings → Extensions on macOS.

{% include blog-cta.html app_slug="redirect-map-for-safari" %}

### 2. A Shortcuts automation from the share sheet

Shortcuts can build the same translation yourself, free, and it is reachable from the share sheet in *any* app rather than only Safari. The shape is: a shortcut that accepts URLs as input, extracts the meaningful part of a Google Maps address, assembles an Apple Maps URL, and opens it. Mark it available in the share sheet, then share a map link into it instead of tapping.

I am deliberately not giving a step-by-step recipe, because the useful version depends on which URL shapes you meet, and a recipe that silently fails on short links is worse than none. The raw material is Apple's documented scheme: `maps://` and `http://maps.apple.com/` accept `q` for a query, `ll` for a coordinate pair, and `daddr` and `saddr` for destination and start. Our piece on [Apple Maps URL schemes and sharing locations between apps](/blog/safari-extensions/apple-maps-url-schemes-share-locations-between-apps/) covers how to construct a working link.

Honest assessment: free, flexible, works wherever the share sheet does. Also fiddly to build, needs you to share rather than tap, and breaks when Google changes a URL shape.

### 3. Copy and paste

The universal fallback. Long-press the address, copy, open Apple Maps, paste. Four gestures instead of one is why nobody wants it daily, but it is the only approach that works inside a locked-down in-app browser, and where you land when a URL is too mangled for anything automated. On the Mac, [Copy on Select](/apps/copy-on-select/) removes the friction from the copying half.

### 4. Change where you search

The most underrated option: stop generating the bad links. Searching inside Apple Maps skips the problem entirely, because no Google URL is involved. Its point-of-interest coverage is thinner than Google's in places and its review data weaker, a real cost, but for "nearest pharmacy" it is usually enough. You can also change Safari's search engine, under Settings → Apps → Safari → Search Engine, to one whose map results you prefer.

### Comparing the four

| Approach | What it covers | What it does not cover | Setup effort |
|---|---|---|---|
| Safari extension | Map links, thumbnails, address cards and directions buttons in Safari (iPhone, iPad, Mac) | Other apps, in-app browsers, Siri, CarPlay, Contacts | One-time install; broad host permission once |
| Shortcuts automation | Any link you can reach the share sheet from | Links you tap rather than share; shapes you did not handle | High: you build and maintain the logic |
| Copy and paste | Everything, including locked-down in-app browsers | Nothing, but costs four gestures each time | None |
| Search in Apple Maps instead | Everything you initiate yourself | Links other people send you | None; a habit, not a setting |
| Navigation default, where offered | System handoffs: Contacts, calendar events, Siri | Web URLs, in-app browsers, most search result taps | One toggle, if offered |

These are complements, not competitors: set the navigation default if your region offers one, run an extension for Safari, keep copy and paste in reserve.

## Related defaults worth knowing about

The **default browser** and **default mail app** live in the same Default Apps screen and work on essentially all current devices. **Safari's own settings** are a different category people often call defaults: search engine, background tabs, page zoom, enabled extensions. Those are preferences under Settings → Apps → Safari. On a Mac, [Command Palette](/apps/command-palette/) turns most of that hunting into a few keystrokes, and our [roundup of Safari extensions for iPhone and Mac](/blog/safari-extensions/best-safari-extensions-iphone-mac-2026/) covers the wider set worth enabling. What you cannot set anywhere is which app opens a specific website; iOS has no per-domain assignment, and that decision belongs to the app claiming the domain.

## CarPlay and the phone's default

CarPlay confuses people, because it is reasonable to assume the car inherits the phone's choice. It does not present a "default navigation app" toggle. It presents a home screen of CarPlay-compatible apps, and you pick one by launching it. With Apple Maps, Google Maps and Waze installed, all three can appear, and whichever you used last tends to be waiting. You arrange those icons from your iPhone's CarPlay settings, under General.

Siri is murkier. Asking for directions without naming an app may or may not reach the app you consider your default, because behaviour depends on which Siri intents the app supports and on your iOS version. The reliable move is to name it: "get directions to the airport in Waze" leaves no ambiguity.

Apple Maps also supports downloadable offline maps, added in iOS 17, which matters more on a rural road than any default setting. For the daily commute, our list of [the best apps for commuters](/blog/productivity/best-apps-commuters-iphone/) covers transit and traffic, [Yawa](/apps/local-weather-yawa/) answers the "what will it be like when I arrive" question navigation apps handle badly, and [My Agenda](/apps/my-agenda-planning/) holds a multi-stop itinerary while the maps app handles the legs.

Whether Apple Maps is the right daily driver is a separate question. Our [guide to switching from Google Maps to Apple Maps](/blog/safari-extensions/switch-from-google-maps-to-apple-maps/) goes feature by feature, and the [privacy comparison](/blog/safari-extensions/apple-maps-vs-google-maps-privacy-data-collection/) covers the other axis people weigh.

## Frequently asked questions

### Can I set Apple Maps as the default maps app on iPhone?

Sometimes, depending on your region and iOS version. Open Settings → Apps → Default Apps and look for a Navigation or Maps category. If it is there, nominate Apple Maps and it will handle system handoffs like addresses in Contacts and Siri directions. If the category is absent, there is no setting to change and you need one of the workarounds above.

### Why is there no Maps option in my Default Apps screen?

Because the set of changeable categories varies by region. The screen was introduced to satisfy European Digital Markets Act requirements, and the categories offered elsewhere are narrower. Apple has expanded this over time, so re-check after a major iOS update.

### Can I make Google Maps the default instead?

If your device offers a Navigation category, Google Maps appears as a candidate once installed. If it does not, having the app installed is usually enough for Google's own map URLs to open in the app rather than the browser, because it claims those domains through Universal Links.

### Does changing the default affect links in other apps?

Partly. A default applies when the system does the handing off, so a link tapped in Messages, Notes or Mail respects it. A link opened inside another app's embedded browser, as Instagram and Slack do, never reaches the system at all.

### How do I change the default maps app on a Mac?

You cannot. macOS has no default maps control, only a default browser setting under Desktop & Dock and a default mail setting inside Mail's own preferences. Map links are web addresses, so a Safari extension is the practical answer there.

### Does this only work in the EU?

The broad Default Apps screen originated in EU regulatory requirements, so EU users have historically seen the most categories, including navigation, and other regions see fewer. Rather than trusting any published list, including this one, check your own device.

### What is the difference between a default app and a redirect extension?

A default app is a routing rule: the system has something to open and asks which app you prefer. A redirect extension is a translation: it reads a Google Maps URL, works out what place or route it describes, and builds the equivalent Apple Maps request. Defaults never rewrite a URL, which is why a maps default cannot fix a Google Maps web link, and why [Redirect Map for Safari](/apps/redirect-map-for-safari/) exists as a tool rather than a setting.
