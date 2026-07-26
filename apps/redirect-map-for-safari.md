---
layout: app-page
title: "Redirect Map for Safari - Open Google Maps Links in Apple Maps on iPhone, iPad & Mac"
description: "Tap a Google Maps link in Safari and it opens in Apple Maps instead — no copy-paste, no app switching. Works on all Google domains. On the App Store."
app_slug: "redirect-map-for-safari"
permalink: /apps/redirect-map-for-safari/
---

## About Redirect Map for Safari

You search Google for a restaurant, a hardware shop or a station, and there it is: a map card with the address on it. You tap the card and Safari loads a Google Maps web page. If Apple Maps is the app you actually navigate with, that page is a dead end. You select the address, copy it, leave Safari, open Maps, paste, then pick the right result out of the list. It takes fifteen seconds, it is exactly the same fifteen seconds every time, and there is no setting anywhere on the phone that removes it.

Redirect Map for Safari removes it. With the extension enabled, tapping a Google Maps link in Safari opens Apple Maps on the same destination instead of a Google Maps page — a map card in search results, a map thumbnail, an address card, a directions button. The place, the query or the whole route travels across with the tap. It works on Google's country domains and subdomains rather than just google.com, so a search on google.co.uk, google.ca or whichever regional domain you land on behaves the same way. To be precise about the scope: this handles links you tap inside Safari. It does not change any system default, it does not intercept links opened from Mail, Messages or any other app, and it does nothing outside Safari.

Turning a Google Maps URL into an Apple Maps one is less tidy than it sounds, because Google's map links come in many shapes. The extension reads the link and the surrounding page for whatever identifies the destination: a full street address, a place name, a latitude and longitude pair, a `q=` search parameter, a `place` path segment, a shortened URL, or an `@lat,long,z` coordinate string. When it can resolve a destination confidently it goes straight to Apple Maps with the query, the coordinates or the origin-and-destination pair. When it cannot, it takes the slower honest route rather than guessing: it opens the original Google Maps link first, so a clearer address can be read from the loaded page, and then hands off to Apple Maps once the destination resolves. That fallback exists because not every URL shape gives up its answer on the first pass, and a wrong pin is worse than an extra second.

Because it is a Safari web extension, there are two steps: install it from the App Store, then switch it on. On iPhone and iPad, open Settings, find Safari (under Apps on recent versions of iOS), then Extensions, and enable Redirect Map for Safari. On a Mac, open Safari, then Settings, then Extensions, and tick it. Safari will ask which sites the extension may run on. After that there is nothing to learn and nothing to open — no toolbar button appears, no panel, no preferences to tune. It is a behaviour rather than an interface, and the only sign it is working is that Apple Maps opens when it used to be a web page.

## Who is Redirect Map for Safari for?

- People who navigate with Apple Maps but still start almost every search in Google, and pay a copy-and-paste tax for the mismatch
- Drivers using CarPlay, who want the destination in Apple Maps and the directions on the dashboard rather than a map stuck in a browser tab
- Privacy-minded users who would rather not load a Google Maps page at all just to read one address off it
- Travellers looking up hotels, restaurants and transit stops on unfamiliar Google country domains in places they do not know
- Anyone in a region where iOS offers no navigation app default, so map links keep landing back in the browser no matter what is installed
- Anyone tired of the copy the address, switch apps, paste, guess which result is right routine

## Why choose Redirect Map for Safari?

This is a single-purpose tool, and that is the point of it. It fixes one specific friction in a route you take several times a week and then stays out of the way completely: no toolbar button, no panel, no account, no settings screen, no notifications, nothing to maintain. The search keeps happening where the results are good, and the navigation ends up in the app you actually drive and walk with. It does not try to be a maps app, a link manager or a privacy suite alongside that.

The permission deserves a straight answer, because you will see it when you enable the extension: it requests access to all websites. That is not a shortcut. Google serves maps across google.com, dozens of country domains, various subdomains and separate hosts for map thumbnails, and a Google Maps link can just as easily appear on a page that is not Google's at all — a restaurant's own site, a hotel booking page, a forum post. An extension scoped to google.com alone would miss most of the links people actually tap. So the trade-off is genuine: you are granting an extension permission to read the pages you visit. The counterweight is what it does with that access. It inspects the page in front of you, locally, to find map links and pull an address or a set of coordinates out of them, builds an Apple Maps URL, and stops there. Nothing is stored persistently, nothing is transmitted, there is no server behind it and no account to create. The App Store listing states that no data is collected, and the extension's behaviour is consistent with that — it reads a page to construct a link, and that is the whole job. If you would rather not grant blanket access, Safari lets you restrict or revoke the permission per site at any time in the same Extensions settings; the extension will simply work on fewer pages.

None of this is an argument that Google Maps is bad. Its business listings, reviews and transit coverage are excellent in many places, which is precisely why people keep searching there. The problem was never the search result, it was the handover — the moment where a perfectly good address has to be manually carried from one app to another. Redirect Map for Safari closes that gap for links you tap in Safari, honestly and narrowly, and leaves everything else on your device exactly as it was.
