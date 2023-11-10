import React from "react";
import Image from "next/image";

// interfaces & types
import { Article as ArticleType } from "@/interfaces/article";

interface ArticleProps {
  content: ArticleType;
  width: number;
}

export const Article = ({ content, width }: ArticleProps) => {
  return (
    <article
      className={`relative overflow-hidden shadow transition-all ease-in group col-span-${width}`}
    >
      {/* Card Graphics */}
      <Image
        alt="Office"
        src={content.image}
        className="absolute inset-0 h-full w-full object-cover"
        layout="fill"
      />

      {/* Card content */}
      <div className="relative hidden group-hover:block bg-gradient-to-t from-gray-900/50 to-gray-900/25">
        <div className="p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-white/90">
            10th Oct 2022
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">{content.title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {content.description}
          </p>
        </div>
      </div>
    </article>
  );
};
