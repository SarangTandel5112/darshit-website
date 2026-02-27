// Pavanity Global - Export-Focused Food & Agricultural Products Supplier
// Content updated as per SEO implementation document

// ============================================
// PRODUCT CATEGORIES (6 Categories)
// ============================================

export interface Division {
    id: number;
    name: string;
    slug: string;
    tagline: string;
    description: string;
    image: string;
}

export const divisions: Division[] = [
    {
        id: 1,
        name: "Dehydrated Products",
        slug: "dehydrated-products",
        tagline: "Exporter & Supplier",
        description: "Bulk-supplied, export-grade dehydrated vegetables and ingredients for international B2B buyers, food manufacturers, and HoReCa distribution.",
        image: "/assets/img/divisions/dehydrated-products.jpg"
    },
    {
        id: 2,
        name: "Millets & Grains",
        slug: "millets-grains",
        tagline: "Exporter & Supplier",
        description: "Bulk-supplied, export-grade millets and grains for international B2B buyers, food manufacturers, and HoReCa distribution.",
        image: "/assets/img/divisions/millets-grains.jpg"
    },
    {
        id: 3,
        name: "Seeds & Dietary Fibers",
        slug: "seeds-dietary-fibers",
        tagline: "Exporter & Supplier",
        description: "Bulk-supplied, export-grade seeds and dietary fibers for international B2B buyers, food manufacturers, and HoReCa distribution.",
        image: "/assets/img/divisions/seeds-fibers.jpg"
    },
    {
        id: 4,
        name: "Jaggery & Natural Sweeteners",
        slug: "jaggery-natural-sweeteners",
        tagline: "Exporter & Supplier",
        description: "Bulk-supplied, export-grade jaggery and natural sweeteners for international B2B buyers, food manufacturers, and HoReCa distribution.",
        image: "/assets/img/divisions/jaggery-sweeteners.jpg"
    },
    {
        id: 5,
        name: "Nutritional & Value-Added Ingredients",
        slug: "nutritional-value-added-ingredients",
        tagline: "Exporter & Supplier",
        description: "Bulk-supplied, export-grade nutritional and value-added ingredients for international B2B buyers, food manufacturers, and HoReCa distribution.",
        image: "/assets/img/divisions/nutritional-ingredients.jpg"
    },
    {
        id: 6,
        name: "Healthy Snacks",
        slug: "healthy-snacks",
        tagline: "Exporter & Supplier",
        description: "Bulk-supplied, export-grade healthy snacks for international B2B buyers, food manufacturers, and HoReCa distribution.",
        image: "/assets/img/divisions/healthy-snacks.jpg"
    }
];

// ============================================
// SECTION 2: BUSINESS CONTINUITY (3 Cards)
// ============================================

