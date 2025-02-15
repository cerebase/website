import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

// Components
// import { Navbar } from "@/components/layout/navbar";
// import { Footer } from "@/components/layout/footer";

// Constants
import {
  SITE_AUTHORS,
  SITE_KEYWORDS,
  SITE_TITLE,
  SITE_DESCRIPTION,
} from "../lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cerebase.com"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: SITE_AUTHORS,
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className} id="outer-body">
        {children}
      </body>
    </html>
  );
}
