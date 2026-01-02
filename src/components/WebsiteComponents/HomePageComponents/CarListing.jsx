// "use client";

// import { useVehicalsStore } from "@/lib/store/vehicalStore";
// import React, { useEffect, useState } from "react";

// const CarListing = () => {
//   const cars = [
//     {
//       id: 1,
//       image: "/Images/findBest1.png", // Placeholder for car1.jpg
//       name: "BMW 335 xi",
//       price: "$5,900",
//       mileage: "137,406 mi.",
//       year: "2008",
//       fuel: "Gasoline",
//       location: "North Pole | Alaska",
//       status: "Good Deal",
//     },
//     {
//       id: 2,
//       image: "/Images/findBest1.png", // Placeholder for car2.jpg
//       name: "BMW 335 xi",
//       price: "$5,900",
//       mileage: "137,406 mi.",
//       year: "2008",
//       fuel: "Gasoline",
//       location: "North Pole | Alaska",
//       status: "Good Deal",
//     },
//     {
//       id: 3,
//       image: "/Images/findBest1.png",
//       name: "BMW 335 xi",
//       price: "$5,900",
//       mileage: "137,406 mi.",
//       year: "2008",
//       fuel: "Gasoline",
//       location: "North Pole | Alaska",
//       status: "Good Deal",
//     },
//     {
//       id: 4,
//       image: "/Images/findBest1.png",
//       name: "BMW 335 xi",
//       price: "$5,900",
//       mileage: "137,406 mi.",
//       year: "2008",
//       fuel: "Gasoline",
//       location: "North Pole | Alaska",
//       status: "Good Deal",
//     },
//     {
//       id: 5,
//       image: "/Images/findBest1.png",
//       name: "BMW 335 xi",
//       price: "$5,900",
//       mileage: "137,406 mi.",
//       year: "2008",
//       fuel: "Gasoline",
//       location: "North Pole | Alaska",
//       status: "Good Deal",
//     },
//     {
//       id: 6,
//       image: "/Images/findBest1.png",
//       name: "BMW 335 xi",
//       price: "$5,900",
//       mileage: "137,406 mi.",
//       year: "2008",
//       fuel: "Gasoline",
//       location: "North Pole | Alaska",
//       status: "Good Deal",
//     },
//     {
//       id: 7,
//       image: "/Images/findBest1.png",
//       name: "BMW 335 xi",
//       price: "$5,900",
//       mileage: "137,406 mi.",
//       year: "2008",
//       fuel: "Gasoline",
//       location: "North Pole | Alaska",
//       status: "Good Deal",
//     },
//     {
//       id: 8,
//       image: "/Images/findBest1.png",
//       name: "BMW 335 xi",
//       price: "$5,900",
//       mileage: "137,406 mi.",
//       year: "2008",
//       fuel: "Gasoline",
//       location: "North Pole | Alaska",
//       status: "Good Deal",
//     },
//   ];

//   const filters = [
//     { label: "Price Range", options: ["$8,000", "$10,000", "$12,000"] },
//     { label: "New/Used Status", options: ["New", "Used"] },
//     { label: "Select Car Type", options: ["Hatchback", "Sedan", "SUV"] },
//     { label: "Brand & Model", options: ["Honda Civic Hatchback", "Toyota Camry", "Ford F-150"] },
//     { label: "Fuel Type", options: ["Petrol", "Diesel", "Electric"] },
//     { label: "Mileage", options: ["29-31 mpg", "10k-20k miles", "20k-50k miles"] },
//     { label: "Transmission", options: ["Manual", "Automatic"] },
//   ];
//   const { vehicals, getAllvechicle, isLoading, error } = useVehicalsStore();
//  useEffect(() => {
//     const fetchVehicals = async () => {
//       try {
//         const data = await getAllvechicle(); // call store function
//         console.log("API Response (Vehicles):", data); // 👈 console par data
//       } catch (err) {
//         console.error("Error fetching vehicles:", err);
//       }
//     };

//     fetchVehicals();
//   }, [getAllvechicle]);

