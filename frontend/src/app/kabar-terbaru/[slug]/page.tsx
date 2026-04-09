import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleDetail } from "@/lib/api";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getArticleDetail(slug);
    return { title: article.title, description: article.excerpt, openGraph: { images: [article.cover_image] } };
  } catch { return { title: "Artikel tidak ditemukan" }; }
}

const catColor: Record<string, string> = {
  laporan: "bg-blue-100 text-blue-700",
  edukasi: "bg-purple-100 text-purple-700",
  berita:  "bg-secondary-container text-on-secondary-container",
};

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let article;
  try { article = await getArticleDetail(slug); }
  catch { notFound(); }

  const date = new Date(article.published_at).toLocaleDateString("id-ID", { day:"numeric", month:"long", year:"numeric" });
  const waShare = `https://wa.me/?text=${encodeURIComponent(article.title + " — Baca di YAPU: https://yapu.or.id/kabar-terbaru/" + article.slug)}`;

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-64 sm:h-[460px] overflow-hidden mt-20">
        {article.cover_image ? (
          <Image src={article.cover_image} alt={article.title} fill className="object-cover" unoptimized />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-fixed to-primary-fixed-dim" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </section>

      <section className="py-14 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <Link href="/kabar-terbaru" className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline mb-8">
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Kembali ke Kabar Terbaru
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap gap-3 items-center mb-5">
            <span className={`text-[10px] font-black uppercase px-3 py-1.5 rounded-full ${catColor[article.category] || "bg-surface-container text-on-surface-variant"}`}>
              {article.category_display}
            </span>
            <span className="text-xs text-on-surface-variant">{date}</span>
            <span className="text-xs text-on-surface-variant font-medium">{article.author}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {article.title}
          </h1>

          <p className="text-base text-on-surface-variant pl-4 border-l-4 border-secondary-container mb-10 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Rich text */}
          {article.content && (
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
          )}

          {/* Share */}
          <div className="mt-14 pt-8 border-t border-outline-variant/20">
            <p className="text-sm text-on-surface-variant mb-4 font-semibold">Bagikan artikel ini:</p>
            <div className="flex flex-wrap gap-3">
              <a href={waShare} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full text-sm hover:scale-105 transition-transform shadow-md"
                style={{ background: "#25D366", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-4 h-4" fill="white">
                  <path d="M24 4C13 4 4 13 4 24c0 3.7 1 7.2 2.8 10.2L4 44l10.1-2.7C17.1 43.1 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4z" />
                </svg>
                Bagikan via WhatsApp
              </a>
              <Link href="/mari-beraksi"
                className="bg-primary text-on-primary font-bold px-6 py-3 rounded-full text-sm hover:bg-primary-container transition-all"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Dukung YAPU
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
