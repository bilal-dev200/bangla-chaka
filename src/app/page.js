import Image from "next/image";
import BuySellCars from "@/components/WebsiteComponents/HomePageComponents/BuySellCars";
import CarBrands from "@/components/WebsiteComponents/HomePageComponents/CarBrands";
import NewsReviews from "@/components/WebsiteComponents/HomePageComponents/NewsReviews";
import FAQ from "@/components/WebsiteComponents/HomePageComponents/FAQ";
import HeroSection from "@/components/WebsiteComponents/HomePageComponents/HeroSection";
import BrowseFeatures from "@/components/WebsiteComponents/HomePageComponents/BrowseFeatures";
import BestCarsDeals from "@/components/WebsiteComponents/HomePageComponents/BestCarsDeals";
import PromotionalBanners from "@/components/WebsiteComponents/HomePageComponents/PromotionalBanners";
import SellingYourCars from "@/components/WebsiteComponents/HomePageComponents/SellingYourCars";
import CompareCarsSection from "@/components/WebsiteComponents/HomePageComponents/CompareCarsSection";
import CarListing from "@/components/WebsiteComponents/HomePageComponents/CarListing";
import CarsComparison from "@/components/WebsiteComponents/HomePageComponents/CompareCarsSection";

export default function Home() {
  return (
    <div className="font-hanken ">
      <HeroSection />
      <BrowseFeatures />
      <BestCarsDeals />
      <PromotionalBanners />
      <SellingYourCars />
      {/* <CarListing/> */}
      {/* <CarsComparison /> */}
      {/* <BuySellCars /> */}
      <CarBrands />
      <NewsReviews />
      <FAQ />

    </div>  
  );
}
