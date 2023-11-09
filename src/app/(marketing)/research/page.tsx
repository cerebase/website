import React from "react";

// Components
import { MiniFeature } from "@/components/common/mini-feature";

export default function page() {
  return (
    <main className="min-h-full">
      <MiniFeature />
      <section className="pt-16 px-8 grid grid-cols-3 gap-10">
        {[...Array(8)].map((_, i) => (
          <>Research</>
        ))}
      </section>
    </main>
  );
}
