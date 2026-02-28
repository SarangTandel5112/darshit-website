import { Link } from "react-router-dom";
import logoLight from "../../assets/img/svg/logo-light.png";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaChevronRight,
} from "react-icons/fa";

import {
    footerQuickLinks,
    footerProductCategories,
    footerLegalLinks,
    footerContent,
    socialMedia,
    contactInfo,
    officeLocations,
} from "../../data/pavanity-data";

interface LinkData {
    name: string;
    path: string;
}

interface SocialMediaData {
    name: string;
    url: string;
    icon: string;
}

export default function FooterPavanity() {
    const getSocialIcon = (iconName: string) => {
        switch (iconName) {
            case "facebook":
                return <FaFacebookF />;
            case "linkedin":
                return <FaLinkedinIn />;
            case "instagram":
                return <FaInstagram />;
            case "twitter":
                return <FaTwitter />;
            default:
                return null;
        }
    };

    return (
        <footer className="bg-title dark:bg-dark text-white pt-16 pb-6">
            <div className="container">
                <div className="max-w-[1720px] mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-white/10">
                        {/* Column 1: About Company */}
                        <div className="lg:col-span-1">
                            <Link to="/" className="inline-block mb-6">
                                <img
                                    src={logoLight}
                                    alt="Pavanity Global"
                                    className="w-[180px]"
                                />
                            </Link>
                            <p className="text-white/80 text-sm leading-relaxed mb-6">
                                {footerContent.description}
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex items-center gap-3">
                                {socialMedia.map(
                                    (
                                        social: SocialMediaData,
                                        index: number,
                                    ) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300"
                                            aria-label={social.name}
                                        >
                                            {getSocialIcon(social.icon)}
                                        </a>
                                    ),
                                )}
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-6">
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {footerQuickLinks.map(
                                    (link: LinkData, index: number) => (
                                        <li key={index}>
                                            <Link
                                                to={link.path}
                                                className="text-white/80 hover:text-primary text-sm flex items-center gap-2 group transition-all duration-300"
                                            >
                                                <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform" />
                                                {link.name}
                                            </Link>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>

                        {/* Column 3: Product Categories */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-6">
                                Our Products
                            </h4>
                            <ul className="space-y-3">
                                {footerProductCategories.map(
                                    (link: LinkData, index: number) => (
                                        <li key={index}>
                                            <Link
                                                to={link.path}
                                                className="text-white/80 hover:text-primary text-sm flex items-center gap-2 group transition-all duration-300"
                                            >
                                                <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform" />
                                                {link.name}
                                            </Link>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>

                        {/* Column 4: Contact Information */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-6">
                                Contact Us
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-white/80 text-sm leading-relaxed">
                                            {officeLocations[1].address}
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaEnvelope className="text-primary flex-shrink-0" />
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="text-white/80 hover:text-primary text-sm transition-colors"
                                    >
                                        {contactInfo.email}
                                    </a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaPhone className="text-primary flex-shrink-0" />
                                    <a
                                        href={`tel:${contactInfo.phone}`}
                                        className="text-white/80 hover:text-primary text-sm transition-colors"
                                    >
                                        {contactInfo.phone}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Office Locations Section */}
                    <div className="py-8 border-b border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-6 text-center">
                            Our Presence
                        </h4>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {officeLocations.map((location) => (
                                <div
                                    key={location.id}
                                    className="bg-white/5 hover:bg-white/10 p-5 rounded-lg transition-all duration-300 border border-white/10"
                                >
                                    <div className="flex items-start gap-3">
                                        <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h5 className="text-white font-semibold mb-2">
                                                {location.country}
                                            </h5>
                                            <p className="text-white/70 text-sm leading-relaxed">
                                                {location.address}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="pt-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            {/* Copyright */}
                            <p className="text-white/60 text-sm text-center md:text-left">
                                {footerContent.copyright}
                            </p>

                            {/* Legal Links */}
                            <div className="flex flex-wrap items-center justify-center gap-6">
                                {footerLegalLinks.map(
                                    (link: LinkData, index: number) => (
                                        <Link
                                            key={index}
                                            to={link.path}
                                            className="text-white/60 hover:text-primary text-sm transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>

                        {/* Motto */}
                        <div className="text-center mt-6 pt-6 border-t border-white/10">
                            <p className="text-white/80 text-lg font-semibold italic">
                                {footerContent.motto}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
