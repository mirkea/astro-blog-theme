import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [
    mdx(),
    // The /ui kit page stays out of the sitemap
    sitemap({ filter: (page) => !/\/ui\/?$/.test(page) }),
  ],
  vite: { plugins: [tailwindcss()] },
});
