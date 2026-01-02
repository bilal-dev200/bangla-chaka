// 'use client';

// import React from "react";

// export default function PromotionalBanners() {
//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 md:p-10 bg-white">
//       {/* Upgrade Your Car Banner */}
//       <div className="relative rounded-xl overflow-hidden shadow-lg">
//         <img
//           src="/Images/upgradeCar.png"
//           alt="Trade-in Offer"
//           className="w-full h-auto object-cover rounded-xl"
//           onError={(e) => {
//             e.currentTarget.onerror = null;
//             e.currentTarget.src = "https://placehold.co/600x300/4A5568/FFFFFF?text=Image+Not+Found";
//           }}
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center p-6 sm:p-10 text-white">
//           <h3 className="text-xl sm:text-2xl font-bold  leading-tight">
//             Upgrade Your Car with <br /> Our Trade-In Offers
//           </h3>
//           <ul className="text-sm mt-4 space-y-2">
//             <li className="flex items-center">
//               <span className="text-white mr-2">&#10003;</span> Instant Car Valuation - Get a fair market in seconds
//             </li>
//             <li className="flex items-center">
//               <span className="text-white mr-2">&#10003;</span> Seamless Process - No hidden fees, no stress
//             </li>
//             <li className="flex items-center">
//               <span className="text-white mr-2">&#10003;</span> Upgrade Easily - Apply your trade-in value to a new car
//             </li>
//           </ul>
//           <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors duration-300 w-fit">
//             Get Your Car's Value
//           </button>
//         </div>
//       </div>

//       {/* Know Your Car's Worth Banner */}
//       <div className="relative rounded-xl overflow-hidden shadow-lg">
//         <img
//           src="/Images/knowCar.png"
//           alt="Car Worth"
//           className="w-full h-auto object-cover rounded-xl"
//           onError={(e) => {
//             e.currentTarget.onerror = null;
//             e.currentTarget.src = "https://placehold.co/600x300/4A5568/FFFFFF?text=Image+Not+Found";
//           }}
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center p-6 sm:p-10 text-white">
//           <h3 className="text-xl sm:text-2xl font-bold  leading-tight">
//             Know Your Car's Worth <br /> & History
//           </h3>
//           <ul className="text-sm mt-4 space-y-2">
//             <li className="flex items-center">
//               <span className="text-white mr-2">&#10003;</span> Accident & Damage History - Know past incidents
//             </li>
//             <li className="flex items-center">
//               <span className="text-white mr-2">&#10003;</span> Ownership & Service Records - Complete car history
//             </li>
//             <li className="flex items-center">
//               <span className="text-white mr-2">&#10003;</span> Life Value Estimation - Predict future depreciation
//             </li>
//           </ul>
//           <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors duration-300 w-fit">
//             Check Car Xray Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// 'use client';

// import React from "react";

// export default function PromotionalBanners() {
//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 md:p-10 bg-white">
//       {/* Upgrade Your Car Banner */}
//       <div className="relative rounded-xl overflow-hidden shadow-lg">
//         <img
//           src="/Images/upgradeCar.png"
//           alt="Trade-in Offer"
//           className="w-full h-auto object-cover rounded-xl"
//           onError={(e) => {
//             e.currentTarget.onerror = null;
//             e.currentTarget.src = "https://placehold.co/600x300/4A5568/FFFFFF?text=Image+Not+Found";
//           }}
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center p-6 sm:p-10 text-white">
//           <h3 className="text-xl sm:text-2xl font-bold  leading-tight">
//             Upgrade Your Car with <br /> Our Trade-In Offers
//           </h3>
//           <ul className="text-sm mt-4 space-y-2">
//             <li className="flex items-center">
//               <span className="text-white mr-2">&#10003;</span> Instant Car Valuation - Get a fair market in seconds
//             </li>
//             <li className="flex items-center">
//               <span className="text-white mr-2">&#10003;</span> Seamless Process - No hidden fees, no stress
//             </li>
//             <li className="flex items-center">
//               <span className="text-white mr-2">&#10003;</span> Upgrade Easily - Apply your trade-in value to a new car
//             </li>
//           </ul>
//           <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors duration-300 w-fit">
//             Get Your Car's Value
//           </button>
//         </div>
//       </div>

