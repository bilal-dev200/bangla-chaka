"use client";
import Image from "next/image";
const CarsForSaleBanner = ({
    breadcrumb = "Cars for Sale",
    heading = "Discover Your Perfect Car",
    title = "Exceptional Deals Await",
    imageUrl = "/Images/CarForSaleBanner.png",
}) => {

    return (
        <section className="px-6 md:px-12 lg:px-10 py-4 bg-white">
            <div className="text-gray-500 text-sm mb-4 ">
                Home <span className="mx-1">/</span>{" "}
                <span className="text-black ">{breadcrumb}</span>
            </div>

            <div className="relative bg-black/5 rounded-xl overflow-hidden flex items-center justify-center h-[220px] sm:h-[300px] md:h-[400px]">
                <Image
                    src={imageUrl}
                    alt="Car for Sale"
                    width={1200}
                    height={400}
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center px-6 sm:px-10 md:px-16 bg-black/30">
                    <h1 className="text-white text-xl sm:text-3xl md:text-4xl  font-medium leading-snug">
                        {heading} – <br />
                        {title}
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default CarsForSaleBanner;
