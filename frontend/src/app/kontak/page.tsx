"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { submitContact } from "@/lib/api";

const INFO = [
  { icon: "location_on", label: "Alamat Kantor", value: "Jl. Aditya A-23, Taman Cipadung Indah, RT 02 RW 01, Kel. Cipadung Kidul, Kec. Panyileukan, Kota Bandung, Jawa Barat 40614" },
  { icon: "mail", href: "mailto:sekretariatyapu@gmail.com", label: "Email", value: "sekretariatyapu@gmail.com" },
  { icon: "phone", label: "Telepon / WhatsApp", value: "082240672888 (Rinaldi)  |  087870124682 (Maryam)" },
  { icon: "schedule", label: "Jam Operasional", value: "Senin – Jumat: 08.00 – 17.00 WIB" },
];

export default function KontakPage() {
  const [form, setForm] = useState({ full_name:"", email:"", phone:"", message:"" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError("");
    try { await submitContact(form); setSuccess(true); setForm({ full_name:"", email:"", phone:"", message:"" }); }
    catch { setError("Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung."); }
    finally { setLoading(false); }
  };

  const inputClass = "w-full border border-outline-variant/40 bg-surface-container-lowest rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-primary to-primary-container overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-on-primary/50 mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <Link href="/" className="hover:text-on-primary transition-colors">Beranda</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-on-primary/80">Kontak</span>
          </nav>
          <div className="flex items-center gap-3 text-secondary-container font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <span className="w-8 h-0.5 bg-secondary-container" />
            Hubungi Kami
          </div>
          <h1 className="text-5xl font-extrabold text-on-primary leading-tight mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Kontak YAPU
          </h1>
          <p className="text-on-primary/70 max-w-xl leading-relaxed">
            Ada pertanyaan, ingin berkolaborasi, atau sekadar menyapa? Kami siap mendengar dan merespons Anda.
          </p>
        </div>
      </section>

      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          {/* ── INFO CARDS ── */}
          <div className="space-y-5">
            {INFO.map((item, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-2xl p-6 shadow-md border border-outline-variant/10 flex gap-4 items-start hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {item.icon}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-semibold text-primary hover:text-primary-container transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-sm font-semibold text-on-surface">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-outline-variant/20 h-64">
              <iframe
                title="Peta Lokasi YAPU"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9!2d107.705!3d-6.9395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sid!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── FORM ── */}
          <div className="bg-surface-container-lowest rounded-[2rem] p-8 shadow-xl border border-outline-variant/10">
            <h2 className="text-2xl font-extrabold text-primary mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Kirim Pesan</h2>
            <p className="text-on-surface-variant text-sm mb-8">Kami merespons dalam 1–2 hari kerja.</p>

            {success ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 rounded-full bg-primary-fixed flex items-center justify-center mx-auto mb-5">
                  <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <h3 className="text-xl font-extrabold text-primary mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Pesan Terkirim!</h3>
                <p className="text-on-surface-variant text-sm mb-6">Tim YAPU akan segera menghubungi Anda.</p>
                <button onClick={() => setSuccess(false)}
                  className="bg-primary text-on-primary px-7 py-3 rounded-full font-bold text-sm hover:bg-primary-container transition-all"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Kirim Pesan Lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Nama Lengkap *</label>
                    <input required value={form.full_name} onChange={(e) => set("full_name", e.target.value)} className={inputClass} placeholder="Nama Anda" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Email *</label>
                    <input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputClass} placeholder="email@contoh.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>No. Telepon</label>
                  <input value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputClass} placeholder="08xxxxxxxxxx (opsional)" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Pesan *</label>
                  <textarea required value={form.message} onChange={(e) => set("message", e.target.value)} rows={5}
                    className={inputClass + " resize-none"} placeholder="Sampaikan pertanyaan atau pesan Anda..." />
                </div>
                {error && <p className="text-error text-sm">{error}</p>}
                <button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary font-bold py-4 rounded-full hover:bg-primary-container transition-all disabled:opacity-60 text-sm"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <Send size={16} />
                  {loading ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
