import React from "react";

// Components
import { MiniFeature } from "@/components/common/mini-feature";
import { Post } from "@/components/common/post";

// interface
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
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
  const dataLimited = data.slice(0, 15);

  const feature = {
    image:
      "https://images.unsplash.com/photo-1658937364065-60f3f6818724?q=80&w=3293&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Research at Saga Labs",
    description:
      "Our mission is to cultivate open-source LLM applications that are user-friendly and accessible, promoting inclusivity and responsible technology development. Here at Saga Labs, we are committed to researching and developing such LLM applications.",
  };

  return (
    <main className="min-h-full">
      <MiniFeature feature={feature} />
      <section className="py-16 px-8 grid grid-cols-3 gap-8">
        {dataLimited.map((post: Post, i: number) => (
          <Post key={i} post={post} />
        ))}
      </section>
    </main>
  );
}
