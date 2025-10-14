import { z } from 'astro:content'

export const seoSchema = z.object({
  metaSlug: z.string(),
  metaTitle: z.string(),
  metaDescription: z.string(),
  metaAuthor: z.string(),
  metaSiteurl: z.string(),
  metaImage: z.string(),
  metaAlt: z.string(),
  metaKeywords: z.string(),
  metaType: z.string(),
  metaTwitter: z.string()
})

export const navSchema = z.object({
  id: z.number(),
  slugs: z.string(),
  title: z.string(),
  link: z.string()
})

export const heroSchema = z.object({
  slugs: z.string(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  link: z.string(),
  text: z.string()
})

export const projectSchema = z.object({
  slugs: z.string(),
  title: z.string(),
  subtitle: z.string(),
  link: z.string(),
  text: z.string()
})

export const projectsSchema = z.object({
  id: z.number(),
  date: z.date(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  techs: z.array(z.string()),
  image: z.object({
    src: z.string(),
    alt: z.string(),
    width: z.number(),
    height: z.number()
  }),
  link: z.string()
})

export const bioSchema = z.object({
  slugs: z.string(),
  title: z.string(),
  description: z.string()
})

export const toolsSchema = z.object({
  id: z.number(),
  title: z.string(),
  tools: z.array(z.string())
})

export const contactSchema = z.object({
  slugs: z.string(),
  title: z.string(),
  subtitle: z.string()
})

export const footerSchema = z.object({
  slugs: z.string(),
  title: z.string(),
  description: z.string(),
  copy: z.string(),
  link: z.string()
})

export const socialsSchema = z.object({
  id: z.number(),
  title: z.string(),
  link: z.string(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
    width: z.number(),
    height: z.number()
  })
})

export const errorSchema = z.object({
  slugs: z.string(),
  title: z.string(),
  subtitle: z.string(),
  seoTitle: z.string(),
  seoDescription: z.string(),
  link: z.string(),
  text: z.string()
})
