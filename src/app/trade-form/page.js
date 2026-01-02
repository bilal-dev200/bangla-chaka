"use client";

import Form1 from "@/components/WebsiteComponents/TradeInComponents/TradeInForm/Form1";
import { Form2 } from "@/components/WebsiteComponents/TradeInComponents/TradeInForm/Form2";
import { Form3 } from "@/components/WebsiteComponents/TradeInComponents/TradeInForm/Form3";
import { useCarStore } from "@/lib/store/carStore";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const steps = [
  { step: 1, active: true, title: "Schedule Inspection" },
  { step: 2, active: false, title: "Confirm & Submit" },
  { step: 3, active: false, title: "Personal info " },
];

const Page = () => {
    const router = useRouter();

    const { selectedCarId } = useCarStore();
     useEffect(() => {
    if (!selectedCarId) {
      toast.error("Please select a car first!");
      router.push("/select-car"); 
    }
  }, [selectedCarId, router]);

  const [step, setStep] = useState(1);

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="text-gray-500 text-sm mb-4 pt-4  px-4 md:px-20">
        Home <span className="mx-1">/</span> Trade-in{" "}
        <span className="mx-1">/</span> Select car{" "}
        <span className="mx-1">/</span> Details
      </div>
      <hr className="text-black" />
      <div className="max-w-4xl mx-auto px-4 pt-10 md:py-10">
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap items-center space-x-6 md:space-x-32">
            {steps.map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div
                  className={`w-6 h-6 text-xs md:text-md md:w-14 md:h-14 flex items-center justify-center rounded-full font-semibold ${
                    step >= s.step
                      ? "bg-indigo-700 text-white"
                      : "bg-white text-black border border-black"
                  }`}
                >
                  {s.step}
                </div>
                <p className="text-xs md:text-md md:font-bold mt-3">
                  {s.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* {step == 1 && <Form1 setStep={setStep} />} */}
      <div style={{ display: step === 1 ? 'block' : 'none' }}>
          <Form1 setStep={setStep} />
</div>
      <div style={{ display: step === 2 ? 'block' : 'none' }}>
  <Form2 setStep={setStep} />
</div>
<div style={{ display: step === 3 ? 'block' : 'none' }}>
  <Form3 setStep={setStep} />
</div>
    </div>
  );
};

export default Page;
