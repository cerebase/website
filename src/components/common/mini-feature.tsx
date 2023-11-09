import React from "react";

const image =
  "https://images.unsplash.com/photo-1662473991701-c69c3b6bf6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTl8fHxlbnwwfHx8fHw%3D";

const image_new =
  "https://images.unsplash.com/photo-1658937364065-60f3f6818724?q=80&w=3293&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

type Feature = {
  image: string;
  title: string;
  description: string;
};

export const MiniFeature = ({feature}: {feature: Feature}) => {
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
