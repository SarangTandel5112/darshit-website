import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Pavanity Components
import NavbarPavanity from '../../components/navbar/navbar-pavanity'
import FooterPavanity from '../../components/footer/footer-pavanity'
import ScrollToTop from '../../components/scroll-to-top'

// Hero Background Image (placeholder - replace with actual image)
import bg from '../../assets/img/home-v4/banner-bg.jpg'

// Pavanity Data
import {
    heroContent,
    businessContinuity,
    divisions,
    commercialScope,
    globalMarkets,
    businessEnquiries
} from '../../data/pavanity-data'

// Icons (you can replace with actual icons later)
import { FaCheckCircle, FaShieldAlt, FaGlobeAmericas, FaFileAlt, FaBox, FaTruck } from 'react-icons/fa'

import Aos from 'aos'

interface BusinessContinuityItem {
    id: number;
    title: string;
    description: string;
    icon: string;
}

interface Division {
    id: number;
    name: string;
    slug: string;
    tagline: string;
    description: string;
    image: string;
}

interface CommercialScopeItem {
    id: number;
    title: string;
    description: string;
    icon: string;
}

interface GlobalMarket {
    id: number;
    region: string;
}

export default function PavanityHomeV4() {
    useEffect(()=>{
        Aos.init()
        window.scrollTo(0,0)
    },[])

  return (
    <>
        {/* Navbar */}
        <NavbarPavanity/>

        {/* ============================================ */}
        {/* SECTION 1: HERO SECTION */}
        {/* ============================================ */}
        <div className="pt-40 sm:pt-52 lg:pt-[280px] pb-52 lg:pb-[350px] 2xl:pb-[450px] bg-overlay dark:before:bg-title dark:before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="max-w-[751px] mx-auto">
                    {/* Main Headline */}
                    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug">
                        {heroContent.h1}
                    </h2>

                    {/* Sub Headline */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug mt-3 md:mt-4 font-secondary text-primary font-normal">
                        {heroContent.h2}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 md:mt-4 text-base md:text-lg">
                        {heroContent.description}
                    </p>

                    {/* CTA Button - View Products Only */}
                    <div>
                        <Link to="/products" className="group md:text-lg font-medium leading-none text-title dark:text-white flex items-center gap-3 mt-3">
                            <span className="text-underline leading-none">View Products</span>
                            <svg className="fill-current text-title dark:text-white w-5 md:w-7" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.2303 6.58892C30.5232 6.29603 30.5232 5.82116 30.2303 5.52826L25.4574 0.755293C25.1645 0.462399 24.6896 0.462399 24.3967 0.755293C24.1038 1.04819 24.1038 1.52306 24.3967 1.81595L28.6393 6.05859L24.3967 10.3012C24.1038 10.5941 24.1038 11.069 24.3967 11.3619C24.6896 11.6548 25.1645 11.6548 25.4574 11.3619L30.2303 6.58892ZM0 6.80859L29.7 6.80859V5.30859L0 5.30859L0 6.80859Z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* TRUST INDICATORS - Floating Cards Below Hero */}
        {/* ============================================ */}
        <div className="container">
            <div className="max-w-1366 mx-auto">
                <div className="hv3-service-wrapper bg-white dark:bg-title rounded-[10px] -mt-16 relative z-10 xl:flex xl:justify-between sm:gap-5 grid sm:grid-cols-2">
                    {/* Card 1: Export-Ready */}
                    <div className="group flex items-center gap-5 p-6">
                        <div className="w-14 md:w-[70px] h-14 p-[10px] md:h-[70px] flex items-center justify-center border border-primary rounded-[10px] group-hover:bg-primary duration-300">
                            <FaShieldAlt className="text-primary group-hover:text-white duration-300 text-2xl md:text-3xl" />
                        </div>
                        <div>
                            <h5 className="font-medium leading-none text-lg lg:text-xl">Export-Ready</h5>
                            <p className="leading-none mt-[10px]">International Trade Standards</p>
                        </div>
                    </div>
                    <div className="w-[1px] border border-dashed border-title border-opacity-50 dark:border-opacity-50 dark:border-white absolute h-full xl:h-auto xl:static transform left-1/2 -translate-x-1/2 xl:-translate-x-0 top-0 hidden sm:block"></div>

                    {/* Card 2: Quality & Compliance */}
                    <div className="group flex items-center gap-5 p-6">
                        <div className="w-14 md:w-[70px] h-14 p-[10px] md:h-[70px] flex items-center justify-center border border-primary rounded-[10px] group-hover:bg-primary duration-300">
                            <FaCheckCircle className="text-primary group-hover:text-white duration-300 text-2xl md:text-3xl" />
                        </div>
                        <div>
                            <h5 className="font-medium leading-none text-lg lg:text-xl">Quality & Compliance</h5>
                            <p className="leading-none mt-[10px]">Certified Food Safety</p>
                        </div>
                    </div>
                    <div className="w-[1px] border border-dashed border-title border-opacity-50 dark:border-opacity-50 dark:border-white absolute h-full xl:h-auto xl:static transform left-1/2 -translate-x-1/2 xl:-translate-x-0 top-0 hidden sm:block"></div>

                    {/* Card 3: International Trade */}
                    <div className="group flex items-center gap-5 p-6">
                        <div className="w-14 md:w-[70px] h-14 p-[10px] md:h-[70px] flex items-center justify-center border border-primary rounded-[10px] group-hover:bg-primary duration-300">
                            <FaGlobeAmericas className="text-primary group-hover:text-white duration-300 text-2xl md:text-3xl" />
                        </div>
                        <div>
                            <h5 className="font-medium leading-none text-lg lg:text-xl">International Trade</h5>
                            <p className="leading-none mt-[10px]">Global B2B Networks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* SECTION 2: BUSINESS CONTINUITY (3 Cards) */}
        {/* ============================================ */}
        <div className="s-py-100 bg-[#f5f5f5] dark:bg-dark-secondary">
            <div className="container">
                <div className="max-w-1366 mx-auto">
                    {/* Section Header (Optional) */}
                    <div className="text-center mb-10 md:mb-14" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="font-semibold leading-none text-2xl sm:text-3xl lg:text-4xl">Business Continuity</h2>
                        <p className="mt-4 text-base md:text-lg text-title dark:text-white-light max-w-[700px] mx-auto">
                            Structured export supply for long-term B2B partnerships
                        </p>
                    </div>

                    {/* 3 Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-aos="fade-up" data-aos-delay="300">
                        {businessContinuity.map((item: BusinessContinuityItem, index: number)=>{
                            return(
                                <div className="bg-white dark:bg-title p-6 md:p-8 rounded-[10px] hover:shadow-lg duration-300" key={index}>
                                    {/* Icon */}
                                    <div className="w-14 h-14 md:w-16 md:h-16 bg-primary bg-opacity-10 rounded-[10px] flex items-center justify-center mb-5">
                                        {index === 0 && <FaTruck className="text-primary text-2xl md:text-3xl" />}
                                        {index === 1 && <FaFileAlt className="text-primary text-2xl md:text-3xl" />}
                                        {index === 2 && <FaShieldAlt className="text-primary text-2xl md:text-3xl" />}
                                    </div>

                                    {/* Title */}
                                    <h5 className="font-semibold text-xl md:text-2xl leading-none">{item.title}</h5>

                                    {/* Description */}
                                    <p className="mt-3 md:mt-4 text-title dark:text-white-light">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* SECTION 3: PRODUCT DIVISIONS (6 Cards) */}
        {/* ============================================ */}
        <div className="s-py-100">
            <div className="container">
                <div className="max-w-1366 mx-auto">
                    {/* Section Header */}
                    <div className="flex items-center justify-between gap-5 flex-wrap mb-8 md:mb-12 pb-4 md:pb-6 border-b border-bdr-clr dark:border-bdr-clr-drk" data-aos="fade-up" data-aos-delay="100">
                        <div>
                            <h2 className="font-semibold leading-none text-2xl sm:text-3xl lg:text-4xl">Our Product Divisions</h2>
                            <p className="mt-3 text-base md:text-lg text-title dark:text-white-light">
                                Export supply across core food and ingredient categories.
                            </p>
                        </div>
                        <Link to="/products" className="group flex items-center gap-[10px] font-medium md:text-lg leading-none text-title dark:text-white hover:text-primary dark:hover:text-primary duration-300">
                            <span className="text-underline-primary leading-none">View All Products</span>
                            <svg className="w-5 md:w-[30px] fill-current" viewBox="0 0 31 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.5311 6.43072C30.824 6.13783 30.824 5.66295 30.5311 5.37006L25.7581 0.59709C25.4653 0.304196 24.9904 0.304196 24.6975 0.59709C24.4046 0.889983 24.4046 1.36486 24.6975 1.65775L28.9401 5.90039L24.6975 10.143C24.4046 10.4359 24.4046 10.9108 24.6975 11.2037C24.9904 11.4966 25.4653 11.4966 25.7581 11.2037L30.5311 6.43072ZM0.300781 6.65039L30.0008 6.65039V5.15039L0.300781 5.15039L0.300781 6.65039Z"/>
                            </svg>
                        </Link>
                    </div>

                    {/* 6 Division Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-aos="fade-up" data-aos-delay="400">
                        {divisions.map((division: Division, index: number)=>{
                            return(
                                <Link
                                    to={`/products/${division.slug}`}
                                    className="group block"
                                    key={index}
                                >
                                    {/* Division Image */}
                                    <div className="relative overflow-hidden rounded-[10px]">
                                        <img
                                            className="w-full h-[300px] md:h-[350px] object-cover transform duration-300 group-hover:scale-110"
                                            src={division.image}
                                            alt={division.name}
                                            onError={(e) => {
                                                // Fallback for placeholder images
                                                e.currentTarget.src = `https://via.placeholder.com/600x400/f5f5f5/666666?text=${division.slug}`
                                            }}
                                        />
                                        {/* Overlay on Hover */}
                                        <div className="absolute inset-0 bg-title bg-opacity-0 group-hover:bg-opacity-20 duration-300"></div>
                                    </div>

                                    {/* Division Info */}
                                    <div className="mt-5 md:mt-6">
                                        <h4 className="font-semibold text-xl md:text-2xl dark:text-white leading-none">
                                            {division.name}
                                        </h4>
                                        <p className="mt-3 text-title dark:text-white-light">
                                            {division.tagline}
                                        </p>
                                        <div className="mt-4 inline-flex items-center text-primary font-medium gap-2 group-hover:gap-3 transition-all">
                                            <span>Explore Products</span>
                                            <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* SECTION 4: COMMERCIAL SCOPE (4 Cards) */}
        {/* ============================================ */}
        <div className="s-py-100 bg-[#f5f5f5] dark:bg-dark-secondary">
            <div className="container">
                <div className="max-w-1366 mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-10 md:mb-14" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="font-semibold leading-none text-2xl sm:text-3xl lg:text-4xl">Commercial Scope</h2>
                        <p className="mt-4 text-base md:text-lg text-title dark:text-white-light max-w-[700px] mx-auto">
                            Comprehensive export solutions for international food trade
                        </p>
                    </div>

                    {/* 4 Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6" data-aos="fade-up" data-aos-delay="300">
                        {commercialScope.map((item: CommercialScopeItem, index: number)=>{
                            return(
                                <div
                                    className="bg-white dark:bg-title p-6 md:p-7 rounded-[10px] hover:shadow-lg duration-300 group"
                                    key={index}
                                >
                                    {/* Icon */}
                                    <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-primary rounded-[10px] flex items-center justify-center group-hover:bg-primary duration-300 mb-5">
                                        {index === 0 && <FaBox className="text-primary group-hover:text-white duration-300 text-xl md:text-2xl" />}
                                        {index === 1 && <FaCheckCircle className="text-primary group-hover:text-white duration-300 text-xl md:text-2xl" />}
                                        {index === 2 && <FaGlobeAmericas className="text-primary group-hover:text-white duration-300 text-xl md:text-2xl" />}
                                        {index === 3 && <FaShieldAlt className="text-primary group-hover:text-white duration-300 text-xl md:text-2xl" />}
                                    </div>

                                    {/* Title */}
                                    <h5 className="font-semibold text-lg md:text-xl leading-none mb-3">
                                        {item.title}
                                    </h5>

                                    {/* Description */}
                                    <p className="text-sm md:text-base text-title dark:text-white-light">
                                        {item.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* SECTION 5: GLOBAL MARKETS (5 Regions) */}
        {/* ============================================ */}
        <div className="s-py-100">
            <div className="container">
                <div className="max-w-1366 mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-10 md:mb-14" data-aos="fade-up" data-aos-delay="100">
                        <h2 className="font-semibold leading-none text-2xl sm:text-3xl lg:text-4xl">Global Markets</h2>
                        <p className="mt-4 text-base md:text-lg text-title dark:text-white-light max-w-[700px] mx-auto">
                            Serving food businesses across key global regions.
                        </p>
                    </div>

                    {/* 5 Region Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6" data-aos="fade-up" data-aos-delay="300">
                        {globalMarkets.map((market: GlobalMarket, index: number)=>{
                            return(
                                <div
                                    className="px-8 md:px-10 py-5 md:py-6 bg-white dark:bg-title border-2 border-primary rounded-[10px] hover:bg-primary hover:text-white dark:hover:text-white group duration-300"
                                    key={index}
                                >
                                    <h4 className="text-lg md:text-xl font-semibold text-center whitespace-nowrap group-hover:text-white">
                                        {market.region}
                                    </h4>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* SECTION 6: BUSINESS ENQUIRIES */}
        {/* ============================================ */}
        <div className="s-py-100 bg-primary dark:bg-primary">
            <div className="container">
                <div className="max-w-[900px] mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
                        {businessEnquiries.heading}
                    </h2>

                    {/* Email */}
                    <div className="mt-8 md:mt-10">
                        <a
                            href={`mailto:${businessEnquiries.email}`}
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white hover:text-opacity-80 duration-300 inline-block"
                        >
                            {businessEnquiries.email}
                        </a>
                    </div>

                    {/* Response Time */}
                    <p className="mt-5 md:mt-6 text-lg md:text-xl text-white text-opacity-90">
                        {businessEnquiries.response}
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8 md:mt-10">
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-primary px-10 py-4 text-base md:text-lg font-semibold rounded-[5px] hover:bg-opacity-90 duration-300"
                        >
                            {businessEnquiries.ctaText}
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
