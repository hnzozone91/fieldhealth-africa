# FieldHealth Africa — fieldhealthafrica.org

> From data to decisions, in the field.

Astro + Tailwind static site for Dr. Nzozone Henry Fomukong's digital health
tools organisation. **Hosted on Netlify** (`fieldhealthafrica.org`), which builds
and deploys automatically on every push to `main`.

---

## Quick start (local dev)

```bash
npm install
npm run dev          # → http://localhost:4321
npm run build        # → dist/
npm run preview      # build + serve locally (via wrangler dev)
```

---

## Deployment

**The live site is hosted on Netlify and deploys automatically from GitHub.**
There is no manual deploy command — pushing to `main` is the deploy:

```bash
git push origin main   # Netlify builds (npm run build) and publishes dist/ to fieldhealthafrica.org
```

A Netlify build typically completes in 15–60s. `npm run deploy` is intentionally
a no-op guard that prints this instruction.

> **Legacy note:** an unused Cloudflare Worker (`wrangler.jsonc`,
> `fieldhealth-africa.*.workers.dev`) still exists from an earlier setup. It is
> **not** wired to the domain. Do not run `wrangler deploy` expecting it to update
> production — it won't.

---

## Stack

| Layer        | Technology                               |
|--------------|------------------------------------------|
| Framework    | Astro (static output)                    |
| Styling      | Tailwind CSS + @tailwindcss/typography   |
| Fonts        | Inter + Space Grotesk (self-hosted woff2)|
| Dynamic      | `functions/` — see ⚠️ note below          |
| Payments     | Paystack hosted Payment Links            |
| Email/leads  | Formspree forms + Substack newsletter    |
| Deploy       | Netlify (auto-deploy on push to `main`)  |
| Analytics    | Google Analytics 4 (env-var gated)       |

---

## Environment variables

Set these in **Netlify → Site configuration → Environment variables**.
Never put them in code or commit them.

| Variable              | Where               | Notes                                                        |
|-----------------------|---------------------|--------------------------------------------------------------|
| `GA4_MEASUREMENT_ID`  | Netlify env (prod)  | Your GA4 ID, e.g. `G-XXXXXXXXXX`. Omit to disable tracking. |
| `PAYSTACK_SECRET_KEY` | Netlify env (prod)  | Only needed when server-side payment verification is enabled (see stub). |

### Paystack key types

- **Public/publishable key** (`pk_live_…`) — safe in browser code. Used if you ever switch to Paystack inline checkout. **Not currently used** — we use hosted Payment Links which need no key in the browser.
- **Secret key** (`sk_live_…`) — **NEVER in client code**. Lives in Netlify env vars only. Currently unused (stub only).

---

## Adding a Paystack Payment Link (per product)

