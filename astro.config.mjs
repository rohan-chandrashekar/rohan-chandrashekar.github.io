import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// For GitHub Pages:
// 1) set site to https://<YOUR_GITHUB_USERNAME>.github.io
// 2) set base to /<YOUR_REPO_NAME>
// Astro needs this so links + assets work correctly on Pages.
const site = process.env.SITE_URL || 'https://rohan-chandrashekar.github.io';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  integrations: [
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
      config: { applyBaseStyles: false }
    })
  ],
  trailingSlash: 'always'
});
