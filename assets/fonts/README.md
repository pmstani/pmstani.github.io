# Self-hosted webfonts

These files are served locally instead of via `fonts.googleapis.com`.

## Why

Both `assets/css/home.scss` and `assets/css/style.scss` used to begin with:

```scss
@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:...&family=Newsreader:...');
```

A CSS `@import` inside a stylesheet is invisible to the browser's preload scanner, so the
font CSS could not be discovered until `home.css` had downloaded and parsed. That produced
a four-hop render-blocking chain across three origins before anything could paint:

```
pstan.fr/  ->  assets/css/home.css  ->  fonts.googleapis.com/css2  ->  fonts.gstatic.com
```

PageSpeed Insights measured the homepage at FCP / LCP / TTI / Speed Index of **3,910 ms
each on mobile** — one blocking chain gating every metric — and estimated **3,410 ms** of
savings from removing it. The LCP element is the `<h1>`, i.e. text, so the chain was the
whole mobile performance gap.

Serving the fonts from the same origin collapses the chain to a single hop on an
already-warm connection.

## What is here

The same 21 woff2 files Google serves for the exact family and axis request the site was
already making, with Google's `unicode-range` subsetting preserved. An en-US visitor
downloads only the two `-latin` Newsreader subsets (~280 KB); the cyrillic, greek and
vietnamese subsets are declared but never fetched.

Naming: `<family>-<style>-<weight>-<subset>.woff2`

| Family | Styles | Weights |
|---|---|---|
| Newsreader | roman, italic | variable `300 600`, `opsz 6..72` |
| Old Standard TT | roman, italic | 400, 700 (roman only for 700) |

Newsreader is a variable font and `home.scss` sets `font-optical-sizing: auto`, so the
`opsz` axis is deliberately retained rather than subset away.

The `@font-face` rules live in `_sass/_fonts.scss` and are inlined into both stylesheets
at build time via `@import 'fonts'` — a Sass partial import, not a CSS one, so it costs no
extra request.

## Licensing

Both families are licensed under the **SIL Open Font License 1.1**, which permits
self-hosting and redistribution.

- Newsreader — Production Type. <https://fonts.google.com/specimen/Newsreader>
- Old Standard TT — Alexey Kryukov. <https://fonts.google.com/specimen/Old+Standard+TT>

Full licence text: <https://openfontlicense.org/>

## Regenerating

If the font request ever changes, re-fetch `https://fonts.googleapis.com/css2?...` with a
modern browser User-Agent (the response varies by UA — an old UA yields TTF instead of
woff2), download each referenced woff2, and rewrite the `src:` URLs to `/assets/fonts/`.
Keep the `unicode-range` declarations intact.
