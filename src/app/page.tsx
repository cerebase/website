import Image from "next/image";

// Components
import { Featured } from "@/components/common/featured";
import { Testemonials } from "@/components/common/testemonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Featured />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mt-12 mb-6">
          Saga Labs
        </h1>

        <p className="text-gray-700 mb-6">
          European AI/NLP research lab focused on LLM Accessibility products
        </p>
      </div>

      <Testemonials />
    </main>
  );
}
