import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Eye, Target, Repeat } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Mengenal Yayasan Amanah Peduli Umat — sejarah, visi, misi, nilai, dan struktur kepengurusan YAPU sejak 2018.",
};

const misi = [
  "Menyelenggarakan kegiatan keagamaan serta sosial kemasyarakatan yang berorientasi pada kemaslahatan umat.",
  "Menyelenggarakan layanan kesehatan masyarakat serta berperan aktif dalam pelestarian dan pemanfaatan lingkungan hidup.",
  "Mengembangkan dan mengelola media informasi YAPU serta memanfaatkan teknologi informasi dan komunikasi untuk layanan yang amanah, transparan, dan terpercaya.",
  "Menyelenggarakan kegiatan pendidikan formal dan nonformal serta pembinaan masyarakat secara berkelanjutan.",
  "Menyelenggarakan pembinaan keakhwatan serta penguatan ketahanan keluarga sebagai pelanjut nilai dan amanah umat.",
  "Mengembangkan aktivitas ekonomi berbasis kewirausahaan untuk pemberdayaan dan kemandirian umat.",
];

const pengurus = [
  { nama: "Prof. Dr. Cartono, S.Pd., M.Pd., M.T", jabatan: "Ketua Umum", inisial: "C" },
  { nama: "H. Muhammad Hasan, B.Sc", jabatan: "Pembina", inisial: "H" },
  { nama: "Drs. Ikhsan Matondang, M.Si", jabatan: "Pengawas", inisial: "I" },
  { nama: "Dedi Herdiyana, S.T", jabatan: "Pengawas", inisial: "D" },
  { nama: "Aji Pamoso, S.Si, M.T", jabatan: "Sekretaris I", inisial: "A" },
  { nama: "Maryam Nurbaitsah Haq, S.Mat", jabatan: "Sekretaris II", inisial: "M" },
  { nama: "Ayi Sugandhi, S.T", jabatan: "Bendahara I", inisial: "A" },
  { nama: "Annisa Nahdliatul Haq, S.P", jabatan: "Bendahara II", inisial: "A" },
];

const nilaiUtama = [
  { icon: "shield", label: "Amanah", desc: "Setiap kepercayaan dan donasi dijaga dengan penuh tanggung jawab dan integritas." },
  { icon: "visibility", label: "Transparansi", desc: "Laporan keuangan dan kegiatan tersedia secara terbuka untuk publik." },
  { icon: "workspace_premium", label: "Profesional", desc: "Setiap program dirancang dan dilaksanakan dengan standar manajemen tinggi." },
  { icon: "autorenew", label: "Berkelanjutan", desc: "Dampak jangka panjang menjadi prioritas dalam setiap rancangan program YAPU." },
];

