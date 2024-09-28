// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  env:{
    schema: {
      SECRET_KEY: envField.string({ context:'server', access:'secret'})
    }
  },

  integrations: [tailwind()],
  output: 'server',
  adapter: vercel()
});