import { useEffect } from "react";
import { Link } from "react-router-dom";

// Images - Using template images as placeholders
import bg from '../../assets/img/shortcode/breadcumb.jpg'
import aboutImage from '../../assets/img/about/about-banner-01.jpg'
import videoBg from '../../assets/img/about/video-bg.jpg'

// Icons
import { FaIndustry, FaGlobeAmericas, FaShieldAlt, FaCheckCircle, FaAward, FaUsers } from 'react-icons/fa'

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";

import Aos from "aos";

export default function AboutPavanity() {

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
                <h1 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">About Us</h1>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">About Us</li>
                </ul>
            </div>
        </div>

        {/* ============================================ */}
        {/* COMPANY OVERVIEW SECTION */}
        {/* ============================================ */}
        <div className="s-pb-100 pt-12 md:pt-16">
            <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-[1720px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2">
                    {/* Image Column */}
                    <div className="lg:bg-[#F8F8F9] lg:dark:bg-dark-secondary lg:pr-10 2xl:pr-0 relative">
                        <div>
                            <img className="object-cover w-full" src={aboutImage} alt="Pavanity Global - Food Export Company"/>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex items-center py-8 sm:py-12 px-5 sm:px-12 md:px-8 lg:pr-12 lg:pl-16 2xl:pl-[160px] bg-[#F8F8F9] dark:bg-dark-secondary">
                        <div className="lg:max-w-[600px]">
                            <div>
                                <FaIndustry className="size-16 text-primary" />
                            </div>
                            <h2 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                                About Pavanity Global
                            </h2>
                            <p className="mt-3 text-base sm:text-lg">
                                Pavanity Global is an export-focused trading company supplying food and agricultural ingredients to international B2B and HoReCa markets.
                            </p>
                            <p className="mt-3 text-base sm:text-lg">
                                We specialize in structured sourcing and export supply aligned with buyer specifications, quality standards, and destination market regulations. Our product portfolio includes agricultural commodities, dehydrated products, natural food ingredients, and value-added food supplies tailored for bulk and private label requirements.
                            </p>
                            <p className="mt-3 text-base sm:text-lg">
                                Our operations are designed to support consistency, compliance, and long-term supply continuity for international buyers. Pavanity Global focuses on transparent trade practices, export documentation support, and dependable sourcing relationships across global markets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* WHY PAVANITY GLOBAL - FEATURES SECTION */}
        {/* ============================================ */}
        <div className="s-pb-100">
            <div className="container-fluid">
                {/* Section Header */}
                <div className="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    <div>
                        <FaCheckCircle className="mx-auto size-16 text-primary" />
                    </div>
                    <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                        Why Pavanity Global
                    </h3>
                    <p className="mt-3">
                        Structured export supply for international food trade—backed by compliance, continuity, and commercial clarity.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="max-w-sm sm:max-w-[1720px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 xl:flex lg:justify-between gap-7 flex-wrap lg:flex-nowrap" data-aos="fade-up" data-aos-delay="300">

                    {/* Feature 1: Export Experience */}
                    <div className="p-6 pb-0 rounded-[10px] relative">
                        <div className="w-[1px] h-[120px] absolute right-0 top-[30%] hidden 2xl:block border-l border-dashed border-primary"></div>
                        <FaGlobeAmericas className="size-12 text-primary" />
                        <h5 className="font-semibold text-xl md:text-2xl mt-3 md:mt-7">Export Experience</h5>
                        <p className="mt-2 sm:mt-3">
                            Active participation across multiple international regions through established export channels and trade networks.
                        </p>
                    </div>

                    {/* Feature 2: Quality & Compliance */}
                    <div className="p-6 pb-0 rounded-[10px] relative">
                        <div className="w-[1px] h-[120px] absolute right-0 top-[30%] hidden 2xl:block border-l border-dashed border-primary"></div>
                        <FaShieldAlt className="size-12 text-primary" />
                        <h5 className="font-semibold text-xl md:text-2xl mt-3 md:mt-7">Quality & Compliance</h5>
                        <p className="mt-2 sm:mt-3">
                            Trade conducted in alignment with applicable food safety regulations, certifications, and destination requirements.
                        </p>
                    </div>

                    {/* Feature 3: Supply Continuity */}
                    <div className="p-6 pb-0 rounded-[10px] relative">
                        <div className="w-[1px] h-[120px] absolute right-0 top-[30%] hidden 2xl:block border-l border-dashed border-primary"></div>
                        <FaIndustry className="size-12 text-primary" />
                        <h5 className="font-semibold text-xl md:text-2xl mt-3 md:mt-7">Supply Continuity</h5>
                        <p className="mt-2 sm:mt-3">
                            Export supply structured to support recurring volumes, predictable schedules, and long-term planning.
                        </p>
                    </div>

                    {/* Feature 4: Custom Product Development */}
                    <div className="p-6 pb-0 rounded-[10px] relative">
                        <div className="w-[1px] h-[120px] absolute right-0 top-[30%] hidden 2xl:block border-l border-dashed border-primary"></div>
                        <FaAward className="size-12 text-primary" />
                        <h5 className="font-semibold text-xl md:text-2xl mt-3 md:mt-7">Custom Product Development</h5>
                        <p className="mt-2 sm:mt-3">
                            Export supply under buyer specifications and custom formulations, subject to applicable market and regulatory requirements.
                        </p>
                    </div>

                    {/* Feature 5: B2B Focus */}
                    <div className="p-6 pb-0 rounded-[10px] relative">
                        <FaUsers className="size-12 text-primary" />
                        <h5 className="font-semibold text-xl md:text-2xl mt-3 md:mt-7">B2B & HoReCa Focus</h5>
                        <p className="mt-2 sm:mt-3">
                            Supply of food ingredients and agri-based products for international B2B and HoReCa distribution channels.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* MANUFACTURING & FACILITIES SECTION */}
        {/* (Using video background section as inspiration) */}
        {/* ============================================ */}
        <div className="container-fluid" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-overlay before:bg-title before:bg-opacity-70 h-64 sm:h-96 lg:h-[500px] flex items-center justify-center max-w-[1720px] mx-auto rounded-[10px]" style={{backgroundImage:`url(${videoBg})`}}>
                <div className="text-center px-6">
                    <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
                        Manufacturing & Export Infrastructure
                    </h3>
                    <p className="text-white text-lg sm:text-xl mt-4 max-w-2xl mx-auto">
                        Equipped with processing, packaging, and quality control facilities aligned with international food safety standards.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block mt-8 bg-primary text-white px-8 py-4 text-base md:text-lg font-medium rounded-[5px] hover:bg-opacity-90 duration-300"
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
