import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturedListingsSection from "@/components/landing/FeaturedListingsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import LeadCaptureSection from "@/components/landing/LeadCaptureSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturedListingsSection />
        <TestimonialsSection />
        <LeadCaptureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
