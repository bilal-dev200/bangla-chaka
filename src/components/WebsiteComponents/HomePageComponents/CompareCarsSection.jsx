"use client";
import Image from "next/image";
import { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function CarsComparison() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const carComparisons = [
    {
      id: 1,
      img: "/compare-1.jpg",
      model1: "Camry",
      price1: "$10,000",
      model2: "Kylaq",
      price2: "$11,000",
    },
    {
      id: 2,
      img: "/compare-2.jpg",
      model1: "Camry",
      price1: "$10,000",
      model2: "Kylaq",
      price2: "$11,000",
    },
    {
      id: 3,
      img: "/compare-3.jpg",
      model1: "Camry",
      price1: "$10,000",
      model2: "Kylaq",
      price2: "$11,000",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-white flex flex-col lg:flex-row">
      {/* Left Content */}
      <div className="max-w-xl flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl  font-semibold text-gray-900">
          Compare Cars & Make the Right Choice
        </h2>
        <p className="text-gray-500 mt-4 ">
          Compare features, prices, and performance of different cars to find
          the perfect match for your needs.
        </p>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => scroll("left")}
            className="w-20 h-10 border bg-[#EB0102] border-gray-400 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200"
          >
            <AiOutlineArrowLeft size={24} color="white" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-20 h-10 border border-gray-400 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200"
          >
            <AiOutlineArrowRight size={24} color="black" />
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        className="overflow-x-auto scrollbar-hide flex-1 mt-10 lg:mt-0 lg:ml-10 scroll-smooth scrollbar-hide"
        ref={scrollRef}
      >
        <div className="flex gap-6 min-w-[320px]">
          {carComparisons.map((car) => (
            <div
              key={car.id}
              className="bg-white shadow-lg rounded-lg min-w-[280px] sm:min-w-[300px] border border-gray-200 flex-shrink-0"
            >
              {/* Car Image */}
              <div className="w-full h-[160px] flex items-center justify-start">
                <Image
                  src="/Images/CarComparisonCar.png"
                  alt="Car Image"
                  width={260}
                  height={160}
                  className="object-contain"
                />
              </div>

              {/* Car Details */}
              <div className="flex justify-between mt-4 font-hanken p-6  text-gray-700">
                <div>
                  <p className="text-sm text-gray-500">Toyota</p>
                  <h3 className="font-semibold">{car.model1}</h3>
                  <p className="text-sm">{car.price1}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Skoda</p>
                  <h3 className="font-semibold">{car.model2}</h3>
                  <p className="text-sm">{car.price2}</p>
                </div>
              </div>

              {/* VS Indicator */}
              <div className="flex justify-center items-center my-4 relative bottom-16">
                <span className="bg-[#00A652] text-white px-3 py-1 rounded-full font-semibold">
                  VS
                </span>
              </div>
              <div className="px-6 pb-4">
                {/* View Comparison Button */}
                <button className="w-full text-black border border-black px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 ">
                  View Comparison
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
