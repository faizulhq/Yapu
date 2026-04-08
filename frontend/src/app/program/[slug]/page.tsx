import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgramDetail, getGallery } from "@/lib/api";
import { ArrowLeft, Calendar, Tag, CheckCircle } from "lucide-react";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const program = await getProgramDetail(slug);
    return { title: program.title, description: program.description };
  } catch {
    return { title: "Program tidak ditemukan" };
  }
}

const statusColors: Record<string, string> = {
  aktif: "bg-green-100 text-green-700",
  selesai: "bg-gray-100 text-gray-600",
  terencana: "bg-blue-100 text-blue-700",
};

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let program;
  try {
    program = await getProgramDetail(slug);
  } catch {
    notFound();
  }

  const gallery = await getGallery(slug).catch(() => []);

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-80 sm:h-[450px] overflow-hidden">
        {program.image ? (
          <Image src={program.image} alt={program.title} fill className="object-cover" unoptimized />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-300" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-2 mb-3">
              <span className="text-xs bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm">
                {program.category_display}
              </span>
              <span className={`text-xs px-3 py-1 rounded-full font-semibold ${statusColors[program.status]}`}>
                {program.status_display}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">{program.title}</h1>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/program" className="inline-flex items-center gap-2 text-sm text-[#2D5016] font-medium hover:underline mb-8">
            <ArrowLeft size={16} /> Kembali ke Program
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-600 leading-relaxed mb-6 border-l-4 border-[#E8A020] pl-4">
                {program.description}
              </p>

              {program.content && (
                <div
                  className="prose prose-green max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: program.content }}
                />
              )}

              {/* Gallery */}
              {gallery.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-5">Galeri Foto</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {gallery.map((item) => (
                      <div key={item.id} className="relative h-40 rounded-xl overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover hover:scale-105 transition-transform" unoptimized />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[#F5F5F5] rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Info Program</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Kategori</span>
                    <span className="font-medium text-gray-900">{program.category_display}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Status</span>
                    <span className={`font-semibold text-xs px-2 py-1 rounded-full ${statusColors[program.status]}`}>
                      {program.status_display}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Diperbarui</span>
                    <span className="font-medium text-gray-900">
                      {new Date(program.updated_at).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#2D5016] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Dukung Program Ini</h3>
                <p className="text-green-200 text-sm mb-5">Kontribusi Anda akan langsung berdampak pada program ini.</p>
                <Link href="/mari-beraksi#donasi" className="block w-full text-center bg-[#E8A020] text-white font-semibold py-3 rounded-xl hover:bg-[#c4861a] transition-all">
                  Donasi Sekarang
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
