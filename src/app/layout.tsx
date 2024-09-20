import Header from "@/components/Header";
import "./globals.css";

import Footer from "@/components/Footer";

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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
