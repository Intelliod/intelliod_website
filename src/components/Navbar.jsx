import { Menu, X } from "lucide-react";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../assets/update_logo.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleScrollToFooter = (event) => {
    event.preventDefault(); 
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Technologies", href: "#technologies",dropdownItems: [
      { label: 'Digital Twin', href: '/towers_page' },
      { label: 'Computer Vision', href: '/cv_page' },
      { label: 'Document Intelligence', href: '/aadhya_page' },
    ] },
    { label: "About Us", href: "/about", dropdownItems: [] },
    { label: "Careers", href: "/careers", dropdownItems: [] },
  ];

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index); 
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-neutral-200 px-2 md:pt-4">
      <div className=" lg:px-10 mx-auto lg:text-sm ">
        <div className="flex justify-between items-center ">
          <div className="flex flex-shrink-0 py-3 rounded-xl ml-0 sm:ml-0 lg:ml-10 ">
            <a href="/" className="flex items-center" onClick={() => window.location.reload()}>
              {/* <img className="md:w-48 lg:w-16 py-1" src={logo} alt="Logo" /> */}
              <img src={logo} alt="Logo" className="py-2 sm:h-20 h-15 w-auto" />
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-lg items-center text-white">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="hover:text-[#007fff] focus:outline-none flex items-center "
                  aria-expanded={openDropdownIndex === index}
                >
                  <span className="flex items-center">
                    <a href={item.href} className="hover:text-[#007fff] md:text-md lg:text-sm">
                      {item.label}
                    </a>
                    {item.dropdownItems.length > 0 && <RiArrowDropDownLine className='w-6 h-6 ml-1' />}
                  </span>
                </button>
                {openDropdownIndex === index && item.dropdownItems.length > 0 && (
                  <ul className="absolute bg-gray-900 text-white rounded-xl shadow-lg mt-1 p-1">
                    {item.dropdownItems.map((dropdownItem, i) => (
                      <li key={i} className="px-2 py-1 hover:bg-gray-800 hover:rounded-md hover:text-[#007fff] text-white">
                        <a 
                          href={dropdownItem.href} 
                          className=" text-sm md:text-md lg:text-[0.7rem]  focus:outline-none" 
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          {dropdownItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
          <button 
            onClick={toggleNavbar}
            className="relative transition-all duration-300 ease-in-out"
          >
            <div className="transition-opacity duration-300 ease-in-out" style={{ opacity: mobileDrawerOpen ? 0 : 1 }}>
              <Menu className="absolute top-[-16px] right-[6px] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-opacity duration-300 ease-in-out" />
            </div>
            <div className="transition-opacity duration-300 ease-in-out" style={{ opacity: mobileDrawerOpen ? 1 : 0 }}>
              <X className="absolute top-[-16px] right-[6px] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-opacity duration-300 ease-in-out" />
            </div>
          </button>
        </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-gray-900 w-full py-5 px-6 flex flex-col text-white rounded-b-xl lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="hover:text-[#007fff] focus:outline-none flex items-center"
                    aria-expanded={openDropdownIndex === index}
                  >
                    <span className="flex items-center">
                      <a href={item.href} className="hover:text-[#007fff] mt-4 text-sm">
                        {item.label}
                      </a>
                      {item.dropdownItems.length > 0 && <RiArrowDropDownLine className='w-8 h-8 ml-1 mt-3' />}
                    </span>
                  </button>
                  {openDropdownIndex === index && item.dropdownItems.length > 0 && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems.map((dropdownItem, i) => (
                        <li key={i}>
                          <a href={dropdownItem.href} className="block text-[0.8rem] hover:text-[#007fff]">{dropdownItem.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
