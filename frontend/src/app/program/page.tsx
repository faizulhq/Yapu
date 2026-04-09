import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPrograms } from "@/lib/api";

export const metadata: Metadata = {
  title: "Program",
  description: "Lihat semua program YAPU — sosial, kesehatan, lingkungan, keagamaan, pendidikan, dan ekonomi.",
};
export const revalidate = 60;

/* No static dictionary needed; dynamic images directly from Django backend will be used */

const CATEGORY_TABS = [
  { id: "all",        label: "Semua" },
  { id: "sosial",     label: "Sosial" },
  { id: "kesehatan",  label: "Kesehatan" },
  { id: "lingkungan", label: "Lingkungan" },
  { id: "keagamaan",  label: "Keagamaan" },
  { id: "pendidikan", label: "Pendidikan" },
  { id: "ekonomi",    label: "Ekonomi" },
];

const statusColor: Record<string, string> = {
  aktif:    "text-green-700",
  selesai:  "text-on-surface-variant",
  terencana:"text-blue-600",
};

export default async function ProgramPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category;
  const programs = await getPrograms(category && category !== "all" ? category : undefined).catch(() => []);

  return (
    <>
      {/* ── HERO 2 KOLOM ── */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-primary to-primary-container overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Teks */}
            <div>
              <nav className="flex items-center gap-2 text-xs text-on-primary/50 mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <Link href="/" className="hover:text-on-primary transition-colors">Beranda</Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <span className="text-on-primary/80">Program</span>
              </nav>
              <div className="flex items-center gap-3 text-secondary-container font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <span className="w-8 h-0.5 bg-secondary-container" />
                Program YAPU
              </div>
              <h1 className="text-5xl font-extrabold text-on-primary leading-tight mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Program Nyata untuk Umat
              </h1>
              <p className="text-on-primary/70 leading-relaxed max-w-lg">
                Beragam program yang berdampak langsung pada kehidupan nyata masyarakat — dari sosial, kesehatan, lingkungan, keagamaan, hingga pemberdayaan ekonomi.
              </p>
            </div>
            {/* Foto grid rotasi */}
            <div className="grid grid-cols-2 gap-3">
              {[
                "https://res.cloudinary.com/drturcggf/image/upload/v1775537341/IMG_9657_ew9nrw.jpg",
                "https://res.cloudinary.com/drturcggf/image/upload/v1775537341/IMG_9741_bk8fq5.jpg",
                "https://res.cloudinary.com/drturcggf/image/upload/v1775537364/DSC05826_xhe3nn.jpg",
                "https://res.cloudinary.com/drturcggf/image/upload/v1775537337/IMG_5076_iwnnwg.jpg",
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative h-36 rounded-2xl overflow-hidden shadow-lg"
                  style={{ transform: i % 2 === 0 ? "rotate(-1.5deg)" : "rotate(1.5deg)" }}
                >
                  <Image src={src} alt="" fill className="object-cover" unoptimized />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {CATEGORY_TABS.map((tab) => {
              const isActive = category === tab.id || (!category && tab.id === "all");
              return (
                <Link
                  key={tab.id}
                  href={tab.id === "all" ? "/program" : `/program?category=${tab.id}`}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                    isActive
                      ? "bg-primary text-on-primary shadow-md"
                      : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high border border-outline-variant/20"
                  }`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => {
              const photo = program.image;
              return (
                <Link
                  key={program.id}
                  href={`/program/${program.slug}`}
                  className="group bg-surface-container-lowest rounded-[1.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    {photo ? (
                      <Image
                        src={photo}
                        alt={program.title}
                        fill
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-fixed to-primary-fixed-dim" />
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-primary text-[10px] font-black uppercase px-3 py-1.5 rounded-full">
                      {program.category_display}
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h2 className="text-2xl font-bold text-primary mb-3 leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {program.title}
                    </h2>
                    <p className="text-on-surface-variant leading-relaxed mb-7 text-sm flex-1 line-clamp-3">
                      {program.description}
                    </p>
                    <div className="mt-auto pt-5 border-t border-outline-variant/15 flex justify-between items-center">
                      <span className={`text-xs font-bold uppercase ${statusColor[program.status] || ""}`}>
                        {program.status_display}
                      </span>
                      <span className="flex items-center gap-1 text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                        Selengkapnya →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {programs.length === 0 && (
            <div className="text-center py-20 text-on-surface-variant">
              <span className="material-symbols-outlined text-5xl mb-4 block">folder_open</span>
              <p>Belum ada program dalam kategori ini</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
