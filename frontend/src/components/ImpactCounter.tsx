"use client";

import { useEffect, useRef, useState } from "react";
import { ImpactStat } from "@/lib/api";

function useCountUp(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);

  return count;
}

function StatCard({ stat }: { stat: ImpactStat }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Parse number from value string like "1.000+" → 1000
  const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10) || 0;
  const suffix = stat.value.replace(/[\d.]/g, "");
  const count = useCountUp(numericValue, 2000, visible);

  const displayCount =
    count >= 1000
      ? count.toLocaleString("id-ID")
      : count.toString();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1"
    >
      <span className="text-4xl mb-3">{stat.icon}</span>
      <span className="text-3xl font-bold text-white mb-1">
        {displayCount}{suffix}
      </span>
      <span className="text-sm text-green-100 font-medium">{stat.label}</span>
    </div>
  );
}

export default function ImpactCounter({ stats }: { stats: ImpactStat[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
