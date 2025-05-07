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
    <Icon className="text-black text-xl min-w-[20px]" />{" "}
    {/* Changed text-white to text-black */}
    {href ? (
      <a href={href} className="hover:text-[#004aad] transition-colors">
        {text}
      </a>
    ) : (
      <span className="text-start">{text}</span>
    )}
  </li>
);

export const Footer = () => {
  return (
    <footer className="bg-white text-black px-4 md:px-10 xl:px-0">
      <div className="max-w-7xl mx-auto py-12 flex flex-col md:flex-row justify-between items-center border-y border-gray-300 gap-4">
        <div className="text-center md:text-left max-w-[600px] md:max-w-none">
          <h2 className="text-lg sm:text-xl font-medium mb-2">
            Connect with us and let's make your business thrive.
          </h2>
          <p className="text-black text-sm">
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
          <p className="text-black text-sm mt-2 max-w-[300px] leading-6">
            We are constantly looking for solutions to solve critical problems
            in the market.
          </p>
        </div>

        <div className="w-full md:flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-base font-semibold mb-4">Contact us</h3>
          <p className="text-black text-sm mb-2 max-w-[300px]">
            Our Support and Sales team is available 24/7 to answer your queries
          </p>
          <ul className="text-black text-sm space-y-3 font-medium mt-4">
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
          <ul className="text-black space-y-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.href}
                  className="hover:text-[#004aad] text-sm transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 text-center text-black text-sm py-4 px-4">
        Copyright © 2024{" "}
        <a
          href="mailto:info@responica.com"
          className="text-black hover:text-[#004aad] transition-colors"
        >
          info@responica.com
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
      text: "1001 S MAIN ST STE 500 KALISPELL, MT 59901",
      icon: MdLocationOn,
    },
  ],
  contacts: [
    {
      text: "+1-773-669-2604",
      icon: FaPhoneAlt,
      href: "tel:+1-773-669-2604",
    },
    {
      text: "info@responica.com",
      icon: FaEnvelope,
      href: "mailto:info@responica.com",
    },
  ],
};
