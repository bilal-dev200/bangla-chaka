// "use client";
// import { useEffect, useRef, useState } from "react";
// import CarComparisonBanner from "@/components/CarComparisonComponents/CarComparisonBanner";
// import CompareCars from "@/components/CarComparisonComponents/CompareCars";
// import ComparisonDetails from "@/components/CarComparisonComponents/ComparisonDetails";
// import FAQ from "@/components/WebsiteComponents/HomePageComponents/FAQ";
// import CarsComparison from "@/components/WebsiteComponents/HomePageComponents/CompareCarsSection";

import CarComparison from "./CarComparison"

// export default function CarComparison() {
//   const [isSticky, setIsSticky] = useState(false);
//   const compareRef = useRef(null);
//   const faqRef = useRef(null);

//   useEffect(() => {
//     let ticking = false;
  
//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           if (!compareRef.current || !faqRef.current) return;
  
//           const compareTop = compareRef.current.getBoundingClientRect().top;
//           const faqTop = faqRef.current.getBoundingClientRect().top;
  
//           // Responsive logic based on viewport height
//           const isCompareInView = compareTop <= 0;
//           const isBeforeFAQ = faqTop > 80; // threshold can be adjusted
  
//           setIsSticky(isCompareInView && isBeforeFAQ);
  
//           ticking = false;
//         });
  
//         ticking = true;
//       }
//     };
  
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // Initial run
  
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
  

//   return (
//     <div className="font-sans">
//       <CarComparisonBanner />

//       <div className="relative">
//         <div ref={compareRef}>
//           <CompareCars isSticky={isSticky} />
//         </div>
//         <ComparisonDetails />
//         <div ref={faqRef}>
//           <CarsComparison />
//         </div>
//         <FAQ/>
//       </div>
//     </div>
//   );
// }

const page = () => {
  return (
    <div>
      <CarComparison/>
    </div>
  )
}

export default page