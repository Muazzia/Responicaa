import { useRef } from "react";
import ContactUs from "../../components/ContactUs";
import TestimonialsSection from "../../components/TestimonialsSection";
import { RecognizedByBest } from "../landingPage/components/RecognizedByBest";
import MobileDevelopmentCard from "./components/mobileDevelopmentCard";
import ServiceBox from "../bpo/components/BpoServiceBox";
import { ROUTES } from "../../constants";

const DigitalSolutions = () => {
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
      <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="my-4">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-red-700 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[39px] max-w-6/10 leading-8 sm:leading-9 md:leading-10">
              Bespoke Digital Solutions For Guaranteed Better Results
            </h1>
            <p className="text-sm sm:text-base max-w-6/10">
              Responica is a top-choice for all scale of businesses in need of
              IT and digital solutions. We focus on strategic consulting,
              creation, and effective use of ERP. All while making sure that
              your business takes full advantage of every process through our
              suggested roadmap. It's a promise that our team makes whenever we
              work with our clients, partners, and community.
            </p>
          </div>
          <div className="w-full h-[200px] sm:h-[270px] overflow-hidden flex justify-center items-center rounded-lg my-6">
            <img
              src="/images/bpo/world.webp"
              alt="image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center text-center gap-8">
            <h1 className="text-red-700 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Bespoke Digital Solutions For Guaranteed Better Results
            </h1>
            <p className="text-sm sm:text-base">
              Responica is a top-choice for all scale of businesses in need of
              IT and digital solutions. We focus on strategic consulting,
              creation, and effective use of ERP. All while making sure that
              your business takes full advantage of every process through our
              suggested roadmap. It's a promise that our team makes whenever we
              work with our clients, partners, and community.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 my-12">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-red-700 font-semibold text-2xl sm:text-3xl md:text-4xl mb-4 text-center lg:text-left">
              User-Centric UI/UX Design
            </h2>
            <p className="text-sm sm:text-base mb-4">
              We believe in a continuous design approach in which designers
              closely monitor user needs. Choose our{" "}
              <span className="text-red-700 font-semibold">
                UI/UX design services
              </span>{" "}
              and get a variety of research and design approaches to involve
              users at every level. The design process to create products should
              always be very accessible and useful so that your business gets
              its online presence exactly as you imagine it to be.
            </p>
            <p className="text-sm sm:text-base">
              While the user experience plays a significant role in the digital
              era, there are other things worth considering as well. A website
              must be user-friendly, visually appealing, and smooth in its
              interactions to be effective. Thanks to our talented UI/UX
              developers, they can translate your ideas into by paying close
              attention to user behavior and preferences.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <img
              src="/images/digitalSolutions/ux-ui.png"
              alt="UI/UX Design Illustration"
              className="object-contain w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-4 text-center">
            E-Commerce Stores For Better Reach
          </h2>
          <div className="flex flex-col md:flex-row gap-10 mb-4">
            <p className="text-sm sm:text-base md:w-1/2">
              E-commerce has completely changed the approach toward shopping.
              With businesses streamlining themselves digitally at a rapid pace,
              the competition is stronger than ever. So, if you want your
              business to stand out in today’s competitive marketplace, your
              online store needs to be more than just a collection of products.
              Worry not, our{" "}
              <span className="text-red-700 font-semibold">
                ecommerce website development service
              </span>{" "}
              enables your company to not only survive but also prosper, trust
              us.
            </p>
            <p className="text-sm sm:text-base md:w-1/2">
              Online success and expansion are possible for any business with
              our quality services. E-commerce’s open, expansive, and intensely
              competitive environment dramatically benefits consumers. 80% of
              people are more inclined to purchase in settings with integrated,
              seamless digital shopping experiences, and that’s what we create.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/images/digitalSolutions/e-commerce.png"
            alt="E-Commerce Illustration"
            className="object-contain w-full h-auto"
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-8 my-12">
          <h2 className="text-red-700 font-semibold text-2xl sm:text-3xl md:text-4xl mb-4 text-center">
            Content Management Systems Mastery (CMS)
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mb-4">
            <div className="lg:w-1/2 text-left">
              <p className="text-sm sm:text-base mb-4">
                Unlock the true potential of your online platform with our
                expert{" "}
                <span className="text-red-700 font-semibold underline">
                  Content Management System services
                </span>{" "}
                ? Great call. Your web platform can reach its full potential
                with the assistance of skilled experts like ours with an
                extensive knowledge of CMS. Once your website’s content is
                accessible, it allows you to focus on giving users the most
                incredible experience possible.
              </p>
              <p className="text-sm sm:text-base">
                We will provide you with a range of CMS systems so that you can
                choose the ideal one for your website. We have you covered for
                anything from WordPress and Joomla to Drupal and beyond. Not
                sure about the modification, integration, and installation of
                essential plugins and extensions? No worries, we’ll walk you
                through it and turn it into an effective system that you always
                wanted.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
              <img
                src="/images/digitalSolutions/cms.png"
                alt="UI/UX Design Illustration"
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 my-12">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-4 text-center">
            Personalized Mobile App Development
          </h2>
          <p className="text-sm sm:text-base text-left">
            Responica custom app development services take great satisfaction in
            providing top-notch mobile app development services. We transform
            your business norms into intuitive and powerful digital experiences,
            all thanks to our team of skilled developers, imaginative designers,
            and strategic strategists. Regarded as industry innovators, our
            commitment is to constantly push the limits of what is possible with
            the approach to innovation and collaboration.
          </p>
          <p className="text-sm sm:text-base text-left">
            To ensure that your vision is accurately realized, we believe in
            continual contact and your involvement at every level. Our flexible
            and innovative development approach enables us to quickly adjust to
            shifting needs, resulting in a smooth development process and a
            product that surpasses expectations. We know that developing mobile
            apps means much more for your business than just the app. Because it
            requires developing interactions that engage users on a deeper
            level. Worry not, we are inspired by a passion for innovation, a
            commitment to excellence, and a drive to create valuable apps.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {madItems.map((item) => (
              <MobileDevelopmentCard
                key={item.id}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 my-12">
          <h2 className="text-red-700 font-semibold text-2xl sm:text-3xl md:text-4xl text-center">
            Seamless Cloud Integration
          </h2>
          <p className="text-sm sm:text-base text-center">
            Businesses increasingly use cloud solutions to improve services and
            simplify operations in today’s fast-paced digital environment. Our{" "}
            <span className="text-red-700 font-semibold underline">
              cloud management services
            </span>{" "}
            aspire to provide you with the tools and knowledge you require to
            master the cloud landscape, ensuring a smooth transition and top
            performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-black font-semibold text-xl sm:text-2xl">
                Fast Server Integrations
              </h3>
              <p className="text-sm sm:text-base">
                The flexibility and expansion of your company rely on improved
                and better technology in this digital era through immediate
                server integration. Our cloud data service focuses on providing
                quick and adequate server integrations, so you can start using
                the cloud immediately. We focus on performance without
                sacrificing security, employing load-balancing strategies, and
                optimizing server setups.
              </p>
              <p className="text-sm sm:text-base">
                Already on cloud? No worries, our experts can successfully
                integrate cloud servers into existing infrastructure, ensuring
                they operate in unison with it. Moreover, we take a step further
                and keep you current on the most recent developments in the
                cloud computing industry.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-black font-semibold text-xl sm:text-2xl">
                Smooth Data Transferring
              </h3>
              <p className="text-sm sm:text-base">
                The effective movement of data is among cloud integration’s most
                essential components. Our staff specializes in making this
                process simple and seamless, whether you’re moving from a
                physical database or wanting to sync your digital data across
                several cloud platforms. We know the importance of your data
                thus we ensure that every bit is delivered safely, precisely,
                and without any interruption.
              </p>
              <p className="text-sm sm:text-base">
                Before we start the shift, we carefully examine your current
                data architecture, spotting possible problems and developing
                specialized solutions. We put measures in place that reduce
                interruption and stop data loss during migration, ensuring a
                smooth move to the cloud.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 my-12">
          <h2 className="text-black font-semibold text-2xl sm:text-3xl md:text-4xl my-4 text-center">
            Custom Solutions To Stay Ahead
          </h2>
          <p className="text-sm sm:text-base text-left py-2">
            Businesses continuously seek methods to remain ahead of rivals and
            exceed the competition in the hectic digital market. Utilizing the
            strength of digital services is a crucial component to stay ahead.
            We are experts in transforming organizations through our specialized{" "}
            <span className="text-red-700 font-semibold underline">
              digital transformation
            </span>{" "}
            techniques.
          </p>
          <p className="text-sm sm:text-base text-left py-2">
            We go beyond an approach that fits all. We understand that every
            company has different objectives, problems, and desires. We adopt a
            tailored approach to create solutions that match your goals. Whether
            you want to improve client interaction, maximize operational
            effectiveness, and spur revenue development, we have the right
            solution for you.
          </p>
          <p className="text-sm sm:text-base text-left py-2">
            Our extensive team of specialists who bring a lot of experience to
            the table is something we take great pride in. Their varied talent
            sets, including seasoned software engineers, imaginative UX/UI
            design services, and data-driven strategists who can successfully
            address even the most challenging problems.
          </p>
          <p className="text-sm sm:text-base text-left py-2">
            We’ve developed our capacity for innovation and adaptation via a
            history of productive collaborations with partners from various
            sectors. Our complete solutions not only take care of your immediate
            demands but are also future-proof and equipped to change as your
            company does as it expands.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 my-12">
          <h2 className="text-red-700 font-semibold text-2xl sm:text-3xl md:text-4xl">
            Achieve More
          </h2>
          <p className="text-sm sm:text-base text-center">
            We at Responica are aware that businesses must embrace digital
            solutions to succeed in today’s contemporary marketplace. Thus, we
            have opened the door for your achievement by converting obstacles
            into chances and concepts into realities. We build a bridge to your
            digital future with innovative solutions. Our commitment to
            remaining on the cutting edge of industry trends guarantees that our
            solutions are current and dependable in the long run. We stay your
            reliable advisor, helping you navigate the digital world with
            assurance as it develops, it’s a promise. Join us to embrace the
            future, and let our digital solutions expand your business
            potential.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#AFC6E6] to-[#E9E6EF] w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12 max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          {services.map((service) => (
            <ServiceBox
              key={service.id}
              logo={
                <img
                  src={service.imgSrc}
                  alt={service.imgAlt}
                  className="w-12 h-12"
                />
              }
              title={service.title}
              description={service.description}
              url={service.url} // Adjust the URL as needed
            />
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 my-12">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-red-700 font-semibold text-2xl sm:text-3xl md:text-4xl mb-4">
              Digital Solutions Tailored for Your Business
            </h2>
            <p className="text-sm sm:text-base mb-4">
              Welcome to the cutting-edge digital solution providers, where you
              can get innovative answers to your business’s technological
              problems. Our hardworking team is skilled at creating smart
              solutions that help your business grow. We convert difficult
              issues into efficient solutions by having a solid knowledge of
              modern technologies.
            </p>
            <p className="text-sm sm:text-base">
              Whether you’re establishing a business and looking to improve your
              online appearance or a startup looking for a solid digital
              foundation, we’re here to create the right solutions that produce
              effective results. Join us and set off on a digital transformation
              path that will help you to stand out in the competitive business
              environment of today.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-red-700 text-white px-6 py-2 rounded-lg mt-4 cursor-pointer"
            >
              Get in touch
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <img
              src="/images/digitalSolutions/solutions.jpg"
              alt="Code Preview"
              className="object-contain w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-10">
          <TestimonialsSection />
          <RecognizedByBest />
          <ContactUs ref={contactRef} />
        </div>
      </div>
    </>
  );
};

export default DigitalSolutions;

const madItems = [
  {
    id: 1,
    imgSrc: "/images/digitalSolutions/data-collection.png",
    imgAlt: "Data Input Icon",
    title: "Data Input",
    description:
      "From refining ad targeting to crafting tailored campaigns, we first use your brand data for relevance as the currency of engagement.",
  },
  {
    id: 2,
    imgSrc: "/images/digitalSolutions/booking.png",
    imgAlt: "Availability Icon",
    title: "Availability",
    description:
      "In-app purchases, subscription models, and exclusive content are introduced next, acting as additional revenue streams.",
  },
  {
    id: 3,
    imgSrc: "/images/digitalSolutions/audience.png",
    imgAlt: "Audience Icon",
    title: "Audience",
    description:
      "Offering seamless navigation and a visually pleasing experience, encouraging users to explore and interact with more readily.",
  },
  {
    id: 4,
    imgSrc: "/images/digitalSolutions/booking.png",
    imgAlt: "Revenue Icon",
    title: "Revenue",
    description:
      "Once the development stage is completed, your business will generate revenue through in-app purchases, subscriptions, and premium features.",
  },
];

const services = [
  {
    id: 1,
    imgSrc: "/images/digitalSolutions/service/web.png",
    imgAlt: "Web Development Icon",
    title: "Web Development",
    description:
      "Maximize your online presence with elements including best SEO practices, catering to your targeted audience all while following your branding guidelines.",
    url: ROUTES.WEBDEVELOPMENT, // Use route from ROUTES
  },
  {
    id: 2,
    imgSrc: "/images/digitalSolutions/service/mobile.png",
    imgAlt: "Mobile App Development Icon",
    title: "Mobile App Development",
    description:
      "Get effective mobile apps that satisfy your user needs, strengthen brand identity all while promoting your business images.",
    url: ROUTES.MOBILEDEVELOPMENT, // Use route from ROUTES
  },
  {
    id: 3,
    imgSrc: "/images/digitalSolutions/service/digital.png",
    imgAlt: "Digital Marketing Icon",
    title: "Digital Marketing",
    description:
      "Boost your brand's visibility and engagement with our tailored digital marketing strategies, including SEO, PPC, and social media marketing.",
    url: ROUTES.DIGIALMARKETING, // Use route from ROUTES
  },
];
