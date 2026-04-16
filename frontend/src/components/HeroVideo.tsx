"use client";

import Link from "next/link";
import MarqueeTicker from "@/components/MarqueeTicker";

export default function HeroVideo() {
  return (
    <header className="pt-20">
      {/* ── Video banner ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "clamp(320px, 40vw, 520px)" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          aria-hidden="true"
        >
          <source
            src="https://res.cloudinary.com/drturcggf/video/upload/v1775538126/Auto-play_Video_qesy9j.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(23,57,1,0.10) 0%, rgba(23,57,1,0.28) 100%)",
          }}
        />
      </div>

      <MarqueeTicker />

      {/* ── Statement area ── */}
      <div className="bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
          
          <div className="flex-1 max-w-2xl">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="w-8 h-0.5 bg-secondary" />
              Berdiri 2018 · Bandung, Indonesia
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-[1.15] mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Bersama Mewujudkan Islam sebagai{" "}
              <em className="not-italic text-secondary">
                Rahmatan lil &apos;Alamin
              </em>
            </h1>
            <p
              className="text-on-surface-variant text-base leading-relaxed max-w-xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              YAPU hadir sejak 2018 — melayani dengan amanah, peduli dengan
              hati, menjangkau yang membutuhkan di seluruh pelosok negeri.
            </p>
          </div>

          {/* Kolom Kanan: 3 Card Berbaris + Tombol */}
          <div className="shrink-0 w-full lg:w-auto mt-4 lg:mt-0">
            <div className="flex flex-col gap-3 max-w-[400px] lg:w-[320px] mx-auto lg:mx-0">
              
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-4 flex items-center gap-4 hover:bg-surface-container-low hover:border-secondary/30 hover:-translate-y-1 hover:shadow-md transition-all group cursor-default">
                <span className="material-symbols-outlined text-secondary text-2xl group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-sm font-bold text-primary flex-1 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Amanah & Transparan</span>
              </div>
              
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-4 flex items-center gap-4 hover:bg-surface-container-low hover:border-secondary/30 hover:-translate-y-1 hover:shadow-md transition-all group cursor-default">
                <span className="material-symbols-outlined text-secondary text-2xl group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>diversity_3</span>
                <span className="text-sm font-bold text-primary flex-1 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Pemberdayaan Umat</span>
              </div>
              
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-4 flex items-center gap-4 hover:bg-surface-container-low hover:border-secondary/30 hover:-translate-y-1 hover:shadow-md transition-all group cursor-default">
                <span className="material-symbols-outlined text-secondary text-2xl group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
                <span className="text-sm font-bold text-primary flex-1 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Rahmatan lil &apos;Alamin</span>
              </div>

              <Link href="/program" className="mt-2 w-full py-3.5 bg-primary text-on-primary rounded-full font-bold text-sm tracking-wide hover:opacity-90 hover:shadow-md hover:-translate-y-0.5 transition-all text-center flex items-center justify-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Lihat Program
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
