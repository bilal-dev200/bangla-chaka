// import React, { useEffect } from "react";
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
// import { useVehicalsStore } from "@/lib/store/vehicalStore";
// import { Image_URL } from "@/config/constants";

// const cars = [
//   {
//     id: 1,
//     title: "BMW 430d Coupe M Sport 190kM",
//     image: "/Images/bmw.jpg",
//     slug: "bmw-430d-coupe-m-sport",
//     mileage: "9123mi",
//     transmission: "Automatic",
//     horsepower: "250hp",
//     fuel: "Diesel",
//     mpg: "53.3 Avg. MPG",
//     price: "$ 20,000",
//     category: "New",
//     warranty: "12 Months",
//     dealer: "Metro Ford Sales & Service",
//     rating: "4.4",
//     reviews: 235,
//     location: "Chicago, IL (8mi.)",
//   },
//   // More car objects...
// ];

// const FilteredCars = ({ showFilters = true, showTitle = true }) => {
//   const selectedFilters = ["New", "99000", "BMW", "Couple", "Couple"];

//   const { vehicals, getAllvechicle, isLoading, error } = useVehicalsStore();

//   useEffect(() => {
//     const fetchVehicals = async () => {
//       try {
//         const data = await getAllvechicle(); // store ka function call
//         console.log("API Response (Vehicles):", data); // 👈 console mai check karo
//       } catch (err) {
//         console.error("Error fetching vehicles:", err);
//       }
//     };

//     fetchVehicals();
//   }, [getAllvechicle]);
//   return (
//     <div className="px-4 py-1 ">

//       {showFilters && (
//         <div className="flex flex-wrap items-center gap-2 mb-4">
//           {selectedFilters.map((filter, index) => (
//             <span
//               key={index}
//               className="bg-indigo-50 text-indigo-500 px-3 py-1 rounded-full text-sm flex items-center"
//             >
//               {filter}
//               <button className="ml-1 text-indigo-600 hover:text-indigo-700">
//                 &times;
//               </button>
//             </span>
//           ))}
//         </div>
//       )}

//       {/* Title & Sort */}
//       {/* <div className="flex flex-col sm:flex-row justify-between items-center mb-2 mt-10">
//         <h2 className="text-xl font-semibold text-black ">
//           New BMWs for sale
//         </h2>
//         <span className="text-sm text-gray-600  mt-2 sm:mt-0">
//           sort by <span className="font-medium">High Price ▾</span>
//         </span>
//       </div> */}
//       {showTitle ? (
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-2 mt-10">
//           <h2 className="text-xl font-semibold text-black ">
//             New BMWs for sale
//           </h2>
//           <span className="text-sm text-gray-600  mt-2 sm:mt-0">
//             sort by <span className="font-medium">High Price ▾</span>
//           </span>
//         </div>
//       ) : (
//         <div className="flex justify-end mb-2 mt-10">
//           <span className="text-sm text-gray-600 ">
//             sort by <span className="font-medium">High Price ▾</span>
//           </span>
//         </div>
//       )}

//       <p className="text-sm text-gray-500 mb-4 ">
//         {cars.length} results
//       </p>

//       {/* {cars.map((car) => (
//         <Link href={`/cars-for-sale/${car.slug}`} key={car.id} className="block mb-6">
//           <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row max-w-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
//             <div className="relative w-full sm:w-1/2">
//               <img
//                 src={car.image}
//                 alt={car.title}
//                 className="h-full w-full object-cover"
//               />
//               <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded shadow text-black">
//                 1/12
//               </div>
//               <div className="absolute top-2 right-2">
//                 <IoIosHeartEmpty
//                   size={22}
//                   className="text-white bg-black bg-opacity-40 p-1 rounded-full"
//                 />
//               </div>
//               <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
//                 Good Deal
//               </div>
//             </div>

//             <div className="w-full sm:w-1/2 p-4 relative">
//               <div className="absolute top-2 right-2 cursor-pointer">
//                 <FaShareAlt className="text-gray-400" />
//               </div>
//               <h3 className="text-lg font-semibold text-black mb-1">
//                 {car.title}
//               </h3>

