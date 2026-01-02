"use client";
import Image from "next/image";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler
);

const chartData = {
  labels: ["", "", "", "", ""],
  datasets: [
    {
      label: "Car Value",
      data: [200000, 320000, 390000, 310000, 280000],
      borderColor: "#5B2BEC", // Line color
      backgroundColor: "rgba(91, 43, 236, 0.2)", // Fill color
      tension: 0.4, // Smooth curve
      fill: true,
      pointRadius: 0,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

export default function SellingYourCars() {
  return (
   <section className="relative py-16 overflow-hidden bg-white">
  {/* Gray background band */}
 <div
  className="absolute inset-x-0 top-[40%]  -translate-y-1/2 bg-gray-100 rounded-xl   h-[650px]  xl:h-96 z-0"
/>

  {/* Content wrapper */}
  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-[1200px] mx-auto px6">
    {/* Left Text */}
    <div className="max-w-lg mb-10 lg:mb-0">
      <h2 className="text-4xl font-bold text-gray-900 leading-snug">
        <span className="text-[#EB0102]">Selling Your Car?</span> Let’s Make It Quick & Easy
      </h2>
      <p className="text-gray-500 mt-4 text-sm md:text-base">
        Your car, your price—sell on your terms and get the best deal effortlessly.
      </p>
      <button className="mt-6 bg-[#EB0102] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bgpurple-900 transition">
        List Your Car Now
      </button>
    </div>

   {/* Right Image */}
<div className="relative w-full lg:w-auto flex items-end mt-10 lg:mt-0 -mr-6 lg:-mr-20 xl:-mr-32">
  <Image
    src="/Images/homeTrend.png"
    alt="Luxury Car"
    width={650}
    height={350}
    className="drop-shadow-xl max-w-full h-auto object-contain"
  />
</div>
  </div>
</section>

  );
}
