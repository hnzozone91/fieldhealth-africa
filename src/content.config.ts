import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** Set to true on posts that include affiliate links */
    hasAffiliateLinks: z.boolean().default(false),
    /**
     * Optional: URL of the corresponding Substack post. When set, a
     * "Read full version on Substack →" link appears in the post's CTA.
     */
    substackUrl: z.string().url().optional(),
    /** Set to true to hide the post from the index and RSS (drafts) */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
