// "use client";
// import { useState } from "react";
// import { Listbox } from "@headlessui/react";
// import { FiChevronDown, FiTrash2 } from "react-icons/fi";
// import { Range } from "react-range";

// const brands = ["BMW", "Mercedes", "Audi", "Toyota"];
// const models = ["All", "Model 1", "Model 2"];
// const bodyStyles = ["Coupe", "Sedan", "SUV"];
// const fuelTypes = ["Petrol", "Diesel", "Electric"];
// const gearTypes = ["Automatic", "Manual"];
// const driveModes = ["FWD", "AWD", "4WD"];
// const doorCounts = ["2-Door", "4-Door"];
// const passengerCapacities = ["2-Seater", "4-Seater", "7-Seater"];

// const FilterOptions = () => {
//   const [zipCode, setZipCode] = useState("");
//   const [selectedBrand, setSelectedBrand] = useState(brands[0]);
//   const [selectedModel, setSelectedModel] = useState(models[0]);
//   const [selectedBodyStyle, setSelectedBodyStyle] = useState(bodyStyles[0]);
//   const [selectedFuel, setSelectedFuel] = useState(fuelTypes[0]);
//   const [selectedGear, setSelectedGear] = useState(gearTypes[0]);
//   const [selectedDriveMode, setSelectedDriveMode] = useState(driveModes[0]);
//   const [selectedDoors, setSelectedDoors] = useState(doorCounts[0]);
//   const [selectedFilter, setSelectedFilter] = useState("All"); // Default to "All"
//   const [selectedPassenger, setSelectedPassenger] = useState(
//     passengerCapacities[0]
//   );
//   const [priceRange] = useState([10000, 10000]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const MIN = 1000;
//   const MAX = 100000;
//   const [values, setValues] = useState([30000, 70000]);

//   const exteriorColors = [
//     "black",
//     "orange",
//     "yellow",
//     "red",
//     "blue",
//     "purple",
//     "gray",
//     "green",
//   ];
//   const interiorColors = [
//     "black",
//     "orange",
//     "yellow",
//     "red",
//     "blue",
//     "purple",
//     "gray",
//     "green",
//   ];

//   const filters = ["All", "New", "Used", "Certified"];

//   const toggleColorSelection = (color) => {
//     setSelectedColors((prev) =>
//       prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
//     );
//   };

//   return (
//     <div className="w-full sm:w-67 md:w-80 lg:w-72 bg-white p-4 shadow-md rounded-lg border border-black mt-10 mb-10 relative overflow-visible">

//       {/* Filter Header */}
//       <div className="flex justify-between items-center">
//         <h2 className="font-semibold  text-lg sm:text-xl text-black">
//           Filter
//         </h2>
//         <FiTrash2 className="text-black cursor-pointer" />
//       </div>

//       {/* Toggle Buttons */}
//       <div className="grid grid-cols-2  gap-2 mt-4 p-2 bg-[#F8F8F8] rounded">
//         {filters.map((filter, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedFilter(filter)}
//             className={`w-full py-2 px-3 text-sm rounded ${filter === selectedFilter
//                 ? "bg-[#EB0102] text-white"
//                 : "bg-[#F8F8F8] text-gray-800 hover:bg-gray-100"
//               }`}
//           >
//             {filter}
//           </button>
//         ))}
//       </div>
//       <div className="flex justify-between items-center border-b border-#F8F8F8 pb-2 mt-10" />

//       {/* Zip Code */}
//       <div className="flex justify-between items-center">
//         <h2 className="font-semibold text-lg sm:text-xl text-black ">
//           Extra Search
//         </h2>
//       </div>
//       <div className="mt-4 flex items-center gap-2">
//         <label className="font-medium text-sm  text-[#808080] whitespace-nowrap w-24 sm:w-32">
//           Zip Code:
//         </label>
//         <input
//           type="text"
//           className="ml-2 sm:ml-6 w-24 sm:w-32 border border-gray-200 focus:outline-none rounded  px-2 py-1 text-black"
//           placeholder="Enter Zip Code"
//           value={zipCode}
//           onChange={(e) => setZipCode(e.target.value)}
//         />
//       </div>

//       <div className="flex justify-between items-center border-b border-#F8F8F8 pb-2 mt-10" />

//       {/* Quick Search */}
//       <div className="flex justify-between items-center">
//         <h2 className="font-semibold text-lg sm:text-xl text-black ">
//           Quick Search
//         </h2>
//       </div>

