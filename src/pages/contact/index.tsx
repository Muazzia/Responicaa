import TestimonialsSection from "../../components/TestimonialsSection";
import { RecognizedByBest } from "../landingPage/components/RecognizedByBest";
import ContactUs from "../../components/ContactUs";
import { useRef } from "react";

export const Contact = () => {
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
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <div className="my-5 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl text-center font-semibold text-[#004aad]">
          We're here to help
        </h1>
        <div className="flex md:flex-row flex-col justify-center gap-10 my-10 md:items-center items-start">
          <div className="text-base font-medium">
            <p>Call us at:</p>
            <p>+1-773-669-2604</p>
          </div>
          <div className="md:flex flex-col hidden gap-2">
            <div className="h-8 w-[1px] bg-gray-400 -rotate-45 relative top-4"></div>
            <div className="h-8 w-[1px] bg-gray-400 rotate-45 relative"></div>
          </div>
          <div className="text-base font-medium">
            <p>Email us:</p>
            <p>info@responica.com</p>
          </div>
        </div>
        <button
          onClick={scrollToContact}
          // className={`md:mt-0 bg-[#004aad] ${hoverClass} text-white px-6 py-1.5 rounded-full font-semibold transition-colors text-sm whitespace-nowrap ${className}`}
          className="bg-[#004aad] w-fit text-white rounded-full  cursor-pointer px-6 py-3 !font-semibold  transition-colors text-sm whitespace-nowrap"
        >
          Schedule a free consultation
        </button>
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
          <h3 className="text-2xl md:text-3xl font-bold text-[#004aad]">
            Reach Out
          </h3>
          <p className="text-base mt-2">
            Explain your business needs and goals to us. Feel free to call us
            and say what you want to say at{" "}
            <span className="font-bold text-[#004aad]">+1-773-669-2604</span> or
            simply write your needs to{" "}
            <span className="text-[#004aad] font-bold">info@responica.com</span>
            .
          </p>
        </div>
        <div className="mt-8 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-[#004aad]">
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
        <ContactUs ref={contactRef} />
      </div>
    </div>
  );
};
