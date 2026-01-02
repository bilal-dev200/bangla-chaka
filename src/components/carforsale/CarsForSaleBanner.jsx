"use client";
import { Image_URL } from "@/config/constants";
import { dataApi } from "@/lib/api/data";
import Image from "next/image";
import { useEffect, useState } from "react";
const CarsForSaleBanner = ({
  breadcrumb = "Cars for Sale",
  heading = "Discover Your Perfect Car",
  title = "Exceptional Deals Await",
  imageUrl = "/Images/CarForSaleBanner.png",
}) => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await dataApi.getBanner("LIST_PAGE_BANNER");
        setBanner(res.data?.[0]);
      } catch (error) {
        console.error("Failed to fetch banner:", error);
      }
    };

    fetchBanner();
  }, []);

  return (
    <section className="px-6 md:px-12 lg:px-10 py-4 bg-white">
      <div className="text-gray-500 text-sm mb-4 ">
        Home <span className="mx-1">/</span>{" "}
        <span className="text-black ">{breadcrumb}</span>
      </div>

      <div className="relative bg-black/5 rounded-xl overflow-hidden flex items-center justify-center h-[220px] sm:h-[300px] md:h-[400px]">
        <Image
          src={banner?.imageUrl ? `${Image_URL}${banner?.imageUrl}` : imageUrl}
          alt="Car for Sale"
          width={1200}
          height={400}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center px-6 sm:px-10 md:px-16 bg-black/30">
          <h1 className="text-white w-1/2 text-xl sm:text-3xl md:text-4xl  font-medium leading-snug">
            {banner?.title ? banner?.title : heading} <br />{" "}
            {banner?.title ? "" : title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CarsForSaleBanner;
