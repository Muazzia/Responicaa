import ContactUs from "../../../components/ContactUs";
import HeroSectionWithCTA from "../../../components/HeroSectionWithCTA";
import ImageWithServiceDetails from "../../../components/ImageWithServiceDetails";
import TestimonialsSection from "../../../components/TestimonialsSection";
import { RecognizedByBest } from "../../landingPage/components/RecognizedByBest";

const CustomerSupport = () => {
  const whyChooseOurServiceData = [
    {
      id: 1,
      title: "Quick and Flexible",
      description:
        "Your time and urgent support needs are given top priority by our team. We cut down on wait times and respond to your questions right away to help you solve problems more quickly.",
    },
    {
      id: 2,
      title: "Personalised Support",
      description:
        "Our agents are attentive to your demands and are able to grasp them. We provide individualised support and provide solutions that are specifically designed to solve your needs.",
    },
    {
      id: 3,
      title: "Knowledgeable Experts",
      description:
        "Our knowledgeable support staff regularly attends training to stay current with market trends and has in-depth product expertise. You can rely on them to provide honest and trustworthy information about our goods and services.",
    },
    {
      id: 4,
      title: "Multichannel Support",
      description:
        "For your convenience, we offer multiple help methods including live chat, email, and phone. Contact us using your favorite method of communication for smooth conversation.",
    },
  ];
  return (
    <div className="">
      <HeroSectionWithCTA
        primaryButtonLabel="Solutions"
        primaryButtonUrl="/digitalSolutions"
        heading="Customer Support Service"
        description="Greetings to our dedicated customer support outsourcing service department, where we put your satisfaction first. We are dedicated to providing unmatched support that exceeds expectations because we recognize that every encounter you have with us forms your overall impression of us."
        secondaryButtonLabel="Schedule A Free Consultation"
        secondaryButtonUrl="contact"
      />

      <div className="px-4 md:px-8 xl:px-0 max-w-7xl mx-auto mt-8 md:mt-12">
        <div className="flex items-center justify-center">
          <p className="text-primary font-semibold text-3xl sm:text-4xl lg:text-[48px] text-center">
            How Does Customer Support Service Work?
          </p>
        </div>
        <div className="space-y-4 mt-4 text-sm sm:text-base">
          <p>
            Customer support outsourcing service is the cornerstone of any
            successful organization in today's connected world. When a problem
            emerges, it's the comforting voice on the other end of the phone,
            the guiding hand that turns issues into solutions.
          </p>
          <p>
            Customer service is all about comprehension and empathy. Customers
            contact the support staff for assistance with problems or questions.
            This can occur through various channels, including live chats,
            emails and phone calls. Every engagement allows firms to demonstrate
            their dedication to client pleasure.
          </p>
          <p>
            Reliable systems and organized databases play a vital role behind
            the scenes. A smooth transition between engagements is made possible
            by the safe storage of customer information. Documenting frequently
            occurring problems enables agents to quickly resolve issues by
            referring to previous fixes.
          </p>
          <p>
            The attractiveness of BPO Services also rests in the human element.
            With highly customer support experience employees, we engage clients
            with patience and respect, equipped with in-depth product knowledge
            and interpersonal competence. When a solution is found, they join in
            the victory and understand the difficulties of others. A routine
            contact becomes a memorable one due to this individualized approach.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-8 xl:px-0 max-w-7xl mx-auto mt-8 md:mt-12">
        <div className="flex items-center justify-center">
          <p className="text-primary font-semibold text-3xl sm:text-4xl lg:text-[48px] text-center">
            Key Features of Customer Support
          </p>
        </div>
        <div className="mt-4 text-sm sm:text-base">
          <p>
            Excellent customer support outsourcing service is the crucial
            element that can distinguish your company in today's competitive
            business landscape. Inbound customer service representative at
            Nexcel Solutions understand that customer assistance is more than a
            convenience. It is a symbol of your company's dedication to its
            consumers. Our customer service manager exceeds expectations to
            ensure clients' interactions with brands are easy, pleasurable, and
            memorable.
          </p>
        </div>

        <div className="mt-8 md:mt-12">
          <RenderDescriptionTextWithLabels />
        </div>

        <div className="mt-8 md:mt-12">
          <p className="text-center text-primary font-semibold text-3xl sm:text-4xl lg:text-[48px] px-4 md:px-10">
            How Does Customer Support Service Benefit Businesses
          </p>
          <div className="space-y-4 mt-4 text-sm sm:text-base">
            <p>
              A solid and devoted client base is essential for sustained success
              in the fast-paced and constantly evolving business sector. An
              efficient customer support outsourcing service is one of the most
              effective instruments at a company's disposal for doing this.
              Today's customer service goes beyond the conventional job of
              resolving problems to become a strategic asset that may
              significantly influence many different aspects of a business.
            </p>

            <div className="mt-4">
              <p className="font-bold text-base sm:text-[17px]">
                Increased Customer Satisfaction
              </p>
              <p className="mt-2">
                Customer satisfaction is the cornerstone of any flourishing
                company. Customer satisfaction increases when they are treated
                with respect and have their issues resolved quickly. A skilled
                customer support specialist is a safety net, capturing any
                problems or complaints before they get out of hand. A feeling of
                confidence and dependability in the brand is produced through
                prompt and efficient replies to questions, issues, or
                complaints.
              </p>
              <p className="mt-2">
                A satisfied customer is likely to remain with the business and
                recommend it to others, enhancing its reputation. Since the
                introduction of social media, a single good customer support
                experience has the power to spread across platforms and produce
                organic marketing that money can't buy.
              </p>
            </div>

            <div className="mt-4">
              <p className="font-bold text-base sm:text-[17px]">
                Improved Client Engagement
              </p>
              <p className="mt-2">
                Engagement comprises all of a customer's interactions with a
                brand, not only marketing activities. Customer support
                outsourcing service is essential to this connection. Every
                meeting is a chance to demonstrate the brand's dedication to its
                clients. Customers that have engaging customer support feel
                heard, understood, and valued.
              </p>
              <p className="mt-2">
                Customer service can also provide customized guidance and
                solutions, strengthening the bond between the client and the
                business. These interactions provide companies with information
                about client preferences and problems, which can assist with
                product development and marketing plans.
              </p>
            </div>

            <div className="mt-4">
              <p className="font-bold text-base sm:text-[17px]">
                Increased Conversions
              </p>
              <p className="mt-2">
                Effective customer support outsourcing service through improving
                conversions can directly impact a company's bottom line. Quick
                and detailed replies from customer service associates can
                alleviate worries from potential consumers who might have
                questions or uncertainties about a product or service,
                increasing the possibility that they will purchase.
              </p>
              <p className="mt-2">
                Additionally, a knowledgeable and enthusiastic consumer is more
                inclined to investigate other tele sales services or upgrades,
                increasing the likelihood of upselling. Customer support
                specialists who thoroughly grasp the items may help consumers
                make decisions that suit their needs, increasing average
                transaction values.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12">
          <p className="text-center text-3xl sm:text-4xl lg:text-[48px] text-black px-4 md:px-10">
            Why Choose Nexcel as Your Customer Support Provider
          </p>

          <div className="mt-4 text-sm sm:text-base">
            <p>
              Nexcel Solutions believes that assistance is more than simply
              giving advice, it's about establishing deep connections. With
              skill, compassion, and dependability at every touchpoint,we
              perfectly capture the soul of any brand. By working with us,
              clients invest in a superior customer support experience that
              fosters happiness, loyalty, and eventually growth rather than
              merely outsourcing assistance. With Nexcel, you can experience the
              service of the future.
            </p>
          </div>

          <div className="mt-8 md:mt-12">
            <ImageWithServiceDetails
              imageUrl="/images/bpo/customerCare.webp"
              label="Why Choose Our Customer Support?"
              description="If you have any inquiries, worries, or problems, our devoted customer service team is ready to help. Whether you want to learn more about our services, need assistance with a product, or need technical support, we can help."
              data={whyChooseOurServiceData}
              imageClass="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[680px]"
            />
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
        <ContactUs />
      </div>
    </div>
  );
};

