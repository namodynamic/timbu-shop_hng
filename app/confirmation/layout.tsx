import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timbu Cloud Shop",
  description:
    "Timbu Cloud Shop offers a seamless online shopping experience with a wide range of products and services. Enjoy secure transactions, fast delivery, and excellent customer support. Shop now and discover the convenience of Timbu Cloud Shop!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={manrope.className}>{children}</main>
      </body>
    </html>
  );
}