import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgramDetail, getGallery } from "@/lib/api";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const p = await getProgramDetail(slug);
    return { title: p.title, description: p.description };
  } catch { return { title: "Program tidak ditemukan" }; }
}

const statusColor: Record<string, string> = {
  aktif:    "bg-green-100 text-green-700",
  selesai:  "bg-surface-container text-on-surface-variant",
  terencana:"bg-blue-100 text-blue-700",
};

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let program;
  try { program = await getProgramDetail(slug); }
  catch { notFound(); }

  const gallery = await getGallery(slug).catch(() => []);
  const heroImg = program.image;

  return (
    <>
      {/* ── HERO IMAGE ── */}
      <section className="relative h-72 sm:h-[480px] overflow-hidden mt-20">
        {heroImg ? (
          <Image src={heroImg} alt={program.title} fill className="object-cover" unoptimized />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-fixed to-primary-fixed-dim" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm font-semibold">
                {program.category_display}
              </span>
              <span className={`text-xs px-3 py-1 rounded-full font-bold ${statusColor[program.status] || ""}`}>
                {program.status_display}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {program.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          {/* Back */}
          <Link href="/program" className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline mb-10">
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Kembali ke Daftar Program
          </Link>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* ── MAIN ── */}
            <div className="lg:col-span-2">
              <p className="text-base text-on-surface-variant leading-relaxed mb-6 pl-4 border-l-4 border-secondary-container">
                {program.description}
              </p>

              {program.content && (
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: program.content }} />
              )}

              {/* Gallery */}
              {gallery.length > 0 && (
                <div className="mt-14">
                  <h3 className="text-xl font-extrabold text-primary mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Galeri Foto</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {gallery.map((item) => (
                      <div key={item.id} className="relative h-44 rounded-2xl overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-5">
              <div className="bg-surface-container-lowest rounded-2xl p-7 border border-outline-variant/15 shadow-md">
                <h3 className="font-extrabold text-primary mb-5 text-base" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Info Program</h3>
                <div className="space-y-3">
                  {[
                    ["Kategori", program.category_display],
                    ["Status", program.status_display],
                    ["Diperbarui", new Date(program.updated_at).toLocaleDateString("id-ID", { day:"numeric",month:"long",year:"numeric" })],
                  ].map(([k,v]) => (
                    <div key={k} className="flex justify-between text-sm">
                      <span className="text-on-surface-variant">{k}</span>
                      <span className="font-semibold text-on-surface">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-7 text-on-primary">
                <h3 className="font-extrabold mb-2 text-base" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Dukung Program Ini</h3>
                <p className="text-on-primary/70 text-sm mb-5">Kontribusi Anda akan langsung berdampak pada program ini.</p>
                <Link href="/mari-beraksi#donasi"
                  className="block w-full text-center bg-secondary-container text-on-secondary-container font-bold py-3 rounded-full text-sm hover:scale-105 transition-transform"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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
