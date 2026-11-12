import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { NOINDEX_PATHS } from './src/data/noindex.js';

// Placeholder domain — swap to production domain when DNS/Cloudflare Pages are connected
export default defineConfig({
  output: 'static',
  site: 'https://daoismhub.com',
  integrations: [sitemap({ filter: (page) => !NOINDEX_PATHS.includes(new URL(page).pathname) })],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
