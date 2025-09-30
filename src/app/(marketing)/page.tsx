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

const featureData = {
  image: MEDIA_BLOG,
  feature: "systematic precision",
  title: "Foundation built on intelligence",
  description:
    "cerebase is a proprietary trading firm built on quantitative research and advanced machine learning. we pursue disciplined strategies to extract signal from complex markets.",
};

export default function Home() {
  return <Featured feature={featureData} />;
}
