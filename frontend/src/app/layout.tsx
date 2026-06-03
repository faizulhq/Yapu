import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Self-hosted fonts via next/font — eliminates render-blocking Google Fonts CDN
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect for faster Cloudinary & API */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://faizulhaq.pythonanywhere.com" />

        {/* Material Symbols — loaded async to avoid render-blocking */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
            rel="stylesheet"
          />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var l=document.createElement('link');
              l.rel='stylesheet';
              l.href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap';
              document.head.appendChild(l);
            `,
          }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
