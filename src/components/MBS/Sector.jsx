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
    <div className="py-4 md:px-10 ">
      <div className='lg:px-20 text-left bg-clip-text mb-12 px-6'>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-3">Technologies Transforming</h1>
        <span className="text-3xl md:text-4xl lg:text-6xl bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text font-semibold">
        Industry Sectors
        </span>
      </div>
      <div
        ref={containerRef}
        className="w-full overflow-x-auto scrollbar-hide cursor-grab"
      >
        <div className="flex space-x-8 md:space-x-16 w-max px-4 md:px-24">
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
