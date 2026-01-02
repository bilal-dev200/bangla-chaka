// import React from "react";

// const steps = [
//   {
//     icon: (
//       <svg
//         className="w-8 h-8 text-white"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <circle cx="12" cy="7" r="4" />
//         <path d="M5.5 21a5.5 5.5 0 0113 0" />
//       </svg>
//     ),
//     title: "Register & Get Your Reward Card",
//   },
//   {
//     icon: (
//       <svg
//         className="w-8 h-8 text-white"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path d="M19 4l-15 8 15 8V4z" />
//         <line x1="6" y1="12" x2="18" y2="12" />
//       </svg>
//     ),
//     title: "Scratch to Reveal the Winning Number",
//   },
//   {
//     icon: (
//       <svg
//         className="w-8 h-8 text-white"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
//       </svg>
//     ),
//     title: "Match your Number & Celebrate",
//   },
//   {
//     icon: (
//       <svg
//         className="w-8 h-8 text-white"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M9 12h6m-3 3v-6a4 4 0 11-8 0v6a4 4 0 108 0z"
//         />
//         <circle cx="18" cy="18" r="3" />
//       </svg>
//     ),
//     title: "Claim Your Reward with smile",
//   },
// ];

// export default function ScratchWinRewards() {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <h2 className="text-2xl font-semibold text-center mb-3">
//         How the Scratch &amp; Win Rewards Work
//       </h2>
//       <p className="text-center text-gray-600 mb-12">
//         Get your card, scratch to reveal the winning number, and claim exciting
//         rewards — it&apos;s that easy!
//       </p>

//       <div className="relative flex justify-between items-start">
//         {/* Curved dashed line */}
//         <svg
//           className="absolute bottom-2 left-0 w-full h-28 z-0"
//           viewBox="0 0 1000 100"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M100,100 C170,0 380,120 500,70 S820,0 900,50"
//             fill="none"
//             stroke="#4B5563"
//             strokeWidth="2"
//             strokeDasharray="6,8"
//           />
//         </svg>

//         {/* Steps */}
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="w-1/4 flex flex-col items-center text-center z-10 relative"
//           >
//             <div className="bg-indigo-700 rounded-full w-14 h-14 flex items-center justify-center shadow-md mb-4">
//               {step.icon}
//             </div>
//             <p className="text-sm font-medium text-gray-800 leading-snug">
//               {step.title}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>

//   );
// }

//     <section className="md:py-16 md:pb-28 py-4 lgh[110vh] text-center lg:mb-[20px] ">
//   {/* Heading */}
//   <h1 className="text-2xl   lg:text-[50px] leading-[55px] font-bold mb-10 px-4">
//     Why Choose <br />
//     <span className="text-[#900000]  ">
//       Bombay Choc N Nuts?
//     </span>
//   </h1>
//   {/* <h1 className="text-2xl   lg:text-[50px] leading-[55px] font-bold mb-10 px-4">
//     Why Choose <br />
//     <span className="text-[#900000]  ">
//       Bombay Choc N Nuts?
//     </span>
//   </h1> */}

//   {/* Wave Layout */}
//   <div className="relative">
//     {/* Line Image for Wavy Dotted Line */}
//     <img
//       src="/Images/Line.png"
//       alt="Wave Line"
//       className="w-full absolute top-1/2 transform -translate-y-1/2 z-0 hidden lg:block"
//     />

//     {/* Icons and Descriptions */}
//     <div className="relative flex flex-col lg:flex-row justify-around items-center lg:items-start mt-12 z-10 px-4 lg:px-10 space-y-12 lg:space-y-0">
//       {/* 100% Freshness */}
//       <div className="w-full lg:w-60 flex items-center flex-col  text-center transform translate-y-0 relative z-20">
//         <div className="flex items-center justify-center w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] mx-auto bg-[#900000] text-white rounded-full mb-4">
//           <img
//             src="/item1.svg"
//             alt="100% Freshness Icon"
//             className="w-[80px] h-[80px] lg:w-[100px] lg:h-[98px]"
//           />
//         </div>
//         <h3 className="text-xl   lg:text-2xl font-bold mb-2">
//           100% Freshness
//         </h3>
//         <p className="text-sm   lg:text-base w-[200px] lg:w-[300px] text-center text-[#323232] font-normal">
//           We guarantee only the freshest ingredients in every creation.
//         </p>
//       </div>

