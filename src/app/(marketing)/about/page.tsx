"use client";

import React from "react";
import type { Metadata } from "next";

// data
import aboutData from "@/features/about-grid/mock/data.json";

// components
import { Article } from "@/features/about-grid/components/article";
import { ArticleWide } from "@/features/about-grid/components/article-wide";

// interfaces & types
import { Article as ArticleType } from "@/interfaces/article";

// lib / constants
import { SITE_TITLE } from "@/lib/constants";



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
          <ArticleRenderer
            content={aboutData.topics.innovation}
            wide={focusedRowOne === 0}
            index={0}
            setFocus={handleFocusRowOne}
          />
          <ArticleRenderer
            content={aboutData.topics.humanCentric}
            wide={focusedRowOne === 1}
            index={1}
            setFocus={handleFocusRowOne}
          />
          <ArticleRenderer
            content={aboutData.topics.openSource}
            wide={focusedRowOne === 2}
            index={2}
            setFocus={handleFocusRowOne}
          />

          {/* row 2 */}
          <ArticleRenderer
            content={aboutData.topics.sustainability}
            wide={focusedRowTwo === 0}
            index={0}
            setFocus={handleFocusRowTwo}
          />
          <ArticleRenderer
            content={aboutData.topics.naturalInteraction}
            wide={focusedRowTwo === 1}
            index={1}
            setFocus={handleFocusRowTwo}
          />
          <ArticleRenderer
            content={aboutData.topics.communityDriven}
            wide={focusedRowTwo === 2}
            index={2}
            setFocus={handleFocusRowTwo}
          />
        </div>
      </section>
    </main>
  );
}

interface ArticleRendererProps {
  content: ArticleType;
  wide: boolean;
  index: number;
  setFocus: (index: number) => void;
}

const ArticleRenderer = (props: ArticleRendererProps) => {
  return props.wide ? (
    <ArticleWide content={props.content} />
  ) : (
    <Article
      content={props.content}
      setFocus={() => props.setFocus(props.index)}
    />
  );
};
