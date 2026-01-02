
// // import React, { useState } from 'react';
// // import AddCarPopup from '../MyGarageComponents/AddCarPopup';
// // import CarPopup from './CarPopup';
// // import { vehicalsApi } from '@/lib/api/vehical';
// // import { useRouter } from 'next/navigation';
// // import { useAuthStore } from '@/lib/store/authStore';
// // // import AddCarPopup from './AddCarPopup'; // Make sure path is correct

// // const Trade = () => {
// //   const [showPopup, setShowPopup] = useState(false);
// //       const router = useRouter();

// //   const { isLoggedIn, user } = useAuthStore();

// //   const handleLookup = async (data) => {
// //     console.log("Form Data:", data);

// //     try {
// //       const response = await vehicalsApi.getVehicleDetail({
// //         vin: data.vin,
// //         plateNumber: data.licensePlate,
// //         state: data.state,
// //         brandId: data.make,
// //         vehicleModelId: data.model,
// //         year: data.year,
// //         bodyTypeId: data.style,
// //       });

// //     router.push(`select-car`);

// //       console.log("API Response:", response.data);
// //       alert("Vehicle data fetched successfully!");
// //     } catch (error) {
// //       console.error("Error fetching vehicle detail:", error);
// //       alert("Error fetching vehicle detail");
// //     }
// //   };

// //   return (
// //     <section className="py-5 bg-white">
// //       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //         <div className="border-2 [2px] rounded-[30px] border-dashed border-[#EB0102] bg-white p-8 md:p-12 shadow-sm">
// //           <div className="space-y-3">
// //             <h2 className="text-3xl md:text-4xl text-gray-900">
// //               Trade In Your Car and Drive
// //               <br />
// //               Something New
// //             </h2>
// //             <p className="text-gray-600 text-sm max-w-2xl mx-auto">
// //               Get your car’s value instantly and upgrade in minutes.
// //             </p>
// //             <div>
// //               {/* <button
// //                 onClick={() => setShowPopup(true)}
// //                 className="bg-[#EB0102] rounded-[20px] text-white px-5 py-2 text-lg transition-colors duration-200"
// //               >
// //                 Start Your Trade-In
// //               </button> */}
// //               <button
// //                 disabled={!isLoggedIn}
// //                 onClick={() => setShowPopup(true)}
// //                 className={`rounded-[20px] px-5 py-2 text-lg transition-colors duration-200 ${
// //                   isLoggedIn
// //                     ? "bg-[#EB0102] text-white hover:bg-[#2d2970]"
// //                     : "bg-gray-300 text-gray-500 cursor-not-allowed"
// //                 }`}
// //               >
// //                 Start Your Trade-In
// //               </button>
// //             </div>
// //             <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
// //               <span>
// //                 Already have an account?{" "}
// //                 <span className="font-bold text-gray-700">Sign in.</span>
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Show Popup Conditionally */}
// //      {showPopup && isLoggedIn && (
// //         <CarPopup onClose={() => setShowPopup(false)} onLookup={handleLookup} />
// //       )}
// //     </section>
// //   );
// // };

// // export default Trade;


// "use client";
// import React, { useState } from "react";
// import CarPopup from "./CarPopup";
// import { vehicalsApi } from "@/lib/api/vehical";
// import { useRouter } from "next/navigation";
// import { useAuthStore } from "@/lib/store/authStore";

// const Trade = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const router = useRouter();

//   // 👇 get user from store
//   const { user } = useAuthStore();

//   // const isLoggedIn = user && user.userType === "CUSTOMER";
//   const isLoggedIn = !!user;

//   const handleLookup = async (data) => {
//     console.log("Form Data:", data);

//     try {
//       const response = await vehicalsApi.getVehicleDetail({
//         vin: data.vin,
//         plateNumber: data.licensePlate,
//         state: data.state,
//         brandId: data.make,
//         vehicleModelId: data.model,
//         year: data.year,
//         bodyTypeId: data.style,
//       });

//       router.push(`select-car`);

