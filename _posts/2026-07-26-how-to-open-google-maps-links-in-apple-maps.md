---
layout: post
title: "How to Open Google Maps Links in Apple Maps (iPhone, iPad & Mac)"
description: "Google Maps links open a web page, not Apple Maps. Here is every way to fix that on iPhone, iPad and Mac, from copy-paste to a Safari extension."
date: 2026-07-26
categories: [safari-extensions]
tags: [apple-maps, google-maps, safari-extension, maps, navigation, default-apps, url-redirect, iphone]
silo: maps-navigation
pillar: maps-navigation
related_apps: [redirect-map-for-safari, local-weather-yawa, convert, translator-safari-extension, my-agenda-planning]
---

## The six-step dance nobody asked for

You are standing on a pavement with your phone out, searching Google for the restaurant a colleague recommended. Google returns the usual knowledge panel with a small map card in it. You tap the map, because tapping a map is how you ask for directions. Safari loads a Google Maps web page.

That is not what you wanted. You wanted turn-by-turn directions in Apple Maps, because Apple Maps is what appears on your car's CarPlay screen, what taps your wrist at each turn, and what you have already told to avoid tolls.

So you do the dance. Press and hold to select the address. Drag the handles, because the first attempt grabbed the phone number too. Copy. Swipe to Apple Maps, tap the search field, paste, hit Go, and wait for it to geocode a string you already had in structured form two apps ago. Six interactions for something that should be one, and small annoyances are the ones you pay repeatedly: three lookups a day is a thousand of these a year.

Here is every honest way to close that gap on iPhone, iPad and Mac, and where each one stops working.

## Why the link opens a web page instead of Apple Maps

The short version: Google's search results point at Google's own map surfaces, and a web link opens in a browser unless an app has claimed that URL and the claim is intact.

The mechanism is called Universal Links. An app publishes an `apple-app-site-association` file on the domains it owns, listing the URL patterns it wants to handle. When you tap a matching link, the operating system checks that association and hands the URL to the app instead of Safari. That is why an App Store link opens the App Store app.

Two things follow. First, only the owner of a domain can claim its links, so Apple Maps cannot claim `google.com/maps`, and you would not want Apple able to intercept a competitor's URLs. Second, the association can break from your side: choose "Open in Safari" from the long-press menu once and iOS remembers that for the domain. Some links never get the chance at all, because in-app browsers inside social and messaging apps often ignore Universal Links. For the full diagnostic, including how to repair a broken association, read [why Google Maps links open in your browser instead of the app](/blog/safari-extensions/why-google-maps-links-open-in-browser-instead-of-app/).

## Every way to get a Google Maps link into Apple Maps

Five approaches work. They differ enormously in effort, reliability and where they apply.

### Method 1: Copy the address and paste it into Apple Maps

The baseline. Select the address, copy it, switch to Apple Maps, paste, let it geocode.

It works on every device and on any site rather than just Google, and that universality is its only virtue. It costs five to seven interactions, it fails where the address is split awkwardly across elements, and it discards everything structured about the original link: the coordinates, the place record, the route you had configured.

A selection helper shortens the dance without ending it: [Copy on Select](/apps/copy-on-select/) puts highlighted text straight on the clipboard, removing one step from six.

### Method 2: The share sheet

Some pages expose a location in a form the share sheet understands, and Apple Maps appears as a target. Tap Share, pick Maps, done.

Nobody recommends this as a primary method because it is inconsistent by nature. Whether Maps offers itself depends on the data type the sharing app hands over. A page sharing a location object works; a page sharing a plain URL gives Maps nothing to act on, and a URL is what a Google Maps page shares. Treat the share sheet as a pleasant surprise, not a workflow.

### Method 3: Change your default navigation app

This is the question most people ask, and it needs care, because the answer has changed and depends on where you are.

Apple has allowed you to change your default browser and mail app for several years. More recently iOS gained a broader Default Apps screen covering additional categories, and in some regions that list includes navigation. The variation is regulatory: the European Union's Digital Markets Act obliged Apple to open more default categories for EU users, and the set offered elsewhere is narrower. So rather than trusting a version number in an article, check your own device. Open Settings, tap Apps, then Default Apps, and read the list in front of you. Many readers will find no maps category there, and that is not a mistake.

