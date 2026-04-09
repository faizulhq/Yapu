"use client";

const ITEMS = [
  { text: "Amanah", icon: "verified" },
  { text: "Transparan", icon: "balance" },
  { text: "Peduli", icon: "favorite" },
  { text: "Santunan Anak Yatim", icon: "child_care" },
  { text: "Khitanan Massal", icon: "medical_services" },
  { text: "Inklusif", icon: "diversity_3" },
  { text: "Berkelanjutan", icon: "autorenew" },
  { text: "Program Qurban", icon: "volunteer_activism" },
  { text: "Operasi Katarak", icon: "visibility" },
  { text: "Penanaman Pohon", icon: "park" },
  { text: "Rahmatan lil 'Alamin", icon: "mosque" },
  { text: "Profesional", icon: "workspace_premium" },
  { text: "Pemberian Paket Sembako", icon: "shopping_basket" },
  { text: "Pasar Murah", icon: "storefront" },
  { text: "Pengajian Umum", icon: "menu_book" },
];

// Duplicate for seamless looping
const TICKER = [...ITEMS, ...ITEMS];

export default function MarqueeTicker() {
  return (
    <div
      className="overflow-hidden bg-[#173901] py-3.5 select-none"
      aria-hidden="true"
    >
      <div className="flex items-center whitespace-nowrap animate-marquee gap-0">
        {TICKER.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-6 text-sm font-bold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span
              className="material-symbols-outlined text-[#F8B319] text-base leading-none"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {item.icon}
            </span>
            <span className="text-white/90">{item.text}</span>
            <span className="ml-4 text-white/20 font-light">·</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
