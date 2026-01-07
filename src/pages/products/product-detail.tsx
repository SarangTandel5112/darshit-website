import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Images
import bg from "../../assets/img/shortcode/breadcumb.jpg";
import placeholderImage from "../../assets/img/about/about-banner-01.jpg"; // Temporary placeholder

// Icons
import {
    FaBoxes,
    FaCertificate,
    FaIndustry,
    FaLeaf,
    FaShieldAlt,
} from "react-icons/fa";

// Data
import { getCategoryBySlug } from "../../data/products-data";

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";

import Aos from "aos";

// Product category detailed content - Export-focused
const divisionDetails: { [key: string]: any } = {
    "dehydrated-onion-garlic": {
        overview:
            "Bulk-supplied dehydrated onion and garlic products for international B2B buyers, food manufacturers, and HoReCa distribution. Processed under controlled dehydration conditions to meet export quality standards and buyer specifications.",
        categories: [
            {
                name: "Dehydrated Onion",
                examples: "Onion Powder, Onion Flakes, Onion Granules, Onion Chopped, Onion Minced",
            },
            {
                name: "Dehydrated Garlic",
                examples: "Garlic Powder, Garlic Flakes, Garlic Granules, Garlic Chopped, Garlic Minced",
            },
            {
                name: "Custom Blends",
                examples: "Onion-Garlic Mix, Seasoning Bases, Curry Powders",
            },
            {
                name: "Food-Grade Ingredients",
                examples: "Culinary Applications, Seasoning Manufacturing",
            },
        ],
        applications: [
            "Food Manufacturing & Processing",
            "Instant Food Products",
            "HoReCa (Hotels, Restaurants, Catering)",
            "Ready-to-Eat Meal Manufacturers",
        ],
        packaging:
            "Bulk supply in 10kg, 15kg, 20kg cartons with inner poly liners. Custom packaging configurations available for export orders.",
        quality:
            "Food-grade dehydration facility. Moisture content controlled per specifications. Microbiological testing. Export documentation and certificates of analysis provided.",
    },
    "millets-grains": {
        overview:
            "Bulk-supplied millets, grains, and cereal ingredients for international B2B buyers, food manufacturers, and HoReCa distribution. Sourced from agricultural regions and processed to meet export quality and buyer specifications.",
        categories: [
            {
                name: "Millets",
                examples:
                    "Foxtail Millet, Pearl Millet, Finger Millet, Proso Millet",
            },
            {
                name: "Ancient Grains",
                examples: "Quinoa, Amaranth, Buckwheat, Sorghum",
            },
            { name: "Cereal Grains", examples: "Rice, Wheat, Oats, Barley" },
            {
                name: "Processed Grains",
                examples: "Millet Flour, Grain Flakes, Puffed Grains",
            },
        ],
        applications: [
            "Food Manufacturing & Processing",
            "Health Food Products",
            "Breakfast Cereal Industry",
            "Bakery & Snack Manufacturing",
        ],
        packaging:
            "Bulk supply in 25kg, 50kg bags with food-grade inner liners. Custom packaging available for export requirements.",
        quality:
            "Clean sorting and grading processes. Moisture content controlled. Pesticide residue testing. Export documentation and phytosanitary certificates provided.",
    },
    "seeds-dietary-fibers": {
        overview:
            "Bulk-supplied seeds and dietary fibers for international B2B buyers, food manufacturers, and HoReCa distribution. Processed and packed under controlled conditions to meet export quality standards.",
        categories: [
            {
                name: "Nutritional Seeds",
                examples:
                    "Chia Seeds, Flax Seeds, Pumpkin Seeds, Sunflower Seeds",
            },
            {
                name: "Specialty Seeds",
                examples: "Sesame Seeds, Poppy Seeds, Hemp Seeds, Basil Seeds",
            },
            {
                name: "Dietary Fibers",
                examples: "Psyllium Husk, Wheat Bran, Oat Fiber, Inulin",
            },
            {
                name: "Seed Powders",
                examples: "Flaxseed Powder, Chia Powder, Hemp Protein",
            },
        ],
        applications: [
            "Health Food Manufacturing",
            "Functional Food Products",
            "Supplement Industry",
            "Bakery & Snack Ingredients",
        ],
        packaging:
            "Bulk supply in 10kg, 15kg, 25kg units with moisture-proof packaging. Custom configurations available for export orders.",
        quality:
            "Clean sorting facility. Purity testing. Microbiological testing. Organic certification available for select products. Export documentation provided.",
    },
    "jaggery-natural-sweeteners": {
        overview:
            "Bulk-supplied jaggery, natural sweeteners, and sugar alternatives for international B2B buyers, food manufacturers, and HoReCa distribution. Processed to meet export quality standards and destination market requirements.",
        categories: [
            {
                name: "Jaggery Products",
                examples: "Jaggery Powder, Jaggery Cubes, Liquid Jaggery",
            },
            {
                name: "Natural Sweeteners",
                examples: "Coconut Sugar, Date Sugar, Palm Sugar",
            },
            {
                name: "Sugar Alternatives",
                examples: "Stevia, Erythritol, Monk Fruit Sweetener",
            },
            {
                name: "Specialty Sugars",
                examples: "Muscovado, Demerara, Raw Cane Sugar",
            },
        ],
        applications: [
            "Health Food Manufacturing",
            "Sugar-Free Product Development",
            "Beverage Industry",
            "Bakery & Confectionery",
        ],
        packaging:
            "Bulk supply in 15kg, 20kg, 25kg units. Custom packaging available for export specifications.",
        quality:
            "Food-grade processing facility. Purity testing. Moisture content control. Export documentation and certificates of analysis provided.",
    },
    "nutritional-value-added-ingredients": {
        overview:
            "Bulk-supplied nutritional and value-added food ingredients for international B2B buyers, food manufacturers, and HoReCa distribution. Formulated and processed to meet export quality standards and functional specifications.",
        categories: [
            {
                name: "Protein Ingredients",
                examples:
                    "Pea Protein, Soy Protein, Rice Protein, Hemp Protein",
            },
            {
                name: "Superfoods",
                examples: "Spirulina, Moringa Powder, Wheatgrass, Chlorella",
            },
            {
                name: "Fortification Ingredients",
                examples:
                    "Vitamin Premixes, Mineral Blends, Functional Additives",
            },
            {
                name: "Value-Added Powders",
                examples:
                    "Nutritional Mixes, Health Drink Bases, Supplement Powders",
            },
        ],
        applications: [
            "Functional Food Manufacturing",
            "Supplement Industry",
            "Health & Wellness Products",
            "Fortified Food Products",
        ],
        packaging:
            "Bulk supply in 10kg, 15kg, 25kg units with moisture-proof and light-resistant packaging. Custom configurations for export.",
        quality:
            "GMP facility for nutritional ingredients. Nutritional analysis and testing. Heavy metal testing. Export documentation and specifications provided.",
    },
    oilseeds: {
        overview:
            "Premium oilseeds including sesame seeds and chia seeds for international B2B buyers and food manufacturers. Sourced from certified Indian farms and processed to meet export quality standards.",
        categories: [
            {
                name: "Sesame Seeds",
                examples: "Black Sesame Seeds, White Sesame Seeds",
            },
            {
                name: "Super Seeds",
                examples: "Chia Seeds",
            },
            {
                name: "Hulled & Natural",
                examples: "Hulled Sesame, Natural Sesame",
            },
            {
                name: "Roasted & Raw",
                examples: "Roasted Seeds, Raw Seeds for Processing",
            },
        ],
        applications: [
            "Bakery & Confectionery",
            "Health Food Manufacturing",
            "Oil Extraction Industry",
            "Tahini & Paste Production",
        ],
        packaging:
            "Bulk supply in 25kg, 50kg bags with moisture-proof packaging. Container loads available for export.",
        quality:
            "Certified processing facility. Purity testing. Microbiological analysis. Export documentation provided.",
    },
    "psyllium-husk": {
        overview:
            "Premium-grade psyllium husk sourced from Gujarat's finest plantations for pharmaceutical, nutraceutical, and food supplement industries worldwide.",
        categories: [
            {
                name: "Psyllium Husk",
                examples: "95% Purity, 98% Purity, 99% Purity",
            },
            {
                name: "Psyllium Powder",
                examples: "Food Grade, Pharmaceutical Grade",
            },
            {
                name: "Industrial Grade",
                examples: "Psyllium Seeds, Psyllium Meal",
            },
            {
                name: "Custom Specifications",
                examples: "Mesh Size, Purity Level",
            },
        ],
        applications: [
            "Pharmaceutical Industry",
            "Dietary Supplement Manufacturing",
            "Functional Food Products",
            "Health & Wellness Products",
        ],
        packaging:
            "Bulk supply in 25kg bags with inner poly liners. Custom packaging available for export orders.",
        quality:
            "GMP-certified facility. Heavy metal testing. Microbial analysis. Full traceability and export documentation.",
    },
    jaggery: {
        overview:
            "Traditional Indian jaggery (unrefined cane sugar) in cubes and powder form for health-conscious food manufacturers and confectionery industries worldwide.",
        categories: [
            {
                name: "Jaggery Cubes",
                examples: "Small Cubes, Large Cubes, Cut Pieces",
            },
            {
                name: "Jaggery Powder",
                examples: "Fine Powder, Granulated Form",
            },
            {
                name: "Organic Jaggery",
                examples: "Certified Organic, Natural Processing",
            },
            {
                name: "Specialty Products",
                examples: "Flavored Jaggery, Premium Grade",
            },
        ],
        applications: [
            "Confectionery Manufacturing",
            "Beverage Industry",
            "Health Food Products",
            "Traditional Sweet Making",
        ],
        packaging:
            "Bulk supply in 10kg, 25kg units. Custom packaging available for export markets.",
        quality:
            "Food-grade processing. Chemical-free production. Quality testing. Export documentation and certifications provided.",
    },
    "value-added-ingredients": {
        overview:
            "Premium functional food ingredients including moringa powder and peanut butter for health food and nutraceutical industries.",
        categories: [
            {
                name: "Moringa Products",
                examples: "Moringa Leaf Powder, Moringa Tea Cuts",
            },
            {
                name: "Peanut Butter",
                examples: "Creamy, Crunchy, Organic Varieties",
            },
            {
                name: "Nutritional Powders",
                examples: "Protein-Rich, Superfood Blends",
            },
            {
                name: "Custom Formulations",
                examples: "Private Label, OEM Products",
            },
        ],
        applications: [
            "Health Food Manufacturing",
            "Supplement Industry",
            "Functional Food Products",
            "Protein Bar & Snack Production",
        ],
        packaging:
            "Bulk supply in 10kg, 15kg, 25kg units with moisture-proof and light-resistant packaging.",
        quality:
            "GMP facility for nutritional ingredients. Nutritional analysis. Heavy metal testing. Export documentation provided.",
    },
    spices: {
        overview:
            "Export-quality whole and powdered spices sourced from India's premier spice-growing regions with full traceability and quality assurance.",
        categories: [
            {
                name: "Seeds",
                examples: "Cumin Seeds, Fenugreek Seeds, Mustard Seeds, Fennel Seeds",
            },
            {
                name: "Whole Spices",
                examples: "Cinnamon, Cloves, Black Pepper, Cardamom",
            },
            {
                name: "Powdered Spices",
                examples: "Chilli Powder, Turmeric Powder, Spice Blends",
            },
            {
                name: "Premium Grades",
                examples: "A-Grade, Export Quality, Organic Certified",
            },
        ],
        applications: [
            "Food Manufacturing & Processing",
            "Spice Blend Production",
            "HoReCa Supply",
            "Retail Packaging & Distribution",
        ],
        packaging:
            "Bulk supply in 10kg, 15kg, 25kg bags with inner poly liners. Custom packaging for export.",
        quality:
            "Steam sterilization available. Purity testing. Microbiological analysis. Full traceability and export documentation.",
    },
};

