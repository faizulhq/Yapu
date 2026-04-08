"use client";

import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/api";
import { Calendar, User, Tag } from "lucide-react";

const categoryColors: Record<string, string> = {
  laporan: "bg-blue-100 text-blue-700",
  edukasi: "bg-purple-100 text-purple-700",
  berita: "bg-orange-100 text-orange-700",
};

export default function NewsCard({ article }: { article: Article }) {
  const date = new Date(article.published_at).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/kabar-terbaru/${article.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
    >
      {/* Cover Image */}
      <div className="relative h-52 overflow-hidden">
        {article.cover_image ? (
          <Image
            src={article.cover_image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200" />
        )}
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[article.category] || "bg-gray-100 text-gray-700"}`}>
            {article.category_display}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <User size={12} />
            {article.author}
          </span>
        </div>

        <h3 className="font-semibold text-gray-900 leading-snug group-hover:text-[#2D5016] transition-colors line-clamp-2 text-base">
          {article.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
          {article.excerpt}
        </p>

        <span className="text-sm font-semibold text-[#2D5016] group-hover:underline mt-auto">
          Baca selengkapnya →
        </span>
      </div>
    </Link>
  );
}
