import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import ContactUs from "../../../components/ContactUs";
import HeroSectionWithCTA from "../../../components/HeroSectionWithCTA";
import TestimonialsSection from "../../../components/TestimonialsSection";
import { RecognizedByBest } from "../../landingPage/components/RecognizedByBest";
import { FaCircleCheck } from "react-icons/fa6";
import { useRef } from "react";

export const MobileDevelopment = () => {
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
        description="Transforming your ideas into modern, high-quality, and flawless mobile app solutions is our specialty! With our full-cycle custom mobile development services, we help you to transform your idea into a product that is ready for the market. Our experienced staff ensures seamless delivery and provides continuous technical assistance to ensure the success of your app."
        heading="Custom Mobile App Development Services"
        primaryButtonLabel="Solutions"
        secondaryButtonLabel="Schedule A Free Consultation"
        onSecondaryButtonClick={scrollToContact}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div>
          <div className="mt-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-[#004aad]">
              Tailored Mobile App Development Services
            </h2>
            <p className="mt-4 text-gray-700 text-sm sm:text-base">
              Achieve outstanding performance on popular platforms like Android
              and iOS with our tailored mobile apps, which were created using
              rapid mobile app development services. Innovative mobile
              applications for Android, iOS, and cross-platform digital
              solutions are our team's areas of expertise.
            </p>
            <p className="mt-4 text-gray-700 text-sm sm:text-base">
              We ensure that your mobile app is developed using cutting-edge
              technologies because we have a solid knowledge of the most recent
              frameworks and architectures. We develop mobile solutions that
              bring the idea to life with smooth user experiences and strong
              functionality.
            </p>
            <h3 className="mt-10 text-3xl sm:text-4xl lg:text-5xl text-center text-gray-700">
              Let us <span className="text-[#004aad]">Create</span> An App For
              Your Business
            </h3>
            <p className="mt-4 text-gray-700 text-sm sm:text-base">
              Our process for creating unique mobile apps includes innovation,
              technology, and strategic thinking. The process begins with an
              in-depth evaluation step in which we examine your business model
              and user expectations. We brainstorm and create the app's UI/UX
              design while considering your business's unique features.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <RotatingCard
                label="Android App Development Services"
                description="In the rapidly evolving digital landscape, having an Android app for your business has become more than just a trend – it's a strategic necessity."
                invertedCardLabel="Why Android?"
                invertedCardDescription="Android apps provide businesses with a vast user base and unparalleled customization opportunities, making them a strategic choice for growth."
                invertedCardButtonLabel="Learn More"
                invertedCardButtonUrl="/android-development"
              />
              <RotatingCard
                label="iOS App Development Services"
                description="The iOS ecosystem, characterized by its user-friendly interface and robust security measures, presents businesses with a powerful platform to enhance their digital presence."
                logoInverted={true}
                invertedCardLabel="Why iOS?"
                invertedCardDescription="iOS apps offer a premium user experience and access to a loyal customer base, ensuring your business stands out in the competitive market."
                invertedCardButtonLabel="Learn More"
                invertedCardButtonUrl="/ios-development"
              />
            </div>
            <h3 className="mt-10 text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-[#004aad]">
              Seamless Experience With Our Mobile App Development Services
            </h3>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
                  Bridging the Gap Between Design and Functionality
                </h4>
                <p className="mt-2 text-gray-700 text-sm sm:text-base">
                  In the rapidly evolving landscape of mobile experiences, the
                  composition between design and functionality has never been
                  more crucial. Our custom app development services excel at
                  creating a seamless bridge between these two vital aspects. We
                  understand that a visually stunning app with intuitive
                  functionality can frustrate users, while a highly functional
                  app with lackluster ui/ux design might need help to engage.
                  Our approach combines cutting-edge design principles with
                  robust functionality, ensuring that your mobile app looks
                  appealing and performs flawlessly.
                </p>
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
                  Ensuring User-Centric Custom Mobile App Solutions
                </h4>
                <p className="mt-2 text-gray-700 text-sm sm:text-base">
                  At the heart of our mobile development services lies a deep
                  commitment to crafting user-centric mobile app solutions.
                  Every business has unique requirements, and our experienced
                  designers and web development experts collaborate closely with
                  you to understand your audience, goals, and brand identity.
                  This empowers us to create tailor-made mobile apps that
                  resonate with your users and align perfectly with your
                  business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
              Why Choose Our Mobile App Development Services?
            </h2>
            <p className="mt-4 text-sm sm:text-base">
              Our goal is to make your ideas come to life through amazing
              websites that engage and involve your audience. Our skilled team
              creates customized
              <span className="text-[#004aad] font-semibold">
                {" "}
                cloud solutions
              </span>
              , guaranteeing easy navigation, attractive designs, and top
              performance on Google Play store. We produce outcomes that advance
              your online presence with an emphasis on user experience and
              cutting-edge technology. Choose us if you want a website that
              stands out and effectively communicates your message.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">
                  <FaCircleCheck />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold">
                    Android App Development
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    The widespread use of hardware presents both unique
                    opportunities and challenges for the Android operating
                    system. No matter what stage of development your app is in,
                    our senior developers are able to reduce the challenges
                    offered to app design while supporting app production and
                    help place it in the top rankings of Google Play.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className=" text-2xl">
                  <FaCircleCheck />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold">
                    Cross-Platform
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Bypassing native development can shorten the time it takes
                    to create a product, but doing so requires top talent to
                    adhere to the right process. To keep and satisfy users, the
                    influence on UX design must be kept to a minimum. If done
                    right, developers may make the most of native platforms'
                    features while yet utilizing shared business logic.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/images/digitalSolutions/smartphone.jpg"
              alt="Mobile App Development"
              className="rounded-lg shadow-lg w-full"
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

interface RotatingCardProps {
  label: string;
  description: string;
  logoInverted?: boolean;
  invertedCardLabel: string;
  invertedCardDescription: string;
  invertedCardButtonLabel: string;
  invertedCardButtonUrl: string;
}

const RotatingCard = ({
  description,
  label,
  logoInverted = false,
  invertedCardButtonLabel,
  invertedCardButtonUrl,
  invertedCardDescription,
  invertedCardLabel,
}: RotatingCardProps) => {
  return (
    <div className="w-full h-[300px] md:h-[350px] perspective group">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-x-180">
        {/* Front Side */}
        <div className="absolute w-full h-full bg-gradient-to-b from-[#004aad] to-[#3B82F6] text-white flex flex-col items-center justify-center px-5 text-center gap-3 sm:gap-5 backface-hidden">
          <div className="text-5xl mb-4">
            {logoInverted ? <FaAppStoreIos /> : <FaGooglePlay />}
          </div>
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-medium">
            {label}
          </h4>
          <p className="mt-2 text-sm sm:text-base">{description}</p>
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full bg-gradient-to-b from-[#004aad] to-[#3B82F6] text-white flex flex-col items-center justify-center px-5 text-center gap-3 sm:gap-5 backface-hidden transform rotate-x-180">
          <p className="text-lg sm:text-xl font-semibold">
            {invertedCardLabel}
          </p>
          <span className="text-xs sm:text-sm md:text-[14px]">
            {invertedCardDescription}
          </span>
          <button
            onClick={() => {
              console.log(invertedCardButtonUrl);
            }}
            className="mt-2 px-3 py-1 sm:px-4 sm:py-2 border-2 border-white text-white rounded-full text-sm sm:text-base hover:bg-[#004aad] hover:text-white transition-colors"
          >
            {invertedCardButtonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
