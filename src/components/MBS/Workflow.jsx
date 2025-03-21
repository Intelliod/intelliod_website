import React, { useEffect, useState, useRef } from 'react';


function Workflow() {
  const originalTexts = [
    "Maintenance",
    "Intelligence",
    "Photogrammetry",
  ];
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [displayTexts, setDisplayTexts] = useState(originalTexts.map(() => ""));
  
  // Create refs for the sections
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  const animateText = (index) => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayTexts((prevTexts) =>
        prevTexts.map((text, i) => {
          if (i === index) {
            return originalTexts[i].split("").map((letter, idx) => {
              if (idx < iteration) {
                return letter;
              }
              return letters[Math.floor(Math.random() * letters.length)];
            }).join("");
          }
          return text; // Return unchanged text for other headings
        })
      );

      iteration += 1 / 3;

      if (iteration > originalTexts[index].length) {
        clearInterval(interval);
      }
    }, 30);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = sectionRefs.findIndex(ref => ref.current === entry.target);
          if (index !== -1) {
            // Reset the display text before animating
            setDisplayTexts(prevTexts => {
              const newTexts = [...prevTexts];
              newTexts[index] = ""; // Clear the text to trigger animation
              return newTexts;
            });
            animateText(index);
          }
        }
      });
    }, {
      threshold: 0.2 // Trigger when 10% of the section is visible
    });

    sectionRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (

    <div className='items-center px-6'>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-center mt-6 tracking-wide">
        Intelligence done{" "}
        <span className="bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text">
          RIGHT
        </span>
      </h2>
      <div ref={sectionRefs[0]} className='flex flex-col lg:flex-row space-x-0 md:space-x-10 py-10 md:py-20 border-b border-neutral-700 space-y-10 lg:space-y-0 items-center'>
        <video src="https://intelliod.s3.ap-south-1.amazonaws.com/videos/video3.mp4" autoPlay muted loop className='w-[90%] lg:w-[40%] rounded-md' />
        <div className='flex justify-center flex-col'>
          <h1 className='mb-2 text-2xl md:text-4xl font-semibold text-blue-600 '>
            Asset <span className='bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text'>{displayTexts[0] || originalTexts[0]}</span>
          </h1>
          <p className=" text-md md:text-lg mt-3 text-neutral-500">
          Efficient asset maintenance ensures longevity and optimal performance. Regular inspections and timely repairs prevent costly downtime.
          </p>
        </div>
      </div>

      <div ref={sectionRefs[1]} className='flex flex-col lg:flex-row space-x-0 md:space-x-10 py-20 border-b border-neutral-700 lg:space-y-0 items-center'>
      <div className='flex justify-center flex-col order-1 md:order-0 mt-10 '>
        <h1 className='mt-1 mb-2 text-2xl md:text-4xl font-semibold text-blue-600 '>
          Document <span className='bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text'>{displayTexts[1] || originalTexts[1]}</span>
        </h1>
        <p className="text-md md:text-lg mt-3 text-neutral-500">
        Document Intelligence automates data extraction and analysis, enhancing accuracy and efficiency. AI-powered insights streamline decision-making and compliance.
        </p>
      </div>
      <video src="https://intelliod.s3.ap-south-1.amazonaws.com/videos/video1.mp4"autoPlay muted loop className='w-[90%] lg:w-[40%] order-0 lg:order-1 rounded-md' />
    </div>

      <div ref={sectionRefs[2]} className='flex flex-col lg:flex-row space-x-0 md:space-x-10 py-20 border-b border-neutral-700 space-y-10 lg:space-y-0 items-center'>
        <video src="https://intelliod.s3.ap-south-1.amazonaws.com/videos/int.mp4" autoPlay muted loop className='w-[90%] lg:w-[40%] rounded-md' />
        <div className='flex justify-center flex-col'>
          <h1 className='mt-1 mb-2 text-2xl md:text-4xl font-semibold text-blue-600 '>
            Neural <span className='bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text'>{displayTexts[2] || originalTexts[2]}</span>
          </h1>
          <p className=" text-md md:text-lg mt-3 text-neutral-500">
          Neural photogrammetry leverages AI to reconstruct 3D models from images with high accuracy. It enhances realism and detail in virtual environments.
          </p>
        </div>
      </div>
    </div>

  );
}

export default Workflow;
