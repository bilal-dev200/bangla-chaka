// "use client";

// import { Image_URL } from "@/config/constants";
// import { useVehicalsStore } from "@/lib/store/vehicalStore";
// import Image from "next/image";
// import React, { useEffect } from "react";
// const Shopviews = () => {
//       const { vehicals, getAllvechicle, isLoading, error } = useVehicalsStore();

//       useEffect(() => {
//         const fetchVehicals = async () => {
//           try {
//             const data = await getAllvechicle(); // store ka function call
//             console.log("API Response (Vehicles):", data); // 👈 console mai check karo
//           } catch (err) {
//             console.error("Error fetching vehicles:", err);
//           }
//         };

//         fetchVehicals();
//       }, [getAllvechicle]);

//   return (
//     <div>
//              <div className="mt-16  p-10">
//         <h2 className="text-2xl font-semibold text-black mb-6 px-4 md:px-0">
//           Shoppers Also Viewed
//         </h2>

//         <div className="overflow-x-auto scrollbar-hide -mx-4 md:mx-0">
//           <div className="flex gap-4 sm:gap-6 px-4 md:px-0 pb-2 w-max">
//             {[1, 2, 3, 4].map((_, i) => (
//               <div
//                 key={i}
//                 className="min-w-[240px] max-w-[240px] sm:min-w-[250px] sm:max-w-[250px] bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
//               >
//                 <div className="relative">
//                   <img
//                     src="/Images/ShoppersCar.png"
//                     alt="BMW 335 xi"
//                     className="w-full h-[140px] sm:h-[150px] object-cover"
//                   />
//                   <span className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
//                     Good Deal
//                   </span>
//                 </div>
//                 <div className="p-3 sm:p-4">
//                   <div className="flex justify-between items-center mb-1">
//                     <h3 className="text-sm font-semibold text-black">BMW 335 xi</h3>
//                     <span className="text-[#371C86] text-sm font-bold">$5,900</span>
//                   </div>
//                   <p className="text-xs text-gray-600 mb-2">
//                     137,065 mi. <span className="mx-1">•</span> 2008 <span className="mx-1">•</span> Gasoline
//                   </p>
//                   <span className="text-[11px] text-black border border-gray-300 px-2 py-0.5 rounded-full">
//                     North Pole / Alaska
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Shopviews

"use client";
import Link from "next/link";
import { Image_URL } from "@/config/constants";
import { useVehicalsStore } from "@/lib/store/vehicalStore";
import Image from "next/image";
import React, { useEffect } from "react";

const Shopviews = () => {
  const { vehicals, getAllvechicle, isLoading, error } = useVehicalsStore();

  useEffect(() => {
    const fetchVehicals = async () => {
      try {
        const data = await getAllvechicle(); // store ka function call
        console.log("API Response (Vehicles):", data); // 👈 console mai check karo
      } catch (err) {
        console.error("Error fetching vehicles:", err);
      }
    };

    fetchVehicals();
  }, [getAllvechicle]);

  if (isLoading) {
    return <p className="text-center text-gray-600">Loading vehicles...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">Error: {error}</p>;
  }

  return (
    <div className="mt-16  p-10">
      <h2 className="text-2xl font-semibold text-black mb-6 px-4 md:px-0">
        Shoppers Also Viewed
      </h2>

      <div className="overflow-x-auto scrollbar-hide -mx-4 md:mx-0">
        <div className="flex gap-4 sm:gap-6 px-4 md:px-0 pb-2 w-max">
          {/* {vehicals && vehicals.length > 0 ? (
                        vehicals.slice(0, 4).map((car) => (
                            <div
                                key={car.id}
                                className="min-w-[240px] max-w-[240px] sm:min-w-[250px] sm:max-w-[250px] bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
                            >
                                <div className="relative">
                                    <Image
                                        src={
                                            // car?.vehicle.vehicleMedia.url
                                            `${Image_URL}${car.vehicle.vehicleMedia[0].url}` // base url + image ka naam
                                            // : "/Images/findBest1.png" // fallback local image
                                        }
                                        alt={car?.name || "Vehicle"}
                                        width={250}
                                        height={150}
                                        className="w-full h-[140px] sm:h-[150px] object-cover"
                                    />
                                    <span className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                                        Good Deal
                                    </span>
                                </div>
                                <div className="p-3 sm:p-4">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="text-sm font-semibold text-black">
                                            {car.vehicle.trim.name}
                                        </h3>
                                        <span className="text-[#371C86] text-sm font-bold">
                                            ${car?.price || "N/A"}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-600 mb-2">
                                        {car?.mileage || "0"} mi. <span className="mx-1">•</span>{" "}
                                        {car.vehicle.trim.year} <span className="mx-1">•</span>{" "}
                                        {car?.vehicle?.trim?.engineType?.fuelType?.name}                  </p>
                                    <span className="text-[11px] text-black border border-gray-300 px-2 py-0.5 rounded-full">
                                        {car?.address || "Unknown"}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No vehicles found.</p>
                    )} */}
          {vehicals && vehicals.length > 0 ? (
            vehicals.slice(0, 4).map((car) => (
              <Link
                key={car.id}
                href={`/cars-for-sale/${car.vehicle.slug}`} // 👈 slug use kiya
                className="min-w-[240px] max-w-[240px] sm:min-w-[250px] sm:max-w-[250px] bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <Image
                    src={`${Image_URL}${car.vehicle.vehicleMedia[0].url}`}
                    alt={car?.name || "Vehicle"}
                    width={250}
                    height={150}
                    className="w-full h-[140px] sm:h-[150px] object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                    Good Deal
                  </span>
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-sm font-semibold text-black">
                      {car.vehicle.trim.name}
                    </h3>
                    <span className="text-[#371C86] text-sm font-bold">
                      ${car?.price || "N/A"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">
                    {car?.mileage || "0"} mi. <span className="mx-1">•</span>{" "}
                    {car.vehicle.trim.year} <span className="mx-1">•</span>{" "}
                    {car?.vehicle?.trim?.engineType?.fuelType?.name}
                  </p>
                  <span className="text-[11px] text-black border border-gray-300 px-2 py-0.5 rounded-full">
                    {car?.address || "Unknown"}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-500">No vehicles found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shopviews;
