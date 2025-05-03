import { Link } from "react-router-dom";
import Button from "./Button";
import { MdLocationOn } from "react-icons/md";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { ROUTES } from "../constants";

interface ContactInfoItemProps {
  icon: React.ComponentType<{ className: string }>;
  text: string;
  href?: string;
}

const ContactInfoItem = ({ icon: Icon, text, href }: ContactInfoItemProps) => (
  <li className="flex items-center gap-2">
    <Icon className="text-white text-xl min-w-[20px]" />
    {href ? (
      <a href={href} className="hover:text-red-500 transition-colors">
        {text}
      </a>
    ) : (
      <span className="text-start">{text}</span>
    )}
  </li>
);

export const Footer = () => {
  return (
    <footer className="bg-[#232323] text-white px-4 md:px-10 xl:px-0">
      <div className="max-w-7xl mx-auto py-12 flex flex-col md:flex-row justify-between items-center border-b border-gray-700 gap-4">
        <div className="text-center md:text-left max-w-[600px] md:max-w-none">
          <h2 className="text-lg sm:text-xl font-medium mb-2">
            Connect with us and let's make your business thrive.
          </h2>
          <p className="text-white text-sm">
            We’re here to help, let’s connect.
          </p>
        </div>

        <Button
          label="Contact Us"
          ariaLabel="Contact us"
          route="/contact"
          hoverStyle
        />
      </div>

      <div className="max-w-7xl mx-auto py-12 flex flex-col md:flex-row gap-8 lg:gap-12 justify-between">
        <div className="w-full md:flex-[0.8] flex flex-col items-center md:items-start text-center md:text-left justify-center">
          <Link to="/" className="mb-4 max-w-[200px] lg:max-w-[250px]">
            <img
              src="/logo.jpeg"
              alt="Responica Logo"
              className="h-auto w-full"
            />
          </Link>
          <p className="text-white text-sm mt-2 max-w-[300px] leading-6">
            We are constantly looking for solutions to solve critical problems
            in the market.
          </p>
        </div>

        <div className="w-full md:flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-base font-semibold mb-4">Contact us</h3>
          <p className="text-white text-sm mb-2 max-w-[300px]">
            Our Support and Sales team is available 24/7 to answer your queries
          </p>
          <ul className="text-white text-sm space-y-3 font-medium mt-4">
            {CONTACT_INFO.addresses.map((address, index) => (
              <ContactInfoItem
                key={index}
                icon={address.icon}
                text={address.text}
              />
            ))}
            {CONTACT_INFO.contacts.map((contact, index) => (
              <ContactInfoItem
                key={index}
                icon={contact.icon}
                text={contact.text}
                href={contact.href}
              />
            ))}
          </ul>
        </div>

        <div className="w-full md:flex-[0.6] flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-base font-semibold mb-4">Quick Links</h3>
          <ul className="text-white space-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.href}
                  className="hover:text-red-500 text-sm transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 text-center text-white text-sm py-4 px-4">
        Copyright © 2024{" "}
        <a
          href="mailto:contact@nexcelsolutions.com"
          className="text-white hover:text-red-500 transition-colors"
        >
          contact@nexcelsolutions.com
        </a>
        . All rights reserved.
      </div>
    </footer>
  );
};

const FOOTER_LINKS = [
  { title: "Home", href: ROUTES.LANDINGPAGE },
  { title: "Contact", href: ROUTES.CONTACT },
  { title: "Digital Solutions", href: ROUTES.DIGITALSOLUTIONS },
  { title: "BPO", href: ROUTES.BPO },
];

const CONTACT_INFO = {
  addresses: [
    {
      text: "Main Branch: 112 Capitol Tr, Newark, DE 19711",
      icon: MdLocationOn,
    },
    {
      text: "Sub-Branch: 1 Floor - 322 G3, Johar Town, Lahore",
      icon: MdLocationOn,
    },
  ],
  contacts: [
    {
      text: "1-302-797-8888",
      icon: FaPhoneAlt,
      href: "tel:1-302-797-8888",
    },
    {
      text: "support@responica.com",
      icon: FaEnvelope,
      href: "mailto:support@responica.com",
    },
  ],
};
