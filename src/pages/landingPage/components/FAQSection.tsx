import { Collapse } from "antd";

const FAQSection = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-16">
      <h2 className="text-4xl font-semibold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-10 px-4">
        <Collapse accordion >
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
            className="py-4"
          >
            <p className="text-base md:text-lg text-gray-600 bg-transparent">
              Absolutely! We believe the best partnerships start with a chat. In
              your free consultation, we'll talk about what you're trying to
              achieve online. No pressure, just a friendly chat to see how we
              can help you crush your goals. You'll walk away with clear ideas
              and a roadmap to online success!
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
            className="py-4"
          >
            <p className="text-base md:text-lg text-gray-600 bg-transparent">
              Our team rocks with passion and brains, and we don't just throw
              generic solutions at you. We listen to your goals, your struggles,
              and even your budget, then craft a plan that's perfect for you.
              Think of us as your digital bestie, cheering you on and making
              sure you get the results you deserve.
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
            className="py-4"
          >
            <p className="text-base md:text-lg text-gray-600 bg-transparent">
              Websites are like your online home, so they got to be stunning and
              useful. We build everything from simple, eye-catching landing
              pages to full-blown online stores. We'll make sure your website is
              beautiful, easy to use, and converts visitors into happy
              customers.
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
            className="py-4"
          >
            <p className="text-base md:text-lg text-gray-600 bg-transparent">
              Getting found online can be tricky, but SEO is our superpower! We
              help you climb the search engine ladder by figuring out what words
              people are using to find stuff like yours. Then, we'll create
              relevancy throughout your website and build some online
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
            className="py-4"
          >
            <p className="text-base md:text-lg text-gray-600 bg-transparent">
              We utilize innovative tools to track purchase on your website.
              Then, we turn that data into clear reports that show you exactly
              how your campaigns are doing. Think of it as a secret decoder ring
              for your online success. We use the insights to constantly tweak
              and improve your campaigns, making sure your money works extra
              hard for you.
            </p>
          </Collapse.Panel>
        </Collapse>
      </div>
    </section>
  );
};

export default FAQSection;