//       console.log("API Response:", response.data);
//       alert("Vehicle data fetched successfully!");
//     } catch (error) {
//       console.error("Error fetching vehicle detail:", error);
//       alert("Error fetching vehicle detail");
//     }
//   };

//   return (
//     <section className="py-5 bg-white">
//       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="border-2 rounded-[30px] border-dashed border-[#EB0102] bg-white p-8 md:p-12 shadow-sm">
//           <div className="space-y-3">
//             <h2 className="text-3xl md:text-4xl text-gray-900">
//               Trade In Your Car and Drive
//               <br />
//               Something New
//             </h2>
//             <p className="text-gray-600 text-sm max-w-2xl mx-auto">
//               Get your car’s value instantly and upgrade in minutes.
//             </p>
//             <div>
//               <button
//                 disabled={!isLoggedIn}
//                 onClick={() => setShowPopup(true)}
//                 className={`rounded-[20px] px-5 py-2 text-lg transition-colors duration-200 ${
//                   isLoggedIn
//                     ? "bg-[#EB0102] text-white hover:bg-[#2d2970]"
//                     : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 }`}
//               >
//                 Start Your Trade-In
//               </button>
//             </div>
//             <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
//               <span>
//                 Already have an account?{" "}
//                 <span className="font-bold text-gray-700 cursor-pointer">
//                   Sign in.
//                 </span>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Popup tabhi dikhao jab user logged in aur guard == "user" */}
//       {showPopup && isLoggedIn && (
//         <CarPopup onClose={() => setShowPopup(false)} onLookup={handleLookup} />
//       )}
//     </section>
//   );
// };

// export default Trade;


"use client";
import React, { useState } from "react";
import CarPopup from "./CarPopup";
// import LoginPopup from "@/components/common/LoginPopup"; // 👈 import login popup
import { vehicalsApi } from "@/lib/api/vehical";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/authStore";
import LoginPopup from "@/app/sign-in/LoginPopup";
import { toast } from "react-toastify";

const Trade = () => {
  const [showCarPopup, setShowCarPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const router = useRouter();

  // 👇 get user from store
  const { user } = useAuthStore();
  const isLoggedIn = !!user;

  const handleLookup = async (data) => {
    console.log("Form Data:", data);

    try {
      const response = await vehicalsApi.getVehicleDetail({
        vin: data.vin,
        plateNumber: data.licensePlate,
        state: data.state,
        brandId: data.make,
        vehicleModelId: data.model,
        year: data.year,
        bodyTypeId: data.style,
      });

      router.push(`select-car`);
      console.log("API Response:", response.data);
      toast.success("Vehicle data fetched successfully!")
    } catch (error) {
      console.error("Error fetching vehicle detail:", error);
      toast.error("Error fetching vehicle detail", error)
    }
  };

  const handleTradeClick = () => {
    if (isLoggedIn) {
      setShowCarPopup(true);
    } else {
      setShowLoginPopup(true);
    }
  };

  return (
    <section className="py-5 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="border-2 rounded-[30px] border-dashed border-[#EB0102] bg-white p-8 md:p-12 shadow-sm">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl text-gray-900">
              Trade In Your Car and Drive
              <br />
              Something New
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Get your car’s value instantly and upgrade in minutes.
            </p>
            <div>
              <button
                onClick={handleTradeClick}
                className="rounded-[20px] px-5 py-2 text-lg transition-colors duration-200 bg-[#EB0102] text-white hover:bg-[#2d2970]"
              >
                Start Your Trade-In
              </button>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span>
                Already have an account?{" "}
                <span className="font-bold text-gray-700 cursor-pointer">
                  Sign in.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Car Popup (sirf agar logged in hai) */}
      {showCarPopup && isLoggedIn && (
        <CarPopup onClose={() => setShowCarPopup(false)} onLookup={handleLookup} />
      )}

      {/* Login Popup (sirf agar logged in nahi hai) */}
      {showLoginPopup && !isLoggedIn && (
        <LoginPopup
          //  title="Login Needed"
          message="Please login to trade in your car."
          onClose={() => setShowLoginPopup(false)} />
      )}
    </section>
  );
};

export default Trade;