//       {/* Dropdown Selectors */}
//       {[
//         {
//           label: "Brand",
//           options: brands,
//           state: selectedBrand,
//           setState: setSelectedBrand,
//         },
//         {
//           label: "Model",
//           options: models,
//           state: selectedModel,
//           setState: setSelectedModel,
//         },
//         {
//           label: "Body style",
//           options: bodyStyles,
//           state: selectedBodyStyle,
//           setState: setSelectedBodyStyle,
//         },
//       ].map(({ label, options, state, setState }) => (
//         <div key={label} className="mt-4 flex items-center gap-2 flex-wrap">
//           <label className="font-medium text-sm text-[#808080] whitespace-nowrap w-24 sm:w-32 ">
//             {label}:
//           </label>
//           <Listbox value={state} onChange={setState} className="flex-1">
//             <div className="relative w-full">
//               <Listbox.Button className="w-full rounded px-2 py-1 flex justify-between items-center text-black">
//                 <span className="truncate">{state}</span>
//                 <FiChevronDown className="text-black" />
//               </Listbox.Button>
//               <Listbox.Options className="absolute left-0 w-full mt-1 bg-white shadow-lg rounded border border-black z-50 max-h-48 overflow-auto">
//                 {options.map((option) => (
//                   <Listbox.Option
//                     key={option}
//                     value={option}
//                     className="px-2 py-1 hover:bg-gray-200 cursor-pointer text-black"
//                   >
//                     {option}
//                   </Listbox.Option>
//                 ))}
//               </Listbox.Options>
//             </div>
//           </Listbox>
//         </div>
//       ))}

// <div className="space-y-6 mt-6">
//   {/* Price Range */}
//   <div>
//     <label className="block text-sm sm:text-base font-medium text-gray-800 mb-1 ">
//       Price Range:
//     </label>
//     <div className="flex items-center space-x-2">
//       <input
//         type="text"
//         value="$10,000"
//         readOnly
//         className="w-[80px] sm:w-[100px] text-center border border-gray-400 rounded-md px-2  py-1 text-black"
//       />
//       <span className="text-gray-800 text-sm sm:text-base ">to</span>
//       <input
//         type="text"
//         value="$10,000"
//         readOnly
//         className="w-[80px] sm:w-[100px] text-center border  border-gray-400 rounded-md px-2 py-1 text-black"
//       />
//     </div>
//     <div className="relative mt-7">
//       <Range
//         step={1000}
//         min={MIN}
//         max={MAX}
//         values={values}
//         onChange={setValues}
//         renderTrack={({ props, children }) => (
//           <div
//             {...props}
//             className="h-1 bg-gray-200 rounded-full w-full relative"
//           >
//             <div
//               className="absolute h-1 bg-[#EB0102] rounded-full z-10"
//               style={{
//                 left: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
//                 width: `${((values[1] - values[0]) / (MAX - MIN)) * 100}%`,
//               }}
//             />
//             {children}
//           </div>
//         )}
//         renderThumb={({ props }) => (
//           <div
//             {...props}
//             className="w-4 h-4 bg-white border-2 border-[#EB0102] rounded-full z-20"
//             style={{ ...props.style }}
//           />
//         )}
//       />
//     </div>
//   </div>

//   {/* Manufacturing Year */}
//   <div>
//     <label className="block text-sm sm:text-base  font-medium text-gray-800 mb-1">
//       Manufacturing Year:
//     </label>
//     <div className="flex items-center space-x-2">
//       <input
//         type="text"
//         value="2010"
//         readOnly
//         className="w-[80px] sm:w-[100px] text-center border  border-gray-400 rounded-md px-2 py-1 text-black"
//       />
//       <span className="text-gray-800 text-sm sm:text-base ">to</span>
//       <input
//         type="text"
//         value="2024"
//         readOnly
//         className="w-[80px] sm:w-[100px] text-center border border-gray-400  rounded-md px-2 py-1 text-black"
//       />
//     </div>
//     <div className="relative mt-7">
//       <Range
//         step={1000}
//         min={MIN}
//         max={MAX}
//         values={values}
//         onChange={setValues}
//         renderTrack={({ props, children }) => (
//           <div
//             {...props}
//             className="h-1 bg-gray-200 rounded-full w-full relative "
//           >
//             <div
//               className="absolute h-1 bg-[#EB0102] rounded-full z-10"
//               style={{
//                 left: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
//                 width: `${((values[1] - values[0]) / (MAX - MIN)) * 100}%`,
//               }}
//             />
//             {children}
//           </div>
//         )}
//         renderThumb={({ props }) => (
//           <div
//             {...props}
//             className="w-4 h-4 bg-white border-2 border-[#EB0102] rounded-full z-20"
//             style={{ ...props.style }}
//           />
//         )}
//       />
//     </div>
//   </div>

