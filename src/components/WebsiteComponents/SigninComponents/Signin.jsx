// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTiktok,
//   FaPinterestP,
//   FaXTwitter,
//   FaEye,
// } from "react-icons/fa6";

// export default function SignIn() {
//   return (
//     <div className="relative min-h-screen w-full overflow-hidden">
//       {/* Background Image */}
//       <img
//         src="/Images/SignInBackground.png"
//         alt="SignIn Background"
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       />

//       {/* Overlay Container */}
//       <div className="relative z-10 flex flex-col lg:flex-row min-h-screen w-full">
//         {/* LEFT SIDE TEXT PANEL */}
//         <div className="hidden lg:flex w-1/2 flex-col justify-between pl-10 xl:pl-16 py-10 xl:py-16 text-white">
//           <div className="flex-grow flex items-center">
//             <div>
//               <h1 className="text-3xl xl:text-[40px]  font-semibold leading-snug mb-4">
//                 Unlock the Drive <br /> You Deserve
//               </h1>
//               <p className="text-base xl:text-lg ">
//                 Experience the freedom of the open road.
//               </p>
//             </div>
//           </div>
//           <div className="flex space-x-4 text-lg xl:text-xl ">
//             <FaFacebookF className="cursor-pointer hover:text-red-500" />
//             <FaInstagram className="cursor-pointer hover:text-red-500" />
//             <FaLinkedinIn className="cursor-pointer hover:text-red-500" />
//             <FaTiktok className="cursor-pointer hover:text-red-500" />
//             <FaPinterestP className="cursor-pointer hover:text-red-500" />
//             <FaXTwitter className="cursor-pointer hover:text-red-500" />
//           </div>
//         </div>

//         {/* RIGHT SIDE FORM PANEL */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm px-6 sm:px-10 py-10">
//           <div className="max-w-md w-full space-y-6 text-white">
//             <div className="flex justify-center">
//               <img src="/Images/CarNKeyLogo.png" className="h-10 sm:h-12" />
//             </div>

//             <h2 className="text-2xl sm:text-3xl text-center ">
//               Welcome Back
//             </h2>
//             <p className="text-center text-sm text-gray-300 ">
//               Sign in and find your next ride in just a few clicks.
//             </p>

//             <form className="space-y-5">
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full px-4 py-3 bg-transparent border  border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//                 />
//               </div>
//               <div className="relative">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full px-4 py-3 bg-transparent border border-gray-500  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//                 />
//                 <FaEye className="absolute right-3 top-3 text-gray-400 cursor-pointer text-xl" />
//               </div>

//               <div className="flex justify-between items-center text-sm">
//                 <label className="flex items-center gap-2">
//                   <input type="checkbox" className="accent-red-500" />
//                   Remember me
//                 </label>
//                 <a href="#" className="text-red-400 hover:underline ">
//                   Forgot Password?
//                 </a>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-full  font-medium"
//               >
//                 Sign in
//               </button>
//             </form>

//             <p className="text-center text-sm ">
//               Don’t have an account?{" "}
//               <a href="/register" className="text-red-400 hover:underline">
//                 Sign up
//               </a>
//             </p>

//             <div className="w-full flex flex-col sm:flex-row justify-between items-center  text-xs text-gray-400 pt-8 gap-4">
//               <p className="text-center sm:text-left">
//                 <a href="#" className="hover:underline">Terms of Service</a>{" "}
//                 |{" "}
//                 <a href="#" className="hover:underline">Privacy Policy</a>
//               </p>
//               <p className="text-center sm:text-right">
//                 Dealer Support:{" "}
//                 <a href="tel:1234567890" className="hover:underline">
//                   (123) 456-7890
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaPinterestP,
  FaXTwitter,
  FaEye,
} from "react-icons/fa6";
import { authApi } from "@/lib/api/auth";
import { useAuthStore } from "@/lib/store/authStore";
import Link from "next/link";
import Image from "next/image";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const { user, login, error, isLoading, resetError } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const onSubmit = async (data) => {
  //   try {
  //     setLoading(true);

  //     const res = await authApi.login(data);

  //     // if (res.data.success == true) {
  //       toast.success(res.message || "Login successful");
  //       setAuthToken(res.data.token); // store token in localStorage + cookie

  //       // ✅ Redirect user (optional, e.g. dashboard)
  //       // router.push("/dashboard");
  //     // } else {
  //     //   toast.error(res.data.message || "Invalid email or password");
  //     // }
  //   } catch (err) {
  //     console.error(err);
  //     toast.error(err.response?.data?.message || "Login failed, try again");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);

      toast.success("Login successful!");

      // router.push("/");
      window.location.href = "/";
      // window.history.back();
      // router.back();
    } catch (err) {
      console.log("Login failed:", err);
      toast.error(
        err?.response?.data?.message || "Invalid email or password"
      );
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      {/* Background Image */}
      <Image
        src="/Images/SignInBackground.png"
        alt="SignIn Background"
        fill
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
        <div className="w-full lg:w-1/2 text-black flex items-center justify-center bg-white px-6 sm:px-10 py-10">
          <div className="max-w-md w-full space-y-6 text-black">
            <Link href="/" className="flex justify-center relative h-12 sm:h-20 mb-6">
              <Image src="/Images/bangla.png" alt="CarNKey Logo" fill className="object-contain" />
            </Link>
            <div className="space-y-3">
              <h2 className="text-5xl text-center">Welcome Back</h2>
              <p className="text-center text-[13px]">
                Sign in and find your next ride in just a few clicks.
              </p>
            </div>



            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="w-full px-4 py-3 bg-transparent border  border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB0102]"
                />
                {errors.email && (
                  <p className="text-[#EB0102] text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password")}
                  className="w-full px-4 py-3 bg-transparent border border-gray-500  rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB0102]"
                />
                <FaEye
                  className="absolute right-3 top-3 text-gray-400 cursor-pointer text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                />
                {errors.password && (
                  <p className="text-[#EB0102] text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="text-[#EB0102]" />
                  Remember me
                </label>
                <a href="#" className="hover:underline ">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-white bg-[#EB0102] hover:bg-[#EB0102] rounded-full  font-medium"
              >
                Sign in
              </button>
            </form>

            <p className="text-center text-sm ">
              Don’t have an account?{" "}
              <a href="/user-signup" className="hover:underline">
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
}
