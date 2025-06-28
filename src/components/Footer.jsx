import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { footerLinks } from "../constants";
import logo from "../assets/erasebg-transformed.png";

const Footer = () => {
  return (
    <footer className="md:mt-10 border-t border-neutral-700 bg-[#1a1a1a] text-white py-15">
      <div className="container mx-auto flex flex-col items-center  text-center space-y-8 md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <a href="#" className="flex items-center space-x-1">
            <img src={logo} alt="Logo" width={80} height={30} className="py-2" />
            <h1 className="text-3xl sm:text-5xl font-semibold">INTELLIOD</h1>
          </a>
          <p className="text-sm sm:text-base text-neutral-400 md:flex hidden ml-5 ">
            &copy; 2024 Intelliod. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col space-y-3 text-sm sm:text-base">
          {footerLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-[#007fff]">
              {link.text}
            </a>
          ))}
        </div>
        <div className="space-y-3">
          <h1 className="font-semibold text-base sm:text-lg">Follow Us</h1>
          <div className="flex gap-3 ml-4 text-xl sm:text-2xl">
            <a
              href="https://www.linkedin.com/company/mbs-global-investments/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#007fff]"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="mailto:mbstect.ai@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#007fff]"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
        <p className="text-sm sm:text-base text-neutral-400 md:hidden flex">
            &copy; 2024 Intelliod. All rights reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;
