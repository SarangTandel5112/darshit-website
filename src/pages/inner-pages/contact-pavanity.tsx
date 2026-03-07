import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Components
import NavbarPavanity from "../../components/navbar/navbar-pavanity";
import FooterPavanity from "../../components/footer/footer-pavanity";
import ScrollToTop from "../../components/scroll-to-top";

// Images 
import bg from '../../assets/img/contact-us-header.jpg' // Placeholder
import contactImg from '../../assets/img/contact-us.jpg'

// Icons
import { FaEnvelope } from 'react-icons/fa'

import Aos from "aos";

const HUBSPOT_PORTAL_ID = '245281281';
const HUBSPOT_FORM_ID = '38ae65c9-9cf2-4a7a-b63b-f5cd65ffd5de';
const HUBSPOT_SCRIPT_ID = 'hs-forms-v2';
const HUBSPOT_SCRIPT_URL = 'https://js-na2.hsforms.net/forms/v2.js';

export default function ContactPavanity() {
    const formContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        Aos.init();
        window.scrollTo(0, 0);
    }, []);

    // Remove HubSpot virality container/iframe (free account shows "Create your own free forms")
    useEffect(() => {
        const removeVirality = () => {
            const container = document.getElementById('hs-form-virality-container');
            const iframe = document.getElementById('hs-form-virality-iframe')
                ?? document.querySelector('iframe[src*="embedded-viral-link"], iframe[title="HubSpot Virality"]');
            if (container) container.remove();
            if (iframe) {
                const p = iframe.parentElement;
                iframe.remove();
                if (p?.childElementCount === 0) p.remove();
            }
        };
        removeVirality();
        const t1 = setTimeout(removeVirality, 1000);
        const t2 = setTimeout(removeVirality, 2000);
        const t3 = setTimeout(removeVirality, 3000);
        const obs = new MutationObserver(removeVirality);
        obs.observe(document.body, { childList: true, subtree: true });
        const poll = setInterval(removeVirality, 500);
        const stop = setTimeout(() => clearInterval(poll), 10000);
        return () => {
            obs.disconnect();
            clearInterval(poll);
            clearTimeout(stop);
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, []);

    // Load HubSpot forms script and render form via legacy API
    useEffect(() => {
        const container = formContainerRef.current;
        if (!container) return;

        const removeVirality = () => {
            const container = document.getElementById('hs-form-virality-container');
            if (container) container.remove();
            let el = document.getElementById('hs-form-virality-iframe');
            if (!el) el = document.querySelector('iframe[src*="embedded-viral-link"], iframe[title="HubSpot Virality"]');
            if (el) {
                const p = el.parentElement;
                el.remove();
                if (p?.childElementCount === 0) p.remove();
            }
        };

        const renderForm = () => {
            if (typeof (window as unknown as { hbspt?: { forms: { create: (opts: object) => void } } }).hbspt?.forms?.create !== 'function') return;
            container.innerHTML = '';
            (window as unknown as { hbspt: { forms: { create: (opts: object) => void } } }).hbspt.forms.create({
                region: 'na1',
                portalId: HUBSPOT_PORTAL_ID,
                formId: HUBSPOT_FORM_ID,
                target: '#hubspot-form-container',
                onFormReady: () => {
                    removeVirality();
                    setTimeout(removeVirality, 100);
                    setTimeout(removeVirality, 500);
                },
            });
        };

        if (document.getElementById(HUBSPOT_SCRIPT_ID)) {
            renderForm();
            return;
        }

        const script = document.createElement('script');
        script.id = HUBSPOT_SCRIPT_ID;
        script.src = HUBSPOT_SCRIPT_URL;
        script.async = true;
        script.onload = renderForm;
        document.body.appendChild(script);
    }, []);

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
                            <div className="w-20 h-20 bg-primary rounded-[10px] flex items-center justify-center">
                                <FaEnvelope className="size-16 text-white" />
                            </div>
                            <h2 className="leading-none font-medium mt-3 md:mt-6 text-2xl md:text-3xl">Business Enquiries</h2>
                            <p className="max-w-[474px] mt-3 md:mt-4 font-medium">
                                For export supply discussions, commercial enquiries, and bulk order requirements—submit your details and our team will respond within 24-48 working hours.
                            </p>
                        </div>
                        <div className="mt-8" data-aos="fade-up" data-aos-delay="100">
                            <p className="text-sm text-title/70 dark:text-white/70 mb-4">
                                * Response within 24-48 working hours
                            </p>
                            <div ref={formContainerRef} id="hubspot-form-container" className="hubspot-form-wrapper min-h-[400px]" />
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
                            <div className="w-16 h-16 bg-primary rounded-[10px] flex items-center justify-center mx-auto mb-4">
                                <FaEnvelope className="size-10 text-white" />
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Email</h4>
                            <p className="text-base">info@pavanityglobal.com</p>
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
