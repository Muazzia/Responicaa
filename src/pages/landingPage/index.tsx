import { FaDesktop } from "react-icons/fa";
import Button from "../../components/Button";
import { ROUTES } from "../../constants";
import { Carousel, Collapse } from "antd";
import { TbMailBitcoin } from "react-icons/tb";

const LandingPage = () => {
  return (
    <>
      <div className="mt-14 flex flex-col px-4 md:px-10 bg-[#f2f3f5]">
        <div className="flex flex-col-reverse md:flex-row justify-around items-center gap-10">
          {/* Text Section */}
          <div className="flex-[0.5] flex flex-col justify-center items-center text-center gap-10">
            <h1 className="text-4xl md:text-6xl font-semibold">
              Your Goals, Our Expertise: Digital Solutions for Your Business
            </h1>
            <p className="text-lg md:text-2xl text-red-700 font-semibold">
              Take charge of your business continuity with our Custom Solutions.
            </p>
            <Button
              label={"Schedule a Free Consultant"}
              route={ROUTES.LANDINGPAGE}
              className="!px-5 !py-3 w-fit"
              hoverStyle
            />
          </div>

          <div className="flex justify-center items-center min-h-[300px] md:min-h-screen flex-[0.5]">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite] z-0">
                <img
                  src="/images/landingPage/spinning.png"
                  alt="Spinning Logo"
                  width={550}
                  height={550}
                  className="rounded-full object-cover"
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative left-2 -top-2">
                  <div className="absolute top-0 right-0 border-2 border-red-600 rounded-full w-56 h-56"></div>
                  <div className="absolute top-2 right-2 border-2 border-black rounded-full w-52 h-52"></div>
                  <div className="relative flex items-center justify-center w-52 h-52">
                    <span className="text-7xl md:text-9xl font-bold text-black mr-4">
                      R
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 py-12 md:py-28 gap-8 md:gap-4">
        <div className="flex flex-col gap-6 md:gap-8 order-first">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl md:text-3xl">About</h1>
            <h1 className="text-4xl md:text-5xl font-extrabold">Responica</h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base leading-relaxed">
              We are a digital solution provider company with years of
              experience in helping businesses achieve their goals. At our
              company, we either work on making our clients' objectives feasible
              or have worked hard to achieve them. Such devotion to the work and
              tireless efforts of our industry experts have helped us grow and
              become what we are right now.
            </p>
            <p className="text-base leading-relaxed">
              The path here wasn't easy and we had stumbled countless times, but
              what kept us alive was surely our ability to see the bigger
              picture. Thus, we are continuously growing and becoming greater
              than ever before.
            </p>
            <p className="text-base leading-relaxed">
              With the support of an excellent team of professionals, we promote
              increased effectiveness, enhanced performance, and optimized
              business procedures to support organizational growth.
            </p>
          </div>
          <Button
            label="Enquire Now"
            route={ROUTES.LANDINGPAGE}
            className="w-fit py-3 md:self-start"
          />
        </div>
        <div className="relative w-full h-full flex items-center justify-center order-last md:order-none">
          <img
            src="/images/landingPage/about.png"
            alt="About"
            width={500}
            height={500}
            className="w-full max-w-[500px] h-auto object-cover"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#FFDBDB8F] to-[#E9E6EF] text-center py-14">
        <h1 className="text-5xl font-semibold">Our Services</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 py-10 md:py-28 gap-8 md:gap-4">
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
            alt="About"
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
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 py-10 md:py-28 gap-8 md:gap-4 ">
        <div className="relative w-full h-full flex items-center justify-center order-first">
          <img
            src="/images/landingPage/marketing.png"
            alt="About"
            width={300}
            height={300}
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
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 py-10 md:py-28 gap-8 md:gap-4">
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
            src="/images/landingPage/bop.png"
            alt="About"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="max-w-full lg:max-w-[80%] xl:max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-b from-[#A10202] to-[#960000] text-center py-8 md:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-10 rounded-sm gap-4 md:gap-8 lg:gap-10">
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
      <div className=" text-center py-14 flex flex-col gap-4">
        <p className="text-3xl">Serving</p>
        <h1 className="text-5xl font-bold">INDUSTRIES</h1>
      </div>
      <div className="bg-[#eadeff] text-center py-14">
        <div className="bg-[#eadeff] text-center py-14">
          <Carousel
            autoplay
            autoplaySpeed={2000} // Increased speed
            dots={false}
            slidesToShow={6}
            draggable
            swipeToSlide
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                },
              },
            ]}
          >
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 items-center justify-center p-4"
              >
                <img
                  src="/images/landingPage/pc.png"
                  alt="item"
                  width={100}
                  height={100}
                  className="hover:scale-110 transition-transform mx-auto"
                />
                <p className="text-sm font-medium">Education & E-Learning</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className=" text-center py-14 flex flex-col gap-10">
        <h1 className="text-5xl font-bold">Why Responica Solutions?</h1>
        <p className="text-lg text-center max-w-8/10 mx-auto">
          Eager to perform better than your competitors? Want sales to boost
          like never? Well, for that purpose and many more, Nexcel Solutions is
          the only Digital Marketing Agency that you need. We provide
          growth-oriented Digital Marketing Services that leave a positive
          impact on your business. Our Digital Marketing consultants’ horizons
          are expanded across all areas of the digital landscape. We always go
          above and beyond and create customized strategies and campaigns for
          each of our clients which makes us the best Digital Marketing Company
          in the USA. Each individual in our team is eager to provide services
          with passion solely to achieve our client’s milestones as our rewards.
          That’s why you won’t just get a simple plain sheet with all the
          information that you don’t need, instead, we will make a personalized
          strategy for your business to ensure that it achieves what you need.
        </p>
      </div>
      <div className=" text-center py-14 flex flex-col gap-5 justify-center items-center">
        <h1 className="text-5xl font-bold">OUR CEO</h1>
        <img src="/images/landingPage/ceo.webp" alt="ceo" width={400} height={800} />
        <div>
          <h1 className="text-2xl font-semibold">Syed Zain Ul Hussain Zaidi</h1>
          <h1 className="text-lg">(CEO)</h1>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <TbMailBitcoin className="!text-xs" />
          <h1>zain@nexcelsolutions.com</h1>
        </div>
      </div>

      <section className="mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-10">
          <Collapse accordion>
        <Collapse.Panel
          header={
          <div className="flex justify-between items-center">
        <span className="text-lg md:text-xl font-semibold text-black">
          Do you Offer Free Consultations?
        </span>
        <span className="text-xl font-bold text-gray-500">+</span>
          </div>
          }
          key="1"
          className="px-6 py-4"
        >
          <p className="text-base md:text-lg text-gray-600">
          Absolutely! We believe the best partnerships start with a chat.
          In your free consultation, we'll talk about what you're trying
          to achieve online. No pressure, just a friendly chat to see how
          we can help you crush your goals. You'll walk away with clear
          ideas and a roadmap to online success!
          </p>
        </Collapse.Panel>
        <Collapse.Panel
          header={
          <div className="flex justify-between items-center">
        <span className="text-lg md:text-xl font-semibold text-black">
          What Makes Your Digital Solutions Special?
        </span>
        <span className="text-xl font-bold text-gray-500">+</span>
          </div>
          }
          key="2"
          className="px-6 py-4"
        >
          <p className="text-base md:text-lg text-gray-600">
          Our team rocks with passion and brains, and we don't just throw
          generic solutions at you. We listen to your goals, your
          struggles, and even your budget, then craft a plan that's
          perfect for you. Think of us as your digital bestie, cheering
          you on and making sure you get the results you deserve.
          </p>
        </Collapse.Panel>
        <Collapse.Panel
          header={
          <div className="flex justify-between items-center">
        <span className="text-lg md:text-xl font-semibold text-black">
          Do you Design and Develop Websites?
        </span>
        <span className="text-xl font-bold text-gray-500">+</span>
          </div>
          }
          key="3"
          className="px-6 py-4"
        >
          <p className="text-base md:text-lg text-gray-600">
          Websites are like your online home, so they got to be stunning
          and useful. We build everything from simple, eye-catching
          landing pages to full-blown online stores. We'll make sure your
          website is beautiful, easy to use, and converts visitors into
          happy customers.
          </p>
        </Collapse.Panel>
        <Collapse.Panel
          header={
          <div className="flex justify-between items-center">
        <span className="text-lg md:text-xl font-semibold text-black">
          Can you Help me Improve my Website SEO?
        </span>
        <span className="text-xl font-bold text-gray-500">+</span>
          </div>
          }
          key="4"
          className="px-6 py-4"
        >
          <p className="text-base md:text-lg text-gray-600">
          Getting found online can be tricky, but SEO is our superpower!
          We help you climb the search engine ladder by figuring out what
          words people are using to find stuff like yours. Then, we'll
          create relevancy throughout your website and build some online
          connections so everyone knows how awesome you are.
          </p>
        </Collapse.Panel>
        <Collapse.Panel
          header={
          <div className="flex justify-between items-center">
        <span className="text-lg md:text-xl font-semibold text-black">
          How do you Track and Measure the Results of Your Campaigns?
        </span>
        <span className="text-xl font-bold text-gray-500">+</span>
          </div>
          }
          key="5"
          className="px-6 py-4"
        >
          <p className="text-base md:text-lg text-gray-600">
          We utilize innovative tools to track every click, visit, and
          purchase on your website. Then, we turn that data into clear
          reports that show you exactly how your campaigns are doing.
          Think of it as a secret decoder ring for your online success.
          We use the insights to constantly tweak and improve your
          campaigns, making sure your money works extra hard for you.
          </p>
        </Collapse.Panel>
          </Collapse>
        </div>
      </section>


      <div className="bg-[#f9f9f9] py-14">
        <h2 className="text-4xl font-semibold text-center mb-12">Testimonials</h2>
        <Carousel
          autoplay
          autoplaySpeed={2500}
          dots={false}
          slidesToShow={3}
          swipeToSlide
          responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
          ]}
        >
          {[...Array(6)].map((_, i) => (
        <div key={i} className="flex flex-col items-center text-center px-4">
          <img
            src={`/images/testimonials/user${i + 1}.jpg`}
            alt={`User ${i + 1}`}
            className="w-20 h-20 rounded-full object-cover mb-4"
          />
          <div className="text-yellow-500 text-lg mb-2">★★★★★</div>
          <p className="text-base leading-relaxed mb-4">
            {i % 2 === 0
          ? "Simply put, I can confidently recommend Nexcel Solution’s App development services. The commitment to excellence was evident from the moment the conversation started right to the end."
          : "A company with professional individuals who are confident enough to meet deadlines and handle immediate changes. I needed assistance with my website’s UI/UX and seriously, they exceeded my expectations."}
          </p>
          <h3 className="font-semibold">{i % 2 === 0 ? "Michael" : "John"}</h3>
        </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default LandingPage;
