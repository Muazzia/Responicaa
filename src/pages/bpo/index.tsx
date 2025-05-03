import { useRef } from "react";
import ContactUs from "../../components/ContactUs";
import TestimonialsSection from "../../components/TestimonialsSection";
import { ROUTES } from "../../constants";
import { RecognizedByBest } from "../landingPage/components/RecognizedByBest";
import ServiceBoxes from "./components/ServiceBoxes";

const BPO = () => {
  const boxData = [
    {
      id: 1,
      title: "Customer Support",
      description:
        "We are here to ensure that your customers receive impeccable service. Our BPO outsourcing service USA enables you to always communicate with your clients.",
      logo: (
        <img
          className="w-full h-full object-cover"
          src="/svg/bpo/customerSupport.svg"
        />
      ),
      url: ROUTES.CUSTOMERSUPPORT,
    },
    {
      id: 2,
      title: "TeleSales",
      description:
        "Our telemarketing sales in BPO outsourcing service involve promoting products or services over the phone, targeting potential customers to increase your sales.",
      logo: (
        <img className="w-full h-full object-cover" src="/svg/bpo/sales.svg" />
      ),
      url: ROUTES.SALES,
    },
    {
      id: 3,
      title: "Quality Assurance",
      description:
        "Quality assurance is a process for confirming and validating a good or service that involves testing the software to find and fix any problems before making it available to users.",
      logo: (
        <img
          className="w-full h-full object-cover"
          src="/svg/bpo/qualityAssurance.svg"
        />
      ),
      url: ROUTES.QUALITYASSURANCE,
    },
    {
      id: 4,
      title: "Home Warranty",
      description:
        "A home warranty is a service contract that covers the repair or replacement of major home systems and appliances that break down due to normal wear and tear.",
      logo: (
        <img
          className="w-full h-full object-cover"
          src="/svg/bpo/homeWarranty.svg"
        />
      ),
      url: ROUTES.HOMEWARRANTY,
    },
    {
      id: 5,
      title: "Energy Supplies",
      description:
        "Energy supplies refer to the various sources of energy that are used to generate electricity, heat, and power for homes and businesses.",
      logo: (
        <img
          className="w-full h-full object-cover"
          src="/svg/bpo/energySupplies.svg"
        />
      ),
      url: ROUTES.ENERGYSUPPLIES,
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
      <div className="px-4 md:px-8  xl:px-0  max-w-7xl mx-auto">
        <div className="w-full space-y-5 text-center my-7">
          <p className="text-3xl sm:text-4xl lg:text-[48px] text-primary font-semibold">
            Trusted BPO Services
          </p>
          <p className="text-sm sm:text-base">
            Streamline your business operations with our reliable and efficient
            BPO services.
          </p>
          <div className="w-full flex justify-center items-center">
            <div className="w-full md:w-2/3 text-left text-sm sm:text-base">
              Want to better understand your customers and engagement
              initiatives by using the most effective procedure established
              appropriately for your business? Choose our Business Process
              Outsourcing (BPO) services to create better client experiences and
              support the expansion of your business.
            </div>
          </div>
        </div>

        <div className="w-full h-[180px] sm:h-[220px] md:h-[270px] overflow-hidden flex justify-center items-center">
          <img
            src="/images/bpo/world.webp"
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="mt-7">
          <p className="text-2xl sm:text-3xl lg:text-[40px] my-5 text-center font-semibold">
            Our Quality BPO Services
          </p>
          <p className="text-sm sm:text-base">
            BPO services refers to hiring a third-party vendor's services or
            operations for commercial purposes. Numerous subcategories
            specifying the place and purpose of the service offered fall under
            the general term BPO. Some of categories are:
          </p>
          <div className="ml-4 mt-2">
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
              <li className="marker:text-[#666666]">Offshore Outsourcing</li>
              <li className="marker:text-[#666666]">Onshore Outsourcing</li>
              <li className="marker:text-[#666666]">Nearshore Outsourcing</li>
            </ul>
          </div>

          <div className="mt-4 space-y-3">
            <div>
              <p className="text-xl sm:text-2xl lg:text-[30px] font-semibold mb-2">
                Offshore Outsourcing
              </p>
              <p className="text-sm sm:text-base">
                Offshore BPO services moves parts of your business's operations
                to a solid in a different country, especially offshore
                locations. Organizations typically use this method to access a
                larger talent pool at a reduced overhead cost without
                compromising the job quality produced. Getting professional BPO
                services improves a company's performance and competitiveness.
                To ensure high job quality and accountability, firms collaborate
                with our reputable and trustworthy bpo service providers to
                achieve this. Our Offshore workers can assist you in managing
                essential company operations duties, giving you and your
                internal staff more time to concentrate on your
                responsibilities. This improves concentration, productivity, and
                employee satisfaction while saving the business up to 40-70% on
                labor expenditures.
              </p>
            </div>

            <div>
              <p className="text-xl sm:text-2xl lg:text-[30px] font-semibold mb-2">
                Onshore Outsourcing
              </p>
              <p className="text-sm sm:text-base">
                The method of outsourcing and obtaining BPO services within
                national borders. This means a vendor in one city, state, or
                province may be hired to supply services to a company in a
                different city, state, or region. Numerous reasons, like the
                availability of specialist talents in specific areas or regional
                variations in prices and expenses, may cause this. When you
                choose our onshore BPO services, you decide to work with a group
                of experts in your nation. As a result, you can connect with
                them effortlessly because they are familiar with your language,
                culture, and business customs. One advantage of our onshore
                business process outsourcing service is the comfort of being in
                the same time zone, which enables real-time cooperation and
                quicker reaction times. Additionally, Responica' onshore
                business process outsourcing service gives you access to a pool
                of local personnel familiar with your nation's rules and market
                dynamics. This could happen in more efficient project execution
                and happier clients.
              </p>
            </div>

            <div>
              <p className="text-xl sm:text-2xl lg:text-[30px] font-semibold mb-2">
                Nearshore Outsourcing
              </p>
              <p className="text-sm sm:text-base">
                Nearshore outsourcing involves working with a group of experts
                based in nearby nations. They might not be in the same country
                as you, but they are still physically close to you. Outsourcing
                to the nearshore region strikes a compromise between closeness
                and cost savings. When you choose our nearshore business process
                outsourcing service over onshore outsourcing, you can save money
                while still working with staff familiar with your time zone and
                culture. This enables efficient project management, teamwork,
                and communication. Businesses that prioritize cost-effectiveness
                without sacrificing quality or communication can consider BPO
                services.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-2xl sm:text-3xl lg:text-[40px] text-center text-primary font-semibold">
              How Can We Be of Assistance?
            </p>
            <p className="my-2 text-sm sm:text-base">
              Working with Responica' BPO services has several advantages, such
              as cost savings, the capacity to concentrate on core duties,
              improved outcomes in non-core areas, and higher productivity. You
              can streamline operations, spur development, and acquire a
              competitive edge in your sector by outsourcing specific business
              tasks. It's time to consider the advantages of working with
              reputable services like ours and be prepared to discover how far
              your business can go.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mt-5">
              <div className="text-center p-3">
                <p className="text-xl sm:text-2xl lg:text-[30px] font-semibold mb-2">
                  To Decrease Costs
                </p>
                <p className="text-black/60 text-sm sm:text-base">
                  You can reduce operating expenditures, including hiring and
                  training costs, infrastructure investments, and administrative
                  costs, by outsourcing non-core operations to our BPO service.
                  This enables you to spend your resources more wisely and
                  invest in sectors encouraging innovation and growth.
                </p>
              </div>
              <div className="text-center p-3">
                <p className="text-xl sm:text-2xl lg:text-[30px] font-semibold mb-2">
                  To Concentrate Better
                </p>
                <p className="text-black/60 text-sm sm:text-base">
                  By collaborating with our BPO services, you can concentrate on
                  your strategic goals and essential capabilities. You can free
                  up critical time and resources by delegating time-consuming
                  and repetitive duties, allowing you to focus on what you do
                  best.
                </p>
              </div>
              <div className="text-center p-3">
                <p className="text-xl sm:text-2xl lg:text-[30px] font-semibold mb-2">
                  To Accomplish More
                </p>
                <p className="text-black/60 text-sm sm:text-base">
                  Responica’ BPO services have areas of expertise in finance,
                  accounting, customer assistance, and data input. By utilizing
                  our resources and skills, you can ensure that these non-core
                  tasks are carried out proficiently and successfully, improving
                  the results for your company.
                </p>
              </div>
              <div className="text-center p-3">
                <p className="text-xl sm:text-2xl lg:text-[30px] font-semibold mb-2">
                  To Boost Efficiency
                </p>
                <p className="text-black/60 text-sm sm:text-base">
                  The infrastructure, technology, and experienced staff are all
                  available from our business process outsourcing company which
                  helps you to simplify your operations. We Increase process
                  efficiency, decrease mistakes, and boost production using
                  their capabilities.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <RenderBPOService />
          </div>

          <div className="my-10">
            <div>
              <p className="text-3xl sm:text-4xl lg:text-[48px] font-semibold mb-5">
                WHO WE ARE?
              </p>
              <div className="flex flex-col md:flex-row gap-5 md:gap-[50px]">
                <div>
                  <p className="text-black/60 text-base sm:text-[20px]">
                    We are a committed team that focuses on managing and
                    optimizing crucial business activities in the field of BPO
                    (Business Process Outsourcing) services. We handle jobs like
                    customer assistance, data entry, finance, having more
                    emphasis on efficiency and knowledge, freeing businesses to
                    concentrate on their key strengths.
                  </p>
                </div>
                <div>
                  <p className="text-black/60 text-base sm:text-[20px]">
                    We stand out for our dedication to providing outstanding BPO
                    service USA and make sure to use cutting-edge technology to
                    keep strong data security. We serve as your strategic
                    partner, helping you increase efficiency by cutting costs,
                    and ultimately accomplish your business objectives while
                    transferring key operations to our capable hands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ServiceBoxes data={boxData} />
      </div>

      <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto mt-10">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="w-full lg:w-1/2">
            <p className="text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-tight mb-5">
              Global Customer <br /> Services Provider
            </p>
            <p className="text-black/60 text-sm sm:text-[14px] mb-5">
              Get specialized support and expertise from the renowned BPO
              service experts, Responica. We are your trusted partners whom you
              can rely on to meet your organization with competent sales and
              marketing tech.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-primary text-white w-fit px-4 py-2 rounded-lg cursor-pointer hover:bg-primary/90 transition"
            >
              Get in Touch
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full object-cover h-[300px] sm:h-[375px] lg:h-[475px] overflow-hidden">
              <img
                src="/images/bpo/hands.png"
                alt="hands"
                className="object-contain lg:object-contain xl:object-cover w-full h-full"
              />
            </div>
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

const RenderBPOService = () => {
  return (
    <div>
      <p className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-center">
        BPO Solutions Offered BY Responica
      </p>
      <div className="mt-5 space-y-5">
        <div>
          <p className="text-xl sm:text-2xl lg:text-[30px] font-semibold">
            Customer Support
          </p>
          <div className="text-black/60 mt-2 text-sm sm:text-base">
            <p>
              Business process outsourcing (BPO) is a broad word that refers to
              various procedures frequently needed by businesses. Our BPO
              services company often manages your chat, email, and inbound and
              outbound calling. Our customer support experts deliver efficient
              customer care by streamlining interactions across all channels.
              This allows consumers to travel between contact points and resolve
              issues without setbacks.
            </p>
            <p className="mt-2">
              Companies must be at the top of their customer service game in the
              modern era, where 62% of consumers tell their friends and family
              about a bad service experience to prevent a negative impact on
              client sales.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xl sm:text-2xl lg:text-[30px] font-semibold">
            TeleSales
          </p>
          <div className="text-black/60 mt-2 text-sm sm:text-base">
            <p>
              Telesales is the procedure of selling goods or services via the
              phone. Through great client connections, telesales aims to
              increase repeat business. To help field sales agents, telesales
              representatives call consumers to push offers or schedule
              appointments.
            </p>
            <p className="mt-2">
              As telesales professionals, you call current and potential clients
              directly to persuade them to take advantage of your business's
              offerings. Telesales come in two flavors: inbound and outbound.
              While outbound involves phone leads to create sales and inbound
              agents take calls from prospective and current clients.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xl sm:text-2xl lg:text-[30px] font-semibold">
            Technical Support
          </p>
          <div className="text-black/60 mt-2 text-sm sm:text-base">
            <p>
              Our Technical support staff assists customers experiencing issues
              with their electronic devices, such as computers, smartphones, or
              other hardware or software. Businesses must have the right
              resources to thrive in offering top-notch technical assistance.
              Additionally, Responica BPO services provide a ticketing mechanism
              made just for this use.
            </p>
            <p className="mt-2">
              Our Technical support team of a business process outsourcing
              company can efficiently handle and monitor client inquiries with
              the help of this ticketing solution, which has a user-friendly
              design and several cutting-edge capabilities. Through our 24/7
              strategy, we ensure that customer messages are received and
              attended to over various channels, including live chat, email,
              phone, and social media. Companies can improve their technical
              support capabilities and benefit their customers using our
              ticketing solution.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xl sm:text-2xl lg:text-[30px] font-semibold">
            Data Entry and Processing
          </p>
          <div className="text-black/60 mt-2 text-sm sm:text-base">
            <p>
              Data entry outsourcing is a business practice where a firm hires a
              specialist service provider to handle all its data-entering needs.
              In information technology, data entry jobs include converting data
              between different digital formats, indexing data for quick access
              after entering it into a database, services for data, and image
              processing to extract information from lengthy documents.
            </p>
            <p className="mt-2">
              Data conversion and mining services are used to locate and
              transform difficult discoveries into practical statistics. BPO
              data entry is another name for outsourcing data input. Business
              process outsourcing is a catch-all phrase for all business-related
              tasks that a corporation contracts to a third-party supplier.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xl sm:text-2xl lg:text-[30px] font-semibold">
            Lead Generation
          </p>
          <div className="text-black/60 mt-2 text-sm sm:text-base">
            <p>
              Creating customer interest in a good or service to convert that
              interest into a sale is termed lead generation. Online marketing
              often involves gathering a visitor's contact details by using our
              BPO services.
            </p>
            <p className="mt-2">
              Since many B2B lead generation firms' products might cost
              thousands of dollars and website visitors are less likely to make
              a straight purchase via their website, lead generation is a
              crucial component of their sales funnel. Organizations can educate
              and nurture prospective consumers by email marketing by gathering
              fresh leads before immediately contacting eligible authorities
              through sales.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xl sm:text-2xl lg:text-[30px] font-semibold">
            Quality Assurance
          </p>
          <div className="text-black/60 mt-2 text-sm sm:text-base">
            <p>
              Quality assurance is a process for confirming and validating a
              good or service that involves testing the software to find and fix
              any problems before making it available to users. In other terms,
              it guarantees perpetual client satisfaction.
            </p>
            <p className="mt-2">
              With the help of our quality assurance solution, BPO services can
              be effectively integrated into various organizational programs. We
              add qualified personnel when they are most needed and let them go
              when the project is gradually ending.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xl sm:text-2xl lg:text-[30px] font-semibold">
            Truck Dispatch
          </p>
          <div className="text-black/60 mt-2 text-sm sm:text-base">
            <p>
              Responica Solution is a well-known outsourcing firm that
              recognizes the value of truck dispatch services for independent
              contractors specializing in fieldwork. One of the most adaptable
              trucks dispatching businesses is Responica Solution. It can
              support your current calling process by arranging appointments,
              quickly delivering important calls, taking messages, and rerouting
              them to the right people. Additionally, our after-hours answering
              services reassure your clients that you are accessible whenever
              they call.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BPO;
