"use client";
import React from "react";
import Image from "next/image";

export default function AnnouncementSection() {
  return (
    <section className=" w-full  py-16 flex flex-col lg:flex-row gap-12 lg:gap-30">
      {/* Left Text Content */}
      <div className="flex-1 w-[500px] ml-14">
        <h2 className="text-5xl font-medium text-gray-900 mb-3">
          When Are Winners Announced?
        </h2>
        <p className="text-gray-600 mb-8">
          Check daily for a new lucky number — don&apos;t miss your chance!
        </p>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Item 1 */}
          <div className="flex items-center bg-white rounded-xl shadow-md p-4 space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-900 text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Scratch opens:</p>
              <p className="text-sm text-gray-600">Every day at 12:00 AM PST</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center bg-white rounded-xl shadow-md p-4 space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-900 text-white">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.5 6.5l7 7m0-7l-7 7" />
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Winners announced:</p>
              <p className="text-sm text-gray-600">Every Next Monday</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center bg-white rounded-xl shadow-md p-4 space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-900 text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Claim deadline:</p>
              <p className="text-sm text-gray-600">Within 24 hours of match</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center bg-white rounded-xl shadow-md p-4 space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-900 text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Processed:</p>
              <p className="text-sm text-gray-600">Rewards in 3–5 business days to home</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full max-w-lg rounded-l-full overflow-hidden ">
        <Image
          src="/Images/announced.png"
          alt="White SUV car on road with blue sky and clouds in the background, rounded right side"
          width={1000}
          height={1000}
          className="rounded-l-full object-cover w-[55  0px] h-[410px]"
        />
      </div>
    </section>
  );
}