//               <div className="flex flex-wrap items-center text-gray-600 text-sm space-x-4 mb-2">
//                 <span>
//                   <FaRoad className="inline mr-1" />
//                   {car.mileage}
//                 </span>
//                 <span>
//                   <FaCogs className="inline mr-1" />
//                   {car.transmission}
//                 </span>
//                 <span>⚙ {car.horsepower}</span>
//                 <span>
//                   <MdLocalGasStation className="inline mr-1" />
//                   {car.fuel}
//                 </span>
//                 <span>{car.mpg}</span>
//               </div>

//               <p className="text-md text-black mb-2 font-medium">
//                 Price:{" "}
//                 <span className="text-lg font-semibold">{car.price}</span>
//               </p>

//               <div className="text-sm text-gray-600 mb-2">
//                 <span className="mr-4">
//                   Category:{" "}
//                   <strong className="text-black">{car.category}</strong>
//                 </span>
//                 <span>
//                   Warranty:{" "}
//                   <strong className="text-black">{car.warranty}</strong>
//                 </span>
//               </div>

//               <div className="text-sm text-black font-medium mb-1">
//                 {car.dealer}
//               </div>

//               <div className="flex items-center text-sm text-gray-600 mb-2">
//                 <FaStar className="text-yellow-500 mr-1" />
//                 <span className="text-black font-semibold mr-1">
//                   {car.rating}
//                 </span>
//                 <span>({car.reviews} review)</span>
//               </div>

//               <div className="flex items-center text-sm text-gray-600 mb-2">
//                 <FaMapMarkerAlt className="mr-1" />
//                 <span>{car.location}</span>
//               </div>

//               <p className="text-sm text-gray-600 mb-3">
//                 Get a free Vehicle X Ray
//               </p>

//               <Link
//                 href={`/cars-for-sale/${car.slug}`}
//                 className="inline-block  bg-[#EB0102] text-white text-sm px-4 py-2 rounded-full"
//               >
//                 View Deal
//               </Link>
//             </div>
//           </div>
//         </Link>
//       ))} */}
//       {vehicals && vehicals.length > 0 ? (
//         vehicals.map((car) => (
//           <Link
//             href={`/cars-for-sale/${car.vehicle.slug}`}
//             key={car.id}
//             className="block mb-6"
//           >
//             <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-[270px] sm:flex-row max-w-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
//               <div className="relative w-full sm:w-1/2">
//                 <img
//                   src={
//                     // car?.vehicle.vehicleMedia.url
//                     `${Image_URL}${car.vehicle.vehicleMedia[0].url}` // base url + image ka naam
//                     // : "/Images/findBest1.png" // fallback local image
//                   } alt={car.title}
//                   className="h-[310px] w-full object-fill"
//                 />
//                 <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded shadow text-black">
//                   1/12
//                 </div>
//                 <div className="absolute top-2 right-2">
//                   <IoIosHeartEmpty
//                     size={22}
//                     className="text-white bg-black bg-opacity-40 p-1 rounded-full"
//                   />
//                 </div>
//                 <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
//                   Good Deal
//                 </div>
//               </div>

//               <div className="w-full sm:w-1/2 p-4 relative">
//                 <div className="absolute top-2 right-2 cursor-pointer">
//                   <FaShareAlt className="text-gray-400" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-black mb-1">
//                   {car.vehicle?.vehicleModel?.name}
//                 </h3>

//                 <div className="flex flex-wrap items-center text-gray-600 text-sm space-x-4 mb-2">
//                   <span>
//                     <FaRoad className="inline mr-1" />
//                     {car?.mileage}
//                   </span>
//                   <span>
//                     <FaCogs className="inline mr-1" />
//                     {car.transmission}
//                   </span>
//                   <span>⚙ {car.horsepower}</span>
//                   <span>
//                     <MdLocalGasStation className="inline mr-1" />
//                     {car.fuel}
//                   </span>
//                   <span>{car.mpg}</span>
//                 </div>

