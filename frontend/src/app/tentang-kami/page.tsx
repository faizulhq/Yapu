import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Eye, Target, Repeat } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Mengenal Yayasan Amanah Peduli Umat — sejarah, visi, misi, nilai, dan struktur kepengurusan YAPU sejak 2018.",
};

const misi = [
  "Menyelenggarakan kegiatan keagamaan serta sosial kemasyarakatan yang berorientasi pada kemaslahatan umat.",
  "Menyelenggarakan layanan kesehatan masyarakat serta berperan aktif dalam pelestarian dan pemanfaatan lingkungan hidup.",
  "Mengembangkan dan mengelola media informasi YAPU serta memanfaatkan teknologi informasi dan komunikasi untuk layanan yang amanah, transparan, dan terpercaya.",
  "Menyelenggarakan kegiatan pendidikan formal dan nonformal serta pembinaan masyarakat secara berkelanjutan.",
  "Menyelenggarakan pembinaan keakhwatan serta penguatan ketahanan keluarga sebagai pelanjut nilai dan amanah umat.",
  "Mengembangkan aktivitas ekonomi berbasis kewirausahaan untuk pemberdayaan dan kemandirian umat.",
];

/* The board data is now structured directly via the unified org chart section below. */

const nilaiUtama = [
  { icon: "shield", label: "Amanah", desc: "Setiap kepercayaan dan donasi dijaga dengan penuh tanggung jawab dan integritas." },
  { icon: "visibility", label: "Transparansi", desc: "Laporan keuangan dan kegiatan tersedia secara terbuka untuk publik." },
  { icon: "workspace_premium", label: "Profesional", desc: "Setiap program dirancang dan dilaksanakan dengan standar manajemen tinggi." },
  { icon: "autorenew", label: "Berkelanjutan", desc: "Dampak jangka panjang menjadi prioritas dalam setiap rancangan program YAPU." },
];

