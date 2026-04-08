import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const navCol1 = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/program", label: "Program" },
  { href: "/kabar-terbaru", label: "Kabar Terbaru" },
  { href: "/dampak", label: "Dampak" },
];

const navCol2 = [
  { href: "/mari-beraksi#donasi", label: "Donasi" },
  { href: "/mari-beraksi#relawan", label: "Jadi Relawan" },
  { href: "/mari-beraksi#kemitraan", label: "Kemitraan" },
  { href: "/kontak", label: "Kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a2e0a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="space-y-4">
            <Image
              src="https://res.cloudinary.com/drturcggf/image/upload/v1775542314/Logo-Yapu_lazleo.png"
              alt="YAPU"
              width={130}
              height={40}
              className="h-10 w-auto brightness-0 invert"
              unoptimized
            />
            <p className="text-sm leading-relaxed text-gray-400">
              Yayasan Amanah Peduli Umat — Amanah dalam Melayani, Peduli dalam Memberi.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com/ayopeduli.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E8A020] transition-colors"
                aria-label="Instagram YAPU"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@YayasanAmanahPeduliUmat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E8A020] transition-colors"
                aria-label="YouTube YAPU"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-2.47 12.38 12.38 0 00-8.45 0A4.83 4.83 0 014.41 6.69 24.42 24.42 0 002 12a24.42 24.42 0 002.41 5.31 4.83 4.83 0 003.77 2.47 12.38 12.38 0 008.45 0 4.83 4.83 0 003.77-2.47A24.42 24.42 0 0022 12a24.42 24.42 0 00-2.41-5.31zM10 15V9l5 3-5 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Navigasi */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2">
              {navCol1.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[#E8A020] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Mari Beraksi */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Mari Beraksi</h4>
            <ul className="space-y-2">
              {navCol2.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[#E8A020] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Kontak */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={16} className="shrink-0 mt-0.5 text-[#E8A020]" />
                <span>Jl. Aditya A-23, Taman Cipadung Indah, Kel. Cipadung Kidul, Kec. Panyileukan, Kota Bandung 40614</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Mail size={16} className="shrink-0 mt-0.5 text-[#E8A020]" />
                <a href="mailto:sekretariatyapu@gmail.com" className="hover:text-[#E8A020] transition-colors">
                  sekretariatyapu@gmail.com
                </a>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Phone size={16} className="shrink-0 mt-0.5 text-[#E8A020]" />
                <span>082240672888 (Rinaldi)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© 2026 Yayasan Amanah Peduli Umat. Semua hak dilindungi.</span>
          <span>Amanah dalam Melayani, Peduli dalam Memberi.</span>
        </div>
      </div>
    </footer>
  );
}
