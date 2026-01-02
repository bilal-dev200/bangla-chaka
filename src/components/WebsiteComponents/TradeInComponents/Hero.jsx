import React from "react";
import Image from "next/image";

const Hero = ({ imageSrc, title, subtitle }) => {
  return (
    <section className="text-white bg-white">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="text-gray-500 text-sm mb-4 ">
          Home <span className="mx-1">/</span>{" "}
          <span className="text-black ">Cars for Sale</span>
        </div>
        <div className="relative rounded-2xl overflow-hidden border">
          <Image
            src={imageSrc}
            alt="Car dealership with modern building and silver car"
            fill
            className="rounded-2xl object-cover"
          />
          {/* Overlay with content */}
          <div className="absolute inset-0  flex items-center px-4 sm:px-6 md:px-8 lg:px-10 py-6 rounded-2xl">
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {title}
                <br />
                <span className="">{subtitle}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
