"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 

const dealers = [
  {
    name: "AutoHub",
    offerRange: "$33k - $35K",
    distance: "5 mi",
    rating: "4.7",
    inspection: "No",
    pickup: "Yes",
  },
  {
    name: "FastMotors",
    offerRange: "$32k - $34K",
    distance: "8 mi",
    rating: "4.2",
    inspection: "Yes",
    pickup: "No",
  },
  {
    name: "AutoHub",
    offerRange: "$33k - $35K",
    distance: "5 mi",
    rating: "4.7",
    inspection: "No",
    pickup: "Yes",
  },
  {
    name: "FastMotors",
    offerRange: "$32k - $34K",
    distance: "8 mi",
    rating: "4.2",
    inspection: "Yes",
    pickup: "No",
  },
];

const Dealer = () => {
  const [selected, setSelected] = useState(null);
      const router = useRouter();

  const handleClick = (index) => {
    setSelected(index);
    router.push("/form");
  };



  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">
        Choose the Best Offer from Our Verified DealersEEE
      </h1>
      <p className="text-center text-gray-500 mb-6">
        We’ve received offers from trusted dealers near you. Select the one that works best for you.
      </p>

      {/* Scroll container for mobile */}
      <div className="overflow-x-auto">
        <div className="min-w-[768px] bg-gray-50 rounded-xl overflow-hidden shadow">
          {/* Table Header */}
          <div className="grid grid-cols-7 text-sm font-semibold text-gray-700 px-6 py-3 text-center">
            <div className="border-r pr-3">Dealer</div>
            <div className="border-r pr-3">Offer Range</div>
            <div className="border-r pr-3">Distance</div>
            <div className="border-r pr-3">Rating</div>
            <div className="border-r pr-3">Inspection Required</div>
            <div className="border-r pr-3">Option</div>
            <div className="pr-3">Select Dealer</div>
          </div>

          {/* Table Rows */}
          {dealers.map((dealer, index) => (
            <div
              key={index}
              className={`grid grid-cols-7 text-sm px-6 py-3 text-center ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              <div className="border-r pr-3 font-medium">{dealer.name}</div>
              <div className="border-r pr-3">{dealer.offerRange}</div>
              <div className="border-r pr-3">{dealer.distance}</div>
              <div className="border-r pr-3 flex justify-center items-center gap-1">
                {dealer.rating}
                <span className="text-yellow-500">★</span>
              </div>
              <div className="border-r pr-3">{dealer.inspection}</div>
              <div className="border-r pr-3">{dealer.pickup}</div>
              <div className="flex justify-center items-center gap-4 pr-3">
                {/* <button
                  onClick={() => setSelected(index)}
                  className={`px-4 py-1 text-sm rounded-full border flex items-center gap-1 ${
                    selected === index
                      ? "bg-indigo-700 text-white border-indigo-700"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  {selected === index}
                  Selected
                </button> */}
              <button
      onClick={() => handleClick(index)} 
      className={`px-4 py-1 text-sm rounded-full border flex items-center gap-1 ${
        selected === index
          ? "bg-indigo-700 text-white border-indigo-700"
          : "bg-white text-gray-700 border-gray-300"
      }`}
    >
      {selected === index && <span>✔️</span>}
      Selected
    </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dealer;
  