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
      title: "Better Customer Experiences",
      description:
        "Our QA program ensures every customer interaction is seamless and meets your brand standards, leading to improved customer satisfaction.",
    },
    {
      id: 2,
      title: "Higher Sales Conversion Rates",
      description:
        "By maintaining high-quality interactions, our QA services help boost sales conversion rates and drive business growth.",
    },
    {
      id: 3,
      title: "Fewer Compliance Risks",
      description:
        "We ensure adherence to legal and regulatory standards, reducing compliance risks and protecting your business.",
    },
    {
      id: 4,
      title: "Ongoing Agent Development",
      description:
        "Our QA process identifies areas for agent improvement, fostering continuous development and enhanced performance.",
    },
    {
      id: 5,
      title: "Detailed Weekly/Monthly QA Reports",
      description:
        "We provide comprehensive QA reports that offer actionable insights for performance tracking and strategic decision-making.",
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
    <>
      <div className="">
        <HeroSectionWithCTA
          primaryButtonLabel="Solutions"
          heading="Quality Assurance Services"
          description="At Responica, Quality Assurance is at the core of our call center operations. We don’t just focus on making calls, we focus on making them right. Our QA team ensures every customer interaction meets your brand standards, legal compliance, and performance goals."
          secondaryButtonLabel="Schedule A Free Consultation"
          onSecondaryButtonClick={scrollToContact}
        />

        <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto mt-8 md:mt-12">
          <div className="flex items-center justify-center">
            <p className="text-primary-red font-semibold text-3xl sm:text-4xl lg:text-[48px] text-center">
              How Does Quality Assurance Service Work?
            </p>
          </div>
          <div className="space-y-4 mt-4 text-sm sm:text-base">
            <p>
              Quality Assurance is the foundation of product excellence in
              today's competitive digital landscape. Our systematic approach
              ensures that every aspect of your product meets defined quality
              criteria before reaching your customers.
            </p>
            <p>
              QA begins with understanding your product requirements and
              business objectives. Our specialists develop detailed test plans
              covering all functional and non-functional aspects. This includes
              functionality testing, performance evaluation, security audits,
              and user experience assessment.
            </p>
            <p>
              We employ both manual and automated testing methodologies to
              maximize coverage and efficiency. Our testers meticulously
              document all findings, providing clear reports with prioritized
              issues and actionable recommendations.
            </p>
            <p>
              The true value of our QA services lies in our attention to detail.
              Our experienced testers approach each product with fresh eyes,
              simulating real user behavior to uncover issues that might
              otherwise go unnoticed. We don't just identify problems - we help
              you understand their impact and work with your team to implement
              effective solutions.
            </p>
          </div>
        </div>
        <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto mt-8 md:mt-12"></div>
        <div className="flex items-center justify-center  ">
          <p className="text-primary-red font-semibold text-3xl sm:text-4xl lg:text-[48px] text-center">
            Why QA Matters
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4 md:px-10 xl:px-0 max-w-7xl mx-auto">
          {[
            {
              id: 1,
              title: "Ensure Accuracy",
              description:
                "Our QA team ensures the accuracy of information shared by agents, building trust with your customers.",
            },
            {
              id: 2,
              title: "Compliance Standards",
              description:
                "We confirm compliance with legal and regulatory standards like TCPA, PUC, and FTC to protect your business.",
            },
            {
              id: 3,
              title: "Agent Improvement",
              description:
                "Identify opportunities for agent improvement and coaching to enhance performance and customer satisfaction.",
            },
            {
              id: 4,
              title: "Professional Interactions",
              description:
                "Guarantee that all customer interactions are professional, ethical, and effective to uphold your brand reputation.",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              <p className="text-primary-red font-semibold text-xl sm:text-2xl">
                {item.title}
              </p>
              <p className="text-black mt-4 text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto mt-8 md:mt-12">
          <div className="text-center">
            <h2 className="text-primary-red font-bold text-3xl sm:text-4xl lg:text-[48px]">
              Our QA Process
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
              We use a structured monitoring framework tailored to your campaign. Each call is evaluated against a customized QA scorecard, which may include:
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
          title: "Greeting & Identification",
          items: [
            "Was the agent polite and professional?",
            "Did they introduce themselves and the company clearly?",
          ],
              },
              {
          title: "Compliance Checks",
          items: [
            "Was the script followed where required?",
            "Were disclaimers, opt-ins, or third-party verifications handled properly?",
          ],
              },
              {
          title: "Product Knowledge",
          items: [
            "Did the agent provide accurate and relevant information?",
            "Were product benefits clearly communicated?",
          ],
              },
              {
          title: "Sales Technique",
          items: [
            "Did the agent listen actively and address customer needs?",
            "Was the closing handled confidently and ethically?",
          ],
              },
              {
          title: "Call Handling Skills",
          items: [
            "Was the tone positive and professional throughout?",
            "Was the call wrapped up appropriately?",
          ],
              },
            ].map((section, index) => (
              <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
          <h3 className="text-primary-red font-semibold text-xl sm:text-2xl">
            {section.title}
          </h3>
          <ul className="mt-4 space-y-2 text-gray-700 text-sm sm:text-base">
            {section.items.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2 text-primary-red">•</span>
                {item}
              </li>
            ))}
          </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
              Each call is given a QA score, and reports are shared with team leads for feedback, coaching, and performance tracking.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto mt-8 md:mt-12">
        <div className="flex items-center justify-center">
          <p className="text-primary-red font-semibold text-3xl sm:text-4xl lg:text-[48px] text-center">
            Key Features of Our Quality Assurance
          </p>
        </div>
        <div className="mt-4 text-sm sm:text-base">
          <p>
            Superior Quality Assurance is essential for maintaining competitive
            advantage in today's technology-driven marketplace. Responica
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
          <p className="text-center text-primary-red font-semibold text-3xl sm:text-4xl lg:text-[48px] px-4 md:px-10">
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
            Why Choose Responica as Your QA Provider
          </p>

          <div className="mt-4 text-sm sm:text-base">
            <p>
              Responica approaches Quality Assurance as a strategic partnership
              rather than just a service. We combine technical expertise with
              business acumen to deliver QA solutions that align with your
              organizational goals. Our team becomes an extension of your
              development process, providing insights that enhance both current
              products and future iterations.
            </p>
          </div>

          <div className="mt-8 md:mt-12">
            <ImageWithServiceDetails
              imageUrl="/images/bpo/qa.jpg"
              label="Benefits of Our QA Program"
              description="Our comprehensive QA services help you deliver products that meet the highest standards of quality and reliability. Whether you need functional testing, performance evaluation, security auditing, or user experience assessment, our QA specialists have the expertise to ensure your product excels."
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
    </>
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
        "Responica adheres to international quality standards including ISO 9001 and ISTQB guidelines. Our QA processes are designed to meet regulatory requirements for various industries while maintaining flexibility to adapt to your specific quality benchmarks. We don't just find defects - we help you establish quality metrics and continuous improvement processes.",
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
