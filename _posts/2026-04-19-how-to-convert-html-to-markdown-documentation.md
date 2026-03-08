---
layout: post
title: "How to Convert HTML to Markdown for Documentation"
description: "Learn how to convert HTML content to clean Markdown for documentation, wikis, README files, and static sites. Save time with automated conversion tools."
date: 2026-04-19
categories: [developer-tools]
tags: [html, markdown, documentation, conversion]
silo: developer-tools
pillar: developer-tools
related_apps: [html-to-markdown]
---

John Gruber released the original Markdown specification in 2004 as a text-to-HTML conversion tool for web writers. Two decades later, Markdown has become the de facto standard for technical documentation across the software industry. GitHub README files, Confluence wikis, Notion pages, Jekyll and Hugo sites, Docusaurus documentation, Jupyter notebooks, Slack messages, Discord chats — all of them support Markdown as a primary input format. Stack Overflow's 2023 developer survey found that over 87% of developers use Markdown at least weekly.

But a persistent problem remains: the vast majority of existing web content is HTML, not Markdown. Blog posts, API documentation, knowledge base articles, CMS-rendered pages, email templates, and legacy wiki content all exist as HTML. When you need to bring that content into a Markdown-based workflow — whether for a static site migration, documentation consolidation, or content archiving — you face a conversion problem that ranges from trivial for simple content to deeply complex for real-world HTML.

## Understanding the Conversion Problem

HTML to Markdown conversion appears simple on the surface. Replace `<h1>` with `#`, replace `<strong>` with `**`, replace `<a href="...">` with `[text](url)`. A basic regex script can handle these cases in minutes.

But real-world HTML is not a clean mapping exercise. Consider what a typical blog post from a CMS like WordPress actually contains:

```html
<div class="entry-content">
  <p><span style="font-size: 18px; color: #333;">Welcome to our
  <strong>comprehensive guide</strong></span> on deploying
  <a href="/deploy" class="internal-link" data-tracking="cta-1"
  onclick="trackClick('deploy-link')">microservices</a>.</p>

  <div class="wp-block-image aligncenter">
    <figure>
      <img src="https://cdn.example.com/wp-content/uploads/2024/03/
      architecture-diagram-1024x768.jpg"
      alt="" width="1024" height="768"
      class="wp-image-4521" loading="lazy"
      srcset="https://cdn.example.com/wp-content/uploads/2024/03/
      architecture-diagram-1024x768.jpg 1024w,
      https://cdn.example.com/wp-content/uploads/2024/03/
      architecture-diagram-300x225.jpg 300w"
      sizes="(max-width: 1024px) 100vw, 1024px">
      <figcaption class="wp-element-caption">
        Figure 1: Service architecture</figcaption>
    </figure>
  </div>

  <table class="wp-block-table has-fixed-layout">
    <thead><tr>
      <th rowspan="2">Service</th>
      <th colspan="2">Endpoints</th>
    </tr>
    <tr><th>REST</th><th>gRPC</th></tr></thead>
    <tbody>
      <tr><td>Auth</td><td>4</td><td>2</td></tr>
      <tr><td>Payments</td><td>8</td><td>5</td></tr>
    </tbody>
  </table>
</div>
```

A proper conversion needs to:

- Strip the wrapping `<div>` and `<span>` elements while preserving their text content
- Remove inline styles, data attributes, onclick handlers, and CSS classes
- Convert the `<figure>` structure to a Markdown image, preserving the caption
- Choose the correct image URL from the `srcset` (probably the largest one)
- Handle the table's `rowspan` and `colspan`, which Markdown tables do not support
- Generate meaningful alt text if the original `alt` attribute is empty
- Convert relative URLs to absolute URLs if the content is being moved to a different domain

This complexity is why regex-based conversion scripts inevitably fail on production content. You need a proper HTML parser that builds a DOM tree, walks it, and emits Markdown with awareness of context and nesting.

## The HTML-to-Markdown Element Mapping

Understanding the mapping rules helps you predict conversion output and troubleshoot issues:

### Direct Mappings (Reliable Conversion)

