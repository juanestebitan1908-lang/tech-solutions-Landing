import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SocialRibbons from "@/components/SocialRibbons";
import SatisfactionSection from "@/components/SatisfactionSection";
import ReviewSection from "@/components/ReviewSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <ContactSection />
      <ReviewSection />
      <SatisfactionSection />
      <Footer />
      <WhatsAppFloat />
      <SocialRibbons />
    </div>
  );
};

export default Index;
