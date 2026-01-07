import { useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";

// Images
import bg from '../../assets/img/shortcode/breadcumb.jpg'
import contactImg from '../../assets/img/thumb/contact-thumb.jpg'

// Icons
import { FaEnvelope } from 'react-icons/fa'

// Data
import { productsData } from "../../data/products-data";

import Aos from "aos";

export default function ContactPavanity() {
    useEffect(()=>{
        Aos.init()
        window.scrollTo(0,0)
    },[])

  return (
    <>
        <NavbarPavanity/>

        {/* ============================================ */}
        {/* BREADCRUMB SECTION */}
        {/* ============================================ */}
        <div className="flex items-center gap-4 flex-wrap bg-overlay pt-32 pb-14 px-14 sm:pt-36 sm:pb-16 sm:px-16 before:bg-title before:bg-opacity-70" style={{backgroundImage:`url(${bg})`}}>
            <div className="text-center w-full">
                <h1 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Contact Us</h1>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Contact</li>
                </ul>
            </div>
        </div>

        {/* ============================================ */}
        {/* CONTACT FORM SECTION */}
        {/* ============================================ */}
        <div className="s-pb-100 s-pt-100">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto flex justify-between gap-8">
                    <div className="max-w-[894px] w-full hidden lg:block" data-aos="zoom-in">
                        <img className="w-full" src={contactImg} alt="Contact Pavanity Global"/>
                    </div>
                    <div className="max-w-[725px] w-full mx-auto lg:mx-0">
                        <div data-aos="fade-up">
                            <FaEnvelope className="size-16 text-primary" />
                            <h2 className="leading-none font-medium mt-3 md:mt-6 text-2xl md:text-3xl">Business Enquiries</h2>
                            <p className="max-w-[474px] mt-3 md:mt-4 font-medium">
                                For export supply discussions, commercial enquiries, and bulk order requirements—submit your details and our team will respond within 24-48 working hours.
                            </p>
                        </div>
                        <div className="mt-8" data-aos="fade-up" data-aos-delay="100">
                            <div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5 sm:gap-6">
                                    {/* Full Name */}
                                    <div>
                                        <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2.5 block">Full Name *</label>
                                        <input className="w-full h-12 md:h-14 bg-snow dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="Enter your full name" required/>
                                    </div>

                                    {/* Company Name */}
                                    <div>
                                        <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2.5 block">Company Name *</label>
                                        <input className="w-full h-12 md:h-14 bg-snow dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="Enter your company name" required/>
                                    </div>

                                    {/* Country */}
                                    <div>
                                        <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2.5 block">Country *</label>
                                        <input className="w-full h-12 md:h-14 bg-snow dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="text" placeholder="Enter your country" required/>
                                    </div>

                                    {/* Business Email */}
                                    <div>
                                        <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2.5 block">Business Email *</label>
                                        <input className="w-full h-12 md:h-14 bg-snow dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" type="email" placeholder="Enter your business email" required/>
                                    </div>
                                </div>

                                {/* Product of Interest - Full Width */}
                                <div className="mt-5 sm:gap-6">
                                    <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2.5 block">Product of Interest *</label>
                                    <select className="w-full h-12 md:h-14 bg-snow dark:bg-dark-secondary border border-[#E3E5E6] text-slate-400 focus:border-primary p-4 outline-none duration-300" required>
                                        <option value="">Select product category</option>
                                        {productsData.map((category) => (
                                            <option key={category.id} value={category.slug}>{category.name}</option>
                                        ))}
                                        <option value="private-label">Private Label & Custom Sourcing</option>
                                        <option value="general">General Enquiry</option>
                                    </select>
                                </div>

                                {/* Requirement Details */}
                                <div className="mt-5 sm:gap-6">
                                    <label className="text-base md:text-lg text-title dark:text-white leading-none mb-2.5 block">Requirement Details *</label>
                                    <textarea className="w-full h-28 md:h-[170px] bg-snow dark:bg-dark-secondary border border-[#E3E5E6] text-title dark:text-white focus:border-primary p-4 outline-none duration-300" name="requirements" placeholder="Provide details about your requirements (product specifications, volumes, destination market, etc.)" required></textarea>
                                </div>

                                {/* Response Time Message */}
                                <div className="mt-4 text-sm md:text-base text-title/70 dark:text-white/70">
                                    <p>* Response within 24-48 working hours</p>
                                </div>

                                {/* Submit Button */}
                                <div className="mt-5">
                                    <button type="submit" className="btn btn-solid" data-text="Send Enquiry">
                                        <span>Send Enquiry</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ============================================ */}
        {/* CONTACT INFO SECTION */}
        {/* ============================================ */}
        <div className="s-pb-100">
            <div className="container-fluid">
                <div className="max-w-[1720px] mx-auto" data-aos="fade-up">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center">
                        {/* Email */}
                        <div className="p-8 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                            <FaEnvelope className="mx-auto size-12 text-primary mb-4" />
                            <h4 className="text-xl font-semibold mb-2">Email</h4>
                            <p className="text-base">export@pavanity.com</p>
                        </div>

                        {/* Response Time */}
                        <div className="p-8 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                            <svg className="mx-auto size-12 text-primary mb-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <h4 className="text-xl font-semibold mb-2">Response Time</h4>
                            <p className="text-base">24-48 working hours</p>
                        </div>

                        {/* Business Hours */}
                        <div className="p-8 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                            <svg className="mx-auto size-12 text-primary mb-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
                            </svg>
                            <h4 className="text-xl font-semibold mb-2">Business Enquiries</h4>
                            <p className="text-base">Open for B2B and HoReCa buyers globally</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterPavanity/>

        <ScrollToTop/>
    </>
  )
}
