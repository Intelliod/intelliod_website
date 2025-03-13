// import React, { useState } from 'react';
// import image1 from '../../assets/health_mba.png'; 
// import image2 from '../../assets/tele.jpg'; 
// import image3 from '../../assets/logistics.jpg'; 
// import image4 from '../../assets/retail.jpg'; 
// import image5 from '../../assets/real_estate.jpg'; 
// import image6 from '../../assets/manufacture.png'; 
// import { Menu, X } from 'lucide-react';

// const tabData = [
//     {
//         id: 'tab1',
//         name: 'Telecommunications',
//         title: 'Transform telecommunications with innovative digital solutions.',
//         description: 'Create virtual replicas of physical towers to facilitate effective management. This allows for improved resource allocation and reduced downtime. Real-time monitoring ensures operational efficiency and responsiveness.',
//         imageSrc: image2,
//     },
//     {
//         id: 'tab2',
//         name: 'Healthcare',
//         title: 'Revolutionize healthcare with data-driven patient support',
//         description: 'Enhanced patient care is achieved through advanced technology and predictive analytics. Telemedicine solutions bridge the gap for remote healthcare access, improving patient outcomes and streamlining care delivery.',
//         imageSrc: image1,
//     },
//     {
//         id: 'tab3',
//         name: 'Logistics',
//         title: 'Optimize logistics operations for better delivery outcomes.',
//         description: 'Enhance supply chain efficiency with real-time tracking capabilities, ensuring transparency and accountability throughout the logistics process. Predictive analytics empower decision-making and optimize operations.',
//         imageSrc: image3,
//     },
//     {
//         id: 'tab4',
//         name: 'Retail and E-Commerce',
//         title: 'Elevate retail strategies through intelligent data use.',
//         description: 'Utilize AI to extract and analyze data for valuable insights into consumer behavior. Streamlining workflows enhances operational accuracy and speed, significantly boosting sales and customer satisfaction.',
//         imageSrc: image4,
//     },
//     {
//         id: 'tab5',
//         name: 'Real Estate and Construction',
//         title: 'Transform real estate with innovative construction solutions.',
//         description: 'Smart building solutions offer innovative project management capabilities. Market analysis tools provide crucial insights for strategic decision-making, helping clients understand potential investments better.',
//         imageSrc: image5,
//     },
//     {
//         id: 'tab6',
//         name: 'Manufacturing',
//         title: 'Advance manufacturing processes through smart technologies.',
//         description: 'Boost operational efficiency through predictive maintenance strategies, minimizing unexpected downtimes and optimizing production processes. Supply chain optimization further enhances productivity and reduces costs.',
//         imageSrc: image6,
//     },
// ];

// const TabSelector = () => {
//     const [activeTab, setActiveTab] = useState('tab1');
//     const [isNavOpen, setIsNavOpen] = useState(false);

//     const handleToggleNav = () => {
//         setIsNavOpen(prev => !prev);
//     };

//     return (
//         <div className="font-sans max-w-7xl mx-auto p-5">
//             <header className="text-center mb-20">
//                 <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide mb-3">
//                     Technologies Transforming {" "}
//                 </h2>
//                 <h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide">
//                     <span className="bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text">
//                         Industry Sectors
//                     </span>
//                 </h1>
//             </header>

//             <div className="flex justify-end lg:hidden mb-5">
//                 <button 
//                     className="px-4 py-2 text-lg font-semibold border-none rounded-md bg-[#007fff] text-white"
//                     onClick={handleToggleNav}
//                 >
//                     {isNavOpen ? <X /> : <Menu />}
//                 </button>
//             </div>

//             <nav className={`flex ${isNavOpen ? 'flex-col' : 'hidden'} lg:flex`}>
//                 {tabData.map(({ id, name }) => (
//                     <button
//                         key={id}
//                         className={`px-4 py-2 text-[1.07rem] border-none rounded-md ${activeTab === id ? 'bg-[#007fff] text-white' : 'bg-gray-300'} mb-2 lg:mb-0 lg:mr-2`}
//                         onClick={() => {
//                             setActiveTab(id);
//                             if (isNavOpen) handleToggleNav();
//                         }}
//                     >
//                         {name}
//                     </button>
//                 ))}
//             </nav>
//             <div>
//                 {tabData.map(({ id, title, description, imageSrc }) => (
//                     <div key={id} className={`p-4 mt-2 border-t border-neutral-600 ${activeTab === id ? 'block' : 'hidden'}`}>
//                         <div className='flex flex-col lg:flex-row space-x-0 md:space-x-10 py-14 space-y-10 lg:space-y-0 items-center'>
//                             <div className='flex justify-center flex-col'>
//                                 <h1 className='text-xl sm:text-3xl lg:text-4xl text-blue-600 mb-2'>
//                                     {title}
//                                 </h1>
//                                 <p className="text-md md:text-lg mt-3 text-neutral-500">
//                                     {description}
//                                 </p>
//                             </div>
//                             <img src={imageSrc} alt={name} className='w-full md:w-[600px] rounded-md' />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TabSelector;


