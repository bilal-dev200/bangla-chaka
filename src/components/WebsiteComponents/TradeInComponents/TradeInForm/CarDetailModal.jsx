// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { FaTimes } from "react-icons/fa";

// const CarDetailModal = ({ isOpen, onClose }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//             <div className="bg-white w-[500px] h-[90vh] overflow-y-auto rounded-2xl shadow-lg relative">
//                 {/* Close Button */}
//                 <button
//                     onClick={onClose}
//                     className="absolute top-3 right-2  p-2 rounded-full hover:bg-gray-200"
//                 >
//                     <FaTimes size={20} />
//                 </button>

//                 {/* Image Carousel */}
//                 <div className="w-full h-64 relative">
//                     <Image
//                         src="/Images/selected.png"
//                         alt="Car Image"
//                         fill
//                         className="object-cover rounded-t-2xl"
//                     />
//                 </div>

//                 {/* Thumbnail Images */}

//                 <div className="flex space-x-2 px-4 py-3 overflow-x-auto">
//                     {[...Array(4)].map((_, i) => (
//                         <div key={i} className="w-24 h-16 relative">
//                             <Image
//                                 src="/Images/select.png"   // 👈 yaha sirf aik image ka path
//                                 alt={`Car ${i}`}
//                                 fill
//                                 className="object-cover rounded-lg"
//                             />
//                         </div>
//                     ))}
//                 </div>


//                 {/* Content */}
//                 <div className="p-5 space-y-6">
//                     {/* Title + Price */}
//                     <div>
//                         <h2 className="text-2xl font-semibold">
//                             BMW 430d Coupe M Sport 190kM
//                         </h2>
//                         <p className="text-xl font-bold text-green-600 mt-2">$20,000</p>
//                     </div>

//                     {/* Description */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-2">
//                             What is the BMW 430d Coupe M Sport?
//                         </h3>
//                         <p className="text-gray-600 text-sm">
//                             The BMW 430d Coupe M Sport is a premium sports car offering
//                             excellent performance, comfort, and advanced driving dynamics...
//                         </p>
//                     </div>

//                     {/* Vehicle Info */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-2">Vehicle Info</h3>
//                         <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-600">
//                             <p>Fuel: Diesel</p>
//                             <p>Engine: 3.0L</p>
//                             <p>Seats: 4</p>
//                             <p>Transmission: Automatic</p>
//                             <p>Color: White</p>
//                             <p>Mileage: 190kM</p>
//                         </div>
//                     </div>

//                     {/* Car Features */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-2">Car Features</h3>
//                         <div className="flex flex-wrap gap-2 text-sm text-gray-700">
//                             {[
//                                 "Leather Seats",
//                                 "Air Conditioning",
//                                 "Power Windows",
//                                 "ABS",
//                                 "Parking Sensors",
//                                 "Navigation System",
//                             ].map((f, i) => (
//                                 <span
//                                     key={i}
//                                     className="px-3 py-1 border rounded-full bg-gray-100"
//                                 >
//                                     {f}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Vehicle History */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-2">Vehicle History</h3>
//                         <ul className="list-disc pl-5 text-sm text-gray-600">
//                             <li>No accidents reported</li>
//                             <li>1 previous owner</li>
//                             <li>Last serviced: Aug 2023</li>
//                         </ul>
//                     </div>

