import React from 'react';

export default function FinancingRequest() {
  const features = [
    {
      text: (
        <>
          Owner-Direct <br /> Financing Option
        </>
      ),
      icon: './Images/Mask.png',
      marginLeft: true,
    },
    {
      text: (
        <>
          Connect with the Seller <br /> for Financing
        </>
      ),
      icon: './Images/mask (2).png',
      marginLeft: false,
    },
    {
      text: (
        <>
          Talk Loan Terms <br /> with the Owner
        </>
      ),
      icon: './Images/mask (3).png',
      marginLeft: true,
    },
  ];

  return (
    <section className="bg-white  flex flex-col justify-center px-6 md:px-20 lg:px-44 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center ml-12">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl text-gray-900 mb-6">
            Request Financing <br /> from the Car Owner
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-base">
            Found the car you love? Submit a financing request directly to the owner. If they offer loan options, they&apos;ll respond with terms that suit both of you. Carnkey simply connects you — the decision is between you and the seller.
          </p>
          <button className="px-6 py-3 bg-indigo-700 hover:bg-indigo-800 text-white rounded-full font-medium transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300">
            View Cars
          </button>
        </div>

        {/* Right Content Features */}
        <div className="md:col-span-2 flex flex-col space-y-10">
          {features.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-4 shadow-lg rounded-2xl px-4 py-3 w-full max-w-[350px] ${item.marginLeft ? 'ml-0 md:ml-52' : 'ml-0 md:ml-20'
                } mx-auto`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-700 text-white p-1">
                <img
                  src={item.icon}
                  alt={`icon${index + 1}`}
                  className="w-[30px] h-full object-contain"
                />
              </div>
              <p className="font-semibold text-gray-900 text-sm leading-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
