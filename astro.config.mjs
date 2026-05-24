import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://fieldhealthafrica.org',
  integrations: [
    tailwind(),
    sitemap({
      // Exclude pages that shouldn't be indexed
      filter: (page) =>
        !page.includes('/checkout-success') &&
        !page.includes('/checkout-cancelled'),
    }),
  ],
});
