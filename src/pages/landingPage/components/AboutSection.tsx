import Button from "../../../components/Button";
import { ROUTES } from "../../../constants";

const AboutSection = () => {
  return (
    <div className="xl:px-0 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 py-12 md:py-28 gap-8 md:gap-4">
      <div className="flex flex-col gap-6 md:gap-8 order-first">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-3xl">About</h1>
          <h1 className="text-4xl md:text-5xl font-extrabold">Responica</h1>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-base leading-relaxed">
            We are a digital solution provider company with years of experience
            in helping businesses achieve their goals. At our company, we either
            work on making our clients' objectives feasible or have worked hard
            to achieve them. Such devotion to the work and tireless efforts of
            our industry experts have helped us grow and become what we are
            right now.
          </p>
          <p className="text-base leading-relaxed">
            The path here wasn't easy and we had stumbled countless times, but
            what kept us alive was surely our ability to see the bigger picture.
            Thus, we are continuously growing and becoming greater than ever
            before.
          </p>
          <p className="text-base leading-relaxed">
            With the support of an excellent team of professionals, we promote
            increased effectiveness, enhanced performance, and optimized
            business procedures to support organizational growth.
          </p>
        </div>
        <Button
          label="Enquire Now"
          route={ROUTES.CONTACT}
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
  );
};

export default AboutSection;
