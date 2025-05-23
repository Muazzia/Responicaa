interface Props {
  handleScrollButtonClick?: () => void;
}

const HeroSection = ({ handleScrollButtonClick }: Props) => {
  return (
    <div className="flex flex-col px-4 md:px-10 bg-[#f2f3f5]">
      <div className="px-4 md:px-10 xl:px-0 max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-around items-center gap-10 ">
        {/* Text Section */}
        <div className="flex-[0.5] flex flex-col justify-center items-center text-center gap-10 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-semibold animate-text bg-gradient-to-b from-[#ff904c] to-[#014aab] s bg-clip-text text-transparent animate-fade-up">
            Your Goals, Our Expertise: Digital Solutions for Your Business
          </h1>
          <p className="text-lg md:text-2xl text-[#004aad] font-semibold">
            Take charge of your business continuity with our Custom Solutions.
          </p>

          <button
            className={`cursor-pointer md:mt-0 bg-[#004aad]  text-white   rounded-full font-semibold transition-colors text-sm whitespace-nowrap px-5 py-3 my-6 w-fit`}
            onClick={handleScrollButtonClick}
          >
            Schedule a Free Consultation
          </button>
        </div>

        {/* Spinning Logo Section */}
        <div className="flex justify-center items-center min-h-[300px] md:min-h-screen flex-[0.5]">
          <div className="relative w-52 h-52 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-72 lg:h-72 mx-auto">
            <div className="absolute inset-0 animate-[spin_10s_linear_infinite] z-0">
              <img
                src="/images/landingPage/spinning.png"
                alt="Spinning Logo"
                className="rounded-full object-cover w-full h-full"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative left-1 -top-1 sm:left-2 sm:-top-2">
                <div className="absolute top-0 right-0 border-2 border-[#004aad] rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56"></div>
                <div className="absolute top-2 right-2 border-2 border-black rounded-full w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52"></div>
                <div className="relative flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52">
                  <span className="animate-text bg-gradient-to-b text-[#004aad] bg-clip-text   text-8xl md:text-9xl font-bold  mr-2 sm:mr-4">
                    R
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
