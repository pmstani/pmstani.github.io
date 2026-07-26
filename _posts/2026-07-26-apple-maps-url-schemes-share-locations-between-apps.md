---
layout: post
title: "Apple Maps URL Schemes: How to Share Locations Between Apps"
description: "Build Apple Maps links by hand: q, ll, saddr, daddr, dirflg and more, plus maps:// vs maps.apple.com, Google Maps conversion, Shortcuts and developer notes."
date: 2026-07-26
categories: [safari-extensions]
tags: [apple-maps, url-schemes, maps-links, shortcuts, developer, deep-links, ios]
silo: maps-navigation
pillar: maps-navigation
related_apps: [redirect-map-for-safari, copy-on-select, plain-paste, link-gopher, command-palette]
---

## Three Situations Where You Build a Map Link Yourself

The first is a contact page: you have a street address in a template, and you want the "Get directions" button to open the visitor's actual map app rather than dumping them onto a web map to fight with on a phone.

The second is a message to a colleague: you are outside a building with no useful name, the pin in your Maps app is correct, and you want them to receive something that opens on that exact spot.

The third is automation, a Shortcut that reads a calendar event or some pasted text and whose last step should be "open this in Apple Maps".

All three come down to an Apple Maps URL. Apple's **Map Links** reference is the canonical document and the authority; parameter support is Apple's to change. What follows is the subset that has been stable and useful for years, plus the encoding rules that break most hand-written links.

## The Anatomy of an Apple Maps Link

Every Apple Maps link is a base URL plus a query string. The base you should almost always use is `https://maps.apple.com/`.

### Search for a Place by Name or Address: `q`

`q` is a query, exactly like typing into the Maps search field:

```
https://maps.apple.com/?q=Grand%20Central%20Terminal
```

An address works the same way:

```
https://maps.apple.com/?q=1600%20Pennsylvania%20Avenue%20NW%2C%20Washington%2C%20DC
```

This is the workhorse for a business contact page, and also the least precise option: `q` hands a string to a geocoder and accepts whatever comes back. "High Street" matches thousands of places. If you know the exact spot, use coordinates.

### Drop a Pin at a Coordinate: `ll`

`ll` takes latitude and longitude, comma-separated, latitude first:

```
https://maps.apple.com/?ll=48.85837,2.29448
```

No geocoding, no ambiguity. This is the right choice for a trailhead, a service entrance, or a gate on a large site, where the postal address does not describe where you want someone to stand.

### Label a Coordinate: `ll` Plus `q`

A bare coordinate opens an unnamed pin. Combine the two:

```
https://maps.apple.com/?ll=48.85837,2.29448&q=Eiffel%20Tower
```

When `ll` is present, `q` stops being a search and becomes the label for that point. It is the pattern I default to whenever the location is known: precise placement, readable name, no geocoder involved.

### Set the Zoom and Map Type: `z` and `t`

`z` controls how tightly the map is framed: small numbers show a region, values in the mid-teens and above give a street-level view. `t` sets the map type, and the values I would stand behind are `m` for the standard map, `k` for satellite imagery and `h` for hybrid.

```
https://maps.apple.com/?ll=48.85837,2.29448&q=Eiffel%20Tower&z=17
https://maps.apple.com/?ll=37.33182,-122.03118&q=Apple%20Park&t=k&z=16
```

Apple's reference lists the full set of accepted `t` values and the exact zoom range; treat it as authoritative rather than this list.

### Search Near a Point: `near` and `sll`

Two parameters bias a search instead of pinning a point. `near` takes a location to search around, `sll` a latitude/longitude pair to centre the search on, and both accompany `q` rather than replacing it:

```
https://maps.apple.com/?q=pharmacy&sll=51.50735,-0.12776
```

### Directions From A to B: `saddr` and `daddr`

Add a destination and the link becomes a route. `daddr` is the destination, `saddr` the starting point, and both accept an address string or a coordinate pair:

```
https://maps.apple.com/?saddr=Paddington%20Station%2C%20London&daddr=Tower%20Bridge%2C%20London
https://maps.apple.com/?saddr=51.51681,-0.17700&daddr=51.50546,-0.07540
```

### Pick the Transport Mode: `dirflg`

`dirflg` selects how the route is calculated: `d` for driving, `w` for walking, `r` for transit.

```
https://maps.apple.com/?daddr=Tower%20Bridge%2C%20London&dirflg=w
```

