import Image from "next/image";
import React from "react";

type Review = {
  user: string;
  rating: number;
  review: string;
};

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
          {mockReviews.map((review, i) => (
            <Testemonial review={review} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Testemonial = ({ review }: { review: Review }) => {
  return (
    <blockquote className="rounded bg-gray-50 p-8 shadow-sm sm:p-6">
      <div className="flex items-center gap-4">
        <Image
          alt="Man"
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          className="rounded-full object-cover"
          width={56}
          height={56}
        />

        <div>
          <p className="mt-0.5 font-medium text-gray-900">{review.user}</p>
          <p className="font-light text-xs text-highlight">Senior Program Manager at Microsoft</p>
        </div>
      </div>

      <p className="mt-4 text-gray-700 font-light line-clamp-4">
        &ldquo;{review.review}&rdquo;
      </p>
    </blockquote>
  );
};
