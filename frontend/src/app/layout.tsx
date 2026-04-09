import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
