import { defineConfig } from 'astro/config';

// Site URL placeholder — set to production domain when known
export default defineConfig({
  output: 'static',
  site: 'https://example.com',
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
