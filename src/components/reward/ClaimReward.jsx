"use client";
import React from "react";
import Image from "next/image";

const ClaimReward = () => {
  return (
    <div className="flex items-center justify-center bg-white py-12  sm:px-6 lg:px-8">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Car image and icons */}
        <div className="relative flex flex-col">
          <h2 className="text-4xl font-medium text-gray-900 mb-2">Claim Your Reward</h2>
          <p className="mb-12 text-gray-600 max-w-md text-[15px] text-center lg:text-left">
            You’ve won! Just fill in the details below and we’ll deliver your prize shortly.
          </p>

          {/* Car Image */}
          <div className="relative w-full -ml-16">
            <Image
              src="/Images/car.png" // replace this with your actual image in /public directory
              alt="Black luxury sports car with sleek aerodynamic design, shiny body and big alloy wheels"
              width={700}
              height={350}
              className="w-full h-auto rounded-lg  object-cover"
            />

            {/* Circular icons with lines */}

          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full -mt-20">
          <form className="space-y-6 bg-white" aria-label="Claim your reward form">
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              className="w-full rounded-[15px] border border-gray-300 py-3 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-[15px] border border-gray-300 py-3 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full rounded-[15px] border border-gray-300 py-3 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              className="w-full rounded-[15px] border border-gray-300 py-3 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              required
            />

            <div className="flex items-start space-x-2 text-[13px] text-gray-700">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mt-2"
                required
              />
              <label htmlFor="terms" className="leading-tight">
                By clicking the button below, you agree with our{" "}
                <a href="#terms" className="text-black font-semibold ">
                  Terms and conditions
                </a>{" "}
                and CarMaxy.com{" "}
                <a href="#privacy" className="text-black font-semibold ">
                  Privacy Statement
                </a>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#EB0102] text-white font-semibold py-3 rounded-[50px] "
            >
              Claim Reward
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClaimReward;
