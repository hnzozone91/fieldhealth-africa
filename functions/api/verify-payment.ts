/**
 * functions/api/verify-payment.ts
 * Cloudflare Pages Function — Paystack transaction verification stub.
 *
 * NOT WIRED LIVE — this is a documented stub for the future upgrade path
 * described in the brief (switching from hosted Payment Links to embedded
 * Paystack inline checkout with server-side verification).
 *
 * KEY MANAGEMENT:
 *   PAYSTACK_SECRET_KEY  → Cloudflare Pages > Settings > Environment Variables
 *   PAYSTACK_PUBLIC_KEY  → safe in client code (prefix pk_live_ or pk_test_)
 *   Never commit secret keys. Never put PAYSTACK_SECRET_KEY in src/.
 *
 * When wiring live:
 *   1. Add PAYSTACK_SECRET_KEY to Cloudflare Pages env vars (not preview — production only).
 *   2. Uncomment the verification block below.
 *   3. Update /checkout-success to call this endpoint with the reference param
 *      that Paystack appends to your success URL.
 */

export const onRequestGet: PagesFunction<{ PAYSTACK_SECRET_KEY: string }> = async ({ request, env }) => {
  // TODO: extract reference from query string
  // const url = new URL(request.url);
  // const reference = url.searchParams.get('reference');
  // if (!reference) return new Response('Missing reference', { status: 400 });

  // TODO: verify with Paystack API
  // const res = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
  //   headers: { Authorization: `Bearer ${env.PAYSTACK_SECRET_KEY}` },
  // });
  // const data = await res.json();
  // if (data.data?.status !== 'success') return new Response('Payment not verified', { status: 402 });

  // TODO: generate signed download token + return download URL
  // return Response.json({ downloadUrl: '/downloads/...' });

  return new Response(
    JSON.stringify({ message: 'Payment verification stub — not yet implemented.' }),
    { status: 501, headers: { 'Content-Type': 'application/json' } }
  );
};
