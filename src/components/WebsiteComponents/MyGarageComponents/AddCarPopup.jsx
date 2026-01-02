import React, { useState } from 'react';
import { FiChevronDown } from "react-icons/fi";

const AddCarPopup = ({ onClose, onLookup }) => {
    const [activeTab, setActiveTab] = useState('license');

    const tabStyles = (tab) =>
        `px-4 py-2 rounded-md font-medium text-sm md:text-base ${activeTab === tab ? 'bg-white text-black' : 'bg-transparent text-white'
        }`;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 px-2 md:px-4">
            <div className="relative max-w-3xl w-full mx-auto rounded-xl overflow-hidden min-h-[570px] max-h-screen scrollbar-hide overflow-y-auto">

                {/* Static background image */}
                <img
                    src="/Images/AddCarPopup.png"
                    alt="Car Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Gradient Overlay: license (default) */}
                <div
                    className={`absolute inset-0 z-10 transition-opacity duration-500 bg-gradient-to-br from-black/70 to-transparent ${activeTab === 'license' ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Gradient Overlay: vin/make */}
                <div
                    className={`absolute inset-0 z-10 transition-opacity duration-500 bg-gradient-to-r from-[#FFFFFF]-40 ${activeTab !== 'license' ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Popup Content */}
                <div className="relative z-20 flex flex-col items-start p-4 sm:p-6 md:p-10 rounded-xl text-white">

                    {/* Tab Buttons */}
                    <div className="flex space-x-2 mb-4">
                        <button className={tabStyles('license')} onClick={() => setActiveTab('license')}>License plate</button>
                    </div>

                    {/* License Plate Input */}
                    {activeTab === 'license' && (
                        <div className="w-full md:w-1/2">
                            <input
                                placeholder="License plate"
                                className="w-full mb-6 px-4 py-2 rounded-md text-white border border-white focus:outline-none bg-transparent"
                            />
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0 mb-6">
                                <label htmlFor="state">State</label>
                                <select id="state" className="bg-transparent text-white border border-white px-4 py-2 rounded-md">
                                    <option>GA</option>
                                </select>
                            </div>
                            <button
                                className="bg-white text-black px-6 py-2 text-xs rounded-full"
                                onClick={onLookup}
                            >
                                Look up car
                            </button>
                        </div>
                    )}

                    {/* Close Button */}
                    <button
                        className="absolute top-2 right-4 text-white text-xl font-bold z-30"
                        onClick={onClose}
                    >
                        ×
                    </button>

                    <div className="mt-10 w-full">
                        <div className="w-[40px] h-[1px] bg-gray-400 my-2 px-20 mb-5" />
                        <button className={tabStyles('vin')} onClick={() => setActiveTab('vin')}>VIN</button>

                        {/* VIN Input */}
                        {activeTab === 'vin' && (
                            <div className="w-full md:w-1/2 mt-6">
                                <input
                                    placeholder="VIN Number"
                                    className="w-full bg-transparent border border-white mb-6 px-4 py-2 rounded-md text-black focus:outline-none"
                                />
                                <button
                                    className="bg-white text-black px-6 py-2 text-xs rounded-full"
                                    onClick={onLookup}
                                >
                                    Look up car
                                </button>
                            </div>
                        )}
                        <div className="w-[40px] h-[1px] bg-gray-400 my-2 px-20 mt-5" />
                    </div>

                    <div className="mt-6 w-full">
                        <button className={tabStyles('make')} onClick={() => setActiveTab('make')}>
                            Make
                        </button>

                        {/* Make Dropdown Section */}
                        {activeTab === 'make' && (
                            <div className="w-full md:w-1/2 mt-6 space-y-4">
                                <select className="w-full px-4 py-1 rounded-md bg-transparent text-white border border-white focus:outline-none appearance-none">
                                    <option className="text-black" value="">Make</option>
                                    <option className="text-black" value="bmw">BMW</option>
                                    <option className="text-black" value="audi">Audi</option>
                                    <option className="text-black" value="mercedes">Mercedes</option>
                                </select>

                                <select className="w-full px-4 py-1 rounded-md bg-transparent text-white border border-white focus:outline-none appearance-none">
                                    <option className="text-black" value="">Model</option>
                                    <option className="text-black" value="m3">M3</option>
                                    <option className="text-black" value="m4">M4</option>
                                </select>

                                <select className="w-full px-4 py-1 rounded-md bg-transparent text-white border border-white focus:outline-none appearance-none">
                                    <option className="text-black" value="">Year</option>
                                    <option className="text-black" value="2022">2022</option>
                                    <option className="text-black" value="2023">2023</option>
                                </select>

                                <select className="w-full px-4 py-1 rounded-md bg-transparent text-white border border-white focus:outline-none appearance-none">
                                    <option className="text-black" value="">Style</option>
                                    <option className="text-black" value="coupe">Coupe</option>
                                    <option className="text-black" value="sedan">Sedan</option>
                                </select>

                                <button
                                    className="bg-white text-black px-6 py-2 text-xs rounded-full"
                                    onClick={onLookup}
                                >
                                    Look up car
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddCarPopup;