Then the part that matters even where the setting exists. A default navigation app governs which app the operating system hands a map link or navigation intent to when it is routing one. It does not rewrite a Google Maps web URL into an Apple Maps one. A `google.com/maps` link is an address on Google's domain, and the default-apps setting is not a URL translator.

So set it if you have it, because it is free and it fixes link handling from other apps. It is not by itself a fix for the Google search result. The mechanics are covered in [how to change your default maps app on iPhone and iPad](/blog/safari-extensions/how-to-change-default-maps-app-iphone-ipad/).

### Method 4: A Shortcuts automation

Genuinely possible, rarely worth it, and I would rather say so than pad this with steps I cannot verify.

The approach: build a shortcut that accepts a URL or text as input, pulls the address or coordinates out of it, and hands the result to Apple Maps, either through a Maps action or by constructing a `maps://` URL and opening it. Enable "Show in Share Sheet" and it appears when you share a page from Safari.

It works, and it is free. It is also fiddly, because the interesting part is the parsing, and Google Maps URLs come in many shapes: a `q=` parameter, a `/place/` path segment, an `@lat,long,z` coordinate string, a short link that must be followed before it reveals anything. Handling one shape is an afternoon; handling the shapes you actually meet is an ongoing project. And a shortcut still needs invoking: share sheet, scroll, tap. You have traded six taps for three and taken on maintaining a small piece of software.

If that appeals, the formats you would target, including the `q`, `ll`, `daddr`, `saddr` and `dirflg` parameters, are documented in [Apple Maps URL schemes and how to share locations between apps](/blog/safari-extensions/apple-maps-url-schemes-share-locations-between-apps/).

### Method 5: A Safari extension that does the redirect

The direct fix. Rather than changing what you do after the tap, change what the tap does. An extension with access to the page can see that what you tapped is a map link, work out what it refers to, and open Apple Maps on that destination instead of loading Google's page.

This is the only approach here where the interaction count is one, the same as if the link had pointed at Apple Maps to begin with, and it runs in Safari on both iOS and macOS. What it cannot do is anything outside Safari, the honest boundary set out below.

### The methods side by side

| Method | Taps per link | Mac | iPhone / iPad | Setup | Main limitation |
|---|---|---|---|---|---|
| Copy and paste the address | 5-7 | Yes | Yes | None | Tedious; loses coordinates and route |
| Share sheet | 2-3 | Sometimes | Sometimes | None | Only when the page shares a location |
| Default navigation app | 1 for routed links | Separate setting | Region-dependent | One-time, if offered | Does not convert a Google Maps URL |
| Shortcuts automation | 3 | Yes | Yes | Moderate | You build the parsing; manual to invoke |
| Safari redirect extension | 1 | Yes | Yes | One-time | Safari only; needs page access |

## Redirect Map for Safari, in detail

[Redirect Map for Safari](/apps/redirect-map-for-safari/) does one job: when you tap something on a Google page that points at a map, Apple Maps opens on the same destination.

In practice that covers map links, map thumbnails, address cards and directions buttons. Tap the map card in a search result and Apple Maps opens on that place; tap a directions button and it opens with the route. The Google Maps web page never loads, and you never touch the clipboard.

### What it recognises

The work is in the parsing, because a "Google Maps link" is not one thing. The extension handles addresses and place names, latitude and longitude pairs, `q=` query parameters, `place` path segments, short URLs, and `@lat,long,z` coordinate strings, the format Google uses for a map's centre point and zoom level.

It also works across Google's domains rather than only `google.com`: regional top-level domains such as `google.co.uk` and `google.ca`, `www.google.*` subdomains, and the `googleusercontent` domains that serve some map imagery. That matters more than it sounds, because an extension scoped to one hostname would stop working the moment you travelled. Reading those local pages is a separate problem, and one [Translator](/apps/translator-safari-extension/) handles if the address is in a script you do not know, as our guide to [translating web pages in Safari](/blog/safari-extensions/how-to-translate-web-pages-in-safari-on-iphone-and-mac/) explains.

### What happens when it cannot resolve a destination

