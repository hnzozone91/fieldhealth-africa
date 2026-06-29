/**
 * functions/api/verify-payment.ts
 * Paystack transaction verification stub — NOT WIRED LIVE.
 *
 * NOTE: This project deploys to Netlify (not Cloudflare Pages).
 * When wiring live, port this to netlify/functions/verify-payment.mts
 * following the same pattern as netlify/functions/recommends.mts.
 * This file is excluded from the root tsconfig.json.
 *
 * KEY MANAGEMENT:
 *   PAYSTACK_SECRET_KEY  → Netlify > Site settings > Environment variables
 *   PAYSTACK_PUBLIC_KEY  → safe in client code (prefix pk_live_ or pk_test_)
 *   Never commit secret keys. Never put PAYSTACK_SECRET_KEY in src/.
 *
 * SECURITY CHECKLIST — complete all items before going live:
 *   1. Validate reference with regex before ANY use:
 *        if (!/^[A-Za-z0-9_-]{8,64}$/.test(reference)) return 400
 *      Prevents SSRF: unsanitised input would be interpolated into the
 *      Paystack API URL: `https://api.paystack.co/transaction/verify/${reference}`
 *   2. Lock CORS: Access-Control-Allow-Origin: https://fieldhealthafrica.org (not *)
 *   3. Add rate limiting (e.g. Netlify Edge rate limiting or KV counter):
 *        max 10 requests/min per IP to prevent reference enumeration.
 *   4. Return ONLY a short-lived signed URL (HMAC-SHA256 + 10-min TTL expiry),
 *      never the real static file path. Paid files must not live in public/.
 *   5. Never store PAYSTACK_SECRET_KEY anywhere other than server environment vars.
 */

// Stub implementation — returns 501 until wired live.
export default async (_req: Request): Promise<Response> => {
  // TODO (step 1): const url = new URL(_req.url);
  // TODO (step 1): const reference = url.searchParams.get('reference');
  // TODO (step 1): if (!reference || !/^[A-Za-z0-9_-]{8,64}$/.test(reference)) {
  // TODO (step 1):   return new Response('Invalid reference', { status: 400 });
  // TODO (step 1): }

  // TODO (step 2): const res = await fetch(
  // TODO (step 2):   `https://api.paystack.co/transaction/verify/${reference}`,
  // TODO (step 2):   { headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` } }
  // TODO (step 2): );
  // TODO (step 2): const data = await res.json();
  // TODO (step 2): if (data.data?.status !== 'success') {
  // TODO (step 2):   return new Response('Payment not verified', { status: 402 });
  // TODO (step 2): }

  // TODO (step 4): generate HMAC-SHA256 signed download URL with 10-min TTL expiry
  // TODO (step 4): return Response.json({ downloadUrl: signedUrl });

  return new Response(
    JSON.stringify({ message: 'Payment verification stub — not yet implemented.' }),
    {
      status: 501,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://fieldhealthafrica.org',
      },
    }
  );
};
