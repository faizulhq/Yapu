import { Metadata } from "next";
import Link from "next/link";
import { getArticles } from "@/lib/api";
import NewsCard from "@/components/NewsCard";

export const metadata: Metadata = {
  title: "Kabar Terbaru",
  description: "Baca laporan kegiatan, artikel edukasi, dan berita terkini dari Yayasan Amanah Peduli Umat.",
};
export const revalidate = 60;

const TABS = [
  { id: "all",     label: "Semua" },
  { id: "laporan", label: "Laporan Kegiatan" },
  { id: "edukasi", label: "Artikel Edukasi" },
  { id: "berita",  label: "Berita" },
];

export default async function KabarTerbaruPage({
  searchParams,
}: { searchParams: Promise<{ category?: string }> }) {
  const params = await searchParams;
  const category = params.category;
  const articles = await getArticles(category && category !== "all" ? category : undefined).catch(() => []);

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
            <span className="text-on-primary/80">Kabar Terbaru</span>
          </nav>
          <div className="flex items-center gap-3 text-secondary-container font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <span className="w-8 h-0.5 bg-secondary-container" />
            Informasi Terkini
          </div>
          <h1 className="text-5xl font-extrabold text-on-primary leading-tight mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Kabar Terbaru
          </h1>
          <p className="text-on-primary/70 max-w-xl leading-relaxed">
            Laporan kegiatan, artikel edukatif, dan berita seputar YAPU dan program-program kami
          </p>
        </div>
      </section>

      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {TABS.map((tab) => {
              const isActive = category === tab.id || (!category && tab.id === "all");
              return (
                <Link
                  key={tab.id}
                  href={tab.id === "all" ? "/kabar-terbaru" : `/kabar-terbaru?category=${tab.id}`}
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

          {articles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {articles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-on-surface-variant">
              <span className="material-symbols-outlined text-5xl mb-4 block">article</span>
              <p>Belum ada artikel dalam kategori ini</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
