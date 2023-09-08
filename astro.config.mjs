import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import prefetch from '@astrojs/prefetch'

// https://astro.build/config
import react from '@astrojs/react'

const baseUrl = 'https://opdev.site'

// https://astro.build/config
export default defineConfig({
  site: `${baseUrl}`,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    sitemap({
      customPages: [`${baseUrl}`]
    }),
    robotsTxt(),
    prefetch(),
    react()
  ],
  output: 'static'
})
