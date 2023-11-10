import React from "react";

// interfaces & types
import { Feature } from "@/interfaces/feature";

export const MiniFeature = ({ feature }: { feature: Feature }) => {
  return (
    <section
      className="overflow-hidden bg-cover bg-top bg-no-repeat bg-gradient-to-r from-indigo-300 to-purple-400"
      style={{
        backgroundImage: `url(${feature.image})`,
      }}
    >
      <div className="p-8 md:pt-24 lg:px-16 lg:pt-56">
        <div className="text-left">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            {feature.title}
          </h2>
          <p className="hidden max-w-xl text-white/90 md:mt-6 md:block md:text-sm md:leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </section>
  );
};
