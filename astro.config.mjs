import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Static output — built by Netlify (npm run build) and served from dist/.
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