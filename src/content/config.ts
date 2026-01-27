import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    outlet: z.string().optional(),
    url: z.string().url().optional(),
    description: z.string().optional(),

    // NEW:
    type: z.enum(["feature", "interview", "review", "fiction"]),
  }),
});

const archive = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { writing, archive };