| HTML | Markdown | Notes |
|---|---|---|
| `<h1>` through `<h6>` | `#` through `######` | ATX-style headings |
| `<p>` | Blank line separation | Paragraphs are implicit in Markdown |
| `<strong>` or `<b>` | `**text**` | Bold |
| `<em>` or `<i>` | `*text*` | Italic |
| `<a href="url">` | `[text](url)` | Inline links |
| `<img src="url" alt="desc">` | `![desc](url)` | Images |
| `<ul>` with `<li>` | `- item` | Unordered lists |
| `<ol>` with `<li>` | `1. item` | Ordered lists |
| `<blockquote>` | `> text` | Block quotes |
| `<code>` | `` `code` `` | Inline code |
| `<pre><code>` | ```` ``` ```` fenced block | Code blocks |
| `<hr>` | `---` | Horizontal rules |

### Lossy Mappings (Information Lost in Conversion)

| HTML | Markdown Reality | What Gets Lost |
|---|---|---|
| `<table>` with `colspan`/`rowspan` | Pipe tables only | Cell spanning, alignment |
| `<sup>` / `<sub>` | No standard equivalent | Superscript/subscript formatting |
| `<details>` / `<summary>` | No standard equivalent | Collapsible sections |
| `<dl>` / `<dt>` / `<dd>` | No standard equivalent | Definition lists |
| `<mark>` | No standard equivalent | Highlighted text |
| `<iframe>` | Dropped entirely | Embedded content |
| Inline styles | Dropped entirely | Colors, fonts, sizes |
| CSS classes | Dropped entirely | Visual styling |

### Platform-Extended Mappings

Some Markdown flavors extend the standard with HTML-like features:

**GitHub Flavored Markdown (GFM):**
```markdown
- [x] Checked task item
- [ ] Unchecked task item

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |

~~Strikethrough text~~

```python
print("Syntax-highlighted code block")
```​
```

**Markdown with HTML passthrough (Jekyll, Hugo, most static site generators):**
```markdown
Regular Markdown here.

<details>
<summary>Click to expand</summary>

Content inside a collapsible section. **Markdown works here** in most renderers.

</details>

<sup>Superscript</sup> and <sub>subscript</sub> via raw HTML.
```

Good conversion tools let you choose the target Markdown flavor so the output matches your destination platform's capabilities.

## Command-Line Conversion Tools

For batch processing and scripting, several command-line tools handle HTML-to-Markdown conversion programmatically.

### Pandoc: The Universal Document Converter

Pandoc is the Swiss Army knife of document conversion. It handles conversions between dozens of formats, including HTML to Markdown.

```bash
# Install on macOS
brew install pandoc

# Convert a single HTML file to Markdown
pandoc -f html -t markdown -o output.md input.html

# Convert from a URL
curl -s https://example.com/article | pandoc -f html -t markdown -o article.md

# Convert to GitHub Flavored Markdown specifically
pandoc -f html -t gfm -o output.md input.html

# Convert with ATX-style headers (# instead of underline style)
pandoc -f html -t markdown --atx-headers -o output.md input.html

# Convert and wrap lines at 80 characters
pandoc -f html -t markdown --wrap=auto --columns=80 -o output.md input.html

# Batch convert all HTML files in a directory
for f in *.html; do
  pandoc -f html -t gfm -o "${f%.html}.md" "$f"
done
```

Pandoc's strength is its format awareness. It understands the semantic differences between Markdown flavors and can target CommonMark, GFM, MultiMarkdown, PHP Markdown Extra, and others specifically.

### Turndown (JavaScript/Node.js)

If you work in a JavaScript ecosystem, Turndown is the go-to library:

```bash
npm install turndown
```

```javascript
const TurndownService = require('turndown');
const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-'
});

// Add GFM plugin for tables and strikethrough
const gfm = require('turndown-plugin-gfm');
turndown.use(gfm.gfm);

// Custom rule: convert <figure> with <figcaption> to image with title
turndown.addRule('figureWithCaption', {
  filter: function(node) {
    return node.nodeName === 'FIGURE' &&
           node.querySelector('img') &&
           node.querySelector('figcaption');
  },
  replacement: function(content, node) {
    const img = node.querySelector('img');
    const caption = node.querySelector('figcaption');
    const alt = img.getAttribute('alt') || caption.textContent;
    const src = img.getAttribute('src');
    return `\n\n![${alt}](${src})\n*${caption.textContent}*\n\n`;
  }
});

const html = '<h1>Title</h1><p>Paragraph with <strong>bold</strong>.</p>';
console.log(turndown.turndown(html));
// Output:
// # Title
//
// Paragraph with **bold**.
```

Turndown's plugin system makes it particularly useful when you need to handle custom HTML structures (WordPress blocks, CMS-specific markup, component-based HTML) with tailored conversion rules.

### html2text (Python)

For Python workflows and scripting:

```bash
pip install html2text
```

```python
import html2text

converter = html2text.HTML2Text()
converter.body_width = 0         # Don't wrap lines
converter.protect_links = True   # Don't break long URLs
converter.unicode_snob = True    # Use Unicode characters instead of ASCII
converter.skip_internal_links = False
converter.inline_links = True    # Inline links vs reference-style

