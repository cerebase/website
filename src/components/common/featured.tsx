import React from "react";

// Intefaces & Types
import { Feature } from "@/interfaces/feature";

export const Featured = ({ feature }: { feature: Feature }) => {
  return (
    <div
      className="overflow-hidden bg-blend-difference h-screen bg-cover bg-top bg-no-repeat bg-gradient-to-r from-indigo-300 to-purple-400"
      style={{
        height: "calc(100vh - 4rem)",
        backgroundImage: `url(${feature.image})`,
      }}
    >
      <div className="h-full w-full flex items-end">
        <div className="p-8 md:pb-24 lg:px-16 lg:pb-32">
          <div className="text-left">
            <h2 className="text-lg font-bold text-highlight">Featured</h2>
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              {feature.title}
            </h2>
            <p className="hidden max-w-xl text-white/90 md:mt-6 md:block md:text-sm md:leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
