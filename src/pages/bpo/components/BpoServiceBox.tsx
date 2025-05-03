import { useNavigate } from "react-router-dom";

interface Props {
  logo: React.ReactNode;
  title: string;
  description: string;
  url: string;
}

const ServiceBox = ({ description, logo, title, url }: Props) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(url)}
      className="flex flex-col justify-between bg-white w-fit min-h-[314px] rounded-sm cursor-pointer group hover:shadow-xl transition-all duration-300"
    >
      <div className="px-6 py-4">
        <div className="w-[48px] h-[48px] mb-2">{logo}</div>
        <div>
          <p className="text-[24px] font-semibold group-hover:text-[#0E1792]">
            {title}
          </p>
          <p className="text-[#3F444B] mt-2">{description}</p>
        </div>
      </div>
      <div>
        <div className="mt-4 border-t border-t-black/15"></div>
        <div className="px-6 py-4 text-sm text-[#0E1792] relative group">
          Learn More
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
