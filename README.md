# Ink, an Astro theme

A clean theme for a personal site with a blog, built on [Astro](https://astro.build) and Tailwind CSS 4.

- **Two-tone headlines.** The first line in ink, the second in grey.
- **One shape language.** Pill buttons and tabs, borderless rounded cards, grey and white section bands.
- **A UI kit page.** [`/ui`](src/pages/ui.astro) shows every element the site may use: tokens, type, buttons, pills, tabs, cards, photo cards, stat tiles, a report, a comparison table, a call-to-action card with steps, forms and post cards. Pages compose these pieces and nothing else.
- **Dark mode from the same tokens.** No second design: every colour is a token, and dark mode redefines the tokens.
- **Blog included.** Markdown and MDX posts, tags, an archive, RSS, a sitemap and Open Graph tags.
- **No JavaScript framework.** Plain Astro components. A few lines of script handle the theme toggle, the mobile menu, tabs and the fade-in on scroll.

## Quick start

```bash
npm create astro@latest -- --template mirkea/astro-blog-theme
cd your-site
npm run dev
```

Or clone this repo and run `npm install && npm run dev`. The site runs at http://localhost:4321 and the kit at http://localhost:4321/ui.

## Make it yours

| File | What to change |
| --- | --- |
| `src/config.ts` | Site name, URL, author, navigation, social links, the header button |
| `src/styles/tokens.css` | Colours (light and dark), fonts, radii, widths, spacing |
| `src/components/Logo.astro` | Your mark (keep `currentColor` so it follows the theme) |
| `src/content/blog/` | Your posts |
| `src/pages/index.astro`, `about.astro` | Your own copy |

## How it is built

```
src/
  styles/tokens.css      design tokens: the only place colours and radii are defined
  styles/ui.css          component classes (.btn, .card, .pill, .seg, .stat ...)
  components/ui/         Astro components on top of those classes
  pages/ui.astro         every element on one page
  layouts/Base.astro     head, header, footer, theme script
  layouts/Post.astro     a blog post
  lib/posts.ts           post helpers: sorting, tags, reading time
```

The rule: **pages compose, they do not restyle.** If a page needs something the kit lacks, add it to `ui.css` or `components/ui/`, show it on `/ui`, then use it.

### Components

| Component | Use |
| --- | --- |
| `Section` | A full-width band. `tone="surface"` for grey, `width="narrow"` for a reading column |
| `SectionHeading` | Eyebrow, two-tone title (`title` + `title2`), lead. `size` = display, title or title-sm |
| `Button` | Pill button or link. `variant` = primary, secondary, invert, link; `size` = sm, md, lg |
| `Pill` | Small label. `variant` = default, quiet, ink, float (on photos) |
| `Segmented` | Pill tabs on a grey track; shows `data-seg-panel` blocks for the picked tab |
| `Card` | Rounded card. `tone` = surface, white, outline, ink; optional icon, title, text, meta, link |
| `MediaCard` | Photo with a floating label and a frosted number tile |
| `Stat` | Number tile with a label and an optional change line |
| `CheckList` | Checks, rings or crosses |
| `Steps` | Numbered rows with hairlines; works inside an ink card |
| `Meter` | One bar in a breakdown |
| `CompareTable` | Rows compared across columns; `true` renders the ink check |
| `Field` | Label, input / textarea / select, hint or error |
| `Person` | Avatar with a line of text |
| `Icon` | Solar icons (Linear by default). Kit names live in `src/lib/icons.ts`; any Solar name works |

### Colour tokens

`--ink`, `--ink-2`, `--ink-3` for text; `--canvas`, `--surface`, `--surface-2`, `--line` for backgrounds and hairlines; `--on-ink`, `--on-ink-2` for text on the ink card; `--positive` and `--negative` for meaning only. They are also Tailwind colours: `bg-surface`, `text-ink-2`, `border-line`.

## Deploy

`npm run build` writes a static site to `dist/`. It runs on any static host: GitHub Pages, Cloudflare Pages, Netlify, Vercel. Set `SITE.url` in `src/config.ts` first, so the sitemap, RSS and canonical links are right.

## Credits

Started as a fork of [astro-blog](https://github.com/williamcachamwri/astro-blog) by Lê Vĩnh Khang, then rebuilt. Icons: [Solar](https://icon-sets.iconify.design/solar/) by 480 Design (CC BY 4.0), read at build time from `@iconify-json/solar`. Fonts: Plus Jakarta Sans and Inter, from Google Fonts.

## Licence

MIT. See [LICENSE.md](LICENSE.md).
