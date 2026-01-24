// Product Categories and Items for Pavanity Global

export interface ProductSpecifications {
    size?: string;
    origin?: string;
    color?: string;
    aroma?: string;
    packing?: string;
    qualities?: string;
    standard?: string;
    moq?: string;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    category: string;
    image?: string;
    description?: string;
    specifications?: ProductSpecifications;
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
    specifications?: ProductSpecifications;
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
                description: "White Onion Powder provides a smooth, concentrated onion profile designed for flavour mixes, instant foods, sauces, and large-scale manufacturing. Pavanity Global emphasizes precise specifications, consistent supply cycles, and organized export processes to support reliable procurement. The powder blends easily into dry and liquid formulations, ensuring predictable performance in diverse production environments.",
                specifications: {
                    size: "80 To 100 mesh",
                    origin: "Gujarat - India",
                    color: "White",
                    aroma: "Strong Aroma Represents Indian Origin Products",
                    packing: "20 KG, strong poly bag inside cartoon",
                    qualities: "A-grade, Commercial Grade",
                    moq: "20 FCL 7–8 MT, 40 FCL H/C 17–18 MT",
                },
            },
            {
                id: 102,
                name: "Dehydrated Onion Flakes",
                slug: "dehydrated-onion-flakes",
                category: "dehydrated-onion-garlic",
                image: "/images/dehydrated-onion-flakes.jpeg",
                description: "White Onion Flakes deliver a consistent onion profile that aligns well with diverse food formulations across global markets. Pavanity Global focuses on providing clear product parameters, steady availability, and well-managed export coordination, ensuring a smooth and predictable sourcing experience. The flakes integrate easily into seasonings, dry blends, sauces, and processed preparations, offering a reliable ingredient that supports uniformity and efficiency in production workflows.",
                specifications: {
                    size: "8 To 15 MM",
                    origin: "Gujarat - India",
                    color: "White",
                    aroma: "Strong Aroma Represents Indian Origin Products",
                    packing: "14 KG, strong poly bag inside cartoon",
                    qualities: "A-grade, Commercial Grade",
                    moq: "20 FCL 7–8 MT, 40 FCL H/C 17–18 MT",
                },
            },
            {
                id: 103,
                name: "Dehydrated Onion Granules",
                slug: "dehydrated-onion-granules",
                category: "dehydrated-onion-garlic",
                image: "/images/DEHYDRATED-ONION-GRANUELS.jpeg",
                description: "White Onion Granules offer a uniform particle size that fits smoothly into blends, seasoning mixes, and industrial food preparations across global markets. Pavanity Global provides well-defined specifications, steady availability, and organized export coordination to support consistent sourcing. The granules disperse evenly in dry and wet formulations, giving a reliable ingredient option for streamlined production workflows.",
                specifications: {
                    size: "24 To 60 mesh",
                    origin: "Gujarat - India",
                    color: "White",
                    aroma: "Strong Aroma Represents Indian Origin Products",
                    packing: "20 KG, strong poly bag inside cartoon",
                    qualities: "A-grade, Commercial Grade",
                    moq: "20 FCL 7–8 MT, 40 FCL H/C 17–18 MT",
                },
            },
            {
                id: 107,
                name: "Dehydrated Onion Chopped",
                slug: "dehydrated-onion-chopped",
                category: "dehydrated-onion-garlic",
                image: "/images/dehydrated-onion-chopped.jpeg",
                description: "White Onion Chopped provides a balanced texture and clean onion character suitable for ready mixes, dehydrated blends, and large-scale processing applications. Pavanity Global ensures clear product parameters, dependable supply, and structured export handling, making procurement predictable and efficient. The chopped format integrates easily into formulations requiring visible onion pieces and consistent performance.",
                specifications: {
                    size: "3 To 5 MM",
                    origin: "Gujarat - India",
                    color: "White",
                    aroma: "Strong Aroma Represents Indian Origin Products",
                    packing: "20 KG, strong poly bag inside cartoon",
                    qualities: "A-grade, Commercial Grade",
                    moq: "20 FCL 7–8 MT, 40 FCL H/C 17–18 MT",
                },
            },
            {
                id: 108,
                name: "Dehydrated Onion Minced",
                slug: "dehydrated-onion-minced",
                category: "dehydrated-onion-garlic",
                image: "/images/dehydrated-onions-minced.jpeg",
                description: "White Onion Minced delivers fine, controlled sizing that works well in seasoning bases, dry blends, sauces, and prepared food systems. With defined specifications, stable availability, and smooth export coordination, Pavanity Global supports a seamless sourcing experience. The minced form offers uniform distribution in recipes and helps maintain consistency in production.",
                specifications: {
                    size: "1 To 3 MM",
                    origin: "Gujarat - India",
                    color: "White",
                    aroma: "Strong Aroma Represents Indian Origin Products",
                    packing: "20 KG, strong poly bag inside cartoon",
                    qualities: "A-grade, Commercial Grade",
                    moq: "20 FCL 7–8 MT, 40 FCL H/C 17–18 MT",
                },
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
        specifications: {
            size: "80 to 100 mesh, 100 to 120 mesh",
            origin: "Gujarat, India",
            color: "White",
            aroma: "Strong Aroma represents Indian Origin product",
            packing: "20 Kg. and 25 Kg. strong Poly bag inside cartoon",
            qualities: "A - Grade, Commercial grade",
            standard: "ELB, LB and SB",
        },
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
