import React from "react";
import type { Metadata } from "next";

// Components
import { MiniFeature } from "@/components/common/mini-feature";
import { Post } from "@/components/common/post";

// interface
import { Post as PostType } from "@/interfaces/post";

// lib / constants
import { SITE_TITLE } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_TITLE + " | What we are up to",
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page() {
  const data = await getData();
  const dataLimited: PostType[] = data.slice(0, 15);

  const feature = {
    image:
      "https://images.unsplash.com/photo-1687042277425-89b414406d3a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Insights from Saga Labs",
    description:
      "Delve into the world of open-source LLM applications, user-friendliness, accessibility, and the latest advancements in technology. Our blog offers insights, updates, and valuable resources on our mission to make technology inclusive and responsible at Saga Labs.",
  };

  return (
    <main className="min-h-full">
      <MiniFeature feature={feature} />
      <section className="py-16 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataLimited.map((post: PostType, i: number) => (
          <Post post={post} key={i} />
        ))}
      </section>
    </main>
  );
}
