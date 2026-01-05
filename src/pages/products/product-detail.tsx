import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Images
import bg from '../../assets/img/shortcode/breadcumb.jpg'
import placeholderImage from '../../assets/img/about/about-banner-01.jpg' // Temporary placeholder

// Icons
import { FaBoxes, FaCertificate, FaGlobeAmericas, FaIndustry, FaLeaf, FaShieldAlt } from 'react-icons/fa'

// Data
import { divisions } from "../../data/pavanity-data";

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";

import Aos from "aos";

// Product category detailed content - Export-focused
const divisionDetails: { [key: string]: any } = {
    "dehydrated-products": {
        overview: "Bulk-supplied dehydrated vegetables, fruits, and food ingredients for international B2B buyers, food manufacturers, and HoReCa distribution. Processed under controlled dehydration conditions to meet export quality standards and buyer specifications.",
        categories: [
            { name: "Dehydrated Vegetables", examples: "Onion Flakes, Garlic Flakes, Tomato Flakes, Potato Flakes" },
            { name: "Vegetable Powders", examples: "Onion Powder, Garlic Powder, Beetroot Powder, Spinach Powder" },
            { name: "Dehydrated Fruits", examples: "Mango Slices, Banana Chips, Apple Rings" },
            { name: "Custom Blends", examples: "Soup Mixes, Seasoning Bases, Curry Powders" }
        ],
        applications: [
            "Food Manufacturing & Processing",
            "Instant Food Products",
            "HoReCa (Hotels, Restaurants, Catering)",
            "Ready-to-Eat Meal Manufacturers"
        ],
        packaging: "Bulk supply in 10kg, 15kg, 20kg cartons with inner poly liners. Custom packaging configurations available for export orders.",
        quality: "Food-grade dehydration facility. Moisture content controlled per specifications. Microbiological testing. Export documentation and certificates of analysis provided."
    },
    "millets-grains": {
        overview: "Bulk-supplied millets, grains, and cereal ingredients for international B2B buyers, food manufacturers, and HoReCa distribution. Sourced from agricultural regions and processed to meet export quality and buyer specifications.",
        categories: [
            { name: "Millets", examples: "Foxtail Millet, Pearl Millet, Finger Millet, Proso Millet" },
            { name: "Ancient Grains", examples: "Quinoa, Amaranth, Buckwheat, Sorghum" },
            { name: "Cereal Grains", examples: "Rice, Wheat, Oats, Barley" },
            { name: "Processed Grains", examples: "Millet Flour, Grain Flakes, Puffed Grains" }
        ],
        applications: [
            "Food Manufacturing & Processing",
            "Health Food Products",
            "Breakfast Cereal Industry",
            "Bakery & Snack Manufacturing"
        ],
        packaging: "Bulk supply in 25kg, 50kg bags with food-grade inner liners. Custom packaging available for export requirements.",
        quality: "Clean sorting and grading processes. Moisture content controlled. Pesticide residue testing. Export documentation and phytosanitary certificates provided."
    },
    "seeds-dietary-fibers": {
        overview: "Bulk-supplied seeds and dietary fibers for international B2B buyers, food manufacturers, and HoReCa distribution. Processed and packed under controlled conditions to meet export quality standards.",
        categories: [
            { name: "Nutritional Seeds", examples: "Chia Seeds, Flax Seeds, Pumpkin Seeds, Sunflower Seeds" },
            { name: "Specialty Seeds", examples: "Sesame Seeds, Poppy Seeds, Hemp Seeds, Basil Seeds" },
            { name: "Dietary Fibers", examples: "Psyllium Husk, Wheat Bran, Oat Fiber, Inulin" },
            { name: "Seed Powders", examples: "Flaxseed Powder, Chia Powder, Hemp Protein" }
        ],
        applications: [
            "Health Food Manufacturing",
            "Functional Food Products",
            "Supplement Industry",
            "Bakery & Snack Ingredients"
        ],
        packaging: "Bulk supply in 10kg, 15kg, 25kg units with moisture-proof packaging. Custom configurations available for export orders.",
        quality: "Clean sorting facility. Purity testing. Microbiological testing. Organic certification available for select products. Export documentation provided."
    },
    "jaggery-natural-sweeteners": {
        overview: "Bulk-supplied jaggery, natural sweeteners, and sugar alternatives for international B2B buyers, food manufacturers, and HoReCa distribution. Processed to meet export quality standards and destination market requirements.",
        categories: [
            { name: "Jaggery Products", examples: "Jaggery Powder, Jaggery Cubes, Liquid Jaggery" },
            { name: "Natural Sweeteners", examples: "Coconut Sugar, Date Sugar, Palm Sugar" },
            { name: "Sugar Alternatives", examples: "Stevia, Erythritol, Monk Fruit Sweetener" },
            { name: "Specialty Sugars", examples: "Muscovado, Demerara, Raw Cane Sugar" }
        ],
        applications: [
            "Health Food Manufacturing",
            "Sugar-Free Product Development",
            "Beverage Industry",
            "Bakery & Confectionery"
        ],
        packaging: "Bulk supply in 15kg, 20kg, 25kg units. Custom packaging available for export specifications.",
        quality: "Food-grade processing facility. Purity testing. Moisture content control. Export documentation and certificates of analysis provided."
    },
    "nutritional-value-added-ingredients": {
        overview: "Bulk-supplied nutritional and value-added food ingredients for international B2B buyers, food manufacturers, and HoReCa distribution. Formulated and processed to meet export quality standards and functional specifications.",
        categories: [
            { name: "Protein Ingredients", examples: "Pea Protein, Soy Protein, Rice Protein, Hemp Protein" },
            { name: "Superfoods", examples: "Spirulina, Moringa Powder, Wheatgrass, Chlorella" },
            { name: "Fortification Ingredients", examples: "Vitamin Premixes, Mineral Blends, Functional Additives" },
            { name: "Value-Added Powders", examples: "Nutritional Mixes, Health Drink Bases, Supplement Powders" }
        ],
        applications: [
            "Functional Food Manufacturing",
            "Supplement Industry",
            "Health & Wellness Products",
            "Fortified Food Products"
        ],
        packaging: "Bulk supply in 10kg, 15kg, 25kg units with moisture-proof and light-resistant packaging. Custom configurations for export.",
        quality: "GMP facility for nutritional ingredients. Nutritional analysis and testing. Heavy metal testing. Export documentation and specifications provided."
    },
    "healthy-snacks": {
        overview: "Bulk-supplied healthy snacks and functional food products for international B2B buyers, food manufacturers, and HoReCa distribution. Processed and packed to meet export quality standards and shelf-life requirements.",
        categories: [
            { name: "Roasted Snacks", examples: "Roasted Nuts, Roasted Seeds, Mixed Dry Fruits" },
            { name: "Baked Snacks", examples: "Multigrain Chips, Baked Puffs, Seed Crackers" },
            { name: "Trail Mixes", examples: "Energy Mix, Protein Mix, Superfood Mix" },
            { name: "Functional Snacks", examples: "Protein Bars, Energy Balls, Granola Clusters" }
        ],
        applications: [
            "Retail Snack Distribution",
            "HoReCa Snack Supply",
            "Corporate & Gifting",
            "Health Food Retailers"
        ],
        packaging: "Bulk supply in 5kg, 10kg units. Retail packaging with nitrogen flushing available for extended shelf life.",
        quality: "Food-grade processing facility. Metal detection. Nitrogen packing for freshness. Nutritional labeling support for export markets."
    }
};

