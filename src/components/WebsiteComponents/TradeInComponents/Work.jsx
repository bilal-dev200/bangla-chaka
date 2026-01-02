import React, { useState } from "react";
import Image from "next/image";
import Form from "./Form";

const Work = ({ imageSrc, heading, button, steps }) => {
  const [agreed, setAgreed] = useState(false);
  const [showForm, setShowForm] = useState(false);
  return (
    <section className="py-10 max-w-[1200px] px10 mx-auto bgwhite min-h-screen">

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="relative">
          <div className="relative w-full h-full">
            <Image
              src={imageSrc}
              alt="Black sports car"
              fill
              layout="fill"
              className="object-contain"
            />
          </div>

          <div className="px-8 md:px-0">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              {heading}
            </h2>

            {showForm ? (
              <>
                <Form />
              </>
            ) : (
              <>
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 bg-[#EB0102] rounded-full" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {!showForm && button && (
                  <div className="mt-8">
                    {typeof button === "function"
                      ? button(() => setShowForm(true))
                      : button}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Work;
