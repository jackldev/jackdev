import { defineCollection } from 'astro:content'

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
} from 'src/schema'

const seoCollection = defineCollection({ schema: seoSchema })
const navCollection = defineCollection({ schema: navSchema })
const heroCollection = defineCollection({ schema: heroSchema })
const projectCollection = defineCollection({ schema: projectSchema })
const projectsCollection = defineCollection({ schema: projectsSchema })
const bioCollection = defineCollection({ schema: bioSchema })
const toolsCollection = defineCollection({ schema: toolsSchema })
const contactCollection = defineCollection({ schema: contactSchema })
const footerCollection = defineCollection({ schema: footerSchema })
const socialsCollection = defineCollection({ schema: socialsSchema })
const errorCollection = defineCollection({ schema: errorSchema })

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
