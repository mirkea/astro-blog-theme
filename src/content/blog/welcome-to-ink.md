---
title: "Welcome to Ink"
description: "What the theme gives you, and the three files to edit first."
pubDate: 2026-11-02
tags: ["theme", "astro"]
---

Ink is a small Astro theme for a personal site with a blog. It has one look, built from a handful of tokens, and one page, [/ui](/ui), that shows every element it is allowed to use.

## Start here

1. **`src/config.ts`**: your name, navigation, social links and the header button.
2. **`src/styles/tokens.css`**: colours, fonts, radii and spacing. Change the look here.
3. **`src/content/blog/`**: your posts, in Markdown or MDX.

## How the pieces fit

Pages are built from sections. A section is a full-width band, white or grey, with a two-tone headline on top:

> The first line says what it is. The second line, in grey, says why it matters.

Everything inside a section is a component from `src/components/ui/`: buttons, pills, cards, stat tiles, steps, forms. If a page needs something new, add it to the kit and to `/ui` first, then use it.
