import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import ImpactCounter from "@/components/ImpactCounter";
import ProgramTabs from "@/components/ProgramTabs";
import MapVisualization from "@/components/MapVisualization";
import NewsCard from "@/components/NewsCard";
import {
  getPrograms, getArticles, getImpactStats, getImpactLocations, getPartners,
} from "@/lib/api";

export const metadata: Metadata = {
  title: "YAPU — Yayasan Amanah Peduli Umat",
  description: "Yayasan Amanah Peduli Umat hadir sejak 2018 — melayani dengan amanah, peduli dengan hati untuk mewujudkan Islam sebagai Rahmatan lil Alamin.",
};

export const revalidate = 60;

/* ─── fallback stats ─── */
const FALLBACK_STATS = [
  { id:1, label:"Lokasi Jangkauan",         value:"27",     icon:"🗺️", order:1 },
  { id:2, label:"Penerima Manfaat Dhuafa",  value:"1.000+", icon:"👥", order:2 },
  { id:3, label:"Anak Yatim Disantuni",     value:"1.000+", icon:"🧒", order:3 },
  { id:4, label:"Peserta Khitan",           value:"300+",   icon:"✂️", order:4 },
  { id:5, label:"Hewan Qurban",             value:"170+",   icon:"🐄", order:5 },
  { id:6, label:"Peserta Katarak",          value:"60+",    icon:"👁️", order:6 },
];

/* ─── fokus kerja tabs content ─── */
const FOKUS = [
  {
    id: "sosial",
    label: "Sosial & Keagamaan",
    icon: "mosque",
    img: "https://res.cloudinary.com/drturcggf/image/upload/v1775537341/IMG_9657_ew9nrw.jpg",
    title: "Program Sosial & Keagamaan",
    desc: "Menyelenggarakan kegiatan keagamaan dan sosial kemasyarakatan yang berorientasi pada kemaslahatan umat — dari santunan anak yatim, bakti sosial Ramadan, pasar murah, hingga pengajian umum.",
    items: ["Bakti Sosial Ramadan", "Santunan Anak Yatim & Dhuafa", "Pasar Murah", "Pengajian Umum", "Program Qurban"],
  },
  {
    id: "kesehatan",
    label: "Kesehatan & Lingkungan",
    icon: "health_and_safety",
    img: "https://res.cloudinary.com/drturcggf/image/upload/v1775537364/DSC05826_xhe3nn.jpg",
    title: "Program Kesehatan & Lingkungan",
    desc: "Memberikan layanan kesehatan gratis kepada masyarakat yang membutuhkan, sekaligus aktif menjaga kelestarian lingkungan hidup melalui gerakan penghijauan.",
    items: ["Khitanan Massal Gratis", "Operasi Katarak Gratis", "Tanam 10.000 Pohon", "Pemeriksaan Kesehatan Umum"],
  },
  {
    id: "pendidikan",
    label: "Pendidikan & Pembinaan",
    icon: "school",
    img: "https://res.cloudinary.com/drturcggf/image/upload/v1775537340/IMG_9573_datase.jpg",
    title: "Program Pendidikan & Pembinaan",
    desc: "Mengembangkan kegiatan pendidikan formal, nonformal, serta pembinaan masyarakat secara berkelanjutan untuk menciptakan generasi penerus yang berakhlak dan berdaya.",
    items: ["Pembinaan Remaja Islam", "Beasiswa Pendidikan", "Kajian Rutin", "Pembinaan Keakhwatan"],
  },
];

