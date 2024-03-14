import React from "react";
import type { Metadata } from "next";

// Components
import { Featured } from "@/components/common/featured";

// Intefaces & Types
import { Feature } from "@/interfaces/feature";

// Constants
import { MEDIA_BLOG, SITE_TITLE } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_TITLE + " | NLP studio",
};

export default function Home() {
  return (
    <Featured
      feature={{
        image: MEDIA_BLOG,
        feature: "Cerebase Cloud",
        title: "Revolutionize Your Conversational Experience",
        description:
          "Enhance your chat experience like never before with Cerebase Cloud, the cutting-edge desktop plugable chat app. Communicate, collaborate, and create with powerful AI-driven features at your fingertips.",
      }}
    />
  );
}
