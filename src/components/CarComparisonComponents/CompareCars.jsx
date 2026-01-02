'use client';

import Image from 'next/image';

const CompareCars = ({ isSticky }) => {
  return (
    <div className={`w-full px-4 sm:px-6 md:px-8 ${isSticky ? 'pt-32' : 'pt-10'} bg-white`}>
      {/* Sticky Header */}
      <div className={`${isSticky ? 'fixed top-0 left-0 w-full z-50 bg-white shadow-md px-4 sm:px-6 md:px-8 py-4' : 'sticky top-0 bg-white z-10'}`}>
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-black">
          Compare Cars Side-by-Side
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {[
            'Pricing',
            'Engine',
            'Tires & Wheels',
            'Suspension',
            'Steering',
            'Measurements',
            'Weight & Capacity',
            'Safety',
            'Entertainment',
            'Electrical',
            'Brakes',
          ].map((label, i) => (
            <button
              key={i}
              className={`px-4 py-1 border border-gray-300 rounded-full text-black text-sm ${label === 'Tires & Wheels' ? 'bg-[#2A2284] text-white' : 'hover:bg-gray-100'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Car Cards Section */}
      <div className="mt-8 overflow-x-auto">
        <div className="flex gap-6 min-w-[600px] sm:min-w-full">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="w-56 rounded-xl shadow-md p-4 bg-white relative flex-shrink-0"
            >
              <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-light">
                ×
              </button>
              <div className="w-full h-32 relative mb-4">
                <Image
                  src="/Images/SilverCarComparison.png"
                  alt="Car"
                  layout="fill"
                  objectFit="contain"
                  className="p-4"
                />
              </div>
              <div className="text-center text-sm text-gray-600">
                2020 Alfa Romeo 4C
              </div>
              <div className="text-center text-xl font-semibold text-black mt-1">
                $ 20,000
              </div>
            </div>
          ))}

          <button
            type="button"
            className="w-56 rounded-xl shadow-md p-4 bg-gray-100 flex-shrink-0 flex items-center justify-center text-gray-600 font-medium hover:bg-gray-200 transition"
          >
            + Add a vehicle
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompareCars;
