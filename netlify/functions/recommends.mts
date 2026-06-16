/**
 * netlify/functions/recommends.mts
 * Netlify Function (v2) — affiliate link cloaker.
 *
 * Route: /recommends/:slug  →  302 redirect to the real affiliate URL.
 *
 * The destination map is the single source of truth in src/data/affiliates.ts —
 * this function imports it directly, so there is no second copy to keep in sync.
 * To add a program, edit ONLY src/data/affiliates.ts.
 *
 * (Replaces the old Cloudflare Pages Function at functions/recommends/[slug].ts.)
 */

import { getAffiliate } from '../../src/data/affiliates';

const PICKS_FALLBACK = 'https://fieldhealthafrica.org/picks';

export default async (
  _req: Request,
  context: { params: Record<string, string> },
): Promise<Response> => {
  const slug = context.params.slug;
  const affiliate = slug ? getAffiliate(slug) : undefined;
  const destination = affiliate?.destination;

  // Unknown slug or unconfigured placeholder ("[AFFILIATE_URL_…]") → send to /picks.
  if (!destination || destination.startsWith('[')) {
    return Response.redirect(PICKS_FALLBACK, 302);
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: destination,
      'Cache-Control': 'no-store', // don't cache redirects — destination may change
    },
  });
};

export const config = {
  path: '/recommends/:slug',
};