export default function TentangKamiPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-primary to-primary-container">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-on-primary/50 mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <Link href="/" className="hover:text-on-primary transition-colors">Beranda</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-on-primary/80">Tentang Kami</span>
          </nav>

          <div className="flex items-center gap-3 text-secondary-container font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <span className="w-8 h-0.5 bg-secondary-container" />
            Yayasan Amanah Peduli Umat
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-on-primary leading-tight mb-4 max-w-2xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Tentang YAPU
          </h1>
          <p className="text-on-primary/70 max-w-xl text-lg leading-relaxed">
            Mengenal lebih dekat lembaga sosial-keagamaan yang berdiri dengan penuh amanah sejak 2018 di Kota Bandung
          </p>
        </div>
      </section>

      {/* ── SEJARAH ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="https://res.cloudinary.com/drturcggf/image/upload/v1775537367/IMG_8334_nav5bn.jpg"
                alt="Sejarah YAPU"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {/* Year badge */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-container rounded-2xl flex flex-col items-center justify-center shadow-xl z-20">
              <span className="text-3xl font-black text-on-secondary-container" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>8+</span>
              <span className="text-[10px] font-bold text-on-secondary-container/70 uppercase">Tahun</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-primary-fixed/30 blur-3xl -z-10" />
          </div>

          <div>
            <div className="flex items-center gap-3 text-secondary font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <span className="w-8 h-0.5 bg-secondary" />
              Sejarah
            </div>
            <h2 className="text-4xl font-extrabold text-primary leading-tight mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Lahir dari Kepedulian terhadap Umat
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed text-sm">
              <p>
                Yayasan Amanah Peduli Umat (YAPU) didirikan pada <strong className="text-on-surface">5 Februari 2018</strong> berdasarkan Akta Notaris Ir. Sri Wahjuni, M.Sc., S.H., M.H., M.Kn. Nomor 5, dan telah disahkan oleh Kemenkumham RI.
              </p>
              <p>
                Berakar di Kota Bandung, YAPU lahir dari keprihatinan sekelompok insan yang tergerak untuk hadir nyata di tengah masyarakat — mempertemukan kepedulian dengan kebutuhan umat melalui program-program yang amanah, terukur, dan berdampak.
              </p>
              <p>
                Selama lebih dari 8 tahun, YAPU telah menjangkau ribuan penerima manfaat di berbagai wilayah Jawa — dari kegiatan sosial, kesehatan, lingkungan, hingga pemberdayaan ekonomi dan pendidikan.
              </p>
            </div>

            {/* Legalitas */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/30">
                <p className="text-xs text-on-surface-variant mb-1">Akta Notaris</p>
                <p className="font-bold text-on-surface text-sm">No. 5 · 5 Februari 2018</p>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/30">
                <p className="text-xs text-on-surface-variant mb-1">SK Kemenkumham RI</p>
                <p className="font-bold text-on-surface text-sm">AHU-0002233.AH.01.04 Tahun 2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISI & MISI ── */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Visi */}
          <div className="bg-primary rounded-[2rem] p-10 text-center mb-10 shadow-xl">
            <p className="text-on-primary/60 font-bold text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Visi
            </p>
            <blockquote className="text-3xl sm:text-4xl font-extrabold text-on-primary leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              &ldquo;Mewujudkan Islam sebagai{" "}
              <span className="text-secondary-container">Rahmatan lil &apos;Alamin</span>&rdquo;
            </blockquote>
          </div>

          {/* Misi */}
          <div>
            <h3 className="text-center text-2xl font-extrabold text-primary mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Enam Pilar Misi YAPU
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {misi.map((item, i) => (
                <div key={i} className="bg-surface-container-lowest rounded-2xl p-6 shadow-md border border-outline-variant/10 flex gap-4 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm shrink-0" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {i + 1}
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NILAI UTAMA ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 text-secondary font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <span className="w-8 h-0.5 bg-secondary" />
            Nilai Utama
            <span className="w-8 h-0.5 bg-secondary" />
          </div>
          <h2 className="text-3xl font-extrabold text-primary" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Prinsip yang Memandu Langkah Kami
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nilaiUtama.map((nilai) => (
            <div key={nilai.label} className="bg-surface-container-low rounded-[1.5rem] p-8 border border-outline-variant/10 hover:shadow-xl hover:-translate-y-1 transition-all text-center group">
              <div className="w-14 h-14 rounded-2xl bg-primary text-on-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{nilai.icon}</span>
              </div>
              <h3 className="font-extrabold text-primary mb-2 text-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{nilai.label}</h3>
              <p className="text-on-surface-variant text-xs leading-relaxed">{nilai.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STRUKTUR KEPENGURUSAN (ORG CHART) ── */}
      <section className="py-24 bg-surface-container-lowest overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 text-secondary font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <span className="w-8 h-0.5 bg-secondary" />
              Kepengurusan
              <span className="w-8 h-0.5 bg-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Struktur Organisasi YAPU
            </h2>
          </div>

          <div className="relative flex flex-col items-center select-none text-sm w-full mx-auto max-w-5xl">
            
            {/* LEVEL 1: Pembina */}
            <div className="relative z-10 bg-gradient-to-br from-[#E8A020] to-[#d69018] text-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(232,160,32,0.2)] w-[280px] text-center hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(232,160,32,0.4)] transition-all">
               <p className="underline underline-offset-4 mb-2 text-sm uppercase tracking-widest font-bold">Pembina</p>
               <p className="font-normal text-[15px]">H. Muhammad Hasan, B.Sc</p>
            </div>

            {/* Line down to Ketua (Dashed) */}
            <div className="hidden md:block w-[2px] h-[50px] border-l-[2px] border-dashed border-[#2D5016] z-0"></div>
            <div className="md:hidden w-[2px] h-[30px] border-l-[2px] border-dashed border-[#2D5016] my-2 relative"></div>

            {/* LEVEL 2: Ketua + Pengawas */}
            <div className="relative z-10 flex flex-col md:flex-row justify-center items-center w-full">
               
               {/* Ketua */}
               <div className="relative bg-gradient-to-br from-[#2D5016] to-[#223d11] text-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(45,80,22,0.2)] w-[280px] text-center z-20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(45,80,22,0.4)] transition-all">
                 <p className="underline underline-offset-4 mb-2 text-sm uppercase tracking-widest font-bold">Ketua</p>
                 <p className="font-normal text-[15px]">Prof. Dr. Cartono, S.Pd., M.Pd., M.T</p>
               </div>

               {/* Horizontal Dashed Line (Pengawas to Ketua) */}
               <div className="hidden md:block absolute left-1/2 top-1/2 w-[160px] lg:w-[220px] border-t-[2px] border-dashed border-[#2D5016] -translate-x-full -translate-y-1/2 z-0"></div>

               {/* Pengawas (Desktop - LEFT Side) */}
               <div className="hidden md:block absolute right-[calc(50%+160px)] lg:right-[calc(50%+220px)] top-1/2 -translate-y-1/2 z-10 w-[260px]">
                 <div className="bg-gradient-to-br from-[#E8A020] to-[#d69018] text-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(232,160,32,0.2)] text-center hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(232,160,32,0.4)] transition-all">
                   <p className="underline underline-offset-4 mb-3 text-sm uppercase tracking-widest font-bold">Pengawas</p>
                   <ol className="text-[14px] font-normal text-left list-none space-y-1 w-max mx-auto">
                     <li>1. Drs. Ikhsan Matondang, M.Si</li>
                     <li>2. Dedi Herdiyana, S.T</li>
                   </ol>
                 </div>
               </div>
               
               {/* Pengawas (Mobile display) */}
               <div className="md:hidden w-[280px] mt-4 flex flex-col items-center">
                 <div className="w-[2px] h-[20px] border-l-[2px] border-dashed border-[#2D5016] mb-2"></div>
                 <div className="bg-gradient-to-br from-[#E8A020] to-[#d69018] text-white w-full rounded-2xl p-6 shadow-[0_8px_30px_rgb(232,160,32,0.2)] text-center">
                   <p className="underline underline-offset-4 mb-3 text-sm uppercase tracking-widest font-bold">Pengawas</p>
                   <ol className="text-sm font-normal text-left list-none space-y-1 w-max mx-auto">
                     <li>1. Drs. Ikhsan Matondang, M.Si</li>
                     <li>2. Dedi Herdiyana, S.T</li>
                   </ol>
                 </div>
               </div>
            </div>

            {/* Line down to Sek/Ben Branch */}
            <div className="hidden md:block h-[50px] w-[2px] bg-[#2D5016] z-0"></div>

            {/* LEVEL 3: Sekretaris & Bendahara */}
            <div className="relative z-10 flex flex-col md:flex-row justify-center items-center w-full mt-6 md:mt-0">
               <div className="md:hidden w-[2px] h-[30px] bg-[#2D5016] -mt-2"></div>
               
               {/* Sekretaris */}
               <div className="relative w-[300px] md:mr-[100px] lg:mr-[160px] bg-gradient-to-br from-[#2D5016] to-[#223d11] text-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(45,80,22,0.2)] text-center hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(45,80,22,0.4)] transition-all">
                 <p className="underline underline-offset-4 mb-3 text-sm uppercase tracking-widest font-bold">Sekretaris</p>
                 <div className="space-y-1 text-[13px] font-normal leading-relaxed text-left pl-2">
                   <div>Sekretaris I&nbsp;&nbsp;&nbsp;: Aji Pamoso, S.Si, M.T</div>
                   <div>Sekretaris II&nbsp;: Maryam Nurbaitsah Haq, S.Mat</div>
                 </div>
               </div>

               {/* Central horizontal line connecting Sek and Ben directly to the middle trunk */}
               <div className="hidden md:block absolute left-[50%] top-1/2 w-[calc(50vw)] max-w-[400px] border-t-[2px] border-[#2D5016] -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>
               {/* Central vertical trunk passing through */}
               <div className="hidden md:block absolute left-1/2 top-[-50px] bottom-[-50px] w-[2px] bg-[#2D5016] -translate-x-1/2 z-[-2]"></div>

               <div className="md:hidden w-[2px] h-[30px] bg-[#2D5016] my-2"></div>

               {/* Bendahara */}
               <div className="relative w-[300px] md:ml-[100px] lg:ml-[160px] bg-gradient-to-br from-[#2D5016] to-[#223d11] text-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(45,80,22,0.2)] text-center hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(45,80,22,0.4)] transition-all">
                 <p className="underline underline-offset-4 mb-3 text-sm uppercase tracking-widest font-bold">Bendahara</p>
                 <div className="space-y-1 text-[13px] font-normal leading-relaxed text-left pl-2">
                   <div>Bendahara I&nbsp;&nbsp;&nbsp;: Ayi Sugandhi, S.T</div>
                   <div>Bendahara II&nbsp;: Annisa Nahdliatul Haq, S.P</div>
                 </div>
               </div>
            </div>

            {/* LEVEL 4: 6 Bidang */}
            <div className="relative mt-8 md:mt-[50px] w-full flex flex-col items-center z-10 block">
              
              {/* Massive Horizontal Comb Bar */}
              <div className="hidden md:block absolute top-[0px] left-1/2 -translate-x-1/2 w-[540px] h-[2px] bg-[#2D5016] z-0">
                 {/* Waterfall Lines - Left Column */}
                 {/* Row 3 Line (Outer left) - drops to the 3rd box, hits left side of card */}
                 <div className="absolute top-0 h-[440px] left-[0px] w-[2px] bg-[#2D5016] -z-10"></div>
                 {/* Row 2 Line (Middle left) - drops to the 2nd box, hits middle of card */}
                 <div className="absolute top-0 h-[260px] left-[80px] w-[2px] bg-[#2D5016] -z-10"></div>
                 {/* Row 1 Line (Inner left) - drops to the 1st box, hits right side of card */}
                 <div className="absolute top-0 h-[80px] left-[160px] w-[2px] bg-[#2D5016] -z-10"></div>

                 {/* Waterfall Lines - Right Column */}
                 {/* Row 1 Line (Inner right) - drops to the 1st box, hits left side of card */}
                 <div className="absolute top-0 h-[80px] right-[160px] w-[2px] bg-[#2D5016] -z-10"></div>
                 {/* Row 2 Line (Middle right) - drops to the 2nd box, hits middle of card */}
                 <div className="absolute top-0 h-[260px] right-[80px] w-[2px] bg-[#2D5016] -z-10"></div>
                 {/* Row 3 Line (Outer right) - drops to the 3rd box, hits right side of card */}
                 <div className="absolute top-0 h-[440px] right-[0px] w-[2px] bg-[#2D5016] -z-10"></div>
              </div>

              {/* Grid of 6 Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[40px] w-max mx-auto mt-[0px] md:mt-[40px] relative z-20">
                
                {/* --- ROW 1 --- */}
                {/* Sosial */}
                <div className="bg-gradient-to-br from-[#2D5016] to-[#223d11] text-white rounded-2xl p-5 shadow-[0_8px_30px_rgb(45,80,22,0.2)] w-full md:w-[320px] flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(45,80,22,0.4)] transition-all">
                  <p className="underline underline-offset-4 mb-3 text-xs font-bold tracking-wide uppercase"><span className="text-[10px] font-semibold opacity-80">Bidang</span><br/>Sosial dan Keagamaan</p>
                  <div className="space-y-[4px] font-normal text-[13px] leading-tight opacity-90">
                     <p>Ketua : Nurdin Halekdin, S.T</p>
                     <p>Wakil : Rinaldi M Azka, S.I.Kom</p>
                  </div>
                </div>
                {/* Keakhwatan */}
                <div className="bg-gradient-to-br from-[#2D5016] to-[#223d11] text-white rounded-2xl p-5 shadow-[0_8px_30px_rgb(45,80,22,0.2)] w-full md:w-[320px] flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(45,80,22,0.4)] transition-all">
                  <p className="underline underline-offset-4 mb-3 text-xs font-bold tracking-wide uppercase"><span className="text-[10px] font-semibold opacity-80">Bidang</span><br/>Keakhwatan dan Keluarga</p>
                  <div className="space-y-[4px] font-normal text-[13px] leading-tight opacity-90">
                     <p>Ketua : Dra. Tuti Gantini</p>
                     <p>Wakil : Eva Mardhiana, S.Ag</p>
                  </div>
                </div>

                {/* --- ROW 2 --- */}
                {/* Kesehatan */}
                <div className="bg-gradient-to-br from-[#2D5016] to-[#223d11] text-white rounded-2xl p-5 shadow-[0_8px_30px_rgb(45,80,22,0.2)] w-full md:w-[320px] flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(45,80,22,0.4)] transition-all">
                  <p className="underline underline-offset-4 mb-3 text-xs font-bold tracking-wide uppercase"><span className="text-[10px] font-semibold opacity-80">Bidang</span><br/>Kesehatan dan Lingkungan</p>
                  <div className="space-y-[4px] font-normal text-[13px] leading-tight flex flex-col items-center opacity-90">
                     <div className="flex text-left"><span className="min-w-[45px]">Ketua</span><span>: Lika Apriani, dr., M.Sc, PhD</span></div>
                     <div className="flex text-left"><span className="min-w-[45px]">Wakil</span><span>: Apt Qonita Zahra, S.Farm</span></div>
                  </div>
                </div>
                {/* Pendidikan */}
                <div className="bg-gradient-to-br from-[#2D5016] to-[#223d11] text-white rounded-2xl p-5 shadow-[0_8px_30px_rgb(45,80,22,0.2)] w-full md:w-[320px] flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(45,80,22,0.4)] transition-all">
                  <p className="underline underline-offset-4 mb-3 text-xs font-bold tracking-wide uppercase"><span className="text-[10px] font-semibold opacity-80">Bidang</span><br/>Pendidikan dan Pembinaan Umat</p>
                  <div className="space-y-[4px] font-normal text-[13px] leading-tight flex flex-col items-center opacity-90">
                     <div className="flex text-left"><span className="min-w-[45px]">Ketua</span><span>: Djoko Arisworo, S.Si, M.Pd</span></div>
                     <div className="flex text-left"><span className="min-w-[45px]">Wakil</span><span>: Qonita Raihani F, S.T.P</span></div>
                  </div>
                </div>

                {/* --- ROW 3 --- */}
                {/* TI */}
                <div className="bg-gradient-to-br from-[#2D5016] to-[#223d11] text-white rounded-2xl p-5 shadow-[0_8px_30px_rgb(45,80,22,0.2)] w-full md:w-[320px] flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(45,80,22,0.4)] transition-all">
                  <p className="underline underline-offset-4 mb-3 text-xs font-bold tracking-wide uppercase"><span className="text-[10px] font-semibold opacity-80">Bidang</span><br/>Teknologi Media Informasi dan Publikasi</p>
                  <div className="space-y-[4px] font-normal text-[13px] leading-tight opacity-90">
                     <p>Ketua : Yusuf Priyanto, A.Md</p>
                     <p>Wakil : Umar Abdul Aziz, A.Md</p>
                  </div>
                </div>
                {/* Ekonomi */}
                <div className="bg-gradient-to-br from-[#2D5016] to-[#223d11] text-white rounded-2xl p-5 shadow-[0_8px_30px_rgb(45,80,22,0.2)] w-full md:w-[320px] flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(45,80,22,0.4)] transition-all">
                  <p className="underline underline-offset-4 mb-3 text-xs font-bold tracking-wide uppercase"><span className="text-[10px] font-semibold opacity-80">Bidang</span><br/>Ekonomi & Pemberdayaan Umat</p>
                  <div className="space-y-[4px] font-normal text-[13px] leading-tight opacity-90">
                     <p>Ketua : Dadan Saepulloh, S.Kom, M.Stat</p>
                     <p>Wakil : Arif Dzikrullah, S.T</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
