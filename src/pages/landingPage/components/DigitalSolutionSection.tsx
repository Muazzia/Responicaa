import { FaDesktop } from "react-icons/fa";

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
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-3 md:gap-4 items-start">
              <FaDesktop className="text-3xl md:text-4xl hover:text-red-500 text-white transition-all cursor-pointer flex-shrink-0 min-w-[2rem]" />
              <div className="text-left">
                <h1 className="text-xs font-semibold hover:text-red-500 text-white transition-all cursor-pointer mb-2 md:mb-1">
                  Web Development
                </h1>
                <p className="text-xs font-light text-white leading-relaxed md:leading-normal">
                  Unleashing the power of custom web development and creative
                  website design.
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
