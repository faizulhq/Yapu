import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import ImpactCounter from "@/components/ImpactCounter";
import ProgramTabs from "@/components/ProgramTabs";
import MapVisualization from "@/components/MapVisualization";
import NewsCard from "@/components/NewsCard";
import { getPrograms, getArticles, getImpactStats, getImpactLocations, getPartners } from "@/lib/api";
import { HeartHandshake, Users, Building2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "YAPU — Yayasan Amanah Peduli Umat",
  description:
    "Yayasan Amanah Peduli Umat hadir sejak 2018 — melayani dengan amanah, peduli dengan hati untuk mewujudkan Islam sebagai Rahmatan lil Alamin.",
};

export const revalidate = 60;

export default async function HomePage() {
  const [programs, articles, stats, locations, partners] = await Promise.allSettled([
    getPrograms(),
    getArticles(undefined, 3),
    getImpactStats(),
    getImpactLocations(),
    getPartners(),
  ]);

  const programList = programs.status === "fulfilled" ? programs.value : [];
  const articleList = articles.status === "fulfilled" ? articles.value : [];
  const statList = stats.status === "fulfilled" ? stats.value : [];
  const locationList = locations.status === "fulfilled" ? locations.value : [];
  const partnerList = partners.status === "fulfilled" ? partners.value : [];

  return (
    <>
      {/* ── 1. HERO VIDEO ── */}
      <HeroVideo />

      {/* ── 2. IMPACT COUNTER ── */}
      <section className="bg-[#2D5016] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Dampak Nyata Bersama YAPU</h2>
            <p className="text-green-200 text-sm">Angka yang mencerminkan kepercayaan dan amanah Anda</p>
          </div>
          {statList.length > 0 ? (
            <ImpactCounter stats={statList} />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: "🗺️", value: "27", label: "Lokasi Jangkauan" },
                { icon: "👥", value: "1.000+", label: "Penerima Manfaat" },
                { icon: "🧒", value: "1.000+", label: "Anak Yatim Disantuni" },
                { icon: "✂️", value: "300+", label: "Peserta Khitan" },
                { icon: "🐄", value: "170+", label: "Hewan Qurban" },
                { icon: "👁️", value: "60+", label: "Peserta Katarak" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/10 border border-white/20">
                  <span className="text-4xl mb-3">{s.icon}</span>
                  <span className="text-3xl font-bold text-white mb-1">{s.value}</span>
                  <span className="text-sm text-green-100">{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── 3. TENTANG KAMI ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
              <Image
                src="https://res.cloudinary.com/drturcggf/image/upload/v1775537367/IMG_8229_gx244a.jpg"
                alt="Kegiatan YAPU"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#E8A020] text-white rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-bold">8+</div>
              <div className="text-xs font-medium">Tahun Melayani</div>
            </div>
          </div>
          <div className="space-y-5">
            <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">Tentang Kami</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Yayasan yang Lahir dari Kepedulian terhadap Umat
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Yayasan Amanah Peduli Umat (YAPU) didirikan pada <strong>5 Februari 2018</strong> di Bandung, berdasarkan Akta Notaris No. 5 dan disahkan Kemenkumham RI. Kami berkomitmen mewujudkan Islam sebagai <em>Rahmatan lil &apos;Alamin</em> melalui program nyata yang menyentuh kehidupan masyarakat.
            </p>
            <div className="bg-green-50 rounded-xl p-5 border-l-4 border-[#2D5016]">
              <p className="text-sm font-semibold text-[#2D5016] mb-1">Visi Kami</p>
              <p className="text-gray-700 italic">&ldquo;Mewujudkan Islam sebagai Rahmatan lil &apos;Alamin&rdquo;</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Amanah & Transparan",
                "Profesional",
                "Berkelanjutan",
                "Merata & Inklusif",
              ].map((val) => (
                <div key={val} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#E8A020] shrink-0" />
                  {val}
                </div>
              ))}
            </div>
            <Link
              href="/tentang-kami"
              className="inline-flex items-center gap-2 bg-[#2D5016] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1e3710] transition-all hover:shadow-lg hover:-translate-y-0.5 mt-2"
            >
              Kenali Kami Lebih Dekat <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. FOKUS KERJA / PROGRAM ── */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">Program Kami</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-3">Fokus Kerja YAPU</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Berbagai program nyata yang berdampak langsung pada kehidupan masyarakat di Indonesia
            </p>
          </div>
          <ProgramTabs programs={programList} />
          {programList.length > 0 && (
            <div className="text-center mt-10">
              <Link
                href="/program"
                className="inline-flex items-center gap-2 border-2 border-[#2D5016] text-[#2D5016] px-6 py-3 rounded-xl font-semibold hover:bg-[#2D5016] hover:text-white transition-all"
              >
                Lihat Semua Program <ChevronRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── 5. PETA JANGKAUAN ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">Wilayah Dampak</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-3">Peta Jangkauan YAPU</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              YAPU telah menjangkau berbagai wilayah di Pulau Jawa — klik marker peta untuk melihat detail lokasi
            </p>
          </div>
          <div className="h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            {locationList.length > 0 ? (
              <MapVisualization locations={locationList} />
            ) : (
              <div className="w-full h-full bg-green-50 flex items-center justify-center text-gray-400">
                <p>Memuat peta...</p>
              </div>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            {locationList.map((loc) => (
              <span key={loc.id} className="text-xs bg-green-50 text-[#2D5016] border border-green-200 px-3 py-1.5 rounded-full font-medium">
                {loc.name}, {loc.province} — {loc.beneficiaries_count}+ penerima
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. KABAR TERBARU ── */}
      {articleList.length > 0 && (
        <section className="py-20 px-4 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
              <div>
                <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">Informasi Terkini</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1">Kabar Terbaru</h2>
              </div>
              <Link
                href="/kabar-terbaru"
                className="text-[#2D5016] font-semibold text-sm hover:underline inline-flex items-center gap-1 shrink-0"
              >
                Lihat semua <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articleList.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 7. MARI BERAKSI CTA ── */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2D5016] to-[#1e3710] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Mari Beraksi Bersama YAPU</h2>
            <p className="text-green-200 max-w-xl mx-auto">
              Setiap kontribusi Anda adalah amanah yang kami jaga. Pilih cara terbaik untuk ikut berperan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <HeartHandshake size={32} />,
                title: "Donasi",
                desc: "Salurkan donasi Anda untuk mendukung program sosial, kesehatan, dan lingkungan YAPU.",
                href: "/mari-beraksi#donasi",
                cta: "Donasi Sekarang",
              },
              {
                icon: <Users size={32} />,
                title: "Jadi Relawan",
                desc: "Bergabung bersama ratusan relawan YAPU dan berkontribusi langsung di lapangan.",
                href: "/mari-beraksi#relawan",
                cta: "Daftar Relawan",
              },
              {
                icon: <Building2 size={32} />,
                title: "Kemitraan",
                desc: "Jalin kemitraan strategis bersama YAPU untuk memperluas dampak positif bagi umat.",
                href: "/mari-beraksi#kemitraan",
                cta: "Ajukan Kemitraan",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#E8A020] text-white flex items-center justify-center mx-auto mb-5">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-green-200 text-sm mb-6 leading-relaxed">{card.desc}</p>
                <Link
                  href={card.href}
                  className="inline-block bg-white text-[#2D5016] font-semibold px-6 py-2.5 rounded-xl hover:bg-[#E8A020] hover:text-white transition-all text-sm"
                >
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. MITRA ── */}
      {partnerList.length > 0 && (
        <section className="py-16 px-4 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-sm text-gray-400 font-medium uppercase tracking-wider mb-8">Didukung Oleh</p>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              {partnerList.map((partner) => (
                <div
                  key={partner.id}
                  className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:border-[#2D5016] hover:text-[#2D5016] transition-all"
                >
                  {partner.name}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
