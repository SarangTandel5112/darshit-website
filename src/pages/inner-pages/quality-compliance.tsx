import { useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import bg from '../../assets/img/shortcode/breadcumb.jpg'
import qualityImage from '../../assets/img/about/about-banner-03.jpg' // Placeholder

// Icons
import { FaShieldAlt, FaClipboardCheck, FaSeedling, FaBoxOpen, FaTags, FaShippingFast, FaListAlt } from 'react-icons/fa'

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
                <h1 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Quality & Compliance</h1>
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
                            <h2 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                                Quality & Compliance Approach
                            </h2>
                            <p className="mt-3 text-base sm:text-lg">
                                Quality parameters are aligned with buyer specifications and destination market requirements. Export documentation and handling are coordinated to support international trade compliance.
                            </p>
                            <p className="mt-3 text-base sm:text-lg">
                                Quality parameters are aligned with buyer specifications and destination market requirements throughout the sourcing and export process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* QUALITY CONTROL PROCESSES - NEW STRUCTURE */}
        {/* ============================================ */}
        <div className="s-py-100 bg-[#F8F8F9] dark:bg-dark-secondary">
            <div className="container-fluid">
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <FaClipboardCheck className="mx-auto size-16 text-primary" />
                    </div>
                    <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                        Quality Control Processes
                    </h3>
                    <p className="mt-3">
                        Quality parameters aligned with buyer specifications and market requirements
                    </p>
                </div>

                <div className="max-w-[1720px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-aos="fade-up" data-aos-delay="300">

                    {/* 1. Sourcing Verification */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title rounded-[10px] hover:shadow-lg duration-300">
                        <FaSeedling className="size-12 text-primary mb-4" />
                        <h5 className="font-semibold text-xl md:text-2xl mb-3">Sourcing Verification</h5>
                        <p className="text-base">
                            Agricultural products are sourced through direct farmers and regional suppliers with origin details and agreed quality parameters reviewed prior to export coordination.
                        </p>
                    </div>

                    {/* 2. Specification Alignment */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title rounded-[10px] hover:shadow-lg duration-300">
                        <FaClipboardCheck className="size-12 text-primary mb-4" />
                        <h5 className="font-semibold text-xl md:text-2xl mb-3">Specification Alignment</h5>
                        <p className="text-base">
                            Product specifications are aligned with buyer requirements and intended applications before export preparation.
                        </p>
                    </div>

                    {/* 3. Packaging & Labeling Review */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title rounded-[10px] hover:shadow-lg duration-300">
                        <FaTags className="size-12 text-primary mb-4" />
                        <h5 className="font-semibold text-xl md:text-2xl mb-3">Packaging & Labeling Review</h5>
                        <p className="text-base">
                            Export packaging and labeling are coordinated to align with destination market regulations and buyer specifications.
                        </p>
                    </div>

                    {/* 4. Pre-Shipment Review */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title rounded-[10px] hover:shadow-lg duration-300">
                        <FaShippingFast className="size-12 text-primary mb-4" />
                        <h5 className="font-semibold text-xl md:text-2xl mb-3">Pre-Shipment Review</h5>
                        <p className="text-base">
                            Export documentation and shipment details are reviewed prior to dispatch to support international trade requirements.
                        </p>
                    </div>

                    {/* 5. Traceability Support */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title rounded-[10px] hover:shadow-lg duration-300">
                        <FaListAlt className="size-12 text-primary mb-4" />
                        <h5 className="font-semibold text-xl md:text-2xl mb-3">Traceability Support</h5>
                        <p className="text-base">
                            Batch-level traceability is supported through coordinated records from sourcing to shipment for reference and compliance purposes.
                        </p>
                    </div>

                    {/* 6. Documentation */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title rounded-[10px] hover:shadow-lg duration-300">
                        <FaBoxOpen className="size-12 text-primary mb-4" />
                        <h5 className="font-semibold text-xl md:text-2xl mb-3">Export Documentation</h5>
                        <p className="text-base">
                            Export certificates, phytosanitary certificates, and compliance documentation provided as per destination requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* CONTACT CTA */}
        {/* ============================================ */}
        <div className="s-py-100">
            <div className="container-fluid">
                <div className="max-w-3xl mx-auto text-center p-8 md:p-12 bg-primary rounded-[10px]" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-white text-2xl md:text-3xl font-semibold">
                        Need Quality Documentation?
                    </h3>
                    <p className="text-white text-base md:text-lg mt-4">
                        Request product specifications, certificates, or compliance documentation for your destination market.
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
