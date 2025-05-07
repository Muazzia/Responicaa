import HeroSectionWithCTA from "../../../components/HeroSectionWithCTA";
import ImageWithServiceDetails from "../../../components/ImageWithServiceDetails";
import { IoShieldCheckmark } from "react-icons/io5";
import TestimonialsSection from "../../../components/TestimonialsSection";
import { RecognizedByBest } from "../../landingPage/components/RecognizedByBest";
import ContactUs from "../../../components/ContactUs";
import { useRef } from "react";

const HomeWarranty = () => {
  const warrantyCoverageData = [
    {
      id: 1,
      heading: "Appliance Protection",
      description:
        "Our comprehensive appliance coverage protects your major home systems from unexpected breakdowns. We cover repairs or replacements for refrigerators, ovens, dishwashers, washers, dryers, and more. With our service, you'll have peace of mind knowing your essential appliances are protected against normal wear and tear, mechanical failures, and electrical issues.",
    },
    {
      id: 2,
      heading: "HVAC System Coverage",
      description:
        "Keep your home comfortable year-round with our HVAC protection plan. We cover heating, ventilation, and air conditioning systems including furnaces, air conditioners, ductwork, and thermostats. Our technicians are certified to work on all major brands, ensuring your system receives professional care when you need it most.",
    },
    {
      id: 3,
      heading: "Plumbing Protection",
      description:
        "Our plumbing coverage safeguards your home against costly water damage and plumbing emergencies. We cover leaks, clogs, pipe repairs, water heaters, and other essential plumbing components. With 24/7 emergency service, you'll never have to worry about being without water or dealing with plumbing disasters alone.",
    },
    {
      id: 4,
      heading: "Electrical System Warranty",
      description:
        "Protect your home's electrical systems with our comprehensive coverage. We include wiring, circuit breakers, outlets, switches, and other essential components. Our licensed electricians ensure all repairs meet local building codes and safety standards, giving you confidence in your home's electrical safety.",
    },
    {
      id: 5,
      heading: "Roof Leak Repair",
      description:
        "Our roof leak protection helps maintain your home's structural integrity. We cover repairs for leaks in your primary roof structure, helping prevent water damage and mold growth. While we don't cover full roof replacements, our service provides crucial protection against unexpected leaks and related damages.",
    },
    {
      id: 6,
      heading: "Home Systems Bundle",
      description:
        "Our complete home systems bundle offers the most comprehensive protection for your property. This all-inclusive plan combines appliance coverage with protection for your HVAC, plumbing, electrical, and other essential home systems. Enjoy simplified billing and one-stop service for all your home warranty needs.",
    },
    {
      id: 7,
      heading: "Optional Add-Ons",
      description:
        "Customize your coverage with our optional add-ons including pool/spa equipment, well pumps, septic systems, and guest unit coverage. These specialized protections allow you to tailor your home warranty to match your specific property needs and lifestyle requirements.",
    },
    {
      id: 8,
      heading: "24/7 Emergency Service",
      description:
        "Our around-the-clock emergency service ensures help is always available when you need it most. Whether it's a midnight plumbing disaster or a weekend AC failure during a heatwave, our network of qualified technicians is ready to respond quickly to restore comfort and safety to your home.",
    },
  ];

  const serviceBenefitsData = [
    {
      id: 1,
      heading: "Claims Process",
      description:
        "Our streamlined claims process makes getting repairs simple and stress-free. Just contact our claims center, and we'll dispatch a qualified technician to diagnose and repair your covered item. There's no complicated paperwork - we handle all the coordination and approvals so you can focus on what matters most.",
    },
    {
      id: 2,
      heading: "Service Guarantee",
      description:
        "We stand behind our work with a comprehensive service guarantee. All repairs are covered by a 90-day workmanship warranty, and if we can't fix your covered item, we'll replace it with a comparable model. Our commitment to quality ensures you receive lasting solutions for your home systems.",
    },
    {
      id: 3,
      heading: "Pre-Existing Conditions",
      description:
        "Unlike many warranty providers, we offer coverage options for homes with pre-existing conditions. Our specialized inspection process helps identify potential issues upfront, allowing us to create customized coverage solutions that meet your home's unique needs and history.",
    },
    {
      id: 4,
      heading: "Renewal Discounts",
      description:
        "We reward loyal customers with attractive renewal discounts and benefits. Long-term members enjoy priority service, lower service fees, and additional coverage options. Our renewal program is designed to provide increasing value the longer you stay with us.",
    },
    {
      id: 5,
      heading: "Online Account Management",
      description:
        "Manage your policy effortlessly through our online portal or mobile app. View your coverage details, submit claims, track service requests, and access your contract documents anytime, anywhere. Our digital tools put complete control of your home warranty at your fingertips.",
    },
    {
      id: 6,
      heading: "Transferable Coverage",
      description:
        "Increase your home's marketability with our transferable warranty coverage. When you sell your property, you can transfer the remaining term of your warranty to the new owners, providing them with immediate protection and giving you a valuable selling point.",
    },
  ];

  const whyChooseOurServiceData = [
    {
      id: 1,
      title: "Experience with Home Warranty & Appliance Coverage",
      description:
        "We bring years of expertise in handling home warranty and appliance coverage, ensuring reliable and professional service for our clients.",
    },
    {
      id: 2,
      title: "Conversion-Focused Sales Approach",
      description:
        "Our sales strategies are designed to maximize conversions, helping you grow your customer base effectively.",
    },
    {
      id: 3,
      title: "Inbound & Outbound Call Handling",
      description:
        "We specialize in managing both inbound and outbound calls, providing seamless communication and support for your customers.",
    },
    {
      id: 4,
      title: "Real-Time Reporting & CRM Integration",
      description:
        "Our solutions include real-time reporting and CRM integration, giving you actionable insights and streamlined operations.",
    },
    {
      id: 5,
      title: "Fully Compliant Operations",
      description:
        "We ensure full compliance with industry standards and regulations, giving you peace of mind and reliable service.",
    },
  ];

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
    <div className="">
      <HeroSectionWithCTA
        primaryButtonLabel="Plans"
        heading="Home Warranty Protection"
        description="At Responica, we offer professional telecommunications solutions for home warranty providers, specializing in both inbound and outbound sales for warranties that cover electronic appliances, home systems, and more. Our goal is to help you grow your customer base while maintaining top-tier service and compliance."
        secondaryButtonLabel="Get a Free Quote"
        onSecondaryButtonClick={scrollToContact}
      />

      <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto py-10 md:py-20">
        <div className="w-full text-center">
          <p className="text-3xl sm:text-4xl lg:text-[48px] font-semibold">
        What is a Home Warranty?
          </p>
        </div>
        <div className="mt-5 md:mt-10">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/60 text-center">
        A home warranty is a service contract that covers the repair or
        replacement of major home systems and appliances due to normal wear
        and tear. This includes HVAC systems, kitchen appliances,
        electrical systems, plumbing, and more. Unlike homeowners insurance,
        which covers damage from external events, home warranties provide
        peace of mind by protecting against unexpected appliance breakdowns.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto py-5 md:py-10 space-y-5 md:space-y-0 md:flex md:gap-5 lg:gap-10">
        <RotatingCard
          label="Comprehensive Protection"
          description="Our home warranty plans offer the most complete coverage in the industry, protecting all your major home systems and appliances under one affordable plan."
          invertedCardLabel="Why Choose Us"
          invertedCardDescription="We provide unmatched protection for your home systems and appliances, ensuring peace of mind and reliable service when you need it most."
          invertedCardButtonLabel="Learn More"
          invertedCardButtonUrl="/comprehensive-protection"
        />
        <RotatingCard
          label="Nationwide Network"
          description="We maintain a network of over 50,000 licensed and certified technicians across the country, ensuring fast and reliable service wherever you live."
          invertedCardLabel="Our Technicians"
          invertedCardDescription="Our certified technicians are available nationwide to provide prompt and professional service for all your home warranty needs."
          invertedCardButtonLabel="Find Out More"
          invertedCardButtonUrl="/nationwide-network"
        />
      </div>

      <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto mt-8 md:mt-12">
        <div className="flex items-center justify-center">
          <p className="text-primary-red font-semibold text-3xl sm:text-4xl lg:text-[48px] text-center">
        Our Services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <p className="text-xl font-bold text-primary-red mb-4">Outbound Sales Campaigns</p>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
          <li>Explaining coverage clearly and effectively</li>
          <li>Highlighting the benefits of protection</li>
          <li>Closing deals while following all compliance standards</li>
        </ul>
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <p className="text-xl font-bold text-primary-red mb-4">Inbound Customer Support & Sales</p>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
          <li>Assisting with plan selection</li>
          <li>Processing warranty claims</li>
          <li>Managing billing and renewals</li>
          <li>Providing quick, courteous service</li>
        </ul>
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <p className="text-xl font-bold text-primary-red mb-4">Claims Assistance & Renewals</p>
        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
          <li>Handling service requests</li>
          <li>Processing warranty renewals</li>
          <li>Ensuring a seamless experience for both the customer and the provider</li>
        </ul>
          </div>
        </div>
      </div>
      <ImageWithServiceDetails
        imageUrl="/images/bpo/homeWarranty.jpg"
        label="Why Choose Our Home Warranty"
        description="With over 20 years in the home protection industry, we've perfected our service to deliver unmatched value and peace of mind. Our plans are designed to fit any budget while providing comprehensive coverage for your most important home investments."
        data={whyChooseOurServiceData}
        imageClass="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[680px]"
      />

      <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto mt-10 md:mt-20">
        <div className="w-full text-center">
          <p className="text-3xl sm:text-4xl lg:text-[48px] font-semibold">
            Comprehensive Warranty Coverage
          </p>
        </div>
        <div className="space-y-5 md:space-y-8 mt-5 md:mt-10">
          {warrantyCoverageData.map((item) => (
            <RenderParaWithHeading
              key={item.id}
              description={item.description}
              heading={item.heading}
            />
          ))}
        </div>
      </div>

      <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto my-10 md:my-20">
        <div className="w-full text-center">
          <p className="text-3xl sm:text-4xl lg:text-[48px] font-semibold">
            Service Benefits
          </p>
        </div>
        <div className="space-y-5 md:space-y-8 mt-5 md:mt-10">
          {serviceBenefitsData.map((item) => (
            <RenderParaWithHeading
              key={item.id}
              description={item.description}
              heading={item.heading}
            />
          ))}
        </div>
      </div>

      <div className="px-4 md:px-10  xl:px-0 max-w-7xl mx-auto">
        <TestimonialsSection />
      </div>

      <div className="px-4 md:px-10  xl:px-0  max-w-7xl mx-auto mb-10">
        <RecognizedByBest />
      </div>

      <div>
        <ContactUs ref={contactRef} />
      </div>
    </div>
  );
};

