import { useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import bg from '../../assets/img/shortcode/breadcumb.jpg'

// Data
import { productsData } from "../../data/products-data";

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";

import Aos from "aos";

export default function ProductsMain() {

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
                <h1 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">Products</h1>
                <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap">
                    <li><Link to="/">Home</Link></li>
                    <li>/</li>
                    <li className="text-primary">Products</li>
                </ul>
            </div>
        </div>

        {/* ============================================ */}
        {/* PRODUCT CATEGORIES GRID */}
        {/* ============================================ */}
        <div className="s-py-100">
            <div className="container-fluid">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="font-medium leading-none text-2xl md:text-3xl lg:text-4xl">
                        Export-Grade Food & Agricultural Ingredients for Global B2B Buyers
                    </h2>
                    <p className="mt-4 text-base md:text-lg">
                        Export-focused sourcing partner supplying food and agricultural ingredients to international B2B and HoReCa buyers, with compliance-ready documentation and shipment support.
                    </p>
                </div>

                {/* Product Categories Grid */}
                <div className="max-w-[1720px] mx-auto" data-aos="fade-up" data-aos-delay="300">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {productsData.map((category) => {
                            return(
                                <Link
                                    to={`/products/${category.slug}`}
                                    className="group relative overflow-hidden rounded-[10px] bg-white dark:bg-title border border-title/10 dark:border-white/10 hover:shadow-xl duration-300"
                                    key={category.id}
                                >
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden h-64 sm:h-72 lg:h-80">
                                        <img
                                            className="w-full h-full object-cover transform duration-500 group-hover:scale-110 block"
                                            src={category.image}
                                            alt={category.name}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 sm:p-8">
                                        <h3 className="text-xl md:text-2xl font-semibold leading-tight group-hover:text-primary duration-300">
                                            {category.name}
                                        </h3>
                                        <p className="text-sm md:text-base text-title/70 dark:text-white/70 mt-2">
                                            {category.tagline}
                                        </p>
                                        <p className="text-sm md:text-base mt-3 line-clamp-3">
                                            {category.description}
                                        </p>

                                        {/* View Details Link */}
                                        <div className="mt-5 flex items-center gap-2 text-primary font-medium">
                                            <span className="text-underline-primary">Explore Export Range →</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="max-w-3xl mx-auto mt-12 md:mt-16 text-center" data-aos="fade-up" data-aos-delay="500">
                    <div className="p-8 md:p-12 bg-[#F8F8F9] dark:bg-dark-secondary rounded-[10px]">
                        <h4 className="text-xl md:text-2xl font-semibold">
                            Need Custom Product Specifications?
                        </h4>
                        <p className="mt-3 text-base md:text-lg">
                            We support custom product development and bulk supply for international buyers. Contact our export team to discuss your requirements.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block mt-6 bg-primary text-white px-8 py-4 text-base md:text-lg font-medium rounded-[5px] hover:bg-opacity-90 duration-300"
                        >
                            Request Business Enquiry
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
