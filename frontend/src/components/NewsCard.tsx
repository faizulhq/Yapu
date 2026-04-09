"use client";

import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/api";

const categoryColors: Record<string, { bg: string; text: string }> = {
  laporan: { bg: "bg-blue-100", text: "text-blue-700" },
  edukasi: { bg: "bg-purple-100", text: "text-purple-700" },
  berita:  { bg: "bg-secondary-container", text: "text-on-secondary-container" },
};

export default function NewsCard({ article }: { article: Article }) {
  const date = new Date(article.published_at).toLocaleDateString("id-ID", {
    day: "numeric", month: "long", year: "numeric",
  });
  const cat = categoryColors[article.category] || { bg: "bg-surface-container", text: "text-on-surface-variant" };

  return (
    <Link
      href={`/kabar-terbaru/${article.slug}`}
      className="group bg-surface-container-low rounded-[1.5rem] overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
    >
      {/* Cover */}
      <div className="relative aspect-video overflow-hidden">
        {article.cover_image ? (
          <Image
            src={article.cover_image}
            alt={article.title}
            fill
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            unoptimized
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-fixed to-on-primary-container" />
        )}
        <div className={`absolute top-4 left-4 ${cat.bg} ${cat.text} px-3 py-1 rounded-full text-[10px] font-black uppercase backdrop-blur-sm`}>
          {article.category_display}
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <span className="text-xs text-on-surface-variant font-medium">{date}</span>
        <h3
          className="text-xl font-bold text-primary mt-2 mb-3 group-hover:text-secondary transition-colors line-clamp-2 leading-snug"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {article.title}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3 flex-1">
          {article.excerpt}
        </p>
        <div className="mt-5 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
          <span className="text-xs text-on-surface-variant">{article.author}</span>
          <span className="text-primary font-bold text-sm group-hover:underline">Baca →</span>
        </div>
      </div>
    </Link>
  );
}
