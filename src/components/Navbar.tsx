import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

export const Navbar = () => {
  return (
    <div className=" fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className=" mx-4 md:mx-10 h-auto py-2 flex justify-between items-center">
        <Link to={ROUTES.LANDINGPAGE}>
          <img
            src="/logo.jpeg"
            alt="Company Logo"
            className="w-48 md:w-64 h-auto"
          />
        </Link>
      </div>
    </div>
  );
};
