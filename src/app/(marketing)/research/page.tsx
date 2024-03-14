import React from "react";
import type { Metadata } from "next";

// Constants
import { MEDIA_RESEARCH } from "@/lib/constants";

// Components
import { MiniFeature } from "@/components/common/mini-feature";
import { Post } from "@/components/common/post";

// interface
import { Feature } from "@/interfaces/feature";
import { Post as PostType } from "@/interfaces/post";

// lib / constants
import { SITE_TITLE } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_TITLE + " | Research",
};

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
    title: "Research at cerebase",
    description:
      "Our mission is to cultivate open-source LLM applications that are user-friendly and accessible, promoting inclusivity and responsible technology development. Here at cerebase, we are committed to researching and developing such LLM applications.",
  };

  return (
    <main className="min-h-full">
      <MiniFeature feature={feature} />

      <section className="grid grid-cols-1 gap-8 p-8 pt-8 md:grid-cols-2 lg:grid-cols-3">
        {dataLimited.map((post: PostType, i: number) => (
          <Post post={post} key={i} />
        ))}
      </section>
    </main>
  );
}