Not every tapped element carries enough information to identify a place confidently. Rather than guessing and dropping you somewhere wrong, the extension falls back: it opens the original Google Maps link first, so the loaded page can yield a clearer address, then hands off to Apple Maps once resolution succeeds.

What you occasionally see, then, is a brief flash of the Google page before Apple Maps appears. That is not a failure. It is the extension declining to guess, and unusual URL shapes trigger it more often than ordinary results do.

### Setting it up

On iPhone or iPad, install from the App Store, then open Settings, go to Safari, then Extensions, and enable it. On the Mac, open Safari, then Settings, then Extensions, and tick it. Grant it access to websites once when prompted.

There is no toolbar button and no panel. It is a background behaviour, not an interface, which is why setup is the entire interaction you will have with it. The [best Safari extensions for iPhone and Mac in 2026](/blog/safari-extensions/best-safari-extensions-iphone-mac-2026/) roundup covers these screens in more detail.

### The permission, honestly

The extension requests access to all websites. That is a real request and it deserves a real explanation rather than a reassuring adjective. The reason is the domain problem above: Google serves maps across a long list of hostnames and regional top-level domains, and no fixed list an extension could declare would still be correct next year or in another country. One asking only for `google.com` would fail on `google.de`.

The counterweight is what it does with that access. It reads the current page to find map links, locally, on your device. The listing states no data collection: nothing is stored persistently and no location or personal data leaves the device. There is no account and no server to send anything to.

Broad host access is common among extensions that must work everywhere, and the useful skill is evaluating the trade-off each time rather than treating every request as either fine or disqualifying. Our [complete guide to Safari extension security and permissions](/blog/safari-extensions/complete-guide-safari-extension-security-permissions/) breaks down the access levels, what an extension can see within a page, and how to audit what you have installed.

### What it does not do

- It redirects links you tap in Safari. That is the whole scope.
- It changes no system default. Your default browser, default maps app and Universal Link behaviour are untouched.
- It does not intercept links from other apps. A Google Maps link tapped in Messages, Mail, Slack or an in-app browser is handled by those apps and the operating system.

Outside Safari, the default-apps route is the only mechanism, with the limits described above.

{% include blog-cta.html app_slug="redirect-map-for-safari" %}

## The same problem on the Mac

On the Mac the friction is identical in shape and more irritating in practice, because you are usually planning rather than navigating. You are researching a trip with eleven tabs open, and every map link loads a heavy Google Maps web app in a tab you then have to close. The same extension applies, and the install is one toggle in Safari's Extensions settings.

One Mac-specific detail makes this better than it first appears. Apple Maps on the Mac can send a route to your iPhone, so you can build it on the big screen where the alternatives are visible, share it to your phone, and find it waiting in the car. That only works if the destination lands in Apple Maps rather than a browser tab.

Longer trips spread across a few tools. [My Agenda](/apps/my-agenda-planning/) holds the itinerary, [Convert](/apps/convert/) handles the currency and unit arithmetic of being somewhere else, and [Yawa](/apps/local-weather-yawa/) reports the weather at the destination rather than where you are sitting, without the data brokering [many free weather apps rely on](/blog/digital-privacy-security/free-weather-apps-comparison-privacy-accuracy/). For the full set, see [the best Safari extensions for travel and navigation](/blog/safari-extensions/best-safari-extensions-travel-navigation-iphone-mac/), and for daily journeys, [best apps for commuters](/blog/productivity/best-apps-commuters-iphone/).

## When you actually want Google Maps

This post would be dishonest without this section, because Google Maps is better than Apple Maps at several things. Point of interest density is the big one: in many parts of the world Google knows about more places, including the small shop, the second entrance and the business that opened four months ago. Reviews are the second, and volume is what makes an average rating mean anything. Transit is the third, and it is city-specific rather than uniform: in some cities Google's schedules, live vehicle positions and multi-leg routing are clearly ahead, in others Apple is equal or better. Check both where you live. Street View has no real Apple equivalent either, for ordinary uses like working out which side of the road the entrance is on. Look Around covers a growing set of places and is well made, but coverage is not the same.