//       {/* Know Your Car's Worth Banner */}
//       <div className="relative rounded-xl overflow-hidden shadow-lg">
//         <img
//           src="/Images/knowCar.png"
//           alt="Car Worth"
//           className="w-full h-auto object-cover rounded-xl"
//           onError={(e) => {
//             e.currentTarget.onerror = null;
//             e.currentTarget.src = "https://placehold.co/600x300/4A5568/FFFFFF?text=Image+Not+Found";
//           }}
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center p-6 sm:p-10 text-white">
//           <h3 className="text-xl sm:text-2xl font-bold  leading-tight">
//             Know Your Car's Worth <br /> & History
//           </h3>
//           <ul className="text-sm mt-4 space-y-2">
//             <li className="flex items-center">
//               <span className="text-white mr-2">&#10003;</span> Accident & Damage History - Know past incidents
//             </li>
//             <li className="flex items-center">
//               <span className="text-white mr-2">&#10003;</span> Ownership & Service Records - Complete car history
//             </li>
//             <li className="flex items-center">
//               <span className="text-white mr-2">&#10003;</span> Life Value Estimation - Predict future depreciation
//             </li>
//           </ul>
//           <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors duration-300 w-fit">
//             Check Car Xray Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React from "react";

export default function PromotionalBanners() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 md:p-10 bg-white">
      {/* Upgrade Your Car Banner */}
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img
          src="/Images/upgradeCar.png"
          alt="Trade-in Offer"
          className="w-full h-56 sm:h-64 md:h-auto object-cover rounded-xl"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/600x300/4A5568/FFFFFF?text=Image+Not+Found";
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center p-4 sm:p-6 md:p-10 text-white">
          <h3 className="font-hanken text-lg sm:text-xl md:text-2xl font-bold  leading-snug sm:leading-tight">
            Upgrade Your Car with <br className="hidden sm:block" /> Our
            Trade-In Offers
          </h3>
          <ul className="font-hanken text-xs sm:text-sm mt-3 sm:mt-4 space-y-1 sm:space-y-2">
            <li className="flex items-start">
              <span className="text-white mr-2">&#10003;</span> Instant Car
              Valuation - Get a fair market in seconds
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">&#10003;</span> Seamless Process
              - No hidden fees, no stress
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">&#10003;</span> Upgrade Easily -
              Apply your trade-in value to a new car
            </li>
          </ul>
          <button className="font-hanken mt-4 sm:mt-6 bg-white text-black px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm    hover:bg-gray-200 transition-colors duration-300 w-fit">
            Get Your Car&apos;s Value
          </button>
        </div>
      </div>

      {/* Know Your Car's Worth Banner */}
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img
          src="/Images/knowCar.png"
          alt="Car Worth"
          className="w-full h-56 sm:h-64 md:h-auto object-cover rounded-xl"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/600x300/4A5568/FFFFFF?text=Image+Not+Found";
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center p-4 sm:p-6 md:p-10 text-white">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold  leading-snug sm:leading-tight">
            Know Your Car&apos;s Worth <br className="hidden sm:block" /> & History
          </h3>
          <ul className="text-xs sm:text-sm mt-3 sm:mt-4 space-y-1 sm:space-y-2">
            <li className="flex items-start">
              <span className="text-white mr-2">&#10003;</span> Accident &
              Damage History - Know past incidents
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">&#10003;</span> Ownership &
              Service Records - Complete car history
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">&#10003;</span> Life Value
              Estimation - Predict future depreciation
            </li>
          </ul>
          <button className="mt-4 sm:mt-6 bg-none border border-white text-white px-2 sm:px-6 py-2 rounded-full text-xs sm:text-sm  hover:bg-gray-200 transition-colors duration-300 w-fit">
            Check Car Xray Now
          </button>
        </div>
      </div>
    </section>
  );
}
