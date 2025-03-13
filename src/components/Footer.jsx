import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { footerLinks } from "../constants";
import logo from "../assets/erasebg-transformed.png";

const Footer = () => {
  return (
    <footer id="footer" className="mt-20 border-t border-neutral-700">
      <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center h-full space-y-6 md:space-y-0 py-14">
        <div className="text-center text-xs py-3 flex flex-col flex-between">
        <a href='#' className='flex justify-center items-center'><img src={logo} alt="Logo" width={100} height={30} className="py-3" /> <h1 className='text-5xl font-semibold'>INTELLIOD</h1></a>
        <p className='mt-6 text-neutral-400'>&copy; 2024 Intelliod All rights reserved.</p>
        </div>
        <div className="space-y-3 flex flex-col text-white">
          {footerLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-[#007fff]">
              {link.text}
            </a>
          ))}
        </div>
        <div className='space-y-3'>
          <h1 className='font-semibold'>Follow Us</h1>
          <div className='space-x-5'>
            <a href="https://www.linkedin.com/company/mbs-global-investments/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#007fff]">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto:mbstect.ai@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#007fff]">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