//                     {/* Deal Gauge */}
//                     <div className="border rounded-xl p-4 bg-gray-50">
//                         <h3 className="text-lg font-semibold mb-2">Deal Gauge</h3>
//                         <p className="text-gray-600 text-sm mb-2">
//                             This car is priced fairly compared to the market value.
//                         </p>
//                         <div className="text-xl font-bold text-green-600">$20,000</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default CarDetailModal
// // export default function Page() {
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <div className="p-10">
// //       <button
// //         onClick={() => setOpen(true)}
// //         className="px-5 py-2 bg-blue-600 text-white rounded-lg"
// //       >
// //         Open Car Dialog
// //       </button>
// //       <CarDetailModal isOpen={open} onClose={() => setOpen(false)} />
// //     </div>
// //   );
// // }

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const CarDetailModal = ({ isOpen, onClose }) => {
//   const images = [
//     "/Images/Selected.png",
//     "/Images/sellcar.png",
//     "/Images/Masks.png",
//     "/Images/opel.png",
//   ];

//   const [selectedIndex, setSelectedIndex] = useState(0);

//   if (!isOpen) return null;

//   const handlePrev = () => {
//     setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div className="bg-white w-[500px] h-[90vh] overflow-y-auto rounded-2xl shadow-lg relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-2 p-2 rounded-full hover:bg-gray-200"
//         >
//           <FaTimes size={20} />
//         </button>

//         {/* Image Carousel */}
//         <div className="w-full h-64 relative flex items-center justify-center">
//           {/* Prev Button */}
//           <button
//             onClick={handlePrev}
//             className="absolute left-3 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
//           >
//             <FaChevronLeft size={16} />
//           </button>

//           <Image
//             src={images[selectedIndex]}
//             alt="Car Image"
//             fill
//             className="object-cover rounded-t-2xl"
//           />

//           {/* Next Button */}
//           <button
//             onClick={handleNext}
//             className="absolute right-3 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
//           >
//             <FaChevronRight size={16} />
//           </button>
//         </div>

//         {/* Thumbnail Images */}
//         <div className="flex space-x-2 px-4 py-3 overflow-x-auto scrollbar-hide">
//           {images.map((img, i) => (
//             <div
//               key={i}
//               onClick={() => setSelectedIndex(i)}
//               className={`w-24 h-16 relative cursor-pointer border-2 rounded-lg ${
//                 selectedIndex === i ? "border-blue-500" : "border-transparent"
//               }`}
//             >
//               <Image
//                 src={img}
//                 alt={`Car ${i}`}
//                 fill
//                 className="object-cover rounded-lg"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Content */}
//         <div className="p-5 space-y-6">
//           {/* Title + Price */}
//           <div>
//             <h2 className="text-2xl font-semibold">
//               BMW 430d Coupe M Sport 190kM
//             </h2>
//             <p className="text-xl font-bold text-green-600 mt-2">$20,000</p>
//           </div>

//           {/* Description */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2">
//               What is the BMW 430d Coupe M Sport?
//             </h3>
//             <p className="text-gray-600 text-sm">
//               The BMW 430d Coupe M Sport is a premium sports car offering
//               excellent performance, comfort, and advanced driving dynamics...
//             </p>
//           </div>

//           {/* Vehicle Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Vehicle Info</h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-600">
//               <p>Fuel: Diesel</p>
//               <p>Engine: 3.0L</p>
//               <p>Seats: 4</p>
//               <p>Transmission: Automatic</p>
//               <p>Color: White</p>
//               <p>Mileage: 190kM</p>
//             </div>
//           </div>

//           {/* Car Features */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Car Features</h3>
//             <div className="flex flex-wrap gap-2 text-sm text-gray-700">
//               {[
//                 "Leather Seats",
//                 "Air Conditioning",
//                 "Power Windows",
//                 "ABS",
//                 "Parking Sensors",
//                 "Navigation System",
//               ].map((f, i) => (
//                 <span
//                   key={i}
//                   className="px-3 py-1 border rounded-full bg-gray-100"
//                 >
//                   {f}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Vehicle History */}
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Vehicle History</h3>
//             <ul className="list-disc pl-5 text-sm text-gray-600">
//               <li>No accidents reported</li>
//               <li>1 previous owner</li>
//               <li>Last serviced: Aug 2023</li>
//             </ul>
//           </div>

//           {/* Deal Gauge */}
//           <div className="border rounded-xl p-4 bg-gray-50">
//             <h3 className="text-lg font-semibold mb-2">Deal Gauge</h3>
//             <p className="text-gray-600 text-sm mb-2">
//               This car is priced fairly compared to the market value.
//             </p>
//             <div className="text-xl font-bold text-green-600">$20,000</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetailModal;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  FaStar,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
  FaShareAlt,
  FaRegHeart,
  FaTachometerAlt,
  FaGasPump,
  FaCarSide,
  FaCogs,
  FaRoad,
  FaBarcode,
  FaIdCard,
  FaFillDrip,
  FaPalette,
  FaCog,
} from "react-icons/fa";
import { vehicalsApi } from "@/lib/api/vehical";
import { useParams } from "next/navigation";
const CarDetailModal = ({ isOpen, onClose }) => {
  const images = [
    "/Images/Selected.png",
    "/Images/sellcar.png",
    "/Images/Masks.png",
    "/Images/opel.png",
  ];
  const { slug } = useParams();


  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!isOpen) return null;

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  // useEffect(() => {
  //     const fetchCarDetail = async () => {
  //       try {
  //         const res = await vehicalsApi.getVehicalSlug(slug);
  //         const vehicle = res.data.vehicle;

  //         if (vehicle) {
  //           setCar(vehicle);
  //           setData(res.data);

  //           // ✅ Use vehicleMedia for images
  //           if (vehicle?.vehicleMedia?.length > 0) {
  //             setMainImage(
  //               `${process.env.NEXT_PUBLIC_API_BASE_URL}${vehicle.vehicleMedia[0].url}`
  //             );
  //           }
  //         } else {
  //           setCar(null); // ensure it's null if not found
  //         }
  //       } catch (err) {
  //         console.error("❌ Error fetching car detail:", err);
  //         setCar(null);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     if (slug) fetchCarDetail();
  //   }, [slug]);


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-[500px] h-[90vh] overflow-y-auto rounded-2xl shadow-lg relative">
        {/* Close Button (image ke upar corner pe) */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 bg-white/70 p-2 rounded-full hover:bg-white"
        >
          <FaTimes size={18} />
        </button>

        {/* Image Carousel */}
        <div className="w-full h-64 mt-7 relative">
          {/* Image */}
          <Image
            src={images[selectedIndex]}
            alt="Car Image"
            fill
            className="object-cover rounded-t-2xl"
          />

          {/* Image Counter (top-left pe) */}
          <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
            {selectedIndex + 1}/{images.length}
          </div>
        </div>

        {/* Thumbnail Images with arrows */}
        <div className="flex items-center px-4 py-3">
          {/* Prev Arrow */}
          <button
            onClick={handlePrev}
            className="mr-2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full"
          >
            <FaChevronLeft size={14} />
          </button>

          {/* Thumbnails */}
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide flex-1">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedIndex(i)}
                className={`w-24 h-16 relative cursor-pointer border-2 rounded-lg ${selectedIndex === i ? "border-blue-500" : "border-transparent"
                  }`}
              >
                <Image
                  src={img}
                  alt={`Car ${i}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="ml-2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full"
          >
            <FaChevronRight size={14} />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 text-left ml-3">
          {/* Title + Price */}
          <div>
            <h2 className="text-2xl  font-semibold">
              BMW 430d Coupe M Sport 190kM
            </h2>
            <p className="text-xl font-bold text-green-600 mt-2">$20,000</p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              What is the BMW 430d Coupe M Sport?
            </h3>
            <p className="text-gray-600 text-sm">
              The BMW 430d Coupe M Sport is a premium sports car offering
              excellent performance, comfort, and advanced driving dynamics...
            </p>
          </div>

          {/* Vehicle Info */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-2">Vehicle Info</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-600">
              <p>Fuel: Diesel</p>
              <p>Engine: 3.0L</p>
              <p>Seats: 4</p>
              <p>Transmission: Automatic</p>
              <p>Color: White</p>
              <p>Mileage: 190kM</p>
            </div>
          </div> */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-4 ">
              Vehicle info
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 text-sm">
              <div className="flex items-center gap-2 text-[#EB0102]">
                <FaTachometerAlt />
                <span>Miles</span>
                <span className="text-gray-600 ml-1 ">45,000 km</span>
              </div>
              <div className="flex items-center gap-2 text-[#EB0102]">
                <FaGasPump />
                <span>MPG</span>
                <span className="text-gray-600 ml-1 ">53.3 Avg</span>
              </div>
              <div className="flex items-center gap-2 text-[#EB0102]">
                <FaCarSide />
                <span>Body</span>
                <span className="text-gray-600 ml-1 ">Sedan</span>
              </div>
              <div className="flex items-center gap-2 text-[#EB0102]">
                <FaGasPump />
                <span>Fuel type</span>
                <span className="text-gray-600 ml-1 ">Petrol</span>
              </div>
              <div className="flex items-center gap-2 text-[#EB0102]">
                <FaCogs />
                <span>Engine</span>
                <span className="text-gray-600 ml-1 ">2.0L Turbo</span>
              </div>
              <div className="flex items-center gap-2 text-[#EB0102]">
                <FaRoad />
                <span>Drivetrain</span>
                <span className="text-gray-600 ml-1 ">FWD</span>
              </div>
              <div className="flex items-center gap-2 text-[#EB0102]">
                <FaBarcode />
                <span>Stock #</span>
                <span className="text-gray-600 ml-1 ">STK12345</span>
              </div>
              <div className="flex items-center gap-2 text-[#EB0102]">
                <FaIdCard />
                <span>VIN</span>
                <span className="text-gray-600 ml-1 ">1HGCM82633A123456</span>
              </div>
              <div className="flex items-center gap-2 text-[#EB0102]">
                <FaFillDrip />
                <span>Exterior color</span>
                <span className="text-gray-600 ml-1 ">Black</span>
              </div>
              <div className="flex items-center gap-2 text-[#EB0102]">
                <FaPalette />
                <span>Interior color</span>
                <span className="text-gray-600 ml-1 ">Beige</span>
              </div>
              <div className="flex items-center gap-2 text-[#EB0102]">
                <FaCog />
                <span>Transmission</span>
                <span className="text-gray-600 ml-1 ">Automatic</span>
              </div>
            </div>
          </div>


          {/* Car Features */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Car Features</h3>
            <div className="flex flex-wrap gap-2 text-sm text-gray-700">
              {[
                "Leather Seats",
                "Air Conditioning",
                "Power Windows",
                "ABS",
                "Parking Sensors",
                "Navigation System",
              ].map((f, i) => (
                <span
                  key={i}
                  className="px-3 py-1 border rounded-full bg-gray-100"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Vehicle History */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Vehicle History</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>No accidents reported</li>
              <li>1 previous owner</li>
              <li>Last serviced: Aug 2023</li>
            </ul>
          </div>

          {/* Deal Gauge */}
          <div className="border rounded-xl p-4 bg-gray-50">
            <h3 className="text-lg font-semibold mb-2">Deal Gauge</h3>
            <p className="text-gray-600 text-sm mb-2">
              This car is priced fairly compared to the market value.
            </p>
            <div className="text-xl font-bold text-green-600">$20,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailModal;
