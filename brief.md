You are building and deploying a complete, production website for a real
organization that sells digital products and runs affiliate marketing. Read
this entire brief before writing code. Then propose a build plan and wait for
my "go" before scaffolding.
Context

Org: FieldHealth Africa
Domain (already purchased, at Namecheap, DNS not yet pointed):
fieldhealthafrica.org
Tagline: "From data to decisions, in the field."
What it is: Practical digital-health tools built and tested by African
practitioners. Founder: Dr. Nzozone Henry Fomukong — medical doctor, field
epidemiologist, District Medical Officer in Mamfe, Cameroon, trained data
scientist.
Audience: African health practitioners (free tools) + international
consultants, researchers, NGO M&E teams (paid tools).
This build includes everything from the onset: content pages, gated
Free Library downloads with email capture, affiliate "Picks" with link
cloaking, AND a working purchase flow for Pro tools.

Stack (use exactly this unless you flag a strong reason)

Framework: Astro (latest), mostly static, with Cloudflare Pages Functions
available for the few dynamic needs (cloaked affiliate redirects, gated
download token, optional Paystack verification webhook). Keep it light.
Styling: Tailwind CSS via the official Astro integration.
Email/leads: Formspree (endpoint I provide) for forms + a direct
Substack subscribe link/button. Placeholders if I haven't given URLs yet.
Payments: Paystack via hosted Payment Links (see Payments section).
Deploy: Cloudflare Pages (free tier), with Pages Functions for the
dynamic routes below.
Repo: init git locally; I'll connect GitHub when you tell me to.

DESIGN DIRECTION — modern futuristic "morph"
Build an aurora/mesh-gradient + glassmorphism aesthetic, executed tastefully
for a credible health-tech brand (this sells to NGOs and consultants — futuristic
but trustworthy, never gimmicky).

Backgrounds: soft animated aurora/mesh gradients (deep teal → emerald →
cool blue, over a warm-neutral or near-black base). Subtle, slow motion;
respect prefers-reduced-motion and disable animation when set.
Surfaces: frosted-glass cards (backdrop-blur, translucent fills, soft
borders, gentle inner/outer glow and depth shadows).
Type: strong modern hierarchy, generous whitespace, a clean geometric
sans (e.g. Inter / Space Grotesk for headings). Bundle fonts locally for speed.
Accents: subtle neon-edge glows, smooth hover transitions, light parallax
on the hero only.
GUARDRAILS (do not skip these):

Half the audience is on mobile in Cameroon. Glass/blur is expensive — keep
blur layers minimal, never stack heavy blurs, lazy-load, and test that it
stays smooth on a mid-range Android.
Maintain WCAG AA text contrast over gradients (use solid/opaque text
backings where needed). Frosted glass must never make text hard to read.
Target Lighthouse mobile 90+ for performance and accessibility.
Provide a tasteful non-animated fallback for reduced-motion users.


Before building all pages, produce TWO design directions for the hero +
a sample glass card so I can choose. (GATE 1)

Pages
Shared glass header (primary nav) + footer on every page.

Home (/) — aurora hero: "From data to decisions, in the field." Sub:
"Practical digital health tools built and tested by African practitioners."
Buttons: "Browse the Free Library" + "Explore Pro Tools". Three glass cards
(Free Library / Pro Library / Picks). Founder teaser (photo placeholder,
~100 words, "Read full bio"). "Latest from the blog" (3 newest, from content
collection). Newsletter CTA band (Substack).
About (/about) — "Built in the field, for the field." Founder intro
(use bio above). TODO-marked sections for: Mamfe origin story (300–400 words),
the two-library model, credentials (medical degree, field epi training,
publications, stack: Python, Claude API, Tableau, Power BI). CTA: subscribe +
browse Free Library.
Free Library (/free-library) — "Practical tools, no payment, no signup
wall." One LIVE tool: Pharmacy Inventory v2.1 — glass card, thumbnail
placeholder, one-line description, "Download (free)" → opens the gated
download flow (see Gated Downloads). 5–6 greyed "Coming soon" cards
(Health Indicator Calculator Lite, Outbreak Investigation Checklist, etc.).
Pro Library (/pro-library) — "Premium tools for global health
professionals." Pricing model section (à la carte $79–$799; subscription
$29–$999/mo; enterprise $5K–$35K) as descriptive text. At least one LIVE,
purchasable product (see Payments): the "Drug Stock-Out Predictor"
(price + clear deliverables + "Buy now" button → Paystack). Other planned
tools as "In development" cards. "Notify me when more Pro tools launch"
capture.
Picks (/picks) — "Tools I actually use." Affiliate-disclosure callout
at top. Recommendation cards grouped: "For Healthcare Workers", "For Data and
Analysis", "For Building and Publishing". Each card: 100–200 words, and a
cloaked affiliate link (see Affiliate section). Per-card small disclosure
line. I'll provide the real affiliate URLs; use placeholders until then.
Blog (/blog + /blog/[slug]) — Astro content collection, 1 sample
post, index + post template. Per-post affiliate-disclosure slot when needed.
Contact (/contact) — Formspree form: Name, Email, Role (DMO, Pharmacist,
M&E, Consultant, Researcher, Other), Country, Message. Plain-text fallback:
hello@fieldhealthafrica.org
Legal (/privacy, /terms, /affiliate-disclosure, /cookies) —
four routes, placeholder content, note that I paste termly.io text. Linked
in footer, not main nav.
Purchase support pages: /checkout-success (thank-you + how the download
arrives) and /checkout-cancelled. Used as Paystack callback targets.