//                 <p className="text-md text-black mb-2 font-medium">
//                   Price:{" "}
//                   <span className="text-lg font-semibold">{car.price}</span>
//                 </p>

//                 <div className="text-sm text-gray-600 mb-2">
//                   <span className="mr-4">
//                     Category:{" "}
//                     <strong className="text-black">{car.category}</strong>
//                   </span>
//                   <span>
//                     Warranty:{" "}
//                     <strong className="text-black">{car.warranty}</strong>
//                   </span>
//                 </div>

//                 <div className="text-sm text-black font-medium mb-1">
//                   {car.dealer}
//                 </div>

//                 <div className="flex items-center text-sm text-gray-600 mb-2">
//                   <FaStar className="text-yellow-500 mr-1" />
//                   <span className="text-black font-semibold mr-1">
//                     {car.rating}
//                   </span>
//                   <span>({car.reviews} review)</span>
//                 </div>

//                 <div className="flex items-center text-sm text-gray-600 mb-2">
//                   <FaMapMarkerAlt className="mr-1" />
//                   <span>{car.location}</span>
//                 </div>

//                 <p className="text-sm text-gray-600 mb-3">
//                   Get a free Vehicle X Ray
//                 </p>

//                 <Link
//                   href={`/cars-for-sale/${car.slug}`}
//                   className="inline-block  bg-[#EB0102] text-white text-sm px-4 py-2 rounded-full"
//                 >
//                   View Deal
//                 </Link>
//               </div>
//             </div>
//           </Link>
//         ))
//       ) : (
//         !isLoading && <p className="text-gray-500">No vehicles found.</p>
//       )}

//     </div>
//   );
// };

// export default FilteredCars;

// import React, { useEffect } from "react";
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
// import { useVehicalsStore } from "@/lib/store/vehicalStore";
// import { Image_URL } from "@/config/constants";

// const FilteredCars = ({ showFilters = true, showTitle = true }) => {
//   const selectedFilters = ["New", "99000", "BMW", "Couple", "Couple"];

//   const { vehicals, getAllvechicle, isLoading, error } = useVehicalsStore();

//   useEffect(() => {
//     const fetchVehicals = async () => {
//       try {
//         const data = await getAllvechicle();
//         console.log("API Response (Vehicles):", data);
//       } catch (err) {
//         console.error("Error fetching vehicles:", err);
//       }
//     };

//     fetchVehicals();
//   }, [getAllvechicle]);

//   return (
//     <div className="px-4 py-1">
//       {/* Filters */}
//       {showFilters && (
//         <div className="flex flex-wrap items-center gap-2 mb-4">
//           {selectedFilters.map((filter, index) => (
//             <span
//               key={index}
//               className="bg-indigo-50 text-indigo-500 px-3 py-1 rounded-full text-sm flex items-center"
//             >
//               {filter}
//               <button className="ml-1 text-indigo-600 hover:text-indigo-700">
//                 &times;
//               </button>
//             </span>
//           ))}
//         </div>
//       )}

//       {/* Title & Sort */}
//       {showTitle ? (
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-2 mt-10">
//           <h2 className="text-xl font-semibold text-black ">
//             New BMWs for sale
//           </h2>
//           <span className="text-sm text-gray-600  mt-2 sm:mt-0">
//             sort by <span className="font-medium">High Price ▾</span>
//           </span>
//         </div>
//       ) : (
//         <div className="flex justify-end mb-2 mt-10">
//           <span className="text-sm text-gray-600 ">
//             sort by <span className="font-medium">High Price ▾</span>
//           </span>
//         </div>
//       )}

//       {/* Results */}
//       <p className="text-sm text-gray-500 mb-4 ">
//         {vehicals?.length || 0} results
//       </p>

