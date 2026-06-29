/**
 * netlify/functions/verify-payment.mts
 * Netlify Function (v2) — Paystack transaction verifier.
 *
 * Route: GET /api/verify-payment?reference=TXN_REF
 *
 * Requires env var: PAYSTACK_SECRET_KEY (set in Netlify dashboard)
 * Returns: { verified: true } or { verified: false }
 */

export default async (req: Request): Promise<Response> => {
  const cors = {
    'Access-Control-Allow-Origin': 'https://fieldhealthafrica.org',
    'Cache-Control': 'private, no-store',
  };

  const url = new URL(req.url);
  const reference = url.searchParams.get('reference');

  // Validate before ANY use — prevents SSRF via crafted reference strings.
  if (!reference || !/^[A-Za-z0-9_-]{8,64}$/.test(reference)) {
    return Response.json({ verified: false }, { status: 400, headers: cors });
  }

  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return Response.json({ verified: false }, { status: 503, headers: cors });
  }

  try {
    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      { headers: { Authorization: `Bearer ${secretKey}` } },
    );

    if (!res.ok) {
      return Response.json({ verified: false }, { status: 402, headers: cors });
    }

    const data = (await res.json()) as { data?: { status?: string } };

    if (data.data?.status === 'success') {
      return Response.json({ verified: true }, { headers: cors });
    }

    return Response.json({ verified: false }, { status: 402, headers: cors });
  } catch {
    return Response.json({ verified: false }, { status: 503, headers: cors });
  }
};

export const config = {
  path: '/api/verify-payment',
};