//   return (
//     <div className="w-full px-20 py-10 bg-white flex flex-col justify-center items-center">
//       {/* Title Section */}
//       <h2 className="text-2xl sm:text-4xl font-semibold text-center text-black font-hanken">
//         Find the Best Cars at the Best Prices
//       </h2>
//       <p className="text-gray-600 text-center mt-2 font-hanken text-sm sm:text-base w-2/3">
//         Explore the most popular car listings based on real-time trends. Whether you're looking for budget-friendly options, SUVs under $10K, or the latest models, we've got you covered.
//       </p>

//       {/* Filter Dropdowns */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mt-6">
//         {filters.map((filter, index) => (
//           <select
//             key={index}
//             className="border border-gray-300 p-2 rounded-md  text-sm w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">{filter.label}</option>
//             {filter.options.map((option, optIndex) => (
//               <option key={optIndex} value={option}>{option}</option>
//             ))}
//           </select>
//         ))}
//       </div>

//       {/* Car Listings */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//       {cars.map((car) => (
//   <div
//     key={car.id}
//     className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white max-w-xs"
//   >
//     {/* Image Section */}
//     <div className="relative w-full h-44 bg-gray-100">
//       <img
//         src={car.image}
//         alt={car.name}
//         className="w-full h-full object-cover"
//         onError={(e) => {
//           e.target.onerror = null;
//           e.target.src = "https://placehold.co/300x200/E2E8F0/4A5568?text=Image+Not+Found";
//         }}
//       />
//       {car.status && (
//         <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] px-2 py-1 rounded-full font-medium shadow-sm">
//           {car.status}
//         </span>
//       )}
//     </div>

//     {/* Car Info */}
//     <div className="p-4 bg-gray-50">

//       <div className="flex justify-between items-end mt-1 ">
//  <h3 className="text-[18px] font-semibold text-gray-900 font-hanken">
//         {car.name}
//       </h3>
//         <p className="text-red-600 font-bold text-[18px] font-hanken">
//           {car.price}
//         </p>
//       </div>
// <div className="flex justify-between items-end mt-1">        <div>
//           <p className="text-gray-500 text-[12px] font-hanken">
//             {car.mileage}
//           </p>
//           <p className="text-gray-500 text-[12px] font-hanken">
//             {car.year} | {car.fuel}
//           </p>
//         </div>
//       {/* Location */}
//       <div className="mt-3 flex justify-end">
//         <span className="bg-gray-200 text-gray-700 text-[10px] font-medium px-3 py-[3px] rounded-full font-hanken">
//           {car.location}
//         </span>
//       </div>
//       </div>
//     </div>
//   </div>
// ))}

//       </div>

//       {/* "See More" Button */}
//       <div className="text-center mt-6 sm:mt-10">
//         <button className="bg-[#EB0102] text-white px-8 py-3 rounded-lg font-hanken font-semibold shadow-md hover:bg-purple-900 transition-colors duration-300">
//           22 Results See More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarListing;

// "use client";

// import { Image_URL } from "@/config/constants";
// import { dropDownApi } from "@/lib/api/dropdown";
// import { vehicalsApi } from "@/lib/api/vehical";
// import { useVehicalsStore } from "@/lib/store/vehicalStore";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// const CarListing = () => {
//   // const { vehicals, isLoading, error } = useVehicalsStore();
//   const [vehicals, setVehicals] = useState([]);

//   // dropdown state
//   const [brands, setBrands] = useState([]);
//   const [bodyTypes, setBodyTypes] = useState([]);
//   const [fuelTypes, setFuelTypes] = useState([]);
//   const [colors, setColors] = useState([]);
//   const [filters, setFilters] = useState({
//     brandId: "",
//     bodyTypeId: "",
//     fuelTypeId: "",
//     colorId: "",
//   });

//   // fetch dropdown data
//   useEffect(() => {
//     const fetchDropdowns = async () => {
//       try {
//         const [brandsRes, bodyTypesRes, fuelTypesRes, colorsRes] =
//           await Promise.all([
//             dropDownApi.getBrandlist(),
//             dropDownApi.getBodyTypelist(),
//             dropDownApi.getFuelTypelist(),
//             dropDownApi.getColorlist(),
//           ]);
//         console.log("brandsRes", brandsRes);
//         console.log("bodyTypesRes", bodyTypesRes);
//         console.log("fuelTypesRes", fuelTypesRes);
//         console.log("colorsRes", colorsRes);

