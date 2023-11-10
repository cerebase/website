import React from "react";

// Intefaces & Types
import { Feature } from "@/interfaces/feature";

export const Featured = ({ feature }: { feature: Feature }) => {
  return (
    <div
      className="overflow-hidden bg-blend-difference h-screen bg-cover bg-top bg-no-repeat bg-gradient-to-r from-indigo-300 to-purple-400 flex items-end"
      style={{
        height: "calc(100vh - 4rem)",
        backgroundImage: `url(${feature.image})`,
      }}
    >
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

      {/** Image attribution */}
      <span className="absolute bottom-2 right-2 text-sm font-light text-gray-800">
        Photo by{" "}
        <a className="underline" href="https://unsplash.com/@maxberg">
          Maxim Berg
        </a>
      </span>
    </div>
  );
};
