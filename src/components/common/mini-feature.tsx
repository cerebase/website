import React from "react";

const image =
  "https://images.unsplash.com/photo-1662473991701-c69c3b6bf6fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTl8fHxlbnwwfHx8fHw%3D";

const image_new =
  "https://images.unsplash.com/photo-1658937364065-60f3f6818724?q=80&w=3293&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export const MiniFeature = () => {
  return (
    <section
      className="overflow-hidden bg-cover bg-top bg-no-repeat bg-gradient-to-r from-indigo-300 to-purple-400"
      style={{
        backgroundImage: `url(${image_new})`,
      }}
    >
      <div className="p-8 md:pt-24 lg:px-16 lg:pt-48">
        <div className="text-left">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Research at Saga Labs
          </h2>
          <p className="hidden max-w-xl text-white/90 md:mt-6 md:block md:text-sm md:leading-relaxed">
            Our mission is to cultivate open-source LLM applications that are
            user-friendly and accessible, promoting inclusivity and responsible
            technology development. Here at Saga Labs, we are committed to
            researching and developing such LLM applications.
          </p>
        </div>
      </div>
    </section>
  );
};
