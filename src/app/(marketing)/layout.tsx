import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

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
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
