"use client";
import React, { useState } from "react";
import CarsForSaleBanner from "@/components/carforsale/CarsForSaleBanner";
import AnnouncementSection from "@/components/reward/AnnouncementSection";
import ClaimReward from "@/components/reward/ClaimReward";
const LuckyNumberTimer = dynamic(() => import("@/components/reward/LuckyNumberCard"), { ssr: false });
const WinnerCard = dynamic(() => import("@/components/reward/WinnerCard"), { ssr: false });
const RecentWinners = dynamic(() => import("@/components/reward/RecentWinners"), { ssr: false });
const ScratchBigWins = dynamic(() => import("@/components/reward/ScratchBigWins"), { ssr: false });
const ScratchWinRewards = dynamic(() => import("@/components/reward/ScratchWinRewards"), { ssr: false });
const WinRewards = dynamic(() => import("@/components/reward/WinRewards"), { ssr: false });
import dynamic from "next/dynamic";

const Page = () => {
  const [showLuckyContent, setShowLuckyContent] = useState(false);

  return (
    <div className="bg-white">
      <CarsForSaleBanner
        breadcrumb="Sell Your Car"
        heading="Sell Your Car Easily & Get the Best Price"
        title="power with no credit impact"
        imageUrl="/Images/sell-your-car.png"
      />

      <ScratchBigWins onTryLuck={() => setShowLuckyContent(true)} />

      {showLuckyContent && <LuckyNumberTimer />}

      <ScratchWinRewards />

      {showLuckyContent && (
        <WinnerCard
          luckyNumber={748392}
          coinImagePath="/images/coin.png"
          carLeftImagePath="/images/winnerq.png"
          carRightImagePath="/images/winner2.png"
        />
      )}

      <WinRewards />
      <AnnouncementSection />
      <ClaimReward />
      <RecentWinners />
    </div>
  );
};

export default Page;
