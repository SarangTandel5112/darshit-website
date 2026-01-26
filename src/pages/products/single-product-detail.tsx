import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Images
import bg from "../../assets/img/shortcode/breadcumb.jpg";
import placeholderImage from "../../assets/img/about/about-banner-01.jpg";

// Icons
import { FaIndustry } from "react-icons/fa";

// Data
import { getCategoryBySlug, getProductBySlug } from "../../data/products-data";

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";

import Aos from "aos";

export default function SingleProductDetail() {
    const { categorySlug, productSlug } = useParams<{
        categorySlug: string;
        productSlug: string;
    }>();

    const category = getCategoryBySlug(categorySlug || "");
    const product = getProductBySlug(productSlug || "");

    useEffect(() => {
        Aos.init();
        window.scrollTo(0, 0);
    }, []);

    if (!category || !product) {
        return (
            <>
                <NavbarPavanity />
                <div className="s-py-100 text-center">
                    <h2 className="text-3xl font-semibold">Product Not Found</h2>
                    <Link to="/products" className="btn btn-solid mt-6">
                        <span>View All Products</span>
                    </Link>
                </div>
                <FooterPavanity />
            </>
        );
    }

    return (
        <>
            {/* Navbar */}
            <NavbarPavanity />

            {/* ============================================ */}
            {/* BREADCRUMB SECTION */}
            {/* ============================================ */}
            <div
                className="flex items-center gap-4 flex-wrap bg-overlay pt-32 pb-14 px-14 sm:pt-36 sm:pb-16 sm:px-16 before:bg-title before:bg-opacity-70"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="text-center w-full">
                    <h2 className="text-white text-8 md:text-[40px] font-normal leading-none text-center">
                        {product.name}
                    </h2>
                    <p className="text-white text-lg md:text-xl mt-3">
                        {category.tagline}
                    </p>
                    <ul className="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-4 flex-wrap">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link to={`/products/${categorySlug}`}>
                                {category.name}
                            </Link>
                        </li>
                        <li>/</li>
                        <li className="text-primary">{product.name}</li>
                    </ul>
                </div>
            </div>

            {/* ============================================ */}
            {/* PRODUCT OVERVIEW SECTION */}
            {/* ============================================ */}
            <div className="s-pb-100 pt-12 md:pt-16">
                <div
                    className="container-fluid"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="max-w-[1720px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2">
                        {/* Image Column */}
                        <div className="lg:bg-[#F8F8F9] lg:dark:bg-dark-secondary lg:pr-10 2xl:pr-0 relative">
                            <div>
                                <img
                                    className="object-cover w-full h-full"
                                    src={product.image || placeholderImage}
                                    alt={product.name}
                                />
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex items-center py-8 sm:py-12 px-5 sm:px-12 md:px-8 lg:pr-12 lg:pl-16 2xl:pl-[160px] bg-[#F8F8F9] dark:bg-dark-secondary">
                            <div className="lg:max-w-[600px]">
                                <div className="w-20 h-20 bg-primary rounded-[10px] flex items-center justify-center">
                                    <FaIndustry className="size-16 text-white" />
                                </div>
                                <h3 className="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                                    {product.name}
                                </h3>
                                <p className="mt-4 text-base sm:text-lg">
                                    {product.description || `Premium quality ${product.name.toLowerCase()} from ${category.name}. Sourced and processed to meet international export standards and buyer specifications.`}
                                </p>
                                <div className="mt-6 md:mt-8">
                                    <Link
                                        to="/contact"
                                        className="inline-block bg-primary text-white px-6 py-3 text-base font-medium rounded-[5px] hover:bg-opacity-90 duration-300"
                                    >
                                        Request Product Catalog
                                    </Link>
                                </div>

                                {/* Product Specifications */}
                                {product.specifications && (
                                    <div className="mt-8 md:mt-10">
                                        <h4 className="font-semibold text-xl md:text-2xl mb-4">
                                            Product Specifications
                                        </h4>
                                        <div className="bg-white dark:bg-dark-secondary rounded-[10px] overflow-hidden border border-title/10 dark:border-white/10">
                                            <div className="overflow-x-auto">
                                                <table className="w-full">
                                                    <tbody>
                                                        {product.specifications.origin && (
                                                            <tr className="border-b border-title/10 dark:border-white/10">
                                                                <td className="p-4 font-semibold text-base bg-[#F8F8F9] dark:bg-title w-1/3">
                                                                    Origin
                                                                </td>
                                                                <td className="p-4 text-base">
                                                                    {product.specifications.origin}
                                                                </td>
                                                            </tr>
                                                        )}
                                                        {product.specifications.size && (
                                                            <tr className="border-b border-title/10 dark:border-white/10">
                                                                <td className="p-4 font-semibold text-base bg-[#F8F8F9] dark:bg-title w-1/3">
                                                                    Size
                                                                </td>
                                                                <td className="p-4 text-base">
                                                                    {product.specifications.size}
                                                                </td>
                                                            </tr>
                                                        )}
                                                        {product.specifications.color && (
                                                            <tr className="border-b border-title/10 dark:border-white/10">
                                                                <td className="p-4 font-semibold text-base bg-[#F8F8F9] dark:bg-title w-1/3">
                                                                    Color
                                                                </td>
                                                                <td className="p-4 text-base">
                                                                    {product.specifications.color}
                                                                </td>
                                                            </tr>
                                                        )}
                                                        {product.specifications.aroma && (
                                                            <tr className="border-b border-title/10 dark:border-white/10">
                                                                <td className="p-4 font-semibold text-base bg-[#F8F8F9] dark:bg-title w-1/3">
                                                                    Aroma
                                                                </td>
                                                                <td className="p-4 text-base">
                                                                    {product.specifications.aroma}
                                                                </td>
                                                            </tr>
                                                        )}
                                                        {product.specifications.qualities && (
                                                            <tr className="border-b border-title/10 dark:border-white/10">
                                                                <td className="p-4 font-semibold text-base bg-[#F8F8F9] dark:bg-title w-1/3">
                                                                    Qualities
                                                                </td>
                                                                <td className="p-4 text-base">
                                                                    {product.specifications.qualities}
                                                                </td>
                                                            </tr>
                                                        )}
                                                        {product.specifications.packing && (
                                                            <tr className="border-b border-title/10 dark:border-white/10">
                                                                <td className="p-4 font-semibold text-base bg-[#F8F8F9] dark:bg-title w-1/3">
                                                                    Packing
                                                                </td>
                                                                <td className="p-4 text-base">
                                                                    {product.specifications.packing}
                                                                </td>
                                                            </tr>
                                                        )}
                                                        {product.specifications.standard && (
                                                            <tr className="border-b border-title/10 dark:border-white/10">
                                                                <td className="p-4 font-semibold text-base bg-[#F8F8F9] dark:bg-title w-1/3">
                                                                    Standard
                                                                </td>
                                                                <td className="p-4 text-base">
                                                                    {product.specifications.standard}
                                                                </td>
                                                            </tr>
                                                        )}
                                                        {product.specifications.moq && (
                                                            <tr className="border-b border-title/10 dark:border-white/10">
                                                                <td className="p-4 font-semibold text-base bg-[#F8F8F9] dark:bg-title w-1/3">
                                                                    MOQ
                                                                </td>
                                                                <td className="p-4 text-base">
                                                                    {product.specifications.moq}
                                                                </td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================ */}
            {/* RELATED PRODUCTS FROM SAME CATEGORY */}
            {/* ============================================ */}
            {category.products.length > 1 && (
                <div className="s-py-100 bg-[#F8F8F9] dark:bg-dark-secondary">
                    <div className="container-fluid">
                        <div
                            className="max-w-xl mx-auto mb-8 md:mb-12 text-center"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h3 className="font-medium leading-none text-2xl md:text-3xl">
                                Related Products
                            </h3>
                            <p className="mt-3">
                                Other products from {category.name}
                            </p>
                        </div>

                        <div
                            className="max-w-[1720px] mx-auto"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                                {category.products
                                    .filter((p) => p.slug !== productSlug)
                                    .map((relatedProduct) => (
                                        <div
                                            key={relatedProduct.id}
                                            className="bg-white dark:bg-title border border-title/10 dark:border-white/10 rounded-[10px] hover:shadow-lg hover:border-primary/30 duration-300 group overflow-hidden"
                                        >
                                            {/* Product Image */}
                                            {relatedProduct.image && (
                                                <div className="aspect-square overflow-hidden">
                                                    <img
                                                        src={relatedProduct.image}
                                                        alt={relatedProduct.name}
                                                        className="w-full h-full object-cover group-hover:scale-110 duration-500"
                                                    />
                                                </div>
                                            )}
                                            {/* Product Name */}
                                            <div className="p-4">
                                                <h5 className="font-semibold text-base md:text-lg group-hover:text-primary duration-300 text-center">
                                                    {relatedProduct.name}
                                                </h5>
                                                {/* View Product Button */}
                                                <Link
                                                    to={`/products/${categorySlug}/${relatedProduct.slug}`}
                                                    className="inline-block w-full mt-4 bg-primary text-white px-4 py-2 text-sm font-medium rounded-[5px] hover:bg-opacity-90 duration-300 text-center"
                                                >
                                                    View Product
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ============================================ */}
            {/* BUSINESS ENQUIRY CTA */}
            {/* ============================================ */}
            <div className="s-pb-100 pt-12">
                <div className="container-fluid">
                    <div
                        className="max-w-3xl mx-auto text-center p-8 md:p-12 bg-primary rounded-[10px]"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h3 className="text-white text-2xl md:text-3xl font-semibold">
                            Interested in {product.name}?
                        </h3>
                        <p className="text-white text-base md:text-lg mt-4">
                            Contact our export team to discuss specifications,
                            pricing, MOQ requirements, and delivery timelines for
                            international supply.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block mt-6 bg-white text-primary px-8 py-4 text-base md:text-lg font-semibold rounded-[5px] hover:bg-opacity-90 duration-300"
                        >
                            Request Business Enquiry
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <FooterPavanity />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    );
}
