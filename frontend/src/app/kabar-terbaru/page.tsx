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
  { id: "all", label: "Semua" },
  { id: "laporan", label: "Laporan Kegiatan" },
  { id: "edukasi", label: "Artikel Edukasi" },
  { id: "berita", label: "Berita" },
];

export default async function KabarTerbaruPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category;

  const articles = await getArticles(
    category && category !== "all" ? category : undefined
  ).catch(() => []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 bg-gradient-to-br from-[#2D5016] to-[#1e3710]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">Informasi Terkini</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">Kabar Terbaru</h1>
          <p className="text-green-200 max-w-xl mx-auto">
            Laporan kegiatan, artikel edukatif, dan berita seputar YAPU dan program kami
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {TABS.map((tab) => (
              <Link
                key={tab.id}
                href={tab.id === "all" ? "/kabar-terbaru" : `/kabar-terbaru?category=${tab.id}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === tab.id || (!category && tab.id === "all")
                    ? "bg-[#2D5016] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">Belum ada artikel dalam kategori ini</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