//       {/* Premium Quality */}
//       <div className="w-full lg:w-60 flex items-center flex-col text-center transform translate-y-0 lg:translate-y-14 relative z-20">
//         <div className="flex items-center justify-center w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] mx-auto bg-[#900000] text-white rounded-full mb-4">
//           <img
//             src="/item2.svg"
//             alt="Premium Quality Icon"
//             className="w-[80px] h-[80px] lg:w-[100px] lg:h-[98px]"
//           />
//         </div>
//         <h3 className="text-xl   lg:text-2xl font-bold mb-2">
//           Premium Quality
//         </h3>
//         <p className="text-sm lg:text-base   w-[200px] lg:w-[300px] text-center text-[#323232] font-normal">
//           Our dedication to quality ensures an unparalleled snacking.
//         </p>
//       </div>

//       {/* Hygienic Standards */}
//       <div className="w-full lg:w-60 flex items-center flex-col text-center transform translate-y-0 lg:translate-y-32 relative z-20">
//         <div className="flex items-center justify-center w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] mx-auto bg-[#900000] text-white rounded-full mb-4">
//           <img
//             src="/item3.svg"
//             alt="Hygienic Standards Icon"
//             className="w-[80px] h-[80px] lg:w-[100px] lg:h-[98px]"
//           />
//         </div>
//         <h3 className="text-xl   lg:text-2xl font-bold mb-2">
//           Hygienic Standards
//         </h3>
//         <p className="text-sm   lg:text-base w-[200px] lg:w-[250px] text-center text-[#323232] font-normal">
//           Adhering to the highest hygiene practices for your peace of mind.
//         </p>
//       </div>

//       {/* Exceptional Customer Care */}
//       <div className="w-full lg:w-60 flex items-center flex-col  text-center transform translate-y-0 lg:translate-y-24 relative z-20">
//         <div className="flex items-center justify-center w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] mx-auto bg-[#900000] text-white rounded-full mb-4">
//           <img
//             src="/item1.svg"
//             alt="Exceptional Customer Care Icon"
//             className="w-[80px] h-[80px] lg:w-[100px] lg:h-[98px]"
//           />
//         </div>
//         <h3 className="text-xl   lg:text-2xl font-bold mb-2">
//           Exceptional <br /> Customer Care
//         </h3>
//         <p className="text-sm lg:text-base   w-[200px] lg:w-[300px] text-center text-[#323232] font-normal">
//           Your satisfaction is our priority, guaranteed with every purchase.
//         </p>
//       </div>
//     </div>
//   </div>
// </section>

import Image from "next/image";
import React from "react";

const lineImage = "/Images/line.png"; // your line image

const steps = [
  {
    icon: "/Images/stepicon1.png",
    title: "Register & Get Your Reward Card",
  },
  {
    icon: "/Images/stepicon2.png",
    title: "Scratch to Reveal the Winning Number",
  },
  {
    icon: "/Images/stepicon3.png",
    title: "Match your Number & Celebrate",
  },
  {
    icon: "/Images/stepicon4.png",
    title: "Claim Your Reward with smile",
  },
];

export default function ScratchWinRewards() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
      <h2 className="text-2xl font-semibold text-center mb-3">
        How the Scratch &amp; Win Rewards Work
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Get your card, scratch to reveal the winning number, and claim exciting
        rewards — it&apos;s that easy!
      </p>

      {/* Line image across all steps */}
      <img
        src={lineImage}
        alt="Connecting line"
        className="absolute top-[150px] left-[14%] w-[75%] z-0 hidden md:block"
      />

      <div className="relative flex flex-wrap justify-between items-start gap-y-12 z-10">
        {/* {steps.map((step, index) => (
          <div
            key={index}
            className="w-1/4 flex flex-col items-center text-center"
          >
            <div className="bg-indigo-700 rounded-full w-14 h-14 flex items-center justify-center shadow-md mb-4">
              {step.icon}
            </div>
            <p className="text-sm font-medium text-gray-800 leading-snug">
              {step.title}
            </p>
          </div>
        ))} */}
        {steps.map((step, index) => (
          <div
            key={index}
            className="w-1/4 flex flex-col items-center text-center"
          >
            <div className="bg-[#EB0102] rounded-full w-14 h-14 flex items-center justify-center shadow-md mb-4 overflow-hidden">
              <Image
                src={step.icon}
                alt={`step-${index}`}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <p className="text-sm font-medium text-gray-800 leading-snug">
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
