import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // ...
  output: 'server',
  integrations: [react()],

  adapter: netlify({
    devFeatures: {
      images: false,
      environmentVariables: false,
      edgeFunctions: false,
    },
  }),

  vite: {
    plugins: [tailwindcss()],
  },
});
