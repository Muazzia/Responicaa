import { useRef } from "react";
import ContactUs from "../../../components/ContactUs";
import HeroSectionWithCTA from "../../../components/HeroSectionWithCTA";
import ImageWithServiceDetails from "../../../components/ImageWithServiceDetails";
import TestimonialsSection from "../../../components/TestimonialsSection";
import { RecognizedByBest } from "../../landingPage/components/RecognizedByBest";
import WebDevService from "./components/webDevService";

const WebDevelopment = () => {
  const whyChooseOurServiceData = [
    {
      id: 1,
      title: "Custom Web Development",
      description:
        "To turn your business ideas into fact, your company and our web developers work closely together. We build your web presence by utilizing open-source platform ideas while utilizing cutting-edge technology to keep your business secure. You can design anything with the aid of our services, including simple content management systems, educational websites, personalized apps, and online shops.",
    },
    {
      id: 2,
      title: "Streamlined User-Friendly Web Solutions",
      description:
        "The creation of clear, user-friendly websites and applications that provide a unique user experience is our aim. We start by learning what your business needs in a new website or application. We do market and competitor research for the custom Development and design process and produce the necessary documentation. We develop a project plan to provide unique and innovative work.",
    },
    {
      id: 3,
      title: "Dynamic Design and Seamless Integration   ",
      description:
        "Our web development company makes sure to give the website design samples life by integrating them with CMS and adding content. Before the website is released, we provide you with a link to a trial address so you can check out the final design. Teach your staff how to manage the necessary access to your website and application as well. We offer a variety of custom web development services.",
    },
    {
      id: 4,
      title: "Responsive & Intuitive Web Development",
      description:
        "Our best web development company takes care of all screen lengths, and content exposure is chosen by designers. We make sure that the logical path progresses by putting the most crucial details and content in the front.",
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
        description="Welcome to Nexcel Solutions, your trusted partner in shaping digital dreams into reality. As a leading web development services company, we specialize in transforming innovative ideas and business goals into powerful, user-friendly websites and web applications. Our dedicated team of skilled developers, designers, and strategists collaborates seamlessly to deliver tailor-made solutions that not only meet but exceed your expectations."
        heading="Web Development Services"
        primaryButtonLabel="Digital Solutions"
        secondaryButtonLabel="Schedule A Free Consultation  "
        onSecondaryButtonClick={scrollToContact}
      />
      <div className="px-4 md:px-8  xl:px-0  max-w-7xl mx-auto py-[40px] space-y-[30px]">
        <div>
          <div className="text-center">
            <p className="text-[25px] lg:text-[48px] font-semibold text-primary">
              Our Process of Web Development Services
            </p>
            <p className="text-[16px] lg:text-[14px] mt-4 lg:mt-0">
              When developing the layout and overall appearance of the website,
              many factors must be considered. To avoid becoming overloaded, the
              process of web design creation can be divided into various steps.
              A website development services company must possess a combination
              of technical prowess, creative flair, and exceptional client
              communication. Let’s explore the essential elements that
              contribute to the making of a good web development.
            </p>
          </div>

          <RenderWebDevService />

          <div className="w-full text-center mt-[30px]  bg-primary rounded-md  py-2 text-white">
            <p>Talk To an expert</p>
          </div>
        </div>

        <div className="mb-[20px] flex flex-col  gap-[55px] lg:gap-[80px]">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="flex-[0.5] order-2 lg:order-1">
              <p className="mb-2 lg:mb-0 text-center lg:text-left text-[25px] capitalize lg:text-[48px] font-semibold text-primary">
                How Things Works?
              </p>

              <div className="text-center lg:text-left space-y-[18px]">
                <div>
                  <p>
                    The various steps and procedures that go into web
                    development are essential for producing attractive and
                    useful websites. Planning and research are often the first
                    steps in the process, during which goals, target audiences,
                    and needs are established. The layout, visual components,
                    and user interface are all included in the design to
                    guarantee a user-friendly experience.
                  </p>
                </div>
                <div>
                  <p>
                    E-commerce website design is followed by the development
                    phase, where the actual coding is done. Back-end development
                    deals with the server, database, and hidden logic, while
                    front-end development works on the user interface and
                    connectivity.
                  </p>
                </div>
                <div>
                  <p>
                    To find and fix any problems or errors, testing is
                    essential. The website enters the installation phase and
                    becomes user-accessible after passing tough testing. The
                    website is continuously monitored, updated, and improved
                    throughout the last stage, maintenance, to maintain it safe
                    and current.
                  </p>
                </div>
                <div>
                  <p>
                    Collaboration between designers, developers, and clients is
                    essential during these stages to guarantee a smooth service
                    process and a successful finished product.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-[0.5] flex justify-center items-center order-1 lg:order-2">
              <img
                src={"/images/digitalSolutions/Website-Development.png"}
                alt="web-development"
                className="w-[260px] h-[180px] lg:w-[620px] lg:h-[460px]"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full lg:gap-[20px]">
            <div className="flex-1/2 flex justify-center items-center">
              <p className="mb-2 lg:mb-0 text-center lg:text-left text-primary text-[25px] lg:text-[48px] font-semibold ">
                Enterprise Web Development & Design Company
              </p>
            </div>
            <div className="flex-1/2 space-y-[18px] text-center lg:text-left ">
              <p className="">
                Enterprise digital solutions can include dozens of complex
                capabilities, modules, and pieces. All of this ensures the
                business’s seamless operation and growth. Enterprise web
                development projects must be carefully organized.
              </p>
              <p>
                Our web development company USA has a vast expert team in
                developing which offers from the ground up, including custom
                development from the building up, legacy system development,
                integration, system modernization, stand-alone module
                development, and more. We have extensive expertise in web-dev
                strategies for various industries, including insurance, banking,
                and healthcare.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-[50px] text-white text-center">
        <div className="px-4 lg:max-w-7xl lg:mx-auto">
          <p className="text-[25px] lg:text-[48px] mb-[10px] text-primary font-semibold">
            Benefits of Web Development
          </p>
          <p className="text-[15px] lg:text-[16px]">
            A solid online presence is essential for successful branding and
            business growth in the modern age of the environment. Utilizing
            specialized development services can highlight your brand and make
            it simpler for potential customers to discover and interact with
            your goods or services.
          </p>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row w-full " id="contact">
        <div className="px-4 lg:px-0 py-4 lg:py-0 lg:flex-1/2 flex w-full bg-[#F7F7F7] justify-end">
          <p className=" text-[16px]">
            Brand and Business Awareness A well-designed website acts as a
            visitor’s virtual storefront, creating a lasting first impression.
            Your website can become an extension of your brand’s identity by
            combining the appropriate amount of aesthetics and functionality.
            Our professional CMS development services can design your website
            with your brand’s colors, logo, and messaging in mind to create a
            visually appealing identity that will appeal to visitors and improve
            brand recall and recognition. You can present your brand’s unique
            story and values online because of our web design services. You can
            effectively communicate your brand’s mission and culture by using
            attractive imagery, exciting information, and interactive features.
            This emotional bond develops a closer connection with your audience,
            transforming casual site visitors into committed brand promoters.
          </p>
        </div>
        <div className="px-4 lg:px-0 py-4 lg:py-0 lg:flex-1/2 bg-[#A71717]">
          asdlkfjsald
        </div>
      </div>

      <div className="px-4 md:px-8  xl:px-0 max-w-7xl mx-auto text-center py-[30px]">
        <p className="text-[25px] lg:text-[48px] font-semibold text-primary">
          Who We Are?
        </p>
        <p className="font-[16px]">
          As a leading web development company, we not just provide
          knowledgeable consultants, designers, and developers to advance your
          online presence rather you can also get cloud management services as
          well. Nexcel can assist businesses with changes, upgrades, and
          integration in addition to building strong, scalable, and secure
          professional web-based experiences. We provide full Managed Services,
          which includes 24/7 support, maintenance and can handle even the most
          difficult and extreme situations quickly and effectively.
        </p>
      </div>

      <ImageWithServiceDetails
        imageUrl="/images/digitalSolutions/uxDesigner.jpg"
        label="Why Choose Our Web Development Services?"
        description="Nexcel Solutions has been offering web design and development services
          for several years. Our expertise in developing safe, user-friendly
          websites and app development services assists business growth. We
          create HTML, CSS, and Javascript-based web pages with interactive
          content that loads quickly. The Nexcel design creates an excellent
          user experience for visitors by increasing your view from the smallest
          screen size."
        data={whyChooseOurServiceData}
        imageClass="h-auto max-h-[180px] lg:max-h-none lg:h-[900px]"
      />

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

const RenderWebDevService = () => {
  const dataArr = [
    {
      id: 1,
      title: "Research",
      imageUrl: "research-and-development",
      description:
        "The process of development begins with research. Understanding the target audience, competition, and industry trends is the first step toward creating a successful website. This phase guarantees that the following actions align with the project’s goals.",
    },
    {
      id: 2,
      title: "Web Designing",
      imageUrl: "web-design",
      description:
        "In this phase, design takes center stage. Our Web designers use their creativity to create layouts, color palettes, and typography that are consistent with the brand’s identity. The site’s aesthetic appeal is critical in grabbing users’ attention.",
    },
    {
      id: 3,
      title: "Web Development",
      imageUrl: "coding",
      description:
        "Our custom website development company creates the framework of the website using coding languages such as HTML, CSS, and JavaScript. This is the site’s backbone, influencing its operation and responsiveness across devices.",
    },
    {
      id: 4,
      title: "Web Analysis and Testing",
      imageUrl: "web-analysis",
      description:
        "This process is the link between development and perfection. Developers and quality analysts extensively test to find and correct flaws, ensuring easy navigation, optimal performance, and browser compatibility.",
    },
    {
      id: 5,
      title: "Launching",
      imageUrl: "launch",
      description:
        "The launch marks the final touch of work. The website has been published on its domain, making it available worldwide. Coordination, attention to detail, and a commitment to providing a smooth user experience are required for a successful launch.",
    },
    {
      id: 6,
      title: "Website Maintenance",
      imageUrl: "optimize",
      description:
        "A website is a living thing that demands constant attention and it remains relevant and functional thanks to regular upgrades, security fixes, and content additions. Our custom web development services monitor performance data, consumer input, and technical developments contribute to the company’s competitive advantage.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[70px] lg:mt-[100px]">
      {dataArr.map((item) => (
        <WebDevService
          key={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default WebDevelopment;