//         setBrands(brandsRes.data);
//         setBodyTypes(bodyTypesRes.data);
//         setFuelTypes(fuelTypesRes.data);
//         setColors(colorsRes.data);
//       } catch (err) {
//         console.error("Error fetching dropdowns:", err);
//       }
//     };

//     fetchDropdowns();
//   }, []);

//   // fetch vehicles when filter changes
//   useEffect(() => {
//     // Clean filters before API call
//     const fetchVehicles = async () => {
//       try {
//         // remove empty filters
//         const cleanFilters = Object.fromEntries(
//           Object.entries(filters).filter(([_, v]) => v !== "")
//         );

//         const res = await vehicalsApi.getVehicallist(cleanFilters);
//         console.log("Filtered vehicles:", res.data);
//         setVehicals(res.data);
//       } catch (err) {
//         console.error("Error fetching vehicles:", err);
//       }
//     };

//     fetchVehicles();
//   }, [filters]);

//   // const filters = [
//   //   { label: "Price Range", options: ["$8,000", "$10,000", "$12,000"] },
//   //   { label: "New/Used Status", options: ["NEW", "USED", "DEMO", "CERTIFIED_PRE_OWNED"] },
//   //   { label: "Select Car Type", options: ["Hatchback", "Sedan", "SUV"] },
//   //   { label: "Brand & Model", options: ["Honda Civic Hatchback", "Toyota Camry", "Ford F-150"] },
//   //   { label: "Fuel Type", options: ["Petrol", "Diesel", "Electric"] },
//   //   { label: "Mileage", options: ["29-31 mpg", "10k-20k miles", "20k-50k miles"] },
//   //   { label: "Transmission", options: ["Manual", "Automatic"] },
//   // ];

//   return (
//     <div className="w-full px-20 py-10 bg-white flex flex-col justify-center items-center">
//       {/* Title Section */}
//       <h2 className="text-2xl sm:text-4xl font-semibold text-center text-black font-hanken">
//         Find the Best Cars at the Best Prices
//       </h2>
//       <p className="text-gray-600 text-center mt-2 font-hanken text-sm sm:text-base w-2/3">
//         Explore the most popular car listings based on real-time trends. Whether
//         you're looking for budget-friendly options, SUVs under $10K, or the
//         latest models, we've got you covered.
//       </p>

//       {/* Filter Dropdowns */}
//       {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mt-6">
//         {filters.map((filter, index) => (
//           <select
//             key={index}
//             className="border border-gray-300 p-2 rounded-md  text-sm w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">{filter.label}</option>
//             {filter.options.map((option, optIndex) => (
//               <option key={optIndex} value={option}>{option}</option>
//             ))}
//           </select>
//         ))}
//       </div> */}
//       {/* Filter Dropdowns */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
//         {/* Brand */}
//         <select
//           value={filters.brandId}
//           onChange={(e) => setFilters({ ...filters, brandId: e.target.value })}
//           className="border border-gray-300 p-2 rounded-md"
//         >
//           <option value="">Select Brand</option>
//           {brands.map((b) => (
//             <option key={b.id} value={b.id}>
//               {b.name}
//             </option>
//           ))}
//         </select>

//         {/* Body Type */}
//         <select
//           value={filters.bodyTypeId}
//           onChange={(e) =>
//             setFilters({ ...filters, bodyTypeId: e.target.value })
//           }
//           className="border border-gray-300 p-2 rounded-md"
//         >
//           <option value="">Select Body Type</option>
//           {bodyTypes.map((bt) => (
//             <option key={bt.id} value={bt.id}>
//               {bt.name}
//             </option>
//           ))}
//         </select>

//         {/* Fuel Type */}
//         <select
//           value={filters.fuelTypeId}
//           onChange={(e) =>
//             setFilters({ ...filters, fuelTypeId: e.target.value })
//           }
//           className="border border-gray-300 p-2 rounded-md"
//         >
//           <option value="">Select Fuel Type</option>
//           {fuelTypes.map((f) => (
//             <option key={f.id} value={f.id}>
//               {f.name}
//             </option>
//           ))}
//         </select>

