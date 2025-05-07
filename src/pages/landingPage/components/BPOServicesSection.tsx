import {
  FaHeadset,
  FaPhoneAlt,
  FaCheckCircle,
  FaHome,
  FaBolt,
} from "react-icons/fa"; // Import relevant icons
import { Link } from "react-router-dom"; // Import Link for routing
import { ROUTES } from "../../../constants"; // Import ROUTES

const boxData = [
  {
    id: 1,
    title: "Customer Support",
    description:
      "We are here to ensure that your customers receive impeccable service. Our BPO outsourcing service USA enables you to always communicate with your clients.",
    icon: (
      <FaHeadset className="text-3xl md:text-4xl hover:text-[#004aad] text-white transition-all cursor-pointer flex-shrink-0 min-w-[2rem]" />
    ),
    url: ROUTES.CUSTOMERSUPPORT, // Route for Customer Support
  },
  {
    id: 2,
    title: "TeleSales",
    description:
      "Our telemarketing sales in BPO outsourcing service involve promoting products or services over the phone, targeting potential customers to increase your sales.",
    icon: (
      <FaPhoneAlt className="text-3xl md:text-4xl hover:text-[#004aad] text-white transition-all cursor-pointer flex-shrink-0 min-w-[2rem]" />
    ),
    url: ROUTES.SALES, // Route for TeleSales
  },
  {
    id: 3,
    title: "Quality Assurance",
    description:
      "Quality assurance is a process for confirming and validating a good or service that involves testing the software to find and fix any problems before making it available to users.",
    icon: (
      <FaCheckCircle className="text-3xl md:text-4xl hover:text-[#004aad] text-white transition-all cursor-pointer flex-shrink-0 min-w-[2rem]" />
    ),
    url: ROUTES.QUALITYASSURANCE, // Route for Quality Assurance
  },
  {
    id: 4,
    title: "Home Warranty",
    description:
      "A home warranty is a service contract that covers the repair or replacement of major home systems and appliances that break down due to normal wear and tear.",
    icon: (
      <FaHome className="text-3xl md:text-4xl hover:text-[#004aad] text-white transition-all cursor-pointer flex-shrink-0 min-w-[2rem]" />
    ),
    url: ROUTES.HOMEWARRANTY, // Route for Home Warranty
  },
  {
    id: 5,
    title: "Energy Supplies",
    description:
      "Energy supplies refer to the various sources of energy that are used to generate electricity, heat, and power for homes and businesses.",
    icon: (
      <FaBolt className="text-3xl md:text-4xl hover:text-[#004aad] text-white transition-all cursor-pointer flex-shrink-0 min-w-[2rem]" />
    ),
    url: ROUTES.ENERGYSUPPLIES, // Route for Energy Supplies
  },
];

const BPOServicesSection = () => {
  return (
    <>
      <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 py-10 md:py-28 gap-8 md:gap-4">
        <div className="flex flex-col gap-6 md:gap-8 order-first">
          <h1 className="text-4xl md:text-6xl font-bold text-[#a10202]">
            BPO Services
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-base leading-relaxed">
              Optimize your operation with our effective business process
              outsourcing solutions (BPO). It will streamline your operations
              from data input to BPO Customer Service, allowing you to
              concentrate on the main aspects of business expansion. <br />
              <br />
              To achieve your strategic goals, we believe in boosting output,
              boosting efficiency, and most importantly, attaining achievement
              for your objectives in International BPO.
            </p>
          </div>
        </div>
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src="/gif/perfect2.gif"
            alt="BPO Services"
            width={400}
            height={400}
            className="w-auto h-auto"
          />
        </div>
      </div>
      <div className="max-w-full lg:max-w-[80%] xl:max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-b from-[#A10202] to-[#960000] text-center py-8 md:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-10 rounded-sm gap-4 md:gap-8 lg:gap-10">
          {boxData.map((box) => (
            <div key={box.id} className="flex gap-3 md:gap-4 items-start">
              {box.icon}
              <div className="text-left">
                <Link
                  to={box.url} // Add Link to route
                  className="text-xs font-semibold hover:text-[#004aad] text-white transition-all cursor-pointer mb-2 md:mb-1"
                >
                  {box.title}
                </Link>
                <p className="text-xs font-light text-white leading-relaxed md:leading-normal">
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BPOServicesSection;
