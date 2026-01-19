// Product Categories and Items for Pavanity Global

export interface Product {
    id: number;
    name: string;
    slug: string;
    category: string;
    image?: string;
}

export interface ProductCategory {
    id: number;
    name: string;
    slug: string;
    icon: string;
    image: string;
    tagline: string;
    description: string;
    products: Product[];
}

// Complete Products Catalog
export const productsData: ProductCategory[] = [
    {
        id: 1,
        name: "Dehydrated Onion & Garlic",
        slug: "dehydrated-onion-garlic",
        icon: "onion",
        image: "/images/DEHYYDRATED-ONION-GARLIC-MAIN.jpeg",
        tagline: "Dehydrated Vegetables",
        description:
            "Export-grade dehydrated onion and garlic products in powder, flakes, granules, chopped, and minced form. Sourced from Indian farms and processed to retain natural flavor and aroma for global food manufacturers.",
        products: [
            {
                id: 101,
                name: "Dehydrated Onion Powder",
                slug: "dehydrated-onion-powder",
                category: "dehydrated-onion-garlic",
                image: "/images/dehydrated-onions-powder.jpeg",
            },
            {
                id: 102,
                name: "Dehydrated Onion Flakes",
                slug: "dehydrated-onion-flakes",
                category: "dehydrated-onion-garlic",
                image: "/images/dehydrated-onion-flakes.jpeg",
            },
            {
                id: 103,
                name: "Dehydrated Onion Granules",
                slug: "dehydrated-onion-granules",
                category: "dehydrated-onion-garlic",
                image: "/images/DEHYDRATED-ONION-GRANUELS.jpeg",
            },
            {
                id: 107,
                name: "Dehydrated Onion Chopped",
                slug: "dehydrated-onion-chopped",
                category: "dehydrated-onion-garlic",
                image: "/images/dehydrated-onion-chopped.jpeg",
            },
            {
                id: 108,
                name: "Dehydrated Onion Minced",
                slug: "dehydrated-onion-minced",
                category: "dehydrated-onion-garlic",
                image: "/images/dehydrated-onions-minced.jpeg",
            },
            {
                id: 104,
                name: "Dehydrated Garlic Powder",
                slug: "dehydrated-garlic-powder",
                category: "dehydrated-onion-garlic",
                image: "/images/powder.jpeg",
            },
            {
                id: 105,
                name: "Dehydrated Garlic Flakes",
                slug: "dehydrated-garlic-flakes",
                category: "dehydrated-onion-garlic",
                image: "/images/flakes.jpeg",
            },
            {
                id: 106,
                name: "Dehydrated Garlic Granules",
                slug: "dehydrated-garlic-granules",
                category: "dehydrated-onion-garlic",
                image: "/images/granuels.jpeg",
            },
            {
                id: 109,
                name: "Dehydrated Garlic Chopped",
                slug: "dehydrated-garlic-chopped",
                category: "dehydrated-onion-garlic",
                image: "/images/chopped.jpeg",
            },
            {
                id: 110,
                name: "Dehydrated Garlic Minced",
                slug: "dehydrated-garlic-minced",
                category: "dehydrated-onion-garlic",
                image: "/images/minced.jpeg",
            },
        ],
    },
    {
        id: 2,
        name: "Oilseeds",
        slug: "oilseeds",
        icon: "seed",
        image: "/images/oil-seeds.jpeg",
        tagline: "Oilseeds for Export",
        description:
            "High-quality sesame seeds (black & white), chia seeds, peanuts, and groundnut kernels sourced from certified Indian farms. Ideal for food manufacturers, bakeries, and health food brands across global markets.",
        products: [
            {
                id: 301,
                name: "Black Sesame Seeds",
                slug: "black-sesame-seeds",
                category: "oilseeds",
                image: "/images/black-sesame-seeds.jpg",
            },
            {
                id: 302,
                name: "White Sesame Seeds",
                slug: "white-sesame-seeds",
                category: "oilseeds",
                image: "/images/sesame-seeds-dark-background.jpg",
            },
            {
                id: 303,
                name: "Chia Seeds",
                slug: "chia-seeds",
                category: "oilseeds",
                image: "/images/chia-seed.jpg",
            },
            {
                id: 205,
                name: "Peanuts (Raw / Shelled)",
                slug: "peanuts-raw-shelled",
                category: "oilseeds",
                image: "/images/peanuts.jpg",
            },
        ],
    },
    {
        id: 3,
        name: "Psyllium Husk",
        slug: "psyllium-husk",
        icon: "herb",
        image: "/images/psyllium-husk.jpeg",
        tagline: "Natural Dietary Fiber",
        description:
            "Export-grade psyllium husk for pharmaceutical, nutraceutical, and food supplement industries. Sourced from Gujarat's finest plantations with consistent quality and compliance documentation.",
        products: [
            {
                id: 401,
                name: "Psyllium Husk",
                slug: "psyllium-husk",
                category: "psyllium-husk",
                image: "/images/psyllium-husk.jpeg",
            },
        ],
    },
    {
        id: 4,
        name: "Jaggery",
        slug: "jaggery",
        icon: "sugar",
        image: "/images/jaggery-cubes.jpg",
        tagline: "Natural Cane Sugar Alternative",
        description:
            "Traditional Indian jaggery in cubes and powder form. Unrefined natural sweetener ideal for health-conscious food manufacturers, confectionery, and beverage industries worldwide.",
        products: [
            {
                id: 501,
                name: "Jaggery Cubes",
                slug: "jaggery-cubes",
                category: "jaggery",
                image: "/images/jaggery-cubes.jpg",
            },
            {
                id: 502,
                name: "Jaggery Powder",
                slug: "jaggery-powder",
                category: "jaggery",
                image: "/images/jaggery-powder.jpg",
            },
        ],
    },
    {
        id: 5,
        name: "Agro and Allied Food Products",
        slug: "agro-allied-food-products",
        icon: "food",
        image: "/images/agro-and-filled-food-products-main.jpeg",
        tagline: "Nutritional Food Ingredients",
        description:
            "Moringa powder, peanut butter, and peanut oil cake for health food and nutraceutical industries. Processed to preserve nutritional value and meet international food safety standards.",
        products: [
            {
                id: 601,
                name: "Moringa Powder",
                slug: "moringa-powder",
                category: "agro-allied-food-products",
                image: "/images/moringa.jpg",
            },
            {
                id: 602,
                name: "Peanut Butter",
                slug: "peanut-butter",
                category: "agro-allied-food-products",
                image: "/images/homemade-peanut-butter-with-peanuts-grey-concrete-table-top-view.jpg",
            },
            {
                id: 603,
                name: "Peanut Oil Cake",
                slug: "peanut-oil-cake",
                category: "agro-allied-food-products",
                image: "/images/top-view-nuts-with-copy-space.jpg",
            },
        ],
    },
    {
        id: 6,
        name: "Spices",
        slug: "spices",
        icon: "spice",
        image: "/images/spices-profile.jpeg",
        tagline: "Authentic Indian Spices",
        description:
            "Export-quality whole and powdered spices including cumin, fennel, turmeric, chili, black pepper, and more. Sourced from India's spice-growing regions with traceability and quality assurance.",
        products: [
            {
                id: 701,
                name: "Cumin Seeds",
                slug: "cumin-seeds",
                category: "spices",
                image: "/images/cumin-spices.jpg",
            },
            {
                id: 702,
                name: "Fenugreek Seeds",
                slug: "fenugreek-seeds",
                category: "spices",
                image: "/images/spices-profile.jpeg",
            },
            {
                id: 703,
                name: "Mustard Seeds",
                slug: "mustard-seeds",
                category: "spices",
                image: "/images/spices-profile.jpeg",
            },
            {
                id: 710,
                name: "Fennel Seeds",
                slug: "fennel-seeds",
                category: "spices",
                image: "/images/spices-profile.jpeg",
            },
            {
                id: 704,
                name: "Chilli",
                slug: "chilli-whole-powder",
                category: "spices",
                image: "/images/red-chilli-paste-black.jpg",
            },
            {
                id: 705,
                name: "Turmeric",
                slug: "turmeric-whole-powder",
                category: "spices",
                image: "/images/blended-curcumin-powder-wooden-spoon.jpg",
            },
            {
                id: 706,
                name: "Cinnamon",
                slug: "cinnamon",
                category: "spices",
                image: "/images/many-cinnamon-sticks-white-surface.jpg",
            },
            {
                id: 707,
                name: "Cloves",
                slug: "cloves",
                category: "spices",
                image: "/images/pile-dried-natural-cloves-with-wooden-spoon-black-surface.jpg",
            },
            {
                id: 708,
                name: "Black Pepper",
                slug: "black-pepper",
                category: "spices",
                image: "/images/spices-profile.jpeg",
            },
            {
                id: 709,
                name: "Cardamom",
                slug: "cardamom",
                category: "spices",
                image: "/images/spices-profile.jpeg",
            },
        ],
    },
];

// Helper functions to get products
export const getAllProducts = (): Product[] => {
    return productsData.flatMap((category) => category.products);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
    const category = productsData.find((cat) => cat.slug === categorySlug);
    return category ? category.products : [];
};

export const getProductBySlug = (productSlug: string): Product | undefined => {
    return getAllProducts().find((product) => product.slug === productSlug);
};

export const getCategoryBySlug = (
    categorySlug: string
): ProductCategory | undefined => {
    return productsData.find((cat) => cat.slug === categorySlug);
};

export const getTotalProductsCount = (): number => {
    return getAllProducts().length;
};

export const getCategoriesCount = (): number => {
    return productsData.length;
};

// Quick add new product example:
/*
To add a new product:
1. Find the category in productsData array
2. Add new product object to the products array:
   { id: 710, name: "New Spice", slug: "new-spice", category: "spices" }

To add a new category:
1. Add new category object to productsData array:
   {
     id: 8,
     name: "New Category",
     slug: "new-category",
     icon: "icon-name",
     products: [
       { id: 801, name: "Product Name", slug: "product-slug", category: "new-category" }
     ]
   }
*/
