import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
import react from '@astrojs/react'

const baseUrl = 'https://codezen.work'

// https://astro.build/config
export default defineConfig({
  site: `${baseUrl}`,
  trailingSlash: 'never',
  integrations: [
    sitemap({
      customPages: [`${baseUrl}`]
    }),
    robotsTxt(),
    react({
      include: ['**/react/*']
    })
  ],
  prefetch: true,
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static'
})
