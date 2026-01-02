// import React from "react";

// export default function TradeInInfo() {
//   return (
//     <section className="max-w-screen-xl mx-auto px-14 py-24 lg:py-24">
//       <div className="grid grid-cols-1 md:grid-cols-3 items-center">
//         {/* Left Column: Text Content */}
//         <div className="flex justify-center px-2">
//           <div className="max-w-md text-center md:text-left">
//             <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
//               Why Trade-In is Better <br /> Than Selling
//             </h2>
//             <p className="text-gray-700 leading-relaxed mb-4">
//               Selling a car on your own can take weeks — meeting strangers,
//               negotiating prices, and handling paperwork. With Carmkey, you get
//               instant value offers from verified dealers, zero hassle, and your
//               trade-in value is automatically applied to your next purchase.
//               It’s faster, safer, and smarter.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               Once you enter your car’s details, we show you your estimated
//               value and dealer offers. You select the car you want next,
//               schedule an inspection, and you’re done. Our team ensures that
//               every step is smooth and secure — from valuation to vehicle
//               handover.
//             </p>
//           </div>
//         </div>

//         {/* Middle + Right Images with Tight Gap */}
//         <div className="md:col-span-2 flex justify-center gap-6 ml-28 md:mt-0">
//           {/* First Image */}
//           <img
//             src="Images/image1.png"
//             alt="Smiling man giving thumbs up gesture inside a car during trade-in process"
//             className=" object-cover w-[250px] h-[320px]"
//           />

//           {/* Second Image */}
//           <img
//             src="Images/image2.png"
//             alt="Side view of a modern car with driver visible sitting inside"
//             className=" object-cover w-[250px] h-[320px] mt-10"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import Image from "next/image";

export default function TradeInInfo() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-14 py-12 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
        {/* Left Column: Text Content */}
        <div className="flex justify-center md:justify-start px-2">
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Why Trade-In is Better <br /> Than Selling
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Selling a car on your own can take weeks — meeting strangers,
              negotiating prices, and handling paperwork. With Carmkey, you get
              instant value offers from verified dealers, zero hassle, and your
              trade-in value is automatically applied to your next purchase.
              It’s faster, safer, and smarter.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Once you enter your car’s details, we show you your estimated
              value and dealer offers. You select the car you want next,
              schedule an inspection, and you’re done. Our team ensures that
              every step is smooth and secure — from valuation to vehicle
              handover.
            </p>
          </div>
        </div>

        {/* Middle + Right Images */}
        <div className="md:col-span-2 flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* First Image */}
          <div className="relative w-64 h-80 sm:w-60 sm:h-72 lg:w-72 lg:h-96 rounded-lg shadow-md">
            <Image
              src="/Images/image1.png"
              alt="Smiling man giving thumbs up gesture inside a car during trade-in process"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Second Image */}
          <div className="relative w-64 h-80 sm:w-60 sm:h-72 lg:w-72 lg:h-96 mt-6 sm:mt-10 rounded-lg shadow-md">
            <Image
              src="/Images/image2.png"
              alt="Side view of a modern car with driver visible sitting inside"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
