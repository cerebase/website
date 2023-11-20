import React from "react";
import type { Metadata } from "next";

// Components
import { MiniFeature } from "@/components/common/mini-feature";
import { Post } from "@/components/common/post";

// intefaces & types
import { Feature } from "@/interfaces/feature";
import { Post as PostType } from "@/interfaces/post";
import { Statement } from "@/components/common/statement";

// lib / constants
import { SITE_TITLE } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_TITLE + " | Open Source",
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
  const dataFirst = data.slice(0, 3);
  const dataLast = data.slice(4, 10);

  const feature: Feature = {
    image:
      "https://images.unsplash.com/photo-1669465716237-9cb999b47773?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dƒ",
    title: "Our Open-Source Initiatives",
    description:
      "Join us in our mission to develop open-source LLM applications that prioritize user-friendliness, accessibility, and inclusivity. Discover how we're fostering collaboration, innovation, and responsible technology development at Saga Labs on our Open Source page.",
  };

  return (
    <main className="min-h-full">
      <MiniFeature feature={feature} />
      <section className="py-16 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
        {dataFirst.map((post: PostType, i: number) => (
          <Post post={post} key={i} />
        ))}
      </section>

      <Statement />

      <section className="py-16 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
        {dataLast.map((post: PostType, i: number) => (
          <Post post={post} key={i} />
        ))}
      </section>
    </main>
  );
}
