import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    /** Post headline — shown in cards, the article <h1>, and <title> */
    title: z.string(),

    /** One-sentence summary — used in meta description and post cards */
    description: z.string(),

    /** Publication date */
    pubDate: z.coerce.date(),

    /** Optional: date of last significant revision */
    updatedDate: z.coerce.date().optional(),

    /** Topic tags — first tag is used as the category label on cards */
    tags: z.array(z.string()).default([]),

    /** Set true when the post contains affiliate links */
    hasAffiliateLinks: z.boolean().default(false),

    /**
     * Optional: URL of the corresponding Substack post.
     * When set, a "Read the full version on Substack →" link appears
     * in the post's newsletter CTA section.
     */
    substackUrl: z.string().url().optional(),

    /** Set true to hide the post from the index and RSS (drafts) */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
