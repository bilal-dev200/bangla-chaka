"use client";
import { useEffect, useRef, useState } from "react";
import CarComparisonBanner from "@/components/CarComparisonComponents/CarComparisonBanner";
import CompareCars from "@/components/CarComparisonComponents/CompareCars";
import ComparisonDetails from "@/components/CarComparisonComponents/ComparisonDetails";
import FAQ from "@/components/WebsiteComponents/HomePageComponents/FAQ";
import CarsComparison from "@/components/WebsiteComponents/HomePageComponents/CompareCarsSection";

export default function CarComparison() {
  const [isSticky, setIsSticky] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ to avoid hydration mismatch
  const compareRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    setMounted(true); // ✅ Mark component as mounted (client-side)

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!compareRef.current || !faqRef.current) return;

          const compareTop = compareRef.current.getBoundingClientRect().top;
          const faqTop = faqRef.current.getBoundingClientRect().top;

          const isCompareInView = compareTop <= 0;
          const isBeforeFAQ = faqTop > 80;

          setIsSticky(isCompareInView && isBeforeFAQ);

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ✅ Avoid rendering components using `window` or layout logic until mounted
  if (!mounted) return null;

  return (
    <div className="font-sans">
      <CarComparisonBanner />

      <div className="relative">
        <div ref={compareRef}>
          <CompareCars isSticky={isSticky} />
        </div>
        <ComparisonDetails />
        <div ref={faqRef}>
          <CarsComparison />
        </div>
        <FAQ />
      </div>
    </div>
  );
}
