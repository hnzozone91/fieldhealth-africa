/**
 * functions/recommends/[slug].ts
 * Cloudflare Pages Function — affiliate link cloaker.
 *
 * Route: /recommends/:slug  →  302 redirect to real affiliate URL
 *
 * The destination map lives in src/data/affiliates.ts.
 * Since CF Functions run server-side, we duplicate the map here
 * (the src/ path is not bundled into functions/).
 *
 * TO ADD A PROGRAM: add to BOTH affiliates.ts (for /picks display) AND
 * the map below (for the actual redirect).
 */

// Mirror of src/data/affiliates.ts — keep in sync.
const AFFILIATES: Record<string, string> = {
  kobo:      '[AFFILIATE_URL_KOBO]',
  notion:    '[AFFILIATE_URL_NOTION]',
  tableau:   '[AFFILIATE_URL_TABLEAU]',
  datacamp:  '[AFFILIATE_URL_DATACAMP]',
  substack:  '[AFFILIATE_URL_SUBSTACK]',
  clickup:   '[AFFILIATE_URL_CLICKUP]',
};

export const onRequestGet: PagesFunction = async ({ params }) => {
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const destination = AFFILIATES[slug as string];

  if (!destination || destination.startsWith('[')) {
    // Unknown slug or placeholder — redirect to /picks with a note
    return Response.redirect('https://fieldhealthafrica.org/picks', 302);
  }

  // Optional lightweight click log placeholder:
  // TODO: implement if a zero-cost counter is desired (e.g. Cloudflare KV increment).
  // For now, rely on the affiliate network's own dashboard for click tracking.

  return new Response(null, {
    status: 302,
    headers: {
      Location: destination,
      'Cache-Control': 'no-store', // don't cache redirects — URL may change
    },
  });
};
