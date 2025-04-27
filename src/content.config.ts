import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    slug: z.string(),
    date: z.date({ coerce: true }),
  }),
});

export const collections = { blog };
