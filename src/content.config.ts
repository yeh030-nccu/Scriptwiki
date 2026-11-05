import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum(['character-analysis', 'story-structure']),
    order: z.number(),
    summary: z.string(),
  }),
});

export const collections = { articles };
