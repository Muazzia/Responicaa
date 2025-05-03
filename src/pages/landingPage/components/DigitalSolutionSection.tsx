import { FaDesktop, FaMobileAlt, FaBullhorn } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link
import { ROUTES } from "../../../constants"; // Import ROUTES

const services = [
  {
    id: 1,
    icon: (
      <FaDesktop className="text-3xl md:text-4xl hover:text-red-500 text-white transition-all cursor-pointer flex-shrink-0 min-w-[2rem]" />
    ),
    title: "Web Development",
    description:
      "Unleashing the power of custom web development and creative website design.",
    url: ROUTES.WEBDEVELOPMENT, // Route for Web Development
  },
  {
    id: 2,
    icon: (
      <FaMobileAlt className="text-3xl md:text-4xl hover:text-red-500 text-white transition-all cursor-pointer flex-shrink-0 min-w-[2rem]" />
    ),
    title: "Mobile App Development",
    description:
      "Crafting user-friendly mobile applications to enhance your business reach.",
    url: ROUTES.MOBILEDEVELOPMENT, // Route for Mobile App Development
  },
  {
    id: 3,
    icon: (
      <FaBullhorn className="text-3xl md:text-4xl hover:text-red-500 text-white transition-all cursor-pointer flex-shrink-0 min-w-[2rem]" />
    ),
    title: "Digital Marketing",
    description:
      "Boosting your brand's visibility with tailored digital marketing strategies.",
    url: ROUTES.DIGIALMARKETING, // Route for Digital Marketing
  },
];

const DigitalSolutionSection = () => {
  return (
    <>
      <div className=" xl:px-0 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 py-10 md:py-28 gap-8 md:gap-4">
        <div className="flex flex-col gap-6 md:gap-8 order-first">
          <h1 className="text-4xl md:text-6xl font-bold text-[#014fd3]">
            Digital Solution
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-base leading-relaxed">
              Unlock your business with our cutting-edge Digital Business
              Solutions. Our goal is to create a Digital Solution that precisely
              addresses the customers’ goals. We wish to provide you with
              long-term Digital IT solutions that enable you to continually
              monetize your company. From consultation, design, integration, and
              implementation to operations, maintenance, and analytics.
            </p>
          </div>
        </div>
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src="/images/landingPage/digital.png"
            alt="Digital Solution"
            width={400}
            height={400}
            className="w-auto h-auto"
          />
        </div>
      </div>
      <div className="max-w-full lg:max-w-[80%] xl:max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-b from-[#014FD3] to-[#003FAA] text-center py-8 md:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-10 rounded-sm gap-4 md:gap-8 lg:gap-10">
          {services.map((service) => (
            <div key={service.id} className="flex gap-3 md:gap-4 items-start">
              {service.icon}
              <div className="text-left">
                <Link
                  to={service.url} // Add Link to route
                  className="text-xs font-semibold hover:text-red-500 text-white transition-all cursor-pointer mb-2 md:mb-1"
                >
                  {service.title}
                </Link>
                <p className="text-xs font-light text-white leading-relaxed md:leading-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DigitalSolutionSection;