Transit depends on Apple having data for that city, so `dirflg=r` is a request rather than a guarantee.

### Directions From Wherever the User Is

To route from the user's current location, leave `saddr` out:

```
https://maps.apple.com/?daddr=Tower%20Bridge%2C%20London&dirflg=d
```

With no start point, Maps uses where the device is. That makes it the right form for a "Get directions" button on a website, where you have no idea where the visitor is.

### The Encoding Rules That Break Hand-Written Links

Almost every broken map link I have been sent fails for one of two reasons.

**Spaces.** A raw space cannot appear in a URL. Percent-encode it as `%20`, or use `+` inside a query string. `%20` is the safer habit because it is valid in more positions and survives being pasted through more systems.

**Commas.** Inside `ll`, `sll` and coordinate-form `saddr`/`daddr`, the comma is a separator Maps needs to see, so a literal `,` is correct. Inside an address string it is data, and `%2C` removes any chance of it being read as a separator. So `ll=48.85837,2.29448` is fine, and `daddr=10%20Downing%20Street%2C%20London` is the careful way to write an address.

Two more: `&` inside a place name terminates your parameter early and must become `%26`, and `#` is read as a fragment marker and must become `%23`.

Two small extensions remove friction when you assemble links by hand: [Copy on Select](/apps/copy-on-select/) puts a highlighted address on the clipboard as soon as you select it, and [Plain Paste](/apps/plain-paste/) strips the invisible formatting that rides along with copied web text, a common source of stray characters.

## `https://maps.apple.com/` Versus `maps://`

Both forms exist, they are not interchangeable, and choosing wrongly is the most common structural mistake in map links.

`https://maps.apple.com/?…` is a universal link. Where Apple Maps is installed, the operating system claims the URL and the app opens; everywhere else, including Android and Windows, the same URL resolves to a web page. It degrades gracefully by design.

`maps://?…` is a custom URL scheme, meaningful only to software that has registered `maps`. Where that holds it opens the app; where it does not, the failure is silent, with no error and no fallback, just a link that appears dead. Some mail clients also refuse to render non-`http(s)` schemes as clickable at all.

| Context | Use | Why |
|---|---|---|
| A web page or contact form | `https://maps.apple.com/` | App on Apple devices, web map for everyone else |
| An email or message | `https://maps.apple.com/` | You cannot know the recipient's platform, and custom schemes get stripped |
| Inside your own iOS or macOS app | Either, https preferred | You control the environment, but https survives being copied out |
| A Shortcut's *Open URLs* action | `https://maps.apple.com/` | Reliable, and the link stays shareable |
| Anywhere a stranger might open it | `https://maps.apple.com/` | The only form with a defined non-Apple outcome |

Use the https form unless you have a specific reason not to.

## Converting Between Apple Maps and Google Maps Links

Google documents its own URL formats with its own parameter names. Two forms are stable and documented, and they are the two you need:

```
https://www.google.com/maps/search/?api=1&query=48.85837%2C2.29448
https://www.google.com/maps/dir/?api=1&origin=Paddington+Station+London&destination=Tower+Bridge+London&travelmode=walking
```

The mapping is a rename.

| Intent | Apple Maps | Google Maps |
|---|---|---|
| Search or pin | `q`, or `ll` for a coordinate | `query` |
| Route start | `saddr` | `origin` |
| Route end | `daddr` | `destination` |
| Transport mode | `dirflg=d` / `w` / `r` | `travelmode=driving` / `walking` / `transit` |

A walking route converted from Google to Apple, then a labelled Apple coordinate converted back:

```
Google: https://www.google.com/maps/dir/?api=1&destination=Tower+Bridge+London&travelmode=walking
Apple:  https://maps.apple.com/?daddr=Tower%20Bridge%2C%20London&dirflg=w

Apple:  https://maps.apple.com/?ll=48.85837,2.29448&q=Eiffel%20Tower
Google: https://www.google.com/maps/search/?api=1&query=48.85837%2C2.29448
```

A coordinate pair is a coordinate pair in both systems, so anything expressed as latitude and longitude converts exactly. Labels, zoom and map type have no clean equivalents. And Google's other URL shapes, the long `/maps/place/…` paths the address bar produces and the short links, are not documented interfaces and should not be parsed as though they were.

## Sharing a Location Without Hand-Writing a URL

Most of the time you should not type any of this; the built-in paths produce correct links.

### The Share Sheet in Apple Maps

