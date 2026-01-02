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
import MyGarage2 from "./MyGarage2";

const MyGarage = () => {
  const [carLookupTriggered, setCarLookupTriggered] = useState(false);
  const cars = [
    {
      id: 1,
      image: "/Images/bmwcar.png", // Ensure these images exist in the public/cars folder
      name: "BMW 335 xi",
      price: "$5,900",
      mileage: "137,406 mi.",
      year: "2008",
      fuel: "Gasoline",
      location: "North Pole | Alaska",
      status: "Good Deal",
    },
    {
      id: 2,
      image: "/Images/bmwcar.png",
      name: "BMW 335 xi",
      price: "$5,900",
      mileage: "137,406 mi.",
      year: "2008",
      fuel: "Gasoline",
      location: "North Pole | Alaska",
      status: "Good Deal",
    },
    {
      id: 1,
      image: "/Images/bmwcar.png", // Ensure these images exist in the public/cars folder
      name: "BMW 335 xi",
      price: "$5,900",
      mileage: "137,406 mi.",
      year: "2008",
      fuel: "Gasoline",
      location: "North Pole | Alaska",
      status: "Good Deal",
    },
    {
      id: 2,
      image: "/Images/bmwcar.png",
      name: "BMW 335 xi",
      price: "$5,900",
      mileage: "137,406 mi.",
      year: "2008",
      fuel: "Gasoline",
      location: "North Pole | Alaska",
      status: "Good Deal",
    },
    {
      id: 1,
      image: "/Images/bmwcar.png", // Ensure these images exist in the public/cars folder
      name: "BMW 335 xi",
      price: "$5,900",
      mileage: "137,406 mi.",
      year: "2008",
      fuel: "Gasoline",
      location: "North Pole | Alaska",
      status: "Good Deal",
    },
    {
      id: 2,
      image: "/Images/bmwcar.png",
      name: "BMW 335 xi",
      price: "$5,900",
      mileage: "137,406 mi.",
      year: "2008",
      fuel: "Gasoline",
      location: "North Pole | Alaska",
      status: "Good Deal",
    },
    {
      id: 1,
      image: "/Images/bmwcar.png", // Ensure these images exist in the public/cars folder
      name: "BMW 335 xi",
      price: "$5,900",
      mileage: "137,406 mi.",
      year: "2008",
      fuel: "Gasoline",
      location: "North Pole | Alaska",
      status: "Good Deal",
    },
    {
      id: 2,
      image: "/Images/bmwcar.png",
      name: "BMW 335 xi",
      price: "$5,900",
      mileage: "137,406 mi.",
      year: "2008",
      fuel: "Gasoline",
      location: "North Pole | Alaska",
      status: "Good Deal",
    },
    // Add more cars...
  ];

  const filters = [
    { label: "Price Range", value: "$6,000" },
    { label: "New/Used Status", value: "29-31 mpg" },
    { label: "Select Car Type", value: "Hatchback" },
    { label: "Brand & Model", value: "Honda Civic Hatchback" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Mileage", value: "29-31 mpg" },
    { label: "Transmission", value: "Manual" },
  ];

  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="px-4 md:px-10 lg:px-20 py-6  bg-white">
      {/* Breadcrumbs */}
      <div className="text-gray-500 text-sm mb-4">
        Home <span className="mx-1">/</span>{" "}
        <span className="text-black">My Garage</span>
      </div>

      {/* Hero */}
      <div className="relative rounded-xl overflow-hidden">
        <Image
          src="/Images/GarageBanner.png"
          alt="Car for Sale"
          width={1200}
          height={400}
          className="rounded-xl w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-10 bg-black/30">
          <h1 className="text-white text-base sm:text-xl md:text-3xl lg:text-4xl  leading-snug max-w-xl">
            Track, Maintain,
            <br />
            Maximize your car&apos;s <br />
            value
          </h1>
        </div>
      </div>

      {carLookupTriggered && <MyGarage2 />}

      {!carLookupTriggered && (
        <>
          {/* Add Car Section */}
          <div className="border-2 border-dashed border-[#EB0102] rounded-2xl mt-24 md:mt-40 flex flex-col items-center text-center px-4 md:px-20 py-10 md:mx-40">
            <h2 className="text-2xl md:text-4xl font-semibold text-black mb-4">
              Add your car. Track its value.
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-6 max-w-md">
              Add your car to Your Garage to track its market value and cash in
              when the time is right to sell.
            </p>
            <button
              className="bg-[#4837ff] text-white px-6 py-2 rounded-full mb-4"
              onClick={() => setShowPopup(true)}
            >
              Get Started
            </button>
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <a
                href="/sign-in"
                className="text-black font-semibold hover:underline"
              >
                Sign in.
              </a>
            </p>
          </div>

          {showPopup && (
            <AddCarPopup
              onClose={() => setShowPopup(false)}
              onLookup={() => {
                setCarLookupTriggered(true);
                setShowPopup(false);
              }}
            />
          )}

          {/* Full Width Car Image */}
          <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-20 overflow-hidden">
            <Image
              src="/Images/GarageCars.png"
              alt="Garage Cars"
              width={1920}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Benefits */}
          <section className="w-full text-center px-4 md:px-0 ">
            <h2 className="text-2xl md:text-4xl font-semibold text-black mb-2">
              Unlock Your Car’s Potential
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-10">
              Add your car to track its value, get maintenance tips, and explore
              similar cars.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {[
                {
                  icon: <LuBadgeDollarSign />,
                  text: "Track your car’s market value in real-time.",
                },
                {
                  icon: <TbTools />,
                  text: "Receive personalized maintenance reminders.",
                },
                {
                  icon: <PiCarProfileLight />,
                  text: "Discover similar cars in our inventory.",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#3D2BA3] flex items-center justify-center mb-4">
                    {item.icon &&
                      React.cloneElement(item.icon, {
                        className: "text-white text-2xl",
                      })}
                  </div>
                  <p className="text-black text-base md:text-lg text-center">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Title Section */}
          <h2 className="text-2xl md:text-4xl font-semibold text-center mt-40 text-black font-sans">
            Discover CarnKey&apos;s Inventory
          </h2>
          <p className="text-gray-600 text-center mt-2 ">
            Browse our wide selection of cars and find your perfect match.
          </p>

          {/* Filters */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 my-10">
            {filters.map((filter, idx) => (
              <FilterTag key={idx} {...filter} />
            ))}
          </div>

          {/* Car Listings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cars.map((car, idx) => (
              <CarCard key={`${car.id}-${idx}`} car={car} />
            ))}
          </div>

          {/* See More */}
          <div className="text-center mt-20">
            <button className="bg-[#EB0102] text-white px-6 py-2 rounded-lg font-semibold">
              22 Results See More
            </button>
          </div>
        </>
      )}

      <FAQ />
    </section>
  );
};

export default MyGarage;
