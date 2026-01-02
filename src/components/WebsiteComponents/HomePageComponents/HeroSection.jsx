// "use client";
// import React, { useState } from "react";

// export default function HeroSection() {
//   const [carType, setCarType] = useState("");
//   const [brandModel, setBrandModel] = useState("");
//   const [year, setYear] = useState("");
//   const [mileage, setMileage] = useState("");
//   const [fuelType, setFuelType] = useState("");
//   const [transmission, setTransmission] = useState("");

//   return (
//     <section className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 pb-20 overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 w-full h-full -z-10">
//         <img
//           src="Images/homepage-background.png" // Placeholder image
//           alt="Car Banner"
//           className="object-cover object-center w-full h-full"
//           // Fallback for image loading errors
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src =
//               "https://placehold.co/1920x1080/4A5568/FFFFFF?text=Image+Not+Found";
//           }}
//         />
//       </div>

//       {/* Overlay for better text readability */}
//       <div className="absolute inset-0 bg-black opacity-40 -z-10"></div>

//       {/* Text Content (Aligned to Left) */}
//       <div className="relative z-10 text-left ml-5 max-w-[700px] mt-20 sm:mt-24 md:mt-40">
//         <h1 className="text-3xl sm:text-4xl  mt-10 md:text-[40px]  font-medium leading-tight text-white">
//           Find Your Dream Car
//           <br />
//           -Buy, Sell & Trade
//           <br />
//           with Ease
//         </h1>

//         {/* Buttons (Aligned Left) */}
//         <div className="mt-6 flex space-x-4">
//           <button className="bg-white text-gray-800 px-6 sm:px-8 py-2  rounded-3xl font-medium text-sm shadow-md hover:bg-[#EB0102] hover:text-white transition-colors duration-300">
//             Find More
//           </button>
//         </div>
//       </div>

//       {/* Filter Section (Aligned Left) */}
//       <div className="relative z-10 mt-14 w-full max-w-[1100px] mx-auto md:mx-0">
//         {/* Category Filters */}
//         <div className="shadow-lg rounded-lg flex flex-wrap gap-2 w-fit mt-20 sm:mt-32 md:mt-40">
//           <button className="bg-black text-white px-4 sm:px-5 py-2 rounded-md text-sm  flex items-center gap-1">
//             Selected Category <span className="text-xs">&#9660;</span>
//           </button>
//           <button className="bg-white text-black px-4 sm:px-5 py-2 rounded-md text-sm ">
//             Car for Sale
//           </button>
//         </div>

//         {/* Dropdown Filters */}
//         <div className="w-full flex justify-center md:justify-start mt-5">
//           <div className="bg-white shadow-md rounded-xl p-4 mb-10  flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm text-gray-700 w-full max-w-[1100px]">
//             {/* Car Type */}
//             <div className="flex flex-col flex-1 min-w-[120px]">
//               <select
//                 value={carType}
//                 onChange={(e) => setCarType(e.target.value)}
//                 className="py-2 px-2 rounded-md w-full text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Select Car Type</option>
//                 <option value="Hatchback">Hatchback</option>
//                 <option value="Sedan">Sedan</option>
//                 <option value="SUV">SUV</option>
//                 <option value="Truck">Truck</option>
//               </select>
//               <span className="mt-1 text-xs text-gray-500 text-center">
//                 {carType || "-"}
//               </span>
//             </div>

//             <div className="w-px h-10 bg-gray-300 self-center hidden sm:block" />

//             {/* Brand & Model */}
//             <div className="flex flex-col flex-1 min-w-[120px]">
//               <select
//                 value={brandModel}
//                 onChange={(e) => setBrandModel(e.target.value)}
//                 className="py-2 px-2 rounded-md w-full text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Brand & Model</option>
//                 <option value="Honda Civic Hatchback">
//                   Honda Civic Hatchback
//                 </option>
//                 <option value="Toyota Camry">Toyota Camry</option>
//                 <option value="Ford F-150">Ford F-150</option>
//               </select>
//               <span className="mt-1 text-xs text-gray-500 text-center">
//                 {brandModel || "-"}
//               </span>
//             </div>

