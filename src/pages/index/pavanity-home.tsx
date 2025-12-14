import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Pavanity Components
import PavanityNavbar from '../../components/navbar/pavanity-navbar';
import PavanityFooter from '../../components/footer/pavanity-footer';
import ScrollToTop from '../../components/scroll-to-top';

// Section Components
import HeroSection from '../../components/sections/HeroSection';
import BusinessContinuitySection from '../../components/sections/BusinessContinuitySection';
import ProductDivisionsSection from '../../components/sections/ProductDivisionsSection';
import CommercialScopeSection from '../../components/sections/CommercialScopeSection';
import GlobalMarketsSection from '../../components/sections/GlobalMarketsSection';
import BusinessEnquiriesSection from '../../components/sections/BusinessEnquiriesSection';

function PavanityHome() {
    useEffect(() => {
        // Initialize AOS (Animate On Scroll)
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out'
        });

        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* Navigation */}
            <PavanityNavbar />

            {/* SECTION 1 - HERO */}
            <HeroSection />

            {/* SECTION 2 - BUSINESS CONTINUITY */}
            <BusinessContinuitySection />

            {/* SECTION 3 - PRODUCT DIVISIONS */}
            <ProductDivisionsSection />

            {/* SECTION 4 - COMMERCIAL SCOPE */}
            <CommercialScopeSection />

            {/* SECTION 5 - GLOBAL MARKETS */}
            <GlobalMarketsSection />

            {/* SECTION 6 - BUSINESS ENQUIRIES */}
            <BusinessEnquiriesSection />

            {/* SECTION 7 - FOOTER */}
            <PavanityFooter />

            {/* Scroll to Top Button */}
            <ScrollToTop />
        </>
    );
}

export default PavanityHome;
