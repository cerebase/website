// Components
import { Featured } from "@/components/common/featured";
import { Testemonials } from "@/components/common/testemonials";

// Intefaces & Types
import { Feature } from "@/interfaces/feature";

const mainFeature: Feature = {
  image:
    "https://images.unsplash.com/photo-1684139517679-032b7213ad2e?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "SagaGPT: Revolutionize Your Conversational Experience",
  description:
    "Enhance your chat experience like never before with SagaGPT, the cutting-edge desktop plugable chat app. Communicate, collaborate, and create with powerful AI-driven features at your fingertips.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Featured feature={mainFeature} />

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
