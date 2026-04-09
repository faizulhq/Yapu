import { Metadata } from "next";
import { getImpactStats, getImpactLocations } from "@/lib/api";
import ImpactCounter from "@/components/ImpactCounter";
import MapVisualization from "@/components/MapVisualization";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dampak",
  description: "Lihat dampak nyata program YAPU — statistik, peta jangkauan, dan timeline kegiatan sejak 2018.",
};
export const revalidate = 60;

const FALLBACK_STATS = [
  { id:1, label:"Lokasi Jangkauan",        value:"27",    icon:"🗺️", order:1 },
  { id:2, label:"Penerima Manfaat Dhuafa", value:"1.000+",icon:"👥", order:2 },
  { id:3, label:"Anak Yatim Disantuni",    value:"1.000+",icon:"🧒", order:3 },
  { id:4, label:"Peserta Khitan",          value:"300+",  icon:"✂️", order:4 },
  { id:5, label:"Hewan Qurban",            value:"170+",  icon:"🐄", order:5 },
  { id:6, label:"Peserta Katarak",         value:"60+",   icon:"👁️", order:6 },
];

const timeline = [
  { year:"2018", title:"YAPU Berdiri",          desc:"Pendirian Yayasan Amanah Peduli Umat berdasarkan Akta Notaris No. 5, 5 Februari 2018 di Kota Bandung." },
  { year:"2019", title:"Program Perdana",        desc:"Pelaksanaan program sosial pertama: santunan anak yatim dan paket sembako di wilayah Bandung." },
  { year:"2020", title:"Ekspansi Wilayah",       desc:"Menjangkau wilayah Bekasi dan Jakarta Timur. Pelaksanaan khitanan massal perdana untuk 50+ peserta." },
  { year:"2021", title:"Program Kesehatan",      desc:"Operasi katarak gratis membuka akses kesehatan bagi lansia dhuafa di berbagai wilayah Jawa Barat." },
  { year:"2022", title:"Gerakan Lingkungan",     desc:"Meluncurkan Gerakan Tanam 10.000 Pohon sebagai komitmen nyata terhadap pelestarian lingkungan hidup." },
  { year:"2023", title:"Jangkauan Cilacap",      desc:"Program menjangkau Majenang, Cilacap dengan 300+ penerima manfaat dalam satu rangkaian kegiatan." },
  { year:"2024", title:"Konsolidasi & Growth",   desc:"Penguatan sistem manajemen dan peningkatan kolaborasi dengan mitra strategis dari berbagai sektor." },
  { year:"2025", title:"1.000+ Penerima Manfaat",desc:"Capaian historis: lebih dari 1.000 anak yatim dan 1.000 dhuafa telah merasakan manfaat program YAPU." },
  { year:"2026", title:"Baksos Ramadan 1447H",   desc:"Bakti Sosial terbesar mencakup 6 wilayah sekaligus, menjangkau ratusan penerima manfaat dalam satu waktu." },
];

export default async function DampakPage() {
  const [stats, locations] = await Promise.allSettled([getImpactStats(), getImpactLocations()]);
  const statList    = stats.status     === "fulfilled" && stats.value.length ? stats.value : FALLBACK_STATS;
  const locationList = locations.status === "fulfilled" ? locations.value : [];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-primary to-primary-container overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-on-primary/50 mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <Link href="/" className="hover:text-on-primary transition-colors">Beranda</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-on-primary/80">Dampak</span>
          </nav>
          <div className="flex items-center gap-3 text-secondary-container font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <span className="w-8 h-0.5 bg-secondary-container" />
            Dampak Nyata
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-on-primary leading-tight mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Dampak YAPU
          </h1>
          <p className="text-on-primary/70 max-w-xl leading-relaxed">
            Angka-angka ini bukan sekadar statistik — ini adalah wajah nyata dari mereka yang kita layani bersama selama 8 tahun.
          </p>
        </div>
      </section>

      {/* ── STATS COUNTER ── */}
      <section className="relative -mt-12 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="bg-surface-container-lowest rounded-[2rem] shadow-2xl border border-outline-variant/10 p-6 sm:p-10">
          <ImpactCounter stats={statList} />
        </div>
      </section>

      {/* ── PETA ── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 text-secondary font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <span className="w-8 h-0.5 bg-secondary" />
            Peta Jangkauan
            <span className="w-8 h-0.5 bg-secondary" />
          </div>
          <h2 className="text-4xl font-extrabold text-primary mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Wilayah yang Kami Jangkau
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-10 text-sm">
            Klik marker untuk melihat detail jumlah penerima manfaat di setiap wilayah
          </p>
          <div className="h-[500px] sm:h-[600px] rounded-[2.5rem] overflow-hidden shadow-xl border border-outline-variant/20">
            {locationList.length > 0 ? (
              <MapVisualization locations={locationList} />
            ) : (
              <div className="w-full h-full bg-surface-container flex items-center justify-center text-on-surface-variant text-sm">
                Menghubungkan ke server...
              </div>
            )}
          </div>
          {locationList.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              {locationList.map((loc) => (
                <span key={loc.id} className="text-xs bg-primary text-on-primary px-4 py-2 rounded-full font-medium">
                  {loc.name}, {loc.province} · <strong>{loc.beneficiaries_count}+</strong> penerima
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 text-secondary font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <span className="w-8 h-0.5 bg-secondary" />
              2018 — 2026
              <span className="w-8 h-0.5 bg-secondary" />
            </div>
            <h2 className="text-4xl font-extrabold text-primary" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Perjalanan YAPU
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-primary/15" />

            <div className="space-y-7">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex gap-7 pl-16">
                  {/* Dot */}
                  <div className="absolute left-5 top-2 w-5 h-5 rounded-full bg-primary border-4 border-surface shadow-md -translate-x-1/2" />
                  <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-md border border-outline-variant/10 flex-1 hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="bg-secondary-container text-on-secondary-container text-xs font-extrabold px-3 py-1 rounded-full" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {item.year}
                      </span>
                      <h3 className="font-bold text-primary text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.title}</h3>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
