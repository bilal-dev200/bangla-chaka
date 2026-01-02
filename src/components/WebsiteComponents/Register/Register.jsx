"use client";
import { authApi } from "@/lib/api/auth";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";

export default function RegistrationPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dealershipName: "",
    dealerLicenseNumber: "",
    phone: "",
    businessAddress: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await authApi.registerDealer(formData);

      // if (res.data.success == true) {
      toast.success(res.data.message || "Dealer registered successfully");
      router.push("/sign-in");

      // Optional: reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dealershipName: "",
        dealerLicenseNumber: "",
        phone: "",
        businessAddress: "",
        city: "",
        state: "",
        zipCode: "",
      });
      // } else {
      //   toast.error(res.data.message || "Something went wrong");
      // }
    } catch (err) {
      console.error(err);
      toast.error(
        err.data?.message || "Error registering dealer, Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen lg:h-screen w-screen overflow-hidden flex flex-col lg:flex-row">
      <img
        src="/Images/Register-background.png"
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="Background"
      />

      {/* Left Side */}
      <div className="relative z-10 w-full lg:w-[900px] p-6 lg:p-10 flex flex-col justify-between text-black">
        {/* Logo at the top */}
        <Link href="/" className="mb-6 lg:mb-10">
          <img src="/Images/bangla.png" className="h-16 md:h-24" />
        </Link>

        {/* Centered Text Section */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left mt-16 lg:mt-2 sm:mt-20 flex-grow">
          <h1 className="text-4xl sm:text-5xl text-white font-light leading-tight mb-6">
            Let&apos;s simplify
            <br />
            your business
          </h1>
          <p className="text-sm sm:text-lg  text-gray-200 max-w-md mx-auto lg:mx-0">
            Connect with our team to explore the audience and technology
            solutions you need to simplify and scale your business. We&apos;re here
            to help.
          </p>
        </div>

        {/* Social Icons at the bottom */}
        <div className="flex gap-4 sm:gap-6 text-white text-lg sm:text-xl mt-8 lg:mt-20 sm:mt-10 justify-center lg:justify-start">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaTiktok />
          <FaPinterestP />
          <FaXTwitter />
        </div>
      </div>

      <div className="relative z-10  w-full lg:w-full bg-white  lg:p-10 flex flex-col justify-center text-black">
        <form onSubmit={handleSubmit} className="md:max-w-5xl mx-auto w-full ">
          <h2 className="text-xl  font-Medium mt-24 mb-4">Your Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="p-3 rounded-xl border  border-gray-300 text-black bg-transparent"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="p-3 rounded-xl border  border-gray-300 text-black bg-transparent"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 rounded-xl border  border-gray-300 text-black bg-transparent"
            />

            <div className="relative ">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="p-3 rounded-xl border w-full border-gray-300 text-black bg-transparent"
              />
              <FaEye
                className="absolute right-6 top-3 text-gray-400 cursor-pointer text-xl"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          <h2 className="text-xl  font-Medium mb-4">Business Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              name="dealershipName"
              value={formData.dealershipName}
              onChange={handleChange}
              placeholder="Dealership Name"
              className="p-3 rounded-xl border  border-gray-300 text-black bg-transparent"
            />
            <input
              type="text"
              name="dealerLicenseNumber"
              value={formData.dealerLicenseNumber}
              onChange={handleChange}
              placeholder="Dealer License Number"
              className="p-3 rounded-xl border  border-gray-300 text-black bg-transparent"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="p-3 rounded-xl border  border-gray-300 text-black bg-transparent"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleChange}
              placeholder="Business Address"
              className="w-full p-3 rounded-xl border  border-gray-300 text-black bg-transparent"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="p-3 rounded-xl border  border-gray-300 text-black bg-transparent"
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="p-3 rounded-xl border  border-gray-300 text-black bg-transparent"
            />
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Zip"
              className="p-3 rounded-xl border  border-gray-300 text-black bg-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-1/2 align-center items-center text-white bg-[#EB0102]  hover:bg-[#EB0102] text-black py-3 px-10 rounded-3xl mt-6 sm:mt-10"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          <div className="w-full flex justify-between items-center  text-xs text-gray-400 mt-16 pt-10 gap-6">
            <p>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </p>
            <p>
              Dealer Support:{" "}
              <a href="tel:1234567890" className="hover:underline">
                (123) 456-7890
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