const RenderParaWithHeading = ({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) => {
  return (
    <div className="px-2 sm:px-0">
      <p className="font-semibold text-xl sm:text-2xl lg:text-[30px]">
        {heading}
      </p>
      <p className="text-sm sm:text-base text-black/60 mt-2">{description}</p>
    </div>
  );
};

interface RotatingCardProps {
  label: string;
  description: string;
  logoInverted?: boolean;
  invertedCardLabel: string;
  invertedCardDescription: string;
  invertedCardButtonLabel: string;
  invertedCardButtonUrl: string;
}

const RotatingCard = ({
  description,
  label,
  logoInverted = false,
  invertedCardButtonLabel,
  invertedCardButtonUrl,
  invertedCardDescription,
  invertedCardLabel,
}: RotatingCardProps) => {
  return (
    <div className="w-full h-[300px] md:h-[350px] perspective group">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-x-180">
        {/* Front Side */}
        <div className="absolute w-full h-full bg-gradient-to-b from-[#004aad] to-[#3B82F6]  text-white flex flex-col items-center justify-center px-5 text-center gap-3 sm:gap-5 backface-hidden">
          <span
            className={`transform transition-transform duration-700 ${
              logoInverted ? "rotate-260" : ""
            }`}
          >
            <IoShieldCheckmark
              color={"white"}
              size={40}
              className="sm:w-[50px] sm:h-[50px]"
            />
          </span>
          <p className="text-xl sm:text-2xl lg:text-[26px] font-semibold">
            {label}
          </p>
          <span className="text-xs sm:text-sm md:text-[14px]">
            {description}
          </span>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gradient-to-b from-[#004aad] to-[#3B82F6]  text-white flex flex-col items-center justify-center px-5 text-center gap-3 sm:gap-5 backface-hidden transform rotate-x-180">
          <p className="text-lg sm:text-xl font-semibold">
            {invertedCardLabel}
          </p>
          <span className="text-xs sm:text-sm md:text-[14px]">
            {invertedCardDescription}
          </span>
          <button
            onClick={() => {
              console.log(invertedCardButtonUrl);
            }}
            className="mt-2 px-3 py-1 sm:px-4 sm:py-2 bg-[#0066cc] text-white rounded text-sm sm:text-base"
          >
            {invertedCardButtonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomeWarranty;