1. Log in to [dashboard.paystack.com](https://dashboard.paystack.com)
2. Go to **Payment Links → Create new**
3. Fill in product name, price (USD), description
4. Under **Redirect URLs**:
   - Success URL: `https://fieldhealthafrica.org/checkout-success`
   - Cancel URL: `https://fieldhealthafrica.org/checkout-cancelled`
5. Copy the link URL (looks like `https://paystack.com/pay/…`)
6. Paste it into `src/data/products.ts` → `paystackLink` field
7. Set `live: true` on the product
8. Commit + push to `main` — Netlify rebuilds automatically

---

## Adding a Pro Library product

Edit `src/data/products.ts`. Copy the existing product object:

```typescript
{
  id: 'my-new-tool',          // URL-safe slug
  name: 'My New Tool',
  tagline: 'One sentence.',
  description: 'Longer description...',
  deliverables: ['Item 1', 'Item 2'],
  price: 149,
  currency: 'USD',
  paystackLink: 'https://paystack.com/pay/XXXX',  // paste real link
  live: true,
  status: 'live',
}
```

No other file needs changing.

---

## Adding an affiliate program

1. **`src/data/affiliates.ts`** — add the entry with real affiliate URL and category.
   Allowed categories: `healthcare-workers` · `data-and-analysis` · `building-and-publishing`.
   **Never use `clinical` or anything affecting patient decisions.**

2. **`functions/recommends/[slug].ts`** — mirror the same slug → URL mapping in the `AFFILIATES` object (the function can't import from `src/`). ⚠️ Note: this `functions/` route is not active on Netlify — see the "Serverless functions" section.

3. **`src/pages/picks.astro`** — add a description string to the `descriptions` object (100–200 words).

No other files need changing.

---

## Formspree setup

Create **two** forms at [formspree.io](https://formspree.io) (free plan allows 2):

| Form             | Paste endpoint into…              | Subject line               |
|------------------|-----------------------------------|----------------------------|
| Contact          | `src/pages/contact.astro`         | `FieldHealth Africa contact form` |
| Free downloads   | `src/pages/free-library.astro`    | `Free download: [product]` |

Optional third form for "Notify me" (Pro Library) → `src/pages/pro-library.astro`.

### Formspree → Substack (Zapier)

Since Substack has no public subscriber API, use Zapier to pipe email leads:

1. Create a free Zapier account
2. New Zap → Trigger: **Formspree** (new submission)
3. Filter: only submissions from the **Free Downloads** form
4. Action: **Email by Zapier** — send to yourself with subscriber email in body  
   *(Substack doesn't have a Zapier action for adding subscribers programmatically)*
5. Alternatively: export Formspree submissions monthly as CSV → import to Substack

Formspree also emails you every submission as a reliable fallback — check your inbox.

---

## Fonts

Self-hosted woff2 files are in `public/fonts/`. They are copied from `node_modules/@fontsource/` during `npm install` by the post-install logic in this README:

```bash
# Run once after npm install if fonts are missing from public/fonts/
$src = "node_modules/@fontsource/inter/files"
Copy-Item "$src/inter-latin-400-normal.woff2" public/fonts/
Copy-Item "$src/inter-latin-500-normal.woff2" public/fonts/
Copy-Item "$src/inter-latin-600-normal.woff2" public/fonts/
$src2 = "node_modules/@fontsource/space-grotesk/files"
Copy-Item "$src2/space-grotesk-latin-700-normal.woff2" public/fonts/
```

---

## Serverless functions (`functions/`)

| File                              | Route                        | Purpose                          |
|-----------------------------------|------------------------------|----------------------------------|
| `functions/recommends/[slug].ts`  | `/recommends/:slug`          | Affiliate link cloaker (302)     |
| `functions/api/verify-payment.ts` | `/api/verify-payment`        | Payment verification stub (501)  |

> ⚠️ **Host mismatch — not active on Netlify.** The root `functions/` directory is
> a **Cloudflare Pages** convention; Netlify does not auto-detect it. On the current
> Netlify deploy these routes are **not live**. To run them on Netlify, port the
> handlers to `netlify/functions/` (or `netlify/edge-functions/`) and add the
> matching redirects in `netlify.toml`. The affiliate cloaker (`/recommends/:slug`)
> is the only one with user impact; `verify-payment` is an unwired stub regardless.

---

## GA4 — where to paste your ID

1. Get your Measurement ID from [analytics.google.com](https://analytics.google.com) → Admin → Data Streams → your stream → Measurement ID (starts with `G-`)
2. Go to Netlify → your site → Site configuration → Environment variables
3. Add: `GA4_MEASUREMENT_ID` = `G-XXXXXXXXXX`
4. Redeploy (trigger a new build or push a commit)

The `gtag` script is only loaded when `GA4_MEASUREMENT_ID` is set — the site works cleanly without it.

---

## OG image

`public/images/og-default.svg` is a placeholder. Before launch:
1. Create a 1200×630 PNG with your real branding
2. Replace `public/images/og-default.svg` → `og-default.png`
3. Update the default in `src/layouts/Base.astro` (`ogImage = '/images/og-default.png'`)

---

## DNS (Namecheap → Netlify)

The domain `fieldhealthafrica.org` is registered at Namecheap and points to Netlify
(verified live: `Server: Netlify`). DNS records follow Netlify's custom-domain setup
(either Netlify DNS nameservers, or an `ALIAS`/`CNAME` to the Netlify site + apex
handling). Manage the domain under **Netlify → Domain management**.

---

## TODO checklist before go-live

- [ ] Paste Paystack Payment Link URL into `src/data/products.ts`
- [ ] Set Paystack success URL → `https://fieldhealthafrica.org/checkout-success`
- [ ] Set Paystack cancel URL → `https://fieldhealthafrica.org/checkout-cancelled`
- [ ] Paste Formspree contact endpoint → `src/pages/contact.astro`
- [ ] Paste Formspree downloads endpoint → `src/pages/free-library.astro`
- [ ] Paste Substack subscribe URL (3 locations: index, about, newsletter component)
- [ ] Paste real affiliate URLs into `src/data/affiliates.ts` + `functions/recommends/[slug].ts`
- [ ] Paste GA4 Measurement ID into Netlify env vars
- [ ] Upload real `FieldHealth_Pharmacy_Inventory_v2.1.xlsx` → `public/downloads/`
- [ ] Upload real `FieldHealth_Pharmacy_Inventory_v2.1_User_Guide.docx` → `public/downloads/`
- [ ] Replace `public/images/og-default.svg` with real 1200×630 PNG
- [ ] Fill TODO copy sections: Mamfe origin story, two-library model explanation
- [ ] Replace placeholder blog post titles/dates with real publish dates
- [ ] Set up Zapier: Formspree → email pipe for Substack lead capture
- [ ] Generate and paste Privacy Policy, Terms, Cookie Policy from termly.io
- [ ] Install Git and create GitHub repo (GATE 2)
