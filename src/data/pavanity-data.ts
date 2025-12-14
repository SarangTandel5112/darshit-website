// Pavanity Global - B2B Food & Ingredient Supplier Data
// All content approved by client

// ============================================
// PRODUCT DIVISIONS (6 Divisions)
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
        name: "Pavanity SpiceLine™",
        slug: "spiceline",
        tagline: "Spices, Masalas & Seasonings",
        description: "Premium spices, masala blends, and seasonings for food manufacturing and HoReCa applications.",
        image: "/assets/img/divisions/spiceline.jpg" // Placeholder path
    },
    {
        id: 2,
        name: "Pavanity NatureFoods™",
        slug: "naturefoods",
        tagline: "Superfoods, Seeds & Plant Ingredients",
        description: "Plant-based superfoods, organic seeds, and nutritional ingredients for health food applications.",
        image: "/assets/img/divisions/naturefoods.jpg" // Placeholder path
    },
    {
        id: 3,
        name: "Pavanity AgroFoods™",
        slug: "agrofoods",
        tagline: "Dehydrated Vegetables & Ingredients",
        description: "Dehydrated vegetables, flakes, and powders for food manufacturing and processing.",
        image: "/assets/img/divisions/agrofoods.jpg" // Placeholder path
    },
    {
        id: 4,
        name: "Pavanity NutSpread™",
        slug: "nutspread",
        tagline: "Nut-Based Spreads",
        description: "Premium nut butters and spreads for private label and food service applications.",
        image: "/assets/img/divisions/nutspread.jpg" // Placeholder path
    },
    {
        id: 5,
        name: "Pavanity SweetCane™",
        slug: "sweetcane",
        tagline: "Natural Sweeteners",
        description: "Natural sweeteners and sugar alternatives for health-conscious food manufacturing.",
        image: "/assets/img/divisions/sweetcane.jpg" // Placeholder path
    },
    {
        id: 6,
        name: "Pavanity SnackFit™",
        slug: "snackfit",
        tagline: "Roasted & Functional Snacks",
        description: "Roasted snacks and functional ingredients for retail and food service channels.",
        image: "/assets/img/divisions/snackfit.jpg" // Placeholder path
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
        title: "Private Label",
        description: "Export supply under buyer branding and specifications, subject to applicable market and regulatory requirements.",
        icon: "private-label" // Icon identifier
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
    email: "export@pavanity.com",
    response: "Response within 24–48 working hours.",
    ctaText: "Request RFQ"
};

// ============================================
// NAVIGATION LINKS
// ============================================

export const navLinks = [
    {
        name: "Product Divisions",
        path: "/product-divisions",
        hasDropdown: true,
        dropdownItems: divisions.map(div => ({
            name: div.name,
            path: `/product-divisions/${div.slug}`
        }))
    },
    {
        name: "Quality & Compliance",
        path: "/quality-compliance",
        hasDropdown: false
    },
    {
        name: "Private Label & OEM",
        path: "/private-label",
        hasDropdown: false
    },
    {
        name: "Global Markets",
        path: "/global-markets",
        hasDropdown: false
    },
    {
        name: "About",
        path: "/about",
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
    { name: "Product Divisions", path: "/product-divisions" },
    { name: "Quality & Compliance", path: "/quality-compliance" },
    { name: "Private Label & OEM", path: "/private-label" },
    { name: "Global Markets", path: "/global-markets" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
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
    copyright: "© 2025 Pavanity Global. All rights reserved."
};

// ============================================
// CONTACT INFORMATION
// ============================================

export const contactInfo = {
    email: "export@pavanity.com",
    phone: "+91 XXX XXX XXXX", // Update with actual phone
    address: "Update with actual address",
    responseTime: "24-48 working hours"
};
