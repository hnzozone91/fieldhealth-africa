/**
 * products.ts — single source of truth for all Pro Library products.
 *
 * To add a product: copy a product object, fill in the fields, set live: true.
 * For Paystack Payment Links — paste the real URL into paystackLink.
 *
 * KEY MANAGEMENT NOTE:
 *   - paystackLink is a PUBLIC URL (safe in client code — it is a hosted payment page).
 *   - Secret keys (if ever used for server-side verification) go in Netlify
 *     environment variables ONLY, never here.
 *   - See functions/api/verify-payment.ts for the stub verification function.
 */

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  price: number;
  currency: 'USD';
  paystackLink: string; // paste Paystack Payment Link URL here
  live: boolean;
  status: 'live' | 'in_development' | 'planned';
}

export const products: Product[] = [
  {
    id: 'drug-stockout-predictor',
    name: 'Drug Stock-Out Predictor',
    tagline: 'Predict stock-outs before they empty the shelf.',
    description:
      'A Python-powered predictive model that uses historical dispensing data, lead times, and seasonal patterns to flag likely stock-outs 4–8 weeks in advance. Includes a Tableau-ready dashboard and full methodology documentation.',
    deliverables: [
      'Python source code + Jupyter notebook',
      'Tableau dashboard template (.twbx)',
      'Step-by-step methodology guide (PDF)',
      'Sample dataset for testing',
      '30-day email support',
    ],
    price: 149,
    currency: 'USD',
    // TODO: paste your Paystack Payment Link here and set live: true
    paystackLink: '[PAYSTACK_LINK_DRUG_STOCKOUT]',
    live: false,
    status: 'in_development',
  },
];

/** Helper — get a product by id */
export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
