"use client";

import Link from "next/link";

const CORE_VALUES = [
  {
    title: "Amanah & Transparan",
    description: "Setiap donasi disalurkan tepat sasaran dengan laporan yang selalu terbuka kepada publik.",
    icon: "verified",
    link: "/tentang-kami",
  },
  {
    title: "Aksi Nyata & Terukur",
    description: "Bukan sekadar bantuan sesaat, kami merancang program berkelanjutan untuk kemandirian umat.",
    icon: "analytics",
    link: "/tentang-kami",
  },
  {
    title: "Rahmatan lil 'Alamin",
    description: "Membawa misi kedamaian dan merangkul seluruh lapisan masyarakat tanpa memandang latar belakang.",
    icon: "public",
    link: "/tentang-kami",
  },
];

export default function CoreValuesCards() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-20 lg:-mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto drop-shadow-xl">
      <div className="grid md:grid-cols-3 gap-6">
        {CORE_VALUES.map((val) => (
          <div key={val.title} className="bg-white rounded-3xl p-8 shadow-xl border border-outline-variant/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col group">
            <div className="w-14 h-14 bg-secondary-container/40 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-on-secondary transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{val.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{val.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">
              {val.description}
            </p>
            <Link href={val.link} className="inline-flex items-center gap-1.5 text-secondary font-bold text-sm tracking-wide hover:text-primary transition-colors mt-auto">
              Cari tahu lebih lanjut <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
