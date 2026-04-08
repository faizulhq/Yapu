"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Program } from "@/lib/api";

const TABS = [
  { id: "all", label: "Semua" },
  { id: "sosial", label: "Sosial & Keagamaan" },
  { id: "kesehatan", label: "Kesehatan & Lingkungan" },
  { id: "pendidikan", label: "Pendidikan & Pembinaan" },
  { id: "ekonomi", label: "Ekonomi & Pemberdayaan" },
];

const statusColors: Record<string, string> = {
  aktif: "bg-green-100 text-green-700",
  selesai: "bg-gray-100 text-gray-600",
  terencana: "bg-blue-100 text-blue-700",
};

const categoryMap: Record<string, string[]> = {
  "sosial": ["sosial", "keagamaan"],
  "kesehatan": ["kesehatan", "lingkungan"],
  "pendidikan": ["pendidikan"],
  "ekonomi": ["ekonomi"],
};

export default function ProgramTabs({ programs }: { programs: Program[] }) {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = programs.filter((p) => {
    if (activeTab === "all") return true;
    const cats = categoryMap[activeTab] || [activeTab];
    return cats.includes(p.category);
  });

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-[#2D5016] text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Program grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((program) => (
          <Link
            key={program.id}
            href={`/program/${program.slug}`}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
          >
            <div className="relative h-48 overflow-hidden">
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
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="text-xs bg-white/90 text-[#2D5016] font-semibold px-2 py-1 rounded-full">
                  {program.category_display}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[program.status] || "bg-gray-100"}`}>
                  {program.status_display}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#2D5016] transition-colors line-clamp-2">
                {program.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                {program.description}
              </p>
              <span className="text-sm font-semibold text-[#2D5016]">
                Lihat Program →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p>Belum ada program dalam kategori ini</p>
        </div>
      )}
    </div>
  );
}