PAYMENTS — Paystack hosted Payment Links
Reasoning: this takes MTN MoMo, Orange Money, and international cards securely
with NO secret keys in the browser and NO backend required to launch. Money
lands in the same account as embedded checkout.

Each purchasable Pro product has a "Buy now" button that links to its Paystack
Payment Link URL. I will paste the real link(s); until then use a clearly
labelled placeholder [PAYSTACK_LINK_DRUG_STOCKOUT] and a visible note in the
UI/comments showing exactly where it goes.
Set Paystack's success/callback URL to /checkout-success and provide me the
exact value to paste into the Paystack dashboard.
Build the product/pricing data in a single config file
(src/data/products.ts) so adding products later = editing one file.
Upgrade path (build to allow, do NOT build now): structure the buy buttons
and product config so I can later switch to embedded Paystack inline checkout

a Cloudflare Pages Function that initializes and verifies transactions and
releases downloads. Leave a clearly commented stub function
functions/api/verify-payment.ts with TODOs, but do not wire it live.


NEVER put a Paystack secret key in client code or commit any secret.
Document which keys live where (publishable vs secret) in README.

AFFILIATE MARKETING — cloaked links + tracking

Implement cloaked redirect links at fieldhealthafrica.org/recommends/<slug>
(e.g. /recommends/notion, /recommends/clickup) using a Cloudflare Pages
Function that 302-redirects to the real affiliate URL.
Keep a single map (src/data/affiliates.ts) of slug → destination URL, so I
add programs by editing one file. Use placeholders for destinations I haven't
provided.
Optional lightweight click logging (count per slug) — implement only if it
needs no paid service; otherwise leave a commented stub and rely on the
affiliate networks' own dashboards.
Enforce disclosure: disclosure callout on /picks, per-card disclosure line,
a footer "Affiliate Disclosure" link, and a reusable disclosure component for
blog posts.
ETHICAL CONSTRAINT (hard rule): only structure for productivity, data, and
learning tools. Do NOT build any affiliate slot for clinical software, drug
suppliers, or anything affecting clinical decisions.

GATED FREE-LIBRARY DOWNLOADS — email capture

"Download (free)" on the Pharmacy Inventory v2.1 opens a form (Formspree):
First Name (required), Email (required), Role (optional dropdown), Country
(optional), consent checkbox "I want to receive new FieldHealth Africa
releases" (required).
On submit: show a thank-you state with the actual download links.
Keep the gate light: 3 required fields max (name, email, consent); role and
country optional. (Over-gating kills conversion.)
Serve the downloadable files from /downloads/.... I will provide
FieldHealth_Pharmacy_Inventory_v2.1.xlsx and the _User_Guide.docx; use
small placeholder files until I deliver them.
Pipe leads to Substack: since Substack has no public API, document the Zapier
(Formspree → Substack) setup in the README, and ensure Formspree emails me
every submission as the reliable fallback.

SEO, analytics, polish

Per-page <title> + meta description, Open Graph/Twitter cards, favicon
placeholder, sitemap.xml, robots.txt.
Add a Google Analytics 4 slot: a single config var GA4_MEASUREMENT_ID with a
placeholder G-XXXXXXX; load gtag only if it's set. Tell me where to paste
the real ID.
Accessibility: semantic HTML, alt text, keyboard nav, visible focus states,
AA contrast even over gradients.

Build sequence (check in at the GATES)

Scaffold Astro + Tailwind + Pages Functions setup; build layout, glass
header/footer, design tokens, aurora background system (with reduced-motion
fallback). GATE 1: show me 2 design directions (hero + sample glass card).
Build all pages with specified content and TODO markers.
Wire dynamic routes: /recommends/<slug> redirect function; gated download
flow; product config + Paystack buy buttons (placeholder links);
/checkout-success + /checkout-cancelled.
SEO + GA4 slot + sitemap/robots. Local npm run build + preview; fix errors;
report performance/accessibility concerns.
GATE 2: tell me to create the GitHub repo + Cloudflare Pages project.
Then walk me through pushing to GitHub, connecting the repo in Cloudflare
Pages (build npm run build, output dist, Functions auto-detected), and
any environment variables.
DNS — give precise instructions; do NOT assume you can do it. I paste
records into Namecheap myself. Give exact records for fieldhealthafrica.org →
Cloudflare Pages, including apex handling, and how to verify on dnschecker.org.
Final checklist for me: paste Paystack link(s) + set callback URL; paste
Formspree endpoint; paste Substack URL; paste GA4 ID; upload real download
files; set up the Zapier pipe; fill TODO copy.

What I will provide when you ask

Paystack Payment Link URL(s) for the live Pro product(s)
Formspree endpoint URL; Substack publication URL
Real affiliate destination URLs per slug
GA4 measurement ID
Founder photo, logo, and the downloadable tool files
Final copy for TODO sections

Hard constraints

No secret keys in client code; never commit secrets. Document key handling.
Don't fabricate facts about the founder, products, prices, publications, or
any affiliate/payment URL — use only what's in this brief; leave TODO markers
and placeholders for the rest.
Keep it fast on a slow mobile connection; respect prefers-reduced-motion.
Affiliate ethics rule above is non-negotiable.

Start by confirming the plan and asking any blocking questions. Then proceed to
step 1 and stop at GATE 1.