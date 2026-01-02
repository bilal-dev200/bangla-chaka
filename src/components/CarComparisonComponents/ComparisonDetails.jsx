'use client';

import { useState } from 'react';

const highlights = [
  { label: 'Starting MSRP', values: ['$39,995', '$44,990', '-'] },
  { label: 'Consumer Rating', values: ['$39,995', '$39,995', '-'] },
  { label: 'Towing Capacity', values: ['N/A', '3,500 lbs', '-'] },
  { label: 'Cargo Capacity', values: ['N/A', 'N/A', '-'] },
  { label: 'Engine Type', values: ['Electric', 'Electric', '-'] },
  { label: 'Combined MPGe', values: ['91 - 103', '91 - 103', '-'] },
  { label: 'Range', values: ['226 - 320 mi.', '226 - 320 mi.', '-'] },
  { label: 'Level 2 Charging', values: ['8 - 10 hrs.', '8 - 10 hrs.', '-'] },
];

const ComparisonDetails = () => {
  const [hideSimilarities, setHideSimilarities] = useState(false);

  const filteredHighlights = hideSimilarities
    ? highlights.filter((row) => new Set(row.values).size > 1)
    : highlights;

  const renderSection = (title) => (
    <>
      {/* Section Title */}
      <div className="bg-gray-100 px-4 py-2 rounded-md text-sm font-medium text-gray-800 w-max mb-2 mt-20 first:mt-0">
        {title}
      </div>

      {/* Table Wrapper (scroll on small screens) */}
      <div className="overflow-x-auto">
        <div className="w-[1000px] lg:w-3/4 border-t border-gray-200">
          {filteredHighlights.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-4 text-sm text-gray-800 border-b border-gray-200"
            >
              <div className="py-3 px-4 font-medium whitespace-nowrap">
                {row.label}
              </div>
              {row.values.map((value, idx) => (
                <div
                  key={idx}
                  className="py-3 px-4 border-l border-gray-300 whitespace-nowrap text-center"
                >
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-6 bg-white">
      {/* Toggle */}
      <div className="flex justify-end items-center mb-3">
        <span className="text-sm text-gray-800 mr-2">Hide Similarities</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={hideSimilarities}
            onChange={() => setHideSimilarities(!hideSimilarities)}
          />
          <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-[#2A2284] after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5 after:shadow-md" />
        </label>
      </div>

      {/* Sections */}
      {renderSection('Highlights')}
      {renderSection('Engine')}
      {renderSection('Tyres & Wheels')}
    </div>
  );
};

export default ComparisonDetails;