export default function DivisionDetail() {
    const { slug } = useParams<{ slug: string }>();
    const category = getCategoryBySlug(slug || "");
    const details = slug ? divisionDetails[slug] : null;

    useEffect(() => {
        Aos.init();
        window.scrollTo(0, 0);
    }, []);

    if (!category) {
        return (
            <>
                <NavbarPavanity />
                <div className="s-py-100 text-center">
                    <h2 className="text-3xl font-semibold">
                        Product Category Not Found
                    </h2>
                    <Link to="/products" className="btn btn-solid mt-6">
                        <span>View All Products</span>
                    </Link>
                </div>
                <FooterPavanity />
            </>
        );
    }

    return (
        <>
            {/* Navbar */}
            <NavbarPavanity />

            {/* ============================================ */}
            {/* BREADCRUMB SECTION */}
            {/* ============================================ */}
            <div
                className="flex items-center gap-4 flex-wrap bg-overlay pt-32 pb-14 px-14 sm:pt-36 sm:pb-16 sm:px-16 before:bg-title before:bg-opacity-70"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="text-center w-full">
                    <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">
                        {category.name}
                    </h2>
                    <p className="text-white text-lg md:text-xl mt-3">
                        {category.tagline}
                    </p>
                    <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-4 flex-wrap">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>/</li>
                        <li className="text-primary">{category.name}</li>
                    </ul>
                </div>
            </div>

            {/* ============================================ */}
            {/* DIVISION OVERVIEW SECTION */}
            {/* ============================================ */}
            <div className="s-pb-100 pt-12 md:pt-16">
                <div
                    className="container-fluid"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="max-w-[1720px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2">
                        {/* Image Column */}
                        <div className="lg:bg-[#F8F8F9] lg:dark:bg-dark-secondary lg:pr-10 2xl:pr-0 relative">
                            <div>
                                <img
                                    className="object-cover w-full h-full"
                                    src={category.image || placeholderImage}
                                    alt={category.name}
                                />
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex items-center py-8 sm:py-12 px-5 sm:px-12 md:px-8 lg:pr-12 lg:pl-16 2xl:pl-[160px] bg-[#F8F8F9] dark:bg-dark-secondary">
                            <div className="lg:max-w-[600px]">
                                <div>
                                    <FaIndustry className="size-16 text-primary" />
                                </div>
                                <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                                    Division Overview
                                </h3>
                                <p className="mt-4 text-base sm:text-lg">
                                    {details.overview}
                                </p>
                                <div className="mt-6 md:mt-8">
                                    <Link
                                        to="/contact"
                                        className="inline-block bg-primary text-white px-6 py-3 text-base font-medium rounded-[5px] hover:bg-opacity-90 duration-300"
                                    >
                                        Request Product Catalog
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================ */}
            {/* AVAILABLE PRODUCTS LIST */}
            {/* ============================================ */}
            <div className="s-py-100 bg-[#F8F8F9] dark:bg-dark-secondary">
                <div className="container-fluid">
                    {/* Section Header */}
                    <div
                        className="max-w-xl mx-auto mb-8 md:mb-12 text-center"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div>
                            <FaLeaf className="mx-auto size-16 text-primary" />
                        </div>
                        <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                            Available Products
                        </h3>
                        <p className="mt-3">
                            Export-ready products available for international B2B buyers
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div
                        className="max-w-[1720px] mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                            {category.products.map((product) => (
                                <div
                                    key={product.id}
                                    className="p-6 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px] hover:shadow-lg hover:border-primary/30 duration-300 group"
                                >
                                    <div className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <h5 className="font-semibold text-base md:text-lg group-hover:text-primary duration-300">
                                            {product.name}
                                        </h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact CTA below products */}
                    <div className="max-w-3xl mx-auto mt-12 text-center" data-aos="fade-up" data-aos-delay="500">
                        <p className="text-base md:text-lg">
                            Need detailed specifications, pricing, or MOQ information for any of these products?
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block mt-4 bg-primary text-white px-8 py-3 text-base font-medium rounded-[5px] hover:bg-opacity-90 duration-300"
                        >
                            Request Product Specifications
                        </Link>
                    </div>
                </div>
            </div>

            {/* ============================================ */}
            {/* APPLICATIONS SECTION */}
            {/* ============================================ */}
            <div className="s-py-100">
                <div className="container-fluid">
                    <div
                        className="max-w-[1720px] mx-auto bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px] p-8 md:p-12"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        {/* Applications */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <FaLeaf className="size-12 text-primary" />
                                <h4 className="font-semibold text-xl md:text-2xl">
                                    Target Applications
                                </h4>
                            </div>
                            <ul className="space-y-3">
                                {details.applications.map(
                                    (app: string, index: number) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3"
                                        >
                                            <svg
                                                className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-base md:text-lg">
                                                {app}
                                            </span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================ */}
            {/* QUALITY & PACKAGING SECTION */}
            {/* ============================================ */}
            <div className="s-pb-100">
                <div className="container-fluid">
                    <div
                        className="max-w-[1720px] mx-auto grid lg:grid-cols-2 gap-8"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        {/* Quality Standards */}
                        <div className="p-8 md:p-10 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px]">
                            <div className="flex items-center gap-3 mb-4">
                                <FaShieldAlt className="size-12 text-primary" />
                                <h4 className="font-semibold text-xl md:text-2xl">
                                    Quality & Compliance
                                </h4>
                            </div>
                            <p className="text-base md:text-lg">
                                {details.quality}
                            </p>
                        </div>

                        {/* Packaging Options */}
                        <div className="p-8 md:p-10 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px]">
                            <div className="flex items-center gap-3 mb-4">
                                <FaCertificate className="size-12 text-primary" />
                                <h4 className="font-semibold text-xl md:text-2xl">
                                    Packaging Options
                                </h4>
                            </div>
                            <p className="text-base md:text-lg">
                                {details.packaging}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================ */}
            {/* BUSINESS ENQUIRY CTA */}
            {/* ============================================ */}
            <div className="s-pb-100">
                <div className="container-fluid">
                    <div
                        className="max-w-3xl mx-auto text-center p-8 md:p-12 bg-primary rounded-[10px]"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h3 className="text-white text-2xl md:text-3xl font-semibold">
                            Interested in {category.name}?
                        </h3>
                        <p className="text-white text-base md:text-lg mt-4">
                            Contact our export team to discuss specifications,
                            pricing, MOQ requirements, and delivery timelines
                            for international supply.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block mt-6 bg-white text-primary px-8 py-4 text-base md:text-lg font-semibold rounded-[5px] hover:bg-opacity-90 duration-300"
                        >
                            Request Business Enquiry
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <FooterPavanity />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    );
}
