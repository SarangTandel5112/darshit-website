import { Link } from "react-router-dom";
import logo from "../../assets/img/svg/logo.png";
import logoLight from "../../assets/img/svg/logo-light.svg";
import {
    footerQuickLinks,
    footerLegalLinks,
    footerContent,
    officeLocations,
} from "../../data/pavanity-data";

interface LinkData {
    name: string;
    path: string;
}

export default function FooterPavanity() {
    return (
        <div className="s-py-100-50">
            <div className="container">
                <div className="max-w-1366 mx-auto">
                    {/* Brand Section - Top */}
                    <div className="text-center pb-10 md:pb-12 border-b border-bdr-clr dark:border-bdr-clr-drk">
                        <Link to="/" className="inline-block mb-4">
                            <img
                                src={logo}
                                alt="Pavanity Global"
                                className="dark:hidden w-[150px] sm:w-[200px] mx-auto"
                            />
                            <img
                                src={logoLight}
                                alt="Pavanity Global"
                                className="dark:block hidden w-[150px] sm:w-[200px] mx-auto"
                            />
                        </Link>
                        <h3 className="text-2xl md:text-3xl font-bold leading-none dark:text-white mt-4">
                            {footerContent.brandName}
                        </h3>
                        <p className="text-base md:text-lg text-title dark:text-white-light mt-2">
                            {footerContent.tagline}
                        </p>
                    </div>

                    {/* Quick Links Section - Middle */}
                    <div className="py-8 md:py-10">
                        <div className="flex flex-wrap items-center justify-center gap-x-6 lg:gap-x-8 gap-y-3">
                            {footerQuickLinks.map(
                                (link: LinkData, index: number) => (
                                    <Link
                                        key={index}
                                        to={link.path}
                                        className="text-title dark:text-white text-sm md:text-base hover:text-primary dark:hover:text-primary duration-100 inline-block group"
                                    >
                                        <span className="text-underline-primary">
                                            {link.name}
                                        </span>
                                    </Link>
                                ),
                            )}
                        </div>
                    </div>

                    {/* Motto Section */}
                    <div className="text-center py-6 md:py-8 border-y border-bdr-clr dark:border-bdr-clr-drk">
                        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-title dark:text-white italic">
                            {footerContent.motto}
                        </p>
                    </div>

                    {/* Our Presence Section */}
                    <div className="py-8 md:py-10 border-b border-bdr-clr dark:border-bdr-clr-drk">
                        <h4 className="text-center text-xl md:text-2xl font-semibold text-title dark:text-white mb-6">
                            Our Presence
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                            {officeLocations.map((location) => (
                                <div
                                    key={location.id}
                                    className="text-center p-4 rounded-lg bg-[#F8F8F9] dark:bg-dark-secondary"
                                >
                                    <h5 className="text-lg md:text-xl font-semibold text-primary mb-2">
                                        {location.country}
                                    </h5>
                                    <p className="text-sm md:text-base text-title dark:text-white-light">
                                        {location.address}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Section - Copyright & Legal Links */}
                    <div className="pt-8 md:pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-title dark:text-white-light text-sm md:text-base text-center md:text-left">
                            {footerContent.copyright}
                        </p>

                        {/* Legal Links */}
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                            {footerLegalLinks.map(
                                (link: LinkData, index: number) => (
                                    <Link
                                        key={index}
                                        to={link.path}
                                        className="text-title dark:text-white-light text-sm hover:text-primary dark:hover:text-primary duration-100 inline-block group"
                                    >
                                        <span className="text-underline-primary">
                                            {link.name}
                                        </span>
                                    </Link>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