html_content = """
<h2>API Authentication</h2>
<p>Pass your API key in the <code>Authorization</code> header:</p>
<pre><code>curl -H "Authorization: Bearer YOUR_KEY" https://api.example.com/v1/users</code></pre>
<ul>
  <li>Keys expire after <strong>90 days</strong></li>
  <li>Rate limit: 1000 requests/hour</li>
</ul>
"""

markdown = converter.handle(html_content)
print(markdown)
```

### Converting on Mobile

For mobile-first workflows — inspecting a page on your phone and wanting to grab its content as Markdown immediately — [HTML to Markdown](/apps/html-to-markdown/) provides a direct conversion path without setting up a development environment:

1. **Input HTML** — paste HTML, enter a URL, or share a page directly from Safari via the share sheet
2. **Convert** — the app parses the HTML and generates clean Markdown
3. **Review** — check the output, particularly tables and code blocks
4. **Export** — copy to clipboard, save as `.md`, or share to Files, Notes, or any other app

{% include blog-cta.html app_slug="html-to-markdown" %}

## Real-World Conversion Workflows

### WordPress to Jekyll/Hugo Migration

This is one of the most common conversion scenarios. A WordPress site with hundreds of posts needs to move to a static site generator.

**Step 1: Export from WordPress.**

WordPress has a built-in export tool (**Tools > Export**) that generates an XML file containing all posts and pages. However, this XML contains HTML content, not Markdown.

```bash
# Alternative: Use wp-cli to export posts as individual HTML files
wp post list --post_type=post --format=ids | \
  xargs -I {} wp post get {} --field=content > posts/{}.html
```

**Step 2: Convert HTML to Markdown.**

```bash
# Using Pandoc for batch conversion
for f in posts/*.html; do
  # Extract filename without extension
  name=$(basename "$f" .html)

  # Convert and add YAML front matter
  echo "---" > "markdown/${name}.md"
  echo "layout: post" >> "markdown/${name}.md"
  echo "---" >> "markdown/${name}.md"
  echo "" >> "markdown/${name}.md"
  pandoc -f html -t gfm "$f" >> "markdown/${name}.md"
done
```

**Step 3: Handle images.**

Markdown files reference images by URL. If you are moving off WordPress hosting, download all images and update the references:

```bash
# Extract image URLs from all Markdown files
grep -ohP '!\[.*?\]\(\K[^)]+' markdown/*.md | sort -u > image_urls.txt

# Download all images
mkdir -p assets/images
while read url; do
  filename=$(basename "$url" | sed 's/?.*//')
  curl -sL "$url" -o "assets/images/${filename}"
done < image_urls.txt

