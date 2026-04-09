"use client";

import { useState } from "react";
import Image from "next/image";

const FOKUS = [
  {
    id: "sosial",
    label: "Sosial & Keagamaan",
    icon: "mosque",
    img: "https://res.cloudinary.com/drturcggf/image/upload/v1775537341/IMG_9657_ew9nrw.jpg",
    title: "Program Sosial & Keagamaan",
    desc: "Menyelenggarakan kegiatan keagamaan dan sosial kemasyarakatan yang berorientasi pada kemaslahatan umat — dari santunan anak yatim, bakti sosial Ramadan, pasar murah, hingga pengajian umum dan program qurban.",
    items: ["Bakti Sosial Ramadan", "Santunan Anak Yatim & Dhuafa", "Pasar Murah", "Pengajian Umum", "Program Qurban"],
  },
  {
    id: "kesehatan",
    label: "Kesehatan & Lingkungan",
    icon: "health_and_safety",
    img: "https://res.cloudinary.com/drturcggf/image/upload/v1775537364/DSC05826_xhe3nn.jpg",
    title: "Program Kesehatan & Lingkungan",
    desc: "Memberikan layanan kesehatan gratis kepada masyarakat yang membutuhkan, sekaligus aktif menjaga kelestarian lingkungan hidup melalui gerakan penghijauan dan pemberdayaan alam.",
    items: ["Khitanan Massal Gratis", "Operasi Katarak Gratis", "Tanam 10.000 Pohon", "Pemeriksaan Kesehatan Umum"],
  },
  {
    id: "pendidikan",
    label: "Pendidikan & Pembinaan",
    icon: "school",
    img: "https://res.cloudinary.com/drturcggf/image/upload/v1775537340/IMG_9573_datase.jpg",
    title: "Program Pendidikan & Pembinaan",
    desc: "Mengembangkan kegiatan pendidikan formal, nonformal, serta pembinaan masyarakat secara berkelanjutan untuk menciptakan generasi penerus yang berakhlak mulia dan berdaya.",
    items: ["Pembinaan Remaja Islam", "Beasiswa Pendidikan", "Kajian Rutin", "Pembinaan Keakhwatan"],
  },
];

export default function FokusKerjaSection() {
  const [active, setActive] = useState(0);
  const current = FOKUS[active];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="flex items-center justify-center gap-3 text-secondary font-bold tracking-widest text-xs uppercase mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span className="w-8 h-0.5 bg-secondary" />
            Fokus Kerja
            <span className="w-8 h-0.5 bg-secondary" />
          </div>
          <h2
            className="text-4xl font-extrabold text-primary"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Program Unggulan YAPU
          </h2>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FOKUS.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all ${
                active === i
                  ? "bg-primary text-on-primary shadow-lg"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: active === i ? "'FILL' 1" : "'FILL' 0" }}
              >
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content — 2 kolom */}
        <div className="grid md:grid-cols-2 items-stretch bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-lg border border-outline-variant/10">
          {/* Foto */}
          <div className="relative h-72 md:h-auto md:min-h-[400px] overflow-hidden">
            <Image
              key={current.img}
              src={current.img}
              alt={current.title}
              fill
              className="object-cover transition-opacity duration-500"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Konten */}
          <div className="p-10 flex flex-col justify-center">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-5">
              <span
                className="material-symbols-outlined text-2xl text-on-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {current.icon}
              </span>
            </div>
            <h3
              className="text-2xl font-extrabold text-primary mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {current.title}
            </h3>
            <p className="text-on-surface-variant leading-relaxed mb-7 text-sm">{current.desc}</p>
            <ul className="space-y-2.5">
              {current.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-on-surface">
                  <span className="w-5 h-5 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[12px] text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check
                    </span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
