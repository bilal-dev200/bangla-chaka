"use client";
import { useState, useEffect } from "react";
import { dataApi } from "@/lib/api/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await dataApi.getFaqs();
        setFaqs(res.data);
      } catch (error) {
        console.error("Failed to fetch faqs:", error);
      }
    };

    fetchFaqs();
  }, []);

  // const faqs = [
  //   {
  //     question: "How can I sell my car on your platform?",
  //     answer:
  //       "Selling your car is simple! Just create an account, upload your car details with pictures, set a price, and connect with potential buyers.",
  //   },
  //   {
  //     question: "How do I find the best car deals near me?",
  //     answer:
  //       "You can use our location-based filters to discover the top-rated deals near your area or set location preferences in your profile.",
  //   },
  //   {
  //     question: "Are the listed car prices negotiable?",
  //     answer:
  //       "Yes, most sellers are open to negotiations. Feel free to make an offer or contact them directly through the listing.",
  //   },
  //   {
  //     question: "Do you verify sellers and buyers?",
  //     answer:
  //       "Absolutely! We verify all users via email and phone number, and encourage safe transactions through our secure platform.",
  //   },
  // ];

  return (
    <section className="py-16 px-6 sm:px-10 flex flex-col lg:flex-row items-start justify-between gap-12 bg-white">
      {/* Left Section (Heading & Subtext) */}
      <div className="max-w-full lg:max-w-md">
        <h2 className="text-[32px] sm:text-[38px] font-hanken text-black leading-tight ">
          Got Questions? <br /> We’ve Got Answers!
        </h2>
        <p className="text-[#6B7280] mt-3 text-base leading-relaxed ">
          Find answers to the most common questions about buying, selling, and
          renting cars. If you need more help, feel free to reach out!
        </p>
        {/* <a
          href="#"
          className="text-[#EB0102] font-medium mt-4  inline-block hover:underline text-sm"
        >
          More FAQs →
        </a> */}
      </div>

      {/* Right Section (FAQs List) */}
      <div className="w-full lg:w-[50%]">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-4">
            <button
              className="w-full flex justify-between items-center text-left text-[18px] font-hanken text-black"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span className="text-2xl text-black ">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="text-[#4B5563] mt-2 text-sm ml-2 leading-relaxed ">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
