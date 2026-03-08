---
layout: post
title: "How to Check if a Website is Down and Find Cached Versions"
description: "Learn how to check if a website is down for everyone or just you, and how to find cached and archived versions of unavailable pages using Safari extensions."
date: 2026-03-11
categories: [safari-extensions]
tags: [website-status, cache, archive, downtime]
silo: safari-extensions
pillar: safari-extensions
related_apps: [is-it-down, get-archive]
---

## The 100 Billion Dollar Cost of Downtime

According to Gartner's infrastructure research, the average cost of IT downtime across industries is $5,600 per minute — roughly $300,000 per hour. For major online retailers, the figure is far higher: Amazon has estimated that one minute of downtime costs the company approximately $220,000 in lost sales alone.

But downtime does not just affect the companies whose servers go dark. It affects every person who needs information from those servers. The developer who cannot access critical API documentation during a production incident. The student whose research source vanishes hours before a deadline. The traveler whose hotel booking confirmation page throws a 502 error. The journalist who needs to verify a claim using a page that has been quietly removed.

When a website fails to load, two questions arise immediately: Is the problem on my end, or theirs? And if the site is genuinely down, can I still access the content I need? Answering both questions quickly requires the right tools and a methodical approach.

## Understanding Why Websites Go Down

Before diagnosing a specific outage, it helps to understand the common failure modes. Each type of outage has different characteristics and different implications for how long it will last.

### Server-Side Failures

**Hardware failure.** Physical server components — hard drives, RAM modules, power supplies, network cards — fail at predictable statistical rates. Even with redundancy, hardware failures cause outages at smaller hosting operations that lack failover infrastructure.

**Software crashes.** Application bugs, memory leaks, unhandled exceptions, and deadlocks can crash web server processes. These often manifest as 500 Internal Server Error or 502 Bad Gateway responses. Most modern deployments have process managers (systemd, PM2, Kubernetes) that automatically restart crashed processes, but there is always a gap.

**Traffic spikes.** A website that operates fine at normal traffic levels can buckle under sudden load — a viral social media post, a product launch, a breaking news event, or a DDoS attack. These typically produce 503 Service Unavailable or extremely slow load times.

**DNS failures.** The Domain Name System translates human-readable URLs into IP addresses. If a domain's DNS records are misconfigured, expired, or if the DNS provider itself is experiencing issues, the domain becomes unreachable even though the web server may be functioning perfectly. The 2021 Facebook outage that took down Facebook, Instagram, and WhatsApp for six hours was caused by a DNS configuration error.

**Certificate expiration.** TLS/SSL certificates have expiration dates. When a certificate expires and is not renewed, browsers display security warnings and may refuse to load the site entirely. Let's Encrypt certificates, which power a large percentage of the web, expire every 90 days.

**CDN failures.** Major websites distribute content through Content Delivery Networks like Cloudflare, Fastly, and Akamai. When a CDN node fails, entire regions can lose access to affected websites. The June 2021 Fastly outage took down Amazon, Reddit, The New York Times, the UK government website, and thousands of other sites for approximately an hour.

### Client-Side Issues

Not all "outages" are actual outages. Sometimes the problem is between you and the server:

**Local DNS cache.** Your device caches DNS lookups. If a website's IP address changed recently, your cached entry may point to the old, non-functional address.

**ISP routing issues.** Your internet service provider's network may have a routing problem that affects connectivity to certain destinations while leaving others functional.

**VPN interference.** VPN connections route your traffic through different servers and networks. Some websites block known VPN IP ranges, and some VPN servers have connectivity issues with certain destinations.

**Browser cache/cookies.** Corrupted cached files or cookies can prevent a page from loading correctly, producing errors that look like server-side issues but are entirely local.

**Firewall or security software.** Local firewall rules, antivirus software, or content-blocking extensions can interfere with connections to specific websites.

## Diagnosing Website Status from Safari

[Is It Down](/apps/is-it-down/) checks whether a website is unreachable from external monitoring points, not just from your local connection. This eliminates guesswork and immediately tells you whether you are dealing with a global outage or a local connectivity issue.

{% include blog-cta.html app_slug="is-it-down" %}

### Step-by-Step Diagnosis

1. **Install and enable Is It Down** in Safari's extension settings.
2. **Navigate to the URL** that is not loading — or try to, at least.
3. **Activate the extension** from the toolbar.
4. **Interpret the results:**
   - **Down for everyone** — the site's servers are not responding to requests from any monitoring location. The problem is on their end.
   - **Down just for you** — external monitoring points can reach the site, meaning the problem is with your network, ISP, DNS, or local configuration.
   - **Intermittently available** — the site is responding to some requests but not others, indicating partial failure, overload, or geographic routing issues.

### Systematic Troubleshooting When It Is Down Just for You

If the extension confirms the site is up for everyone else, work through these steps in order:

