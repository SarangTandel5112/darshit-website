import { useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import bg from '../../assets/img/private-label-top-header.jpeg'

// Icons
import { FaTag, FaCog, FaFileContract, FaShippingFast } from 'react-icons/fa'

// Components 
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";

import Aos from "aos";

export default function PrivateLabelCustomSourcing() {

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
                <h1 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Private Label & Custom Sourcing</h1>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Private Label & Custom Sourcing</li>
                </ul>
            </div>
        </div>

        {/* ============================================ */}
        {/* MAIN CONTENT SECTION */}
        {/* ============================================ */}
        <div className="s-pb-100 pt-12 md:pt-16">
            <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-[1720px] mx-auto">

                    {/* Content Section */}
                    <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                        <div className="w-20 h-20 bg-primary rounded-[10px] flex items-center justify-center mx-auto mb-6">
                            <FaTag className="size-16 text-white" />
                        </div>
                        <h2 className="font-medium leading-none text-2xl md:text-3xl lg:text-4xl">
                            Private Label Food Supply & Custom Ingredient Sourcing
                        </h2>
                        <p className="mt-4 text-base md:text-lg">
                            Pavanity Global supports private label development and custom ingredient sourcing for international B2B buyers and food businesses. Our export operations are structured to meet buyer specifications, quality standards, and destination market requirements.
                        </p>
                    </div>

                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* SERVICES GRID SECTION */}
        {/* ============================================ */}
        <div className="s-pb-100 bg-[#F8F8F9] dark:bg-dark-secondary">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto">

                    {/* Section Header */}
                    <div className="max-w-3xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="font-medium leading-none text-2xl md:text-3xl">
                            Our Private Label & Sourcing Capabilities
                        </h3>
                        <p className="mt-3 text-base md:text-lg">
                            Export-focused supply structured for buyer branding, custom formulations, and bulk requirements.
                        </p>
                    </div>

                    {/* Services Grid - 4 Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" data-aos="fade-up" data-aos-delay="300">

                        {/* Service 1: Private Label Supply */}
                        <div className="bg-white dark:bg-title p-6 md:p-8 rounded-[10px] border border-title/10 dark:border-white/10 hover:shadow-lg duration-300">
                            <div className="w-16 h-16 bg-primary rounded-[10px] flex items-center justify-center mb-4">
                                <FaTag className="size-10 text-white" />
                            </div>
                            <h4 className="text-xl md:text-2xl font-semibold mb-3">Private Label Supply</h4>
                            <p className="text-sm md:text-base">
                                Export supply under buyer branding and packaging specifications. Products delivered with buyer-defined labels, formulations, and compliance documentation.
                            </p>
                        </div>

                        {/* Service 2: Custom Formulation */}
                        <div className="bg-white dark:bg-title p-6 md:p-8 rounded-[10px] border border-title/10 dark:border-white/10 hover:shadow-lg duration-300">
                            <div className="w-16 h-16 bg-primary rounded-[10px] flex items-center justify-center mb-4">
                                <FaCog className="size-10 text-white" />
                            </div>
                            <h4 className="text-xl md:text-2xl font-semibold mb-3">Custom Formulation</h4>
                            <p className="text-sm md:text-base">
                                Product development aligned with buyer specifications, ingredient preferences, and market requirements. Support for custom blends, flavors, and functional formulations.
                            </p>
                        </div>

                        {/* Service 3: Contract Sourcing */}
                        <div className="bg-white dark:bg-title p-6 md:p-8 rounded-[10px] border border-title/10 dark:border-white/10 hover:shadow-lg duration-300">
                            <div className="w-16 h-16 bg-primary rounded-[10px] flex items-center justify-center mb-4">
                                <FaFileContract className="size-10 text-white" />
                            </div>
                            <h4 className="text-xl md:text-2xl font-semibold mb-3">Contract Sourcing</h4>
                            <p className="text-sm md:text-base">
                                Long-term supply agreements structured for recurring volumes and predictable delivery schedules. Commercial terms defined for bulk orders and multi-year contracts.
                            </p>
                        </div>

                        {/* Service 4: Bulk Export Supply */}
                        <div className="bg-white dark:bg-title p-6 md:p-8 rounded-[10px] border border-title/10 dark:border-white/10 hover:shadow-lg duration-300">
                            <div className="w-16 h-16 bg-primary rounded-[10px] flex items-center justify-center mb-4">
                                <FaShippingFast className="size-10 text-white" />
                            </div>
                            <h4 className="text-xl md:text-2xl font-semibold mb-3">Bulk Export Supply</h4>
                            <p className="text-sm md:text-base">
                                Bulk food ingredients and agricultural products for international buyers. Export documentation, quality certificates, and customs clearance support included.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* PROCESS SECTION */}
        {/* ============================================ */}
        <div className="s-py-100">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto">

                    {/* Section Header */}
                    <div className="max-w-3xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="font-medium leading-none text-2xl md:text-3xl">
                            How Private Label Sourcing Works
                        </h3>
                        <p className="mt-3 text-base md:text-lg">
                            Structured process for custom product development and export supply.
                        </p>
                    </div>

                    {/* Process Steps - 5 Steps */}
                    <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="300">

                        {/* Step 1 */}
                        <div className="flex flex-col sm:flex-row gap-6 mb-8 pb-8 border-b border-bdr-clr dark:border-bdr-clr-drk">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">1</div>
                            </div>
                            <div>
                                <h4 className="text-xl md:text-2xl font-semibold mb-2">Initial Enquiry & Requirements</h4>
                                <p className="text-base md:text-lg">
                                    Buyers submit product requirements, specifications, volume needs, and destination market details via business enquiry form.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col sm:flex-row gap-6 mb-8 pb-8 border-b border-bdr-clr dark:border-bdr-clr-drk">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">2</div>
                            </div>
                            <div>
                                <h4 className="text-xl md:text-2xl font-semibold mb-2">Quotation & Feasibility Review</h4>
                                <p className="text-base md:text-lg">
                                    Commercial quotation provided with product specifications, compliance requirements, delivery timelines, and export terms.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col sm:flex-row gap-6 mb-8 pb-8 border-b border-bdr-clr dark:border-bdr-clr-drk">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">3</div>
                            </div>
                            <div>
                                <h4 className="text-xl md:text-2xl font-semibold mb-2">Sample Development & Approval</h4>
                                <p className="text-base md:text-lg">
                                    Product samples developed and shipped for buyer evaluation. Adjustments made based on buyer feedback before commercial production.
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col sm:flex-row gap-6 mb-8 pb-8 border-b border-bdr-clr dark:border-bdr-clr-drk">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">4</div>
                            </div>
                            <div>
                                <h4 className="text-xl md:text-2xl font-semibold mb-2">Contract & Production</h4>
                                <p className="text-base md:text-lg">
                                    Supply agreement finalized with commercial terms, payment structure, and delivery schedules. Production initiated under defined quality protocols.
                                </p>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">5</div>
                            </div>
                            <div>
                                <h4 className="text-xl md:text-2xl font-semibold mb-2">Export & Documentation</h4>
                                <p className="text-base md:text-lg">
                                    Products packaged with buyer branding, export documentation prepared, and shipment arranged with customs clearance support.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* ENQUIRY CTA SECTION */}
        {/* ============================================ */}
        <div className="s-py-100">
            <div className="container-fluid">
                <div className="max-w-3xl mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="p-8 md:p-12 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                            Request Private Label Sourcing Enquiry
                        </h4>
                        <p className="mt-4 text-base md:text-lg">
                            For private label development, custom formulations, and bulk export supply—contact our export team to discuss your requirements.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block mt-6 bg-primary text-white px-8 py-4 text-base md:text-lg font-medium rounded-[5px] hover:bg-opacity-90 duration-300"
                        >
                            Send Enquiry
                        </Link>
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
