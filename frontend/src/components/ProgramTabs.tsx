"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Program } from "@/lib/api";

interface Props {
  programs: Program[];
}

const statusBadge: Record<string, string> = {
  aktif: "text-green-700",
  selesai: "text-on-surface-variant",
  terencana: "text-blue-600",
};

export default function ProgramTabs({ programs }: Props) {
  return (
    <div>
      {/* Grid langsung — tanpa filter tab */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => (
          <Link
            key={program.id}
            href={`/program/${program.slug}`}
            className="group bg-surface-container-lowest rounded-[1.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            <div className="relative h-56 overflow-hidden">
              {program.image ? (
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary-fixed to-primary-fixed-dim" />
              )}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-primary text-[10px] font-black uppercase px-3 py-1.5 rounded-full">
                {program.category_display}
              </div>
            </div>
            <div className="p-7 flex-grow flex flex-col">
              <h3
                className="text-xl font-bold text-primary mb-3 leading-snug"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {program.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-6 text-sm flex-1 line-clamp-3">
                {program.description}
              </p>
              <div className="mt-auto pt-5 border-t border-outline-variant/20 flex justify-between items-center">
                <span className={`text-xs font-bold uppercase ${statusBadge[program.status] || ""}`}>
                  {program.status_display}
                </span>
                <span className="flex items-center gap-1 text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                  Selengkapnya →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {programs.length === 0 && (
        <div className="text-center py-16 text-on-surface-variant">
          <span className="material-symbols-outlined text-4xl mb-3 block">folder_open</span>
          <p>Belum ada program YAPU.</p>
        </div>
      )}
    </div>
  );
}
