import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Placeholder domain — swap to production domain when DNS/Cloudflare Pages are connected
export default defineConfig({
  output: 'static',
  site: 'https://dao-7g5.pages.dev',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