export interface BusinessContinuity {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export const businessContinuity: BusinessContinuity[] = [
    {
        id: 1,
        title: "Supply Continuity",
        description: "Export supply structured to support recurring volumes, predictable schedules, and long-term planning.",
        icon: "supply" // Icon identifier
    },
    {
        id: 2,
        title: "Commercial Clarity",
        description: "Business conducted with defined specifications, delivery terms, documentation standards, and market requirements.",
        icon: "commercial" // Icon identifier
    },
    {
        id: 3,
        title: "Trade Readiness",
        description: "Export operations aligned with applicable food regulations, customs procedures, and destination compliance.",
        icon: "trade" // Icon identifier
    }
];

// ============================================
// SECTION 4: COMMERCIAL SCOPE (4 Cards)
// ============================================

export interface CommercialScope {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export const commercialScope: CommercialScope[] = [
    {
        id: 1,
        title: "Export Supply",
        description: "Supply of food ingredients and agri-based products for international B2B and HoReCa channels.",
        icon: "export" // Icon identifier
    },
    {
        id: 2,
        title: "Custom Development",
        description: "Export supply under buyer specifications and custom formulations, subject to applicable market and regulatory requirements.",
        icon: "custom-development" // Icon identifier
    },
    {
        id: 3,
        title: "Markets",
        description: "Active participation across multiple international regions through established export channels.",
        icon: "markets" // Icon identifier
    },
    {
        id: 4,
        title: "Compliance",
        description: "Trade conducted in alignment with applicable food safety and export regulations.",
        icon: "compliance" // Icon identifier
    }
];

// ============================================
// SECTION 5: GLOBAL MARKETS (Regions)
// ============================================

export interface GlobalMarket {
    id: number;
    region: string;
    countries?: string[]; // Optional for future expansion
}

export const globalMarkets: GlobalMarket[] = [
    {
        id: 1,
        region: "North America"
    },
    {
        id: 2,
        region: "Europe"
    },
    {
        id: 3,
        region: "Middle East"
    },
    {
        id: 4,
        region: "Asia"
    },
    {
        id: 5,
        region: "Africa"
    }
];

// ============================================
// HERO SECTION CONTENT
// ============================================

export const heroContent = {
    h1: "International Food & Ingredient Supplier",
    h2: "Export Supply for Global Food Businesses",
    description: "Export-ready supply supporting structured B2B and HoReCa requirements across international markets.",
    primaryCTA: "Request RFQ",
    secondaryCTA: "View Product Range",
    trustIndicators: [
        "Export-Ready",
        "Quality & Compliance",
        "International Trade"
    ]
};

// ============================================
// BUSINESS ENQUIRIES SECTION
// ============================================

export const businessEnquiries = {
    heading: "For export supply discussions and commercial enquiries.",
    email: "info@pavanityglobal.com",
    response: "Response within 24–48 working hours.",
    ctaText: "Request RFQ"
};

// ============================================
// NAVIGATION LINKS
// ============================================

// Note: Import productsData from products-data.ts to use in navbar
// This navLinks is kept for reference but navbar uses productsData directly

export const navLinks = [
    {
        name: "Products",
        path: "/products",
        hasDropdown: true,
        dropdownItems: [] // Populated dynamically from productsData in navbar
    },
    {
        name: "Quality & Compliance",
        path: "/quality-compliance",
        hasDropdown: false
    },
    {
        name: "Private Label & Custom Sourcing",
        path: "/private-label-custom-sourcing",
        hasDropdown: false
    },
    {
        name: "About Us",
        path: "/about-us",
        hasDropdown: false
    },
    {
        name: "Contact",
        path: "/contact",
        hasDropdown: false
    }
];

// ============================================
// FOOTER LINKS
// ============================================

export const footerQuickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Products", path: "/products" },
    { name: "Quality & Compliance", path: "/quality-compliance" },
    { name: "Private Label & Custom Sourcing", path: "/private-label-custom-sourcing" },
    { name: "Contact", path: "/contact" }
];

export const footerProductCategories = [
    { name: "Dehydrated White Onion", path: "/products/white-onion" },
    { name: "Dehydrated Red Onion", path: "/products/red-onion" },
    { name: "Dehydrated Pink Onion", path: "/products/pink-onion" },
    { name: "Dehydrated Garlic", path: "/products/garlic" },
    { name: "Oilseeds", path: "/products/oilseeds" },
    { name: "Psyllium Husk", path: "/products/psyllium-husk" },
    { name: "Spices", path: "/products/spices" },
    { name: "Agro & Allied Products", path: "/products/agro-allied" }
];

export const footerLegalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Export Compliance", path: "/export-compliance" }
];

export const footerContent = {
    brandName: "PAVANITY GLOBAL",
    tagline: "International Food & Ingredient Supplier",
    motto: "Pulse. Partner. Prevail.",
    copyright: "© 2025 Pavanity Global. All rights reserved.",
    description: "Pavanity Global specializes in agricultural sourcing and export coordination for food and agricultural ingredients to international B2B and HoReCa markets."
};

export const socialMedia = [
    { name: "Facebook", url: "https://facebook.com/pavanityglobal", icon: "facebook" },
    { name: "LinkedIn", url: "https://linkedin.com/company/pavanityglobal", icon: "linkedin" },
    { name: "Instagram", url: "https://instagram.com/pavanityglobal", icon: "instagram" },
    { name: "Twitter", url: "https://twitter.com/pavanityglobal", icon: "twitter" }
];

// ============================================
// CONTACT INFORMATION
// ============================================

export const contactInfo = {
    email: "info@pavanityglobal.com",
    phone: "+91 98250 47586",
    address: "Jetpur - Rajkot 360-370, Gujarat, India",
    responseTime: "24-48 working hours"
};

// ============================================
// OUR PRESENCE - OFFICE LOCATIONS
// ============================================

export const officeLocations = [
    {
        id: 1,
        country: "Australia",
        address: "270 Highlander Drive, Craigieburn, Melbourne, Victoria 3064"
    },
    {
        id: 2,
        country: "India",
        address: "Dhoraji Road, Jetpur, Rajkot, Gujarat 360 370"
    },
    {
        id: 3,
        country: "Kenya",
        address: "3rd Parkland, Near Diamond Plaza, Opposite Shree Vallabhdham Haveli, Nairobi 00100"
    },
    {
        id: 4,
        country: "Mozambique",
        address: "E.I.CABO DELGADO, Cidade de Pemba NUIT, 147646887, Pemba, Mozambique, Africa"
    }
];
