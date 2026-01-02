
"use client";
import React from "react";
import Image from "next/image";

export default function ScratchBigWins({ onTryLuck }) {
  return (
    <div className="w-full mx-auto md:px-32 p-6 mt-10 flex flex-col md:flex-row justify-around items-center gap-10 md:gap-20">
      <div className="w-1/2 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-3xl md:text-5xl mb-4">
          Ready to Scratch Your Way to Big Wins?
        </h1>
        <p className="text-gray-700 mb-6 max-w-md mx-auto md:mx-0">
          Every new user receives a unique digital card with a lucky number.
          Scratch it today and find out if you’re among the winners of premium
          reports, discounts, and more!
        </p>

        <button
          onClick={onTryLuck}
          className="w-fit bg-[#EB0102] text-white font-semibold py-3 px-8 rounded-[50px] transition duration-300"
        >
          Try Your Luck
        </button>
      </div>

      <div className="w-1/2 rounded-[15px] flex justify-center">
        <Image
          src="/Images/luck.png"
          alt="Digital scratch card with lucky number"
          width={400}
          height={500}
          className="h-72 rounded-[15px]"
        />
      </div>
    </div>
  );
}
