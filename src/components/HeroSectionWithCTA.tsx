const HeroSectionWithCTA = ({
  heading,
  description,
  primaryButtonLabel,
  secondaryButtonLabel,
  onSecondaryButtonClick = () => {},
}: {
  heading: string;
  description: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  onSecondaryButtonClick?: () => void;
}) => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/digitalSolutions/blackBackground.webp')",
      }}
    >
      <div className="px-4 md:px-10 xl:px-0  max-w-7xl mx-auto flex bg-transparent text-white lg:py-[60px]">
        <div className="mt-[40px] space-y-[20px] max-w-[768px]">
          <span
            // href={primaryButtonUrl}
            className=" leading-none bg-[#CCCECF] text-black rounded-xs px-2 py-2 text-xs font-semibold"
          >
            {primaryButtonLabel}
          </span>
          <div className="mt-2 lg:mt-0">
            <p className="text-[30px] lg:text-[60px] font-semibold">
              {heading}
            </p>
            <p className="font-normal text-[18px] lg:text-[20px]">
              {description}
            </p>
          </div>

          <div className="mb-4 lg:mb-0">
            <button
              onClick={onSecondaryButtonClick}
              // href={`#${secondaryButtonUrl}`}
              className="rounded-xs text-primary bg-[#CCCECF] px-3 py-2 font-semibold cursor-pointer"
            >
              {secondaryButtonLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionWithCTA;
