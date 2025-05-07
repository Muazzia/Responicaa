import HeroSectionWithCTA from "../../../components/HeroSectionWithCTA";
import ImageWithServiceDetails from "../../../components/ImageWithServiceDetails";
import { IoCall } from "react-icons/io5";
import TestimonialsSection from "../../../components/TestimonialsSection";
import { RecognizedByBest } from "../../landingPage/components/RecognizedByBest";
import ContactUs from "../../../components/ContactUs";
import { useRef } from "react";

const Sales = () => {
  const outBoundParaData = [
    {
      id: 1,
      heading: "Lead Generation",
      description:
        "We establish demand for your goods or services and provide free professional advice. Engaging your business in meaningful conversations with potential customers, understanding their needs, and offering cutting-edge solutions. By this, we not only guarantee getting qualified leads but also build better relationships with clients through Tele sales. Moreover, our BPO services provide an opportunity to gather valuable market insights and feedback directly from the source, aiding in refining marketing strategies.",
    },
    {
      id: 2,
      heading: "Appointment Setting",
      description:
        "Enabling you to target the best leads right away and maintain total control until the campaign achieves its goals. Our B2B tele sales services are carefully planned to work in connection with other sales and marketing efforts. We always prioritize scheduling appointments with clients using verified methods. Additionally, we can produce leads, qualify them, and maintain them until they are prepared for sale. With professional sales representatives closely watching the project and program, the campaign results in meetings being made with qualified leads.",
    },
    {
      id: 3,
      heading: "Market Research & Services",
      description:
        "Gaining valuable insight into your customer’s needs and attitudes through our B2C tele sales service services is one of our core values. With effective surveys and customer satisfaction reports, we give you the information you need to support strategic decisions, whether you want to market-test a new product or better understand your products’ standing. Our market research service can be used greatly to identify sales possibilities, which can help you save money by ensuring that your marketing efforts focus on the areas where they would be most effective.",
    },
    {
      id: 4,
      heading: "Cold Calling",
      description:
        "B2B cold calling services are a crucial sales approach that can play a major role in your business expansion. Attract new potential clients, market and sell goods or services with our quality tele sales services. We offer a specific kind of telesales that involves calling people who have not yet shown interest in the goods or services being given, but they surely will after our call. We analyze your target audience and develop unique scripts. We develop advanced and proven B2C cold call processes to help our customers which enhances recognition and overall reach.",
    },
    {
      id: 5,
      heading: "Product Promotion",
      description:
        "Improve the efficiency of your product promotion with our reliable and quality-assured product promotion campaign. Utilize our excellent tele sales service to promote your products in an effective manner. Our services are focused on promoting the success of your product through promotion-focused campaigns. We deliver the value of strong language and clear communication, ensuring that the advantages and characteristics of your product are effectively communicated to potential clients",
    },
    {
      id: 6,
      heading: "Database Selling",
      description:
        "Enabling our clients to monitor marketing campaigns in real-time, allowing for critical analysis of each campaign and the removal of barriers or problems are the key services of our database selling services. We stand out from the competition by avoiding duplication and rapidly contacting new potential clients. It’s crucial to remember that not all telesales databases are made equal. The success of telesales operations can be affected by the quality of the data, which can vary greatly.",
    },
    {
      id: 7,
      heading: "Follow Up Calls",
      description:
        "Effective telesales techniques with follow-up calls. Our calls provide a personalized touch that extends beyond the initial contact and promotes connections and conversations. After the initial engagement, potential clients are contacted in order to ensure their demands are met, and any issues will be resolved. We provide you with effective calls for customers to handle your calls and user-friendly tools to track your progress. Without having to make the call yourself, you have everything you need to engage your contacts.",
    },
    {
      id: 8,
      heading: "Customer Winback",
      description:
        "Customer retention strategies in telesales is a calculated move to maintain connections with previous clients who are still interested, and if they aren’t, unfortunately, we will make them. This aggressive yet great approach seeks to regain interest and loyalty by drawing on experience and earlier productive events. Our skilled telesales representatives use attractive communication and client retention management to address any issues that may have caused the consumer to lose interest. Businesses can win back clients by emphasizing the advantages, showing off developments, and providing unique offers.",
    },
  ];

  const inBoundParaData = [
    {
      id: 1,
      heading: "Customer Support & Service",
      description:
        "An essential component of telesales is outsourced customer support services, which we are highly aware of. That’s why our services include replying to customer questions, fixing problems, and offering support over the phone or through digital channels. It acts as a link between clients and the goods or services your business provides. We pride ourselves in increasing the total customer experience through effective inbound customer assistance and promoting trust and loyalty. Customers can be effectively guided, have their questions answered, and concerns resolved by our customer support service providers.",
    },
    {
      id: 2,
      heading: "Cross Selling & Up Selling",
      description:
        "Cross-selling and upselling are effective telesales strategies that can raise profits and improve client satisfaction. Cross-selling on of our effective strategies and practices recommending to customers other goods or services that enhance the value of their initial purchase. At the same time, our upselling services comprise convincing clients to upgrade to a higher-tier product/service with more features or advantages. Our skilled telesales representatives find opportunities to use these strategies by recognizing the demands and preferences of the consumers. They establish connections and show that they have a thorough awareness of the customer’s needs by adding relevant points during the conversation.",
    },
    {
      id: 3,
      heading: "Customer Inquiry",
      description:
        "Customer inquiry services are essential to telesales since they act as the first line of communication between the client and the customer service company. Specialized teams like ours offer clarification and develop interaction when new clients have inquiries or seek information about goods or services. A thorough understanding of the offerings and excellent communication are key components of a successful customer provider. Our agents are helpful and educated. Thus they calmly respond to consumer inquiries and provide insights and solutions that are suited to consumers’ specific requirements.",
    },
    {
      id: 4,
      heading: "Loyalty Program",
      description:
        "Loyalty program services play a vital role in enhancing customer relationships within the field of telesales. Providing loyal customers with incentives and awards, these programs seek to increase client loyalty. Services such as customer retention service emphasize the advantages of joining the loyalty program, such as exceptional discounts, early access to promotions, and offers targeted to specific interests through personalized interactions. You can use an effective strategy, in this case, loyalty programs by our telesales representatives, to increase customer loyalty & retention. Agents can promote a sense of appreciation and belonging in their clients by highlighting the importance of long-term commitment.",
    },
    {
      id: 5,
      heading: "Customer Feedback",
      description:
        "Customer feedback service works as a guide, pointing enterprises in the direction of better goods and services. Clients are requested to provide feedback following a sales encounter. Along with giving voice to their experiences, this feedback loop enables your business to pinpoint the strong selling points and potential growth areas. The customers feel heard, and businesses learn new things as a result. Efficiency is guaranteed by effective telesales feedback services. With exemplary services like ours, you can examine customer feedback collection to spot trends and chances to improve customer experiences.",
    },
    {
      id: 6,
      heading: "Product Information",
      description:
        "Product information is a crucial resource for efficient customer involvement in the world of telesales. This acts as an interface for phone calls between businesses and potential customers. Product information-gathering services like ours contribute to the development of trust and improve the consumer experience by providing brief and customized information about products/services. By using our information management system, businesses can provide a clear and consistent message about their goods, maintaining uniformity throughout sales contacts.",
    },
    {
      id: 7,
      heading: "Payment Support",
      description:
        "Our business payment support service provides efficient and secure transactions for clients and companies. These services make it easier to accept payments over the phone, allowing customers to purchase products at their convenience without having to complete any online forms or in-person transactions. Technical Support systems for telesales provide a range of choices, including credit card processing, digital wallets, and direct bank transfers. These techniques are adaptable and take varied client preferences into account.",
    },
  ];

  const whyChooseOurServiceData = [
    {
      id: 1,
      title: "Financial Efficiency",
      description:
        "It can be easy to believe that you can manage all of your business-to-business marketing internally, especially if your firm has a growing sales and marketing division.",
    },
    {
      id: 2,
      title: "Advanced Campaigns",
      description:
        "We work on a variety of tasks, from easy appointment setup to difficult lead generation, and everything in between.",
    },
    {
      id: 3,
      title: "Business Tele sales",
      description:
        "We can assist you with our corporate telesales experience no matter what or to whom you sell. We can assist you in creating the ideal B2B marketing campaign, regardless of whether your product is physical or digital, technical or general, unclear or predictable.",
    },
    {
      id: 4,
      title: "Pull Communication Style",
      description:
        "Pull communication involves the agent asking the proper questions to obtain the required information. As the conversation moves forward, the agent asks yes/no questions and considers the best solutions for the customers. The agent doesn't waste time obtaining information when communicating in this manner",
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
      <HeroSectionWithCTA
        primaryButtonLabel="Solutions"
        heading="Outsource Tele Sales Services"
        description="You may produce and close quality leads with the help of our professional inbound/outbound Tele Sales services.Our B2B lead generation service uses a variety of calling strategies to attract potential customers."
        secondaryButtonLabel="Schedule A Free Consultation"
        onSecondaryButtonClick={scrollToContact}
      />

      <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto py-5 md:py-10 space-y-5 md:space-y-0 md:flex md:gap-5 lg:gap-10">
        <RotatingCard
          label="OutBound Tele Sales Service"
          description="Our outbound call promotions involve proactively reaching out to potential customers via phone calls to present and highlight products, services, or offers."
          invertedCardLabel="How It Works"
          invertedCardDescription="Outbound tele sales service comprises strategic product sales to inform and draw in additional clients about an already-existing service or a newly-launched product. This includes making cold calls to clients who aren't very interested in a product."
          invertedCardButtonLabel="Click Here"
          invertedCardButtonUrl="asdf"
        />
        <RotatingCard
          label="In-Bound Tele Sales Services"
          description="The primary goal of inbound telemarketing is to get customers to call you without you ever having to pick up the phone. This is performed by inbound support centers through advertising on many platforms, such as your company website, social media, email, etc."
          invertedCardLabel="How It Works"
          invertedCardDescription="Outbound tele sales service comprises strategic product sales to inform and draw in additional clients about an already-existing service or a newly-launched product. This includes making cold calls to clients who aren't very interested in a product."
          invertedCardButtonLabel="Click Here"
          invertedCardButtonUrl="asdf"
          logoInverted={true}
        />
      </div>

      <ImageWithServiceDetails
        imageUrl="/images/bpo/callCenter.jpg"
        label="Why Choose Our Tele Sales Services"
        description="We provide you with insightful information about the needs, level of happiness, and unfulfilled wants of your clients when you hire us for tele sales services. Our strategic solutions are designed to improve customer connections while addressing your customers problems."
        data={whyChooseOurServiceData}
        imageClass="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[680px]"
      />

      <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto mt-10 md:mt-20">
        <div className="w-full text-center">
          <p className="text-3xl sm:text-4xl lg:text-[48px] font-semibold">
            Outbound-Tele Sales Services
          </p>
        </div>
        <div className="space-y-5 md:space-y-8 mt-5 md:mt-10">
          {outBoundParaData.map((item) => (
            <RenderParaWithHeading
              key={item.id}
              description={item.description}
              heading={item.heading}
            />
          ))}
        </div>
      </div>

      <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto my-10 md:my-20">
        <div className="w-full text-center">
          <p className="text-3xl sm:text-4xl lg:text-[48px] font-semibold">
            Inbound-Tele Sales Service
          </p>
        </div>
        <div className="space-y-5 md:space-y-8 mt-5 md:mt-10">
          {inBoundParaData.map((item) => (
            <RenderParaWithHeading
              key={item.id}
              description={item.description}
              heading={item.heading}
            />
          ))}
        </div>
      </div>

      <div className="px-4 md:px-10  xl:px-0 max-w-7xl mx-auto">
        <TestimonialsSection />
      </div>

      <div className="px-4 md:px-10  xl:px-0  max-w-7xl mx-auto mb-10">
        <RecognizedByBest />
      </div>

      <div>
        <ContactUs ref={contactRef} id="contact" />
      </div>
    </div>
  );
};

const RenderParaWithHeading = ({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) => {
  return (
    <div className="px-2 sm:px-0">
      <p className="font-semibold text-xl sm:text-2xl lg:text-[30px]">
        {heading}
      </p>
      <p className="text-sm sm:text-base text-black/60 mt-2">{description}</p>
    </div>
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
        <div className="absolute w-full h-full bg-gradient-to-b from-[#004aad] to-[#3B82F6]  text-white flex flex-col items-center justify-center px-5 text-center gap-3 sm:gap-5 backface-hidden">
          <span
            className={`transform transition-transform duration-700 ${
              logoInverted ? "rotate-260" : ""
            }`}
          >
            <IoCall
              color={"white"}
              size={40}
              className="sm:w-[50px] sm:h-[50px]"
            />
          </span>
          <p className="text-xl sm:text-2xl lg:text-[26px] font-semibold">
            {label}
          </p>
          <span className="text-xs sm:text-sm md:text-[14px]">
            {description}
          </span>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gradient-to-b from-[#004aad] to-[#3B82F6]  text-white flex flex-col items-center justify-center px-5 text-center gap-3 sm:gap-5 backface-hidden transform rotate-x-180">
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
            className="mt-2 px-3 py-1 sm:px-4 sm:py-2 bg-[#004aad] cursor-pointer text-white rounded text-sm sm:text-base"
          >
            {invertedCardButtonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sales;
