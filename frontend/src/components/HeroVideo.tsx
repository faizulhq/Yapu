"use client";

import Link from "next/link";

export default function HeroVideo() {
  return (
    <header className="relative h-screen min-h-[700px] flex items-center pt-16 overflow-hidden">
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/drturcggf/video/upload/q_auto/f_auto/v1775538126/Auto-play_Video_qesy9j.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white/90 text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-white/20"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
            Berdiri 2018 · Kota Bandung · Indonesia
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Bersama Mewujudkan Islam sebagai{" "}
            <span className="text-secondary-container">Rahmatan lil &apos;Alamin</span>
          </h1>

          <p className="text-white/85 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            Yayasan Amanah Peduli Umat hadir sejak 2018 — melayani dengan amanah, peduli dengan hati, menjangkau yang membutuhkan di seluruh pelosok negeri.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/mari-beraksi"
              className="px-8 py-4 bg-secondary-container text-on-secondary-container rounded-full font-bold text-base hover:scale-105 transition-all shadow-xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Donasi Sekarang
            </Link>
            <Link
              href="/program"
              className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white/15 rounded-full font-bold text-base transition-all backdrop-blur-sm"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Lihat Program
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-4 h-7 rounded-full border border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </header>
  );
}
