"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { submitContact } from "@/lib/api";

export default function KontakPage() {
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await submitContact(form);
      setSuccess(true);
      setForm({ full_name: "", email: "", phone: "", message: "" });
    } catch {
      setError("Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={22} className="text-[#E8A020]" />,
      label: "Alamat Kantor",
      value: "Jl. Aditya A-23, Taman Cipadung Indah, RT 02 RW 01, Kel. Cipadung Kidul, Kec. Panyileukan, Kota Bandung, Jawa Barat 40614",
    },
    {
      icon: <Mail size={22} className="text-[#E8A020]" />,
      label: "Email",
      value: "sekretariatyapu@gmail.com",
      href: "mailto:sekretariatyapu@gmail.com",
    },
    {
      icon: <Phone size={22} className="text-[#E8A020]" />,
      label: "Telepon / WhatsApp",
      value: "082240672888 (Rinaldi) | 087870124682 (Maryam)",
    },
    {
      icon: <Clock size={22} className="text-[#E8A020]" />,
      label: "Jam Operasional",
      value: "Senin – Jumat: 08.00 – 17.00 WIB",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 bg-gradient-to-br from-[#2D5016] to-[#1e3710]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">Hubungi Kami</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">Kontak YAPU</h1>
          <p className="text-green-200 max-w-xl mx-auto">
            Ada pertanyaan atau ingin berkolaborasi? Kami siap mendengar dan merespons Anda
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info + Map */}
          <div className="space-y-6">
            {contactInfo.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 flex gap-4 items-start hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-semibold text-[#2D5016] hover:underline">{item.value}</a>
                  ) : (
                    <p className="text-sm font-semibold text-gray-800">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-64">
              <iframe
                title="Peta Lokasi YAPU"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.897!2d107.7050!3d-6.9395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTYnMjIuMiJTIDEwN8KwNDInMTguMCJF!5e0!3m2!1sid!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Kirim Pesan</h2>
            <p className="text-gray-500 text-sm mb-7">Kami akan merespons pesan Anda dalam 1–2 hari kerja.</p>

            {success ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={40} className="text-[#2D5016]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pesan Terkirim!</h3>
                <p className="text-gray-500 text-sm mb-5">Tim YAPU akan segera menghubungi Anda.</p>
                <button onClick={() => setSuccess(false)} className="bg-[#2D5016] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#1e3710] transition-all text-sm">
                  Kirim Pesan Lagi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap *</label>
                    <input required value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016]" placeholder="Nama Anda" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016]" placeholder="email@contoh.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">No. Telepon</label>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016]" placeholder="08xxxxxxxxxx (opsional)" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pesan *</label>
                  <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5016] resize-none" placeholder="Sampaikan pertanyaan atau pesan Anda..." />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#2D5016] text-white font-semibold py-4 rounded-xl hover:bg-[#1e3710] transition-all disabled:opacity-60">
                  <Send size={18} />
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
