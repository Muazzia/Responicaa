import { FaDesktop } from "react-icons/fa";

const DigitalMarketingSection = () => {
  return (
    <>
      <div className="px-4 md:px-10 xl:px-0 max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 py-10 md:py-28 gap-8 md:gap-4">
        <div className="relative w-full h-full flex items-center justify-center order-first">
          <img
            src="/images/landingPage/marketing.png"
            alt="Digital Marketing"
            width={300}
            height={300}
            className="w-auto h-auto"
          />
        </div>
        <div className="flex flex-col gap-6 md:gap-8 order-last">
          <h1 className="text-4xl md:text-6xl font-bold text-[#02ac06]">
            Digital Marketing
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-base leading-relaxed">
              Enhance the digital landscape with our result-driven digital
              marketing services. We strengthen your brand’s online presence and
              drive targeted audience using the power of SEO and Social Media
              Management for optimum impact. We aim to provide you with the most
              possible online visibility, with our expert Digital Marketing
              Solutions. Many of our clients now contact and engage with their
              customers in a new and better way thanks to our proven Internet
              Marketing Services and experience.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-full lg:max-w-[80%] xl:max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-b from-[#02AC06] to-[#008003] text-center py-8 md:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-10 rounded-sm gap-4 md:gap-8 lg:gap-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-3 md:gap-4 items-start">
              <FaDesktop className="text-3xl md:text-4xl hover:text-[#004aad] text-white transition-all cursor-pointer flex-shrink-0 min-w-[2rem]" />
              <div className="text-left">
                <h1 className="text-xs font-semibold hover:text-[#004aad] text-white transition-all cursor-pointer mb-2 md:mb-1">
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

export default DigitalMarketingSection;
