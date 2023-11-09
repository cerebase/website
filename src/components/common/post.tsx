import React from "react";
import Image from "next/image";

// interface
type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export const Post = ({ post }: {post: Post}) => {
  return (
    <article className="overflow-hidden transition group" id={post.id.toString()}>
      <Image
        alt="Office"
        src="https://images.unsplash.com/photo-1679485205984-4ce35c32b2d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8fA%3D%3D"
        className=" w-full object-cover aspect-square"
        width={1380}
        height={1380}
      />

      <div className="bg-white py-4">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          {new Date().toLocaleDateString("en-US")}
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900 group-hover:underline">
            {post.title}
          </h3>
        </a>

        <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-500">
          {post.body}
        </p>
      </div>
    </article>
  );
};
