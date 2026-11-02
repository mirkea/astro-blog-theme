---
title: "Writing posts"
description: "Frontmatter, images, code and the rest of the Markdown you can use."
pubDate: 2026-10-20
tags: ["writing", "markdown"]
image: "/images/cover.svg"
---

Every post is a Markdown file in `src/content/blog/`. The file name becomes the URL.

## Frontmatter

```yaml
---
title: "Writing posts"
description: "Shown on cards and in search results."
pubDate: 2026-10-20
tags: ["writing"]
image: "/images/cover.jpg" # optional
draft: true # optional, hidden from the built site
---
```

## Text

Paragraphs, **bold**, *italic*, `inline code` and [links](/blog) all follow the ink palette. Lists work as you expect:

- One idea per bullet
- Short lines read faster
- Numbers go in a stat tile, not a sentence

### Quotes

> Say the important thing once, plainly.

### Tables

| Element | Where it lives |
| --- | --- |
| Colours | `tokens.css` |
| Components | `ui.css` and `components/ui/` |
| Overview | `/ui` |
