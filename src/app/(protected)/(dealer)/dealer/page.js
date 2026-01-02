import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";

const dealer = [
  {
    name: "Polestar Short Hills",
    rating: 4.8,
    reviews: 234,
    address: "1200 Morris Turnpike Suite D240, Millburn, NJ 07078",
    distance: "27.99 miles away",
    phone: "(973) 200-6349",
    dealerType: "Certified Dealer",
    image: "/Images/dealer.png",
  },
  {
    name: "Miles Subaru",
    rating: 4.6,
    reviews: 180,
    address: "1200 Morris Turnpike Suite D240, Millburn, NJ 07078",
    distance: "27.99 miles away",
    phone: "(973) 200-6349",
    dealerType: "Authorized Dealer",
    image: "/Images/dealer.png",
  },
  {
    name: "Audi Lynbrook",
    rating: 4.4,
    reviews: 220,
    address: "1200 Morris Turnpike Suite D240, Millburn, NJ 07078",
    distance: "27.99 miles away",
    phone: "(973) 200-6349",
    dealerType: "Certified Dealer",
    image: "/Images/dealer.png",
  },
  {
    name: "Arrow Motors",
    rating: 4.6,
    reviews: 178,
    address: "1200 Morris Turnpike Suite D240, Millburn, NJ 07078",
    distance: "27.99 miles away",
    phone: "(973) 200-6349",
    dealerType: "Authorized Dealer",
    image: "/Images/dealer.png",
  },
  {
    name: "Arrow Motors",
    rating: 4.2,
    reviews: 200,
    address: "1200 Morris Turnpike Suite D240, Millburn, NJ 07078",
    distance: "27.99 miles away",
    phone: "(973) 200-6349",
    dealerType: "Certified Dealer",
    image: "/Images/dealer.png",
  },
];

const page = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen p-5 px-24 ">
        <p className="text-sm   mb-2  ">Home / Find a Dealer</p>

        <h1 className=" font-bold text-center mb-6 font-hanken text-5xl">
          Dealers new Corona, NY
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/4 h-[500px] bg-white p-4 rounded-[20px] border border-black">
            <h2 className="text-lg font-semibold mb-4 text-center">
              1,200 Matches
            </h2>

            <div className="bg-gray-100 p-3  mb-4 rounded-[20px]">
              <label className="block text-sm font-medium mb-1">Zip Code</label>
              <input
                type="text"
                placeholder="12345"
                className="w-full border px-3 py-2 rounded mb-4 text-sm"
              />

              <select className="w-full border px-3 py-2 rounded text-sm">
                <option value="">Within 10 miles</option>
                <option value="">Within 25 miles</option>
                <option value="">Within 50 miles</option>
                <option value="">Within 100 miles</option>
              </select>
            </div>

            {/* Dealer Rating */}
            <h3 className="text-md font-semibold mb-2">Dealer Rating</h3>
            <div className="flex flex-col gap-2 text-sm mb-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <button className="border border-green-600 text-green-700 px-2  rounded-[10px] text-sm w-fit">
                  Great Deal
                </button>{" "}
                (2061)
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <button className="border border-green-600 text-green-700 px-2  rounded-[10px] text-sm w-fit">
                  Great Deal
                </button>{" "}
                (2061)
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <button className="border border-green-600 text-green-700 px-2  rounded-[10px] text-sm w-fit">
                  Great Deal
                </button>{" "}
                (2061)
              </label>
            </div>

            <hr className="my-4" />

            {/* Dealer Name */}
            <label className="block text-sm font-medium mb-1">
              Dealer Name
            </label>
            <input
              type="text"
              placeholder="Search by dealer name..."
              className="w-full border px-3 py-2 rounded text-sm"
            />
          </div>

          <div className="w-full lg:w-3/4">
            <div className="w-full ">
              {dealer.map((dealer, index) => (
                <div
                  key={index}
                  className="bg-[#F8F8F8] p-4 mb-4 rounded-[20px] flex flex-col gap-3"
                >
                  {/* Top Row - Image + Name + Reviews */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={dealer.image}
                        alt={dealer.name}
                        className="w-10 h-10 object-contain"
                      />
                      <h2 className="text-lg font-semibold">{dealer.name}</h2>
                    </div>
                    <p className="text-sm text-yellow-500 font-medium">
                      ★ {dealer.rating} ({dealer.reviews} reviews)
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-600 flex-wrap gap-2 mt-2 pl-1">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-6.05a7 7 0 010-9.9zM10 11a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{dealer.address}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3.05 6.05a7 7 0 019.9-1.414L10 7l-3.95-0.95z" />
                      </svg>
                      <span>{dealer.distance}</span>
                    </div>
                    <button className="px-2 py-3 rounded-[15px] bg-gray-200 hover:bg-gray-300 text-sm  whitespace-nowrap">
                      View Inventory(280 cars)
                    </button>
                  </div>

                  <div className="flex gap-4 mt-2 text-sm text-gray-700 font-medium px-1 flex-wrap">
                    <span>
                      New: <span className="text-gray-500">{dealer.phone}</span>
                    </span>
                    <span>
                      Used:{" "}
                      <span className="text-gray-500">{dealer.phone}</span>
                    </span>
                    <span>
                      Service:{" "}
                      <span className="text-gray-500">{dealer.phone}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
