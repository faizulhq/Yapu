"use client";

import Link from "next/link";

export default function HeroVideo() {
  return (
    <header className="pt-[72px]">
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

      {/* ── Statement area ── */}
      <div className="bg-white py-6 md:py-8 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
          
          <div className="flex-1 max-w-2xl">
            <div
              className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold text-secondary uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              <span className="w-6 sm:w-8 h-0.5 bg-secondary" />
              Berdiri 2018 · Bandung, Indonesia
            </div>
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary leading-[1.15] mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Bersama Mewujudkan Islam sebagai{" "}
              <em className="not-italic text-secondary">
                Rahmatan lil &apos;Alamin
              </em>
            </h1>
            <p
              className="text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              YAPU hadir sejak 2018 — melayani dengan amanah, peduli dengan
              hati, menjangkau yang membutuhkan di seluruh pelosok negeri.
            </p>
          </div>

          {/* Kolom Kanan: 3 Card Berbaris + Tombol */}
          <div className="shrink-0 w-full lg:w-auto mt-2 lg:mt-0">
            <div className="flex flex-col gap-2 max-w-[400px] lg:w-[320px] mx-auto lg:mx-0">
              
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-3 flex items-center gap-3 hover:bg-surface-container-low hover:border-secondary/30 hover:-translate-y-[2px] transition-all group cursor-default">
                <span className="material-symbols-outlined text-secondary text-xl group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-xs sm:text-sm font-bold text-primary flex-1 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Amanah & Transparan</span>
              </div>
              
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-3 flex items-center gap-3 hover:bg-surface-container-low hover:border-secondary/30 hover:-translate-y-[2px] transition-all group cursor-default">
                <span className="material-symbols-outlined text-secondary text-xl group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>diversity_3</span>
                <span className="text-xs sm:text-sm font-bold text-primary flex-1 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Pemberdayaan Umat</span>
              </div>
              
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-3 flex items-center gap-3 hover:bg-surface-container-low hover:border-secondary/30 hover:-translate-y-[2px] transition-all group cursor-default">
                <span className="material-symbols-outlined text-secondary text-xl group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
                <span className="text-xs sm:text-sm font-bold text-primary flex-1 leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Rahmatan lil &apos;Alamin</span>
              </div>

              <Link href="/program" className="mt-1 w-full py-2.5 bg-primary text-on-primary rounded-full font-bold text-[13px] tracking-wide hover:opacity-90 transition-all text-center flex items-center justify-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Lihat Program YAPU
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
