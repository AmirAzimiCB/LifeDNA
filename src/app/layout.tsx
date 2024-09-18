import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

import Head from "next/head";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LifeDNA - Advanced DNA Testing",
  description: "Discover Your Genetic Wellness Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/vdm7ktw.css" />
      </Head>
      <body className={`${inter.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
