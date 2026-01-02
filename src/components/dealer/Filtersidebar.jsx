
// "use client";
// import React, { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";
// import { MdOutlineToggleOn } from "react-icons/md";
// import { LuToggleLeft } from "react-icons/lu";

// const Filtersidebar = () => {
//   const [showTitleType, setShowTitleType] = useState(false);
//   const [showVehicleDetails, setShowVehicleDetails] = useState(false);

//   const [filters, setFilters] = useState({
//     selectVehicles: false,
//     newlyAdded: false,
//     excludeUpcoming: false,
//   });

//   const toggleOption = (key) => {
//     setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   return (
//     <div className="w-full lg:w-[400px] bg-white p-4 rounded-md shadow-sm border text-sm space-y-5">
//       <div className="border-b pb-3">
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="font-semibold text-sm">Filter</h2>
//           <span className="text-blue-600 text-xs cursor-pointer">Reset</span>
//         </div>

//         <div className="space-y-3 bg-[#F8F8F8] p-5">
//           <div className="flex justify-between items-center">
//             <span>Select Vehicles Only</span>
//             <button onClick={() => toggleOption("selectVehicles")}>
//               {filters.selectVehicles ? (
//                 <MdOutlineToggleOn className="text-blue-600 text-xl" />
//               ) : (
//                 <LuToggleLeft className="text-gray-400 text-xl" />
//               )}
//             </button>
//           </div>

//           <div className="flex justify-between items-center">
//             <span>Newly Added Vehicles</span>
//             <button onClick={() => toggleOption("newlyAdded")}>
//               {filters.newlyAdded ? (
//                 <MdOutlineToggleOn className="text-blue-600 text-xl" />
//               ) : (
//                 <LuToggleLeft className="text-gray-400 text-xl" />
//               )}
//             </button>
//           </div>

//           <div className="flex justify-between items-center">
//             <span>Exclude Upcoming</span>
//             <button onClick={() => toggleOption("excludeUpcoming")}>
//               {filters.excludeUpcoming ? (
//                 <MdOutlineToggleOn className="text-blue-600 text-xl" />
//               ) : (
//                 <LuToggleLeft className="text-gray-400 text-xl" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="border-b pb-3">
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="font-semibold text-sm">Title Type</h2>
//           <div
//             className="flex items-center gap-1 text-blue-600 text-xs cursor-pointer"
//             onClick={() => setShowTitleType(!showTitleType)}
//           >
//             <span>Reset</span>
//             <FaChevronDown
//               className={`transition-transform duration-200 ${
//                 showTitleType ? "rotate-180" : ""
//               }`}
//             />
//           </div>
//         </div>
//         {showTitleType && (
//           <div className="space-y-2 pl-1">
//             {["Clean", "Non Repairable", "Salvage"].map((label) => (
//               <label key={label} className="flex justify-between items-center">
//                 <span>{label}</span>
//                 <input type="checkbox" />
//               </label>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="border-b pb-3">
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="font-semibold text-sm">Vehicle Details</h2>
//           <div
//             className="flex items-center gap-1 text-blue-600 text-xs cursor-pointer"
//             onClick={() => setShowVehicleDetails(!showVehicleDetails)}
//           >
//             <span>Reset</span>
//             <FaChevronDown
//               className={`transition-transform duration-200 ${
//                 showVehicleDetails ? "rotate-180" : ""
//               }`}
//             />
//           </div>
//         </div>
//         {showVehicleDetails && (
//           <div className="space-y-2">
//             <select className="w-full border px-2 py-1 rounded-md">
//               <option>Make</option>
//             </select>
//             <select className="w-full border px-2 py-1 rounded-md">
//               <option>Model</option>
//             </select>
//             <select className="w-full border px-2 py-1 rounded-md">
//               <option>Year</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Mileage"
//               className="w-full border px-2 py-1 rounded-md"
//             />
//           </div>
//         )}
//       </div>

