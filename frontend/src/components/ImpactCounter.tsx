"use client";

import { useEffect, useRef, useState } from "react";
import { ImpactStat } from "@/lib/api";

const ICONS: Record<string, string> = {
  "Lokasi Jangkauan": "map",
  "Penerima Manfaat Dhuafa": "groups",
  "Anak Yatim Disantuni": "child_care",
  "Peserta Khitan": "content_cut",
  "Hewan Qurban": "pets",
  "Peserta Katarak": "visibility",
};

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const totalFrames = Math.round(duration / 16);
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (frame >= totalFrames) { setCount(target); clearInterval(timer); }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

function StatItem({ stat, index }: { stat: ImpactStat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const numericTarget = parseInt(stat.value.replace(/\D/g, ""), 10) || 0;
  const suffix = stat.value.replace(/[\d.]/g, "");
  const count = useCountUp(numericTarget, 1800, visible);
  const icon = ICONS[stat.label] || "star";

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const displayVal = count >= 1000 ? count.toLocaleString("id-ID") : count.toString();

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-5 hover:bg-surface-container-low rounded-2xl transition-all duration-300 group cursor-default"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <span
        className="material-symbols-outlined text-secondary mb-3 text-4xl group-hover:scale-110 transition-transform"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {icon}
      </span>
      <div
        className="text-3xl font-black text-primary mb-1 tabular-nums"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {displayVal}{suffix}
      </div>
      <div className="text-on-surface-variant font-medium text-xs leading-tight">{stat.label}</div>
    </div>
  );
}

export default function ImpactCounter({ stats }: { stats: ImpactStat[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1">
      {stats.map((stat, i) => (
        <StatItem key={stat.id} stat={stat} index={i} />
      ))}
    </div>
  );
}
