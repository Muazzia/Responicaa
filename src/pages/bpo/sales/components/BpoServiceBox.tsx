import React from "react";

interface Props {
  logo: React.ReactNode;
  label: string;
  description: string;
  onClick: () => void;
}

const BpoServiceBox = ({ description, label, logo, onClick }: Props) => {
  return (
    <div className="" onClick={onClick}>
      <div className="">{logo}</div>
      <div>
        <p className="text-[24px] font-semibold">{label}</p>
        <div className="text-[14px]">{description}</div>
      </div>
    </div>
  );
};

export default BpoServiceBox;
