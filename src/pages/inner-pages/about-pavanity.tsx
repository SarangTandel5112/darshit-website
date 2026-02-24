import { useEffect } from "react";
import { Link } from "react-router-dom";

// Images - Using template images as placeholders
import bg from '../../assets/img/about-us-top-header.jpeg'
import aboutImage from '../../assets/img/about-us.jpeg'

// Icons 
import { FaIndustry, FaShieldAlt, FaCheckCircle, FaAward, FaUsers, FaFlask } from 'react-icons/fa'

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
                            <div className="w-20 h-20 bg-primary rounded-[10px] flex items-center justify-center">
                                <FaIndustry className="size-16 text-white" />
                            </div>
                            <h2 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                                About Pavanity Global
                            </h2>
                            <p className="mt-3 text-base sm:text-lg">
                                Pavanity Global is part of the Pavanity Group of Companies, specializing in agricultural sourcing and export coordination for food and agricultural ingredients to international B2B and HoReCa markets.
                            </p>
                            <p className="mt-3 text-base sm:text-lg">
                                We specialize in structured sourcing and export supply aligned with buyer specifications, quality standards, and destination market regulations. Our product portfolio includes agricultural commodities, dehydrated products, natural food ingredients, and value-added food supplies tailored for bulk and private label requirements.
                            </p>
                            <p className="mt-3 text-base sm:text-lg">
                                Our operations are designed to support consistency, compliance, and long-term supply continuity for international buyers. Pavanity Global focuses on transparent trade practices and export documentation support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* PAVANITY CHEMICAL SECTION */}
        {/* ============================================ */}
        <div className="s-pb-100 bg-[#F8F8F9] dark:bg-dark-secondary">
            <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-[1720px] mx-auto flex flex-col lg:grid lg:grid-cols-2">
                    {/* Content Column */}
                    <div className="flex items-center py-8 sm:py-12 px-5 sm:px-12 md:px-8 lg:pr-16 lg:pl-12 2xl:pl-[160px]">
                        <div className="lg:max-w-[600px]">
                            <div className="w-20 h-20 bg-primary rounded-[10px] flex items-center justify-center">
                                <FaFlask className="size-16 text-white" />
                            </div>
                            <h2 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                                Pavanity Chemical
                            </h2>
                            <p className="mt-3 text-base sm:text-lg">
                                Pavanity Chemical is a sister concern within the Pavanity Group of Companies, specializing in industrial chemicals, specialty chemicals, and chemical raw materials for various industries.
                            </p>
                            <p className="mt-3 text-base sm:text-lg">
                                Operating with the same commitment to quality and compliance, Pavanity Chemical serves manufacturing, pharmaceutical, textile, and industrial sectors with reliable chemical supply solutions.
                            </p>
                            <p className="mt-3 text-base sm:text-lg">
                                The company focuses on structured sourcing, quality assurance, and regulatory compliance to support industrial requirements across domestic and international markets.
                            </p>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="lg:bg-white lg:dark:bg-title lg:pl-10 2xl:pl-0 relative">
                        <div>
                            <img className="object-cover w-full" src={aboutImage} alt="Pavanity Chemical - Industrial Chemicals"/>
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
                    <div className="w-20 h-20 bg-primary rounded-[10px] flex items-center justify-center mx-auto">
                        <FaCheckCircle className="size-16 text-white" />
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

                    {/* Feature 1: Quality & Compliance */}
                    <div className="p-6 pb-0 rounded-[10px] relative">
                        <div className="w-[1px] h-[120px] absolute right-0 top-[30%] hidden 2xl:block border-l border-dashed border-primary"></div>
                        <div className="w-14 h-14 bg-primary rounded-[10px] flex items-center justify-center">
                            <FaShieldAlt className="size-8 text-white" />
                        </div>
                        <h5 className="font-semibold text-xl md:text-2xl mt-3 md:mt-7">Quality & Compliance</h5>
                        <p className="mt-2 sm:mt-3">
                            Trade conducted in alignment with applicable food safety regulations, certifications, and destination requirements.
                        </p>
                    </div>

                    {/* Feature 3: Supply Continuity */}
                    <div className="p-6 pb-0 rounded-[10px] relative">
                        <div className="w-[1px] h-[120px] absolute right-0 top-[30%] hidden 2xl:block border-l border-dashed border-primary"></div>
                        <div className="w-14 h-14 bg-primary rounded-[10px] flex items-center justify-center">
                            <FaIndustry className="size-8 text-white" />
                        </div>
                        <h5 className="font-semibold text-xl md:text-2xl mt-3 md:mt-7">Supply Continuity</h5>
                        <p className="mt-2 sm:mt-3">
                            Export supply structured to support recurring volumes, predictable schedules, and long-term planning.
                        </p>
                    </div>

                    {/* Feature 4: Custom Product Development */}
                    <div className="p-6 pb-0 rounded-[10px] relative">
                        <div className="w-[1px] h-[120px] absolute right-0 top-[30%] hidden 2xl:block border-l border-dashed border-primary"></div>
                        <div className="w-14 h-14 bg-primary rounded-[10px] flex items-center justify-center">
                            <FaAward className="size-8 text-white" />
                        </div>
                        <h5 className="font-semibold text-xl md:text-2xl mt-3 md:mt-7">Custom Product Development</h5>
                        <p className="mt-2 sm:mt-3">
                            Export supply under buyer specifications and custom formulations, subject to applicable market and regulatory requirements.
                        </p>
                    </div>

                    {/* Feature 5: B2B Focus */}
                    <div className="p-6 pb-0 rounded-[10px] relative">
                        <div className="w-14 h-14 bg-primary rounded-[10px] flex items-center justify-center">
                            <FaUsers className="size-8 text-white" />
                        </div>
                        <h5 className="font-semibold text-xl md:text-2xl mt-3 md:mt-7">B2B & HoReCa Focus</h5>
                        <p className="mt-2 sm:mt-3">
                            Supply of food ingredients and agri-based products for international B2B and HoReCa distribution channels.
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