//             <div className="w-px h-10 bg-gray-300 self-center hidden sm:block" />

//             {/* Year */}
//             <div className="flex flex-col flex-1 min-w-[80px]">
//               <select
//                 value={year}
//                 onChange={(e) => setYear(e.target.value)}
//                 className="py-2 px-2 rounded-md w-full text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Year</option>
//                 <option value="2023">2023</option>
//                 <option value="2022">2022</option>
//                 <option value="2021">2021</option>
//                 <option value="2011">2011</option>
//               </select>
//               <span className="mt-1 text-xs text-gray-500 text-center">
//                 {year || "-"}
//               </span>
//             </div>

//             <div className="w-px h-10 bg-gray-300 self-center hidden sm:block" />

//             {/* Mileage */}
//             <div className="flex flex-col flex-1 min-w-[100px]">
//               <select
//                 value={mileage}
//                 onChange={(e) => setMileage(e.target.value)}
//                 className="py-2 px-2 rounded-md w-full text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Mileage</option>
//                 <option value="0-10k miles">0-10k miles</option>
//                 <option value="10k-50k miles">10k-50k miles</option>
//                 <option value="50k+ miles">50k+ miles</option>
//                 <option value="29-31 mpg">29-31 mpg</option>
//               </select>
//               <span className="mt-1 text-xs text-gray-500 text-center">
//                 {mileage || "-"}
//               </span>
//             </div>

//             <div className="w-px h-10 bg-gray-300 self-center hidden sm:block" />

//             {/* Fuel Type */}
//             <div className="flex flex-col flex-1 min-w-[100px]">
//               <select
//                 value={fuelType}
//                 onChange={(e) => setFuelType(e.target.value)}
//                 className="py-2 px-2 rounded-md w-full text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Fuel Type</option>
//                 <option value="Petrol">Petrol</option>
//                 <option value="Diesel">Diesel</option>
//                 <option value="Electric">Electric</option>
//                 <option value="Hybrid">Hybrid</option>
//               </select>
//               <span className="mt-1 text-xs text-gray-500 text-center">
//                 {fuelType || "-"}
//               </span>
//             </div>

//             <div className="w-px h-10 bg-gray-300 self-center hidden sm:block" />

//             {/* Transmission */}
//             <div className="flex flex-col flex-1 min-w-[100px]">
//               <select
//                 value={transmission}
//                 onChange={(e) => setTransmission(e.target.value)}
//                 className="py-2 px-2 rounded-md w-full text-xs border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <option value="">Transmission</option>
//                 <option value="Manual">Manual</option>
//                 <option value="Automatic">Automatic</option>
//               </select>
//               <span className="mt-1 text-xs text-gray-500 text-center">
//                 {transmission || "-"}
//               </span>
//             </div>

//             <div className="w-px h-10 bg-gray-300 self-center hidden sm:block" />

