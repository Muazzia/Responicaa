import { useRef } from "react";
import ContactUs from "../../../components/ContactUs";
import HeroSectionWithCTA from "../../../components/HeroSectionWithCTA";
import ImageWithServiceDetails from "../../../components/ImageWithServiceDetails";
import TestimonialsSection from "../../../components/TestimonialsSection";
import { RecognizedByBest } from "../../landingPage/components/RecognizedByBest";

const EnergySupplies = () => {
  const whyChooseOurServiceData = [
    {
      id: 1,
      title: "Specialized in U.S. Energy Deregulation Market",
      description:
        "We have extensive expertise in navigating the U.S. energy deregulation market, ensuring businesses benefit from competitive energy solutions tailored to their needs.",
    },
    {
      id: 2,
      title: "Expert Call Handling (Outbound + Inbound)",
      description:
        "Our team excels in managing both outbound and inbound calls, providing professional and efficient communication to support your energy service requirements.",
    },
    {
      id: 3,
      title: "Sales-Driven, Customer-Focused",
      description:
        "We prioritize customer satisfaction while driving sales, ensuring a seamless experience that aligns with your business objectives.",
    },
    {
      id: 4,
      title: "Full Legal Compliance",
      description:
        "Our operations strictly adhere to all legal and regulatory requirements, giving you peace of mind and ensuring compliance at every step.",
    },
    {
      id: 5,
      title: "Scalable Solutions for Energy Providers",
      description:
        "We offer scalable energy solutions designed to grow with your business, providing flexibility and adaptability to meet evolving demands.",
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
        primaryButtonLabel="Solutions"
        heading="Energy Supply Services"
        description="At Responica, we specialize in sales and customer support services for energy suppliers operating in deregulated U.S. markets. With a team trained in industry-specific regulations, we ensure seamless, compliant, and results-driven inbound and outbound telecommunications solutions that help energy suppliers connect with more customers."
        secondaryButtonLabel="Request Energy Consultation"
        onSecondaryButtonClick={scrollToContact}
      />

      <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto mt-8 md:mt-12">
        <div className="flex items-center justify-center">
          <p className="text-primary-red font-semibold text-3xl sm:text-4xl lg:text-[48px] text-center">
            Understanding Energy Deregulation
          </p>
        </div>
        <div className="space-y-4 mt-4 text-sm sm:text-base">
          <p>
            Since the passage of energy deregulation laws in many U.S. states,
            consumers no longer have to rely solely on their local utility for
            electricity or natural gas supply. While utilities still deliver
            energy and maintain infrastructure, customers now have the freedom
            to choose their energy supplier based on price, contract terms,
            green energy options, and more.
          </p>
          <p>
            This competitive landscape creates new opportunities for energy
            suppliers—and that’s where we come in.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto mt-8 md:mt-12">
        <div className="flex items-center justify-center">
          <p className="text-primary-redy font-semibold text-3xl sm:text-4xl lg:text-[48px] text-center">
            Key Features of Our Energy Supply
          </p>
        </div>
        <div className="mt-4 text-sm sm:text-base">
          <p>
            Superior energy supply services are essential for maintaining
            operational efficiency and cost control in today's dynamic business
            environment. Responica understands that energy is not just a utility
            cost - it's a strategic resource that impacts your bottom line and
            sustainability profile. Our comprehensive energy services help
            businesses secure reliable power while optimizing energy
            expenditures.
          </p>
        </div>

        <div className="mt-8 md:mt-12">
          <RenderDescriptionTextWithLabels />
        </div>

        <div className="mt-8 md:mt-12">
          <p className="text-center text-primary-red font-semibold text-3xl sm:text-4xl lg:text-[48px] px-4 md:px-10">
            How Does Professional Energy Supply Benefit Businesses
          </p>
          <div className="space-y-4 mt-4 text-sm sm:text-base">
            <p>
              In an era of energy transition and price volatility, professional
              energy supply services provide numerous strategic benefits that
              extend far beyond simple power delivery.
            </p>

            <div className="mt-4">
              <p className="font-bold text-base sm:text-[17px]">
                Cost Savings and Budget Certainty
              </p>
              <p className="mt-2">
                Our energy procurement expertise helps secure favorable pricing
                and contract terms, often achieving significant cost reductions
                compared to standard market rates. We implement flexible
                purchasing strategies that protect against price volatility
                while taking advantage of favorable market conditions.
              </p>
              <p className="mt-2">
                Through detailed consumption analysis and demand management, we
                identify opportunities to reduce energy waste and optimize your
                usage patterns. These efficiency gains translate directly to
                lower energy bills and improved operational margins.
              </p>
            </div>

            <div className="mt-4">
              <p className="font-bold text-base sm:text-[17px]">
                Operational Reliability
              </p>
              <p className="mt-2">
                Power interruptions can be costly. Our energy supply solutions
                prioritize reliability with backup options and contingency
                planning. We monitor your energy infrastructure to prevent
                disruptions and ensure continuous operations.
              </p>
              <p className="mt-2">
                For critical facilities, we design redundant systems and
                emergency power solutions. Our reliability services give you
                peace of mind knowing your operations won't suffer from
                preventable energy disruptions.
              </p>
            </div>

            <div className="mt-4">
              <p className="font-bold text-base sm:text-[17px]">
                Sustainability Advancement
              </p>
              <p className="mt-2">
                Our energy services help you reduce carbon footprint and meet
                environmental commitments. We facilitate the transition to
                renewable energy sources through power purchase agreements,
                on-site generation solutions, and carbon offset programs.
              </p>
              <p className="mt-2">
                Sustainable energy solutions not only benefit the environment
                but also enhance your brand reputation and prepare your business
                for evolving regulatory requirements. We help you communicate
                your energy achievements to stakeholders and customers.
              </p>
            </div>
          </div>
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
                <li>Educate customers on their rights under deregulation laws</li>
                <li>Present your supplier offers clearly and professionally</li>
                <li>Handle objections and close deals compliantly</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-xl font-bold text-primary-red mb-4">Inbound Customer Support & Sales</p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                <li>Plan comparison and enrollment</li>
                <li>Contract renewals and questions</li>
                <li>Billing inquiries and issue resolution</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-xl font-bold text-primary-red mb-4">Compliance-First Approach</p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                <li>Operate strictly in line with state and federal regulations</li>
                <li>Adhere to TCPA, FERC, and PUC rules</li>
                <li>QA team monitors calls for transparency and compliance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12">
          <p className="text-center text-3xl sm:text-4xl lg:text-[48px] text-black px-4 md:px-10">
            Why Partner With Us?
          </p>

          <div className="mt-4 text-sm sm:text-base">
            <p>
              Responica approaches energy supply as a strategic partnership
              rather than just a commodity service. We combine market expertise
              with technical knowledge to deliver energy solutions that align
              with your organizational goals. Our team becomes an extension of
              your operations, providing insights that enhance both your energy
              efficiency and sustainability profile.
            </p>
          </div>

          <div className="mt-8 md:mt-12">
            <ImageWithServiceDetails
              imageUrl="/images/bpo/energySupplies.jpg"
              label="Why Choose Our Energy Supply Services?"
              description="Our comprehensive energy solutions help you secure reliable, cost-effective power while advancing your sustainability goals. Whether you need traditional energy supply, renewable power solutions, energy efficiency consulting, or complete energy management, our specialists have the expertise to power your business forward."
              data={whyChooseOurServiceData}
              imageClass="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[680px]"
            />
          </div>
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

const RenderDescriptionTextWithLabels = () => {
  const data = [
    {
      id: 1,
      label: "Energy Procurement",
      description:
        "We leverage our extensive market knowledge and buying power to secure the most favorable energy contracts for your business. Our procurement strategies consider price trends, regulatory changes, and your specific consumption patterns to optimize both cost and supply security.",
    },
    {
      id: 2,
      label: "Supply Reliability",
      description:
        "Our energy supply solutions prioritize uninterrupted service with robust infrastructure and contingency planning. We monitor grid stability, weather patterns, and demand fluctuations to anticipate and prevent potential supply issues before they impact your operations.",
    },
    {
      id: 3,
      label: "Sustainability Focus",
      description:
        "We help you navigate the transition to cleaner energy with renewable power options, carbon reduction strategies, and efficiency improvements. Our sustainability services align with global standards and reporting frameworks to support your environmental commitments.",
    },
    {
      id: 4,
      label: "Cost Efficiency",
      description:
        "Through detailed energy analysis and smart purchasing strategies, we identify significant cost-saving opportunities. Our efficiency programs target both supply costs and consumption patterns to maximize your energy budget.",
    },
    {
      id: 5,
      label: "Global Energy Expertise",
      description:
        "With experience across diverse energy markets and regulatory environments, we understand regional energy challenges and opportunities. Our international perspective helps businesses navigate complex energy landscapes wherever they operate.",
    },
    {
      id: 6,
      label: "Integrated Energy Management",
      description:
        "We provide complete energy solutions that integrate supply, efficiency, and sustainability. From initial energy audits to ongoing optimization, our services cover the entire energy lifecycle to deliver comprehensive value.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[25px]">
      {data.map((item) => (
        <div key={item.id} className="flex flex-col items-center p-4 md:p-0">
          <p className="text-black font-semibold text-xl sm:text-2xl lg:text-[30px] text-center">
            {item.label}
          </p>
          <p className="text-black mt-2 sm:mt-4 text-sm sm:text-base text-center">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EnergySupplies;
