import React from "react";

// Constants
import { MEDIA_RESEARCH } from "@/lib/constants";

// Components
import { MiniFeature } from "@/components/common/mini-feature";
import { Post } from "@/components/common/post";

// interface
import { Feature } from "@/interfaces/feature";
import { Post as PostType } from "@/interfaces/post";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page() {
  const data = await getData();
  const dataLimited = data.slice(0, 15);

  const feature: Feature = {
    image: MEDIA_RESEARCH,
    title: "Research at Saga Labs",
    description:
      "Our mission is to cultivate open-source LLM applications that are user-friendly and accessible, promoting inclusivity and responsible technology development. Here at Saga Labs, we are committed to researching and developing such LLM applications.",
  };

  return (
    <main className="min-h-full">
      <MiniFeature feature={feature} />

      <section className="pt-8 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataLimited.map((post: PostType, i: number) => (
          <Post post={post} key={i} />
        ))}
      </section>
    </main>
  );
}