import React, { useRef, useState,useEffect } from 'react';
import Sector_Card from './Sector_Card';
import img1 from '../../assets/health_mba.png'; 
import img2 from '../../assets/tele.jpg'; 
import img3 from '../../assets/logistics.jpg'; 
import img4 from '../../assets/retail.jpg'; 
import img5 from '../../assets/real_estate.jpg'; 
import img6 from '../../assets/manufacture.png'; 
import img7 from '../../assets/manufacture.png';
function Sectors() {
  const sectors = [
    {
      title: "Telecommunications",
      subtitle: "Telecom Infrastructure Digital Twin",
      description: "The Telecom Infrastructure Digital Twin enables real-time monitoring, predictive maintenance, and asset optimization. With AI-powered 3D visualization and geo-referenced analytics, it enhances efficiency, reduces costs, and supports 10,000+ towers with secure data management.",
      imgSrc: img3,
    },
    {
      title: "Aviation",
      subtitle: "Intelligence FOD Tracker",
      description: "The Intelligence FOD Tracker is an AI-powered system for real-time FOD detection in airport operations. Using edge cameras, drones, and instant alerts, it enhances safety, reduces costs, and ensures comprehensive debris management with precise tracking and visual dashboards.",
      imgSrc: img5,
    },
    {
      title: "Agriculture",
      subtitle: "Neural Farms Platform",
      description: "Neural Farms is an AI-driven agricultural platform integrating the entire food supply chain. With 24/7 monitoring, precision drone technology, and blockchain-secured data, it ensures traceability, quality, and up to 60% yield improvement for sustainable farming.",
      imgSrc: img6,
    },
    {
      title: "Real Estate and Construction",
      subtitle: "Smart City Planning Platform",
      description: "Smart City Planning Platform is an AI-driven system using real-time data, 3D visualization, and predictive analytics for sustainable urban development. It optimizes infrastructure, resource management, and environmental impact for better city living.",
      imgSrc: img1,
    },
    {
      title: "Healthcare",
      subtitle: "Revolutionize healthcare with data-driven patient support",
      description: "Enhanced patient care is achieved through advanced technology and predictive analytics. Telemedicine solutions bridge the gap for remote healthcare access, improving patient outcomes and streamlining care delivery.",
      imgSrc: img4,
    },
    {
      title: "Retail and E-commerce",
      subtitle: "Elevate retail strategies through intelligent data use.",
      description: "Utilize AI to extract and analyze data for valuable insights into consumer behavior. Streamlining workflows enhances operational accuracy and speed, significantly boosting sales and customer satisfaction.",
      imgSrc: img7,
    },
    {
      title: "Manufacturing",
      subtitle: "Advance manufacturing through smart technologies.",
      description: "Boost operational efficiency through predictive maintenance strategies, minimizing unexpected downtimes and optimizing production processes. Supply chain optimization further enhances productivity and reduces costs.",
      imgSrc: img2,
    },
  ];

  // Ref for the container element to track mouse position and scrolling
  const containerRef = useRef(null);

  // State for tracking dragging
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle the start of dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft); // Get the initial mouse position
    setScrollLeft(containerRef.current.scrollLeft); // Get the initial scroll position
  };

  // Handle the mouse movement while dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return; // Only move if dragging is active
    const x = e.pageX - containerRef.current.offsetLeft;
    const scroll = scrollLeft - (x - startX); // Calculate how far to scroll
    containerRef.current.scrollLeft = scroll; // Set the scroll position
  };

  // Handle the end of dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Attach event listeners
  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseUp); // Also stop dragging if mouse leaves the container

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div className="py-4 px-10 ">
      <div className='px-20 text-center bg-clip-text mb-12'>
        <h1 className="text-6xl font-semibold mb-3">Technologies Transforming</h1>
        <span className="text-6xl bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text font-semibold">
        Industry Sectors
        </span>
      </div>
      <div
        ref={containerRef}
        className="w-full overflow-x-auto scrollbar-hide cursor-grab"
      >
        <div className="flex space-x-16 w-max px-24">
          {sectors.map((sector, index) => (
            <Sector_Card
              key={index}
              title={sector.title}
              subtitle={sector.subtitle}
              description={sector.description}
              imageSrc={sector.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sectors;
