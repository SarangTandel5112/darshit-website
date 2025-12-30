import { useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import bg from '../../assets/img/shortcode/breadcumb.jpg'
import globalImage from '../../assets/img/about/about-banner-01.jpg' // Placeholder

// Icons
import { FaGlobeAmericas, FaShip, FaFileAlt, FaHandshake, FaMapMarkedAlt, FaBoxes } from 'react-icons/fa'

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";

import Aos from "aos";

export default function GlobalMarkets() {

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
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Global Markets & Export</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Global Markets</li>
                </ul>
            </div>
        </div>

        {/* ============================================ */}
        {/* GLOBAL EXPORT OVERVIEW SECTION */}
        {/* ============================================ */}
        <div className="s-pb-100 pt-12 md:pt-16">
            <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-[1720px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2">
                    {/* Image Column */}
                    <div className="lg:bg-[#F8F8F9] lg:dark:bg-dark-secondary lg:pr-10 2xl:pr-0 relative">
                        <div>
                            <img className="object-cover w-full" src={globalImage} alt="Global Export Markets"/>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex items-center py-8 sm:py-12 px-5 sm:px-12 md:px-8 lg:pr-12 lg:pl-16 2xl:pl-[160px] bg-[#F8F8F9] dark:bg-dark-secondary">
                        <div className="lg:max-w-[600px]">
                            <div>
                                <FaGlobeAmericas className="size-16 text-primary" />
                            </div>
                            <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                                International Export Network
                            </h3>
                            <p className="mt-3 text-base sm:text-lg">
                                Pavanity Global operates across five continents, supplying food ingredients and agri-based products to international B2B, HoReCa, and retail distribution channels.
                            </p>
                            <p className="mt-3 text-base sm:text-lg">
                                Our export operations are structured to support recurring volumes, predictable schedules, and long-term supply agreements aligned with destination market requirements.
                            </p>
                            <p className="mt-3 text-base sm:text-lg">
                                All international trade is conducted with clarity on product specifications, export documentation, customs procedures, and regulatory compliance for each target market.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* EXPORT REGIONS */}
        {/* ============================================ */}
        <div className="s-pb-100">
            <div className="container-fluid">
                {/* Section Header */}
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <FaMapMarkedAlt className="mx-auto size-16 text-primary" />
                    </div>
                    <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                        Active Export Markets
                    </h3>
                    <p className="mt-3">
                        Established trade channels across five global regions
                    </p>
                </div>

                {/* Regions Grid */}
                <div className="max-w-[1720px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-aos="fade-up" data-aos-delay="300">

                    {/* Region 1: North America */}
                    <div className="p-8 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px] hover:shadow-xl duration-300">
                        <h4 className="font-semibold text-2xl text-primary mb-4">North America</h4>
                        <p className="text-base mb-4">
                            USA, Canada, Mexico
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>FDA compliance & labeling standards</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>GRAS status verification for ingredients</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>Country-of-origin documentation</span>
                            </li>
                        </ul>
                    </div>

                    {/* Region 2: Europe */}
                    <div className="p-8 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px] hover:shadow-xl duration-300">
                        <h4 className="font-semibold text-2xl text-primary mb-4">Europe</h4>
                        <p className="text-base mb-4">
                            EU Member States, UK, Switzerland
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>EC Regulation compliance (pesticide MRLs)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>Novel Food authorization where required</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>Organic certification (EU Organic)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Region 3: Middle East */}
                    <div className="p-8 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px] hover:shadow-xl duration-300">
                        <h4 className="font-semibold text-2xl text-primary mb-4">Middle East</h4>
                        <p className="text-base mb-4">
                            GCC Countries, UAE, Saudi Arabia, Qatar
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>GSO standards compliance</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>Halal certification for all products</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>Arabic labeling and shelf-life requirements</span>
                            </li>
                        </ul>
                    </div>

                    {/* Region 4: Asia */}
                    <div className="p-8 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px] hover:shadow-xl duration-300">
                        <h4 className="font-semibold text-2xl text-primary mb-4">Asia</h4>
                        <p className="text-base mb-4">
                            Southeast Asia, East Asia, Australia
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>Country-specific food safety standards</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>Phytosanitary certificates for agri-products</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>Import permits and pre-shipment inspections</span>
                            </li>
                        </ul>
                    </div>

                    {/* Region 5: Africa */}
                    <div className="p-8 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px] hover:shadow-xl duration-300">
                        <h4 className="font-semibold text-2xl text-primary mb-4">Africa</h4>
                        <p className="text-base mb-4">
                            Southern Africa, East Africa, West Africa
                        </p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>Regional food safety compliance</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>Halal/Kosher certification where required</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>Export documentation and health certificates</span>
                            </li>
                        </ul>
                    </div>

                    {/* Expansion Markets */}
                    <div className="p-8 bg-[#F8F8F9] dark:bg-dark-secondary border border-primary rounded-[10px]">
                        <h4 className="font-semibold text-2xl text-primary mb-4">Expanding Reach</h4>
                        <p className="text-base">
                            Actively exploring new markets in Latin America and additional regions. Contact our export team to discuss market-specific requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* EXPORT SERVICES */}
        {/* ============================================ */}
        <div className="s-pb-100">
            <div className="container-fluid">
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <FaShip className="mx-auto size-16 text-primary" />
                    </div>
                    <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                        Export Services & Support
                    </h3>
                    <p className="mt-3">
                        End-to-end export management from order to delivery
                    </p>
                </div>

                <div className="max-w-[1720px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="300">

                    <div className="p-6 md:p-8 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <FaFileAlt className="size-10 text-primary mb-3" />
                        <h5 className="font-semibold text-lg mb-2">Export Documentation</h5>
                        <p className="text-sm">Commercial invoice, packing list, certificate of origin, phytosanitary certificates, health certificates as required per destination country.</p>
                    </div>

                    <div className="p-6 md:p-8 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <FaBoxes className="size-10 text-primary mb-3" />
                        <h5 className="font-semibold text-lg mb-2">Packaging & Labeling</h5>
                        <p className="text-sm">Export-grade packaging compliant with destination regulations. Multi-language labeling support (English, Arabic, French, etc.).</p>
                    </div>

                    <div className="p-6 md:p-8 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <FaShip className="size-10 text-primary mb-3" />
                        <h5 className="font-semibold text-lg mb-2">Shipping & Logistics</h5>
                        <p className="text-sm">Sea freight (FCL/LCL), air freight coordination. Delivery to buyer's nominated port or warehouse (FOB, CIF, CFR terms available).</p>
                    </div>

                    <div className="p-6 md:p-8 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <FaHandshake className="size-10 text-primary mb-3" />
                        <h5 className="font-semibold text-lg mb-2">Customs Clearance Support</h5>
                        <p className="text-sm">Export customs clearance from India. Documentation support for destination country import clearance.</p>
                    </div>

                    <div className="p-6 md:p-8 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <FaFileAlt className="size-10 text-primary mb-3" />
                        <h5 className="font-semibold text-lg mb-2">Compliance & Certification</h5>
                        <p className="text-sm">Market-specific certifications (FDA, EU, HALAL, Organic). Certificate of Analysis (COA) for each shipment.</p>
                    </div>

                    <div className="p-6 md:p-8 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <FaGlobeAmericas className="size-10 text-primary mb-3" />
                        <h5 className="font-semibold text-lg mb-2">Market-Specific Support</h5>
                        <p className="text-sm">Regulatory guidance for target markets. Product formulation adjusted to meet destination requirements.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* INCOTERMS & PAYMENT */}
        {/* ============================================ */}
        <div className="s-pb-100">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto grid lg:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">

                    {/* Incoterms */}
                    <div className="p-8 md:p-10 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px]">
                        <h4 className="font-semibold text-xl md:text-2xl mb-4">Incoterms Offered</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-semibold">FOB:</span>
                                <span>Free on Board (Indian Port)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-semibold">CIF:</span>
                                <span>Cost, Insurance & Freight (Destination Port)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-semibold">CFR:</span>
                                <span>Cost & Freight (Destination Port)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-semibold">EXW:</span>
                                <span>Ex-Works (Buyer arranges logistics)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Payment Terms */}
                    <div className="p-8 md:p-10 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px]">
                        <h4 className="font-semibold text-xl md:text-2xl mb-4">Payment Terms</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-semibold">L/C:</span>
                                <span>Letter of Credit (Sight/Usance)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-semibold">T/T:</span>
                                <span>Telegraphic Transfer (Advance/Against Documents)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-semibold">CAD:</span>
                                <span>Cash Against Documents</span>
                            </li>
                            <li className="text-sm text-title/70 dark:text-white/70 mt-4">
                                Payment terms negotiable based on order value and buyer relationship. Contact our export team for commercial discussions.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* CONTACT CTA */}
        {/* ============================================ */}
        <div className="s-pb-100">
            <div className="container-fluid">
                <div className="max-w-3xl mx-auto text-center p-8 md:p-12 bg-primary rounded-[10px]" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-white text-2xl md:text-3xl font-semibold">
                        Ready to Export?
                    </h3>
                    <p className="text-white text-base md:text-lg mt-4">
                        Contact our international trade team to discuss product requirements, export procedures, and market-specific compliance for your destination country.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block mt-6 bg-white text-primary px-8 py-4 text-base md:text-lg font-semibold rounded-[5px] hover:bg-opacity-90 duration-300"
                    >
                        Request Export Enquiry
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