# Replace WordPress URLs with local paths in Markdown files
sed -i '' 's|https://cdn.example.com/wp-content/uploads/[0-9]*/[0-9]*/|/assets/images/|g' markdown/*.md
```

**Step 4: Clean up front matter.**

Jekyll and Hugo require specific front matter fields. Write a script to add titles, dates, categories, and tags from the WordPress export data.

### API Documentation to Markdown

Many API documentation platforms (Swagger UI, Redoc, custom HTML docs) need their content extracted into Markdown for inclusion in a README, a wiki, or a documentation site.

The challenge with API docs is preserving code blocks and parameter tables accurately. A conversion pipeline:

```python
import html2text
import requests
from bs4 import BeautifulSoup

# Fetch the documentation page
response = requests.get('https://docs.example.com/api/v2/users')
soup = BeautifulSoup(response.text, 'html.parser')

# Extract only the documentation content, skip navigation and footer
content_div = soup.select_one('.api-content, .documentation-body, main')

if content_div:
    converter = html2text.HTML2Text()
    converter.body_width = 0
    converter.protect_links = True

    markdown = converter.handle(str(content_div))

    with open('api-users.md', 'w') as f:
        f.write(markdown)
```

### Web Content Archival

For permanently saving web articles that might disappear (blog posts on platforms that shut down, documentation for deprecated tools):

```bash
# Fetch page, extract main content, convert to Markdown, and save
# Using readability-cli and pandoc together
npm install -g @phalanks/readability-cli

# readability-cli extracts the article content, removing navigation/ads
readable "https://example.com/important-article" | \
  pandoc -f html -t gfm -o archived/important-article.md

# Add metadata header
sed -i '' "1i\\
---\\
source: https://example.com/important-article\\
archived: $(date +%Y-%m-%d)\\
---\\
" archived/important-article.md
```

## Handling Edge Cases That Break Converters

### Nested Lists

HTML allows arbitrary nesting of lists. Markdown requires consistent indentation (typically 2 or 4 spaces) for each nesting level:

```html
<ul>
  <li>First level
    <ul>
      <li>Second level
        <ol>
          <li>Third level, ordered</li>
          <li>Another item</li>
        </ol>
      </li>
    </ul>
  </li>
</ul>
```

Expected Markdown output:
```markdown
- First level
  - Second level
    1. Third level, ordered
    2. Another item
```

Most conversion tools handle this correctly, but watch for incorrect indentation (which breaks the nesting) and mixed list types (which some converters normalize to a single type).

### Tables with Complex Content

Markdown tables only support inline content — you cannot put block-level elements (paragraphs, code blocks, lists) inside a table cell. When converting HTML tables that contain these elements, content is either flattened or lost.

**Workaround:** For tables with complex cell content, consider converting them to definition lists or restructuring the information as a series of headings and paragraphs rather than forcing it into a Markdown table.

### HTML Entities

HTML entities (`&amp;`, `&lt;`, `&gt;`, `&nbsp;`, `&#8220;`) need to be decoded to their Unicode equivalents during conversion. Most tools handle standard entities, but some miss numeric entities or platform-specific characters.

### Embedded Code with HTML Characters

Code blocks that contain HTML characters (`<div>`, `&amp;`) are particularly tricky. The converter must recognize that angle brackets inside `<pre><code>` blocks are literal content, not markup to be parsed:

```html
<pre><code class="language-html">&lt;div class="container"&gt;
  &lt;p&gt;Hello&lt;/p&gt;
&lt;/div&gt;</code></pre>
```

Should convert to:
````markdown
```html
<div class="container">
  <p>Hello</p>
</div>
```
````

Not to a parsed and stripped version that loses the code content.

## Post-Conversion Quality Checklist

After converting any batch of HTML to Markdown, verify:

- [ ] **Headings preserved.** All heading levels are correct and none were merged or dropped
- [ ] **Links work.** Internal links use the correct relative paths for the new site structure. External links are intact.
- [ ] **Images render.** Image paths are valid and images display correctly. Alt text is present.
- [ ] **Code blocks are fenced.** Inline code uses backticks. Block code uses triple backticks with language hints.
- [ ] **Tables render.** Column alignment is correct. No cells are missing or merged incorrectly.
- [ ] **Lists are properly nested.** Indentation produces the intended hierarchy.
- [ ] **No raw HTML remnants.** Stray `<div>`, `<span>`, or `<br>` tags from the source HTML have been cleaned up.
- [ ] **Special characters are correct.** Em dashes, curly quotes, and non-ASCII characters display properly.
- [ ] **Front matter is complete.** Title, date, categories, and other metadata are present and formatted for the target platform.

## Things Most Conversion Guides Don't Tell You

**The cleanest conversion comes from the simplest HTML.** If you have control over the source HTML, strip it to semantic elements before converting. Remove all classes, inline styles, and wrapper divs. The conversion of `<h2>Title</h2><p>Content</p>` is always perfect; the conversion of `<div class="block-wrapper"><div class="block-inner"><h2 class="block-title" style="margin: 0">Title</h2></div></div>` is always a gamble.

**CommonMark is your safest target.** If you are not sure which Markdown flavor your destination supports, target CommonMark. It is the most widely supported specification and avoids platform-specific extensions that might not render correctly elsewhere.

**Round-trip fidelity is a myth.** Converting HTML to Markdown and back to HTML will not produce identical HTML. Semantic structure is preserved, but attribute ordering, whitespace, and non-semantic elements change. Do not expect byte-identical round trips.

**Markdown can contain raw HTML.** When a conversion is lossy (complex tables, `<details>` sections, `<sup>` elements), the pragmatic solution is often to leave those specific sections as raw HTML within the Markdown file. Most renderers pass through HTML blocks untouched.

**Automation works best with consistent source formatting.** If you are converting 500 blog posts from the same CMS, write a conversion script tailored to that CMS's specific HTML patterns. A generic converter will produce mediocre results that require extensive manual cleanup.

## Related Workflows

HTML-to-Markdown conversion fits within a broader developer content workflow. Understanding the HTML structure before converting it is much easier with proper [inspection and debugging tools for Safari](/blog/best-ways-inspect-debug-websites-safari/), which let you identify the content-bearing elements and skip the layout wrappers. Once your content is in Markdown and published, [on-page SEO analysis](/blog/practical-guide-on-page-seo-analysis/) helps ensure the published pages perform well in search rankings. And the content sources you discover through your [tech news reading system](/blog/how-to-keep-up-tech-news-hacker-news-rss/) are often the pages most worth converting and archiving for permanent reference.

For developers who maintain websites alongside apps, the [HTML to Markdown](/apps/html-to-markdown/) workflow also connects to documentation for App Store listings — clean Markdown is the easiest format for drafting app descriptions and changelogs before pasting them into App Store Connect.
