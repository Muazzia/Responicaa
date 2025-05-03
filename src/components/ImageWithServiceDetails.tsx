import { IoIosCheckmarkCircle } from "react-icons/io";
import { cn } from "../lib/utils";

interface Data {
  id: number;
  title: string;
  description: string;
}

interface Props {
  imageUrl: string;
  label: string;
  description: string;
  data: Data[];
  imageClass: string;
}

const ImageWithServiceDetails = ({
  imageUrl,
  label,
  description,
  data,
  imageClass = "",
}: Props) => {
  return (
    <div className="px-4 md:px-8 xl:px-0 max-w-7xl my-[70px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-[20px] lg:gap-[50px]">
      <div className="flex-[0.59]">
        <p className="text-[20px] lg:text-[30px] font-semibold">{label}</p>
        <p className="mt-2 lg:mt-0 text-[15px] lg:text-[16px]">{description}</p>

        <div className="mt-[30px]">
          <RenderWhyChoooseService data={data} />
        </div>
      </div>
      <div className={cn(`flex-[0.41] overflow-hidden ${imageClass}`)}>
        <img
          src={imageUrl}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

// const ImageWithServiceDetails = ({
//   imageUrl,
//   label,
//   description,
//   data,
//   imageClass = "",
// }: Props) => {
//   return (
//     <div className="max-w-7xl my-[70px] mx-auto items-center flex gap-[50px]">
//       <div className="flex-[0.59]">
//         <p className="text-[30px] font-semibold">{label}</p>
//         <p className="text-[16px]">{description}</p>

//         <div className="mt-[30px]">
//           <RenderWhyChoooseService data={data} />
//         </div>
//       </div>
//       <div className={cn(`flex-[0.41]  ${imageClass} `)}>
//         <img
//           src={imageUrl}
//           alt="image"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// };

interface WhyChooseServiceProps {
  data: Data[];
}

const RenderWhyChoooseService = ({ data }: WhyChooseServiceProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[40px] ">
      {data.map((item) => {
        return (
          <div className="flex gap-[10px] items-start">
            <div className="mt-[3px]">
              <IoIosCheckmarkCircle size={24} />
            </div>
            <div>
              <p className="text-[20px] font-semibold ">{item.title}</p>
              <p className="text-[14px]">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageWithServiceDetails;