export default async function HomePage() {
  const [programs, articles, stats, locations, partners] = await Promise.allSettled([
    getPrograms(),
    getArticles(undefined, 3),
    getImpactStats(),
    getImpactLocations(),
    getPartners(),
  ]);

  const programList  = programs.status  === "fulfilled" ? programs.value  : [];
  const articleList  = articles.status  === "fulfilled" ? articles.value  : [];
  const statList     = stats.status     === "fulfilled" && stats.value.length ? stats.value : FALLBACK_STATS;
  const locationList = locations.status === "fulfilled" ? locations.value : [];
  const partnerList  = partners.status  === "fulfilled" ? partners.value  : [];

  return (
    <>
      {/* ══════════════════════════════════════════
          1. HERO VIDEO
      ══════════════════════════════════════════ */}
      <HeroVideo />


      {/* ══════════════════════════════════════════
          2. IMPACT COUNTER — floating card
      ══════════════════════════════════════════ */}
      <section className="relative z-30 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-surface-container-lowest rounded-[2rem] shadow-2xl overflow-hidden p-6 sm:p-8 border border-outline-variant/10">
          <ImpactCounter stats={statList} />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. TENTANG KAMI – 2 kolom
      ══════════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Foto */}
          <div className="relative pb-8 pr-4">
            <div className="relative z-10 w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/drturcggf/image/upload/v1775537367/IMG_8334_nav5bn.jpg"
                alt="Kegiatan YAPU"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {/* Quote card */}
            <div className="absolute bottom-0 right-0 bg-secondary-container p-5 rounded-2xl shadow-xl z-20 max-w-[200px]">
              <p className="text-on-secondary-container font-bold text-sm leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                &ldquo;Melayani dengan Hati, Beraksi dengan Nyata.&rdquo;
              </p>
            </div>
          </div>

          {/* Teks */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-secondary font-bold tracking-widest text-xs uppercase" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <span className="w-8 h-0.5 bg-secondary" />
              Tentang Kami
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-primary leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Yayasan Amanah Peduli Umat
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Yayasan Amanah Peduli Umat (YAPU) didirikan pada <strong className="text-on-surface">5 Februari 2018</strong> di Kota Bandung. Selama lebih dari 8 tahun, YAPU telah hadir nyata di tengah masyarakat — menghubungkan kepedulian dengan kebutuhan umat melalui program-program yang amanah, terukur, dan berdampak.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Berangkat dari visi <em className="text-primary font-semibold">&ldquo;Mewujudkan Islam sebagai Rahmatan lil &apos;Alamin&rdquo;</em>, setiap kegiatan YAPU dirancang untuk memberikan manfaat seluas-luasnya bagi umat.
            </p>

            {/* Nilai */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {["Amanah & Transparan", "Profesional", "Berkelanjutan", "Merata & Inklusif"].map((v) => (
                <div key={v} className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-container shrink-0" />
                  {v}
                </div>
              ))}
            </div>

            <Link
              href="/tentang-kami"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-7 py-3.5 rounded-full font-bold text-sm hover:bg-primary-container transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Pelajari Lebih Lanjut
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. FOKUS KERJA — Tabbed
      ══════════════════════════════════════════ */}
      <FokusKerjaSection />

      {/* ══════════════════════════════════════════
          5. PROGRAM GRID
      ══════════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 text-secondary font-bold tracking-widest text-xs uppercase mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <span className="w-8 h-0.5 bg-secondary" />
              Program YAPU
            </div>
            <h2 className="text-4xl font-extrabold text-primary leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Semua Program Kami
            </h2>
          </div>
          <Link href="/program" className="text-primary font-bold text-sm hover:underline shrink-0" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Lihat semua program →
          </Link>
        </div>
        <ProgramTabs programs={programList} />
      </section>

      {/* ══════════════════════════════════════════
          6. PETA JANGKAUAN
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 text-secondary font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <span className="w-8 h-0.5 bg-secondary" />
            Wilayah Dampak
            <span className="w-8 h-0.5 bg-secondary" />
          </div>
          <h2 className="text-4xl font-extrabold text-primary mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Jangkauan Kami
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-10 text-sm">
            Klik marker pada peta untuk melihat detail penerima manfaat di setiap wilayah
          </p>
          <div className="h-[440px] sm:h-[520px] rounded-[2rem] overflow-hidden shadow-xl border border-outline-variant/20">
            {locationList.length > 0 ? (
              <MapVisualization locations={locationList} />
            ) : (
              <div className="w-full h-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                Memuat peta...
              </div>
            )}
          </div>

          {/* Location chips */}
          {locationList.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {locationList.map((loc) => (
                <span key={loc.id} className="text-xs bg-primary text-on-primary px-4 py-2 rounded-full font-medium">
                  {loc.name} · <strong>{loc.beneficiaries_count}+</strong> penerima
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. KABAR TERBARU
      ══════════════════════════════════════════ */}
      {articleList.length > 0 && (
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-14">
              <div>
                <div className="flex items-center gap-3 text-secondary font-bold tracking-widest text-xs uppercase mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <span className="w-8 h-0.5 bg-secondary" />
                  Informasi Terkini
                </div>
                <h2 className="text-4xl font-extrabold text-primary" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Kabar Terbaru
                </h2>
              </div>
              <Link href="/kabar-terbaru" className="text-primary font-bold text-sm hover:underline shrink-0" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Lihat Semua Berita →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-7">
              {articleList.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          8. CTA — MARI BERAKSI
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-primary-container relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 text-on-primary-container/60 font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <span className="w-8 h-0.5 bg-on-primary-container/40" />
              Bergabung Bersama Kami
              <span className="w-8 h-0.5 bg-on-primary-container/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-on-primary mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Mari Beraksi
            </h2>
            <p className="text-on-primary/70 max-w-lg mx-auto text-sm">
              Setiap kontribusi Anda adalah amanah yang kami jaga. Pilih cara terbaik untuk ikut berperan dalam perubahan nyata.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "volunteer_activism", title: "Donasi", desc: "Salurkan donasi Anda untuk mendukung program sosial, kesehatan, dan lingkungan YAPU secara langsung.", href: "/mari-beraksi#donasi", cta: "Donasi Sekarang" },
              { icon: "groups", title: "Jadi Relawan", desc: "Bergabunglah bersama ratusan relawan YAPU dan kontribusikan keahlian dan semangat Anda di lapangan.", href: "/mari-beraksi#relawan", cta: "Daftar Relawan" },
              { icon: "handshake", title: "Kemitraan", desc: "Jalin kemitraan strategis bersama YAPU untuk memperluas dampak positif bagi umat yang lebih luas.", href: "/mari-beraksi#kemitraan", cta: "Ajukan Kemitraan" },
            ].map((card) => (
              <div key={card.title} className="bg-white/15 backdrop-blur-md p-9 rounded-[2rem] border border-white/25 hover:bg-white/20 transition-all hover:-translate-y-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-3xl text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>{card.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{card.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-7">{card.desc}</p>
                <Link
                  href={card.href}
                  className="inline-block bg-white text-primary-container font-bold px-6 py-2.5 rounded-full text-sm hover:bg-secondary-container hover:text-on-secondary-container transition-all mt-auto"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. MITRA STRIP
      ══════════════════════════════════════════ */}
      <section className="py-14 bg-surface-container-high overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-on-surface-variant text-xs font-bold uppercase tracking-[0.2em] mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Bekerjasama dengan
          </p>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {(partnerList.length > 0 ? partnerList.map((p) => p.name) : [
              "Bank BRI", "FK Unpad", "Universitas Pasundan", "Bank Mandiri", "PMI Kota Bandung", "BAZNAS Jabar", "LazizNU", "Rumah Zakat"
            ]).map((name) => (
              <span key={name} className="px-5 py-2.5 rounded-full border border-outline-variant text-on-surface-variant text-sm font-semibold hover:border-primary hover:text-primary transition-all cursor-default" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── FOKUS KERJA CLIENT COMPONENT ─── */
import FokusKerjaSection from "@/components/FokusKerjaSection";
