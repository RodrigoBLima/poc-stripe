import { Metadata } from "next";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-lato",
});

import { Lato } from "next/font/google";

export const metadata: Metadata = {
  title: "POC Stripe",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${lato.className}`}>{children}</body>
    </html>
  );
}
