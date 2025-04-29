import { TbMailBitcoin } from "react-icons/tb";

const CEOSection = () => {
  return (
    <div className="text-center py-14 flex flex-col gap-5 justify-center items-center">
      <h1 className="text-5xl font-bold">OUR CEO</h1>
      <img
        src="/images/landingPage/ceo.webp"
        alt="CEO"
        width={500}
        height={500}
      />
      <div>
        <h1 className="text-2xl font-semibold">Syed Zain Ul Hussain Zaidi</h1>
        <h1 className="text-lg">(CEO)</h1>
      </div>
      <div className="flex items-center gap-2 justify-center">
        <TbMailBitcoin className="!text-xs" />
        <h1>zain@nexcelsolutions.com</h1>
      </div>
    </div>
  );
};

export default CEOSection;