//   {/* Mileage */}
//   <div>
//     <label className="block text-sm sm:text-base font-medium text-gray-800 mb-1 ">
//       Mileage:
//     </label>
//     <div className="flex items-center space-x-2">
//       <input
//         type="text"
//         placeholder="Min"
//         readOnly
//         className="w-[80px] sm:w-[100px] text-center border border-gray-400 rounded-md px-2  py-1 text-black"
//       />
//       <span className="text-gray-800 text-sm sm:text-base ">to</span>
//       <input
//         type="text"
//         placeholder="Max"
//         readOnly
//         className="w-[80px] sm:w-[100px] text-center border border-gray-400  rounded-md px-2 py-1 text-black"
//       />
//     </div>
//     <div className="relative mt-7">
//       <Range
//         step={1000}
//         min={MIN}
//         max={MAX}
//         values={values}
//         onChange={setValues}
//         renderTrack={({ props, children }) => (
//           <div
//             {...props}
//             className="h-1 bg-gray-200 rounded-full w-full relative"
//           >
//             <div
//               className="absolute h-1 bg-[#EB0102] rounded-full z-10"
//               style={{
//                 left: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
//                 width: `${((values[1] - values[0]) / (MAX - MIN)) * 100}%`,
//               }}
//             />
//             {children}
//           </div>
//         )}
//         renderThumb={({ props }) => (
//           <div
//             {...props}
//             className="w-4 h-4 bg-white border-2 border-[#EB0102] rounded-full z-20"
//             style={{ ...props.style }}
//           />
//         )}
//       />
//     </div>
//   </div>
// </div>

//       {/* Vehicle Specifications */}
//       <div className="mt-8">
//   <p className="text-sm sm:text-base font-semibold text-black ">
//     Vehicle Specifications:
//   </p>

//   {/* Gear Type */}
//   <div className="mt-7 flex items-center justify-between mt-10">
//     <label className="text-sm sm:text-base font-medium text-black w-full sm:w-1/2 ">
//       Gear Type:
//     </label>
//     <select className="w-full sm:w-1/2 border border-gray-300 px-2 py-1 rounded text-black ">
//       <option>Automatic, Manual</option>
//     </select>
//   </div>

//   {/* Drive Mode */}
//   <div className="mt-7">
//     <div className="flex items-center justify-between">
//       <label className="text-sm sm:text-base font-medium text-black w-full sm:w-1/2 ">
//         Drive Mode:
//       </label>
//       <div className="relative w-full sm:w-1/2">
//         <select className="w-full border border-gray-300 px-2 py-1  rounded text-black">
//           <option>4x4</option>
//         </select>
//       </div>
//     </div>

//     {/* Dropdown Options */}
//     <div className="border border-gray-300 rounded mt-8 p-2 text-black">
//       <label className="flex items-center space-x-2">
//         <input type="checkbox" className="accent-black" />
//         <span className="">Front-Wheel (FWD)</span>
//       </label>
//       <label className="flex items-center space-x-2">
//         <input type="checkbox" className="accent-black " />
//         <span className="">All-Wheel (AWD)</span>
//       </label>
//       <label className="flex items-center space-x-2">
//         <input type="checkbox" className="accent-black " />
//         <span className="">4-Wheel Drive (4WD)</span>
//       </label>
//       <label className="flex items-center space-x-2">
//         <input
//           type="checkbox"
//           className="accent-[#EB0102]"
//           defaultChecked
//         />
//         <span className="text-[#EB0102] ">4x4</span>
//       </label>
//     </div>
//   </div>

//   {/* Fuel Preference */}
//   <div className="mt-7 flex items-center justify-between">
//     <label className="text-sm sm:text-base font-medium text-black w-full sm:w-1/2 ">
//       Fuel Preference:
//     </label>
//     <select className="w-full sm:w-1/2 border border-gray-300 px-2 py-1 rounded text-black ">
//       <option>Diesel</option>
//     </select>
//   </div>
// </div>

// {/* Exterior Colors */}
// <div className="mt-7">
//   <label className="font-medium text-sm sm:text-base text-black ">
//     Exterior Shade:
//   </label>
//   <div className="flex gap-2 mt-2">
//     {exteriorColors.map((color) => (
//       <div
//         key={color}
//         className={`w-6 h-6  rounded-full cursor-pointer ${selectedColors.includes(color) ? "border-2 border-black" : ""
//           }`}
//         style={{ backgroundColor: color }}
//         onClick={() => toggleColorSelection(color)}
//       />
//     ))}
//   </div>
// </div>