**Step 1: Try a different browser.** Open the URL in Chrome, Firefox, or another browser. If it loads there, the problem is Safari-specific — likely a cached resource, an extension conflict, or a cookie issue.

**Step 2: Clear Safari data for that site.** Go to Safari > Settings > Privacy > Manage Website Data, find the domain, and remove its data. Then try loading the page again.

**Step 3: Flush your DNS cache.** On Mac, open Terminal and run:
```
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```
On iPhone, toggling Airplane Mode on and off flushes the DNS cache.

**Step 4: Try a different DNS resolver.** Your ISP's DNS servers may be the problem. Switch to a public DNS service: Google (8.8.8.8), Cloudflare (1.1.1.1), or Quad9 (9.9.9.9). On Mac, go to System Settings > Network > Wi-Fi > Details > DNS and add the alternative DNS server.

**Step 5: Disable your VPN.** If you are using a VPN, disconnect and try again. Some VPN exit nodes are blocked by certain websites, and some VPN routing paths have connectivity issues.

**Step 6: Try a different network.** Switch from Wi-Fi to cellular data (or vice versa). If the site loads on one network but not the other, the problem is with the non-working network's routing or DNS.

**Step 7: Check your router.** Restart your router. If other devices on the same network also cannot reach the site, the issue may be with your router's DNS settings or firewall rules.

## Accessing Content When Sites Are Actually Down

Once you have confirmed that a website is genuinely down (or that a page has been permanently removed), the next step is accessing a cached or archived copy of the content.

### How Web Caching and Archiving Work

The internet has several layers of content preservation:

**Browser cache.** Safari stores copies of recently visited pages locally. If you visited the page before it went down, check your browser cache. However, Safari's cache is temporary and automatically purged.

**Search engine cache.** Google, Bing, and other search engines store cached copies of pages they have indexed. Google's cached version is typically a few days to a few weeks old, depending on how frequently the search engine re-crawls the page.

**Web archives.** The Internet Archive's Wayback Machine (web.archive.org) is the largest and most comprehensive web archive, containing over 835 billion web pages captured since 1996. Other archives include the UK Web Archive, the Portuguese Web Archive, and various national library initiatives.

**CDN caches.** Content delivery networks cache copies of pages at edge locations around the world. During some types of outages, CDN-cached versions may still be available even when the origin server is down.

### Using Get Archive to Find Cached Versions

[Get Archive](/apps/get-archive/) searches multiple archive and cache sources simultaneously, saving you the trouble of manually checking Google Cache, the Wayback Machine, and other services individually.

#### Step-by-Step Cache Recovery

1. **Install and enable Get Archive** in Safari.
2. **Navigate to the URL** of the page you need, even if it currently displays an error.
3. **Activate the extension** from the toolbar.
4. **Browse available cached versions** from multiple sources:
   - **Wayback Machine snapshots** — multiple versions captured over time, letting you choose the date closest to when the content was current.
   - **Google Cache** — typically the most recent snapshot, updated within the last few days to weeks.
   - **Other archive services** that may have captured the page.
5. **Select a version** to view the archived copy.

### Advanced Archive Techniques Most People Miss

**Use the Wayback Machine's calendar view.** For frequently crawled sites, the Wayback Machine may have dozens or hundreds of snapshots spanning years. The calendar view (accessed by entering a URL at web.archive.org) shows exactly which dates have captures. Green circles indicate available snapshots.

**Check Wayback Machine CDX API for programmatic access.** If you need to query archive status for many URLs (during a content migration, for example), the Wayback Machine's CDX Server API lets you query availability programmatically:
```
https://web.archive.org/cdx/search/cdx?url=example.com&output=json
```

**Google Cache has a text-only option.** When viewing a Google cached page, click "Text-only version" at the top to load a stripped-down version without images and styling. This loads faster and works even when image CDNs are down.

**Try the `cache:` operator in Google.** Search for `cache:example.com/page` in Google to go directly to the cached version of a specific URL.

**Archive.today (archive.ph) as a secondary source.** This independent archiving service operates separately from the Wayback Machine and sometimes has captures that the Wayback Machine does not, particularly for pages that were actively archived by users.

**Save important pages proactively.** Do not wait for a site to go down. If you find content you may need later, save it yourself. Use [Save as PDF](/apps/save-as-pdf/) for individual pages (see our [PDF saving guide](/blog/safari-extensions/how-to-save-any-web-page-as-a-pdf-in-safari/)) or [Website Downloader](/apps/website-downloader/) for entire sections of a site (see our [guide to downloading websites for offline reading](/blog/safari-extensions/how-to-download-an-entire-website-for-offline-reading/)).

## The Combined Workflow for Website Outages

Here is the full diagnostic and recovery process:

