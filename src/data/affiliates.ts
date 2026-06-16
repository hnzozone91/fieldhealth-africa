/**
 * affiliates.ts — affiliate redirect map.
 *
 * Each entry maps a slug (used in /recommends/<slug>) to a destination URL.
 * The Netlify Function at netlify/functions/recommends.mts imports this map.
 *
 * ETHICAL CONSTRAINT (non-negotiable per brief):
 *   Only productivity, data, and learning tools. No clinical software,
 *   drug suppliers, or anything affecting clinical decisions.
 *
 * To add a program: add an entry below with the real affiliate URL.
 * Leave placeholder string for programs not yet set up.
 */

export interface AffiliateLink {
  slug: string;
  destination: string; // real affiliate URL
  label: string;       // display name on /picks
  category: 'healthcare-workers' | 'data-and-analysis' | 'building-and-publishing';
  disclosed: true;     // must always be true — every link is disclosed
}

export const affiliates: AffiliateLink[] = [
  // ── For Healthcare Workers ──
  {
    slug: 'kobo',
    destination: '[AFFILIATE_URL_KOBO]',
    label: 'KoboToolbox',
    category: 'healthcare-workers',
    disclosed: true,
  },
  {
    slug: 'notion',
    destination: '[AFFILIATE_URL_NOTION]',
    label: 'Notion',
    category: 'healthcare-workers',
    disclosed: true,
  },

  // ── For Data and Analysis ──
  {
    slug: 'tableau',
    destination: '[AFFILIATE_URL_TABLEAU]',
    label: 'Tableau',
    category: 'data-and-analysis',
    disclosed: true,
  },
  {
    slug: 'datacamp',
    destination: '[AFFILIATE_URL_DATACAMP]',
    label: 'DataCamp',
    category: 'data-and-analysis',
    disclosed: true,
  },

  // ── For Building and Publishing ──
  {
    slug: 'substack',
    destination: '[AFFILIATE_URL_SUBSTACK]',
    label: 'Substack',
    category: 'building-and-publishing',
    disclosed: true,
  },
  {
    slug: 'clickup',
    destination: '[AFFILIATE_URL_CLICKUP]',
    label: 'ClickUp',
    category: 'building-and-publishing',
    disclosed: true,
  },
];

/** Lookup by slug — returns undefined if not found */
export function getAffiliate(slug: string): AffiliateLink | undefined {
  return affiliates.find((a) => a.slug === slug);
}
