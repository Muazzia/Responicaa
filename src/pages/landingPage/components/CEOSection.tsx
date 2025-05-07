import { TbMailBitcoin } from "react-icons/tb";

const CEOSection = () => {
  return (
    <div className="text-center py-10 md:py-14 px-4 md:px-10 flex flex-col gap-4 md:gap-5 justify-center items-center">
      <h1 className="text-3xl md:text-5xl font-bold">OUR Team</h1>
      <div className="flex items-center justify-center gap-2 md:gap-6 flex-col md:flex-row">
        <div>
          <img
            src="/images/landingPage/ceo.webp"
            alt="CEO"
            className="w-full max-w-[300px] md:max-w-[500px]"
          />
          <div className="mt-2">
            <h1 className="text-xl md:text-2xl font-semibold">
              Syed Zain Ul Hussain Zaidi
            </h1>
            <h1 className="text-base md:text-lg">(CEO)</h1>
          </div>
          <div className="flex items-center gap-2 justify-center text-sm md:text-base ">
            <TbMailBitcoin className="text-base md:text-lg" />
            <h1>info@responica.com</h1>
          </div>
        </div>

        <div>
          <img
            src="/images/landingPage/ceo.webp"
            alt="CEO"
            className="w-full max-w-[300px] md:max-w-[500px]"
          />
          <div className="mt-2">
            <h1 className="text-xl md:text-2xl font-semibold">
              Syed Zain Ul Hussain Zaidi
            </h1>
            <h1 className="text-base md:text-lg">(CEO)</h1>
          </div>
          <div className="flex items-center gap-2 justify-center text-sm md:text-base ">
            <TbMailBitcoin className="text-base md:text-lg" />
            <h1>info@responica.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOSection;
