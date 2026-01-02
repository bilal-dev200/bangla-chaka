// "use client";
// import { useEffect } from "react";
// import Image from "next/image";
// import { useBrandsStore } from "@/lib/store/brandStore";
// import { Image_URL } from "@/config/constants";

// export default function CarBrands() {
//   const { brands, isLoading, error, getAllBrands } = useBrandsStore();

//   // ✅ Fetch brands on mount
//   useEffect(() => {
//     getAllBrands();
//   }, [getAllBrands]);

//   return (
//     <section className="py-16 px-10 bg-white">
//       {/* Header Section */}
//       <div className="flex justify-between items-center">
//         <div className="text-left">
//           <h2 className=" text-4xl font-semibold text-gray-900 leading-tight">
//             New Find Your Perfect Car by <br /> Brand Cars by Make
//           </h2>
//           <p className="text-gray-500 mt-2 ">
//             Choose from a wide range of top car brands and find the perfect ride
//             for you.
//           </p>
//         </div>

//         {/* View All Brand Button */}
//         <button className=" bg-[#EB0102] text-white px-6 py-3 rounded-full text-lg hover:bg-[#7A1616]">
//           View All Brands
//         </button>
//       </div>

//       {/* Brand Grid */}
//       <div className="grid grid-cols-5 gap-8 mt-12">
//         {isLoading && (
//           <p className="col-span-5 text-center text-gray-500">Loading brands...</p>
//         )}
//         {error && (
//           <p className="col-span-5 text-center text-red-500">{error}</p>
//         )}
//         {!isLoading &&
//           !error &&
//           brands?.slice(0,10).map((brand) => (
//             <div key={brand.id} className="flex flex-col items-center">
//               {/* Circular Logo */}
//               <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center shadow-md">
//                 <Image
//                   src={
//                     brand.logoUrl
//                       ? `${Image_URL}${brand.logoUrl}`
//                       : `/Images/${brand.slug.toLowerCase()}.png` // fallback
//                   }
//                   alt={brand.name}
//                   width={70}
//                   height={70}
//                 />
//               </div>
//               {/* Brand Name */}
//               <p className="mt-2 text-gray-700 text-lg font-hanken font-medium uppercase">
//                 {brand.name}
//               </p>
//             </div>
//           ))}
//       </div>
//     </section>
//   );
// }
"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useBrandsStore } from "@/lib/store/brandStore";
import { Image_URL } from "@/config/constants";
import Link from "next/link";

export default function CarBrands() {
  const { brands, isLoading, error, getAllBrands } = useBrandsStore();

  // ✅ Fetch brands on mount
  useEffect(() => {
    getAllBrands();
  }, [getAllBrands]);

  return (
    <section className="py-10 px-5 md:py-16 md:px-10 bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="text-left">
          <h2 className=" text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
            New Find Your Perfect Car by <br className="hidden md:block" />{" "}
            Brand Cars by Make
          </h2>
          <p className="text-gray-500 mt-2  text-sm md:text-base">
            Choose from a wide range of top car brands and find the perfect ride
            for you.
          </p>
        </div>

        {/* View All Brand Button */}
        <Link
          href="/cars-for-sale"
          className=" bg-[#EB0102] text-white px-5 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg hover:bg-[#5c56ca]"
        >
          View All Brands
        </Link>
      </div>

      {/* Brand Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 mt-10 md:mt-12">
        {isLoading && (
          <p className="col-span-full text-center text-gray-500">
            Loading brands...
          </p>
        )}
        {error && (
          <p className="col-span-full text-center text-red-500">{error}</p>
        )}
        {!isLoading &&
          !error &&
          brands?.slice(0, 10).map((brand) => (
            <Link
              href={`/cars-for-sale?brandId=${brand?.id}&brandName=${brand?.name}`}
              key={brand.id}
              className="flex flex-col items-center"
            >
              {/* Circular Logo */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-50 flex items-center justify-center shadow-md">
                <img
                  src={
                    brand.logoUrl
                      ? `${Image_URL}uploads/${brand.logoUrl}`
                      : `/Images/${brand.slug.toLowerCase()}.png` // fallback
                  }
                  alt={brand.name}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
              {/* Brand Name */}
              <p className="mt-2 text-gray-700 text-sm md:text-lg font-hanken font-medium uppercase text-center">
                {brand.name}
              </p>
            </Link>
          ))}
      </div>
    </section>
  );
}
