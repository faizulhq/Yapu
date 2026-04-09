"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/program", label: "Program" },
  { href: "/kabar-terbaru", label: "Kabar Terbaru" },
  { href: "/dampak", label: "Dampak" },
  { href: "/mari-beraksi", label: "Mari Beraksi" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = "bg-white shadow-sm border-b border-gray-100";
  const textColor = "text-gray-800";
  const logoFilter = "";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="https://res.cloudinary.com/drturcggf/image/upload/v1775542314/Logo-Yapu_lazleo.png"
              alt="YAPU Logo"
              width={140}
              height={48}
              className={`h-12 w-auto transition-all ${logoFilter}`}
              unoptimized
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#E8A020] ${textColor} ${
                  pathname === link.href ? "text-[#E8A020]" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/mari-beraksi"
              className="bg-[#2D5016] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1e3710] transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Donasi Sekarang
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className={`lg:hidden p-2 rounded-lg ${textColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors hover:bg-green-50 hover:text-[#2D5016] ${
                  pathname === link.href
                    ? "bg-green-50 text-[#2D5016]"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/mari-beraksi"
              onClick={() => setMenuOpen(false)}
              className="bg-[#2D5016] text-white px-5 py-3 rounded-xl text-sm font-semibold text-center hover:bg-[#1e3710] transition-all mt-2"
            >
              Donasi Sekarang
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
