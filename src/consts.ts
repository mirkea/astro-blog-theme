// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Mirkea's Blog";
export const SITE_DESCRIPTION = "PM by trade. Builder by choice.";

export const AUTHOR_NAME = "Mirkea";
export const AUTHOR_FULL_NAME = "Braescu Mircea Cristian";

export const HERO_HEADLINE_LINE1 = "PM by trade.";
export const HERO_HEADLINE_LINE2 = "Builder by choice.";
export const HERO_BIO =
  "10 years in product, 20 in tech. Now I'm starting over - building a B2C product from idea to launch, in public. Everything I learn ends up here.";

export const ABOUT_TAGLINE =
  "A product manager with 10 years of PM experience and 20 years of technical depth - bridging discovery, design, and engineering.";

export const ABOUT_BIO: string[] = [
  `I'm a Product Manager who grew from Flash developer → UI designer → front-end developer → PM through hands-on progression. I spent 5+ years as delivery PM on <a href="https://www.verified.eu/" target="_blank">verified.eu</a> a B2B RegTech platform that was acquired for €31M, then led product discovery across multiple AI-native and SaaS products as CPO at a product studio.`,
  `I work at the intersection of product, design, and engineering: fluent in API docs, DB schemas, and front-end code. I build AI-assisted discovery workflows and use rapid prototyping as my primary alignment tool. I think in systems - user flows, data structures, operational models - not just features.`,
];

export const ABOUT_SKILLS = [
  { name: "Product Discovery", level: 95, icon: "search" },
  { name: "Rapid Prototyping", level: 95, icon: "code" },
  { name: "Production Management", level: 95, icon: "list" },
  { name: "Stakeholder Alignment", level: 90, icon: "users" },
  { name: "UX / Wireframing", level: 90, icon: "pen" },
  { name: "HTML / CSS", level: 95, icon: "file-code" },
  { name: "JavaScript", level: 75, icon: "braces" },
  { name: "React", level: 80, icon: "atom" },
  { name: "AI Workflows", level: 80, icon: "bot" },
] as const;

export type SkillIcon = (typeof ABOUT_SKILLS)[number]["icon"];

export const CONTACT_EMAIL = "your-email@example.com";
export const CONTACT_BLURB =
  "I'm always open to new opportunities and collaborations. If you'd like to work together or just say hello, feel free to reach out.";

export interface SocialLink {
  name: string;
  profileUrl: string;
  shareUrlTemplate?: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Twitter",
    profileUrl: "https://twitter.com/your-handle",
    shareUrlTemplate: "https://twitter.com/intent/tweet?text={title}&url={url}",
  },
  {
    name: "Instagram",
    profileUrl: "https://instagram.com/your-handle",
  },
  {
    name: "GitHub",
    profileUrl: "https://github.com/your-username",
  },
  {
    name: "LinkedIn",
    profileUrl: "https://www.linkedin.com/in/your-profile/",
    shareUrlTemplate:
      "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}",
  },
  {
    name: "Facebook",
    profileUrl: "https://facebook.com/your-profile",
    shareUrlTemplate: "https://www.facebook.com/sharer/sharer.php?u={url}",
  },
];
