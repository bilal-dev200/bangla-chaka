"use client";
import React from "react";
import { useState } from "react";
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
  FaEye,
} from "react-icons/fa6";
import { authApi } from "@/lib/api/auth";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),

  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),

  email: yup.string().email("Invalid email").required("Email is required"),

  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be digits only")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number cannot exceed 15 digits"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords do not match"),
});

const SignupUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // ✅ confirmPassword ko remove kar rahe hain
      const { confirmPassword, ...payload } = data;

      // ✅ API call with cleaned payload
      const res = await authApi.register(payload);

      if (res.data?.token) {
        setAuthToken(res.data.token);
      }

      toast.success("User registered successfully!");
      setTimeout(() => {
        router.push("/sign-in");
      }, 2000);
      // router.push("/login");
    } catch (err) {
      console.error("❌ Register Error:", err.response?.data || err.message);
      toast.error(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <div>
      <div className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto">
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
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 sm:px-10 py-10">
            <div className="max-w-md w-full space-y-6">
              <Link href="/" className="flex justify-center">
                <img src="/Images/bangla.png" className="h-12 sm:h-24" />
              </Link>

              <h2 className="text-2xl sm:text-3xl text-center ">
                Create Your Account
              </h2>
              <p className="text-center text-sm ">
                Sign in and find your next ride in just a few clicks.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                {/* Row 1: First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className="w-full px-4 py-3 bg-transparent border  border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB0102]"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className="w-full px-4 py-3 bg-transparent border  border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB0102]"
                  />
                </div>
                {errors.firstName && (
                  <p className="text-[#EB0102] text-xs mt-1">
                    {errors.firstName.message}
                  </p>
                )}
                {errors.lastName && (
                  <p className="text-[#EB0102] text-xs mt-1">
                    {errors.lastName.message}
                  </p>
                )}

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    className="w-full px-4 py-3 bg-transparent border  border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB0102]"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className="w-full px-4 py-3 bg-transparent border  border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB0102]"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}

                {/* Row 3: Password */}
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
                    <p className="text-red-400 text-xs mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Row 4: Confirm Password */}
                <div className="relative">
                  <input
                    type={showConformPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: "Confirm your password",
                      validate: (value, data) =>
                        value === data.password || "Passwords do not match",
                    })}
                    className="w-full px-4 py-3 bg-transparent border border-gray-500  rounded-md focus:outline-none focus:ring-2 focus:ring-[#EB0102]"
                  />
                  <FaEye
                    className="absolute right-3 top-3 text-gray-400 cursor-pointer text-xl"
                    onClick={() => setShowConformPassword(!showConformPassword)}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="w-1/2 py-3 text-white border border-white bg-[#EB0102] rounded-full  font-medium"
                  >
                    Sign Up
                  </button>
                  {/* <Link
                                    href={}
                                        type="button"
                                        className="w-1/2 py-3 border border-white hover:bg-[#EB0102] rounded-full  font-medium"
                                    >
                                        Register as a Dealer
                                    </Link> */}
                  <Link
                    href="/register"
                    className="w-1/2 py-3 border border-white bg-[#EB0102] rounded-full text-white font-medium flex items-center justify-center"
                  >
                    Register as a Dealer
                  </Link>
                </div>
              </form>

              <p className="text-center text-sm ">
                You have an account?{" "}
                <a href="/sign-in" className="hover:underline">
                  Sign in
                </a>
              </p>

              <div className="w-full flex flex-col sm:flex-row justify-between items-center  text-xs pt-8 gap-4">
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
    </div>
  );
};

export default SignupUser;
