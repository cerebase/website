import Image from "next/image";
import React from "react";

// interfaces & types
import { Review } from "@/interfaces/review";

// Components
import { Testemonial } from "./testemonial";

const mockReviews: Review[] = [
  {
    user: "John Doe",
    rating: 5,
    review:
      "SagaGPT has transformed the way I work! Its AI-driven chat features are simply incredible, making my desktop conversations more efficient and enjoyable. I can't imagine my workday without it.",
  },
  {
    user: "Jane Doe",
    rating: 4,
    review:
      "I've tried many desktop chat apps, but SagaGPT stands out with its unique AI capabilities. It's user-friendly, and the AI assistance is a game-changer. I'm looking forward to even more features in future updates!",
  },
  {
    user: "John Smith",
    rating: 5,
    review:
      "SagaGPT has redefined the way we collaborate in our office. It streamlines our communication and makes it so easy to exchange ideas. The AI-powered suggestions are remarkably accurate. Highly recommended for anyone seeking productivity gains.",
  },
];

export const Testemonials = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Read trusted reviews from our customers
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {mockReviews.map((review: Review, i) => (
            <Testemonial review={review} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
