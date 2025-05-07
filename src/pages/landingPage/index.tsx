import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import DigitalSolutionSection from "./components/DigitalSolutionSection";
import BPOServicesSection from "./components/BPOServicesSection";
import IndustriesSection from "./components/IndustriesSection";
import WhyResponicaSection from "./components/WhyResponicaSection";
import FAQSection from "./components/FAQSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import { RecognizedByBest } from "./components/RecognizedByBest";
import ContactUs from "../../components/ContactUs";
import { useRef } from "react";

const LandingPage = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const offset = 100; // adjust for navbar
    const top =
      contactRef.current!.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <HeroSection handleScrollButtonClick={scrollToContact} />
      <AboutSection />
      <div className="bg-gradient-to-b from-[#FFDBDB8F] to-[#E9E6EF] text-center py-14">
        <h1 className="text-5xl font-semibold">Our Services</h1>
      </div>
      <DigitalSolutionSection />
      {/* <DigitalMarketingSection /> */}
      <BPOServicesSection />
      <IndustriesSection />
      <WhyResponicaSection />
      {/* <CEOSection /> */}
      <FAQSection />
      <div className="mt-10 flex flex-col gap-10">
        <TestimonialsSection />
        <RecognizedByBest />
        <ContactUs ref={contactRef} />
      </div>{" "}
    </>
  );
};

export default LandingPage;
