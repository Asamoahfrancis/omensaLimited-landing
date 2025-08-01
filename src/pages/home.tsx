import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import CompanyStats from "../components/company-stats";
import ProductsCatalog from "../components/products-catalog";
import ServicesSection from "../components/services-section";
import IndustriesSection from "../components/industries-section";
// import TestimonialsSection from "../components/testimonials-section";
// import CertificationsSection from "../components/certifications-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";
import {useEffect} from "react";

export default function Home() {

    const scrollToSection = (hash:any) => {
        if (!hash) return;

        const sectionId = hash.replace('#', '');
        const element = document.getElementById(sectionId);

        if (element) {
            // Small delay to ensure element is rendered
            setTimeout(() => {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 100);
        }
    };

    useEffect(() => {
        // Handle initial hash on page load
        const initialHash = window.location.hash;
        if (initialHash) {
            scrollToSection(initialHash);
        }

        // Handle hash changes (when navigating with hash links)
        const handleHashChange = () => {
            scrollToSection(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);

        // Cleanup event listener
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CompanyStats />
      <ProductsCatalog />
      <ServicesSection />
      <IndustriesSection />
      {/* <TestimonialsSection /> */}
      {/* <CertificationsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
