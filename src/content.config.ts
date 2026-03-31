import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.date(),
    cover: image().optional(),
    tags: z.array(z.string()).optional(),
    bgm: z.string().optional(),
    background: z.string().optional(),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    hidden: z.boolean().optional(),
  }),
});

export const collections = { blog };
