

import React, { useState } from 'react';
import image1 from '../../assets/health_mba.png'; 
import image4 from '../../assets/retail.jpg'; 
import image6 from '../../assets/manufacture.png'; 
import image2 from '../../assets/CV_A.jpg'; 
import image3 from '../../assets/CV_C.png'; 
import image5 from '../../assets/CV_AM.jpg'; 


export const feature = [
  {
    imageSrc: "https://intelliod.s3.ap-south-1.amazonaws.com/images/FOD.png",
    text: "Smart FOD Detection",
    title: "Intelligence FOD Tracker",
    description: (
      <p>
      The Intelligence FOD Tracker leverages AI-powered computer vision to detect and track Foreign Object Debris (FOD) in real time, ensuring safer and more efficient operations. By continuously monitoring runways, industrial zones, and critical areas, it minimizes risks, reduces maintenance costs, and enhances overall safety standards.
      </p>
    ),
  },
  {
    imageSrc: image1,
    text: "Healthcare",
    title: "Automated Patient Monitoring",
    description: (
      <p>
        Automated tumor detection enhances diagnostic accuracy and efficiency. Real-time vital sign monitoring ensures timely interventions. Advanced surgical navigation systems improve procedural outcomes significantly.
      </p>
    ),
  },
  {
    imageSrc: image4,
    text: "E-commerce",
    title: "Interactive Shopping Experience",
    description: (
      <p>
        Virtual try-on solutions allow customers to visualize products before purchase. Interactive marketing solutions engage users and boost conversion rates. Personalized product recommendations enhance user satisfaction and loyalty.
      </p>
    ),
  },
  {
    imageSrc: image5,
    text: "Automotive",
    title: "Advanced Driver Assistance",
    description: (
      <p>
        Sensor fusion techniques integrate data from multiple sources for accurate analysis. Driver monitoring systems enhance safety by detecting signs of fatigue. Obstacle detection and traffic sign recognition improve overall driving experience.
      </p>
    ),
  },
  {
    imageSrc: image6,
    text: "Manufacturing",
    title: "Quality Control Solutions",
    description: (
      <p>
        Advanced quality control ensures products meet industry standards consistently. Predictive maintenance algorithms minimize downtime by forecasting equipment failures. Compliance verification systems streamline regulatory adherence effectively.
      </p>
    ),
  },
  {
    imageSrc: image2,
    text: "Agriculture",
    title: "Smart Farming Techniques",
    description: (
      <p>
        Hyperspectral imaging provides detailed insights into crop health and conditions. Pest detection systems enable timely interventions to protect yields. Livestock activity tracking ensures better management and productivity.
      </p>
    ),
  },
  {
    imageSrc: image3 ,
    text: "Security",
    title: "Enhanced Safety Solutions",
    description: (
      <p>
        Real-time anomaly detection helps identify potential security threats quickly. License plate recognition aids in monitoring and tracking vehicles effectively. Crowd management solutions enhance safety in large gatherings and events.
      </p>
    ),
  },
];

const Feature = () => {
    const [activeTab, setActiveTab] = useState('tab1');


    return (
      <div className="font-sans max-w-7xl mx-auto md:mt-20 p-5">
      <div className="text-center md:mb-10">
          <h2 className="text-2xl font-semibold md:text-4xl mb-6 md:mb-8 text-white">
              Our{" "}
              <span className="bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text">
                  Usecases
              </span>
          </h2>
      </div>

      <div className="flex overflow-x-auto justify-between cursor-pointer mb-5">
          {feature.map((solution, index) => (
              <button
                  key={index}
                  className={`text-sm md:text-md px-4 py-2 border-none rounded-md whitespace-nowrap ${
                      activeTab === `tab${index + 1}` ? 'bg-[#007fff] text-white' : 'bg-gray-300'
                  } mr-2`}
                  onClick={() => setActiveTab(`tab${index + 1}`)}
              >
                  {solution.text}
              </button>
          ))}
      </div>

      {feature.map((solution, index) => (
          <div
              key={index}
              id={`tab${index + 1}`}
              className={`p-4 mt-2 border-t border-neutral-600 ${
                  activeTab === `tab${index + 1}` ? 'block' : 'hidden'
              }`}
          >
              <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 items-start">
                  <div className="w-full flex justify-center flex-col md:pt-10">
                      <h1 className="text-xl md:text-3xl lg:text-4xl text-blue-600 mb-2">
                          {solution.title}
                      </h1>
                      <p className="text-sm md:text-md md:text-lg mt-3 text-gray-200">
                          {solution.description}
                      </p>
                  </div>
                  <img src={solution.imageSrc} alt={solution.title} className="w-full md:w-[450px] rounded-md" />
              </div>
          </div>
      ))}
  </div>
    );
};

export default Feature;
