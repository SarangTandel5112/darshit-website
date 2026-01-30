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
        name: "Dehydrated White Onion",
        slug: "white-onion",
        icon: "onion",
        image: "/images/DEHYYDRATED-ONION-GARLIC-MAIN.jpeg",
        tagline: "Dehydrated White Onion",
        description:
            "Export-grade dehydrated white onion products in powder, flakes, granules, chopped, and minced form. Sourced from Indian farms and processed to retain natural flavor and aroma for global food manufacturers.",
        products: [
            {
                id: 101,
                name: "Dehydrated White Onion Powder",
                slug: "white-onion-powder",
                category: "white-onion",
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
                name: "Dehydrated White Onion Flakes",
                slug: "white-onion-flakes",
                category: "white-onion",
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
                name: "Dehydrated White Onion Granules",
                slug: "white-onion-granules",
                category: "white-onion",
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
                name: "Dehydrated White Onion Chopped",
                slug: "white-onion-chopped",
                category: "white-onion",
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
                name: "Dehydrated White Onion Minced",
                slug: "white-onion-minced",
                category: "white-onion",
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
        ],
    },
    {
        id: 2,
        name: "Dehydrated Red Onion",
        slug: "red-onion",
        icon: "onion",
        image: "/images/DEHYYDRATED-ONION-GARLIC-MAIN.jpeg",
        tagline: "Dehydrated Red Onion",
        description:
            "Export-grade dehydrated red onion products in powder, flakes, granules, chopped, and minced form. Sourced from Indian farms and processed to retain natural flavor and aroma for global food manufacturers.",
        products: [
            {
                id: 201,
                name: "Dehydrated Red Onion Powder",
                slug: "red-onion-powder",
                category: "red-onion",
                image: "/images/dehydrated-onions-powder.jpeg",
                description: "Red Onion Powder delivers a smooth, concentrated onion note formulated for sauces, dry mixes, instant foods, and large-scale manufacturing. Pavanity Global ensures accurate specifications, stable supply cycles, and streamlined export processes for dependable sourcing. The powder blends seamlessly into various systems, supporting controlled flavour delivery and uniform results across production lines.",
            },
            {
                id: 202,
                name: "Dehydrated Red Onion Flakes",
                slug: "red-onion-flakes",
                category: "red-onion",
                image: "/images/dehydrated-onion-flakes.jpeg",
                description: "Red Onion Flakes provide a defined cut size with a natural red tone that performs effectively in seasoning blends, dehydrated preparations, and processed formulations across international markets. Pavanity Global follows clear product parameters, ensures steady availability, and maintains organized export coordination to support reliable procurement. The flakes integrate evenly into dry and semi-moist systems, offering consistent behaviour and smooth handling across production workflows.",
            },
            {
                id: 203,
                name: "Dehydrated Red Onion Granules",
                slug: "red-onion-granules",
                category: "red-onion",
                image: "/images/DEHYDRATED-ONION-GRANUELS.jpeg",
                description: "Red Onion Granules offer consistent particle uniformity suitable for flavour blends, spice applications, and industrial recipes across global markets. Pavanity Global supports sourcing through steady availability, rigorous parameter clarity, and organized export coordination. The granules disperse evenly in all types of formulations, enhancing operational efficiency and performance consistency during production.",
            },
            {
                id: 204,
                name: "Dehydrated Red Onion Chopped",
                slug: "red-onion-chopped",
                category: "red-onion",
                image: "/images/dehydrated-onion-chopped.jpeg",
                description: "Red Onion Chopped features an even particle size suitable for applications that require both flavour contribution and visible onion presence. Pavanity Global offers structured specifications, predictable availability, and well-managed export logistics to enable uninterrupted sourcing. The chopped format fits cleanly into mixes, bases, and industrial preparations, supporting uniform dispersion and dependable processing performance.",
            },
            {
                id: 205,
                name: "Dehydrated Red Onion Minced",
                slug: "red-onion-minced",
                category: "red-onion",
                image: "/images/dehydrated-onions-minced.jpeg",
                description: "Red Onion Minced provides fine, controlled sizing that distributes smoothly in seasoning bases, sauce formulations, and processed food systems. Pavanity Global maintains defined quality parameters, stable supply planning, and coordinated export handling to ensure consistency throughout the procurement process. The minced particles blend efficiently into dry and wet applications, supporting balanced flavour release and predictable production outcomes.",
            },
        ],
    },
    {
        id: 3,
        name: "Dehydrated Pink Onion",
        slug: "pink-onion",
        icon: "onion",
        image: "/images/DEHYYDRATED-ONION-GARLIC-MAIN.jpeg",
        tagline: "Dehydrated Pink Onion",
        description:
            "Export-grade dehydrated pink onion products in powder, flakes, granules, chopped, and minced form. Sourced from Indian farms and processed to retain natural flavor and aroma for global food manufacturers.",
        products: [
            {
                id: 301,
                name: "Dehydrated Pink Onion Powder",
                slug: "pink-onion-powder",
                category: "pink-onion",
                image: "/images/dehydrated-onions-powder.jpeg",
                description: "Pink Onion Powder offers a smooth, refined onion note that blends effectively into mixes, ready preparations, and industrial recipes. Pavanity Global provides well-structured parameters, predictable supply cycles, and organized export support to maintain consistent sourcing. The powder integrates easily into dry and wet systems, offering uniform flavour delivery and stable production performance.",
            },
            {
                id: 302,
                name: "Dehydrated Pink Onion Flakes",
                slug: "pink-onion-flakes",
                category: "pink-onion",
                image: "/images/dehydrated-onion-flakes.jpeg",
                description: "Pink Onion Flakes feature a mild onion profile and a soft natural hue that aligns well with seasoning blends, dry mixes, and processed preparations across international markets. Pavanity Global provides defined specifications, consistent availability, and organized export coordination to maintain smooth sourcing experiences. The flakes disperse evenly in formulations, supporting steady performance and balanced product outcomes.",
            },
            {
                id: 303,
                name: "Dehydrated Pink Onion Granules",
                slug: "pink-onion-granules",
                category: "pink-onion",
                image: "/images/DEHYDRATED-ONION-GRANUELS.jpeg",
                description: "Pink Onion Granules provide uniform particle distribution suited for seasoning blends, dry formulations, and large-scale processing applications. Pavanity Global ensures clarity in specifications, regular availability, and streamlined export coordination for reliable procurement. The granules incorporate cleanly into production workflows, supporting operational consistency and efficient blending.",
            },
            {
                id: 304,
                name: "Dehydrated Pink Onion Chopped",
                slug: "pink-onion-chopped",
                category: "pink-onion",
                image: "/images/dehydrated-onion-chopped.jpeg",
                description: "Pink Onion Chopped offers a uniform particulate size designed for formulations requiring visible onion texture with controlled colour influence. Pavanity Global maintains structured specifications, dependable supply planning, and efficient export management to ensure consistent sourcing. The chopped format integrates cleanly into blends and food systems, delivering predictable distribution and stable functionality.",
            },
            {
                id: 305,
                name: "Dehydrated Pink Onion Minced",
                slug: "pink-onion-minced",
                category: "pink-onion",
                image: "/images/dehydrated-onions-minced.jpeg",
                description: "Pink Onion Minced delivers fine, accurate sizing that works well in sauces, mixes, and industrial preparations where even flavour distribution is required. Pavanity Global supports consistent sourcing through clear parameters, steady availability, and organized export processes. The minced format disperses smoothly across dry and liquid applications, contributing to balanced formulation performance.",
            },
        ],
    },
    {
        id: 4,
        name: "Dehydrated Garlic",
        slug: "garlic",
        icon: "onion",
        image: "/images/DEHYYDRATED-ONION-GARLIC-MAIN.jpeg",
        tagline: "Dehydrated Garlic",
        description:
            "Export-grade dehydrated garlic products in powder, granules, chopped, minced, and cloves form. Sourced from Indian farms and processed to retain natural flavor and aroma for global food manufacturers.",
        products: [
            {
                id: 401,
                name: "Dehydrated Garlic Powder",
                slug: "garlic-powder",
                category: "garlic",
                image: "/images/powder.jpeg",
                description: "Dehydrated Garlic Powder delivers a smooth and concentrated garlic note ideal for flavour blends, sauces, instant mixes, and ready foods. Pavanity Global offers accurate specifications, steady supply, and well-structured export coordination for dependable procurement. The fine powder blends quickly and ensures uniform taste across all applications.",
                specifications: {
                    size: "Powder / 80–100 mesh",
                    origin: "India",
                    packing: "10 kgs, 20 kgs, 25 kgs - Laminated paperbag and box",
                },
            },
            {
                id: 403,
                name: "Dehydrated Garlic Granules",
                slug: "garlic-granules",
                category: "garlic",
                image: "/images/granuels.jpeg",
                description: "Dehydrated Garlic Granules provide uniform sizing suitable for spice blends, seasonings, and general food preparation. Pavanity Global ensures clear specifications, regular availability, and smooth export management, making sourcing simple. The granules mix evenly in both dry and liquid uses, supporting consistency in the final product.",
                specifications: {
                    size: "Granules / 0.5–1 mm",
                    origin: "India",
                    packing: "10 kgs, 20 kgs, 25 kgs - Laminated paperbag and box",
                },
            },
            {
                id: 404,
                name: "Dehydrated Garlic Chopped",
                slug: "garlic-chopped",
                category: "garlic",
                image: "/images/chopped.jpeg",
                description: "Dehydrated Garlic Chopped offers a balanced texture and clear garlic profile suitable for a wide range of food uses. Pavanity Global provides defined product details, steady availability, and organized export support to ensure smooth sourcing. The chopped pieces blend easily into various preparations where a visible garlic presence is preferred.",
                specifications: {
                    size: "Chopped / 3–5 mm",
                    origin: "India",
                    packing: "10 kgs, 20 kgs, 25 kgs - Laminated paperbag and box",
                },
            },
            {
                id: 405,
                name: "Dehydrated Garlic Minced",
                slug: "garlic-minced",
                category: "garlic",
                image: "/images/minced.jpeg",
                description: "Dehydrated Garlic Minced features fine, even particle sizing that fits well into seasonings, mixes, sauces, and everyday food applications. Pavanity Global maintains consistent quality, reliable supply, and coordinated export handling, helping buyers receive a dependable ingredient. The minced format spreads uniformly and supports balanced flavour throughout the recipe.",
                specifications: {
                    size: "Minced / 1–3 mm",
                    origin: "India",
                    packing: "10 kgs, 20 kgs, 25 kgs - Laminated paperbag and box",
                },
            },
            {
                id: 406,
                name: "Dehydrated Garlic Cloves",
                slug: "garlic-cloves",
                category: "garlic",
                image: "/images/chopped.jpeg",
                description: "Dehydrated Garlic Cloves retain their natural shape and clean garlic profile, making them suitable for preparations requiring larger, identifiable pieces. Pavanity Global provides consistent parameters, predictable availability, and organized export support for easy sourcing. The cloves incorporate smoothly into various culinary uses.",
                specifications: {
                    size: "Cloves",
                    origin: "India",
                    packing: "25 kgs - Laminated paperbag, liner bag and box",
                },
            },
        ],
    },
    {
        id: 5,
        name: "Oilseeds",
        slug: "oilseeds",
        icon: "seed",
        image: "/images/oil-seeds.jpeg",
        tagline: "Oilseeds for Export",
        description:
            "High-quality sesame seeds (black, hulled & natural), chia seeds, and premium peanuts (Java, TJ, Bold) sourced from certified Indian farms. Ideal for food manufacturers, bakeries, and health food brands across global markets.",
        products: [
            {
                id: 501,
                name: "Black Sesame Seeds",
                slug: "black-sesame-seeds",
                category: "oilseeds",
                image: "/images/black-sesame-seeds.jpg",
                description: "Z Black Sesame Seeds have a natural dark colour and a clean seed appearance. They are commonly used in general food applications where uniform seed texture and visual appeal are preferred. The seeds are suitable for everyday usage and can be included in a variety of food preparations. Pavanity Global offers Z Black Sesame Seeds with clear specifications and structured supply options for regular buyer requirements.",
                specifications: {
                    origin: "Gujarat - India",
                    size: "Z Black Sortex",
                    qualities: "Purity: 99.50%, 99.99% - GMO Status: Not Genetically Modified - Oil Content: 42-48% Max",
                    packing: "1 kg, 5 kg, 25 kg, 40 kg - Loading: 19 Tons",
                },
            },
            {
                id: 502,
                name: "Hulled Sesame Seeds",
                slug: "hulled-sesame-seeds",
                category: "oilseeds",
                image: "/images/sesame-seeds-dark-background.jpg",
                description: "Hulled Sesame Seeds offer a clean surface and uniform light tone. These seeds are suitable for multiple food uses where a soft texture and refined appearance are preferred. They integrate comfortably into various standard applications. Pavanity Global provides Hulled Sesame Seeds with clear specifications for straightforward procurement.",
                specifications: {
                    origin: "Gujarat - India",
                    size: "Machine Clean And Sortex",
                    qualities: "Purity: 99.50%, 99.99% - GMO Status: Not Genetically Modified - Oil Content: 42-48% Max",
                    packing: "1 kg, 5 kg, 25 kg, 40 kg - Loading: 19 Tons",
                },
            },
            {
                id: 503,
                name: "Natural Sesame Seeds",
                slug: "natural-sesame-seeds",
                category: "oilseeds",
                image: "/images/sesame-seeds-dark-background.jpg",
                description: "Natural White Sesame Seeds feature a light seed colour and smooth texture. They are commonly used in general food practices where neat seed appearance and simple functionality are important. Their balanced seed profile supports easy usage across different food categories. Pavanity Global presents Natural White Sesame Seeds with defined parameters suitable for regular sourcing needs.",
                specifications: {
                    origin: "Gujarat - India",
                    size: "Machine Clean And Sortex",
                    qualities: "Purity: 99.95%, 99.90% - GMO Status: Not Genetically Modified - Oil Content: 42-48% Max",
                    packing: "1 kg, 5 kg, 25 kg, 40 kg - Loading: 19 Tons",
                },
            },
            {
                id: 504,
                name: "Chia Seeds",
                slug: "chia-seeds",
                category: "oilseeds",
                image: "/images/chia-seed.jpg",
                description: "Chia Seeds from Pavanity Global are small, naturally shaped seeds with a smooth texture and neutral taste, making them easy to add to a variety of everyday food preparations. They blend well into drinks, bakery items, cereals, and general mixes, while their natural seed composition supports versatile use across different applications. Chia seeds are commonly appreciated for containing naturally occurring nutrients such as fiber, plant-based protein, and essential fatty acids, which contribute to general dietary balance. Their simple handling, clean appearance, and ability to mix smoothly into recipes make them a practical ingredient for multiple food categories.",
                specifications: {
                    origin: "Gujarat - India",
                    size: "1mm to 2mm - Small, oval-shaped seeds with a shiny surface",
                    color: "Black, white, or a mix of both",
                    qualities: "Purity: 99-99.5% - Foreign Matter: 0.5% max - Admixture: 0.5% max - Moisture: 6-8% max - Omega-3: 18-22% - Protein: 16-23% - Fiber: 30-36% - Total Fat: 30-35% - Broken Seeds: 1% max",
                    aroma: "Neutral, slightly nutty aroma",
                    packing: "As per requirements - Meets international standards for pesticide residue and microbial load",
                },
            },
            {
                id: 505,
                name: "Java Peanuts",
                slug: "java-peanuts",
                category: "oilseeds",
                image: "/images/peanuts.jpg",
                description: "Java Peanuts are known for their naturally mild aroma, smooth taste, and uniform round kernel shape. They are appreciated for their balanced composition, offering a dependable combination of protein, healthy fats, and essential nutrients. Java peanuts are commonly used in snacks, roasted mixes, and general food applications due to their clean flavour and steady performance. Pavanity Global maintains consistent quality parameters, reliable availability, and organized export support, ensuring smooth sourcing for buyers. Their natural sweetness, uniform kernel appearance, and stable handling characteristics make Java peanuts a preferred choice across multiple market segments.",
                specifications: {
                    origin: "Gujarat - India",
                    size: "50/60 Count, 80/90 Count",
                    qualities: "Moisture: 7-8% Max, Admixture: 1-2% Max, Foreign Material: 1% Max, Oil Content: 42-48% Max",
                    packing: "1 to 50 kg Jute Bag, PP Bag - Loading: 19 to 27 tons",
                },
            },
            {
                id: 506,
                name: "TJ Peanuts",
                slug: "tj-peanuts",
                category: "oilseeds",
                image: "/images/peanuts.jpg",
                description: "TJ Peanuts feature a neat and uniform kernel profile that supports a wide range of culinary and food-related uses. They carry a balanced taste and natural richness, offering suitability for snacks, roasted applications, blending, and everyday consumption. Their structure allows for dependable behaviour during use, supporting both flavour and texture needs. Pavanity Global focuses on steady supply, clear specifications, and well-coordinated export operations, helping buyers receive a consistent and predictable product. This combination of reliability and natural peanut quality makes TJ peanuts a solid fit for varied markets.",
                specifications: {
                    origin: "Gujarat - India",
                    size: "50/60 Count, 80/90 Count",
                    qualities: "Moisture: 7-8% Max, Admixture: 1-2% Max, Foreign Material: 1% Max, Oil Content: 42-48% Max",
                    packing: "1 to 50 kg Jute Bag, PP Bag - Loading: 19 to 27 tons",
                },
            },
            {
                id: 507,
                name: "Bold Peanuts",
                slug: "bold-peanuts",
                category: "oilseeds",
                image: "/images/peanuts.jpg",
                description: "Bold Peanuts are recognized for their larger kernel size, firm texture, and fuller peanut character. They provide a naturally rich taste and are suitable for a variety of uses including direct consumption, snacks, confectionery, and general food preparation. Their strength, shape retention, and natural oil balance make them favourable in applications requiring a noticeable peanut presence. Pavanity Global ensures defined quality parameters, consistent supply cycles, and structured export coordination to support smooth sourcing. Bold peanuts offer dependable performance and a stable profile, making them a popular and versatile choice for buyers.",
                specifications: {
                    origin: "Gujarat - India",
                    size: "38/42 Count, 50/60 Count",
                    qualities: "Moisture: 7-8% Max, Admixture: 1-2% Max, Foreign Material: 1% Max, Oil Content: 42-48% Max",
                    packing: "1 to 50 kg Jute Bag, PP Bag - Loading: 19 to 27 tons",
                },
            },
        ],
    },
    {
        id: 6,
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
                id: 601,
                name: "Psyllium Husk",
                slug: "psyllium-husk",
                category: "psyllium-husk",
                image: "/images/psyllium-husk.jpeg",
                description: "Psyllium Husk from Pavanity Global is a natural, light-coloured husk known for its smooth texture and easy blending characteristics, making it suitable for a variety of everyday food applications. Its clean appearance, neutral taste, and ability to absorb water allow it to fit well into bakery mixes, beverages, food blends, and supplement preparations. Offered in multiple purities such as 85%, 95%, 98%, and 99%, Psyllium Husk supports a wide range of formulation needs across both standard and premium product categories. Its simple handling, natural composition, and versatile usage make it a practical ingredient for various food-related requirements.",
                specifications: {
                    origin: "India",
                    color: "Natural cream",
                    aroma: "Neutral",
                    qualities: "Purity: 85%, 95%, 98%, 99% - Moisture: Maximum 10% - Swell Volume: 35-70 ml/g (varies by grade) - Admixture: Low - GMO Status: Non-GMO",
                    packing: "25 kg / 50 kg - Shelf Life: 1 year",
                    standard: "Common Uses: Food blends, bakery mixes, beverages, supplement formulations, and general applications",
                },
            },
        ],
    },
    {
        id: 7,
        name: "Jaggery",
        slug: "jaggery",
        icon: "sugar",
        image: "/images/jaggery-cubes.jpg",
        tagline: "Natural Cane Sugar Alternative",
        description:
            "Traditional Indian jaggery in cubes and powder form. Unrefined natural sweetener ideal for health-conscious food manufacturers, confectionery, and beverage industries worldwide.",
        products: [
            {
                id: 701,
                name: "Jaggery Cubes",
                slug: "jaggery-cubes",
                category: "jaggery",
                image: "/images/jaggery-cubes.jpg",
                description: "Jaggery from Pavanity Global is known for its natural sweetness, clean appearance, and smooth texture, making it suitable for a wide range of food applications. Its golden to brown color and naturally formed structure reflect traditional methods, offering a simple and authentic sweetening option. Jaggery is valued for its mild flavour and suitability for varied culinary preferences across global markets.",
                specifications: {
                    origin: "India",
                    color: "Golden Yellow to Brown",
                    size: "Blocks / Cubes / Rounds / Cones",
                    aroma: "Natural sweet aroma",
                    qualities: "Appearance: Clean and uniform - Texture: Naturally firm - Moisture: Low - Admixture: Minimal - GMO Status: Non-GMO",
                    packing: "1 kg, 5 kg, 25 kg (or as required)",
                },
            },
            {
                id: 702,
                name: "Jaggery Powder",
                slug: "jaggery-powder",
                category: "jaggery",
                image: "/images/jaggery-powder.jpg",
                description: "Jaggery Powder from Pavanity Global offers a fine, free-flowing texture with a natural golden tone, making it easy to blend into many food preparations. Its mild aroma and smooth mixing character make it suitable for different applications where a natural sweetening profile is needed. The powder form supports convenient handling and general formulation requirements.",
                specifications: {
                    origin: "India",
                    color: "Light Golden to Brown",
                    aroma: "Natural sweet aroma",
                    qualities: "Appearance: Fine, free-flowing powder - Texture: Smooth and easy to mix - Moisture: Low - Admixture: Minimal - GMO Status: Non-GMO",
                    packing: "1 kg, 5 kg, 10 kg, 25 kg",
                },
            },
        ],
    },
    {
        id: 8,
        name: "Agro and Allied Food Products",
        slug: "agro-allied-food-products",
        icon: "food",
        image: "/images/agro-and-filled-food-products-main.jpeg",
        tagline: "Nutritional Food Ingredients",
        description:
            "Moringa powder, peanut butter, and peanut oil cake for health food and nutraceutical industries. Processed to preserve nutritional value and meet international food safety standards.",
        products: [
            {
                id: 801,
                name: "Moringa Leaf Powder",
                slug: "moringa-powder",
                category: "agro-allied-food-products",
                image: "/images/moringa.jpg",
                description: "Moringa Leaf Powder is produced from the dried leaves of the Moringa oleifera tree, known globally as the \"Miracle Tree\" due to its extraordinary nutritional value. The leaves are carefully harvested, shade-dried to preserve essential nutrients, and finely milled into a vibrant green powder. Rich in antioxidants, vitamins, minerals, amino acids, and chlorophyll, Moringa Leaf Powder is widely used in the nutraceutical, food, and herbal supplement industries. Its excellent digestibility and natural, plant-based composition make it a preferred ingredient for health-focused formulations, beverages, capsules, and functional foods. Our product meets strict international quality standards, ensuring maximum purity, safety, and export readiness.",
                specifications: {
                    size: "80 Mesh",
                    color: "Green",
                    origin: "India",
                    qualities: "Purity: 100% - Grade: Food Grade - Processing Type: Air Dried - Form: Powder - Part Used: Leaves - Moisture Content: < 8%",
                    packing: "PP Bag - Packaging Size: As per Requirement",
                    standard: "Storage Instructions: Cool & Dry Place - Usages: Beneficial against digestive disorders; supports immunity & nutritional balance",
                },
            },
            {
                id: 802,
                name: "Peanut Butter",
                slug: "peanut-butter",
                category: "agro-allied-food-products",
                image: "/images/homemade-peanut-butter-with-peanuts-grey-concrete-table-top-view.jpg",
                description: "Pavanity Global supplies peanut butter for international trade in multiple variants such as creamy, crunchy, unsweetened, chocolate, honey, and jaggery. The product is prepared through a consistent process and offered in retail jars or bulk pails as per buyer requirements. We support private label projects, bulk supply, and market-specific packaging for importers, distributors, and wholesale buyers.",
                specifications: {
                    color: "Light to medium brown",
                    aroma: "Typical roasted peanut aroma",
                    qualities: "Product Type: Processed Nut Paste - Category: Plant-Based Food Spread - Base Ingredient: Roasted Peanuts - Optional Ingredients: Salt, Sweetener (Sugar/Honey/Jaggery), Cocoa Powder, Plant Protein, Food-Grade Emulsifier - No artificial colours or flavours added - Texture: Smooth or Crunchy (variant dependent)",
                    packing: "Retail Packaging: PET/Glass Jars (340g, 510g, 1kg) - Bulk Packaging: 5kg / 10kg / 20kg / 25kg food-grade pails - Export Packaging: 12 or 24 jars per carton, palletization on request",
                    standard: "Manufactured following Good Manufacturing Practices (GMP) - Facility follows standard food safety management systems - Batch testing available upon request - Export packaging meets international shipment standards - Store in a cool, dry place, away from direct sunlight - Refrigeration not required unless specified - Stir well if natural oil separation occurs - Allergen Information: Contains peanuts - May be processed in a facility handling other allergens",
                    moq: "Available Variants: Creamy, Crunchy, Natural Unsweetened, Chocolate, Honey, Jaggery, High-Protein, Custom Flavours",
                },
            },
            {
                id: 803,
                name: "Peanut Oil Cake",
                slug: "peanut-oil-cake",
                category: "agro-allied-food-products",
                image: "/images/top-view-nuts-with-copy-space.jpg",
            },
            {
                id: 804,
                name: "Indian Groundnut Extraction Meal",
                slug: "indian-groundnut-extraction-meal",
                category: "agro-allied-food-products",
                image: "/images/top-view-nuts-with-copy-space.jpg",
                description: "Peanut Extraction Meal, also known as Groundnut Extraction Meal, is obtained after the oil extraction process from peanuts. It is commonly used as a protein-rich component in animal and poultry feed formulations. The product is supplied in granule or powder form and supports regular feed requirements. The meal is suitable for poultry, cattle, and livestock feed applications. It is brown in color, easy to blend with other feed ingredients, and used as part of daily feed rations. Peanut Extraction Meal helps maintain consistent nutrition levels and can be included in various feed formulations depending on the needs of buyers or feed manufacturers.",
                specifications: {
                    color: "Brown",
                    qualities: "Type: Groundnut Extraction Meal - Main Ingredient: Processed Groundnut Residue - Form: Granule or Powder - Variety: Nutrition Feeds - Suitable For: Poultry, Cattle, and Livestock",
                    standard: "Application Dosage: Oral (As per feed formulation requirement) - Efficacy: Supports Feed Preservation, Growth, and General Health (as part of balanced feed)",
                },
            },
        ],
    },
    {
        id: 9,
        name: "Spices",
        slug: "spices",
        icon: "spice",
        image: "/images/spices-profile.jpeg",
        tagline: "Authentic Indian Spices",
        description:
            "Pavanity Global supplies a wide range of Indian spices used in cooking, seasoning, and food processing. Our focus is on clean sourcing, proper grading, and safe packing so that buyers receive steady quality for international requirements. We deal in red chilli, cloves, turmeric fingers, green cardamom, cumin seeds, fenugreek seeds, fennel seeds, black mustard seeds, and yellow mustard seeds.",
        products: [
            {
                id: 901,
                name: "Cumin Seeds",
                slug: "cumin-seeds",
                category: "spices",
                image: "/images/cumin-spices.jpg",
                description: "Cumin seeds are used for cooking, seasoning, and spice blends. Their natural aroma makes them popular in global kitchens and food industries. We supply cleaned and properly graded cumin seeds suitable for export. Keywords: cumin seeds exporter, jeera supplier India, cumin wholesale, Indian cumin export.",
                specifications: {
                    color: "Brownish-yellow",
                    qualities: "Botanical: Cuminum cyminum - Form: Whole dried seeds",
                    packing: "PP / Jute / Cartons - 10kg / 25kg / 50kg",
                    moq: "20FT: 14 MT, 40FT: 26 MT",
                },
            },
            {
                id: 902,
                name: "Fenugreek Seeds",
                slug: "fenugreek-seeds",
                category: "spices",
                image: "/images/spices-profile.jpeg",
                description: "Fenugreek seeds are used in spices, pickles, seasonings, and everyday cooking. They are known for their natural taste and stable quality. We supply fenugreek seeds that are properly cleaned and suitable for bulk buyers. Keywords: fenugreek seeds exporter, methi seeds supplier, Indian fenugreek wholesale.",
                specifications: {
                    color: "Golden yellow",
                    qualities: "Botanical: Trigonella foenum-graecum - Form: Whole dried seeds",
                    packing: "PP Bags - 25kg / 50kg",
                    moq: "20FT: 24 MT, 40FT: 27 MT",
                },
            },
            {
                id: 903,
                name: "Black Mustard Seeds",
                slug: "mustard-seeds",
                category: "spices",
                image: "/images/spices-profile.jpeg",
                description: "Black mustard seeds are used in oil extraction, seasoning, and tempering. They offer a natural pungent taste and are widely used in food industries. We provide clean, uniform seeds suitable for bulk export. Keywords: black mustard seeds exporter, Indian mustard supplier, rai exporter.",
                specifications: {
                    color: "Black–dark brown",
                    qualities: "Botanical: Brassica nigra - Form: Whole dried seeds",
                    packing: "PP / Jute / Paper Bags - 10kg / 25kg / 50kg",
                    moq: "20FT: 22 MT, 40FT: 27 MT",
                },
            },
            {
                id: 904,
                name: "Fennel Seeds",
                slug: "fennel-seeds",
                category: "spices",
                image: "/images/spices-profile.jpeg",
                description: "Fennel seeds are used in cooking, mouth fresheners, seasoning mixes, and food processing. They have a mild sweet flavor and steady aroma. Our fennel seeds are sorted to maintain good color and quality for export. Keywords: fennel seeds exporter, saunf supplier India, fennel wholesale, spice exporter India.",
                specifications: {
                    color: "Green–yellowish",
                    qualities: "Botanical: Foeniculum vulgare - Form: Whole dried seeds",
                    packing: "PP / Jute / Paper Bags - 10kg / 25kg / 50kg",
                    moq: "20FT: 14 MT, 40FT: 26 MT",
                },
            },
            {
                id: 905,
                name: "Red Chilli Whole",
                slug: "chilli-whole-powder",
                category: "spices",
                image: "/images/red-chilli-paste-black.jpg",
                description: "Red chilli whole is used worldwide for heat, flavor, and natural color. It is suitable for grinding, spice mixing, and food processing industries. We supply known varieties that meet international usage standards and offer steady quality for bulk buyers. Keywords: red chilli supplier, red chilli exporter, whole chilli export, Indian dry red chilli.",
                specifications: {
                    qualities: "Varieties: S17 Teja Chilli, Sanam (334), Byadgi, Wonder Hot, Guntur, 273 Wrinkle, 341 - Uses: Culinary, spice blends, oleoresin extraction, food coloring",
                    packing: "PP/Jute Bags (25kg / 50kg) - Custom packing available",
                    moq: "20FT: 7–8 MT, 40FT: 14–15 MT",
                },
            },
            {
                id: 906,
                name: "Turmeric Fingers",
                slug: "turmeric-whole-powder",
                category: "spices",
                image: "/images/blended-curcumin-powder-wooden-spoon.jpg",
                description: "Turmeric fingers are widely used for grinding into powder and for general food use. They provide natural color and aroma, making them important for spice processors and wholesalers. We supply clean, properly dried turmeric suitable for various applications. Keywords: turmeric fingers exporter, turmeric supplier India, whole turmeric export, Indian spices.",
                specifications: {
                    qualities: "Varieties: Maharashtra, Salem, Kaddapa, Nizamabad",
                    packing: "PP / Jute Bags - 25kg / 50kg",
                    moq: "20FT: 12–13 MT, 40FT: 25–26 MT",
                },
            },
            {
                id: 907,
                name: "Cinnamon Powder",
                slug: "cinnamon",
                category: "spices",
                image: "/images/many-cinnamon-sticks-white-surface.jpg",
                description: "Cinnamon Powder is a fine powder made from ground cinnamon sticks (bark), available in True Cinnamon (Cinnamomum verum) or Cassia Cinnamon (Cinnamomum cassia) varieties.",
                specifications: {
                    color: "Light brown to reddish-brown",
                    qualities: "Botanical Name: Cinnamomum verum (True Cinnamon) or Cinnamomum cassia (Cassia Cinnamon) - Form: Fine powder made from ground cinnamon sticks (bark)",
                    packing: "PP Bags, Paper Bags, or Cartons - Standard Sizes: 10kg, 25kg, 50kg, or customized packing",
                    moq: "20 FT Container: 10–12 MT, 40 FT Container: 20–22 MT",
                },
            },
            {
                id: 908,
                name: "Cloves (Whole)",
                slug: "cloves",
                category: "spices",
                image: "/images/pile-dried-natural-cloves-with-wooden-spoon-black-surface.jpg",
                description: "Whole cloves are used in daily cooking, tea blends, beverages, and spice mixes. They offer a natural aroma and warm taste that enhances food preparation. Our cloves are sorted for size and cleanliness, making them suitable for wholesale and retail markets. Keywords: cloves exporter, whole cloves supplier, Indian cloves export, spice wholesaler.",
                specifications: {
                    qualities: "Botanical Name: Syzygium aromaticum - Form: Whole dried flower buds",
                    packing: "PP/Jute Bags or Cartons - 10kg / 25kg / 50kg",
                    moq: "20FT: 10–12 MT, 40FT: 20–22 MT",
                },
            },
            {
                id: 909,
                name: "Black Pepper",
                slug: "black-pepper",
                category: "spices",
                image: "/images/spices-profile.jpeg",
            },
            {
                id: 910,
                name: "Green Cardamom",
                slug: "cardamom",
                category: "spices",
                image: "/images/spices-profile.jpeg",
                description: "Green cardamom is used in tea, sweets, bakery items, and food flavoring. It is valued for its natural aroma and clean appearance. Our cardamom is sorted for size, making it suitable for both household packing and commercial use. Keywords: green cardamom supplier, cardamom exporter India, elaichi wholesaler, Indian spices exporter.",
                specifications: {
                    color: "Bright green",
                    qualities: "Common Names: Elaichi, True Cardamom, Chhoti Elaichi - Botanical: Elettaria cardamomum - Shape: Oval pods",
                    packing: "Poly / Jute / Vacuum Packs - 1kg / 5kg / 25kg",
                    moq: "20FT: 10 MT, 40FT: 20 MT",
                },
            },
            {
                id: 911,
                name: "Yellow Mustard Seeds",
                slug: "yellow-mustard-seeds",
                category: "spices",
                image: "/images/spices-profile.jpeg",
                description: "Yellow mustard seeds are used in sauces, spreads, seasonings, and food products. They have a mild taste and natural color that fits many applications. Our yellow mustard is cleaned and packed safely for international shipments. Keywords: yellow mustard seeds exporter, mustard supplier India, food-grade mustard export.",
                specifications: {
                    color: "Light yellow–golden",
                    qualities: "Botanical: Sinapis alba - Form: Whole dried seeds",
                    packing: "PP / Jute / Paper Bags - 10kg / 25kg / 50kg",
                    moq: "20FT: 22 MT, 40FT: 27 MT",
                },
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