None of that argues against redirecting map links, because redirecting map links is not a vote against Google. It is about controlling where a tap lands. If you want a place record and reviews, search Google and read the page. If you want to drive there, the destination should end up in the app your car and watch are already connected to. Those are two intents, and the current default collapses them into one.

Apple Maps has closed real gaps, including downloadable offline maps since iOS 17, which changes the calculation on trips with poor coverage. What each app collects while you use it is a separate question from which routes better, and it is the subject of [Apple Maps vs Google Maps on privacy and data collection](/blog/safari-extensions/apple-maps-vs-google-maps-privacy-data-collection/). If you decide you would rather live in Apple Maps, [switching from Google Maps to Apple Maps](/blog/safari-extensions/switch-from-google-maps-to-apple-maps/) covers what you gain, what you give up, and how to move your saved places.

## Deep dives

Six companion posts go deeper on the parts this guide summarises:

- [Apple Maps vs Google Maps: privacy and data collection compared](/blog/safari-extensions/apple-maps-vs-google-maps-privacy-data-collection/) — what each app's published privacy documentation says.
- [How to change your default maps app on iPhone and iPad](/blog/safari-extensions/how-to-change-default-maps-app-iphone-ipad/) — the Default Apps screen, region differences, and what you cannot change.
- [Why Google Maps links open in your browser instead of the app](/blog/safari-extensions/why-google-maps-links-open-in-browser-instead-of-app/) — Universal Links, in-app browsers, broken associations and tracking redirects.
- [Apple Maps URL schemes: how to share locations between apps](/blog/safari-extensions/apple-maps-url-schemes-share-locations-between-apps/) — the `maps://` and `maps.apple.com` formats, place links and route links.
- [The best Safari extensions for travel and navigation on iPhone and Mac](/blog/safari-extensions/best-safari-extensions-travel-navigation-iphone-mac/) — what earns its place on a trip.
- [Switching from Google Maps to Apple Maps](/blog/safari-extensions/switch-from-google-maps-to-apple-maps/) — a feature-by-feature look at the move.

## Frequently asked questions

### Can I make Google Maps links always open in Apple Maps?

Inside Safari, yes, with an extension that recognises map links and redirects them, which is what [Redirect Map for Safari](/apps/redirect-map-for-safari/) does. System-wide, no. No setting rewrites a Google Maps web URL into an Apple Maps one, because a link on Google's domain belongs to Google and only Google can declare which app handles it.

### Can I set Apple Maps as my default maps app on iPhone?

It depends on your region. iOS has a Default Apps screen under Settings, then Apps, and the categories it offers vary because of regulatory requirements, with EU users seeing a broader list that includes navigation. Check it on your own device rather than trusting a version number. If no navigation category is there, that absence is the gap a Safari redirect extension fills.

### Does this work on the Mac?

Yes. Safari on macOS supports the same extensions, enabled under Safari, then Settings, then Extensions. A click on a map link opens Apple Maps rather than Google's page, and you can then send the finished route to your iPhone.

### Will it work for Google Maps links in other apps?

No, and this is the clearest limitation. A Safari extension runs inside Safari, so it can only act on links you tap there. A Google Maps link in Messages, Mail, Slack or an app's built-in browser is routed by that app and the operating system, and no Safari extension can reach it. A default navigation app, where your region offers one, is what affects those cases.

### Does the extension see my browsing?

It requests access to all websites, because Google serves maps across many domains and regional top-level domains and no fixed list would stay correct. Within that access it reads the current page to find map links, locally on your device. The listing states no data collection: nothing is stored persistently and no location or personal data leaves the device. Our [guide to Safari extension security and permissions](/blog/safari-extensions/complete-guide-safari-extension-security-permissions/) covers how to reason about requests like this.

### What happens if it cannot work out the address?

It falls back rather than guessing. When a tapped element does not identify a destination confidently, it opens the original Google Maps link first so the loaded page can yield a clearer address, then opens Apple Maps once it resolves. That brief flash of the Google page is the fallback working.

### Do I have to stop using Google Maps?

Not at all, and you probably should not. Google is often better on point of interest density, review volume and transit data in some cities, and Street View has no direct Apple equivalent. Redirecting map links is about where a tap lands, not which app you consult.