//         {/* Color */}
//         <select
//           value={filters.colorId}
//           onChange={(e) => setFilters({ ...filters, colorId: e.target.value })}
//           className="border border-gray-300 p-2 rounded-md"
//         >
//           <option value="">Select Color</option>
//           {colors.map((c) => (
//             <option key={c.id} value={c.id}>
//               {c.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Car Listings */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
//         {vehicals && vehicals.length > 0 ? (
//           vehicals.map((car) => (
//             <Link
//               key={car.id}
//               href={`/cars-for-sale/${car.vehicle.slug}`} // 👈 slug use kiya
//               className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white max-w-xs"
//             >
//               {/* Image Section */}
//               <div className="relative w-full h-44 bg-gray-100">
//                 <Image
//                   src={
//                     // car?.vehicle.vehicleMedia.url
//                     `${Image_URL}${car.vehicle.vehicleMedia[0].url}` // base url + image ka naam
//                     // : "/Images/findBest1.png" // fallback local image
//                   }
//                   alt={car?.name || "Car Image"}
//                   width={300} // required by Next Image
//                   height={200} // required by Next Image
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     e.currentTarget.src =
//                       "https://placehold.co/300x200/E2E8F0/4A5568?text=Image+Not+Found";
//                   }}
//                 />
//                 {car.status && (
//                   <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] px-2 py-1 rounded-full font-medium shadow-sm">
//                     {car.status}
//                   </span>
//                 )}
//               </div>

//               {/* Car Info */}
//               <div className="p-4 bg-gray-50">
//                 <div className="flex justify-between items-end mt-1 ">
//                   <h3 className="text-[18px] font-semibold text-gray-900 font-hanken">
//                     {car.vehicle.trim.name}
//                   </h3>
//                   <p className="text-red-600 font-bold text-[18px] font-hanken">
//                     {car.price}
//                   </p>
//                 </div>
//                 <div className="flex justify-between items-end mt-1">
//                   <div>
//                     <p className="text-gray-500 text-[12px] font-hanken">
//                       {car.mileage} milage
//                     </p>
//                     <p className="text-gray-500 text-[12px] font-hanken">
//                       {car.vehicle.trim.year} |{" "}
//                       {car.vehicle.trim.transmissionType}
//                     </p>
//                   </div>
//                   {/* Location */}
//                   <div className="mt-3 flex justify-end">
//                     <span className="bg-gray-200 text-gray-700 text-[10px] font-medium px-3 py-[3px] rounded-full font-hanken">
//                       {car.address}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="text-gray-500">No vehicles found.</p>
//         )}
//       </div>

//       {/* "See More" Button */}
//       <div className="text-center mt-6 sm:mt-10">
//         <button className="bg-[#EB0102] text-white px-8 py-3 rounded-lg font-hanken font-semibold shadow-md hover:bg-purple-900 transition-colors duration-300">
//           22 Results See More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarListing;

"use client";

import { Image_URL } from "@/config/constants";
import { dropDownApi } from "@/lib/api/dropdown";
import { vehicalsApi } from "@/lib/api/vehical";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CarDetailModal from "../TradeInComponents/TradeInForm/CarDetailModal";

