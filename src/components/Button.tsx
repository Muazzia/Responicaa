import { Link } from "react-router-dom";

const Button = ({
  label,
  ariaLabel,
  route,
  className = "",
  hoverStyle = false,
}: {
  label?: string;
  ariaLabel?: string;
  route: string;
  className?: string;
  hoverStyle?: boolean;
}) => {
  const hoverClass = hoverStyle
    ? "!hover:bg-[#232323] !hover:text-white"
    : "!hover:bg-transparent !hover:border hover:border-white";

  return (
    <Link
      to={route}
      className={`md:mt-0 bg-red-700 ${hoverClass} text-white px-6 py-1.5 rounded-full font-semibold transition-colors text-sm whitespace-nowrap ${className}`}
      aria-label={ariaLabel}
    >
      {label}
    </Link>
  );
};

export default Button;