//       {/* Car Listings */}
//       {vehicals && vehicals.length > 0 ? (
//         vehicals.map((car) => (
//           <Link
//             href={`/cars-for-sale/${car.vehicle.slug}`}
//             key={car.id}
//             className="block mb-6"
//           >
//             <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row max-w-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
//               {/* Image Carousel */}
//               <div className="relative w-full sm:w-1/2">
//                 <div className="flex overflow-x-auto space-x-2 scrollbar-hide">
//                   {car.vehicle?.vehicleMedia?.map((media, idx) => (
//                     <img
//                       key={idx}
//                       src={`${Image_URL}${media.url}`}
//                       alt={`Image ${idx + 1}`}
//                       className="h-[340px] w-full object-cover flex-shrink-0 rounded"
//                     />
//                   ))}
//                 </div>

//                 {/* Image count */}
//                 <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded shadow text-black">
//                   {car.vehicle.vehicleMedia.length} Images
//                 </div>

//                 {/* Heart button */}
//                 <div className="absolute  right-2">
//                   <IoIosHeartEmpty
//                     size={22}
//                     className="text-white bg-black bg-opacity-40 p-1 rounded-full"
//                   />
//                 </div>

//                 {/* Deal tag */}
//                 <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
//                   Good Deal
//                 </div>
//               </div>

//               {/* Car Details */}
//               <div className="w-full sm:w-1/2 p-4 relative mt-5">
//                 <div className="absolute top-2 right-2 cursor-pointer">
//                   <FaShareAlt className="text-gray-400" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-black mb-1">
//                   {car.vehicle?.vehicleModel?.name}
//                 </h3>

//                 <div className="flex flex-wrap items-center text-gray-600 text-sm space-x-4 mb-2">
//                   <span>
//                     <FaRoad className="inline mr-1" />
//                     {car?.mileage}
//                   </span>
//                   <span>
//                     <FaCogs className="inline mr-1" />
//                     {car.transmission}
//                   </span>
//                   <span>⚙ {car.horsepower}</span>
//                   <span>
//                     <MdLocalGasStation className="inline mr-1" />
//                     {car.fuel}
//                   </span>
//                   <span>{car.mpg}</span>
//                 </div>

//                 <p className="text-md text-black mb-2 font-medium">
//                   Price:{" "}
//                   <span className="text-lg font-semibold">{car.price}</span>
//                 </p>

//                 <div className="text-sm text-gray-600 mb-2">
//                   <span className="mr-4">
//                     Category:{" "}
//                     <strong className="text-black">{car.category}</strong>
//                   </span>
//                   <span>
//                     Warranty:{" "}
//                     <strong className="text-black">{car.warranty}</strong>
//                   </span>
//                 </div>

//                 <div className="text-sm text-black font-medium mb-1">
//                   {car.dealer}
//                 </div>

//                 <div className="flex items-center text-sm text-gray-600 mb-2">
//                   <FaStar className="text-yellow-500 mr-1" />
//                   <span className="text-black font-semibold mr-1">
//                     {car.rating}
//                   </span>
//                   <span>({car.reviews} review)</span>
//                 </div>

//                 <div className="flex items-center text-sm text-gray-600 mb-2">
//                   <FaMapMarkerAlt className="mr-1" />
//                   <span>{car.location}</span>
//                 </div>

//                 <p className="text-sm text-gray-600 mb-3">
//                   Get a free Vehicle X Ray
//                 </p>

//                 <Link
//                   href={`/cars-for-sale/${car.slug}`}
//                   className="inline-block  bg-[#EB0102] text-white text-sm px-4 py-2 rounded-full"
//                 >
//                   View Deal
//                 </Link>
//               </div>
//             </div>
//           </Link>
//         ))
//       ) : (
//         !isLoading && <p className="text-gray-500">No vehicles found.</p>
//       )}
//     </div>
//   );
// };

// export default FilteredCars;

// import React, { useEffect, useState, useRef } from "react";
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
// import { useVehicalsStore } from "@/lib/store/vehicalStore";
// import { Image_URL } from "@/config/constants";

// const FilteredCars = ({ showFilters = true, showTitle = true }) => {
//   const selectedFilters = ["New", "99000", "BMW", "Couple", "Couple"];

