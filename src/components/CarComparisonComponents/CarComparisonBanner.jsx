"use client";
import Image from "next/image";

const CarComparisonBanner = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-4">
      {/* Breadcrumbs */}
      <div className="text-gray-500 text-sm mb-4 ">
        Home <span className="mx-1">/</span>{" "}
        <span className="text-black ">Cars Comparison</span>
      </div>

      {/* Hero Banner */}
      <div className="relative w-full pb-[33.33%] rounded-xl overflow-hidden">
        <Image
          src="/Images/CarComparisonBanner.png"
          alt="Car Comparison Banner"
          fill
          className="rounded-xl object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default CarComparisonBanner;
