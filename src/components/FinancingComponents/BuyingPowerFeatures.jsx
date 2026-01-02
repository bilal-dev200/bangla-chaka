import React from 'react';
import Image from "next/image";

const BuyingPowerFeatures = () => {
  const features = [
    {
      text: (
        <>
          No impact on <br /> your credit
        </>
      ),
      icon: '/Images/icon1.png',
    },
    {
      text: (
        <>
          100% free and <br /> secure
        </>
      ),
      icon: '/Images/icon2.png',
    },
    {
      text: (
        <>
          Takes less <br /> than 2 minutes
        </>
      ),
      icon: '/Images/icon3.png',
    },
    {
      text: (
        <>
          Get a prequalified <br /> spending limit
        </>
      ),
      icon: '/Images/icon4.png',
    },
  ];

  return (
    <section className="mx-auto px-2 py-3 text-center bg-white">
      <header className="mb-6">
        <h2 className="text-4xl font-semibold text-gray-900">
          Know Your Buying Power
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Prequalify in minutes without impacting your credit score.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center h-40"
          >
            <Image
              src={item.icon}
              alt="feature icon"
              width={56}
              height={56}
              className="mb-3 object-contain"
              loading="lazy"
            />
            <p className="text-lg font-medium text-gray-900">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BuyingPowerFeatures;
