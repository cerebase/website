"use client";

import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

// data
import aboutData from "@/features/about-grid/mock/data.json";

// components
// import { Article } from "@/features/about-grid/components/article";
// import { ArticleWide } from "@/features/about-grid/components/article-wide";

// interfaces & types
import { Article as ArticleType } from "@/interfaces/article";

// lib / constants
// import { SITE_TITLE } from "@/lib/constants";

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
          <ArticleWrapper
            content={aboutData.topics.innovation}
            wide={focusedRowOne === 0}
            index={0}
            setFocus={() => handleFocusRowOne(0)}
          />

          <ArticleWrapper
            content={aboutData.topics.humanCentric}
            wide={focusedRowOne === 1}
            index={1}
            setFocus={() => handleFocusRowOne(1)}
          />

          <ArticleWrapper
            content={aboutData.topics.openSource}
            wide={focusedRowOne === 2}
            index={2}
            setFocus={() => handleFocusRowOne(2)}
          />

          {/* row 2 */}
          <ArticleWrapper
            content={aboutData.topics.sustainability}
            wide={focusedRowTwo === 0}
            index={0}
            setFocus={() => handleFocusRowTwo(0)}
          />

          <ArticleWrapper
            content={aboutData.topics.naturalInteraction}
            wide={focusedRowTwo === 1}
            index={1}
            setFocus={() => handleFocusRowTwo(1)}
          />

          <ArticleWrapper
            content={aboutData.topics.communityDriven}
            wide={focusedRowTwo === 2}
            index={2}
            setFocus={() => handleFocusRowTwo(2)}
          />
        </div>
      </section>
    </main>
  );
}

interface ArticleProps {
  content: ArticleType;
  wide: boolean;
  index: number;
  setFocus: (index: number) => void;
}

const ArticleWrapper: React.FC<ArticleProps> = (props) => {
  const className =
    "relative overflow-hidden transition-all ease-in group ";
  const classes = props.wide
    ? className + "col-span-2"
    : className + "col-span-1";

  return (
    <article className={classes} onClick={() => props.setFocus(props.index)}>
      {/* Card Graphics */}
      <Image
        alt={props.content.title}
        src={props.content.image}
        className="absolute inset-0 object-cover"
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Card content */}
      <div className="relative opacity-0 h-full group-hover:opacity-100 bg-gradient-to-t from-gray-900/50 to-gray-900/25">
        <div className="absolute bottom-0 p-4 sm:p-6 flex flex-col justify-end">
          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">{props.content.title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {props.content.text}
          </p>
        </div>
      </div>
    </article>
  );
};
