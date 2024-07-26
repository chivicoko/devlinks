import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "./head";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer style={{width: 'fit-content', left: '50%', transform: "translateX(-50%)"}} />
        {children}
      </body>
    </html>
  );
}
