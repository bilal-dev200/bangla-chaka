"use client"
import CarsForSaleBanner from "@/components/carforsale/CarsForSaleBanner";
import BottomHero from "@/components/FinancingComponents/BottomHero";
import BuyingPowerFeatures from "@/components/FinancingComponents/BuyingPowerFeatures";
import FinancingRequest from "@/components/FinancingComponents/FinancingRequest";
import ReadyToGetStarted from "@/components/FinancingComponents/ReadyToGetStarted";
import FAQ from "@/components/WebsiteComponents/HomePageComponents/FAQ";
import Hero from "@/components/WebsiteComponents/TradeInComponents/Hero";
import Work from "@/components/WebsiteComponents/TradeInComponents/Work";
import React from "react";
const steps = [
  {
    title: "Real-time Prequalification Result",
    description: "See your estimated credit-based car affordability..",
  },
  {
    title: "No Impact on Credit Score",
    description: "Soft check only — 100% safe and secure..",
  },
  {
    title: "Takes Less Than 2 Minutes",
    description: "Only a few basic fields to fill..",
  },
];
const Finace = () => {
  return (
    <div>
      <CarsForSaleBanner
        breadcrumb="Finacing"
        heading="Check your buying"
        title="power with no credit impact"
        imageUrl="/Images/financeimage.png"
      />
      <BuyingPowerFeatures />
      <Work
        imageSrc="/Images/Frame.png"
        heading="Prequalify Now"
        steps={steps}
        button={(onClick) => (
          <button
            className="mt-2 rounded-[500px] ml-3 px-6 py-3 bg-[#EB0102] text-white font-semibold"
            onClick={onClick}
          >
            Get Prequalified
          </button>
        )}
      />
      <FinancingRequest />
      <BottomHero
        imageSrc="/Images/backslider.png"
        title="Ready to Get Started?"
        subtitle="Check your eligibility or connect with a car owner to explore financing options — all without affecting your credit score."
      />
      <FAQ />{" "}
    </div>
  );
};

export default Finace;
