import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
});

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    images: z.array(
      z.object({
        url: z.string(),
        alt: z.string()
      })
    ),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    skills: z.array(z.string())
  })
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection
};