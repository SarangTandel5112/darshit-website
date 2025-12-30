import { useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import bg from '../../assets/img/shortcode/breadcumb.jpg'
import qualityImage from '../../assets/img/about/about-banner-03.jpg' // Placeholder

// Icons
import { FaShieldAlt, FaCertificate, FaClipboardCheck, FaFlask, FaLeaf, FaAward, FaCheckCircle } from 'react-icons/fa'

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";

import Aos from "aos";

export default function QualityCompliance() {

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
                <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Quality & Compliance</h2>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Quality & Compliance</li>
                </ul>
            </div>
        </div>

        {/* ============================================ */}
        {/* QUALITY OVERVIEW SECTION */}
        {/* ============================================ */}
        <div className="s-pb-100 pt-12 md:pt-16">
            <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-[1720px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2">
                    {/* Image Column */}
                    <div className="lg:bg-[#F8F8F9] lg:dark:bg-dark-secondary lg:pr-10 2xl:pr-0 relative">
                        <div>
                            <img className="object-cover w-full" src={qualityImage} alt="Quality & Food Safety"/>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex items-center py-8 sm:py-12 px-5 sm:px-12 md:px-8 lg:pr-12 lg:pl-16 2xl:pl-[160px] bg-[#F8F8F9] dark:bg-dark-secondary">
                        <div className="lg:max-w-[600px]">
                            <div>
                                <FaShieldAlt className="size-16 text-primary" />
                            </div>
                            <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                                Food Safety & Quality Assurance
                            </h3>
                            <p className="mt-3 text-base sm:text-lg">
                                Pavanity Global operates under defined food safety protocols and quality management systems aligned with international export requirements. Our processing facility maintains applicable certifications and conducts regular testing to ensure product compliance across international markets.
                            </p>
                            <p className="mt-3 text-base sm:text-lg">
                                All export supply is backed by batch-level documentation, certificates of analysis (COA), and compliance records required for customs clearance and destination country regulations.
                            </p>
                            <p className="mt-3 text-base sm:text-lg">
                                Quality management is structured to support recurring volumes, long-term supply agreements, and custom product development with consistent product specifications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* CERTIFICATIONS SECTION */}
        {/* ============================================ */}
        <div className="s-pb-100">
            <div className="container-fluid">
                {/* Section Header */}
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <FaCertificate className="mx-auto size-16 text-primary" />
                    </div>
                    <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                        Certifications & Standards
                    </h3>
                    <p className="mt-3">
                        Certified operations supporting international food trade compliance
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="max-w-[1720px] mx-auto" data-aos="fade-up" data-aos-delay="300">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                        {/* FSSAI */}
                        <div className="p-6 bg-white dark:bg-title border-2 border-primary rounded-[10px] text-center hover:shadow-lg duration-300">
                            <FaCheckCircle className="size-12 mx-auto text-primary mb-3" />
                            <h6 className="font-semibold text-lg">FSSAI</h6>
                            <p className="text-sm mt-2 text-title/70 dark:text-white/70">Food Safety & Standards Authority of India</p>
                        </div>

                        {/* ISO 22000 */}
                        <div className="p-6 bg-white dark:bg-title border-2 border-primary rounded-[10px] text-center hover:shadow-lg duration-300">
                            <FaCheckCircle className="size-12 mx-auto text-primary mb-3" />
                            <h6 className="font-semibold text-lg">ISO 22000</h6>
                            <p className="text-sm mt-2 text-title/70 dark:text-white/70">Food Safety Management System</p>
                        </div>

                        {/* HACCP */}
                        <div className="p-6 bg-white dark:bg-title border-2 border-primary rounded-[10px] text-center hover:shadow-lg duration-300">
                            <FaCheckCircle className="size-12 mx-auto text-primary mb-3" />
                            <h6 className="font-semibold text-lg">HACCP</h6>
                            <p className="text-sm mt-2 text-title/70 dark:text-white/70">Hazard Analysis Critical Control Points</p>
                        </div>

                        {/* Organic */}
                        <div className="p-6 bg-white dark:bg-title border-2 border-primary rounded-[10px] text-center hover:shadow-lg duration-300">
                            <FaLeaf className="size-12 mx-auto text-primary mb-3" />
                            <h6 className="font-semibold text-lg">Organic</h6>
                            <p className="text-sm mt-2 text-title/70 dark:text-white/70">India Organic Certification</p>
                        </div>

                        {/* Halal */}
                        <div className="p-6 bg-white dark:bg-title border-2 border-primary rounded-[10px] text-center hover:shadow-lg duration-300">
                            <FaAward className="size-12 mx-auto text-primary mb-3" />
                            <h6 className="font-semibold text-lg">Halal</h6>
                            <p className="text-sm mt-2 text-title/70 dark:text-white/70">Halal Certification for Global Markets</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* QUALITY CONTROL PROCESSES */}
        {/* ============================================ */}
        <div className="s-pb-100">
            <div className="container-fluid">
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <FaClipboardCheck className="mx-auto size-16 text-primary" />
                    </div>
                    <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                        Quality Control Processes
                    </h3>
                    <p className="mt-3">
                        Multi-stage quality verification from raw material to export shipment
                    </p>
                </div>

                <div className="max-w-[1720px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-aos="fade-up" data-aos-delay="300">

                    {/* QC 1 */}
                    <div className="p-6 md:p-8 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <h5 className="font-semibold text-xl md:text-2xl text-primary mb-3">Raw Material Inspection</h5>
                        <p className="text-base">
                            Incoming raw materials verified for quality parameters, origin documentation, and compliance with buyer specifications before processing.
                        </p>
                    </div>

                    {/* QC 2 */}
                    <div className="p-6 md:p-8 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <h5 className="font-semibold text-xl md:text-2xl text-primary mb-3">In-Process Control</h5>
                        <p className="text-base">
                            Process parameters monitored during manufacturing to ensure product consistency, hygiene standards, and specification adherence.
                        </p>
                    </div>

                    {/* QC 3 */}
                    <div className="p-6 md:p-8 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <h5 className="font-semibold text-xl md:text-2xl text-primary mb-3">Batch Testing</h5>
                        <p className="text-base">
                            Each production batch tested for microbiological safety, physical/chemical parameters, and compliance with export standards.
                        </p>
                    </div>

                    {/* QC 4 */}
                    <div className="p-6 md:p-8 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <h5 className="font-semibold text-xl md:text-2xl text-primary mb-3">Packaging Inspection</h5>
                        <p className="text-base">
                            Packaging materials verified for food-grade compliance. Labeling checked for accuracy and destination market regulatory requirements.
                        </p>
                    </div>

                    {/* QC 5 */}
                    <div className="p-6 md:p-8 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <h5 className="font-semibold text-xl md:text-2xl text-primary mb-3">Pre-Shipment Verification</h5>
                        <p className="text-base">
                            Final inspection before export shipment. Documentation review to ensure all certificates and compliance records are complete.
                        </p>
                    </div>

                    {/* QC 6 */}
                    <div className="p-6 md:p-8 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <h5 className="font-semibold text-xl md:text-2xl text-primary mb-3">Traceability</h5>
                        <p className="text-base">
                            Batch-level traceability maintained from raw material sourcing to final shipment for recall management and quality verification.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* TESTING & LABORATORY */}
        {/* ============================================ */}
        <div className="s-pb-100">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px] p-8 md:p-12" data-aos="fade-up" data-aos-delay="100">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Testing Parameters */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <FaFlask className="size-12 text-primary" />
                                <h4 className="font-semibold text-xl md:text-2xl">Testing Parameters</h4>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-base md:text-lg">Microbiological Analysis (TPC, Yeast/Mold, Pathogens)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-base md:text-lg">Pesticide Residue Testing</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-base md:text-lg">Heavy Metal Analysis (Lead, Arsenic, Cadmium, Mercury)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-base md:text-lg">Aflatoxin Testing (for nut-based products)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-base md:text-lg">Moisture Content, pH, Water Activity</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-base md:text-lg">Nutritional Analysis & Allergen Testing</span>
                                </li>
                            </ul>
                        </div>

                        {/* Laboratory Facilities */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <FaShieldAlt className="size-12 text-primary" />
                                <h4 className="font-semibold text-xl md:text-2xl">Laboratory & Testing</h4>
                            </div>
                            <p className="text-base md:text-lg mb-4">
                                In-house laboratory for routine quality checks. Third-party NABL-accredited laboratory testing for export compliance and customer requirements.
                            </p>
                            <p className="text-base md:text-lg mb-4">
                                Certificate of Analysis (COA) provided for each export batch, including test results for microbiological safety, chemical parameters, and compliance with destination country standards.
                            </p>
                            <p className="text-base md:text-lg">
                                Additional testing available upon buyer request (shelf-life studies, nutritional profiling, specific country compliance parameters).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* REGULATORY COMPLIANCE */}
        {/* ============================================ */}
        <div className="s-pb-100">
            <div className="container-fluid">
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="font-medium leading-none text-2xl md:text-3xl">
                        Regulatory Compliance by Market
                    </h3>
                    <p className="mt-3">
                        Export supply aligned with destination country food regulations
                    </p>
                </div>

                <div className="max-w-[1720px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="p-6 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px]">
                        <h5 className="font-semibold text-lg text-primary mb-2">North America</h5>
                        <p className="text-sm">FDA compliance, GRAS status verification, country-of-origin labeling</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px]">
                        <h5 className="font-semibold text-lg text-primary mb-2">European Union</h5>
                        <p className="text-sm">EC regulations, Novel Food compliance, pesticide MRLs per EU standards</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px]">
                        <h5 className="font-semibold text-lg text-primary mb-2">Middle East (GCC)</h5>
                        <p className="text-sm">GSO standards, Halal certification, Arabic labeling requirements</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px]">
                        <h5 className="font-semibold text-lg text-primary mb-2">Asia Pacific</h5>
                        <p className="text-sm">Country-specific food standards, phytosanitary certificates, import permits</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px]">
                        <h5 className="font-semibold text-lg text-primary mb-2">Africa</h5>
                        <p className="text-sm">Regional food safety standards, Halal/Kosher where required</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px]">
                        <h5 className="font-semibold text-lg text-primary mb-2">Documentation</h5>
                        <p className="text-sm">Export certificates, phytosanitary certificates, health certificates as required</p>
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
                        Need Quality Documentation?
                    </h3>
                    <p className="text-white text-base md:text-lg mt-4">
                        Request product specifications, certificates of analysis, or compliance documentation for your destination market.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block mt-6 bg-white text-primary px-8 py-4 text-base md:text-lg font-semibold rounded-[5px] hover:bg-opacity-90 duration-300"
                    >
                        Contact Quality Team
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