const RenderDescriptionTextWithLabels = () => {
  const data = [
    {
      id: 1,
      label: "Style",
      description:
        "Your customer service should have a unique personality, much like your brand. We collaborate closely with you to adapt our customer support  experienced approach reflect your company’s values perfectly. With flexible systems, we ensure that clients feel they are engaging with an extension of their brand, whether it be a formal tone, a personable manner, or a unique combination of both.",
    },
    {
      id: 2,
      label: "Voice and tone",
      description:
        "Communication is an art; we are the artists who ensure that clients’ messages are expressed with the highest sensitivity and clarity. Through skilled customer support specialists, we communicate with your consumers effectively by using a variety of voices and tones. We hit the appropriate note, building a stronger emotional connection between your company and its audience, whether addressing issues or celebrating accomplishments.",
    },
    {
      id: 3,
      label: "Quality",
      description:
        "Nexcel customer support outsourcing service vocabulary includes something other than blandness. We are dedicated to providing outstanding support that goes above and beyond. Even the most complex questions can be handled by our Technical support associates since they are knowledgeable, well-equipped, and well-resourced. By upholding high standards, we address problems and provide your consumers with a long-lasting sense of reliability.",
    },
    {
      id: 4,
      label: "Speed",
      description:
        "Time is of the essence in the digital era. Nexcel customer service associates respond to requests as quickly as possible. The pillars of our service are prompt response times, quick issue resolution, and proactive support. By placing a high value on your customers’ time, we improve their whole experience and foster trust and loyalty.",
    },
    {
      id: 5,
      label: "Coverage",
      description:
        "As the clients are located worldwide, so should your help. Your clients can reach us for support no matter where they are because of our comprehensive coverage. Time zone variations are no longer a barrier since we offer 24/7 service, building a connection between your brand and its consumers wherever they may be.",
    },
    {
      id: 6,
      label: "Process",
      description:
        "A simplified and efficient support system is in operation in the background. Every customer support experience is handled with care due to the careful path we’ve created. With methodology, we increase efficiency while retaining the unique human touch that distinguishes any company from competitors, from the first point of contact to issue resolution and follow-up.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[25px]">
      {data.map((item) => (
        <div key={item.id} className="flex flex-col items-center p-4 md:p-0">
          <p className="text-black font-semibold text-xl sm:text-2xl lg:text-[30px] text-center">
            {item.label}
          </p>
          <p className="text-black mt-2 sm:mt-4 text-sm sm:text-base text-center">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CustomerSupport;
