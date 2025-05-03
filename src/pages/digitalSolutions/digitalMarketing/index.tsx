import { FaSearchDollar, FaHashtag, FaChartLine } from "react-icons/fa";
import { MdEmail, MdAnalytics } from "react-icons/md";
import ContactUs from "../../../components/ContactUs";
import HeroSectionWithCTA from "../../../components/HeroSectionWithCTA";
import TestimonialsSection from "../../../components/TestimonialsSection";
import { RecognizedByBest } from "../../landingPage/components/RecognizedByBest";
import { FaCircleCheck } from "react-icons/fa6";
import { ServiceProcess } from "./components/ServicesProcess";
import { useRef } from "react";

export const DigitalMarketing = () => {
  const marketingServices = [
    {
      title: "Search Engine Optimization (SEO)",
      icon: <FaSearchDollar className="text-3xl" />,
      content:
        "Dominating search rankings through technical optimization, content strategy, and authoritative link building.",
    },
    {
      title: "Social Media Marketing",
      icon: <FaHashtag className="text-3xl" />,
      content:
        "Strategic platform management with viral content creation and community engagement tactics.",
    },
    {
      title: "Pay-Per-Click Advertising",
      icon: <FaChartLine className="text-3xl" />,
      content:
        "Precision-targeted campaigns across Google, Bing, and social platforms with conversion optimization.",
    },
    {
      title: "Email Marketing",
      icon: <MdEmail className="text-3xl" />,
      content:
        "Automated nurture sequences and personalized outreach campaigns with advanced segmentation.",
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
      <HeroSectionWithCTA
        description="As modern-age digital storytellers, we craft narratives that enchant, engage, and elevate your brand's voice. Responica transforms your digital presence through data-driven strategies, delivering measurable growth in today's competitive landscape."
        heading="Full-Service Digital Marketing Agency"
        primaryButtonLabel="View Services"
        secondaryButtonLabel="Get Free Audit"
        onSecondaryButtonClick={scrollToContact}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="mt-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-red-700">
            Comprehensive Digital Marketing Solutions
          </h2>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 mb-4">
                Who We Are?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Responica is more than a digital marketing agency - we're growth
                architects. Our team of certified experts combines cutting-edge
                technology with proven marketing methodologies to deliver:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center">
                  <FaCircleCheck className="text-red-600 mr-2" />
                  500+ successful client campaigns since 2015
                </li>
                <li className="flex items-center">
                  <FaCircleCheck className="text-red-600 mr-2" />
                  Google Premier Partner status
                </li>
                <li className="flex items-center">
                  <FaCircleCheck className="text-red-600 mr-2" />
                  Proprietary AI-powered analytics platform
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 mb-4">
                What We Do?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our 360-degree approach covers every aspect of digital
                marketing:
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {marketingServices.map((service, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg hover:shadow-lg transition"
                  >
                    <div className="text-red-600 mb-2">{service.icon}</div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-2">
                      {service.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gray-50 p-6 sm:p-8 rounded-xl">
            <h3 className="text-3xl sm:text-4xl text-center text-red-700 mb-8">
              Our 4-Pillar Marketing Process
            </h3>
            <ServiceProcess
              steps={[
                {
                  title: "Strategy Development",
                  content: "Deep market analysis + competitor audit",
                },
                {
                  title: "Campaign Activation",
                  content:
                    "Multi-channel implementation with real-time tracking",
                },
                {
                  title: "Performance Optimization",
                  content: "Continuous A/B testing & budget reallocation",
                },
                {
                  title: "ROI Analysis",
                  content: "Comprehensive reporting with actionable insights",
                },
              ]}
            />
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/digitalSolutions/artificial-intelligence.webp"
                alt="Marketing Analytics"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl sm:text-4xl text-red-700 mb-4">
                Data-Driven Growth Strategies
              </h3>
              <p className="text-gray-700 mb-6">
                Our proprietary analytics engine tracks 150+ performance metrics
                to optimize your campaigns:
              </p>
              <div className="space-y-4">
                <div className="flex items-center bg-white p-4 rounded-lg shadow">
                  <MdAnalytics className="text-3xl text-red-600 mr-4" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Real-Time Optimization
                    </h4>
                    <p className="text-gray-600">
                      Dynamic bid adjustments based on conversion patterns
                    </p>
                  </div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow">
                  <FaChartLine className="text-3xl text-red-600 mr-4" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      Predictive Analytics
                    </h4>
                    <p className="text-gray-600">
                      AI-driven forecasting for budget allocation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl sm:text-4xl text-center text-red-700 mb-8">
              Industries We Master
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {[
                "E-Commerce",
                "Healthcare",
                "SaaS",
                "FinTech",
                "Education",
                "Manufacturing",
                "Real Estate",
                "Legal",
              ].map((industry) => (
                <div
                  key={industry}
                  className="p-4 bg-white rounded-lg border hover:shadow-md transition"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-red-700 text-white p-6 sm:p-8 rounded-xl">
            <h3 className="text-3xl sm:text-4xl text-center mb-8">
              Why Choose Responica?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "200% Average ROI Increase",
                "24/7 Campaign Monitoring",
                "Dedicated Account Managers",
              ].map((item, index) => (
                <div key={index} className="text-center p-4 flex gap-5">
                  <div className="text-3xl mb-2">
                    <FaCircleCheck />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold">{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-10">
          <TestimonialsSection />
          <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
            <h3 className="text-3xl sm:text-4xl text-center text-red-700 mb-8">
              Marketing Technologies We Use
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-center">
              {[
                "Google Marketing Platform",
                "HubSpot",
                "SEMrush",
                "Adobe Experience Cloud",
                "Salesforce",
                "Hotjar",
              ].map((tech, index) => (
                <img
                  key={tech}
                  src={`https://picsum.photos/100/50?random=${index + 20}`}
                  alt={tech}
                  className="h-12 mx-auto rounded"
                />
              ))}
            </div>
          </div>
          <RecognizedByBest />
          <ContactUs ref={contactRef} />
        </div>
      </div>
    </>
  );
};
