"use client";
import React from "react";

// data
import aboutData from "@/features/about-grid/mock/data.json";

// components
import { Article } from "@/features/about-grid/components/article";

export default function Page() {
  const [focusedRowOne, setFocusedRowOne] = React.useState(0);
  const [focusedRowTwo, setFocusedRowTwo] = React.useState(2);

  // focus handler row 1
  const handleFocusRowOne = (index: number) => {
    setFocusedRowOne(index);
  };

  // focus handler row 2
  const handleFocusRowTwo = (index: number) => {
    setFocusedRowTwo(index);
  };

  return (
    <main>
      {/* Image Grid */}
      <section
        className="overflow-hidden bg-blend-difference w-full"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="grid grid-cols-4 gap-2 h-full p-2">
          {/* row 1 */}
          <Article
            content={aboutData.topics.innovation}
            focus={focusedRowOne == 0}
            setFocus={() => handleFocusRowOne(0)}
          />
          <Article
            content={aboutData.topics.humanCentric}
            focus={focusedRowOne == 1}
            setFocus={() => handleFocusRowOne(1)}
          />
          <Article
            content={aboutData.topics.openSource}
            focus={focusedRowOne == 2}
            setFocus={() => handleFocusRowOne(2)}
          />

          {/* row 2 */}
          <Article
            content={aboutData.topics.sustainability}
            focus={focusedRowTwo == 0}
            setFocus={() => handleFocusRowTwo(0)}
          />
          <Article
            content={aboutData.topics.naturalInteraction}
            focus={focusedRowTwo == 1}
            setFocus={() => handleFocusRowTwo(1)}
          />
          <Article
            content={aboutData.topics.communityDriven}
            focus={focusedRowTwo == 2}
            setFocus={() => handleFocusRowTwo(2)}
          />
        </div>
      </section>
    </main>
  );
}