Select a place, tap Share, pick a destination. The recipient receives a `maps.apple.com` link, the same universal-link form as above, which is why a location sent from an iPhone opens natively for an iPhone recipient and opens a web map for an Android recipient with no effort from you. Long-press the map to drop your own pin first and you can share an arbitrary point with no name and no address, which solves "meet me at this corner".

### From Contacts and Calendar Events

An address in a contact card is tappable and opens Maps. So is the location field of a calendar event, which is the reason to put a real address there rather than "Simon's place". Every device that syncs the event then gets a working map link for free, and downstream tooling gets something machine-readable, which is what makes [building a mileage log from calendar data](/blog/productivity/how-to-create-mileage-log-calendar-data-iphone/) possible later.

### Handoff Between Mac and iPhone

Plan a route in Maps on a Mac, then pick up the Handoff icon on the iPhone (app switcher on iOS, Dock on iPadOS) and the same route opens on the phone. It is the fastest way to move a multi-stop route you built with a keyboard onto the device that will navigate it. Both devices need the same Apple Account with Handoff and Bluetooth on, and it transfers what you are looking at rather than saving it.

### Copying a Coordinate Out of the Maps App

Open a place card, scroll to the bottom, and the coordinates are listed and copyable, including for a pin you dropped yourself. That pair is what you paste into `ll` when you want a link that does not depend on geocoding.

## Building a Shortcut That Opens a Location

This is where the parameters pay off, because Shortcuts is the cheapest place to turn text into a map link.

The shape is the same regardless of the automation: take some input, extract the part that describes a place, URL-encode it, concatenate it into a `https://maps.apple.com/?…` string, open the result. In Shortcuts terms that means a *Get Text from Input* or *Get Details of Calendar Event* style action for the raw string, *Match Text* or *Replace Text* to isolate and clean the address, a *Text* action to assemble the URL, and *Open URLs* last. Enable "Show in Share Sheet" in the shortcut's settings and set the accepted input types, and you can run it on selected text or a URL from inside Safari, Messages or Mail.

Two honest caveats. First, this takes fiddling: real address text arrives with line breaks, trailing punctuation, building names and country suffixes, and the cleanup step is where the time goes. Expect to iterate against real examples, including one address with a comma and one with an ampersand. Second, a shortcut is something you invoke; it sits in the share sheet waiting to be remembered. It does not intercept a link you tap while browsing, so it solves "I have this text and want a map" but not "I tapped a map result and got a web page".

If you build a lot of these, a keyboard-first browser helps: [Command Palette](/apps/command-palette/) is what I would add for triggering things without reaching for the mouse, and the wider arrangement is in [how to set up Safari for maximum productivity](/blog/safari-extensions/how-to-set-up-safari-maximum-productivity/).

## Notes for Developers and Site Owners

**Use the https form.** A universal link has a defined outcome on every platform; a custom scheme fails silently outside Apple's.

**Encode with a library.** `encodeURIComponent` in JavaScript, `URLComponents` in Swift, `urllib.parse.quote` in Python. Hand-written encoding gets spaces right and then misses the ampersand in "Bar & Grill".

**Prefer a labelled coordinate over an address string when you know the exact spot.** `ll` plus `q` is deterministic; an address string is a geocoding request, and geocoding varies by provider, by region and over time. For an awkward entrance or anything inside a campus, the coordinate is the difference between arriving and circling.

**Do not assume an app is installed.** Offer the link, do not build a flow that dead-ends without it. To serve both ecosystems, emit an Apple Maps link and a Google Maps link side by side and let the visitor choose. And treat only the documented query forms as interfaces; the long paths a browser shows you are not, and they change.

**Test on a real device.** A `maps.apple.com` URL behaves differently in a desktop browser than when tapped on a phone, and the desktop preview will not tell you whether the app handoff works. If a link opens the web version on a device that has the app, the cause is usually universal-link handling rather than your URL: see [why Google Maps links open in a browser instead of the app](/blog/safari-extensions/why-google-maps-links-open-in-browser-instead-of-app/).

## Where Redirect Map for Safari Fits

Everything above is the manual version: work out what place a page refers to, construct an Apple Maps URL, open it. Fine once, tedious as a daily habit, and it is a daily habit for anyone who searches Google for a restaurant and then wants Apple Maps to navigate there.

