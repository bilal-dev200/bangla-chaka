"use client";
import React, { useEffect, useState } from "react";

const LuckyNumberTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date();
    target.setHours(target.getHours() + 4);
    target.setMinutes(target.getMinutes() + 23);
    target.setSeconds(target.getSeconds() + 12);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="bg-gradient-to-r from-[#0A0B3A] to-[#1B1F7A] text-white rounded-xl p-6 w-[400px] sm:w-[490px] mx-auto relative shadow-lg h-[180px]">
      {/* Top Cut */}
      <div className="absolute -mt-9 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45 z-10" />
      {/* Bottom Cut */}
      <div className="absolute -bottom-[12px] left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rotate-45 z-10" />

      <div className="flex  mt-5 items-center">
        {/* Lucky Number */}
        <div className="text-center">
          <p className="text-lg text-gray-300">YOUR LUCKY NUMBER</p>
          <h1 className="text-3xl font-bold tracking-widest mt-5">498372</h1>
        </div>

        {/* Timer */}
        <div className=" ml-28 mt-5">
          <p className="text-sm text-gray-300">Next Draw In</p>
          <h1 className="text-xl -ml-7 ">
            [{format(timeLeft.hours)}h : {format(timeLeft.minutes)}m : {format(timeLeft.seconds)}s]
          </h1>
        </div>
      </div>

      
     <div className="flex justify-between items-center text-[10px] text-gray-300 mt-7">
  <span className="text-xs ml-5">Keep this safe — scratch now!</span>
  <div className="text-right flex flex-row gap-x-14 mr-2">
    <p>Monday 12:00AM</p>
    <p>15/July/2025</p>
  </div>
</div>

    </div>
  );
};

export default LuckyNumberTimer;