//       {/* Auction Status */}
//       <div className="border-b pb-3">
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="font-semibold text-sm">Auction Status</h2>
//           <span className="text-blue-600 text-xs cursor-pointer">Reset</span>
//         </div>
//         <div className="space-y-2">
//           {["Buy Now", "Live", "Upcoming", "Ended"].map((label) => (
//             <label key={label} className="flex justify-between items-center">
//               <span>{label}</span>
//               <input type="checkbox" />
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Vehicle Condition */}
//       <div className="border-b pb-3">
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="font-semibold text-sm">Vehicle Condition</h2>
//           <span className="text-blue-600 text-xs cursor-pointer">Reset</span>
//         </div>
//         {["Excellent", "Good", "Fair"].map((label) => (
//           <label key={label} className="flex justify-between items-center">
//             <span>{label}</span>
//             <input type="checkbox" />
//           </label>
//         ))}
//       </div>

//       {/* Engine */}
//       <div className="border-b pb-3">
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="font-semibold text-sm">Engine</h2>
//           <span className="text-blue-600 text-xs cursor-pointer">Reset</span>
//         </div>
//         <select className="w-full border px-2 py-1 rounded-md">
//           <option>Select Engine Type</option>
//           <option>V6</option>
//           <option>V8</option>
//           <option>Electric</option>
//         </select>
//       </div>

//       {/* Transmission */}
//       <div className="border-b pb-3">
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="font-semibold text-sm">Transmission</h2>
//           <span className="text-blue-600 text-xs cursor-pointer">Reset</span>
//         </div>
//         {["Automatic", "Manual"].map((label) => (
//           <label key={label} className="flex justify-between items-center">
//             <span>{label}</span>
//             <input type="checkbox" />
//           </label>
//         ))}
//       </div>

//       {/* Drive Train */}
//       <div className="border-b pb-3">
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="font-semibold text-sm">Drive Train</h2>
//           <span className="text-blue-600 text-xs cursor-pointer">Reset</span>
//         </div>
//         {["FWD", "AWD", "RWD"].map((label) => (
//           <label key={label} className="flex justify-between items-center">
//             <span>{label}</span>
//             <input type="checkbox" />
//           </label>
//         ))}
//       </div>

//       {/* Cylinder */}
//       <div className="border-b pb-3">
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="font-semibold text-sm">Cylinder</h2>
//           <span className="text-blue-600 text-xs cursor-pointer">Reset</span>
//         </div>
//         <select className="w-full border px-2 py-1 rounded-md">
//           <option>4 Cylinder</option>
//           <option>6 Cylinder</option>
//           <option>8 Cylinder</option>
//         </select>
//       </div>

//       {/* Fuel */}
//       <div>
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="font-semibold text-sm">Fuel</h2>
//           <span className="text-blue-600 text-xs cursor-pointer">Reset</span>
//         </div>
//         {["Petrol", "Diesel", "Hybrid", "Electric"].map((label) => (
//           <label key={label} className="flex justify-between items-center">
//             <span>{label}</span>
//             <input type="checkbox" />
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Filtersidebar;
"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineToggleOn } from "react-icons/md";
import { LuToggleLeft } from "react-icons/lu";

