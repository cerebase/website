// Components
import { Featured } from "@/components/common/featured";
// import { Testemonials } from "@/features/testimonials";

// Intefaces & Types
import { Feature } from "@/interfaces/feature";

// Constants
import { MEDIA_BLOG } from "@/lib/constants";

const mainFeature: Feature = {
  image: MEDIA_BLOG,
  feature: "SagaGPT",
  title: "Revolutionize Your Conversational Experience",
  description:
    "Enhance your chat experience like never before with SagaGPT, the cutting-edge desktop plugable chat app. Communicate, collaborate, and create with powerful AI-driven features at your fingertips.",
};

export default function Home() {
  return <Featured feature={mainFeature} />;
}
