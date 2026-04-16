"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { submitVolunteer, submitPartnership } from "@/lib/api";
import { Copy, CheckCircle } from "lucide-react";

/* ── TAB IDs ── */
const TABS = [
  { id: "donasi",    label: "Donasi",        icon: "volunteer_activism" },
  { id: "relawan",   label: "Sukarelawan",   icon: "groups" },
  { id: "kemitraan", label: "Kemitraan",     icon: "handshake" },
];

/* ═══════════════════════════════════════ DONASI ═══ */
function DonasiTab() {
  const [copied, setCopied] = useState(false);
  const noRek = "04070100042056 5";

  const copy = () => {
    navigator.clipboard.writeText(noRek.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Rekening card */}
      <div className="bg-primary rounded-[2rem] p-10 text-center shadow-2xl">
        <span className="material-symbols-outlined text-4xl text-secondary-container mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
          account_balance
        </span>
        <p className="text-on-primary/60 text-sm mb-2">Transfer ke rekening</p>
        <div className="text-3xl font-black text-on-primary mb-1 tracking-widest" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {noRek}
        </div>
        <p className="text-on-primary/60 text-sm mb-1">Bank BRI</p>
        <p className="text-on-primary font-bold mb-7">a.n. Yayasan Amanah Peduli Umat</p>
        <button
          onClick={copy}
          className={`inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold transition-all ${
            copied
              ? "bg-green-400 text-white"
              : "bg-secondary-container text-on-secondary-container hover:scale-105"
          }`}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {copied
            ? <><CheckCircle size={16} /> Tersalin!</>
            : <><Copy size={16} /> Salin Nomor Rekening</>
          }
        </button>
      </div>

      {/* QRIS placeholder */}
      <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/20 text-center">
        <p className="text-sm text-on-surface-variant mb-4 font-medium">Atau scan QRIS</p>
        <div className="w-44 h-44 border-2 border-dashed border-outline-variant rounded-2xl mx-auto flex items-center justify-center text-on-surface-variant text-xs">
          QRIS Coming Soon
        </div>
      </div>

      {/* Konfirmasi WA */}
      <a
        href="https://wa.me/6282126979782?text=Assalamualaikum%2C%20saya%20telah%20melakukan%20donasi%20ke%20YAPU.%20Mohon%20konfirmasinya."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full py-4 rounded-full font-bold text-sm text-white hover:scale-105 transition-transform shadow-lg"
        style={{ background: "#25D366", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5" fill="white">
          <path d="M24 4C13 4 4 13 4 24c0 3.7 1 7.2 2.8 10.2L4 44l10.1-2.7C17.1 43.1 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm8.8 28.1c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2-.3.5-1.2 1.5-1.5 1.8-.3.3-.5.4-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.4-2.8-2.6-3.2-.3-.5 0-.8.2-1 .2-.2.5-.5.7-.8.2-.3.3-.5.4-.8.1-.3 0-.6-.1-.8-.1-.2-1-2.5-1.4-3.4-.4-.9-.8-.8-1-.8h-.9c-.3 0-.8.1-1.2.6-.4.5-1.6 1.5-1.6 3.7s1.6 4.3 1.8 4.6c.2.3 3.2 4.9 7.7 6.8 1.1.5 1.9.8 2.6 1 1.1.3 2 .3 2.8.2.8-.1 2.6-1.1 3-2.1.4-1 .4-1.9.3-2.1-.2-.1-.5-.2-1-.4z" />
        </svg>
        Konfirmasi Donasi via WhatsApp
      </a>

      <p className="text-center text-xs text-on-surface-variant">
        Seluruh donasi dikelola secara amanah dan transparan. Laporan penggunaan dana dapat diakses di halaman Kabar Terbaru.
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════ RELAWAN ═══ */
function RelawanTab() {
  const [form, setForm] = useState({ full_name:"", email:"", phone:"", interest:"", domicile:"", message:"" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError("");
    try { await submitVolunteer(form); setSuccess(true); setForm({ full_name:"", email:"", phone:"", interest:"", domicile:"", message:"" }); }
    catch { setError("Terjadi kesalahan. Silakan coba lagi."); }
    finally { setLoading(false); }
  };

  if (success) return (
    <div className="max-w-lg mx-auto text-center py-16">
      <div className="w-20 h-20 rounded-full bg-primary-fixed flex items-center justify-center mx-auto mb-5">
        <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
      </div>
      <h3 className="text-2xl font-extrabold text-primary mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Pendaftaran Berhasil!</h3>
      <p className="text-on-surface-variant mb-6 text-sm">Tim YAPU akan menghubungi Anda segera melalui WhatsApp atau email.</p>
      <button onClick={() => setSuccess(false)} className="bg-primary text-on-primary px-7 py-3 rounded-full font-bold text-sm hover:bg-primary-container transition-all" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Daftar Lagi
      </button>
    </div>
  );

  const inputClass = "w-full border border-outline-variant/40 bg-surface-container-lowest rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Nama Lengkap *</label>
          <input required value={form.full_name} onChange={(e) => set("full_name", e.target.value)} className={inputClass} placeholder="Nama lengkap Anda" />
        </div>
        <div>
          <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Email *</label>
          <input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputClass} placeholder="email@contoh.com" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>No. WhatsApp *</label>
          <input required value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputClass} placeholder="08xxxxxxxxxx" />
        </div>
        <div>
          <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Domisili *</label>
          <input required value={form.domicile} onChange={(e) => set("domicile", e.target.value)} className={inputClass} placeholder="Kota Anda" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Bidang Minat *</label>
        <select required value={form.interest} onChange={(e) => set("interest", e.target.value)} className={inputClass} style={{ backgroundImage: "none" }}>
          <option value="">Pilih bidang minat</option>
          {["kesehatan","pendidikan","lingkungan","sosial","teknologi","logistik","lainnya"].map((v) => (
            <option key={v} value={v}>{v.charAt(0).toUpperCase() + v.slice(1)}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Motivasi</label>
        <textarea value={form.message} onChange={(e) => set("message", e.target.value)} rows={4}
          className={inputClass + " resize-none"} placeholder="Ceritakan motivasi Anda bergabung sebagai relawan YAPU..." />
      </div>
      {error && <p className="text-error text-sm">{error}</p>}
      <button type="submit" disabled={loading}
        className="w-full bg-primary text-on-primary font-bold py-4 rounded-full hover:bg-primary-container transition-all disabled:opacity-60 text-sm"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {loading ? "Mengirim..." : "Daftar Menjadi Relawan"}
      </button>
    </form>
  );
}

/* ═══════════════════════════════════════ KEMITRAAN ═══ */
function KemitraanTab() {
  const [form, setForm] = useState({ institution_name:"", pic_name:"", email:"", phone:"", partnership_type:"", message:"" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError("");
    try { await submitPartnership(form); setSuccess(true); setForm({ institution_name:"", pic_name:"", email:"", phone:"", partnership_type:"", message:"" }); }
    catch { setError("Terjadi kesalahan. Silakan coba lagi."); }
    finally { setLoading(false); }
  };

  const inputClass = "w-full border border-outline-variant/40 bg-surface-container-lowest rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";

  if (success) return (
    <div className="max-w-lg mx-auto text-center py-16">
      <div className="w-20 h-20 rounded-full bg-primary-fixed flex items-center justify-center mx-auto mb-5">
        <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
      </div>
      <h3 className="text-2xl font-extrabold text-primary mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Pengajuan Terkirim!</h3>
      <p className="text-on-surface-variant mb-6 text-sm">Tim YAPU akan segera menghubungi Anda untuk mendiskusikan peluang kemitraan.</p>
      <button onClick={() => setSuccess(false)} className="bg-primary text-on-primary px-7 py-3 rounded-full font-bold text-sm hover:bg-primary-container transition-all" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Ajukan Lagi</button>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto">
      {/* Kontak langsung */}
      <div className="bg-primary rounded-2xl p-6 mb-6 text-on-primary">
        <p className="font-bold text-sm mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Kontak Tim YAPU Langsung</p>
        <div className="space-y-2 text-sm text-on-primary/80">
          <p>Email: <a href="mailto:sekretariatyapu@gmail.com" className="text-secondary-container font-medium hover:underline">sekretariatyapu@gmail.com</a></p>
          <p>Telepon: <a href="tel:082240672888" className="text-secondary-container font-medium hover:underline">082240672888</a> (Rinaldi)</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Nama Lembaga *</label>
            <input required value={form.institution_name} onChange={(e) => set("institution_name", e.target.value)} className={inputClass} placeholder="Nama lembaga / organisasi" />
          </div>
          <div>
            <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Nama PIC *</label>
            <input required value={form.pic_name} onChange={(e) => set("pic_name", e.target.value)} className={inputClass} placeholder="Nama penanggung jawab" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Email *</label>
            <input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputClass} placeholder="email@lembaga.com" />
          </div>
          <div>
            <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Telepon *</label>
            <input required value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputClass} placeholder="08xxxxxxxxxx" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Jenis Kemitraan *</label>
          <select required value={form.partnership_type} onChange={(e) => set("partnership_type", e.target.value)} className={inputClass} style={{ backgroundImage: "none" }}>
            <option value="">Pilih jenis kemitraan</option>
            {[["donasi","Donasi / Sponsorship"],["program","Kolaborasi Program"],["logistik","Bantuan Logistik"],["media","Media & Publikasi"],["lainnya","Lainnya"]].map(([v,l]) => (
              <option key={v} value={v}>{l}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-on-surface-variant mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Pesan *</label>
          <textarea required value={form.message} onChange={(e) => set("message", e.target.value)} rows={4}
            className={inputClass + " resize-none"} placeholder="Jelaskan bentuk kemitraan yang ingin Anda ajukan..." />
        </div>
        {error && <p className="text-error text-sm">{error}</p>}
        <button type="submit" disabled={loading}
          className="w-full bg-primary text-on-primary font-bold py-4 rounded-full hover:bg-primary-container transition-all disabled:opacity-60 text-sm"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {loading ? "Mengirim..." : "Ajukan Kemitraan"}
        </button>
      </form>
    </div>
  );
}

/* ═══════════════════════════════════════ MAIN PAGE ═══ */
export default function MariBeraksiPage() {
  const [activeTab, setActiveTab] = useState("donasi");

  return (
    <>
      {/* ── HERO 2 KOLOM ── */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-primary to-primary-container overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-xs text-on-primary/50 mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <Link href="/" className="hover:text-on-primary transition-colors">Beranda</Link>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
                <span className="text-on-primary/80">Mari Beraksi</span>
              </nav>
              <div className="flex items-center gap-3 text-secondary-container font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <span className="w-8 h-0.5 bg-secondary-container" />
                Bergabung Bersama Kami
              </div>
              <h1 className="text-5xl font-extrabold text-on-primary leading-tight mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Mari Beraksi Bersama YAPU
              </h1>
              <p className="text-on-primary/70 leading-relaxed max-w-lg">
                Setiap langkah kebaikan Anda adalah amanah yang kami jaga. Pilih cara terbaik untuk ikut berperan dalam perubahan nyata bagi masyarakat.
              </p>
            </div>
            <div className="relative h-80 rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/drturcggf/image/upload/v1776309295/quality_restoration_20260416101236709_fvhua5.jpg"
                alt="Mari Beraksi bersama YAPU"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TAB SECTION ── */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab nav */}
          <div className="flex justify-center gap-3 mb-14">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                id={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-on-primary shadow-lg"
                    : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high border border-outline-variant/20"
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: activeTab === tab.id ? "'FILL' 1" : "'FILL' 0" }}>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "donasi"    && <DonasiTab />}
          {activeTab === "relawan"   && <RelawanTab />}
          {activeTab === "kemitraan" && <KemitraanTab />}
        </div>
      </section>
    </>
  );
}
