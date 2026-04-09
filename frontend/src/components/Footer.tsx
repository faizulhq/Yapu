import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const menu1 = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/program", label: "Program" },
  { href: "/kabar-terbaru", label: "Kabar Terbaru" },
  { href: "/dampak", label: "Dampak" },
];

const menu2 = [
  { href: "/mari-beraksi#donasi", label: "Donasi" },
  { href: "/mari-beraksi#relawan", label: "Jadi Relawan" },
  { href: "/mari-beraksi#kemitraan", label: "Kemitraan" },
  { href: "/kontak", label: "Kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white w-full rounded-t-[1.5rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-8 py-16 max-w-7xl mx-auto">
        {/* Col 1 — Brand */}
        <div className="space-y-5">
          <Image
            src="https://res.cloudinary.com/drturcggf/image/upload/v1775542314/Logo-Yapu_lazleo.png"
            alt="YAPU"
            width={130}
            height={44}
            className="h-11 w-auto object-contain"
            style={{ width: "auto" }}
            unoptimized
          />
          <p className="text-white/60 text-sm leading-relaxed">
            Amanah dalam Melayani, Peduli dalam Memberi.
          </p>
          <div className="flex gap-3">
            {/* Instagram */}
            <a
              href="https://instagram.com/ayopeduli.id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram YAPU"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-secondary-container flex items-center justify-center transition-colors"
            >
              <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="https://youtube.com/@YayasanAmanahPeduliUmat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube YAPU"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-secondary-container flex items-center justify-center transition-colors"
            >
              <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2 — Menu Utama */}
        <div>
          <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Menu Utama
          </h4>
          <ul className="space-y-2.5">
            {menu1.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/60 hover:text-secondary-container transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Dukungan */}
        <div>
          <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Dukungan
          </h4>
          <ul className="space-y-2.5">
            {menu2.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/60 hover:text-secondary-container transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Kantor Pusat */}
        <div>
          <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Kantor Pusat
          </h4>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-white/60">
              <MapPin size={15} className="shrink-0 mt-0.5 text-secondary-container" />
              <span>Jl. Aditya A-23, Taman Cipadung Indah, Kel. Cipadung Kidul, Kec. Panyileukan, Kota Bandung 40614</span>
            </li>
            <li className="flex gap-3 text-sm text-white/60">
              <Mail size={15} className="shrink-0 mt-0.5 text-secondary-container" />
              <a href="mailto:sekretariatyapu@gmail.com" className="hover:text-secondary-container transition-colors break-all">
                sekretariatyapu@gmail.com
              </a>
            </li>
            <li className="flex gap-3 text-sm text-white/60">
              <Phone size={15} className="shrink-0 mt-0.5 text-secondary-container" />
              <span>082240672888 (Rinaldi)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-8 py-6 max-w-7xl mx-auto text-center">
        <p className="text-white/40 text-xs">
          © 2026 Yayasan Amanah Peduli Umat. Amanah dalam Melayani, Peduli dalam Memberi.
        </p>
      </div>
    </footer>
  );
}
