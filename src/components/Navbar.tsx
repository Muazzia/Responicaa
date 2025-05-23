import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { ROUTES } from "../constants";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../components/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "../components/ui/sheet";
import { Button } from "..//components/ui/button";
import { Menu } from "lucide-react";

export const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="mx-4 md:mx-10 h-auto py-2 flex justify-between items-center">
        <Link to={ROUTES.LANDINGPAGE} className="z-50">
          <img
            src="/logo.jpeg"
            alt="Company Logo"
            className="w-[120px] md:w-[180px] h-auto"
          />
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-4">
            {/* Digital Solutions */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className="text-gray-700 hover:text-[#004aad] cursor-pointer"
                onClick={() => navigate(ROUTES.DIGITALSOLUTIONS)} // Navigate to Digital Solutions
              >
                Digital Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <ul className="grid w-[200px] gap-1 p-2">
                  <NavigationMenuLink asChild>
                    <Link
                      to={ROUTES.DIGIALMARKETING}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      Digital Marketing
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to={ROUTES.WEBDEVELOPMENT}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      Web Development
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to={ROUTES.MOBILEDEVELOPMENT}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      Mobile Development
                    </Link>
                  </NavigationMenuLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* BPO */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className="text-gray-700 hover:text-[#004aad] cursor-pointer"
                onClick={() => navigate(ROUTES.BPO)} // Navigate to BPO
              >
                BPO
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <ul className="grid w-[200px] gap-1 p-2">
                  <NavigationMenuLink asChild>
                    <Link
                      to={ROUTES.SALES}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      Sales
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to={ROUTES.CUSTOMERSUPPORT}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      Customer Support
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to={ROUTES.QUALITYASSURANCE}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      Quality Assurance
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to={ROUTES.ENERGYSUPPLIES}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      Energy Supplies
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to={ROUTES.HOMEWARRANTY}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      Home Warranty
                    </Link>
                  </NavigationMenuLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Contact Link */}
            <NavigationMenuItem>
              <Link to={ROUTES.CONTACT}>
                <NavigationMenuLink className="text-gray-700 font-medium hover:text-[#004aad] px-4 py-2">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="default"
            className="bg-[#004aad] text-white hover:bg-[#004aad]"
            onClick={() => navigate(ROUTES.CONTACT)} // Navigate to Enquire
          >
            Enquire
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="pt-20 sm:w-full md:w-[50%] lg:w-[30%] mx-auto bg-gray-50 rounded-lg shadow-lg"
            >
              <nav className="flex flex-col gap-6 p-4">
                <SheetClose asChild>
                  <Link
                    to={ROUTES.DIGITALSOLUTIONS}
                    className="text-lg font-semibold text-gray-800 hover:text-[#004aad]"
                  >
                    Digital Solutions
                  </Link>
                </SheetClose>
                <div className="ml-4 flex flex-col gap-2">
                  <SheetClose asChild>
                    <Link
                      to={ROUTES.DIGIALMARKETING}
                      className="text-gray-700 hover:text-[#004aad]"
                    >
                      Digital Marketing
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to={ROUTES.WEBDEVELOPMENT}
                      className="text-gray-700 hover:text-[#004aad]"
                    >
                      Web Development
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to={ROUTES.MOBILEDEVELOPMENT}
                      className="text-gray-700 hover:text-[#004aad]"
                    >
                      Mobile Development
                    </Link>
                  </SheetClose>
                </div>

                <SheetClose asChild>
                  <Link
                    to={ROUTES.BPO}
                    className="text-lg font-semibold text-gray-800 hover:text-[#004aad]"
                  >
                    BPO
                  </Link>
                </SheetClose>
                <div className="ml-4 flex flex-col gap-2">
                  <SheetClose asChild>
                    <Link
                      to={ROUTES.SALES}
                      className="text-gray-700 hover:text-[#004aad]"
                    >
                      Sales
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to={ROUTES.CUSTOMERSUPPORT}
                      className="text-gray-700 hover:text-[#004aad]"
                    >
                      Customer Support
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to={ROUTES.QUALITYASSURANCE}
                      className="text-gray-700 hover:text-[#004aad]"
                    >
                      Quality Assurance
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to={ROUTES.ENERGYSUPPLIES}
                      className="text-gray-700 hover:text-[#004aad]"
                    >
                      Energy Supplies
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to={ROUTES.HOMEWARRANTY}
                      className="text-gray-700 hover:text-[#004aad]"
                    >
                      Home Warranty
                    </Link>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
