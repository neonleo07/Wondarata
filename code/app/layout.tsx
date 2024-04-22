import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WonderataX Solutions",
  description: "Get Your Website Made Now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` overflow-x-hidden ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