const Filtersidebar = () => {
  const [filters, setFilters] = useState({
    selectVehicles: false,
    newlyAdded: false,
    excludeUpcoming: false,
  });

  const [dropdowns, setDropdowns] = useState({
    titleType: false,
    vehicleDetails: false,
    auctionStatus: false,
    vehicleCondition: false,
    engine: false,
    transmission: false,
    driveTrain: false,
    cylinder: false,
    fuel: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleOption = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full lg:w-[400px] bg-white p-4 rounded-md shadow-sm border text-sm space-y-5">
      {/* Static Filter Toggles */}
      <div className="border-b pb-3">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-sm">Filter</h2>
          <span className="text-blue-600 text-xs cursor-pointer">Reset</span>
        </div>
        <div className="space-y-3 bg-[#F8F8F8] p-5">
          {[
            { label: "Select Vehicles Only", key: "selectVehicles" },
            { label: "Newly Added Vehicles", key: "newlyAdded" },
            { label: "Exclude Upcoming", key: "excludeUpcoming" },
          ].map((item) => (
            <div className="flex justify-between items-center" key={item.key}>
              <span>{item.label}</span>
              <button onClick={() => toggleOption(item.key)}>
                {filters[item.key] ? (
                  <MdOutlineToggleOn className="text-blue-600 text-xl" />
                ) : (
                  <LuToggleLeft className="text-gray-400 text-xl" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Dropdown Sections */}
      {[
        {
          key: "titleType",
          title: "Title Type",
          content: (
            <div className="space-y-2 pl-1">
              {["Clean", "Non Repairable", "Salvage"].map((label) => (
                <label key={label} className="flex justify-between items-center">
                  <span>{label}</span>
                  <input type="checkbox" />
                </label>
              ))}
            </div>
          ),
        },
        {
          key: "vehicleDetails",
          title: "Vehicle Details",
          content: (
            <div className="space-y-2">
              <select className="w-full border px-2 py-1 rounded-md">
                <option>Make</option>
              </select>
              <select className="w-full border px-2 py-1 rounded-md">
                <option>Model</option>
              </select>
              <select className="w-full border px-2 py-1 rounded-md">
                <option>Year</option>
              </select>
              <input
                type="text"
                placeholder="Mileage"
                className="w-full border px-2 py-1 rounded-md"
              />
            </div>
          ),
        },
        {
          key: "auctionStatus",
          title: "Auction Status",
          content: (
            <div className="space-y-2">
              {["Buy Now", "Live", "Upcoming", "Ended"].map((label) => (
                <label key={label} className="flex justify-between items-center">
                  <span>{label}</span>
                  <input type="checkbox" />
                </label>
              ))}
            </div>
          ),
        },
        {
          key: "vehicleCondition",
          title: "Vehicle Condition",
          content: (
            <>
              {["Excellent", "Good", "Fair"].map((label) => (
                <label key={label} className="flex justify-between items-center">
                  <span>{label}</span>
                  <input type="checkbox" />
                </label>
              ))}
            </>
          ),
        },
        {
          key: "engine",
          title: "Engine",
          content: (
            <select className="w-full border px-2 py-1 rounded-md">
              <option>Select Engine Type</option>
              <option>V6</option>
              <option>V8</option>
              <option>Electric</option>
            </select>
          ),
        },
        {
          key: "transmission",
          title: "Transmission",
          content: (
            <>
              {["Automatic", "Manual"].map((label) => (
                <label key={label} className="flex justify-between items-center">
                  <span>{label}</span>
                  <input type="checkbox" />
                </label>
              ))}
            </>
          ),
        },
        {
          key: "driveTrain",
          title: "Drive Train",
          content: (
            <>
              {["FWD", "AWD", "RWD"].map((label) => (
                <label key={label} className="flex justify-between items-center">
                  <span>{label}</span>
                  <input type="checkbox" />
                </label>
              ))}
            </>
          ),
        },
        {
          key: "cylinder",
          title: "Cylinder",
          content: (
            <select className="w-full border px-2 py-1 rounded-md">
              <option>4 Cylinder</option>
              <option>6 Cylinder</option>
              <option>8 Cylinder</option>
            </select>
          ),
        },
        {
          key: "fuel",
          title: "Fuel",
          content: (
            <>
              {["Petrol", "Diesel", "Hybrid", "Electric"].map((label) => (
                <label key={label} className="flex justify-between items-center">
                  <span>{label}</span>
                  <input type="checkbox" />
                </label>
              ))}
            </>
          ),
        },
      ].map(({ key, title, content }) => (
        <div className="border-b pb-3" key={key}>
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-sm">{title}</h2>
            <div
              className="flex items-center gap-1 text-blue-600 text-xs cursor-pointer"
              onClick={() => toggleDropdown(key)}
            >
              <span>Reset</span>
              <FaChevronDown
                className={`transition-transform duration-200 ${
                  dropdowns[key] ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
          {dropdowns[key] && <div>{content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Filtersidebar;
