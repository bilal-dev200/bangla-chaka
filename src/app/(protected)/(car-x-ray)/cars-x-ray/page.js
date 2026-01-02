import Cartrade from "@/components/car-x-ray/Cartrade";
import ComparisonSection from "@/components/car-x-ray/ComparisonSection";
import CarsForSaleBanner from "@/components/carforsale/CarsForSaleBanner";
import BottomHero from "@/components/FinancingComponents/BottomHero";
import FinancingRequest from "@/components/FinancingComponents/FinancingRequest";
import FAQ from "@/components/WebsiteComponents/HomePageComponents/FAQ";
import React from "react";

const page = () => {
  return (
    <div>
      <CarsForSaleBanner
        breadcrumb="Sell Your Car"
        heading="Sell Your Car Easily & Get the Best Price"
        title="power with no credit impact"
        imageUrl="/Images/sell-your-car.png"
      />
      <Cartrade/>
      <ComparisonSection/>
      <FinancingRequest/>
      <BottomHero
        imageSrc="/Images/backslider.png"
        title="Ready to Get Started?"
        subtitle="Check your eligibility or connect with a car owner to explore financing options — all without affecting your credit score."
      />
      <FAQ />{" "}
    </div>
  );
};

export default page;
