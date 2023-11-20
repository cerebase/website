import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Components
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Constants
import {
  SITE_AUTHORS,
  SITE_KEYWORDS,
  SITE_TITLE,
  SITE_DESCRIPTION,
} from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: SITE_AUTHORS,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={inter.className} id="inner-body">
      <Navbar />

      <section className="pt-16">{children}</section>
      <Footer />
    </main>
  );
}
