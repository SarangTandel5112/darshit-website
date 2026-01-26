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
                            <div className="w-20 h-20 bg-primary rounded-[10px] flex items-center justify-center">
                                <FaShieldAlt className="size-16 text-white" />
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
                    <div className="w-20 h-20 bg-primary rounded-[10px] flex items-center justify-center mx-auto">
                        <FaClipboardCheck className="size-16 text-white" />
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
                        <div className="w-16 h-16 bg-primary rounded-[10px] flex items-center justify-center mb-4">
                            <FaSeedling className="size-10 text-white" />
                        </div>
                        <h5 className="font-semibold text-xl md:text-2xl mb-3">Sourcing Verification</h5>
                        <p className="text-base">
                            Agricultural products are sourced through direct farmers and regional suppliers with origin details and agreed quality parameters reviewed prior to export coordination.
                        </p>
                    </div>

                    {/* 2. Specification Alignment */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title rounded-[10px] hover:shadow-lg duration-300">
                        <div className="w-16 h-16 bg-primary rounded-[10px] flex items-center justify-center mb-4">
                            <FaClipboardCheck className="size-10 text-white" />
                        </div>
                        <h5 className="font-semibold text-xl md:text-2xl mb-3">Specification Alignment</h5>
                        <p className="text-base">
                            Product specifications are aligned with buyer requirements and intended applications before export preparation.
                        </p>
                    </div>

                    {/* 3. Packaging & Labeling Review */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title rounded-[10px] hover:shadow-lg duration-300">
                        <div className="w-16 h-16 bg-primary rounded-[10px] flex items-center justify-center mb-4">
                            <FaTags className="size-10 text-white" />
                        </div>
                        <h5 className="font-semibold text-xl md:text-2xl mb-3">Packaging & Labeling Review</h5>
                        <p className="text-base">
                            Export packaging and labeling are coordinated to align with destination market regulations and buyer specifications.
                        </p>
                    </div>

                    {/* 4. Pre-Shipment Review */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title rounded-[10px] hover:shadow-lg duration-300">
                        <div className="w-16 h-16 bg-primary rounded-[10px] flex items-center justify-center mb-4">
                            <FaShippingFast className="size-10 text-white" />
                        </div>
                        <h5 className="font-semibold text-xl md:text-2xl mb-3">Pre-Shipment Review</h5>
                        <p className="text-base">
                            Export documentation and shipment details are reviewed prior to dispatch to support international trade requirements.
                        </p>
                    </div>

                    {/* 5. Traceability Support */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title rounded-[10px] hover:shadow-lg duration-300">
                        <div className="w-16 h-16 bg-primary rounded-[10px] flex items-center justify-center mb-4">
                            <FaListAlt className="size-10 text-white" />
                        </div>
                        <h5 className="font-semibold text-xl md:text-2xl mb-3">Traceability Support</h5>
                        <p className="text-base">
                            Batch-level traceability is supported through coordinated records from sourcing to shipment for reference and compliance purposes.
                        </p>
                    </div>

                    {/* 6. Documentation */}
                    <div className="p-6 md:p-8 bg-white dark:bg-title rounded-[10px] hover:shadow-lg duration-300">
                        <div className="w-16 h-16 bg-primary rounded-[10px] flex items-center justify-center mb-4">
                            <FaBoxOpen className="size-10 text-white" />
                        </div>
                        <h5 className="font-semibold text-xl md:text-2xl mb-3">Export Documentation</h5>
                        <p className="text-base">
                            Export certificates, phytosanitary certificates, and compliance documentation provided as per destination requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* CONTAINER LOAD CAPACITY */}
        {/* ============================================ */}
        <div className="s-py-100">
            <div className="container-fluid">
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div className="w-20 h-20 bg-primary rounded-[10px] flex items-center justify-center mx-auto">
                        <FaShippingFast className="size-16 text-white" />
                    </div>
                    <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                        Container Load Capacity
                    </h3>
                    <p className="mt-3">
                        Standard FCL capacity for dehydrated onion and garlic products
                    </p>
                </div>

                <div className="max-w-[1720px] mx-auto space-y-8" data-aos="fade-up" data-aos-delay="300">
                    {/* Dehydrated Garlic Products Table */}
                    <div className="bg-white dark:bg-title rounded-[10px] overflow-hidden">
                        <div className="bg-primary p-4">
                            <h4 className="text-white text-xl md:text-2xl font-semibold">Dehydrated Garlic Products</h4>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-[#F8F8F9] dark:bg-dark-secondary">
                                        <th className="text-left p-4 font-semibold text-base md:text-lg">Sr No.</th>
                                        <th className="text-left p-4 font-semibold text-base md:text-lg">Product</th>
                                        <th className="text-left p-4 font-semibold text-base md:text-lg">20' FCL</th>
                                        <th className="text-left p-4 font-semibold text-base md:text-lg">40' FCL</th>
                                        <th className="text-left p-4 font-semibold text-base md:text-lg">Packing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-title/10 dark:border-white/10">
                                        <td className="p-4 text-base">1</td>
                                        <td className="p-4 text-base">Dehydrated Garlic Cloves</td>
                                        <td className="p-4 text-base">12 MT</td>
                                        <td className="p-4 text-base">24 MT</td>
                                        <td className="p-4 text-base">20 KG / 25 KG Box packing inside poly bag</td>
                                    </tr>
                                    <tr className="border-t border-title/10 dark:border-white/10">
                                        <td className="p-4 text-base">2</td>
                                        <td className="p-4 text-base">Dehydrated Garlic Powder</td>
                                        <td className="p-4 text-base">14–15 MT</td>
                                        <td className="p-4 text-base">24 MT</td>
                                        <td className="p-4 text-base">20 KG / 25 KG Box packing inside poly bag</td>
                                    </tr>
                                    <tr className="border-t border-title/10 dark:border-white/10">
                                        <td className="p-4 text-base">3</td>
                                        <td className="p-4 text-base">Dehydrated Garlic Granules</td>
                                        <td className="p-4 text-base">14–15 MT</td>
                                        <td className="p-4 text-base">24 MT</td>
                                        <td className="p-4 text-base">20 KG / 25 KG Box packing inside poly bag</td>
                                    </tr>
                                    <tr className="border-t border-title/10 dark:border-white/10">
                                        <td className="p-4 text-base">4</td>
                                        <td className="p-4 text-base">Dehydrated Garlic Minced</td>
                                        <td className="p-4 text-base">14–15 MT</td>
                                        <td className="p-4 text-base">24 MT</td>
                                        <td className="p-4 text-base">20 KG / 25 KG Box packing inside poly bag</td>
                                    </tr>
                                    <tr className="border-t border-title/10 dark:border-white/10">
                                        <td className="p-4 text-base">5</td>
                                        <td className="p-4 text-base">Dehydrated Garlic Chopped</td>
                                        <td className="p-4 text-base">14–15 MT</td>
                                        <td className="p-4 text-base">24 MT</td>
                                        <td className="p-4 text-base">20 KG / 25 KG Box packing inside poly bag</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Dehydrated Onion Products Table */}
                    <div className="bg-white dark:bg-title rounded-[10px] overflow-hidden">
                        <div className="bg-primary p-4">
                            <h4 className="text-white text-xl md:text-2xl font-semibold">Dehydrated Onion Products (White/Red/Pink)</h4>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-[#F8F8F9] dark:bg-dark-secondary">
                                        <th className="text-left p-4 font-semibold text-base md:text-lg">Product</th>
                                        <th className="text-left p-4 font-semibold text-base md:text-lg">20' FCL</th>
                                        <th className="text-left p-4 font-semibold text-base md:text-lg">40' FCL</th>
                                        <th className="text-left p-4 font-semibold text-base md:text-lg">Packing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-title/10 dark:border-white/10">
                                        <td className="p-4 text-base">Dehydrated White/Red/Pink Onion Flakes</td>
                                        <td className="p-4 text-base">7 MT</td>
                                        <td className="p-4 text-base">16 MT</td>
                                        <td className="p-4 text-base">14 KG Paper bag inside poly bag</td>
                                    </tr>
                                    <tr className="border-t border-title/10 dark:border-white/10">
                                        <td className="p-4 text-base">Dehydrated White/Red/Pink Onion Powder</td>
                                        <td className="p-4 text-base">14–15 MT</td>
                                        <td className="p-4 text-base">24 MT</td>
                                        <td className="p-4 text-base">20 KG / 25 KG Box packing inside poly bag</td>
                                    </tr>
                                    <tr className="border-t border-title/10 dark:border-white/10">
                                        <td className="p-4 text-base">Dehydrated White/Red/Pink Onion Chopped</td>
                                        <td className="p-4 text-base">14–15 MT</td>
                                        <td className="p-4 text-base">24 MT</td>
                                        <td className="p-4 text-base">20 KG / 25 KG Box packing inside poly bag</td>
                                    </tr>
                                    <tr className="border-t border-title/10 dark:border-white/10">
                                        <td className="p-4 text-base">Dehydrated White/Red/Pink Onion Granules</td>
                                        <td className="p-4 text-base">14–15 MT</td>
                                        <td className="p-4 text-base">24 MT</td>
                                        <td className="p-4 text-base">20 KG / 25 KG Box packing inside poly bag</td>
                                    </tr>
                                    <tr className="border-t border-title/10 dark:border-white/10">
                                        <td className="p-4 text-base">Dehydrated White/Red/Pink Onion Minced</td>
                                        <td className="p-4 text-base">14–15 MT</td>
                                        <td className="p-4 text-base">24 MT</td>
                                        <td className="p-4 text-base">20 KG / 25 KG Box packing inside poly bag</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* STUFFING CAPACITY - CONTAINER LOADING */}
        {/* ============================================ */}
        <div className="s-py-100 bg-[#F8F8F9] dark:bg-dark-secondary">
            <div className="container-fluid">
                <div
                    className="max-w-xl mx-auto mb-8 md:mb-12 text-center"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <h3 className="font-medium leading-none text-2xl md:text-3xl">
                        Stuffing Capacity – Container Loading
                    </h3>
                    <p className="mt-3 text-base md:text-lg">
                        Maximum loading capacity for Psyllium Husk containers
                    </p>
                </div>

                <div
                    className="max-w-4xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div className="bg-white dark:bg-title rounded-[10px] overflow-hidden shadow-lg">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-primary">
                                        <th className="p-4 text-left text-white text-base md:text-lg font-semibold">Container Size</th>
                                        <th className="p-4 text-center text-white text-base md:text-lg font-semibold">Maximum Loading Without Pallet</th>
                                        <th className="p-4 text-center text-white text-base md:text-lg font-semibold">Maximum Loading With Pallets</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-title/10 dark:border-white/10 hover:bg-[#F8F8F9] dark:hover:bg-dark-secondary duration-300">
                                        <td className="p-4 text-base font-medium">20 ft Container</td>
                                        <td className="p-4 text-base text-center">9 MT</td>
                                        <td className="p-4 text-base text-center">5 MT</td>
                                    </tr>
                                    <tr className="border-b border-title/10 dark:border-white/10 hover:bg-[#F8F8F9] dark:hover:bg-dark-secondary duration-300">
                                        <td className="p-4 text-base font-medium">40 ft Container</td>
                                        <td className="p-4 text-base text-center">20 MT</td>
                                        <td className="p-4 text-base text-center">10 MT</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
