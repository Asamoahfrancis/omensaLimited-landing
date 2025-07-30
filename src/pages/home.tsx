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

export default function Home() {
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
