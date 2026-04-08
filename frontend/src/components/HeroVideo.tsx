"use client";

import Link from "next/link";

export default function HeroVideo() {
  const VIDEO_URL =
    "https://res.cloudinary.com/drturcggf/video/upload/q_auto/f_auto/v1775538126/Auto-play_Video_qesy9j.mp4";

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fadeIn">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full mb-6 border border-white/30">
          <span className="w-2 h-2 rounded-full bg-[#E8A020] animate-pulse" />
          Yayasan Amanah Peduli Umat · Berdiri 2018 · Bandung
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeInUp">
          Bersama Mewujudkan Islam sebagai{" "}
          <span className="text-[#E8A020]">Rahmatan lil &apos;Alamin</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
          Yayasan Amanah Peduli Umat hadir sejak 2018 — melayani dengan amanah, peduli dengan hati, menjangkau yang membutuhkan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          <Link
            href="/mari-beraksi"
            className="bg-[#E8A020] hover:bg-[#c4861a] text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-2xl hover:-translate-y-0.5 text-base"
          >
            Donasi Sekarang
          </Link>
          <Link
            href="/program"
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all border border-white/40 text-base"
          >
            Lihat Program
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-float">
        <span className="text-xs">Scroll ke bawah</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