export default function DivisionDetail() {
    const { slug } = useParams<{ slug: string }>();
    const division = divisions.find(d => d.slug === slug);
    const details = slug ? divisionDetails[slug] : null;

    useEffect(()=>{
        Aos.init()
        window.scrollTo(0,0)
    },[])

    if (!division || !details) {
        return (
            <>
                <NavbarPavanity/>
                <div className="s-py-100 text-center">
                    <h2 className="text-3xl font-semibold">Division Not Found</h2>
                    <Link to="/products" className="btn btn-solid mt-6">
                        <span>View All Divisions</span>
                    </Link>
                </div>
                <FooterPavanity/>
            </>
        );
    }

    return (
        <>
            {/* Navbar */}
            <NavbarPavanity/>

            {/* ============================================ */}
            {/* BREADCRUMB SECTION */}
            {/* ============================================ */}
            <div className="flex items-center gap-4 flex-wrap bg-overlay pt-32 pb-14 px-14 sm:pt-36 sm:pb-16 sm:px-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
                <div className="text-center w-full">
                    <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">{division.name}</h2>
                    <p className="text-white text-lg md:text-xl mt-3">{division.tagline}</p>
                    <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-4 flex-wrap">
                        <li><Link to="/">Home</Link></li>
                        <li>/</li>
                        <li><Link to="/products">Products</Link></li>
                        <li>/</li>
                        <li className="text-primary">{division.name}</li>
                    </ul>
                </div>
            </div>

            {/* ============================================ */}
            {/* DIVISION OVERVIEW SECTION */}
            {/* ============================================ */}
            <div className="s-pb-100 pt-12 md:pt-16">
                <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                    <div className="max-w-[1720px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2">
                        {/* Image Column */}
                        <div className="lg:bg-[#F8F8F9] lg:dark:bg-dark-secondary lg:pr-10 2xl:pr-0 relative">
                            <div>
                                <img className="object-cover w-full h-full" src={division.image || placeholderImage} alt={division.name}/>
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
            {/* PRODUCT CATEGORIES SECTION */}
            {/* ============================================ */}
            <div className="s-pb-100">
                <div className="container-fluid">
                    {/* Section Header */}
                    <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                        <div>
                            <FaBoxes className="mx-auto size-16 text-primary" />
                        </div>
                        <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                            Product Categories
                        </h3>
                        <p className="mt-3">
                            Explore the range of products available under {division.name}
                        </p>
                    </div>

                    {/* Categories Grid */}
                    <div className="max-w-[1720px] mx-auto" data-aos="fade-up" data-aos-delay="300">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {details.categories.map((category: any, index: number) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px] hover:shadow-lg duration-300"
                                >
                                    <h5 className="font-semibold text-lg md:text-xl text-primary">
                                        {category.name}
                                    </h5>
                                    <p className="text-sm md:text-base mt-3 text-title/70 dark:text-white/70">
                                        {category.examples}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================ */}
            {/* APPLICATIONS SECTION */}
            {/* ============================================ */}
            <div className="s-pb-100">
                <div className="container-fluid">
                    <div className="max-w-[1720px] mx-auto bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px] p-8 md:p-12" data-aos="fade-up" data-aos-delay="100">
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Applications */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <FaLeaf className="size-12 text-primary" />
                                    <h4 className="font-semibold text-xl md:text-2xl">Target Applications</h4>
                                </div>
                                <ul className="space-y-3">
                                    {details.applications.map((app: string, index: number) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                            </svg>
                                            <span className="text-base md:text-lg">{app}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Markets */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <FaGlobeAmericas className="size-12 text-primary" />
                                    <h4 className="font-semibold text-xl md:text-2xl">Export Markets</h4>
                                </div>
                                <p className="text-base md:text-lg mb-4">
                                    Products available for export to:
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["North America", "Europe", "Middle East", "Asia", "Africa"].map((region, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-primary bg-opacity-10 text-primary border border-primary rounded-[5px] text-sm md:text-base font-medium"
                                        >
                                            {region}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================ */}
            {/* QUALITY & PACKAGING SECTION */}
            {/* ============================================ */}
            <div className="s-pb-100">
                <div className="container-fluid">
                    <div className="max-w-[1720px] mx-auto grid lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
                        {/* Quality Standards */}
                        <div className="p-8 md:p-10 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px]">
                            <div className="flex items-center gap-3 mb-4">
                                <FaShieldAlt className="size-12 text-primary" />
                                <h4 className="font-semibold text-xl md:text-2xl">Quality & Compliance</h4>
                            </div>
                            <p className="text-base md:text-lg">
                                {details.quality}
                            </p>
                        </div>

                        {/* Packaging Options */}
                        <div className="p-8 md:p-10 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px]">
                            <div className="flex items-center gap-3 mb-4">
                                <FaCertificate className="size-12 text-primary" />
                                <h4 className="font-semibold text-xl md:text-2xl">Packaging Options</h4>
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
                    <div className="max-w-3xl mx-auto text-center p-8 md:p-12 bg-primary rounded-[10px]" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-white text-2xl md:text-3xl font-semibold">
                            Interested in {division.name}?
                        </h3>
                        <p className="text-white text-base md:text-lg mt-4">
                            Contact our export team to discuss specifications, pricing, MOQ requirements, and delivery timelines for international supply.
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
            <FooterPavanity/>

            {/* Scroll to Top */}
            <ScrollToTop/>
        </>
    )
}
