import { useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import bg from '../../assets/img/shortcode/breadcumb.jpg'
import privateLabelImage from '../../assets/img/about/about-banner-02.jpg' // Placeholder
import manufacturingBg from '../../assets/img/about/video-bg.jpg'

// Icons
import { FaAward, FaCertificate, FaCog, FaBoxes, FaPalette, FaClipboardCheck } from 'react-icons/fa'

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";

import Aos from "aos";

export default function PrivateLabel() {

    useEffect(()=>{
        Aos.init()
        window.scrollTo(0,0)
    },[])

  return (
    <>
        {/* Navbar */}
        <NavbarPavanity/>

        {/* ============================================ */}
        {/* BREADCRUMB SECTION */}
        {/* ============================================ */}
        <div className="flex items-center gap-4 flex-wrap bg-overlay pt-32 pb-14 px-14 sm:pt-36 sm:pb-16 sm:px-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Private Label & OEM</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Private Label & OEM</li>
                </ul>
            </div>
        </div>

        {/* ============================================ */}
        {/* PRIVATE LABEL OVERVIEW SECTION */}
        {/* ============================================ */}
        <div className="s-pb-100 pt-12 md:pt-16">
            <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-[1720px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2">
                    {/* Image Column */}
                    <div className="lg:bg-[#F8F8F9] lg:dark:bg-dark-secondary lg:pr-10 2xl:pr-0 relative">
                        <div>
                            <img className="object-cover w-full" src={privateLabelImage} alt="Private Label Manufacturing"/>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex items-center py-8 sm:py-12 px-5 sm:px-12 md:px-8 lg:pr-12 lg:pl-16 2xl:pl-[160px] bg-[#F8F8F9] dark:bg-dark-secondary">
                        <div className="lg:max-w-[600px]">
                            <div>
                                <FaAward className="size-16 text-primary" />
                            </div>
                            <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                                Private Label Manufacturing for International Markets
                            </h3>
                            <p className="mt-3 text-base sm:text-lg">
                                Pavanity Global provides private label and OEM manufacturing services for international food brands, distributors, and retailers. Our facility supports custom product development, buyer-specified packaging, and regulatory compliance aligned with destination market requirements.
                            </p>
                            <p className="mt-3 text-base sm:text-lg">
                                We work with established brands and emerging businesses to supply food products under their own branding, with structured quality control, documentation support, and export logistics management.
                            </p>
                            <p className="mt-3 text-base sm:text-lg">
                                All private label operations are conducted with clarity on product specifications, labeling standards, certifications, minimum order quantities, and delivery schedules.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* PRIVATE LABEL CAPABILITIES */}
        {/* ============================================ */}
        <div className="s-pb-100">
            <div className="container-fluid">
                {/* Section Header */}
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <FaCog className="mx-auto size-16 text-primary" />
                    </div>
                    <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                        Our Private Label Capabilities
                    </h3>
                    <p className="mt-3">
                        End-to-end support for branded product development and export supply
                    </p>
                </div>

                {/* Capabilities Grid */}
                <div className="max-w-[1720px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-aos="fade-up" data-aos-delay="300">

                    {/* Capability 1 */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px] hover:shadow-lg duration-300">
                        <FaPalette className="size-12 text-primary mb-4" />
                        <h5 className="font-semibold text-xl md:text-2xl">Custom Product Development</h5>
                        <p className="mt-3 text-base">
                            Product formulation and recipe development aligned with buyer specifications, taste profiles, and market positioning requirements.
                        </p>
                    </div>

                    {/* Capability 2 */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px] hover:shadow-lg duration-300">
                        <FaBoxes className="size-12 text-primary mb-4" />
                        <h5 className="font-semibold text-xl md:text-2xl">Packaging & Labeling</h5>
                        <p className="mt-3 text-base">
                            Custom packaging design, printing, and labeling compliant with destination country regulations (FDA, EU, GCC, etc.).
                        </p>
                    </div>

                    {/* Capability 3 */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px] hover:shadow-lg duration-300">
                        <FaCertificate className="size-12 text-primary mb-4" />
                        <h5 className="font-semibold text-xl md:text-2xl">Regulatory Compliance</h5>
                        <p className="mt-3 text-base">
                            Support for obtaining required certifications, COAs, nutritional panels, and compliance documentation for target markets.
                        </p>
                    </div>

                    {/* Capability 4 */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px] hover:shadow-lg duration-300">
                        <FaClipboardCheck className="size-12 text-primary mb-4" />
                        <h5 className="font-semibold text-xl md:text-2xl">Quality Assurance</h5>
                        <p className="mt-3 text-base">
                            Batch-level quality control, third-party testing, and documentation for consistent product quality across shipments.
                        </p>
                    </div>

                    {/* Capability 5 */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px] hover:shadow-lg duration-300">
                        <FaCog className="size-12 text-primary mb-4" />
                        <h5 className="font-semibold text-xl md:text-2xl">Scalable Production</h5>
                        <p className="mt-3 text-base">
                            Production capacity to support initial trial orders, seasonal volumes, and long-term supply agreements.
                        </p>
                    </div>

                    {/* Capability 6 */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px] hover:shadow-lg duration-300">
                        <FaAward className="size-12 text-primary mb-4" />
                        <h5 className="font-semibold text-xl md:text-2xl">Export Logistics</h5>
                        <p className="mt-3 text-base">
                            Coordination of export documentation, shipping, and customs clearance to ensure smooth delivery to destination ports.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* PRODUCT CATEGORIES FOR PRIVATE LABEL */}
        {/* ============================================ */}
        <div className="s-pb-100">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px] p-8 md:p-12" data-aos="fade-up" data-aos-delay="100">
                    <div className="text-center mb-8">
                        <h3 className="font-medium text-2xl md:text-3xl">Product Categories Available for Private Label</h3>
                        <p className="mt-3 text-base md:text-lg">
                            We support private label manufacturing across all six product divisions
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 bg-white dark:bg-title rounded-[10px]">
                            <h5 className="font-semibold text-lg text-primary mb-2">SpiceLine™</h5>
                            <p className="text-sm">Spices, masalas, and seasonings in custom blends and packaging</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-title rounded-[10px]">
                            <h5 className="font-semibold text-lg text-primary mb-2">NatureFoods™</h5>
                            <p className="text-sm">Superfoods, seeds, and plant-based ingredients for health brands</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-title rounded-[10px]">
                            <h5 className="font-semibold text-lg text-primary mb-2">AgroFoods™</h5>
                            <p className="text-sm">Dehydrated vegetables and custom vegetable blends</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-title rounded-[10px]">
                            <h5 className="font-semibold text-lg text-primary mb-2">NutSpread™</h5>
                            <p className="text-sm">Nut butters and spreads with custom flavoring and branding</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-title rounded-[10px]">
                            <h5 className="font-semibold text-lg text-primary mb-2">SweetCane™</h5>
                            <p className="text-sm">Natural sweeteners and sugar alternatives for health food brands</p>
                        </div>
                        <div className="p-6 bg-white dark:bg-title rounded-[10px]">
                            <h5 className="font-semibold text-lg text-primary mb-2">SnackFit™</h5>
                            <p className="text-sm">Roasted snacks and trail mixes in custom packaging configurations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* PROCESS & REQUIREMENTS */}
        {/* ============================================ */}
        <div className="s-pb-100">
            <div className="container-fluid">
                <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="font-medium text-2xl md:text-3xl">Private Label Process</h3>
                    <p className="mt-3 text-base md:text-lg">
                        Structured workflow from initial enquiry to export delivery
                    </p>
                </div>

                <div className="max-w-[1720px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="300">
                    {/* Step 1 */}
                    <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                            <span className="text-primary text-2xl font-bold">1</span>
                        </div>
                        <h5 className="font-semibold text-lg mb-2">Initial Enquiry</h5>
                        <p className="text-sm">
                            Submit product requirements, specifications, and target market details
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                            <span className="text-primary text-2xl font-bold">2</span>
                        </div>
                        <h5 className="font-semibold text-lg mb-2">Sample Development</h5>
                        <p className="text-sm">
                            Product sampling, testing, and approval before production
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                            <span className="text-primary text-2xl font-bold">3</span>
                        </div>
                        <h5 className="font-semibold text-lg mb-2">Production & QC</h5>
                        <p className="text-sm">
                            Manufacturing with batch-level quality control and documentation
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                            <span className="text-primary text-primary text-2xl font-bold">4</span>
                        </div>
                        <h5 className="font-semibold text-lg mb-2">Export Delivery</h5>
                        <p className="text-sm">
                            Export logistics, shipping, and delivery to destination port
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* MOQ & COMMERCIAL TERMS */}
        {/* ============================================ */}
        <div className="container-fluid" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-overlay before:bg-title before:bg-opacity-70 h-64 sm:h-96 lg:h-[500px] flex items-center justify-center max-w-[1720px] mx-auto rounded-[10px]" style={{backgroundImage:`url(${manufacturingBg})`}}>
                <div className="text-center px-6">
                    <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
                        Minimum Order Quantities & Commercial Terms
                    </h3>
                    <p className="text-white text-lg sm:text-xl mt-4 max-w-2xl mx-auto">
                        MOQ varies by product category and packaging configuration. Trial orders available for new buyers. Contact our export team to discuss commercial terms, pricing, and delivery schedules.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block mt-8 bg-primary text-white px-8 py-4 text-base md:text-lg font-medium rounded-[5px] hover:bg-opacity-90 duration-300"
                    >
                        Request Private Label Enquiry
                    </Link>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* WHY CHOOSE PAVANITY FOR PRIVATE LABEL */}
        {/* ============================================ */}
        <div className="s-py-100">
            <div className="container-fluid">
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="font-medium leading-none text-2xl md:text-3xl">
                        Why Choose Pavanity for Private Label?
                    </h3>
                    <p className="mt-3">
                        Proven capability in international private label supply
                    </p>
                </div>

                <div className="max-w-[1720px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="p-6 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <h5 className="font-semibold text-lg mb-2">Export Experience</h5>
                        <p className="text-sm">
                            Established export channels to North America, Europe, Middle East, Asia, and Africa
                        </p>
                    </div>
                    <div className="p-6 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <h5 className="font-semibold text-lg mb-2">Certification Support</h5>
                        <p className="text-sm">
                            FSSAI, ISO 22000, HACCP, Organic, Halal certifications with documentation support
                        </p>
                    </div>
                    <div className="p-6 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <h5 className="font-semibold text-lg mb-2">Flexible MOQ</h5>
                        <p className="text-sm">
                            Trial orders available for new buyers with scalable production capacity
                        </p>
                    </div>
                    <div className="p-6 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <h5 className="font-semibold text-lg mb-2">Custom Formulation</h5>
                        <p className="text-sm">
                            Product development aligned with buyer specifications and market requirements
                        </p>
                    </div>
                    <div className="p-6 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <h5 className="font-semibold text-lg mb-2">Packaging Flexibility</h5>
                        <p className="text-sm">
                            Multiple packaging formats from bulk to consumer-ready retail configurations
                        </p>
                    </div>
                    <div className="p-6 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <h5 className="font-semibold text-lg mb-2">Timely Delivery</h5>
                        <p className="text-sm">
                            Structured production schedules and export logistics management
                        </p>
                    </div>
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
