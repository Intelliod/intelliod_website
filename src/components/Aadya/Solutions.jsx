import React, { useState } from 'react';
import { solutions } from '../../constants';

const Solutions = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div className="font-sans max-w-7xl mx-auto md:mt-20 p-5">
            <div className="text-center md:mb-20">
                <h2 className="text-2xl font-semibold md:text-4xl mb-6 md:mb-8 text-white">
                    Our{" "}
                    <span className="bg-gradient-to-r from-[#0038a8] to-white text-transparent bg-clip-text">
                        Usecases
                    </span>
                </h2>
            </div>

            <div className="flex overflow-x-auto justify-between cursor-pointer mb-5">
                {solutions.map((solution, index) => (
                    <button
                        key={index}
                        className={`text-sm px-4 py-2 border-none rounded-md whitespace-nowrap ${
                            activeTab === `tab${index + 1}` ? 'bg-[#007fff] text-white' : 'bg-gray-300'
                        } mr-2`}
                        onClick={() => setActiveTab(`tab${index + 1}`)}
                    >
                        {solution.text}
                    </button>
                ))}
            </div>

            {solutions.map((solution, index) => (
                <div
                    key={index}
                    id={`tab${index + 1}`}
                    className={`p-4 mt-2 border-t border-neutral-600 ${
                        activeTab === `tab${index + 1}` ? 'block' : 'hidden'
                    }`}
                >
                    <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 items-center">
                        <div className="w-full flex justify-center flex-col">
                            <h1 className="text-xl sm:text-3xl lg:text-4xl text-blue-600 mb-2">
                                {solution.text}
                            </h1>
                            <p className="text-md md:text-lg mt-3 text-neutral-500">
                                {solution.description[0]}
                            </p>
                        </div>
                        <img src={solution.icon} alt={solution.text} className="w-full md:w-[450px] rounded-md" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Solutions;