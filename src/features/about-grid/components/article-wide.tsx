import React from "react";
import Image from "next/image";

// interfaces & types
import { Article as ArticleType } from "@/interfaces/article";

interface ArticleProps {
  content: ArticleType;
}

export const ArticleWide = ({ content }: ArticleProps) => {
  return (
    <article className="relative overflow-hidden shadow transition-all ease-in group col-span-2">
      {/* Card Graphics */}
      <Image
        alt="Office"
        src={content.image}
        className="absolute inset-0 object-cover"
        width={512}
        height={512}
      />

      {/* Card content */}
      <div className="relative opacity-0 h-full group-hover:opacity-100 bg-gradient-to-t from-gray-900/50 to-gray-900/25">
        <div className="absolute bottom-0 p-4 sm:p-6 flex flex-col justify-end">
          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">{content.title}</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {content.text}
          </p>
        </div>
      </div>
    </article>
  );
};
