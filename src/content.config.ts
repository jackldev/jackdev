import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'

import {
  bioSchema,
  contactSchema,
  errorSchema,
  footerSchema,
  heroSchema,
  navSchema,
  projectSchema,
  seoSchema,
  socialsSchema,
  templatesSchema,
  toolsSchema,
  websitesSchema
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
const websitesCollection = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/websites'
  }),
  schema: websitesSchema
})
const templatesCollection = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/templates'
  }),
  schema: templatesSchema
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
  websites: websitesCollection,
  templates: templatesCollection,
  bio: bioCollection,
  tools: toolsCollection,
  contact: contactCollection,
  footer: footerCollection,
  socials: socialsCollection,
  error: errorCollection
}
