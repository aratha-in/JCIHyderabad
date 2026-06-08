import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LenisScroll from "@/components/LenisScroll";
import "./globals.css";

export const metadata = {
  title: "JCI Hyderabad | Developing Leaders for a Changing World",
  description: "Official portal of JCI Hyderabad (Junior Chamber International Hyderabad). Setting the global digital benchmark for youth leadership, entrepreneurship, and community impact.",
  keywords: "JCI Hyderabad, JCI India, Junior Chamber International, Youth Leadership Hyderabad, NGO Hyderabad, Business Networking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-inter">
        <LenisScroll />
        <Header />
        <main className="flex-grow bg-white pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
