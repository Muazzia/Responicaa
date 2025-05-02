import React from "react";

interface ServiceCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 text-start border border-gray-200 relative h-[310px]">
      <div className="w-12 h-12 mb-4 flex justify-center items-center rounded-full text-blue-600 text-3xl">
        <img src={imgSrc} alt={imgAlt} className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
      <div className="border-t border-gray-300 py-2 mt-4 absolute bottom-0 left-0 right-0 px-4">
        <button className="text-blue-700 font-medium underline underline-offset-2 hover:opacity-80 py-2">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
