import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "YAPU — Yayasan Amanah Peduli Umat",
    template: "%s | YAPU",
  },
  description:
    "Yayasan Amanah Peduli Umat (YAPU) hadir sejak 2018 untuk mewujudkan Islam sebagai Rahmatan lil Alamin melalui program sosial, kesehatan, lingkungan, dan pemberdayaan umat.",
  keywords: ["donasi", "yayasan", "sosial", "zakat", "infak", "sedekah", "YAPU", "Bandung"],
  openGraph: {
    title: "YAPU — Yayasan Amanah Peduli Umat",
    description: "Bersama mewujudkan Islam sebagai Rahmatan lil Alamin",
    url: "https://yapu.or.id",
    siteName: "YAPU",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
