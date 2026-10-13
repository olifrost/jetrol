// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// Served from the custom domain www.jetrol.vip (GitHub Pages, see public/CNAME).
// https://astro.build/config
export default defineConfig({
  site: 'https://www.jetrol.vip',
  base: '/',
  image: {
    // Generate a responsive srcset/sizes for every <Image> so the original
    // multi-thousand-pixel source files are never served raw.
    layout: 'constrained'
  },
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});