export default function TentangKamiPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-primary to-primary-container">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-on-primary/50 mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <Link href="/" className="hover:text-on-primary transition-colors">Beranda</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-on-primary/80">Tentang Kami</span>
          </nav>

          <div className="flex items-center gap-3 text-secondary-container font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <span className="w-8 h-0.5 bg-secondary-container" />
            Yayasan Amanah Peduli Umat
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-on-primary leading-tight mb-4 max-w-2xl" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Tentang YAPU
          </h1>
          <p className="text-on-primary/70 max-w-xl text-lg leading-relaxed">
            Mengenal lebih dekat lembaga sosial-keagamaan yang berdiri dengan penuh amanah sejak 2018 di Kota Bandung
          </p>
        </div>
      </section>

      {/* ── SEJARAH ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="https://res.cloudinary.com/drturcggf/image/upload/v1775537367/IMG_8334_nav5bn.jpg"
                alt="Sejarah YAPU"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {/* Year badge */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-container rounded-2xl flex flex-col items-center justify-center shadow-xl z-20">
              <span className="text-3xl font-black text-on-secondary-container" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>8+</span>
              <span className="text-[10px] font-bold text-on-secondary-container/70 uppercase">Tahun</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-primary-fixed/30 blur-3xl -z-10" />
          </div>

          <div>
            <div className="flex items-center gap-3 text-secondary font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <span className="w-8 h-0.5 bg-secondary" />
              Sejarah
            </div>
            <h2 className="text-4xl font-extrabold text-primary leading-tight mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Lahir dari Kepedulian terhadap Umat
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed text-sm">
              <p>
                Yayasan Amanah Peduli Umat (YAPU) didirikan pada <strong className="text-on-surface">5 Februari 2018</strong> berdasarkan Akta Notaris Ir. Sri Wahjuni, M.Sc., S.H., M.H., M.Kn. Nomor 5, dan telah disahkan oleh Kemenkumham RI.
              </p>
              <p>
                Berakar di Kota Bandung, YAPU lahir dari keprihatinan sekelompok insan yang tergerak untuk hadir nyata di tengah masyarakat — mempertemukan kepedulian dengan kebutuhan umat melalui program-program yang amanah, terukur, dan berdampak.
              </p>
              <p>
                Selama lebih dari 8 tahun, YAPU telah menjangkau ribuan penerima manfaat di berbagai wilayah Jawa — dari kegiatan sosial, kesehatan, lingkungan, hingga pemberdayaan ekonomi dan pendidikan.
              </p>
            </div>

            {/* Legalitas */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/30">
                <p className="text-xs text-on-surface-variant mb-1">Akta Notaris</p>
                <p className="font-bold text-on-surface text-sm">No. 5 · 5 Februari 2018</p>
              </div>
              <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/30">
                <p className="text-xs text-on-surface-variant mb-1">SK Kemenkumham RI</p>
                <p className="font-bold text-on-surface text-sm">AHU-0002233.AH.01.04 Tahun 2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISI & MISI ── */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Visi */}
          <div className="bg-primary rounded-[2rem] p-10 text-center mb-10 shadow-xl">
            <p className="text-on-primary/60 font-bold text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Visi
            </p>
            <blockquote className="text-3xl sm:text-4xl font-extrabold text-on-primary leading-snug" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              &ldquo;Mewujudkan Islam sebagai{" "}
              <span className="text-secondary-container">Rahmatan lil &apos;Alamin</span>&rdquo;
            </blockquote>
          </div>

          {/* Misi */}
          <div>
            <h3 className="text-center text-2xl font-extrabold text-primary mb-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Enam Pilar Misi YAPU
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {misi.map((item, i) => (
                <div key={i} className="bg-surface-container-lowest rounded-2xl p-6 shadow-md border border-outline-variant/10 flex gap-4 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm shrink-0" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {i + 1}
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NILAI UTAMA ── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 text-secondary font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            <span className="w-8 h-0.5 bg-secondary" />
            Nilai Utama
            <span className="w-8 h-0.5 bg-secondary" />
          </div>
          <h2 className="text-3xl font-extrabold text-primary" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Prinsip yang Memandu Langkah Kami
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nilaiUtama.map((nilai) => (
            <div key={nilai.label} className="bg-surface-container-low rounded-[1.5rem] p-8 border border-outline-variant/10 hover:shadow-xl hover:-translate-y-1 transition-all text-center group">
              <div className="w-14 h-14 rounded-2xl bg-primary text-on-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{nilai.icon}</span>
              </div>
              <h3 className="font-extrabold text-primary mb-2 text-lg" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{nilai.label}</h3>
              <p className="text-on-surface-variant text-xs leading-relaxed">{nilai.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STRUKTUR KEPENGURUSAN ── */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 text-secondary font-bold tracking-widest text-xs uppercase mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <span className="w-8 h-0.5 bg-secondary" />
              Kepengurusan
              <span className="w-8 h-0.5 bg-secondary" />
            </div>
            <h2 className="text-3xl font-extrabold text-primary" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Struktur Pengurus YAPU
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pengurus.map((p, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-2xl p-6 shadow-md border border-outline-variant/10 hover:shadow-xl hover:-translate-y-1 transition-all text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {p.inisial}
                </div>
                <p className="text-[10px] font-extrabold text-secondary uppercase tracking-wider mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{p.jabatan}</p>
                <h3 className="font-bold text-on-surface text-sm leading-snug">{p.nama}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
