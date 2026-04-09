"use client";

const PARTNERS = [
  { name: "Bank BRI",        icon: "account_balance" },
  { name: "FK Unpad",        icon: "school" },
  { name: "PMI",             icon: "emergency" },
  { name: "BAZNAS",          icon: "volunteer_activism" },
  { name: "Pemkot Bandung",  icon: "location_city" },
  { name: "Rumah Zakat",     icon: "home" },
  { name: "BGS Jabar",       icon: "groups" },
  { name: "Dinas Sosial",    icon: "handshake" },
];

export default function PartnerTrustBar() {
  return (
    <div className="bg-white border-y border-outline-variant/15 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-6">
        {/* Label kiri */}
        <div
          className="shrink-0 text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest whitespace-nowrap border-r border-outline-variant/20 pr-6"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Dipercaya &amp;<br className="hidden sm:block" /> Bermitra dengan
        </div>

        {/* Partner list — scrollable on mobile */}
        <div className="flex items-center gap-1 overflow-x-auto w-full scrollbar-hide">
          {PARTNERS.map((p, i) => (
            <div
              key={p.name}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-surface-container-low transition-colors group shrink-0"
            >
              <span
                className="material-symbols-outlined text-secondary text-lg group-hover:scale-110 transition-transform"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {p.icon}
              </span>
              <span
                className="text-sm font-semibold text-on-surface-variant group-hover:text-primary transition-colors whitespace-nowrap"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {p.name}
              </span>
              {i < PARTNERS.length - 1 && (
                <span className="ml-1 text-outline-variant/40 select-none">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
