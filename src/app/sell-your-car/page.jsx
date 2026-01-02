"use client";
import React, { useState } from "react";
import Image from "next/image";
import CarsForSaleBanner from "@/components/WebsiteComponents/CarsForSaleComponents/CarsForSaleBanner";
import FAQ from "@/components/WebsiteComponents/HomePageComponents/FAQ";
import Main from "@/components/WebsiteComponents/SellCarComponenets/Main";
import { LuBadgeDollarSign } from "react-icons/lu";
import { PiCarProfileLight } from "react-icons/pi";
import { TbTools } from "react-icons/tb";
import Form2 from "@/components/WebsiteComponents/SellCarComponenets/Form2";
import Form3 from "@/components/WebsiteComponents/SellCarComponenets/Form3";


const Page = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      {step == 1 && (
        <div>
          <CarsForSaleBanner
            breadcrumb="Sell Your Car"
            heading="Sell Your Car Easily & Get the Best Price"
            title="power with no credit impact"
            imageUrl="/Images/sell-your-car.png"
          />
          <div className="py-10 mx-auto bg-white w-full flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-6xl font-hanken text-center">
              Sell your car
            </h2>
            <p className="text-sm text-gray-500 text-center mb-6 md:w-1/3 mt-4">
              We just need a few more details to generate helpful estimates on
              the current market value of your vehicle.
            </p>
            <button className="w-fit bg-indigo-600 text-sm text-white px-3 py-1.5 rounded-full shadow hover:bg-indigo-700">
              View My Listings
            </button>
            <Main setStep={setStep}/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start py-10 ">
              <div className="">
                <Image
                  src="/Images/instant_value.png"
                  alt="Car"
                  className="w-full rounded-lg"
                  width={500}
                  height={500}
                />
              </div>
              <div className="max-w-2xl my-auto px-6 md:px-0">
                <h2 className="text-2xl md:text-4xl font-semibold font-hanken text-start">
                  Instant Valuation Tool
                </h2>
                <p className="text-md text-black text-start mb-6 mt-4">
                  Not sure what your car’s worth? Use our free tool to estimate
                  its value
                </p>
                <p className="text-md text-gray-500 text-start mb-6 mt-4">
                  Wondering how much your car is really worth? With our free
                  Instant Valuation Tool, you can quickly estimate your
                  vehicle’s market value without any hassle. Simply enter your
                  car’s details, and within seconds, you’ll get a clear,
                  data-driven price range. Whether you’re planning to sell,
                  trade in, or just curious, knowing your car’s value helps you
                  make confident decisions and ensures you get the best deal
                  possible — all for free, with no obligation
                </p>
                <button className="w-fit bg-indigo-600 text-sm text-white px-3 py-1.5 rounded-full shadow hover:bg-indigo-700">
                  See in Your Garage
                </button>
              </div>
            </div>
            <section className="w-full text-center px-4 md:px-0 flex flex-col justify-center items-center py-10">
              <h2 className="text-2xl md:text-4xl font-hanken font-medium text-black mb-2">
                Why Choose Carnkey ?
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-10 max-w-2xl">
                At Carnkey, we make selling your car simple, fast, and
                worry-free. Our platform connects you only with verified buyers,
                ensuring every deal is safe and secure.
              </p>
              <div className="grid grid-cols-3 md:gap-20 gap-4 max-wxl mx-auto">
                {[
                  { icon: <LuBadgeDollarSign />, text: "Verified Buyers Only" },
                  { icon: <TbTools />, text: "Fast & Secure Process" },
                  { icon: <PiCarProfileLight />, text: "Free Car Valuation" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#3D2BA3] flex items-center justify-center mb-4">
                      {item.icon &&
                        React.cloneElement(item.icon, {
                          className: "text-white text-4xl",
                        })}
                    </div>
                    <p className="text-black text-base md:text-lg text-center w-20 md:w-auto">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            <FAQ />
          </div>
        </div>
      )}

      {step == 2 && <Form2 setStep={setStep}/>}
      {step == 3 && <Form3 />}

    </>
  );
};

export default Page;
