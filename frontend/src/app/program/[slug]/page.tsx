import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgramDetail, getGallery, ProgramExecution } from "@/lib/api";

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

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let program;
  try { program = await getProgramDetail(slug); }
  catch { notFound(); }

  const gallery = await getGallery(slug).catch(() => []);
  const heroImg = program.image;
  const executions: ProgramExecution[] = program.executions ?? [];

  // Aggregated stats across all executions
  const totalBeneficiaries = executions.reduce((s, e) => s + e.total_beneficiaries, 0);
  const totalLocations = executions.reduce((s, e) => s + e.locations.length, 0);
  const uniqueCities = [...new Set(executions.flatMap(e => e.locations.map(l => l.city)))];

  return (
    <>
      {/* ── HERO IMAGE ── */}
      <section className="relative h-72 sm:h-[480px] overflow-hidden mt-20">
        {heroImg ? (
          <Image src={heroImg} alt={program.title} fill className="object-cover" unoptimized />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-fixed to-primary-fixed-dim" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-10">
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

      {/* ── MAIN CONTENT ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          {/* Back */}
          <Link href="/program" className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline mb-10">
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Kembali ke Daftar Program
          </Link>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* ── MAIN COLUMN ── */}
            <div className="lg:col-span-2 space-y-12">

              {/* Description */}
              <div>
                <p className="text-base text-on-surface-variant leading-relaxed pl-4 border-l-4 border-secondary-container">
                  {program.description}
                </p>
                {program.content && (
                  <div className="prose max-w-none mt-6" dangerouslySetInnerHTML={{ __html: program.content }} />
                )}
              </div>

              {/* ── STATS CARDS (only when executions exist) ── */}
              {executions.length > 0 && (
                <div>
                  <h2 className="text-xl font-extrabold text-primary mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Dampak Program
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { label: program.beneficiary_label || "Penerima Manfaat", value: totalBeneficiaries.toLocaleString("id-ID"), icon: "volunteer_activism" },
                      { label: "Lokasi Terjangkau", value: totalLocations.toLocaleString("id-ID"), icon: "location_on" },
                      { label: "Sesi Kegiatan", value: executions.length.toString(), icon: "event_available" },
                    ].map(stat => (
                      <div key={stat.label} className="bg-surface-container-lowest rounded-2xl p-5 border border-outline-variant/10 shadow-sm flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="material-symbols-outlined text-primary text-lg">{stat.icon}</span>
                        </div>
                        <div>
                          <p className="text-2xl font-extrabold text-primary leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            {stat.value}
                          </p>
                          <p className="text-xs text-on-surface-variant mt-0.5">{stat.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── EXECUTION HISTORY TIMELINE ── */}
              {executions.length > 0 && (
                <div>
                  <h2 className="text-xl font-extrabold text-primary mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Riwayat Pelaksanaan
                  </h2>
                  <div className="relative space-y-6 before:absolute before:left-4 before:top-3 before:bottom-0 before:w-0.5 before:bg-outline-variant/40">
                    {executions.map((exec, i) => (
                      <div key={exec.id} className="relative pl-12">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md">
                          <span className="text-on-primary text-xs font-bold">{executions.length - i}</span>
                        </div>

                        <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10 shadow-sm">
                          {/* Header */}
                          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                            <h3 className="font-extrabold text-on-surface text-base" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                              {exec.title}
                            </h3>
                            <span className="text-xs bg-primary/10 text-primary font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                              {formatDate(exec.date_start)}
                              {exec.date_end && exec.date_end !== exec.date_start ? ` – ${formatDate(exec.date_end)}` : ""}
                            </span>
                          </div>

                          {/* Summary */}
                          {exec.summary && (
                            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{exec.summary}</p>
                          )}

                          {/* Beneficiaries count */}
                          <div className="flex items-center gap-1.5 text-sm font-semibold text-primary mb-4">
                            <span className="material-symbols-outlined text-base">group</span>
                            {exec.total_beneficiaries.toLocaleString("id-ID")} Penerima Manfaat
                          </div>

                          {/* Locations */}
                          {exec.locations.length > 0 && (
                            <div>
                              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Lokasi Pelaksanaan</p>
                              <div className="flex flex-wrap gap-2">
                                {exec.locations.map(loc => (
                                  <div key={loc.id} className="bg-surface-container rounded-xl px-3 py-1.5 flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-secondary text-sm">location_on</span>
                                    <span className="text-xs font-medium text-on-surface">{loc.city}</span>
                                    {loc.beneficiaries > 0 && (
                                      <span className="text-xs text-on-surface-variant">· {loc.beneficiaries.toLocaleString("id-ID")}</span>
                                    )}
                                    {loc.note && (
                                      <span className="text-xs text-on-surface-variant italic">({loc.note})</span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Report link */}
                          {exec.report_url && (
                            <a
                              href={exec.report_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline"
                            >
                              <span className="material-symbols-outlined text-sm">description</span>
                              Lihat Laporan Lengkap
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── ALL CITIES REACHED ── */}
              {uniqueCities.length > 0 && (
                <div>
                  <h2 className="text-xl font-extrabold text-primary mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Wilayah yang Terjangkau
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {uniqueCities.map(city => (
                      <span key={city} className="inline-flex items-center gap-1.5 bg-secondary-container/60 text-on-secondary-container text-sm font-medium px-3 py-1.5 rounded-full">
                        <span className="material-symbols-outlined text-sm">pin_drop</span>
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* ── GALLERY ── */}
              {gallery.length > 0 && (
                <div>
                  <h2 className="text-xl font-extrabold text-primary mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Galeri Foto</h2>
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
              {/* Info Card */}
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

              {/* Quick stats (sidebar version) */}
              {executions.length > 0 && (
                <div className="bg-surface-container-lowest rounded-2xl p-7 border border-outline-variant/15 shadow-md">
                  <h3 className="font-extrabold text-primary mb-4 text-base" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Statistik</h3>
                  <div className="space-y-3">
                    {[
                      [program.beneficiary_label || "Total Penerima", totalBeneficiaries.toLocaleString("id-ID")],
                      ["Total Lokasi", totalLocations + " titik"],
                      ["Sesi Kegiatan", executions.length + " kali"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between text-sm">
                        <span className="text-on-surface-variant">{k}</span>
                        <span className="font-bold text-primary">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Donation CTA */}
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
