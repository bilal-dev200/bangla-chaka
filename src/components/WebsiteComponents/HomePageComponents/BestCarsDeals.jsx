"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Image_URL } from "@/config/constants";
import { useBodyTypeStore } from "@/lib/store/bodyTypeStore";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

export default function BestCarsDeals() {
  const { bodyType, isLoading, error, getAllBodyType } = useBodyTypeStore();
  const router = useRouter();

  // pagination state - Adjusted to 9 to account for the Title being the 1st slot
  const itemsPerPage = 9; 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getAllBodyType();
  }, [getAllBodyType]);

  const nextPage = () => {
    if (currentIndex + itemsPerPage < bodyType.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevPage = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  // We slice the data normally; the grid layout handles the positioning
  const visibleCars = bodyType.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="p-6 bg-white">
      {/* Top Header Section */}
      <h2 className="font-hanken text-[40px] md:text-4xl  mb-2 mx-5">
        Best Cars Deals & Services Near You
      </h2>
      <p className="font-hanken text-[18px] md:text-[18px] text-gray-500 mb-4 mx-5">
        If GPS Off Show Trending Car Deal
      </p>

      {/* Tabs */}
      <div className="flex space-x-6 border-b mb-10 mx-5 ">
        <button
          className={`pb-2 font-medium transition-colors duration-200 text-red-600 border-b-2 border-red-600`}
        >
          Cars for Sale
        </button>
      </div>

      {/* Main Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-start mx-6">
        
        {/* Item 1: The Title and Navigation (Always first) */}
        <div className="flex flex-col justify-center h-full min-h-[150px]">
          <h3 className="font-hanken text-2xl md:text-4xl font-bold leading-tight mb-6">
            Top Cars for <br /> Sale Near You
          </h3>
          <div className="flex gap-3">
            <button
    onClick={prevPage}
    className="px-6 py-2 border border-black rounded-full disabled:opacity-50"
    disabled={currentIndex === 0}
  >
    <FaArrowLeftLong size={20} />
  </button>
  
  <button
    onClick={nextPage}
    className="px-6 py-2 border border-black rounded-full disabled:opacity-50"
    disabled={currentIndex + itemsPerPage >= bodyType.length}
  >
    <FaArrowRightLong size={20} />
  </button>
          </div>
        </div>

        {/* Dynamic Car Items */}
        {isLoading && (
          <p className="col-span-2 text-gray-500">Loading...</p>
        )}
        
        {error && (
          <p className="col-span-2 text-red-500">{error}</p>
        )}

        {!isLoading && !error && visibleCars.map((car) => (
          <Link
            href={`/cars-for-sale?bodyTypeId=${car?.id}&bodyTypeName=${car?.name}`}
            key={car.id}
            className="group flex flex-col items-start justify-end"
          >
            <div className="bg-[#f5f5f5] rounded-xl  w-full  aspect-square flex mb-4 justify-end  transition-transform group-hover:scale-105">
              <Image
                src={`${Image_URL}${car.image}`}
                alt={car.name}
                width={200}
                height={120}
                className="object-cover"
              />
            </div>
            <p className="text-lg font-semibold text-gray-800 ml-1">
              {car.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}