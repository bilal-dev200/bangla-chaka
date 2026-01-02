// "use client";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTiktok,
//   FaPinterestP,
//   FaXTwitter,
//   FaEye,
// } from "react-icons/fa6";
// import { authApi } from '@/lib/api/auth';

// const schema = yup.object().shape({
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup.string().required("Password is required"),
// });

// const Forget = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm({
//         resolver: yupResolver(schema),
//       });

//       const onSubmit = (data) => {
//         console.log("Form Submitted:", data);
//         // API call yahan karein
//       };

//   return (
//       <div className="relative min-h-screen w-full overflow-hidden">
//           {/* Background Image */}
//           <img
//             src="/Images/SignInBackground.png"
//             alt="SignIn Background"
//             className="absolute inset-0 w-full h-full object-cover z-0"
//           />

//           {/* Overlay Container */}
//           <div className="relative z-10 flex flex-col lg:flex-row min-h-screen w-full">
//             {/* LEFT SIDE TEXT PANEL */}
//             <div className="hidden lg:flex w-1/2 flex-col justify-between pl-10 xl:pl-16 py-10 xl:py-16 text-white">
//               <div className="flex-grow flex items-center">
//                 <div>
//                   <h1 className="text-3xl xl:text-[40px]  font-semibold leading-snug mb-4">
//                     Unlock the Drive <br /> You Deserve
//                   </h1>
//                   <p className="text-base xl:text-lg ">
//                     Experience the freedom of the open road.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex space-x-4 text-lg xl:text-xl ">
//                 <FaFacebookF className="cursor-pointer hover:text-red-500" />
//                 <FaInstagram className="cursor-pointer hover:text-red-500" />
//                 <FaLinkedinIn className="cursor-pointer hover:text-red-500" />
//                 <FaTiktok className="cursor-pointer hover:text-red-500" />
//                 <FaPinterestP className="cursor-pointer hover:text-red-500" />
//                 <FaXTwitter className="cursor-pointer hover:text-red-500" />
//               </div>
//             </div>

//             {/* RIGHT SIDE FORM PANEL */}
//             <div className="w-full lg:w-1/2 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm px-6 sm:px-10 py-10">
//               <div className="max-w-md w-full space-y-6 text-white">
//                 <div className="flex justify-center">
//                   <img src="/Images/CarNKeyLogo.png" className="h-10 sm:h-12" />
//                 </div>

//                 <h2 className="text-2xl sm:text-3xl text-center ">
// Reset Your Password                </h2>
//                 <p className="text-center text-sm text-gray-300 ">
//                   Sign in and find your next ride in just a few clicks.
//                 </p>

//                 <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
//                   <div>
//                     <input
//                       type="email"
//                       placeholder="Email"
//                       {...register("email")}
//                       className="w-full px-4 py-3 bg-transparent border  border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//                     />
//                     {errors.email && (
//                       <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
//                     )}
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-full  font-medium"
//                   >
//                     Send Reset Link
//                   </button>
//                    <button
//                     type="submit"
//                     className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-full  font-medium"
//                   >
//                     Back to login
//                   </button>
//                 </form>

//                 <p className="text-center text-sm ">
//                   Don’t have an account?{" "}
//                   <a href="/register" className="text-red-400 hover:underline">
//                     Sign up
//                   </a>
//                 </p>

//                 <div className="w-full flex flex-col sm:flex-row justify-between items-center  text-xs text-gray-400 pt-8 gap-4">
//                   <p className="text-center sm:text-left">
//                     <a href="#" className="hover:underline">Terms of Service</a>{" "}
//                     |{" "}
//                     <a href="#" className="hover:underline">Privacy Policy</a>
//                   </p>
//                   <p className="text-center sm:text-right">
//                     Dealer Support:{" "}
//                     <a href="tel:1234567890" className="hover:underline">
//                       (123) 456-7890
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//   )
// }

// export default Forget
"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { authApi } from "@/lib/api/auth";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const Forget = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await authApi.forgetPassowrd(data); // 👈 yahan API call
      console.log("API Response:", res);
      alert("Reset link sent to your email!");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/Images/SignInBackground.png"
        alt="SignIn Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay Container */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen w-full">
        {/* LEFT SIDE TEXT PANEL */}
        <div className="hidden lg:flex w-1/2 flex-col justify-between pl-10 xl:pl-16 py-10 xl:py-16 text-white">
          <div className="flex-grow flex items-center">
            <div>
              <h1 className="text-3xl xl:text-[40px]  font-semibold leading-snug mb-4">
                Unlock the Drive <br /> You Deserve
              </h1>
              <p className="text-base xl:text-lg ">
                Experience the freedom of the open road.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 text-lg xl:text-xl ">
            <FaFacebookF className="cursor-pointer hover:text-red-500" />
            <FaInstagram className="cursor-pointer hover:text-red-500" />
            <FaLinkedinIn className="cursor-pointer hover:text-red-500" />
            <FaTiktok className="cursor-pointer hover:text-red-500" />
            <FaPinterestP className="cursor-pointer hover:text-red-500" />
            <FaXTwitter className="cursor-pointer hover:text-red-500" />
          </div>
        </div>

        {/* RIGHT SIDE FORM PANEL */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm px-6 sm:px-10 py-10">
          <div className="max-w-md w-full space-y-6 text-white">
            <div className="flex justify-center">
              <img src="/Images/CarNKeyLogo.png" className="h-10 sm:h-12" />
            </div>

            <h2 className="text-2xl sm:text-3xl text-center ">
              Reset Your Password
            </h2>
            <p className="text-center text-sm text-gray-300 ">
              Enter your email and we’ll send you a reset link.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="w-full px-4 py-3 bg-transparent border  border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-full  font-medium"
              >
                Send Reset Link
              </button>
              <button
                type="button"
                onClick={() => router.push("/login")}
                className="w-full py-3 bg-gray-600 hover:bg-gray-700 rounded-full  font-medium"
              >
                Back to Login
              </button>
            </form>

            <p className="text-center text-sm ">
              Don’t have an account?{" "}
              <a href="/register" className="text-red-400 hover:underline">
                Sign up
              </a>
            </p>

            <div className="w-full flex flex-col sm:flex-row justify-between items-center  text-xs text-gray-400 pt-8 gap-4">
              <p className="text-center sm:text-left">
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>{" "}
                |{" "}
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </p>
              <p className="text-center sm:text-right">
                Dealer Support:{" "}
                <a href="tel:1234567890" className="hover:underline">
                  (123) 456-7890
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
