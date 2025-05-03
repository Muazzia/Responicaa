import { useRef } from "react";
import ContactUs from "../../../components/ContactUs";
import HeroSectionWithCTA from "../../../components/HeroSectionWithCTA";
import ImageWithServiceDetails from "../../../components/ImageWithServiceDetails";
import TestimonialsSection from "../../../components/TestimonialsSection";
import { RecognizedByBest } from "../../landingPage/components/RecognizedByBest";

const QualityAssurance = () => {
  const whyChooseOurServiceData = [
    {
      id: 1,
      title: "Comprehensive Testing",
      description:
        "Our QA team employs rigorous testing methodologies to ensure your products meet the highest standards. We identify and resolve issues before they reach your customers, saving you time and resources.",
    },
    {
      id: 2,
      title: "Tailored QA Solutions",
      description:
        "We understand that each product has unique requirements. Our quality assurance specialists develop customized testing strategies that align with your specific business needs and objectives.",
    },
    {
      id: 3,
      title: "Expert QA Team",
      description:
        "Our certified quality assurance professionals stay current with the latest testing technologies and methodologies. They bring deep expertise to ensure your products perform flawlessly in real-world scenarios.",
    },
    {
      id: 4,
      title: "Multi-Platform Testing",
      description:
        "We provide comprehensive testing across all platforms and devices, ensuring consistent performance whether your customers access your product on web, mobile, or desktop environments.",
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
        heading="Quality Assurance Services"
        description="Welcome to our dedicated Quality Assurance department, where excellence is our standard. We are committed to delivering meticulous testing services that ensure your products meet the highest quality benchmarks. Our comprehensive QA processes help prevent defects, enhance user experience, and protect your brand reputation."
        secondaryButtonLabel="Schedule A Free Consultation"
        onSecondaryButtonClick={scrollToContact}
      />

      <div className="px-4 md:px-8 xl:px-0 max-w-7xl mx-auto mt-8 md:mt-12">
        <div className="flex items-center justify-center">
          <p className="text-primary font-semibold text-3xl sm:text-4xl lg:text-[48px] text-center">
            How Does Quality Assurance Service Work?
          </p>
        </div>
        <div className="space-y-4 mt-4 text-sm sm:text-base">
          <p>
            Quality Assurance is the foundation of product excellence in today's
            competitive digital landscape. Our systematic approach ensures that
            every aspect of your product meets defined quality criteria before
            reaching your customers.
          </p>
          <p>
            QA begins with understanding your product requirements and business
            objectives. Our specialists develop detailed test plans covering all
            functional and non-functional aspects. This includes functionality
            testing, performance evaluation, security audits, and user
            experience assessment.
          </p>
          <p>
            We employ both manual and automated testing methodologies to
            maximize coverage and efficiency. Our testers meticulously document
            all findings, providing clear reports with prioritized issues and
            actionable recommendations.
          </p>
          <p>
            The true value of our QA services lies in our attention to detail.
            Our experienced testers approach each product with fresh eyes,
            simulating real user behavior to uncover issues that might otherwise
            go unnoticed. We don't just identify problems - we help you
            understand their impact and work with your team to implement
            effective solutions.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-8 xl:px-0 max-w-7xl mx-auto mt-8 md:mt-12">
        <div className="flex items-center justify-center">
          <p className="text-primary font-semibold text-3xl sm:text-4xl lg:text-[48px] text-center">
            Key Features of Our Quality Assurance
          </p>
        </div>
        <div className="mt-4 text-sm sm:text-base">
          <p>
            Superior Quality Assurance is essential for maintaining competitive
            advantage in today's technology-driven marketplace. Nexcel Solutions
            understands that QA is not just about finding bugs - it's about
            ensuring product excellence at every level. Our comprehensive QA
            services help businesses deliver flawless products that exceed
            customer expectations.
          </p>
        </div>

        <div className="mt-8 md:mt-12">
          <RenderDescriptionTextWithLabels />
        </div>

        <div className="mt-8 md:mt-12">
          <p className="text-center text-primary font-semibold text-3xl sm:text-4xl lg:text-[48px] px-4 md:px-10">
            How Does Quality Assurance Benefit Businesses
          </p>
          <div className="space-y-4 mt-4 text-sm sm:text-base">
            <p>
              In the rapidly evolving digital economy, product quality directly
              impacts customer satisfaction and business success. A robust
              Quality Assurance program provides numerous strategic benefits
              that extend far beyond simple bug detection.
            </p>

            <div className="mt-4">
              <p className="font-bold text-base sm:text-[17px]">
                Enhanced Product Quality
              </p>
              <p className="mt-2">
                Comprehensive QA testing identifies and resolves issues before
                they reach customers, ensuring a polished, professional product.
                This results in higher customer satisfaction, fewer negative
                reviews, and reduced support costs. Our QA specialists examine
                every feature and interaction point to guarantee seamless
                functionality.
              </p>
              <p className="mt-2">
                Quality products build brand loyalty and positive word-of-mouth.
                In today's connected world, a single quality issue can quickly
                damage reputation across multiple platforms. Our QA services
                help prevent such scenarios by catching issues early in the
                development cycle.
              </p>
            </div>

            <div className="mt-4">
              <p className="font-bold text-base sm:text-[17px]">
                Reduced Development Costs
              </p>
              <p className="mt-2">
                Implementing QA throughout the development lifecycle
                significantly reduces costs. Issues identified early are
                exponentially cheaper to fix than those discovered post-launch.
                Our testing methodologies help optimize development resources
                and prevent costly rework.
              </p>
              <p className="mt-2">
                Our QA team provides detailed documentation that helps
                developers quickly understand and address issues. This
                streamlined process reduces debugging time and accelerates
                time-to-market while maintaining quality standards.
              </p>
            </div>

            <div className="mt-4">
              <p className="font-bold text-base sm:text-[17px]">
                Competitive Market Advantage
              </p>
              <p className="mt-2">
                Superior product quality differentiates your offering in crowded
                marketplaces. Our QA services help you deliver features that
                work flawlessly, giving customers confidence in your brand. This
                reliability translates to higher conversion rates and customer
                retention.
              </p>
              <p className="mt-2">
                We also conduct competitive analysis as part of our QA process,
                helping you understand how your product compares to alternatives
                in the market. These insights can inform both product
                improvements and marketing strategies.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12">
          <p className="text-center text-3xl sm:text-4xl lg:text-[48px] text-black px-4 md:px-10">
            Why Choose Nexcel as Your QA Provider
          </p>

          <div className="mt-4 text-sm sm:text-base">
            <p>
              Nexcel Solutions approaches Quality Assurance as a strategic
              partnership rather than just a service. We combine technical
              expertise with business acumen to deliver QA solutions that align
              with your organizational goals. Our team becomes an extension of
              your development process, providing insights that enhance both
              current products and future iterations.
            </p>
          </div>

          <div className="mt-8 md:mt-12">
            <ImageWithServiceDetails
              imageUrl="/images/bpo/qa.jpg"
              label="Why Choose Our Quality Assurance?"
              description="Our comprehensive QA services help you deliver products that meet the highest standards of quality and reliability. Whether you need functional testing, performance evaluation, security auditing, or user experience assessment, our QA specialists have the expertise to ensure your product excels."
              data={whyChooseOurServiceData}
              imageClass="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[680px]"
            />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8  xl:px-0 max-w-7xl mx-auto">
        <TestimonialsSection />
      </div>

      <div className="px-4 md:px-8  xl:px-0  max-w-7xl mx-auto mb-10">
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
      label: "Methodology",
      description:
        "Our QA methodology combines industry best practices with customized approaches tailored to your specific needs. We employ a mix of manual and automated testing techniques, risk-based testing strategies, and continuous improvement processes. This comprehensive approach ensures we identify both obvious issues and subtle edge cases that could impact user experience.",
    },
    {
      id: 2,
      label: "Testing Coverage",
      description:
        "We provide complete test coverage across all functional areas of your product. Our testing includes functional validation, compatibility testing, performance benchmarking, security assessment, and usability evaluation. We ensure every feature works as intended across all supported platforms, devices, and environments.",
    },
    {
      id: 3,
      label: "Quality Standards",
      description:
        "Nexcel adheres to international quality standards including ISO 9001 and ISTQB guidelines. Our QA processes are designed to meet regulatory requirements for various industries while maintaining flexibility to adapt to your specific quality benchmarks. We don't just find defects - we help you establish quality metrics and continuous improvement processes.",
    },
    {
      id: 4,
      label: "Efficiency",
      description:
        "In the fast-paced tech world, speed cannot compromise quality. Our QA team employs optimized testing processes and automation tools to deliver thorough testing within aggressive timelines. We implement smart testing strategies that maximize defect detection while minimizing redundant efforts, providing rapid feedback to your development team.",
    },
    {
      id: 5,
      label: "Global Expertise",
      description:
        "With experience across diverse markets and industries, our QA specialists understand regional requirements and cultural nuances that impact product quality. We test for internationalization and localization, ensuring your product meets expectations in all target markets. Our global perspective helps prevent region-specific quality issues.",
    },
    {
      id: 6,
      label: "Process Integration",
      description:
        "Our QA services seamlessly integrate with your development lifecycle. We adapt to your existing workflows, tools, and methodologies while introducing QA best practices. From initial requirements analysis to final pre-release verification, we provide continuous quality oversight that enhances rather than interrupts your development process.",
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

export default QualityAssurance;