//   const { vehicals, getAllvechicle, isLoading, error } = useVehicalsStore();
//           const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchVehicals = async () => {
//       try {
//         const data = await getAllvechicle();
//         console.log("API Response (Vehicles):", data);
//       } catch (err) {
//         console.error("Error fetching vehicles:", err);
//       }
//     };

//     fetchVehicals();
//   }, [getAllvechicle]);

//   return (
//     <div className="px-4 py-1">
//       {/* Filters */}
//       {showFilters && (
//         <div className="flex flex-wrap items-center gap-2 mb-4">
//           {selectedFilters.map((filter, index) => (
//             <span
//               key={index}
//               className="bg-indigo-50 text-indigo-500 px-3 py-1 rounded-full text-sm flex items-center"
//             >
//               {filter}
//               <button className="ml-1 text-indigo-600 hover:text-indigo-700">
//                 &times;
//               </button>
//             </span>
//           ))}
//         </div>
//       )}

//       {/* Title & Sort */}
//       {showTitle ? (
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-2 mt-10">
//           <h2 className="text-xl font-semibold text-black ">
//             New BMWs for sale
//           </h2>
//           <span className="text-sm text-gray-600  mt-2 sm:mt-0">
//             sort by <span className="font-medium">High Price ▾</span>
//           </span>
//         </div>
//       ) : (
//         <div className="flex justify-end mb-2 mt-10">
//           <span className="text-sm text-gray-600 ">
//             sort by <span className="font-medium">High Price ▾</span>
//           </span>
//         </div>
//       )}

//       {/* Results */}
//       <p className="text-sm text-gray-500 mb-4 ">
//         {vehicals?.length || 0} results
//       </p>

//       {/* Car Listings */}
//       {vehicals && vehicals.length > 0 ? (
//         vehicals.map((car) => {
//           const imgRefs = useRef([]);

//           const handleDotClick = (index) => {
//             setCurrentIndex(index);
//             imgRefs.current[index]?.scrollIntoView({
//               behavior: "smooth",
//               inline: "center",
//               block: "nearest",
//             });
//           };

//           return (
//             <Link
//               href={`/cars-for-sale/${car.vehicle.slug}`}
//               key={car.id}
//               className="block mb-6"
//             >
//               <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row max-w-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
//                 {/* Image Carousel */}
//                 <div className="relative w-full sm:w-1/2">
//                   <div className="flex overflow-x-auto space-x-2 scrollbar-hide">
//                     {car.vehicle?.vehicleMedia?.map((media, idx) => (
//                       <img
//                         key={idx}
//                         ref={(el) => (imgRefs.current[idx] = el)}
//                         src={`${Image_URL}${media.url}`}
//                         alt={`Image ${idx + 1}`}
//                         className="h-[340px] w-full object-cover flex-shrink-0 rounded"
//                       />
//                     ))}
//                   </div>

//                   {/* Dots Navigation */}
//                   <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                     {car.vehicle?.vehicleMedia?.map((_, idx) => (
//                       <button
//                         key={idx}
//                         onClick={(e) => {
//                           e.preventDefault(); // link open na ho
//                           handleDotClick(idx);
//                         }}
//                         className={`h-3 w-3 rounded-full ${
//                           currentIndex === idx ? "bg-blue-600" : "bg-gray-300"
//                         }`}
//                       />
//                     ))}
//                   </div>

//                   {/* Image count */}
//                   <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded shadow text-black">
//                     {car.vehicle.vehicleMedia.length} Images
//                   </div>

//                   {/* Heart button */}
//                   <div className="absolute  right-2">
//                     <IoIosHeartEmpty
//                       size={22}
//                       className="text-white bg-black bg-opacity-40 p-1 rounded-full"
//                     />
//                   </div>

//                   {/* Deal tag */}
//                   <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
//                     Good Deal
//                   </div>
//                 </div>

//                 {/* Car Details */}
//                 <div className="w-full sm:w-1/2 p-4 relative mt-5">
//                   <div className="absolute top-2 right-2 cursor-pointer">
//                     <FaShareAlt className="text-gray-400" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-black mb-1">
//                     {car.vehicle?.vehicleModel?.name}
//                   </h3>

