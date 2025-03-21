
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import PM from '../../assets/Predt_Maint.webp'
import QC from '../../assets/Quality_C.jpg'
import NLP from '../../assets/NLP.jpg'
import CV from '../../assets/CV1.webp'
import DM from '../../assets/3DM.png'
import DT from '../../assets/DigitalT.jpeg'

const tabData = [
    {
        id: 'tab1',
        name: 'Digital Twins',
        title: 'Real-time Monitoring Strategy',
        description: (
            <p>
                Real-time data integration enables effective monitoring of assets. This technology supports proactive maintenance strategies, ensuring optimal performance. It ultimately optimizes resource management and enhances decision-making processes.
            </p>
        ),
        imageSrc: DT,
    },
    {
        id: 'tab2',
        name: '3D Reconstruction',
        title: 'Precise Visual Planning',
        description: (
            <p>
                Accurate models of structures are created through advanced techniques. This enhances architectural and urban planning by providing precise visualizations. Improved stakeholder engagement is achieved through effective visualization methods.
            </p>
        ),
        imageSrc: DM,
    },
    {
        id: 'tab3',
        name: 'Predictive Maintenance',
        title: 'Forecasting Asset Needs',
        description: (
            <p>
                This approach forecasts maintenance needs effectively, preventing unexpected breakdowns. By identifying potential issues early, it significantly reduces overall maintenance costs. Enhanced reliability leads to improved asset longevity.
            </p>
        ),
        imageSrc: PM,
    },
    {
        id: 'tab4',
        name: 'Quality Control',
        title: 'Ensuring Safety Standards',
        description: (
            <p>
                Thorough inspections using digital models ensure adherence to quality standards. This process identifies hazards, enhancing overall safety within operations. Continuous quality assurance fosters a culture of excellence.
            </p>
        ),
        imageSrc: QC,
    },
    {
        id: 'tab5',
        name: 'Natural Language Processing (NLP)',
        title: 'Simplifying Data Interaction',
        description: (
            <p>
                NLP simplifies data interaction by allowing users to engage with technology through natural language. This promotes wider technology adoption across various teams. Enhanced collaboration and communication result from this user-friendly approach.
            </p>
        ),
        imageSrc: NLP,
    },
    {
        id: 'tab6',
        name: 'Computer Vision',
        title: 'Automating Structural Inspections',
        description: (
            <p>
                Computer vision automates inspections to detect structural anomalies efficiently. This streamlines processes and significantly reduces manual effort. Ensuring compliance with safety regulations is a key benefit of this technology.
            </p>
        ),
        imageSrc: CV,
    },
];

const TabSelector = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggleNav = () => {
        setIsNavOpen(prev => !prev);
    };

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
                        {tabData.map((solution, index) => (
                            <button
                                key={index}
                                className={`text-sm md:text-md px-4 py-2 border-none rounded-md whitespace-nowrap ${
                                    activeTab === `tab${index + 1}` ? 'bg-[#007fff] text-white' : 'bg-gray-300'
                                } mr-2`}
                                onClick={() => setActiveTab(`tab${index + 1}`)}
                            >
                                {solution.name}
                            </button>
                        ))}
                    </div>
        
                    {tabData.map((solution, index) => (
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
                                    <p className="text-sm md:text-md md:text-lg mt-3 text-neutral-500">
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

export default TabSelector;