//             {/* Button */}
//             <div className="flex flex-col justify-center items-center md:items-end w-full md:w-auto mt-4 md:mt-0">
//               <button className="bg-[#EB0102] text-white px-4 py-3 rounded-md text-sm font-medium shadow hover:bg-[#2c2c7a] transition-colors duration-300 w-full md:w-auto">
//                 Show 37 Matches
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right-aligned box for car info (as seen in the image)
//       <div className="absolute top-1/4 right-4 sm:right-8 md:right-16 bg-white rounded-xl shadow-lg p-4 max-w-[200px] hidden lg:block">
//         <p className="text-lg font-bold text-gray-900">$25,000</p>
//         <p className="text-xs text-gray-600 mt-1">
//           Own this car today at an unbeatable price!
//         </p>
//         <img
//           src="/Images/homeBanner.png" // Placeholder for the small car image
//           alt="Small Car"
//           className="w-full h-auto rounded-md mt-3"
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src =
//               "https://placehold.co/150x100/E2E8F0/4A5568?text=Image+Not+Found";
//           }}
//         />
//       </div> */}
//       <div className="absolute top-44 right-4 sm:right-8 md:right-16 bg-white rounded-xl shadow-lg p-4 max-w-[270px] hidden lg:block">
//         <div className="flex justify-between items-start w-full">
//           <p className="text-lg font-bold text-gray-900">$25,000</p>
//           <button className="bg-black text-white rounded-full p-1 w-6 h-6 flex items-center justify-center text-lg">
//             &#8599; {/* Unicode for up-right arrow */}
//           </button>
//         </div>
//         <p className="text-xs text-gray-600 mt-1">
//           Own this car today at an unbeatable price.
//         </p>
//         <img
//           src="/Images/homeBanner.png" // Placeholder for the small car image
//           alt="Small Car"
//           className="w-full h-auto rounded-md mt-3"
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = "https://placehold.co/150x100/E2E8F0/4A5568?text=Image+Not+Found";
//           }}
//         />
//       </div>
//       {/* Bottom right text (as seen in the image) */}
//       <div className="absolute top-2/3 right-4 sm:right-8 md:right-16 max-w-[300px] text-right text-white text-xs hidden md:block">
//         <p>
//           Discover the best deals on new and used cars. Buy or sell effortlessly with trusted dealers and individuals.
//         </p>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { dropDownApi } from "@/lib/api/dropdown";
// import React, { useState, useEffect } from "react";

// export default function HeroSection() {
//   const [carType, setCarType] = useState("");
//   const [brandModel, setBrandModel] = useState("");
//   const [year, setYear] = useState("");
//   const [mileage, setMileage] = useState("");
//   const [fuelType, setFuelType] = useState("");
//   const [transmission, setTransmission] = useState("");
//   const [trim, setTrim] = useState("");
//   const [bodyType, setBodyType] = useState("");
//   const [engineType, setEngineType] = useState("");
//   const [color, setColor] = useState("");

//   // API se aane wala data
//   const [brands, setBrands] = useState([]);
//   const [trims, setTrims] = useState([]);
//   const [bodyTypes, setBodyTypes] = useState([]);
//   const [fuels, setFuels] = useState([]);
//   const [engines, setEngines] = useState([]);
//   const [colors, setColors] = useState([]);

//   useEffect(() => {
//     dropDownApi.getBrandlist().then((res) => setBrands(res.data || []));
//     dropDownApi.getTrimlist().then((res) => setTrims(res.data || []));
//     dropDownApi.getBodyTypelist().then((res) => setBodyTypes(res.data || []));
//     dropDownApi.getFuelTypelist().then((res) => setFuels(res.data || []));
//     dropDownApi.getEngineTypelist().then((res) => setEngines(res.data || []));
//     dropDownApi.getColorlist().then((res) => setColors(res.data || []));
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 pb-20 overflow-hidden">

//       {/* Filter Section */}
//       <div className="relative z-10 mt-14 w-full max-w-[1100px] mx-auto md:mx-0">
//         <div className="w-full flex justify-center md:justify-start mt-5">
//           <div className="bg-white shadow-md rounded-xl p-4 mb-10  flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm text-gray-700 w-full max-w-[1100px]">

//             {/* Brand & Model */}
//             <div className="flex flex-col flex-1 min-w-[120px]">
//               <select
//                 value={brandModel}
//                 onChange={(e) => setBrandModel(e.target.value)}
//                 className="py-2 px-2 rounded-md w-full text-xs border"
//               >
//                 <option value="">Brand & Model</option>
//                 {brands.map((b) => (
//                   <option key={b.id} value={b.name}>
//                     {b.name}
//                   </option>
//                 ))}
//               </select>
//               <span className="mt-1 text-xs text-gray-500 text-center">
//                 {brandModel || "-"}
//               </span>
//             </div>

