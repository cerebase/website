import React from "react";

export default function page() {
  return (
    <main className="pt-32 px-8">
      <section className="grid grid-cols-3 gap-10">
        {[...Array(8)].map((_, i) => (
          <p key={i}>Hello</p>
        ))}
      </section>
    </main>
  );
}
