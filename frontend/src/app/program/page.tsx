import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPrograms } from "@/lib/api";

export const metadata: Metadata = {
  title: "Program",
  description: "Lihat semua program YAPU — sosial, kesehatan, lingkungan, keagamaan, pendidikan, dan ekonomi.",
};

export const revalidate = 60;

const CATEGORY_TABS = [
  { id: "all", label: "Semua" },
  { id: "sosial", label: "Sosial" },
  { id: "kesehatan", label: "Kesehatan" },
  { id: "lingkungan", label: "Lingkungan" },
  { id: "keagamaan", label: "Keagamaan" },
  { id: "pendidikan", label: "Pendidikan" },
  { id: "ekonomi", label: "Ekonomi" },
];

const statusColors: Record<string, string> = {
  aktif: "bg-green-100 text-green-700",
  selesai: "bg-gray-100 text-gray-600",
  terencana: "bg-blue-100 text-blue-700",
};

export default async function ProgramPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category;
  const programs = await getPrograms(category !== "all" ? category : undefined).catch(() => []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 bg-gradient-to-br from-[#2D5016] to-[#1e3710]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">Program Kami</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">Program YAPU</h1>
          <p className="text-green-200 max-w-2xl mx-auto">
            Beragam program nyata yang menjangkau umat di berbagai bidang kehidupan
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORY_TABS.map((tab) => (
              <Link
                key={tab.id}
                href={tab.id === "all" ? "/program" : `/program?category=${tab.id}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  (category === tab.id) || (!category && tab.id === "all")
                    ? "bg-[#2D5016] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Link
                key={program.id}
                href={`/program/${program.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative h-52 overflow-hidden">
                  {program.image ? (
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200" />
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="text-xs bg-white/90 text-[#2D5016] font-semibold px-2 py-1 rounded-full">
                      {program.category_display}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[program.status]}`}>
                      {program.status_display}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-gray-900 mb-2 group-hover:text-[#2D5016] transition-colors">{program.title}</h2>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4">{program.description}</p>
                  <span className="text-sm font-semibold text-[#2D5016]">Lihat Detail →</span>
                </div>
              </Link>
            ))}
          </div>

          {programs.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">Belum ada program dalam kategori ini</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
