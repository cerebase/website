import React from "react";
import Image from "next/image";

// interfaces & types
import { Review } from "@/interfaces/review";

export const Testemonial = ({ review }: { review: Review }) => {
  return (
    <blockquote className="rounded bg-gray-50/90 p-8 shadow-sm sm:p-6">
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
          <p className="font-light text-xs text-highlight">
            Senior Program Manager at Microsoft
          </p>
        </div>
      </div>

      <p className="mt-4 text-gray-700 font-light line-clamp-4">
        &ldquo;{review.review}&rdquo;
      </p>
    </blockquote>
  );
};
