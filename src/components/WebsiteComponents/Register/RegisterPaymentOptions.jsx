"use client";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTiktok,
  FaXTwitter,
  FaRegCreditCard,
} from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";

export default function RegisterationPaymentOptions() {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [accountType, setAccountType] = useState("Personal Checking");
  const [accountTypeOpen, setAccountTypeOpen] = useState(false);

  const accountTypeOptions = ["Personal Checking", "Business Checking"];

  return (
    <div className="relative min-h-screen lg:h-screen w-screen overflow-hidden flex flex-col lg:flex-row">
      {/* Background Image */}
      <img
        src="/Images/Register-background.png"
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="Background"
      />

      {/* Left Side */}
      <div className="relative z-10 w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-between text-white">
        {/* Logo at the top */}
        <div className="mb-6 lg:mb-10">
          <img src="/Images/CarNKeyLogo.png" className="h-16" />
        </div>

        {/* Centered Text Section */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left mt-16 lg:mt-2 sm:mt-20 flex-grow">
          <h1 className="text-4xl sm:text-5xl  font-light leading-tight mb-6">
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

      {/* Right Side Form */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 bg-black bg-opacity-80 backdrop-blur-sm p-6 md:p-10 text-white min-h-[calc(100vh-0px)]">
        <div className="w-full max-w-xl mx-auto relative">
          {/* Payment Method Switch */}
          <div className="flex justify-center gap-6 md:gap-8 mb-8">
            {["credit", "bank"].map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  className="hidden"
                  checked={paymentMethod === type}
                  onChange={() => setPaymentMethod(type)}
                />
                <span
                  className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${paymentMethod === type
                      ? "border-[#4837ff]"
                      : "border-gray-400"
                    }`}
                >
                  {paymentMethod === type && (
                    <span className="h-2 w-2 bg-[#4837ff] rounded-full"></span>
                  )}
                </span>
                <span className="text-sm capitalize">
                  {type === "credit" ? "Credit Card" : "Bank Account"}
                </span>
              </label>
            ))}
          </div>

          {/* Forms Container */}
          <div className="relative min-h-[320px]">
            {/* Credit Card Form */}
            <div
              className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-500 ${paymentMethod === "credit"
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
                }`}
            >
              <div className="flex items-center bg-white bg-opacity-10 border border-gray-500 rounded-md px-4 py-3 mb-5">
                <FaRegCreditCard className="text-white mr-3 text-lg" />
                <input
                  type="text"
                  placeholder="Card Number*"
                  className="w-full bg-transparent text-white placeholder-white outline-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Exp. Date*"
                  className="w-full bg-white bg-opacity-10 border border-gray-500 rounded-md px-4 py-3 placeholder-white text-white outline-none"
                />
                <input
                  type="text"
                  placeholder="Card Code"
                  className="w-full bg-white bg-opacity-10 border border-gray-500 rounded-md px-4 py-3 placeholder-white text-white outline-none"
                />
              </div>
            </div>

            {/* Bank Account Form */}
            <div
              className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-500 ${paymentMethod === "bank"
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
                }`}
            >
              <input
                type="text"
                placeholder="Bank Name"
                className="w-full bg-transparent text-white border border-gray-500 rounded-md px-4 py-3 placeholder-white outline-none mb-5"
              />
              <input
                type="text"
                placeholder="Name On Account"
                className="w-full bg-transparent text-white border border-gray-500 rounded-md px-4 py-3 placeholder-white outline-none mb-5"
              />
              <input
                type="text"
                placeholder="Account Number"
                className="w-full bg-transparent text-white border border-gray-500 rounded-md px-4 py-3 placeholder-white outline-none mb-5"
              />
              <input
                type="text"
                placeholder="ABA Routing Number"
                className="w-full bg-transparent text-white border border-gray-500 rounded-md px-4 py-3 placeholder-white outline-none mb-5"
              />
              <div className="relative">
                <button
                  onClick={() => setAccountTypeOpen(!accountTypeOpen)}
                  className="w-full flex justify-between items-center bg-transparent text-white border border-gray-500 rounded-md px-4 py-3 text-left"
                >
                  <span>{accountType}</span>
                  <IoChevronDown className="text-white" />
                </button>
                {accountTypeOpen && (
                  <ul className="absolute mt-1 w-full bg-black border border-gray-600 rounded-md z-10">
                    {accountTypeOptions.map((type) => (
                      <li
                        key={type}
                        className="px-4 py-2 hover:bg-[#4837ff] hover:text-white cursor-pointer"
                        onClick={() => {
                          setAccountType(type);
                          setAccountTypeOpen(false);
                        }}
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10 mb-10">
            <button className="bg-[#4837ff] hover:bg-[#372bbd] text-white py-2 px-10 rounded-full text-sm">
              Continue
            </button>
            <button className="border border-white text-white py-2 px-10 rounded-full text-sm hover:bg-white hover:text-black transition">
              Cancel
            </button>
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center  text-xs text-gray-400 mt-16 pt-10 gap-4">
            <p className="text-center">
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
        </div>
      </div>
    </div>
  );
}
