import React from "react";
import Image from "next/image";
import clsx from "clsx";

// prettier-ignore
const image_1 = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image_2 =
  "https://images.unsplash.com/photo-1524758870432-af57e54afa26?q=80&w=2558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image_3 =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// components
import { Article } from "@/components/common/article";
import { ArticleWide } from "@/components/common/article-wide";

// interfaces & types
import { Article as ArticleType } from "@/interfaces/article";

const mockArticleOne: ArticleType = {
  title: "How to position your furniture for positivity",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  image: image_1,
};

const mockArticleTwo: ArticleType = {
  title: "How to position your furniture for positivity",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  image: image_2,
};

const mockArticleThree: ArticleType = {
  title: "How to position your furniture for positivity",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  image: image_3,
};

export default function page() {
  return (
    <main>
      {/* Image Grid */}
      <section
        className="overflow-hidden bg-blend-difference w-full"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="grid grid-cols-4 gap-2 h-full p-2">
          {/* row 1 */}
          <ArticleWide content={mockArticleThree} />
          <Article content={mockArticleOne} />
          <Article content={mockArticleTwo} />

          {/* row 2 */}
          <Article content={mockArticleOne} />
          <Article content={mockArticleThree} />
          <ArticleWide content={mockArticleTwo} />
        </div>
      </section>

      {/* About */}
      <section className="grid grid-cols-3 gap-10">
        {[...Array(8)].map((_, i) => (
          <p key={i}></p>
        ))}
      </section>
    </main>
  );
}
