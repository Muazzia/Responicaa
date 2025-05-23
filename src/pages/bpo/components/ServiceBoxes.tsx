import ServiceBox from "./BpoServiceBox";

interface DataType {
  description: string;
  logo: React.ReactNode;
  title: string;
  url: string;
  id: number;
}

interface Props {
  data: DataType[];
}

const ServiceBoxes = ({ data }: Props) => {
  return (
    <div className="w-full bg-gradient-to-b from-[#B0C7E6] to-[#E8E6EF]">
      <div className="py-12 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-10 xl:px-0 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {data?.map((item) => {
            return (
              <ServiceBox
                description={item.description}
                logo={item.logo}
                title={item.title}
                url={item.url}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceBoxes;