[Redirect Map for Safari](/apps/redirect-map-for-safari/) automates that construction step. When you tap a Google Maps link, a map thumbnail, an address card or a directions button in Safari, it inspects the element and pulls out whatever it can find: an address, a place name, a lat/lng pair, a `q=` parameter, a `place` path segment, a short URL, or an `@lat,long,z` coordinate string. From that it builds the Apple Maps handoff and opens the app on the same place or route. It handles Google's regional domains and subdomains rather than one hard-coded host, which matters because a search on `google.co.uk` produces different URLs from the same search on `google.com`.

When it cannot resolve a destination confidently, it does not guess: it opens the original Google Maps link first to extract a clearer address, then hands off once resolution succeeds. That fallback is the honest answer to the URL-shape fragility above, because some Google URLs do not carry enough information to resolve from the link alone.

The boundary matters. It acts on links you tap in Safari. It does not change any system default, does not intercept links opened from other apps, and does nothing outside Safari. If you want a system-wide navigation default, that is a settings question covered in [changing the default maps app on iPhone and iPad](/blog/safari-extensions/how-to-change-default-maps-app-iphone-ipad/), and whether a maps default exists at all depends on your region.

On permissions, be clear-eyed. The extension declares a match pattern covering all sites, and its setup instructions ask you to allow it on every website once. That breadth is required because Google serves map content across many domains and country TLDs, and a narrow allowlist would miss most of them, but the trade-off is real: you are granting page access, not access scoped to google.com. What it does with that access, per its listing and its behaviour, is read the page in front of you to find map links; nothing is stored persistently and no location or personal data leaves the device. There is no toolbar UI; you enable it once in Safari's settings. For a framework for weighing that kind of grant, see the [complete guide to Safari extension security and permissions](/blog/safari-extensions/complete-guide-safari-extension-security-permissions/).

{% include blog-cta.html app_slug="redirect-map-for-safari" %}

For how extensions, defaults and manual URL building fit together, start with the guide to [opening Google Maps links in Apple Maps](/blog/safari-extensions/how-to-open-google-maps-links-in-apple-maps/); for a whole travel setup, the [Safari extensions for travel and navigation](/blog/safari-extensions/best-safari-extensions-travel-navigation-iphone-mac/) roundup covers the kit that surrounds [Redirect Map for Safari](/apps/redirect-map-for-safari/). One more extension suits the URL-wrangling side: [Link Gopher](/apps/link-gopher/) extracts every link on a page at once, the fast way to harvest venue URLs from a listings page.

## Frequently asked questions

### How do I create an Apple Maps link?

Start with `https://maps.apple.com/` and add query parameters. `?q=` plus a URL-encoded place name or address is the simplest working link, and `?ll=48.85837,2.29448&q=Eiffel%20Tower` gives a precisely placed, labelled pin. Apple's Map Links reference documents the full set and is the authority if anything here disagrees with your device.

### What is the difference between `maps://` and `maps.apple.com`?

`maps://` is a custom URL scheme that works only where software has registered it and fails silently everywhere else. `https://maps.apple.com/` is a universal link: it opens Apple Maps where the app exists and falls back to a web map anywhere else. Use the https form for anything you publish, email or share.

### How do I link directions from my website?

Use `https://maps.apple.com/?daddr=` plus your URL-encoded address, and leave `saddr` out so the route starts from wherever the visitor is. Add `&dirflg=d`, `w` or `r` to preselect driving, walking or transit. For an awkward entrance, put the coordinate in `daddr` instead.

### Can I make an Apple Maps link with coordinates?

Yes, and it is the more reliable option. `ll=latitude,longitude` drops a pin at that exact point with no geocoding involved, and adding `q=` alongside supplies the label shown on the pin. Coordinates also work directly in `saddr` and `daddr` for routes.

### Do Apple Maps links work on Android and Windows?

A `https://maps.apple.com/` link opens a web version of Apple Maps in the browser on platforms without the app, so the recipient still sees the location. A `maps://` link does not work outside Apple's ecosystem and typically does nothing when tapped. That is the main reason to standardise on the https form.

### How do I convert a Google Maps link to an Apple Maps link?

For Google's documented forms it is a parameter rename: `query` becomes `q`, `origin` becomes `saddr`, `destination` becomes `daddr`, `travelmode=driving/walking/transit` becomes `dirflg=d/w/r`, and coordinate pairs transfer exactly. For the long `/maps/place/…` URLs a browser produces, extract the coordinate or place name and rebuild the link rather than translating the path, or let [Redirect Map for Safari](/apps/redirect-map-for-safari/) parse it for links you tap in Safari.