const CarListing = ({ scenario = false, selectedCarId, setSelectedCarId }) => {
  const [vehicals, setVehicals] = useState([]);
  const [brands, setBrands] = useState([]);
  const [bodyTypes, setBodyTypes] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [colors, setColors] = useState([]);
  const [filters, setFilters] = useState({
    brandId: "",
    bodyTypeId: "",
    fuelTypeId: "",
    colorId: "",
  });
  const [open, setOpen] = useState(false);


  useEffect(() => {
    const fetchDropdowns = async () => {
      try {
        const [brandsRes, bodyTypesRes, fuelTypesRes, colorsRes] =
          await Promise.all([
            dropDownApi.getBrandlist(),
            dropDownApi.getBodyTypelist(),
            dropDownApi.getFuelTypelist(),
            dropDownApi.getColorlist(),
          ]);

        setBrands(brandsRes.data);
        setBodyTypes(bodyTypesRes.data);
        setFuelTypes(fuelTypesRes.data);
        setColors(colorsRes.data);
      } catch (err) {
        console.error("Error fetching dropdowns:", err);
      }
    };

    fetchDropdowns();
  }, []);

  // fetch vehicles when filter changes
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const cleanFilters = Object.fromEntries(
          Object.entries(filters).filter(([_, v]) => v !== "")
        );
        const res = await vehicalsApi.getVehicallist(cleanFilters);
        setVehicals(res.data);
      } catch (err) {
        console.error("Error fetching vehicles:", err);
      }
    };

    fetchVehicles();
  }, [filters]);

  return (
    <div className="w-full px-5 md:px-20 py-10 bg-white flex flex-col justify-center items-center">
      {/* Title Section */}
      <h2 className="text-2xl sm:text-4xl font-semibold text-center text-black font-hanken">
        Find the Best Cars at the Best Prices
      </h2>
      <p className="text-gray-600 text-center mt-2 font-hanken text-sm sm:text-base w-2/3">
        Explore the most popular car listings based on real-time trends.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
        {/* Brand */}
        <select
          value={filters.brandId}
          onChange={(e) => setFilters({ ...filters, brandId: e.target.value })}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="">Select Brand</option>
          {brands.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>

        {/* Body Type */}
        <select
          value={filters.bodyTypeId}
          onChange={(e) =>
            setFilters({ ...filters, bodyTypeId: e.target.value })
          }
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="">Select Body Type</option>
          {bodyTypes.map((bt) => (
            <option key={bt.id} value={bt.id}>
              {bt.name}
            </option>
          ))}
        </select>

        {/* Fuel Type */}
        <select
          value={filters.fuelTypeId}
          onChange={(e) =>
            setFilters({ ...filters, fuelTypeId: e.target.value })
          }
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="">Select Fuel Type</option>
          {fuelTypes.map((f) => (
            <option key={f.id} value={f.id}>
              {f.name}
            </option>
          ))}
        </select>

        {/* Color */}
        <select
          value={filters.colorId}
          onChange={(e) => setFilters({ ...filters, colorId: e.target.value })}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="">Select Color</option>
          {colors.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      {/* Car Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {vehicals && vehicals.length > 0 ? (
          vehicals.map((car) => {
            const isSelected = selectedCarId === car.id;

            return (
              <div key={car.id} className="flex flex-col items-center">
                {/* Card */}
                <div className="border border-gray-200 rounded-xl overflow-hidden transition duration-300 bg-white w-full max-w-xs h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative w-full h-40 sm:h-44 bg-gray-100">
                    <Image
                      src={`${Image_URL}${car.vehicle.vehicleMedia[0].url}`}
                      alt={car?.name || "Car Image"}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    {car.status && (
                      <span className="absolute top-2 right-2 bg-green-500 text-white text-[7px] px-2 py-1 rounded-full font-medium shadow-sm">
                        {car.status}
                      </span>
                    )}

                    {/* Checkbox only if scenario = true */}
                    {scenario && (
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() =>
                          setSelectedCarId(isSelected ? null : car.id)
                        }
                        className="absolute top-2 left-2 w-5 h-5 accent-blue-600 cursor-pointer"
                      />
                    )}
                  </div>

                  {/* Car Info */}
                  <div className="p-4 bg-gray-50 flex flex-col flex-grow justify-between">                    <div className="flex justify-between items-end mt-1">
                    <h3 className="text-[16px] font-semibold text-gray-900 font-hanken line-clamp-1">                      {car.vehicle.trim.name}
                    </h3>
                    <p className="text-red-600 font-bold text-[18px] font-hanken">
                      {car.price}
                    </p>
                  </div>
                    <div className="flex justify-between items-end mt-1">
                      <div>
                        <p className="text-gray-500 text-[12px] font-hanken">
                          {car.mileage} mileage
                        </p>
                        <p className="text-gray-500 text-[12px] font-hanken">
                          {car.vehicle.trim.year} |{" "}
                          {car.vehicle.trim.transmissionType}
                        </p>
                      </div>
                      <div className="mt-3 flex justify-end">
                        <span className="text-gray-700 border border-black  text-[10px] font-medium px-3 py-[3px] rounded-[14px] font-hanken">
                          {car.address}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 👇 Button card ke bahar, thoda gap ke sath */}
                {scenario && (
                  <div className="mt-3 border w-full p-2  rounded-[24px] border-black text-center">
                    <button
                      onClick={() => setOpen(true)}
                      className=" text-black px-4 py-2 rounded-md text-sm  transition"
                    >
                      View Details
                    </button>
                    <CarDetailModal isOpen={open} onClose={() => setOpen(false)} />

                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-gray-500">No vehicles found.</p>
        )}

      </div>
    </div>
  );
};

export default CarListing;
