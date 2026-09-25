// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// Served as a GitHub Pages project site under the olifro.st user site.
// https://astro.build/config
export default defineConfig({
  site: 'https://olifro.st',
  base: '/jetrol',
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
