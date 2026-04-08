import { Metadata } from "next";
import { getImpactStats, getImpactLocations } from "@/lib/api";
import ImpactCounter from "@/components/ImpactCounter";
import MapVisualization from "@/components/MapVisualization";

export const metadata: Metadata = {
  title: "Dampak",
  description: "Lihat dampak nyata program YAPU — statistik, peta jangkauan, dan timeline kegiatan sejak 2018.",
};
export const revalidate = 60;

const timeline = [
  { year: "2018", title: "YAPU Berdiri", desc: "Pendirian Yayasan Amanah Peduli Umat berdasarkan Akta Notaris No. 5, 5 Februari 2018." },
  { year: "2019", title: "Program Perdana", desc: "Pelaksanaan program sosial pertama: santunan anak yatim dan paket sembako di Bandung." },
  { year: "2020", title: "Ekspansi Wilayah", desc: "Menjangkau wilayah Bekasi dan Jakarta Timur. Pelaksanaan khitanan massal perdana." },
  { year: "2021", title: "Program Kesehatan", desc: "Operasi katarak gratis membuka akses kesehatan bagi lansia dhuafa di Jawa Barat." },
  { year: "2022", title: "Gerakan Lingkungan", desc: "Meluncurkan Gerakan Tanam 10.000 Pohon sebagai komitmen terhadap lingkungan hidup." },
  { year: "2023", title: "Jangkauan Cilacap", desc: "Program menjangkau Majenang, Cilacap dengan 300+ penerima manfaat dalam satu kegiatan." },
  { year: "2024", title: "Consolidation & Growth", desc: "Penguatan sistem manajemen dan peningkatan kolaborasi dengan mitra strategis." },
  { year: "2025", title: "1.000+ Penerima Manfaat", desc: "Capaian historis: lebih dari 1.000 anak yatim dan 1.000 dhuafa mendapatkan manfaat YAPU." },
  { year: "2026", title: "Baksos Ramadan 1447H", desc: "Bakti Sosial terbesar mencakup 6 wilayah, menjangkau ratusan penerima manfaat sekaligus." },
];

export default async function DampakPage() {
  const [stats, locations] = await Promise.allSettled([
    getImpactStats(),
    getImpactLocations(),
  ]);
  const statList = stats.status === "fulfilled" ? stats.value : [];
  const locationList = locations.status === "fulfilled" ? locations.value : [];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 bg-gradient-to-br from-[#2D5016] to-[#1e3710]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">Dampak Nyata</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">Dampak YAPU</h1>
          <p className="text-green-200 max-w-xl mx-auto">
            Angka-angka ini bukan sekadar statistik — ini adalah wajah nyata dari mereka yang kita layani bersama
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-[#2D5016]">
        <div className="max-w-7xl mx-auto">
          {statList.length > 0 && <ImpactCounter stats={statList} />}
        </div>
      </section>

      {/* Map Full Width */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">Peta Jangkauan</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">Wilayah yang Kami Jangkau</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Klik marker untuk melihat detail jumlah penerima manfaat di setiap wilayah</p>
          </div>
          <div className="h-[500px] sm:h-[600px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            {locationList.length > 0 ? (
              <MapVisualization locations={locationList} />
            ) : (
              <div className="w-full h-full bg-green-50 flex items-center justify-center text-gray-400">
                Memuat peta...
              </div>
            )}
          </div>
          {/* Location chips */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {locationList.map((loc) => (
              <span key={loc.id} className="text-sm bg-green-50 text-[#2D5016] border border-green-200 px-4 py-2 rounded-full font-medium">
                {loc.name}, {loc.province} — <strong>{loc.beneficiaries_count}+</strong> penerima
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">2018 — 2026</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Perjalanan YAPU</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#2D5016]/20" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex gap-6 pl-14">
                  {/* Dot */}
                  <div className="absolute left-4 top-1.5 w-5 h-5 rounded-full bg-[#2D5016] border-4 border-white shadow-md -translate-x-1/2" />
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex-1 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-[#E8A020] text-white text-xs font-bold px-3 py-1 rounded-full">{item.year}</span>
                      <h3 className="font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
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
