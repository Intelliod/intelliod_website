// import { Menu, X } from "lucide-react";
// import { useState, useEffect, useRef } from "react";
// import logo from "../assets/erasebg-transformed.png";
// import { navItems } from "../constants";
// import { RiArrowDropDownLine } from "react-icons/ri";

// function Dropdown({ items, onClose }) {
//   const maxWidth = Math.max(...items.map(item => item.label.length)) * 8; 
//   return (
//     <ul style={{ width: `${maxWidth}px` }} className='absolute bg-white rounded-md shadow-lg mt-1'>
//       {items.map((item, index) => (
//         <li key={index} className='p-2 hover:bg-gray-200 hover:rounded-md'>
//           <a href={item.href} className='font-semibold text-gray-600 text-xs' onClick={onClose}>
//             {item.label}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );
// }


// const Navbar = () => {
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
//   const [dropdown, setDropdown] = useState(null);
//   const dropdownRef = useRef(null);

//   const toggleNavbar = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };

//   const toggleDropdown = (index) => {
//     setDropdown(dropdown === index ? null : index);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdown(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
//       <div className="container px-4 mx-auto relative lg:text-sm">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center flex-shrink-0">
            
//           <a href="/" className="flex items-center" onClick={() => window.location.reload()}>
//             <img className="w-16 rounded-[100%]" src={logo} alt="Logo" />
//             <h1 className="text-3xl py-3 font-bold text-white">INTELLIOD</h1>
//           </a>
//           </div>
//          <ul className="hidden lg:flex ml-14 space-x-12">
//             {navItems.map((item, index) => (
//               <li key={index} className="relative">
//                 <button
//                   onClick={() => toggleDropdown(index)}
//                   className="hover:text-[#007fff] focus:outline-none flex text-lg items-center"
//                   aria-expanded={dropdown === index}
//                 >
//                   <span className="flex items-center">
//                   <a
//                    href={item.href}
//                    className="hover:text-[#007fff]"
//                  >
//                    {item.label}
//                  </a>
//                     {item.label === 'Products' && <RiArrowDropDownLine className='w-6 h-6 ml-1' />}
//                   </span>
//                 </button>
//                 {dropdown === index && item.dropdownItems && item.dropdownItems.length > 0 && (
//                   <div ref={dropdownRef}>
//                     <Dropdown items={item.dropdownItems} onClose={() => setDropdown(null)} />
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//           <div className="lg:hidden md:flex flex-col justify-end">
//             <button onClick={toggleNavbar}>
//               {mobileDrawerOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//         {mobileDrawerOpen && (
//           <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
//             <ul>
//               {navItems.map((item, index) => (
//                 <li key={index} className="relative">
//                 <button
//                   onClick={() => toggleDropdown(index)}
//                   className="hover:text-[#007fff] focus:outline-none flex items-center"
//                   aria-expanded={dropdown === index}
//                 >
//                   <span className="flex items-center">
//                   <a
//                    href={item.href}
//                    className="hover:text-[#007fff]"
//                  >
//                    {item.label}
//                  </a>
//                     {item.label === 'Products' && <RiArrowDropDownLine className='w-6 h-6 ml-1' />}
//                   </span>
//                 </button>
//                 {dropdown === index && item.dropdownItems && item.dropdownItems.length > 0 && (
//                   <div ref={dropdownRef}>
//                     <Dropdown items={item.dropdownItems} onClose={() => setDropdown(null)} />
//                   </div>
//                 )}
//               </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { Menu, X } from "lucide-react";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../assets/erasebg-transformed.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Track which dropdown is open

  const handleScrollToFooter = (event) => {
    event.preventDefault(); // Prevent default anchor link behavior
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    // { label: "SOLUTIONS", href: "#solutions",dropdownItems: [
    //   { label: 'Smart City Planing', href: '/Product1' },
    //   { label: 'Telecom Tower Reconstruction', href: '/Product2' },
    //   { label: 'Neural Farms', href: '/Product3' },
    //   { label: 'Intelligence Fod Tracker', href: '/Product4' },
    //   { label: 'AADHYA', href: '/Product5' },
    // ] },
    { label: "TECHNOLOGIES", href: "#technologies",dropdownItems: [
      { label: 'Digital Twin', href: '/towers_page' },
      { label: 'Computer Vision', href: '/cv_page' },
      { label: 'Document Intelligence', href: '/aadhya_page' },
    ] },
    { label: "ABOUT US", href: "/about", dropdownItems: [] },

    { label: "CONTACT US", href: "#footer", dropdownItems: [] , onClick: handleScrollToFooter },
  ];

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index); 
  };

  return (
    <nav className="sticky top-0 z-50 border-b backdrop-blur-xl border-neutral-200 px-2 pt-4">
      <div className=" px-5 lg:px-10 mx-auto lg:text-sm ">
        <div className="flex justify-between items-center ">
          <div className="flex flex-shrink-0 py-3 rounded-xl ml-0 sm:ml-0 lg:ml-10 ">
            <a href="/" className="flex items-center" onClick={() => window.location.reload()}>
              {/* <img className="md:w-48 lg:w-16 py-1" src={logo} alt="Logo" /> */}
              <h1 className="text-4xl px-5 py-3 font-bold text-white">INTELLIOD</h1>
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-lg">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="hover:text-[#007fff] focus:outline-none flex items-center"
                  aria-expanded={openDropdownIndex === index}
                >
                  <span className="flex items-center">
                    <a href={item.href} className="hover:text-[#007fff] md:text-md lg:text-lg">
                      {item.label}
                    </a>
                    {item.dropdownItems.length > 0 && <RiArrowDropDownLine className='w-8 h-8 ml-1' />}
                  </span>
                </button>
                {openDropdownIndex === index && item.dropdownItems.length > 0 && (
                  <ul className="absolute bg-[#E5E5E5] rounded-b-xl shadow-lg mt-1 p-1">
                    {item.dropdownItems.map((dropdownItem, i) => (
                      <li key={i} className="px-2 py-3 hover:bg-gray-200 hover:rounded-md text-white">
                        <a 
                          href={dropdownItem.href} 
                          className="text-gray-600 text-md" 
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
          <div className="fixed right-0 z-20 bg-neutral-200 w-full py-5 px-6 flex flex-col text-black rounded-xl lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="hover:text-[#FF6F20] focus:outline-none flex items-center"
                    aria-expanded={openDropdownIndex === index}
                  >
                    <span className="flex items-center">
                      <a href={item.href} className="hover:text-[#FF6F20] sm:text-lg md:text-xl md:text-xl mt-4">
                        {item.label}
                      </a>
                      {item.dropdownItems.length > 0 && <RiArrowDropDownLine className='w-8 h-8 ml-1 mt-3' />}
                    </span>
                  </button>
                  {openDropdownIndex === index && item.dropdownItems.length > 0 && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems.map((dropdownItem, i) => (
                        <li key={i}>
                          <a href={dropdownItem.href} className="block text-gray-600 text-md hover:text-[#FF6F20]">{dropdownItem.label}</a>
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
