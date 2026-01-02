// "use client";

// import { vehicalsApi } from "@/lib/api/vehical";
// import Image from "next/image";
// import { useRef } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// export default function BrowseFeatures() {
//   const scrollRef = useRef(null);

//   // Scroll left and right
//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = direction === "left" ? -300 : 300;
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };


//   const features = [
//     { title: "BUY A CAR", img: "/Images/image01.png" },
//     { title: "SELL YOUR CAR", img: "/Images/image02.png" },
//     { title: "CAR COMPARISONS", img: "/Images/image03.png" },
//     { title: "RENT A CAR", img: "/Images/image04.png" },
//     { title: "INSURANCE", img: "/Images/image05.png" },
//   ];

//   return (
//     <section className="md:px-10 px-3 py-20 relative bg-white">
//       {/* Browse Feature Heading & Buttons */}
//       <div className="flex items-center justify-between mb-6 ">
//         <h2 className="text-3xl font-hanken text-black font-semibold">
//           Browse Features
//         </h2>

//         {/* Left & Right Buttons */}
//         <div className="flex gap-2">
//           <button
//             className="bg-[#00A652] text-white px-5 rounded-xl py-1 border border-[#00A652] hover:bg-[#00A652] transition"
//             onClick={() => scroll("left")}
//           >
//             <FaChevronLeft className="text-xs"/>
//           </button>
//           <button
//             className="bg-[#00A652] text-white px-5 py-1 rounded-xl border border-[#00A652] hover:bg-[#00A652] transition"
//             onClick={() => scroll("right")}
//           >
//             <FaChevronRight className="text-xs" />
//           </button>
//         </div>
//       </div>

//       {/* Scrollable content */}
//       <div
//         ref={scrollRef}
//         className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
//         style={{ scrollSnapType: "x mandatory" }}
//       >
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="relative min-w-[250px] md:min-w-[300px] h-[400px] rounded-lg overflow-hidden shadow-lg flex-shrink-0"
//             style={{ scrollSnapAlign: "start" }}
//           >
//             <Image
//               src={feature.img}
//               layout="fill"
//               objectFit="cover"
//               className="brightness-75"
//             />
//             <div className="absolute bottom-80 left-10 text-white">
//               <h3 className="text-lg font-hanken">
//                 {feature.title}
//               </h3>
//               <p className="text-sm font-hanken">The point of using Lorem</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { Image_URL } from "@/config/constants";
import { vehicalsApi } from "@/lib/api/vehical";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FaArrowRightLong,FaArrowLeftLong } from "react-icons/fa6";



export default function BrowseFeatures() {
  const scrollRef = useRef(null);
  const [services, setServices] = useState([]);

  // Scroll left and right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // API Call for "our-services"
  useEffect(() => {
    vehicalsApi
      .ourservices()
      .then((res) => {
        console.log("Our Services API Response:", res.data);
        setServices(res.data); // Store API response in state

      })
      .catch((err) => {
        console.error("Error fetching services:", err);
      });
  }, []);

  console.log(services, "dd")

  return (
    <section className="md:px-10 px-3 py-20 relative bg-white">
      {/* Heading & Buttons */}
      <div className="flex items-center justify-between mb-6 mx-4">
        <h2 className="text-[40px] font-hanken text-black ">
          Browse Features
        </h2>

        {/* Left & Right Buttons */}
        <div className="flex gap-2">
          <button
            className="bg-[#00A652] text-white px-5 rounded-xl py-1 border border-[#00A652] hover:bg-[#00A652] transition"
            onClick={() => scroll("left")}
          >
            <FaArrowLeftLong className="text-xs" />
          </button>
          <button
            className="bg-[white] text-white px-5 py-1 rounded-xl border border-black hover:bg-white transition"
            onClick={() => scroll("right")}
          >
            <FaArrowRightLong className="text-xs text-black" />
            
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide mx-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {/* {services.map((service, index) => (
          <div
            key={index}
            className="relative min-w-[250px] md:min-w-[300px] h-[400px] rounded-lg overflow-hidden shadow-lg flex-shrink-0"
            style={{ scrollSnapAlign: "start" }}
          >

            <Image
              src={service.image
                ? `${Image_URL}/${service.image.replace(/\\/g, "/")}`
                : "/Images/default.png"} layout="fill"
              objectFit="cover"
              className="brightness-75"
              alt={service.title}
            />
            <div className="absolute bottom-80 left-10 text-white">
              <h3 className="text-lg font-hanken">{service.name}</h3>
              <p className="text-sm font-hanken">{service.description}</p>
            </div>
          </div>
        ))} */}
        {services.map((service, index) => {
          const finalImageSrc = service.image
            ? `${Image_URL}${service.image.replace(/\\/g, "/")}`
            : "/Images/default.png";

          console.log("Final Image Path:", finalImageSrc);

          return (
            <div
              key={index}
              className="relative min-w-[250px] md:min-w-[210px] h-[280px] rounded-lg overflow-hidden shadow-lg flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <Image
                src={finalImageSrc}
                fill
                style={{ objectFit: "cover" }}
                className="brightness-75"
                alt={service.title}
              />
              <div className="absolute bottom-52 left-4 text-white">
                <h3 className="font-hanken text-lg uppercase">{service.name}</h3>
                <p className="text-xs font-light font-hanken">{service.description}</p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
