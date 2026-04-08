import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleDetail, getGallery } from "@/lib/api";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getArticleDetail(slug);
    return {
      title: article.title,
      description: article.excerpt,
      openGraph: { images: [article.cover_image] },
    };
  } catch {
    return { title: "Artikel tidak ditemukan" };
  }
}

const categoryColors: Record<string, string> = {
  laporan: "bg-blue-100 text-blue-700",
  edukasi: "bg-purple-100 text-purple-700",
  berita: "bg-orange-100 text-orange-700",
};

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let article;
  try {
    article = await getArticleDetail(slug);
  } catch {
    notFound();
  }

  const gallery = await getGallery().catch(() => []);
  const relatedGallery = gallery.filter(
    (g) => g.article_slug === slug
  );

  const date = new Date(article.published_at).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const waShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `${article.title} — Baca di YAPU: https://yapu.or.id/kabar-terbaru/${article.slug}`
  )}`;

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-72 sm:h-[480px] overflow-hidden mt-20">
        {article.cover_image ? (
          <Image src={article.cover_image} alt={article.title} fill className="object-cover" unoptimized />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-300" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/kabar-terbaru" className="inline-flex items-center gap-2 text-sm text-[#2D5016] font-medium hover:underline mb-8">
            <ArrowLeft size={16} /> Kembali ke Kabar Terbaru
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap gap-3 items-center mb-5">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[article.category] || "bg-gray-100 text-gray-700"}`}>
              {article.category_display}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-500">
              <Calendar size={14} />
              {date}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-500">
              <User size={14} />
              {article.author}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
            {article.title}
          </h1>

          <p className="text-lg text-gray-500 border-l-4 border-[#E8A020] pl-4 mb-10 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Rich Text Content */}
          {article.content && (
            <div
              className="prose prose-lg prose-p:text-gray-700 prose-h2:text-gray-900 prose-h3:text-gray-800 prose-strong:text-gray-900 prose-a:text-[#2D5016] max-w-none leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          )}

          {/* Gallery */}
          {relatedGallery.length > 0 && (
            <div className="mt-14">
              <h3 className="text-xl font-bold text-gray-900 mb-5">Galeri Foto</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {relatedGallery.map((item) => (
                  <div key={item.id} className="relative h-44 rounded-xl overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover hover:scale-105 transition-transform" unoptimized />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4 font-medium">Bagikan artikel ini:</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={waShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1ebe5d] transition-all"
              >
                <Share2 size={16} /> Bagikan via WhatsApp
              </a>
              <Link
                href="/mari-beraksi"
                className="inline-flex items-center gap-2 bg-[#2D5016] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1e3710] transition-all"
              >
                Dukung YAPU
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
