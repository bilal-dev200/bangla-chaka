import { Button } from "@headlessui/react";
import React from "react";
import Btn from "../WebsiteComponents/Button/Button";
import Image from "next/image";

const BottomHero = ({ imageSrc, title, subtitle }) => {
  return (
    <section className="text-white bg-white">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="relative rounded-2xl overflow-hidden border">
          <Image
            src={imageSrc}
            alt="Car dealership with modern building and silver car"
            fill
            className="rounded-2xl object-cover"
          />
          {/* Overlay with content */}
          <div className="absolute inset-0 ml-[700px]  flex items-center px-4 sm:px-6 md:px-8 lg:px-10 py-6 rounded-2xl">
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-20">
                {title}
              </h1>
              <p className="mt-4"> {subtitle}</p>
              <button className="px-6 py-3 mt-4 bg-white text-black rounded-full font-medium ">
                Apply with Owner
              </button>
              {/* <Btn title="ddd"/> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomHero;
