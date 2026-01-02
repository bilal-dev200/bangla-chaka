"use client";
import Image from "next/image";
import React from "react";

const winners = [
  {
    id: 1,
    name: "Emma W.",
    state: "TX, USA",
    winningNumber: "394852",
    prize: "Free Car Report",
    date: "June 25, 2025",
    img: "/Images/announced.png",
  },
  {
    id: 2,
    name: "Emma W.",
    state: "TX, USA",
    winningNumber: "394852",
    prize: "Free Car Report",
    date: "June 25, 2025",
    img: "/Images/announced.png",
  },
  {
    id: 3,
    name: "Emma W.",
    state: "TX, USA",
    winningNumber: "394852",
    prize: "Free Car Report",
    date: "June 25, 2025",
    img: "/Images/announced.png",
  },
  {
    id: 4,
    name: "Emma W.",
    state: "TX, USA",
    winningNumber: "394852",
    prize: "Free Car Report",
    date: "June 25, 2025",
    img: "/Images/announced.png",
  },
];

const RecentWinners = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <h2 className="text-2xl font-semibold text-gray-900 mb-1 text-center">
        Our Recent Winners
      </h2>
      <p className="text-center text-sm text-gray-600 mb-8">
        Those are just a few of the many winners celebrating with us.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">State</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Winning Number</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Prize</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Date</th>
            </tr>
          </thead>
          <tbody>
            {winners.map(({ id, name, state, winningNumber, prize, date, img }, i) => (
              <tr
                key={id}
                className={`border-b border-gray-200 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <td className="py-4 px-6 flex items-center space-x-3 text-gray-800 text-sm font-medium">
                  <div className="w-10 h-10 relative">
                    <Image
                      src={img}
                      alt={`Profile picture of ${name}`}
                      fill
                      className="rounded-full object-cover border border-gray-300"
        
                    />
                  </div>
                  <span>{name}</span>
                </td>
                <td className="py-4 px-6 text-gray-700 text-sm">{state}</td>
                <td className="py-4 px-6 text-gray-700 text-sm">{winningNumber}</td>
                <td className="py-4 px-6 text-gray-700 text-sm">{prize}</td>
                <td className="py-4 px-6 text-gray-700 text-sm">{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentWinners;
