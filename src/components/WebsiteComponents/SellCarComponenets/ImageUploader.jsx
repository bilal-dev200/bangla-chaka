'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";

const ImageUploader = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setSelectedImages(imageUrls); // ✅ Replace existing images
  };

  // Cleanup object URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      selectedImages.forEach((image) => URL.revokeObjectURL(image.url));
    };
  }, [selectedImages]);

  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium text-gray-700">
        Upload photos of your car
      </label>

      <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-16 text-center bg-gray-50 hover:border-gray-400">

        {/* ✅ Image preview inside the upload box */}
        {selectedImages.length > 0 && (
          <div className="absolute inset-0 flex flex-wrap items-start justify-center gap-3 p-1 overflow-y-auto bg-white/70 z-10 rounded-lg">
            {selectedImages.map((image, index) => (
              <div key={index} className="w-auto h-44 relative">
                <Image
                  src={image.url}
                  alt={image.name}
                  fill
                  unoptimized
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>
        )}

        {/* Icon and text remain under preview for fallback */}
        <svg
          className="mx-auto h-8 w-8 text-gray-400 mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
        />
      </div>
    </div>
  );
};

export default ImageUploader;
