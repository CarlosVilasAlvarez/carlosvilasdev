import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    slug: z.string(),
    featured: z.boolean({ coerce: true }),
    category: z.string(),
    date: z.date({ coerce: true }),
  }),
});

export const collections = { blog };
