// import React from "react";
// import Link from "next/link";
// import {
//   FaGasPump,
//   FaCogs,
//   FaRoad,
//   FaStar,
//   FaMapMarkerAlt,
//   FaShareAlt,
// } from "react-icons/fa";
// import { MdLocalGasStation } from "react-icons/md";
// import { IoIosHeartEmpty } from "react-icons/io";

// const FilteredCars = () => {
//   const selectedFilters = ["New", "99000", "BMW", "Couple", "Couple"];

//   return (
//     <div className="px-4 py-6 ">
//       {/* Selected Filters */}
//       <div className="flex flex-wrap items-center gap-2 mb-4">
//         {selectedFilters.map((filter, index) => (
//           <span
//             key={index}
//             className="bg-indigo-50 text-indigo-500 px-3 py-1 rounded-full text-sm flex items-center"
//           >
//             {filter}
//             <button className="ml-1 text-indigo-600 hover:text-indigo-700">
//               &times;
//             </button>
//           </span>
//         ))}
//       </div>

//       {/* Title & Sort */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-2 mt-10">
//         <h2 className="text-xl font-semibold text-black ">
//           New BMWs for sale
//         </h2>
//         <span className="text-sm text-gray-600  mt-2 sm:mt-0">
//           sort by <span className="font-medium ">High Price ▾</span>
//         </span>
//       </div>
//       <p className="text-sm text-gray-500 mb-4 ">333 results</p>

//       {/* Car Card */}
//       <Link href="/cars-for-sale-detail" className="block">
//         <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row max-w-full  cursor-pointer hover:shadow-lg transition-shadow duration-300">
//           {/* Left: Image + badge */}
//           <div className="relative w-full sm:w-1/2">
//             <img
//               src="/Images/bmw.jpg"
//               alt="BMW"
//               className="h-full w-full object-cover"
//             />
//             <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1  rounded shadow text-black">
//               1/12
//             </div>
//             <div className="absolute top-2 right-2">
//               <IoIosHeartEmpty
//                 size={22}
//                 className="text-white bg-black bg-opacity-40 p-1  rounded-full"
//               />
//             </div>
//             <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs  px-2 py-1 rounded">
//               Good Deal
//             </div>
//           </div>

//           {/* Right: Info */}
//           <div className="w-full sm:w-1/2 p-4 relative">
//             <div className="absolute top-2 right-2 cursor-pointer">
//               <FaShareAlt className="text-gray-400" />
//             </div>
//             <h3 className="text-lg font-semibold text-black mb-1 ">
//               BMW 430d Coupe M Sport 190kM
//             </h3>

//             <div className="flex flex-wrap items-center text-gray-600 text-sm space-x-4 mb-2">
//               <span>
//                 <FaRoad className="inline mr-1 " />
//                 9123mi
//               </span>
//               <span>
//                 <FaCogs className="inline mr-1 " />
//                 Automatic
//               </span>
//               <span>
//                 <span className="font-bold ">⚙</span> 250hp
//               </span>
//               <span>
//                 <MdLocalGasStation className="inline mr-1 " />
//                 Diesel
//               </span>
//               <span>53.3 Avg. MPG</span>
//             </div>

//             <p className="text-md text-black mb-2 font-medium ">
//               Price :{" "}
//               <span className="text-lg font-semibold ">
//                 $ 20,000
//               </span>
//             </p>

//             <div className="text-sm text-gray-600 mb-2">
//               <span className="mr-4">
//                 Category:{" "}
//                 <strong className="text-black ">New</strong>
//               </span>
//               <span>
//                 Warranty : <strong className="text-black">12 Months</strong>
//               </span>
//             </div>

//             <div className="text-sm text-black font-medium mb-1 ">
//               Metro Ford Sales & Service
//             </div>

//             <div className="flex items-center text-sm text-gray-600 mb-2">
//               <FaStar className="text-yellow-500 mr-1" />
//               <span className="text-black font-semibold mr-1 ">
//                 4.4
//               </span>
//               <span >(235 review)</span>
//             </div>

//             <div className="flex items-center text-sm text-gray-600 mb-2">
//               <FaMapMarkerAlt className="mr-1" />
//               <span >Chicago, IL (8mi.)</span>
//             </div>

//             <p className="text-sm text-gray-600 mb-3 ">
//               Get a free Vehicle X Ray
//             </p>

//             <button
//               href="/cars-for-sale-detail"
//               className=" bg-[#EB0102] text-white text-sm px-4 py-2 rounded-full"
//             >
//               View Deal
//             </button>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default FilteredCars;
