import React from "react";
import Image from "next/image";
import clsx from "clsx";

const image =
  "https://images.unsplash.com/photo-1669465716237-9cb999b47773?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

type Article = {
  title: string;
  description: string;
  image: string;
};

const mockArticleOne: Article = {
  title: "How to position your furniture for positivity",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  image: image,
};

const mockArticleTwo: Article = {
  title: "How to position your furniture for positivity",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
  image: image,
};

export default function page() {
  return (
    <main className="pt-16 px-0">
      {/* Image Grid */}
      <section
        className="overflow-hidden bg-blend-difference w-full"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="grid grid-cols-4 gap-2 h-full">
          {/* row 1 */}
          <Article content={mockArticleTwo} width={2} />
          <Article content={mockArticleOne} width={1} />
          <Article content={mockArticleOne} width={1} />

          {/* row 2 */}
          <Article content={mockArticleOne} width={1} />
          <Article content={mockArticleOne} width={1} />
          <Article content={mockArticleTwo} width={2} />
        </div>
      </section>

      {/* About */}
      <section className="grid grid-cols-3 gap-10 pt-2">
        {[...Array(8)].map((_, i) => (
          <></>
        ))}
      </section>
    </main>
  );
}

const Article = ({ content, width }: { content: Article; width: number }) => {
  return (
    <article
      className={clsx(
        "relative overflow-hidden shadow transition-all ease-in group",
        `col-span-${width}`
      )}
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