//                   <div className="flex flex-wrap items-center text-gray-600 text-sm space-x-4 mb-2">
//                     <span>
//                       <FaRoad className="inline mr-1" />
//                       {car?.mileage}
//                     </span>
//                     <span>
//                       <FaCogs className="inline mr-1" />
//                       {car.transmission}
//                     </span>
//                     <span>⚙ {car.horsepower}</span>
//                     <span>
//                       <MdLocalGasStation className="inline mr-1" />
//                       {car.fuel}
//                     </span>
//                     <span>{car.mpg}</span>
//                   </div>

//                   <p className="text-md text-black mb-2 font-medium">
//                     Price:{" "}
//                     <span className="text-lg font-semibold">{car.price}</span>
//                   </p>

//                   <div className="text-sm text-gray-600 mb-2">
//                     <span className="mr-4">
//                       Category:{" "}
//                       <strong className="text-black">{car.category}</strong>
//                     </span>
//                     <span>
//                       Warranty:{" "}
//                       <strong className="text-black">{car.warranty}</strong>
//                     </span>
//                   </div>

//                   <div className="text-sm text-black font-medium mb-1">
//                     {car.dealer}
//                   </div>

//                   <div className="flex items-center text-sm text-gray-600 mb-2">
//                     <FaStar className="text-yellow-500 mr-1" />
//                     <span className="text-black font-semibold mr-1">
//                       {car.rating}
//                     </span>
//                     <span>({car.reviews} review)</span>
//                   </div>

//                   <div className="flex items-center text-sm text-gray-600 mb-2">
//                     <FaMapMarkerAlt className="mr-1" />
//                     <span>{car.location}</span>
//                   </div>

//                   <p className="text-sm text-gray-600 mb-3">
//                     Get a free Vehicle X Ray
//                   </p>

//                   <Link
//                     href={`/cars-for-sale/${car.slug}`}
//                     className="inline-block  bg-[#EB0102] text-white text-sm px-4 py-2 rounded-full"
//                   >
//                     View Deal
//                   </Link>
//                 </div>
//               </div>
//             </Link>
//           );
//         })
//       ) : (
//         !isLoading && <p className="text-gray-500">No vehicles found.</p>
//       )}
//     </div>
//   );
// };

// export default FilteredCars;
"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGasPump,
  FaCogs,
  FaRoad,
  FaStar,
  FaMapMarkerAlt,
  FaShareAlt,
} from "react-icons/fa";
import { MdLocalGasStation } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { useVehicalsStore } from "@/lib/store/vehicalStore";
import { Image_URL } from "@/config/constants";