//             {/* Trim */}
//             <div className="flex flex-col flex-1 min-w-[120px]">
//               <select
//                 value={trim}
//                 onChange={(e) => setTrim(e.target.value)}
//                 className="py-2 px-2 rounded-md w-full text-xs border"
//               >
//                 <option value="">Trim</option>
//                 {trims.map((t) => (
//                   <option key={t.id} value={t.name}>
//                     {t.name}
//                   </option>
//                 ))}
//               </select>
//               <span className="mt-1 text-xs text-gray-500 text-center">
//                 {trim || "-"}
//               </span>
//             </div>

//             {/* Body Type */}
//             <div className="flex flex-col flex-1 min-w-[120px]">
//               <select
//                 value={bodyType}
//                 onChange={(e) => setBodyType(e.target.value)}
//                 className="py-2 px-2 rounded-md w-full text-xs border"
//               >
//                 <option value="">Body Type</option>
//                 {bodyTypes.map((bt) => (
//                   <option key={bt.id} value={bt.name}>
//                     {bt.name}
//                   </option>
//                 ))}
//               </select>
//               <span className="mt-1 text-xs text-gray-500 text-center">
//                 {bodyType || "-"}
//               </span>
//             </div>

//             {/* Fuel Type */}
//             <div className="flex flex-col flex-1 min-w-[120px]">
//               <select
//                 value={fuelType}
//                 onChange={(e) => setFuelType(e.target.value)}
//                 className="py-2 px-2 rounded-md w-full text-xs border"
//               >
//                 <option value="">Fuel Type</option>
//                 {fuels.map((f) => (
//                   <option key={f.id} value={f.name}>
//                     {f.name}
//                   </option>
//                 ))}
//               </select>
//               <span className="mt-1 text-xs text-gray-500 text-center">
//                 {fuelType || "-"}
//               </span>
//             </div>

//             {/* Engine Type */}
//             <div className="flex flex-col flex-1 min-w-[120px]">
//               <select
//                 value={engineType}
//                 onChange={(e) => setEngineType(e.target.value)}
//                 className="py-2 px-2 rounded-md w-full text-xs border"
//               >
//                 <option value="">Engine Type</option>
//                 {engines.map((en) => (
//                   <option key={en.id} value={en.name}>
//                     {en.name}
//                   </option>
//                 ))}
//               </select>
//               <span className="mt-1 text-xs text-gray-500 text-center">
//                 {engineType || "-"}
//               </span>
//             </div>

