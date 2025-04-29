const HeroSectionWithCTA = ({
  heading,
  description,
  primaryButtonLabel,
  primaryButtonUrl,
  secondaryButtonLabel,
  secondaryButtonUrl,
}: {
  heading: string;
  description: string;
  primaryButtonLabel: string;
  primaryButtonUrl: string;
  secondaryButtonLabel: string;
  secondaryButtonUrl: string;
}) => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/digitalSolutions/blackBackground.webp')",
      }}
    >
      <div className="max-w-7xl mx-auto flex bg-transparent text-white py-[60px]">
        <div className="mt-[40px] space-y-[20px] max-w-[768px]">
          <a
            href={primaryButtonUrl}
            className="bg-[#CCCECF] text-black rounded-xs px-2 py-2 text-xs font-semibold"
          >
            {primaryButtonLabel}
          </a>
          <div>
            <p className="text-[60px] font-semibold">{heading}</p>
            <p className="font-normal text-[20px]">{description}</p>
          </div>

          <div className="">
            <a
              href={`#${secondaryButtonUrl}`}
              className="rounded-xs text-primary bg-[#CCCECF] px-3 py-2 font-semibold"
            >
              {secondaryButtonLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionWithCTA;
