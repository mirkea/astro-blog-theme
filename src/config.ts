// Everything site-specific lives here. Edit this file first.

export const SITE = {
  url: "https://example.com",
  title: "Ink",
  description: "A clean Astro theme for a personal site and blog.",
  author: "Your Name",
  lang: "en",
  // Shown next to the logo in the header and footer
  name: "Ink",
  tagline: "Notes on building products, one post at a time.",
};

export const NAV = [
  { text: "Home", href: "/" },
  { text: "Blog", href: "/blog" },
  { text: "Tags", href: "/tags" },
  { text: "About", href: "/about" },
];

// Optional pill button on the right of the header. Set to null to hide it.
export const HEADER_CTA: { text: string; href: string } | null = {
  text: "Get in touch",
  href: "/about#contact",
};

// Icons: "github" | "linkedin" | "x" | "mail" | "rss"
export const SOCIAL = [
  { name: "GitHub", icon: "github", href: "https://github.com/" },
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/" },
  { name: "RSS", icon: "rss", href: "/rss.xml" },
] as const;