// 🔹 Child component for each car
const CarCard = ({ car }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const imgRefs = React.useRef([]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    imgRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <Link
      href={`/cars-for-sale/${car.vehicle.slug}`}
      key={car.id}
      className="block mb-6"
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col sm:flex-row max-w-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
        {/* Image Carousel */}
        <div className="relative w-full sm:w-1/2">
          <div className="flex overflow-x-auto space-x-2 scrollbar-hide">
            {car.vehicle?.vehicleMedia?.map((media, idx) => (
              <Image
                key={idx}
                ref={(el) => (imgRefs.current[idx] = el)}
                src={`${Image_URL}${media.url}`}
                alt={`Image ${idx + 1}`}
                className="h-[340px] w-full object-cover flex-shrink-0 rounded"
                width={400}
                height={340}
              />
            ))}
          </div>

          {/* 🔹 Dots Navigation */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {car.vehicle?.vehicleMedia?.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault(); // link open na ho
                  handleDotClick(idx);
                }}
                className={`h-3 w-3 rounded-full ${currentIndex === idx ? "bg-blue-600" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>

          {/* Image count */}
          <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded shadow text-black">
            {car.vehicle.vehicleMedia.length} Images
          </div>

          {/* Heart button */}
          <div className="absolute right-2">
            <IoIosHeartEmpty
              size={22}
              className="text-white bg-black bg-opacity-40 p-1 rounded-full"
            />
          </div>

          {/* Deal tag */}
          <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
            Good Deal
          </div>
        </div>

        {/* Car Details */}
        <div className="w-full sm:w-1/2 p-4 relative mt-5">
          <div className="absolute top-2 right-2 cursor-pointer">
            <FaShareAlt className="text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-black mb-1">
            {car.vehicle?.vehicleModel?.name}
          </h3>

          <div className="flex flex-wrap items-center text-gray-600 text-sm space-x-4 mb-2">
            <span>
              <FaRoad className="inline mr-1" />
              {car?.mileage}
            </span>
            <span>
              <FaCogs className="inline mr-1" />
              {car.vehicle.trim.transmissionType}
            </span>
            <span>⚙ {car.vehicle.trim.engineType.horsepower}hp</span>
            <span>
              <MdLocalGasStation className="inline mr-1" />
              {car?.vehicle?.trim?.engineType?.fuelType?.name}{" "}
            </span>
            <span>{car.avg}Avg</span>
          </div>

          <p className="text-md text-black mb-2 font-medium">
            Price: <span className="text-lg font-semibold">{car.price}</span>
          </p>

          <div className="text-sm text-gray-600 mb-2">
            <span className="mr-4">
              Category:{" "}
              <strong className="text-black">
                {car?.vehicle?.bodyType?.name}
              </strong>
            </span>
            <span>
              Warranty: <strong className="text-black">{car.warranty}</strong>
            </span>
          </div>

          <div className="text-sm text-black font-medium mb-1">
            {car.seller?.firstName} {car.seller?.lastName}
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-2">
            <FaStar className="text-yellow-500 mr-1" />
            <span className="text-black font-semibold mr-1">{car.rating}</span>
            <span>({car.reviews} review)</span>
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-2">
            <FaMapMarkerAlt className="mr-1" />
            <span>{car.address}</span>
          </div>

          <p className="text-sm text-gray-600 mb-3">Get a free Vehicle X Ray</p>

          <Link
            href={`/cars-for-sale/${car.slug}`}
            className="inline-block  bg-[#EB0102] text-white text-sm px-4 py-2 rounded-full"
          >
            View Deal
          </Link>
        </div>
      </div>
    </Link>
  );
};

const FilteredCars = ({
  showFilters = false,
  showTitle = true,
  vehicals,
  isLoading,
  filter,
  setFilter,
}) => {
  const selectedFilters = ["New", "99000", "BMW", "Couple", "Couple"];

  return (
    <div className="px-4 py-1">
      {/* Filters */}
      {showFilters && (
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {selectedFilters.map((filter, index) => (
            <span
              key={index}
              className="bg-indigo-50 text-indigo-500 px-3 py-1 rounded-full text-sm flex items-center"
            >
              {filter}
              <button className="ml-1 text-indigo-600 hover:text-indigo-700">
                &times;
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      {showTitle && (
        <div className="flex flex-col sm:flex-row justify-between items-center mb-2 mt-10">
          <h2 className="text-xl font-semibold text-black ">
            {filter.condition} Cars For Sale
          </h2>
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-600 ">Sort by:</label>
            <select
              value={filter.sortOrder}
              onChange={(e) =>
                setFilter((prev) => ({ ...prev, sortOrder: e.target.value }))
              }
              className="border border-gray-300 rounded px-2 py-1 text-sm sm:text-base  text-black"
            >
              <option value="asc">Price (Ascending)</option>
              <option value="desc">Price (Descending)</option>
            </select>
          </div>
        </div>
      )}

      {/* Results */}
      <p className="text-sm text-gray-500 mb-4 ">
        {vehicals?.length || 0} results
      </p>

      {/* Car Listings */}
      {vehicals && vehicals.length > 0
        ? vehicals.map((car) => <CarCard key={car.id} car={car} />)
        : !isLoading && <p className="text-gray-500">No vehicles found.</p>}
    </div>
  );
};

export default FilteredCars;
