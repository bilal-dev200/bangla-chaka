// import CarsForSaleBanner from "@/components/carforsale/CarsForSaleBanner";
// // import CarsForSaleBanner from "@/components/WebsiteComponents/CarsForSaleComponents/CarsForSaleBanner";
// import FAQ from "@/components/WebsiteComponents/HomePageComponents/FAQ";
// import NewsReviews from "@/components/WebsiteComponents/HomePageComponents/NewsReviews";
// import RegistrationPage from "@/components/WebsiteComponents/Register/Register";
// import CarPopup from "@/components/WebsiteComponents/TradeInComponents/CarPopup";
// import FeatureSection from "@/components/WebsiteComponents/TradeInComponents/FeatureSection";
// import Hero from "@/components/WebsiteComponents/TradeInComponents/Hero";
// import Trade from "@/components/WebsiteComponents/TradeInComponents/Trade";
// import TradeInInfo from "@/components/WebsiteComponents/TradeInComponents/TradeInInfo";
// import Work from "@/components/WebsiteComponents/TradeInComponents/Work";
// const steps = [
//   {
//     title: "Enter Your Car's Details",
//     description:
//       "Tell us a little about your current car — make, model, year, mileage, and condition.",
//   },
//   {
//     title: "Get a Quick Valuation",
//     description:
//       "Tell us a little about your current car — make, model, year, mileage, and condition.",
//   },
//   {
//     title: "Select Your New Car",
//     description:
//       "Tell us a little about your current car — make, model, year, mileage, and condition.",
//   },
//   {
//     title: "Schedule an Inspection",
//     description:
//       "Choose a convenient time and location to get your car inspected by a verified dealer.",
//   },
//   {
//     title: "Confirm & Drive Away",
//     description:
//       "Accept the final offer and get behind the wheel of your next car — it’s that simple.",
//   },
// ];
// export default function TradeIn() {
//   return (
//     <div className="font-sans">
//       <CarsForSaleBanner
//         breadcrumb="Trade-in"
//         heading="Turn Your Car Into"
//         title="Buying Power"
//         imageUrl="/Images/hero.png"
//       />

//       <Trade />
//       <Work imageSrc="/Images/car.png" heading="How It Works" steps={steps} />
//       <FeatureSection />
//       <TradeInInfo />
//       <FAQ />
//       <NewsReviews />
//     </div>
//   );
// }

import TradeIn from './Tradein'

const page = () => {
  return (
    <div className='overview-hidden'><TradeIn/></div>
  )
}

export default page