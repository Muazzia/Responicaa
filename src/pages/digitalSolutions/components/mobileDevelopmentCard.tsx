import React from "react";

interface MobileDevelopmentCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

const MobileDevelopmentCard: React.FC<MobileDevelopmentCardProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center p-4 border border-blue-200 rounded-lg shadow-md justify-center">
      <img src={imgSrc} alt={imgAlt} className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-base text-gray-500 py-4">{description}</p>
    </div>
  );
};

export default MobileDevelopmentCard;
