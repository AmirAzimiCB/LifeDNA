import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/cart/Cart";
import CookieBanner from "@/components/CookieBanner";

export const metadata = {
  title: {
    default: "LifeDNA - Advanced DNA Testing",
    template: `%s | LifeDNA`,
  },
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
        <Header>
          <Cart />
        </Header>
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <div id="popup-portal"></div>
      </body>
    </html>
  );
}
