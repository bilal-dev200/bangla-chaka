"use client";
import React, { useEffect, useRef, useState } from "react";
import JSConfetti from "js-confetti";
import Image from "next/image";
import { ScratchCard, SCRATCH_TYPE } from "scratchcard-js";

const WinnerCard = ({
  luckyNumber,
  coinImagePath,
  carLeftImagePath,
  carRightImagePath,
}) => {
  const jsConfetti = useRef(null);
  const [scratched, setScratched] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById("confetti-canvas");
    if (canvas && !jsConfetti.current) {
      jsConfetti.current = new JSConfetti({ canvas });
    }
  }, []);

  useEffect(() => {
    const scContainer = document.getElementById("scratch-container");
    if (!scContainer || scratched) return;

    const sc = new ScratchCard("#scratch-container", {
      scratchType: SCRATCH_TYPE.CIRCLE,
      containerWidth: scContainer.offsetWidth,
      containerHeight: scContainer.offsetHeight,
      imageForwardSrc: "./Images/tranparent.jpg",
      //   htmlBackground: "<div style='width: 100%; height: 100%; background-color: white;'></div>",
      clearZoneRadius: 30,
      percentToFinish: 5,
      callback: () => {
        setScratched(true);
        jsConfetti.current?.addConfetti({
          shapes: ["polygon"],
          confettiColors: ["#FFC700", "#FF0000", "#00C2FF", "#A020F0"],
          confettiRadius: 6,
          confettiNumber: 100,
        });
      },
    });
    sc.init();
  }, [scratched]);

  return (
    <div className="relative">
      <canvas
        id="confetti-canvas"
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100000]"
      />

      {!scratched && (
        <div
          id="scratch-container"
          className="absolute  left-1/2 -translate-x-1/2 w-full max-w-5xl h-[150px] z-[10000]"
        />
      )}

      <div className="relative z-20 h-[300px] mt-10 bg-[#090B34] max-w-5xl mx-auto rounded-lg p-8 pb-28 text-center text-white shadow-lg overflow-hidden">
        <p className="relative z-20 text-xl mt-1">
          Congratulations! You’re a <span className="font-bold">Winner!</span>
        </p>

        <div className="absolute top-3 right-10 w-12 h-24 z-20 opacity-90">
          <Image
            src={coinImagePath}
            alt="Top right coin"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative z-20 flex justify-center items-center space-x-6 my-6">
          <Image src={coinImagePath} alt="Coin left" width={44} height={44} />
          <span className="text-5xl tabular-nums">{luckyNumber}</span>
          <Image src={coinImagePath} alt="Coin right" width={44} height={44} />
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="relative w-10 h-10 -ml-48">
            <Image
              src={coinImagePath}
              alt="Above text coin"
              fill
              className="object-contain"
            />
          </div>
          <p className="relative z-20 text-[20px]">
            Your number matches today’s lucky number
          </p>
        </div>

        <div className="absolute -bottom-6 -left-14 w-[400px] h-[150px] z-10">
          <Image
            src={carLeftImagePath}
            alt="Car left"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute -bottom-7 -right-16 w-[400px] h-[150px] z-10">
          <Image
            src={carRightImagePath}
            alt="Car right"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