1. **Page fails to load.** Do not immediately assume the worst.
2. **Check with Is It Down.** Determine whether the issue is global or local.
3. **If local:** work through the troubleshooting steps above (different browser, clear cache, flush DNS, try different network).
4. **If global:** use Get Archive to access cached or archived versions of the content you need.
5. **Set up monitoring.** If you need to know when the site comes back, use [Auto-Refresh](/apps/auto-refresh/) to periodically reload the page — see our [auto-scroll and auto-refresh guide](/blog/safari-extensions/how-to-auto-scroll-and-auto-refresh-pages-in-safari/).
6. **Archive for the future.** Once the site recovers, save any critical content using PDF export or offline download tools so you are not dependent on the site's availability next time.

## Reading HTTP Status Codes Like a Professional

When a website fails, the HTTP status code it returns (if any) tells you a lot about the nature of the failure:

**4xx codes (client errors):**
- **400 Bad Request** — malformed request, often caused by corrupted cookies or cache.
- **401/403 Unauthorized/Forbidden** — access denied. The server is working but rejecting your request.
- **404 Not Found** — the page has been removed or the URL is wrong. The server is healthy.
- **410 Gone** — the page has been intentionally and permanently removed.
- **429 Too Many Requests** — you (or your IP) have been rate-limited.

**5xx codes (server errors):**
- **500 Internal Server Error** — generic server-side failure. Something crashed.
- **502 Bad Gateway** — a reverse proxy or load balancer could not get a valid response from the backend server.
- **503 Service Unavailable** — the server is overwhelmed or in maintenance mode.
- **504 Gateway Timeout** — the backend server did not respond within the allowed time.

**No response at all (connection timeout):** The server is not accepting connections on the expected port. This suggests the server process has stopped, the machine is offline, or a firewall is blocking the port.

Understanding these codes helps you estimate how long an outage might last. A 503 during a traffic spike often resolves in minutes. A DNS failure might take hours. A 404 on a page that used to exist means the content has moved or been deleted, and you should look for it in archives immediately.

## Limitations of Web Archives

Archives are powerful but not perfect. Understanding their limitations prevents frustration:

**Robots.txt exclusions.** If a website's robots.txt file disallows archiving, the Wayback Machine and similar services will respect that directive and not crawl or store the content. Some websites retroactively add robots.txt exclusions to remove existing archive captures.

**Dynamic and JavaScript-heavy content.** Single-page applications (SPAs) and heavily JavaScript-dependent sites are poorly captured by traditional web crawlers. The archived version may show a blank page, a loading spinner, or a shell without content.

**Authenticated content.** Anything behind a login wall — social media posts visible only to friends, paywalled articles, private repositories — is not captured by public archives.

**Incomplete captures.** An archived page may be missing images, stylesheets, or other resources that were hosted on a different domain or CDN that was not archived at the same time.

**Temporal gaps.** Not every page is archived at every point in time. The Wayback Machine crawls the web continuously, but popular sites are captured far more frequently than obscure ones. A small personal blog might have captures only once every few months — or not at all.

## FAQ: Questions Even Experienced Users Ask

**Can I check the status of a site that I have never visited?**
Yes. Is It Down checks from external servers, not from your local cache. You can check any URL regardless of your browsing history.

**Do web archives preserve interactive features?**
Generally, no. Forms, search functionality, JavaScript-powered interactions, video players, and real-time data feeds do not work in archived versions. What you get is a static snapshot of the page's rendered HTML and associated assets.

**Is there a way to get notified when a specific site goes down?**
Dedicated uptime monitoring services like UptimeRobot, Pingdom, and StatusCake provide continuous monitoring with alerts via email, SMS, or webhook. These are essential for monitoring your own websites and critical third-party services.

**How do I archive a page myself before it disappears?**
Submit the URL to the Wayback Machine's Save Page Now feature (web.archive.org/save) or archive.today. These services will immediately create a snapshot that persists indefinitely. For local copies, [Save as PDF](/apps/save-as-pdf/) or [Website Downloader](/apps/website-downloader/) save content directly to your device.

**Why does a site load in Chrome but not Safari?**
Possible causes include Safari-specific caching issues, differences in TLS/SSL handling (Safari may reject certificates that Chrome accepts), extension conflicts in Safari, or the website detecting Safari's user agent and serving different content. Clear Safari's data for that site and try again.

For a comprehensive overview of Safari extensions across every category, browse the [best Safari extensions for iPhone and Mac in 2026](/blog/safari-extensions/best-safari-extensions-iphone-mac-2026/) roundup.

## Build Resilience into Your Information Workflow

The internet's availability is not guaranteed, and treating it as such creates a fragile workflow. The most productive approach is defensive: check status immediately when something fails, access cached versions when needed, and proactively archive content you depend on. The tools to do all of this exist and work directly in Safari — the only requirement is having them installed before you need them.
