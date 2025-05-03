import { Button } from "antd";
import TestimonialsSection from "../../components/TestimonialsSection";
import { RecognizedByBest } from "../landingPage/components/RecognizedByBest";
import ContactUs from "../../components/ContactUs";

export const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <div className="my-5 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl text-center font-semibold text-red-700">
          We're here to help
        </h1>
        <div className="flex md:flex-row flex-col justify-center gap-10 my-10 md:items-center items-start">
          <div className="text-base font-medium">
            <p>Call us at:</p>
            <p>1-302-797-8888</p>
          </div>
          <div className="md:flex flex-col hidden gap-2">
            <div className="h-8 w-[1px] bg-gray-400 -rotate-45 relative top-4"></div>
            <div className="h-8 w-[1px] bg-gray-400 rotate-45 relative"></div>
          </div>
          <div className="text-base font-medium">
            <p>Email us:</p>
            <p>support@responica.com</p>
          </div>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          className="!bg-red-800 !w-fit text-white !rounded-full !py-4 md:!py-6 !font-semibold text-sm"
        >
          Schedule a free consultation
        </Button>
      </div>
      <div className="mt-10 text-center">
        <img
          src="/images/contactUs.jpg"
          alt="Random"
          className="w-full rounded-lg shadow-lg"
        />
        <h2 className="text-3xl md:text-5xl font-semibold text-black mt-6">
          Good Things Happen When You Say Hello!
        </h2>
        <p className="text-base mt-4 max-w-4xl mx-auto">
          Welcome to our digital crossroads with the solutions you need! At
          Responica, we value your voice and ambition, willing to know more.
          Whether you're here to seek answers, share insights, or simply say
          hello, we're all ears.
        </p>
        <div className="mt-8 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-red-700">
            Reach Out
          </h3>
          <p className="text-base mt-2">
            Explain your business needs and goals to us. Feel free to call us
            and say what you want to say at{" "}
            <span className="font-bold text-red-700">1-302-797-8888</span> or
            simply write your needs to{" "}
            <span className="text-red-700 font-bold">
              support@nexcelsolutions.com
            </span>
            .
          </p>
        </div>
        <div className="mt-8 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-red-700">
            Find Us On Socials
          </h3>
          <p className="text-base mt-2">
            Follow us on the digital landscape of social media! Connect with us
            on Twitter, Facebook, and Instagram for an insightful journey
            through our pool of solutions. Feel free to comment, like, and share
            your insights, because your engagement fuels our digital blaze.
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-10">
        <TestimonialsSection />
        <RecognizedByBest />
        <ContactUs />
      </div>
    </div>
  );
};
