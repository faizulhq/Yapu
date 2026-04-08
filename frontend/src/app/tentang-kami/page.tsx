import { Metadata } from "next";
import Image from "next/image";
import { Shield, Eye, Target, Repeat, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal Yayasan Amanah Peduli Umat — sejarah, visi, misi, nilai, dan struktur kepengurusan YAPU sejak 2018.",
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
  { nama: "Prof. Dr. Cartono, S.Pd., M.Pd., M.T", jabatan: "Ketua Umum" },
  { nama: "H. Muhammad Hasan, B.Sc", jabatan: "Pembina" },
  { nama: "Drs. Ikhsan Matondang, M.Si", jabatan: "Pengawas" },
  { nama: "Dedi Herdiyana, S.T", jabatan: "Pengawas" },
  { nama: "Aji Pamoso, S.Si, M.T", jabatan: "Sekretaris I" },
  { nama: "Maryam Nurbaitsah Haq, S.Mat", jabatan: "Sekretaris II" },
  { nama: "Ayi Sugandhi, S.T", jabatan: "Bendahara I" },
  { nama: "Annisa Nahdliatul Haq, S.P", jabatan: "Bendahara II" },
];

const nilaiUtama = [
  { icon: <Shield size={24} />, label: "Amanah", desc: "Setiap kepercayaan dan donasi dijaga dengan penuh tanggung jawab." },
  { icon: <Eye size={24} />, label: "Transparansi", desc: "Laporan keuangan dan kegiatan tersedia secara terbuka untuk publik." },
  { icon: <Target size={24} />, label: "Profesional", desc: "Setiap program dirancang dan dilaksanakan dengan standar tinggi." },
  { icon: <Repeat size={24} />, label: "Berkelanjutan", desc: "Dampak jangka panjang menjadi prioritas dalam setiap program YAPU." },
];

export default function TentangKamiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 bg-gradient-to-br from-[#2D5016] to-[#1e3710] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">Yayasan Amanah Peduli Umat</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">Tentang Kami</h1>
          <p className="text-green-200 max-w-2xl mx-auto text-lg">
            Mengenal lebih dalam lembaga sosial-keagamaan yang berdiri dengan penuh amanah sejak 2018
          </p>
        </div>
      </section>

      {/* Sejarah */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">Sejarah</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Lahir dari Kepedulian Nyata</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Yayasan Amanah Peduli Umat (YAPU) didirikan pada <strong>5 Februari 2018</strong> berdasarkan Akta Notaris Ir. Sri Wahjuni, M.Sc., S.H., M.H., M.Kn. Nomor 5, dan telah disahkan oleh Kemenkumham RI dengan SK Nomor <strong>AHU-0002233.AH.01.04 Tahun 2018</strong>.
              </p>
              <p>
                Berakar di Kota Bandung, YAPU lahir dari keprihatinan sekelompok insan yang tergerak untuk hadir nyata di tengah masyarakat — mempertemukan kepedulian dengan kebutuhan umat melalui program-program yang amanah, terukur, dan berdampak.
              </p>
              <p>
                Selama lebih dari 8 tahun, YAPU telah menjangkau ribuan penerima manfaat di berbagai wilayah Jawa — dari kegiatan sosial, kesehatan, lingkungan, hingga pemberdayaan ekonomi.
              </p>
            </div>

            {/* Legalitas */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="text-xs text-gray-500 mb-1">Akta Notaris</p>
                <p className="font-semibold text-gray-800 text-sm">No. 5 | 5 Februari 2018</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="text-xs text-gray-500 mb-1">SK Kemenkumham</p>
                <p className="font-semibold text-gray-800 text-sm">AHU-0002233.AH.01.04 Tahun 2018</p>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://res.cloudinary.com/drturcggf/image/upload/v1775537367/IMG_8229_gx244a.jpg"
              alt="Kegiatan YAPU"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Visi */}
      <section className="py-16 px-4 bg-[#2D5016]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">Visi</span>
          <blockquote className="text-3xl sm:text-4xl font-bold text-white mt-4 leading-snug">
            &ldquo;Mewujudkan Islam sebagai <span className="text-[#E8A020]">Rahmatan lil &apos;Alamin</span>&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Misi */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">Misi</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Enam Pilar Misi YAPU</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {misi.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md flex gap-4 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-9 h-9 rounded-full bg-[#2D5016] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nilai Utama */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">Nilai Utama</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Prinsip yang Memandu Langkah Kami</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nilaiUtama.map((nilai) => (
              <div key={nilai.label} className="rounded-2xl p-7 bg-[#F5F5F5] hover:shadow-lg transition-all hover:-translate-y-1 text-center border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-[#2D5016] text-white flex items-center justify-center mx-auto mb-4">
                  {nilai.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{nilai.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{nilai.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Struktur Kepengurusan */}
      <section className="py-20 px-4 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E8A020] font-semibold text-sm uppercase tracking-wider">Kepengurusan</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Struktur Pengurus YAPU</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pengurus.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md text-center border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2D5016] to-[#3d6b1f] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {p.nama.split(" ").slice(-1)[0][0]}
                </div>
                <p className="text-xs font-semibold text-[#E8A020] uppercase tracking-wider mb-2">{p.jabatan}</p>
                <h3 className="font-semibold text-gray-900 text-sm leading-snug">{p.nama}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
