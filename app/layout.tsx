import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timbu Cloud Shop",
  description: "Timbu Cloud Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={manrope.className}>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
