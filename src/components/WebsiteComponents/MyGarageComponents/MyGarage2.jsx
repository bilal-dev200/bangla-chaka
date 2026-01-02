"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { LuBadgeDollarSign } from "react-icons/lu";
import { TbTools } from "react-icons/tb";
import { PiCarProfileLight } from "react-icons/pi";
import { FiChevronDown } from "react-icons/fi";
import FAQ from "../HomePageComponents/FAQ";
import FilterTag from "./FilterTags";
import CarCard from "./CarCard";
import AddCarPopup from "./AddCarPopup";
import GarageChart from "./GarageGraph";
import SellingYourCars from "../HomePageComponents/SellingYourCars";
import { useRouter } from "next/navigation";

const MyGarage2 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push("/select-dealer");
  };

  return (
    <section className="py-6 ">
      <div className="flex flex-wrap flex-col md:flex-row justify-between items-center p-6 md:p-10 gap-6 md:gap-10 text-center md:text-left">
        <div className="w-full md:w-auto">
          <p className="text-2xl md:text-3xl font-regular text-black">
            Complete
            <br />
            your vehicle <br /> details
          </p>
        </div>

        <div className="w-full sm:w-auto bg-gray-50 rounded-xl px-6 py-4 text-center shadow-sm">
          <p className="text-xs text-gray-500">Your Car’s profile is</p>
          <p className="text-2xl font-semibold text-indigo-700">10%</p>
          <p className="text-xs text-gray-500">Complete</p>
        </div>

        <div className="w-full md:w-auto">
          <p className="text-2xl md:text-3xl font-regular text-black">
            How many
            <br />
            miles on the
            <br />
            odometer?
          </p>
        </div>

        <div className="w-full sm:w-auto bg-gray-50 rounded-xl px-6 py-4 text-center shadow-sm">
          <p className="text-sm text-gray-600">Add Mileage</p>
          <input
            type="text"
            className="mt-1 w-full sm:w-28 text-center text-indigo-700 font-medium tracking-widest border-b-2 border-dashed border-indigo-700 bg-transparent focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full mt-20 gap-10">
        <div className="w-full lg:w-1/2 px-4 lg:px-0">
          <div className="flex justify-center">
            <h2 className="text-2xl md:text-3xl font-regular text-black text-center mb-4">
              2020 Mercedes-Benz <br /> S-Class S 560
            </h2>
          </div>
          <div className="mb-2">
            <img
              src="/Images/GarageCar.png"
              className="w-full object-contain"
              alt="Garage Car"
            />
          </div>

          <p className="text-xs text-gray-500 text-center mb-6">
            This image is for reference only and may not match your car’s
            details.
          </p>

          <h3 className="text-lg md:text-xl font-bold text-black text-center">
            Carnkey Market Value
          </h3>
          <p className="text-sm text-gray-600 text-center mb-6">
            Track your car’s value over time.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="bg-[#EB0102] text-white rounded-xl px-6 py-4 text-center h-20 w-full sm:w-1/2">
              <p className="text-lg font-semibold">$47,885 - $53,472</p>
              <p className="text-xs mt-1">Market value today</p>
            </div>
            <div className="bg-[#EB0102] text-white rounded-xl px-6 py-4 text-center h-20 w-full sm:w-1/2">
              <p className="text-lg font-semibold">$32,450 - $36,472</p>
              <p className="text-xs mt-1">Instant offer value today</p>
            </div>
          </div>

          <div className="mt-10">
            <GarageChart />
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4 lg:mx-20 lg:px-0">
          <div className="border border-black rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Vehicle Details
            </h3>
            <div className="divide-y">
              {[
                ["Vin", "DFKSJDFHS12341526"],
                ["Mileage", "85,000"],
                ["Transmission", "Automatic"],
                ["Engine", "V6 Petrol"],
                ["Option", "Premium Package"],
                ["Exterior color", "Midnight Black"],
                ["Interior color", "Beige Leather"],
                ["Number of keys", "2"],
                ["Original owner", "Yes"],
                ["Accident(s)", "No"],
                ["Clean history report", "Verified"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between py-5 text-sm text-gray-800"
                >
                  <span className="font-medium">{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-black rounded-xl p-6 mt-8 text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">
              Ready to Sell?
            </h3>
            <p className="text-sm text-gray-600 mb-2">Instant offer</p>
            <p className="text-3xl font-bold text-[#3E2AA3] mb-1">
              $32,450 - $36,472
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Expected cash offer range
            </p>
            <p className="text-xs text-gray-600 mb-6">
              <span className="font-semibold underline">
                Complete your vehicle details
              </span>{" "}
              to get a more accurate valuation
            </p>
            <button
              onClick={handleClick}
              className="bg-[#3E2AA3] text-white font-medium text-sm rounded-full px-6 py-2 hover:bg-[#2f1d84] transition"
            >
              Get instant offerssss
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 px-4 lg:px-0">
        <SellingYourCars />
      </div>
    </section>
  );
};

export default MyGarage2;
