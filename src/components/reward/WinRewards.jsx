'use client';

import Image from 'next/image';
import React from 'react';

const rewards = [
  {
    title: "FREE CAR REPORT",
    subtitle: "Access full vehicle history worth $29",
    imageUrl: "/Images/win1.png",
    altText: "Luxury purple sports car parked on a winding mountain road during sunset with scenic hills in the background"
  },
  {
    title: "$20 COUPON",
    subtitle: "Discount on services or listings",
    imageUrl: "/Images/win2.png",
    altText: "Vintage beige coupon ticket with red stamp on a vibrant red background representing discount or offers"
  },
  {
    title: "BONUS CREDIT",
    subtitle: "Wallet top-up to use in-app",
    imageUrl: "/Images/win3.jpg",
    altText: "Sleek black wallet credit card floating on a dark gradient background representing in-app wallet top-up"
  },
  {
    title: "FREE LISTING",
    subtitle: "Post your car listing at no cost",
    imageUrl: "/Images/win4.jpg",
    altText: "Vintage style clipboard holding an old photograph of soldiers with handwritten notes, symbolizing free listing opportunity"
  }
];

export default function WinRewards() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold mb-2">What Can You Win?</h2>
        <p className="text-gray-600 text-sm sm:text-base">
          From premium reports to real rewards — here&apos;s what&apos;s up for grabs.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {rewards.map(({ title, subtitle, imageUrl, altText }, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="relative w-full h-80"> {/* Increased height */}
              <Image
                src={imageUrl}
                alt={altText}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
                priority={index === 0}
              />
              <div className="absolute top-4 left-4 right-4 text-white rounded px-3 py-2"> {/* Top instead of bottom */}
                <h3 className="text-xl">{title}</h3>
                <p className="text-[15px] mt-1">{subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
