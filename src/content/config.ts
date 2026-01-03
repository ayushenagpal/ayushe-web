import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    published: z.coerce.date(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = { writing };


