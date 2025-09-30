"use client";

import React from "react";

// Intefaces & Types
import { Feature } from "@/interfaces/feature";
import PixelBlast from "./pixel-plast";

export const Featured = ({ feature }: { feature: Feature }) => {
  return (
    <div
      className="overflow-hidden bg-blend-difference h-screen bg-[#0B132B]"
      style={{
        height: "calc(100vh - 4rem)",
        width: "100%",
        position: "relative",
      }}
    >
      <PixelBlast
        variant="square"
        pixelSize={4}
        color="#132C65"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={1.0}
        edgeFade={0}
        transparent
      />

      <div className="absolute top-0 h-full w-full flex items-end z-20">
        <div className="p-8 md:pb-16 lg:pb-24">
          <div className="text-left">
            <h2 className="text-sm font- text-white uppercase">{feature.feature}</h2>
            <h1 className="text-2xl font-bold text-white/90 sm:text-3xl md:text-4xl">
              {feature.title}
            </h1>
            <p className="hidden max-w-xl text-white/90 md:mt-6 md:block md:text-sm md:leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