// {/* Interior Colors */}
// <div className="mt-7">
//   <label className="font-medium text-sm sm:text-base text-black ">
//     Interior Shade:
//   </label>
//   <div className="flex gap-2 mt-2">
//     {interiorColors.map((color) => (
//       <div
//         key={color}
//         className={`w-6 h-6  rounded-full border border-black cursor-pointer ${selectedColors.includes(color) ? "border-2 border-black" : ""
//           }`}
//         style={{ backgroundColor: color }}
//         onClick={() => toggleColorSelection(color)}
//       />
//     ))}
//   </div>
// </div>

//       <div className="mt-4 flex items-center justify-between">
//         <label className="text-sm font-medium text-black w-1/2 ">
//           Doors Count:
//         </label>
//         <select className=" px-2 py-1 rounded text-black ">
//           <option>2-Door</option>
//         </select>
//       </div>

//       {/* Smart Filters */}
//       <div className="mt-6">
//         <h2 className="text-base font-semibold text-black ">
//           Smart Filters:
//         </h2>

//         {/* History Check */}
//         <div className="mt-7">
//           <h3 className="text-sm font-medium text-black mb-2 ">
//             History Check:
//           </h3>
//           <div className="space-y-2">
//             <label className="flex items-center text-black text-sm">
//               <input type="checkbox" className="accent-black mr-2" />
//               Clean title{" "}
//               <span className="text-gray-400 ml-1 ">(100)</span>
//             </label>
//             <label className="flex items-center text-black text-sm ">
//               <input type="checkbox" className="accent-black mr-2" />
//               No accidents reported{" "}
//               <span className="text-gray-400 ml-1 ">(100)</span>
//             </label>
//             <label className="flex items-center text-black text-sm ">
//               <input type="checkbox" className="accent-black mr-2" />
//               Personal use only (non feed){" "}
//               <span className="text-gray-400 ml-1">(2,061)</span>
//             </label>
//           </div>
//         </div>

//         {/* Deal Rating */}
//         <div className="mt-8 border-t border-gray-300 pt-4">
//           <h3 className="text-sm font-medium text-black mb-2 ">
//             Deal Rating
//           </h3>
//           <div className="space-y-2">
//             <label className="flex items-center text-black text-sm">
//               <input type="checkbox" className="accent-black mr-2" />
//               <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-0.5 rounded-full ">
//                 Great Deal
//               </span>
//               <span className="text-gray-400 ml-2 text-sm ">
//                 (2,061)
//               </span>
//             </label>
//             <label className="flex items-center text-black text-sm">
//               <input type="checkbox" className="accent-black mr-2" />
//               <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-0.5 rounded-full ">
//                 Good Deal
//               </span>
//               <span className="text-gray-400 ml-2 text-sm ">
//                 (2,061)
//               </span>
//             </label>
//             <label className="flex items-center text-black text-sm">
//               <input
//                 type="checkbox"
//                 className="accent-black mr-2 "
//               />
//               <span className="bg-cyan-100 text-cyan-600 text-xs font-semibold px-2 py-0.5 rounded-full ">
//                 Fair Deal
//               </span>
//               <span className="text-gray-400 ml-2 text-sm ">
//                 (2,061)
//               </span>
//             </label>
//           </div>
//         </div>

//         <div className="mt-8 border-t border-gray-300 pt-4">
//           <h3 className="text-sm font-medium text-black mb-2 ">
//             Electric Vehicle Options:
//           </h3>
//           <div className="space-y-2">
//             <label className="flex items-center text-black text-sm">
//               <input type="checkbox" className="accent-black mr-2" />
//               <span className="">EV Range</span>
//               <span className="text-gray-400 ml-1 text-sm ">
//                 (100)
//               </span>
//             </label>
//             <label className="flex items-center text-black text-sm">
//               <input type="checkbox" className="accent-black mr-2" />
//               <span className="">Charging Duration</span>
//               <span className="text-gray-400 ml-1 text-sm ">
//                 (100)
//               </span>
//             </label>
//           </div>

//           <div className="border-t border-gray-300 my-4"></div>

//           <h3 className="text-sm font-medium text-black mb-2 ">
//             Features:
//           </h3>
//           <div className="space-y-3">
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-600 ">
//                 Safety First:
//               </span>
//               <select className="text-sm text-black bg-transparent ">
//                 <option>Airbags, ABS...</option>
//               </select>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-600 ">
//                 Passenger Capacity:
//               </span>
//               <select className="text-sm text-black bg-transparent ">
//                 <option>2-Seater</option>
//               </select>
//             </div>
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-600 ">
//                 Luxury & Comfort:
//               </span>
//               <select className="text-sm text-black bg-transparent ">
//                 <option>Sunroof, He...</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterOptions;