//             {/* Color */}
//             <div className="flex flex-col flex-1 min-w-[120px]">
//               <select
//                 value={color}
//                 onChange={(e) => setColor(e.target.value)}
//                 className="py-2 px-2 rounded-md w-full text-xs border"
//               >
//                 <option value="">Color</option>
//                 {colors.map((c) => (
//                   <option key={c.id} value={c.name}>
//                     {c.name}
//                   </option>
//                 ))}
//               </select>
//               <span className="mt-1 text-xs text-gray-500 text-center">
//                 {color || "-"}
//               </span>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// ******************************************
"use client";
import { Image_URL } from "@/config/constants";
import { dropDownApi } from "@/lib/api/dropdown";
import { vehicalsApi } from "@/lib/api/vehical";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const router = useRouter();
  // States for selected values
  const [carType, setCarType] = useState("");
  const [brandModel, setBrandModel] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [transmission, setTransmission] = useState("");
  const [trim, setTrim] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [engineType, setEngineType] = useState("");
  const [color, setColor] = useState("");

  // API data states
  const [brands, setBrands] = useState([]);
  const [trims, setTrims] = useState([]);
  const [bodyTypes, setBodyTypes] = useState([]);
  const [fuels, setFuels] = useState([]);
  const [engines, setEngines] = useState([]);
  const [colors, setColors] = useState([]);
  const [banners, setBanners] = useState([]);
  const [loadingBanner, setLoadingBanner] = useState(true);

  // Fetch dropdown data from API
  useEffect(() => {
    dropDownApi.getBrandlist().then((res) => setBrands(res.data || []));
    dropDownApi.getVehiclemodel().then((res) => setTrims(res.data || []));
    dropDownApi.getBodyTypelist().then((res) => setBodyTypes(res.data || []));
    dropDownApi.getFuelTypelist().then((res) => setFuels(res.data || []));
    dropDownApi.getEngineTypelist().then((res) => setEngines(res.data || []));
    dropDownApi.getColorlist().then((res) => setColors(res.data || []));
  }, []);
  useEffect(() => {
    vehicalsApi
      .homeBanner()
      .then((res) => {
        console.log("Home Banner API Response:", res.data[0]); // 👈 first banner object
        setBanners(res.data[0] || null); // 👈 first banner object save karlo
      })
      .catch((err) => console.error("Error fetching banners:", err))
      .finally(() => setLoadingBanner(false));
  }, []);

  const handleShowMatches = () => {
    const query = new URLSearchParams();

    if (brandModel) {
      const selected = brands.find((b) => b.id === Number(brandModel));
      query.append("brandId", brandModel);
      query.append("brandName", encodeURIComponent(selected?.name || ""));
    }

    if (trim) {
      const selected = trims.find((t) => t.id === Number(trim));
      query.append("vehicleModelId", trim);
      query.append("modalName", encodeURIComponent(selected?.name || ""));
    }

    if (bodyType) {
      const selected = bodyTypes.find((bt) => bt.id === Number(bodyType));
      query.append("bodyTypeId", bodyType);
      query.append("bodyTypeName", encodeURIComponent(selected?.name || ""));
    }

    if (fuelType) {
      const selected = fuels.find((f) => f.id === Number(fuelType));
      query.append("fuelTypeId", fuelType);
      query.append("fuelTypeName", encodeURIComponent(selected?.name || ""));
    }

    router.push(`/cars-for-sale?${query.toString()}`);
  };
  return (
    <>
      {loadingBanner ? (
        // 🔹 Skeleton Loader
        <div className="relative w-full h-[400px] md:h-[800px] bg-gray-200 animate-pulse rounded-lg overflow-hidden">
          <div className="absolute top-40 left-10 w-2/3 h-8 bg-gray-300 rounded"></div>
          <div className="absolute top-52 left-10 w-1/2 h-8 bg-gray-300 rounded"></div>
          {/* <div className="absolute top-56 left-10 w-1/3 h-6 bg-gray-300 rounded"></div> */}
          <div className="absolute top-64 left-10 w-32 h-10 bg-gray-300 rounded-full"></div>
          <div className="absolute top-52 right-10 w-64 h-44 bg-gray-300 rounded-xl"></div>
        </div>
      ) : (
        <section className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-16 pb-20 overflow-hidden">
          <div>
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full -z-10">
              <img
                src={
                  // car?.vehicle.vehicleMedia.url
                  `${Image_URL}${banners.imageUrl}` // base url + image ka naam
                  // : "/Images/findBest1.png" // fallback local image
                }
                // src="Images/homepage-background.png" // Placeholder image
                alt="Car Banner"
                className="object-cover object-center w-full h-full"
                // Fallback for image loading errors
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/homepage-background.png";
                }}
              />
            </div>

            <div className="absolute inset-0 bg-black opacity-40 -z-10"></div>

            <div className="relative z-10 text-left ml-5 max-w-[700px] mt-30 sm:mt-24 md:mt-40">
              <h1 className=" font-rajdhani mt-64 text-[40px]  font-medium leading-tight text-white md:max-w-sm ">
                {banners.title}
                <br />
              </h1>

              {/* Buttons (Aligned Left) */}
              <div className="mt-6 mb-10 flex space-x-4">
                <button className="bg-white text-gray-800 px-6 sm:px-8 py-2 rounded-3xl font-medium text-sm
shadow-sm outline-none focus:outline-none focus:ring-0
hover:bg-[#EB0102] hover:text-white transition-colors duration-300">
                  Find More
                </button>
              </div>
            </div>

            <div className="my-4"></div>
            {/* Filter Section (Aligned Left) */}
            <div className="relative z-10 mt-44 w-full max-w-[1100px] mx-auto">
              <div className="w-full flex justify-center mt-10">
                <div className="bg-[#F6F6F6] shadow-md rounded-xl p-4 mt-24 mb-10 flex flex-wrap justify-center items-center gap-4 text-sm text-gray-700 w-full max-w-[1100px]">
                  {/* Brand & Model */}
                  <div className="flex flex-col flex-1 min-w-[120px]">
                    <select
                      value={brandModel}
                      onChange={(e) => setBrandModel(e.target.value)}
                      className="bg-[#F6F6F6] py-2 px-2 rounded-md w-fit text-xs border-none"
                    >
                      <option value="">Brand</option>
                      {brands.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="hidden md:block h-8 w-[1px] bg-gray-300"></div>

                  {/* Trim */}
                  <div className="flex flex-col flex-1 min-w-[120px]">
                    <select
                      value={trim}
                      onChange={(e) => setTrim(e.target.value)}
                      className="bg-[#F6F6F6] py-2 px-2 rounded-md w-fit text-xs border-none"
                    >
                      <option value="">Model</option>
                      {trims.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="hidden md:block h-8 w-[1px] bg-gray-300"></div>

                  {/* Body Type */}
                  <div className="flex flex-col flex-1 min-w-[120px]">
                    <select
                      value={bodyType}
                      onChange={(e) => setBodyType(e.target.value)}
                      className="bg-[#F6F6F6] py-2 px-2 rounded-md w-fit text-xs border-none"
                    >
                      <option value="">Body Type</option>
                      {bodyTypes.map((bt) => (
                        <option key={bt.id} value={bt.id}>
                          {bt.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="hidden md:block h-8 w-[1px] bg-gray-300"></div>

                  {/* Fuel Type */}
                  <div className="flex flex-col flex-1 min-w-[120px]">
                    <select
                      value={fuelType}
                      onChange={(e) => setFuelType(e.target.value)}
                      className="bg-[#F6F6F6] py-2 px-2 rounded-md w-fit text-xs border-none"
                    >
                      <option value="">Fuel Type</option>
                      {fuels.map((f) => (
                        <option key={f.id} value={f.id}>
                          {f.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="hidden md:block h-8 w-[1px] bg-gray-300"></div>

                  {/* Button */}
                  <div className="flex flex-col flex-2 md:flex-shrink min-w-[5px] ">
                    <button
                      onClick={handleShowMatches}
                      className="bg-[#EB0102] text-white px-2 py-6  rounded-md text-sm font-medium shadow  transition-colors duration-300"
                    >
                      Show Matches
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href={`/cars-for-sale/${banners.vehicleSale?.vehicle?.slug}`}
              className="absolute top-44 right-4 sm:right-8 md:right-16 bg-white rounded-[32px] shadow-2xl p-6 max-w-[320px] hidden lg:block transition-transform hover:scale-105 duration-300"
            >
              {/* Header: Price and Arrow Button */}
              <div className="flex justify-between items-start w-full mb-2">
                <h2 className="font-rajdhani text-3xl font-medium  text-black tracking-tight">
                  ৳{banners?.vehicleSale?.price || "25,000"}
                </h2>
                <div className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                  <span className="text-xl font-light transform rotate-0">↗</span>
                </div>
              </div>

              {/* Description */}
              <p className="font-poppins text-[15px] leading-tight text-gray-800 font-normal pr-8 mb-4">
                {banners?.vehicleSale?.description || "Own this car today at an unbeatable price."}
              </p>

              {/* Car Image with no-background look */}
              <div className="relative w-full h-40 flex items-center justify-center">
                <img
                  src={`${Image_URL}${banners?.vehicleSale?.vehicle.vehicleMedia[0]?.url}`}
                  alt="Featured Vehicle"
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/300x200/FFFFFF/000000?text=Car+Image";
                  }}
                />
              </div>
            </Link>
            {/* Bottom right text (as seen in the image) */}
            <div className="font-poppins absolute top-2/3 right-4 sm:right-8 md:right-16 max-w-[230px] text-left text-white text-xs hidden md:block ">
              <p>
                Discover the best deals on new and used cars. Buy or sell effortlessly with trusted dealers and individuals.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

