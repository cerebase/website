import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

// Components
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saga Labs",
  description:
    "Copenhagen-based AI/NLP research lab dedicated to advancing LLM (Language Understanding, Learning, and Modeling) Accessibility products. Explore our innovative solutions today.",
  keywords: ["Saga Labs", "LLM Accessibility", "AI research", "NLP products", "Copenhagen"],
  authors: [{ name: "Saga Labs", url: "https://saga-labs.com" }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
