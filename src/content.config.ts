import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

import {
  seoSchema,
  navSchema,
  heroSchema,
  projectSchema,
  projectsSchema,
  bioSchema,
  toolsSchema,
  contactSchema,
  footerSchema,
  socialsSchema,
  errorSchema
} from 'schema/index.ts'

const seoCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/seo' }),
  schema: seoSchema
})
const navCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/nav' }),
  schema: navSchema
})
const heroCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/hero' }),
  schema: heroSchema
})
const projectCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/project' }),
  schema: projectSchema
})
const projectsCollection = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/projects'
  }),
  schema: projectsSchema
})
const bioCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/bio' }),
  schema: bioSchema
})
const toolsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/tools' }),
  schema: toolsSchema
})
const contactCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/contact' }),
  schema: contactSchema
})
const footerCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/footer' }),
  schema: footerSchema
})
const socialsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/socials' }),
  schema: socialsSchema
})
const errorCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/error' }),
  schema: errorSchema
})

export const collections = {
  seo: seoCollection,
  nav: navCollection,
  hero: heroCollection,
  project: projectCollection,
  projects: projectsCollection,
  bio: bioCollection,
  tools: toolsCollection,
  contact: contactCollection,
  footer: footerCollection,
  socials: socialsCollection,
  error: errorCollection
}
