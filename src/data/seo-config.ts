/**
 * SEO config for per-page meta tags. Used by SeoHead component.
 * SITE_URL is injected at runtime from window.location.origin for canonical/og:url.
 */
export const SITE_NAME = 'Pavanity Global';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
}

export const seoConfig: Record<string, SeoConfig> = {
  '/': {
    title: 'International Food & Ingredient Supplier',
    description:
      'Export-ready food ingredients from India for B2B and HoReCa buyers. Dehydrated onions, garlic, spices, oilseeds, psyllium husk & jaggery from India.',
    keywords:
      'Pavanity Global, international food supplier, ingredient exporter, dehydrated onion, dehydrated garlic, spices exporter India, B2B food ingredients, HoReCa supplier, export ready ingredients',
  },
  '/about-us': {
    title: 'About Us',
    description:
      'Pavanity Global – International food and ingredient supplier. Export-ready supply for B2B and HoReCa. Dehydrated onions, garlic, spices, oilseeds, psyllium husk, jaggery from India.',
    keywords: 'Pavanity Global, about, food ingredients exporter, India',
  },
  '/products': {
    title: 'Products',
    description:
      'Browse dehydrated onions, garlic, spices, oilseeds, psyllium husk, jaggery, and value-added ingredients. Export-grade supply for B2B and HoReCa.',
    keywords: 'dehydrated onion, garlic, spices, oilseeds, psyllium, jaggery, food ingredients',
  },
  '/quality-compliance': {
    title: 'Quality & Compliance',
    description:
      'Export-grade quality standards, certifications, and compliance documentation for international food ingredient supply.',
    keywords: 'quality compliance, export certification, food safety, HACCP',
  },
  '/private-label-custom-sourcing': {
    title: 'Private Label & Custom Sourcing',
    description:
      'Custom formulations, private label packaging, and bulk sourcing for international B2B buyers.',
    keywords: 'private label, custom sourcing, bulk ingredients, OEM',
  },
  '/contact': {
    title: 'Contact Us',
    description:
      'Contact Pavanity Global for export supply, commercial enquiries, and bulk order requirements. Response within 24-48 working hours.',
    keywords: 'contact, enquiry, export, bulk order',
  },
};

/** Default SEO for unmatched routes (e.g. product category fallback) */
export const defaultSeo: SeoConfig = {
  title: 'Products',
  description:
    'Export-ready food ingredients from Pavanity Global – dehydrated onions, garlic, spices, oilseeds, psyllium husk, jaggery.',
  keywords: 'food ingredients, export, B2B, Pavanity Global',
};
