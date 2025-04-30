import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import DigitalSolutionSection from "./components/DigitalSolutionSection";
import DigitalMarketingSection from "./components/DigitalMarketingSection";
import BPOServicesSection from "./components/BPOServicesSection";
import IndustriesSection from "./components/IndustriesSection";
import WhyResponicaSection from "./components/WhyResponicaSection";
import CEOSection from "./components/CEOSection";
import FAQSection from "./components/FAQSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import { RecognizedByBest } from "./components/RecognizedByBest";
import ContactUs from "../../components/ContactUs";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <div className="bg-gradient-to-b from-[#FFDBDB8F] to-[#E9E6EF] text-center py-14">
        <h1 className="text-5xl font-semibold">Our Services</h1>
      </div>
      <DigitalSolutionSection />
      <DigitalMarketingSection />
      <BPOServicesSection />
      <IndustriesSection />
      <WhyResponicaSection />
      <CEOSection />
      <FAQSection />
      <TestimonialsSection />
      <RecognizedByBest />
      <ContactUs />
    </>
  );
};

export default LandingPage;
