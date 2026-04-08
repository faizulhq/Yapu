"use client";

import { useState } from "react";
import { submitVolunteer, submitPartnership, submitContact } from "@/lib/api";
import { Copy, CheckCircle, MessageCircle, Users, Building2 } from "lucide-react";

const TABS = [
  { id: "donasi", label: "Donasi", icon: <MessageCircle size={18} /> },
  { id: "relawan", label: "Jadi Relawan", icon: <Users size={18} /> },
  { id: "kemitraan", label: "Kemitraan", icon: <Building2 size={18} /> },
];

function DonasiTab() {
  const [copied, setCopied] = useState(false);
  const noRek = "0407 0100 0420 565";

  const handleCopy = () => {
    navigator.clipboard.writeText(noRek.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-gradient-to-br from-[#2D5016] to-[#1e3710] rounded-2xl p-8 text-white text-center shadow-2xl">
        <p className="text-green-200 text-sm mb-2">Transfer ke rekening</p>
        <div className="text-4xl font-bold mb-1">{noRek}</div>
        <p className="text-green-200 text-sm mb-2">Bank BRI</p>
        <p className="text-lg font-semibold">a.n. Yayasan Amanah Peduli Umat</p>
        <button
          onClick={handleCopy}
          className={`mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            copied ? "bg-green-400 text-white" : "bg-white text-[#2D5016] hover:bg-[#E8A020] hover:text-white"
          }`}
        >
          {copied ? <><CheckCircle size={16} /> Tersalin!</> : <><Copy size={16} /> Salin Nomor Rekening</>}
        </button>
      </div>

      <div className="bg-[#F5F5F5] rounded-2xl p-6 border border-gray-200 text-center">
        <p className="text-sm text-gray-500 mb-2">Atau scan QRIS di bawah ini</p>
        <div className="w-48 h-48 bg-white border-2 border-dashed border-gray-300 rounded-xl mx-auto flex items-center justify-center text-gray-400 text-sm">
          QRIS Coming Soon
        </div>
      </div>

      <a
        href="https://wa.me/6282126979782?text=Assalamualaikum%2C%20saya%20telah%20melakukan%20donasi%20ke%20YAPU.%20Mohon%20konfirmasinya."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-semibold py-4 rounded-2xl hover:bg-[#1ebe5d] transition-all shadow-lg hover:-translate-y-0.5"
      >
        <MessageCircle size={20} /> Konfirmasi Donasi via WhatsApp
      </a>

      <p className="text-center text-xs text-gray-400">
        Seluruh donasi dikelola secara amanah dan transparan. Laporan penggunaan dana dapat diakses di halaman Kabar Terbaru.
      </p>
    </div>
  );
}

function RelawanTab() {
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", interest: "", domicile: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await submitVolunteer(form);
      setSuccess(true);
      setForm({ full_name: "", email: "", phone: "", interest: "", domicile: "", message: "" });
    } catch {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-xl mx-auto text-center py-16">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={40} className="text-[#2D5016]" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Pendaftaran Berhasil!</h3>
        <p className="text-gray-500 mb-6">Terima kasih telah mendaftar sebagai relawan YAPU. Tim kami akan menghubungi Anda segera.</p>
        <button onClick={() => setSuccess(false)} className="bg-[#2D5016] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1e3710] transition-all">
          Daftar Lagi
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap *</label>
          <input required value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent" placeholder="Nama lengkap Anda" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent" placeholder="email@contoh.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">No. HP / WhatsApp *</label>
          <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent" placeholder="08xxxxxxxxxx" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Domisili *</label>
          <input required value={form.domicile} onChange={(e) => setForm({ ...form, domicile: e.target.value })}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent" placeholder="Kota Anda" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Bidang Minat *</label>
        <select required value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent bg-white">
          <option value="">Pilih bidang minat</option>
          <option value="kesehatan">Kesehatan</option>
          <option value="pendidikan">Pendidikan</option>
          <option value="lingkungan">Lingkungan</option>
          <option value="sosial">Sosial & Kemanusiaan</option>
          <option value="teknologi">Teknologi & Dokumentasi</option>
          <option value="logistik">Logistik & Operasional</option>
          <option value="lainnya">Lainnya</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Pesan / Motivasi</label>
        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent resize-none" placeholder="Ceritakan motivasi Anda bergabung sebagai relawan YAPU..." />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" disabled={loading}
        className="w-full bg-[#2D5016] text-white font-semibold py-4 rounded-xl hover:bg-[#1e3710] transition-all disabled:opacity-60 disabled:cursor-not-allowed">
        {loading ? "Mengirim..." : "Daftar Menjadi Relawan"}
      </button>
    </form>
  );
}

function KemitraanTab() {
  const [form, setForm] = useState({ institution_name: "", pic_name: "", email: "", phone: "", partnership_type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await submitPartnership(form);
      setSuccess(true);
      setForm({ institution_name: "", pic_name: "", email: "", phone: "", partnership_type: "", message: "" });
    } catch {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-xl mx-auto text-center py-16">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={40} className="text-[#2D5016]" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Pengajuan Terkirim!</h3>
        <p className="text-gray-500 mb-6">Tim YAPU akan segera meninjau pengajuan kemitraan dari Lembaga Anda.</p>
        <button onClick={() => setSuccess(false)} className="bg-[#2D5016] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1e3710] transition-all">
          Ajukan Lagi
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-[#F5F5F5] rounded-2xl p-5 mb-6 text-sm text-gray-600 border border-gray-200">
        <p className="font-medium text-gray-800 mb-1">Kontak Langsung:</p>
        <p>Email: <a href="mailto:sekretariatyapu@gmail.com" className="text-[#2D5016] font-medium">sekretariatyapu@gmail.com</a></p>
        <p>Telepon: <a href="tel:082240672888" className="text-[#2D5016] font-medium">082240672888</a> (Rinaldi)</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lembaga *</label>
            <input required value={form.institution_name} onChange={(e) => setForm({ ...form, institution_name: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent" placeholder="Nama lembaga / organisasi" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama PIC *</label>
            <input required value={form.pic_name} onChange={(e) => setForm({ ...form, pic_name: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent" placeholder="Nama penanggung jawab" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent" placeholder="email@lembaga.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telepon *</label>
            <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent" placeholder="08xxxxxxxxxx" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Kemitraan *</label>
          <select required value={form.partnership_type} onChange={(e) => setForm({ ...form, partnership_type: e.target.value })}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent bg-white">
            <option value="">Pilih jenis kemitraan</option>
            <option value="donasi">Donasi / Sponsorship</option>
            <option value="program">Kolaborasi Program</option>
            <option value="logistik">Bantuan Logistik</option>
            <option value="media">Media & Publikasi</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pesan *</label>
          <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent resize-none" placeholder="Jelaskan bentuk kemitraan yang ingin Anda ajukan..." />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" disabled={loading}
          className="w-full bg-[#2D5016] text-white font-semibold py-4 rounded-xl hover:bg-[#1e3710] transition-all disabled:opacity-60">
          {loading ? "Mengirim..." : "Ajukan Kemitraan"}
        </button>
      </form>
    </div>
  );
}

export default function MariBeraksiPage() {
  const [activeTab, setActiveTab] = useState("donasi");

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 bg-gradient-to-br from-[#2D5016] to-[#1e3710]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">Bergabung Bersama Kami</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">Mari Beraksi</h1>
          <p className="text-green-200 max-w-xl mx-auto">Setiap langkah kebaikan Anda adalah amanah yang kami jaga dengan penuh tanggung jawab</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          {/* Tab buttons */}
          <div className="flex justify-center gap-3 mb-12">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                id={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  activeTab === tab.id
                    ? "bg-[#2D5016] text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "donasi" && <DonasiTab />}
          {activeTab === "relawan" && <RelawanTab />}
          {activeTab === "kemitraan" && <KemitraanTab />}
        </div>
      </section>
    </>
  );
}
