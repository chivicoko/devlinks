import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "./head";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "devlinks - LINK SHARING APP",
  description: "devlinks makes it easy to share your different links with anyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head/>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
