"""
Management command to seed program content and execution history from LPJ data.
Run: python manage.py seed_programs
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from apps.programs.models import Program, ProgramExecution, ExecutionLocation

# ─── CONTENT HTML PER PROGRAM ────────────────────────────────────────────────

PROGRAM_DATA = {
    "khitanan-massal": {
        "beneficiary_label": "Peserta Dikhitan",
        "description": "Program layanan kesehatan gratis berupa khitanan massal yang diperuntukkan bagi anak-anak dari keluarga dhuafa. Dilaksanakan bekerja sama dengan tenaga medis profesional untuk memastikan keamanan dan kenyamanan setiap peserta.",
        "content": """
<h2>Tentang Program</h2>
<p>Program Khitanan Massal YAPU hadir sebagai wujud kepedulian sosial terhadap keluarga yang kurang mampu. Setiap anak yang mengikuti program ini memperoleh layanan khitan yang aman, profesional, dan sesuai standar kesehatan — didampingi oleh dokter umum, dokter spesialis bedah, perawat, apoteker, dan mantri berpengalaman.</p>

<h2>Apa yang Diterima Peserta?</h2>
<ul>
  <li>Layanan khitanan gratis dan aman secara medis</li>
  <li>Perlengkapan khitan (celana sunat, sarung, setelan koko)</li>
  <li>Bingkisan dan goodie bag</li>
  <li>Sertifikat resmi</li>
  <li>Amplop santunan tunai</li>
  <li>Tumpeng, snack, dan fasilitas photobooth</li>
  <li>Antar-jemput oleh panitia</li>
</ul>

<h2>Kolaborasi & Mitra</h2>
<p>Program ini dilaksanakan melalui kerja sama dengan UPTD Puskesmas dan berbagai fasilitas kesehatan setempat. Protokol kesehatan diterapkan secara ketat di setiap sesi pelaksanaan untuk memastikan keselamatan seluruh peserta dan keluarga.</p>

<h2>Dampak yang Dirasakan</h2>
<p>Melalui program ini, anak-anak dari keluarga dhuafa dapat menjalani salah satu kewajiban agama dengan layak dan bermartabat, tanpa harus khawatir terhadap biaya. Antusiasme masyarakat sangat tinggi — pada pelaksanaan di Majenang, Cilacap, peserta bahkan datang dari 7 kecamatan berbeda dan cakupan akhirnya jauh melampaui target awal.</p>
""",
    },

    "pemberian-paket-sembako": {
        "beneficiary_label": "Paket Disalurkan",
        "description": "Penyaluran paket kebutuhan pokok kepada keluarga dhuafa, fakir miskin, dan lanjut usia di berbagai wilayah Indonesia. Program ini menjadi salah satu program rutin YAPU terutama menjelang Ramadan, Idul Adha, dan momen kemanusiaan lainnya.",
        "content": """
<h2>Tentang Program</h2>
<p>Program Pemberian Paket Sembako YAPU menyasar keluarga dhuafa, fakir miskin, dan lansia yang kesulitan memenuhi kebutuhan pokok sehari-hari. Paket sembako disusun secara menyeluruh untuk mencakup kebutuhan gizi dasar yang seimbang.</p>

<h2>Isi Paket Sembako</h2>
<ul>
  <li>Beras 5 kg</li>
  <li>Minyak goreng 1 liter</li>
  <li>Gula pasir 1 kg</li>
  <li>Mie instan 5 pcs</li>
  <li>Terigu 1 kg</li>
  <li>Teh celup 1 box</li>
  <li>Kecap & garam</li>
</ul>

<h2>Kolaborasi & Mitra</h2>
<p>YAPU berkolaborasi dengan Bank Mandiri (melalui program CSR) serta Badan Pangan Nasional untuk menjamin ketersediaan bahan pokok berkualitas. Penerima diseleksi bersama pemerintah desa dan tokoh masyarakat setempat agar bantuan tepat sasaran.</p>

<h2>Wilayah Distribusi</h2>
<p>Program penyaluran sembako telah menjangkau berbagai wilayah di Jabodetabek, Jawa Barat, hingga Jawa Tengah — termasuk Bekasi, Jakarta Timur, Bandung, Garut, Cianjur, Bogor, Nagreg, dan Cilacap.</p>
""",
    },

    "santunan-anak-yatim": {
        "beneficiary_label": "Anak Yatim Disantuni",
        "description": "Program santunan berupa bantuan tunai dan bingkisan bagi anak-anak yatim dari keluarga kurang mampu. Dilaksanakan rutin terutama menjelang Ramadan dan Idul Adha sebagai wujud kasih sayang dan kepedulian YAPU terhadap generasi penerus umat.",
        "content": """
<h2>Tentang Program</h2>
<p>Program Santunan Anak Yatim YAPU hadir untuk memberikan perhatian nyata kepada anak-anak yang kehilangan orang tua, khususnya dari keluarga kurang mampu. Setiap anak yang disantuni menerima bantuan berupa uang tunai dan bingkisan sebagai simbol kasih sayang dan kepedulian.</p>

<h2>Tujuan Program</h2>
<ul>
  <li>Memberikan dukungan moral dan materiil kepada anak yatim</li>
  <li>Memastikan mereka dapat menyambut hari-hari besar Islam dengan penuh kebahagiaan</li>
  <li>Mempererat ukhuwah Islamiyah dan semangat berbagi di tengah masyarakat</li>
</ul>

<h2>Mekanisme Penyaluran</h2>
<p>Data penerima manfaat diverifikasi bersama RT/RW, tokoh masyarakat, dan pemerintah kelurahan setempat. Penyaluran dilakukan secara langsung dalam suasana yang hangat agar anak-anak merasakan kasih sayang dan perhatian dari seluruh komunitas.</p>

<h2>Cakupan Wilayah</h2>
<p>Program ini telah dilaksanakan di berbagai wilayah, mulai dari Bandung, Bekasi, Jakarta Timur, Garut, Cianjur, Majenang Cilacap, hingga beberapa daerah terpencil lainnya di Jawa Barat dan Jawa Tengah.</p>
""",
    },

    "penanaman-pohon": {
        "beneficiary_label": "Pohon Ditanam",
        "description": "Gerakan Tanam 10.000 Pohon sebagai bagian dari program rehabilitasi lingkungan dan mitigasi bencana YAPU. Berfokus pada penanaman tanaman produktif di kawasan rawan longsor untuk memulihkan ekosistem sambil memberdayakan masyarakat secara ekonomi.",
        "content": """
<h2>Tentang Program</h2>
<p>Gerakan Tanam 10.000 Pohon adalah program rehabilitasi lingkungan berbasis keberlanjutan yang dilaksanakan YAPU sebagai respons atas bencana longsor yang melanda beberapa wilayah di Indonesia. Program ini tidak sekadar menanam pohon, tetapi juga membangun ketahanan ekologis masyarakat dalam jangka panjang.</p>

<h2>Pendekatan Program</h2>
<p>YAPU mengutamakan penanaman tanaman buah-buahan produktif agar hasilnya dapat dimanfaatkan masyarakat sebagai sumber pangan sekaligus potensi peningkatan ekonomi keluarga (<em>community empowerment approach</em>). Kawasan terdampak bencana secara bertahap dialihfungsikan menjadi kawasan terbuka hijau dan daerah resapan air.</p>

<h2>Jenis Tanaman yang Ditanam</h2>
<ul>
  <li>Ketapang Kencana — 100 bibit</li>
  <li>Matoa — 100 bibit</li>
  <li>Petai — 500 bibit</li>
  <li>Alpukat — 1.000 bibit</li>
  <li>Jambu Biji — 750 bibit</li>
  <li>Jambu Kristal — 1.500 bibit</li>
</ul>

<h2>Kolaborasi & Mitra</h2>
<p>Bibit pohon bersumber dari BPDAS Pemali Jratun dan Pengurus NU Kabupaten Cilacap. Kegiatan dilaksanakan bersama INSIMA (Institut Agama Islam K.H. Sufyan Tsauri Majenang), pemerintah daerah, Dinas Lingkungan Hidup dan Kehutanan Provinsi Jawa Tengah, mahasiswa, pelajar, dan masyarakat setempat.</p>

<h2>Target Jangka Panjang</h2>
<p>Program penanaman akan dilanjutkan secara bertahap hingga mencapai total 10.000 pohon sebagai komitmen jangka panjang YAPU dalam pemulihan lingkungan dan pembangunan masyarakat yang berkelanjutan.</p>
""",
    },

    "pasar-murah": {
        "beneficiary_label": "Warga Terlayani",
        "description": "Gerakan Pasar Murah menyediakan kebutuhan pokok berkualitas dengan harga di bawah pasar bagi masyarakat menjelang Ramadan atau momen strategis lainnya. Program ini bertujuan menstabilkan daya beli dan meringankan beban ekonomi warga.",
        "content": """
<h2>Tentang Program</h2>
<p>Gerakan Pasar Murah YAPU diselenggarakan sebagai bentuk kepedulian sosial dalam membantu masyarakat memperoleh kebutuhan pokok dengan harga terjangkau, khususnya di tengah meningkatnya harga bahan pangan menjelang Ramadhan atau hari-hari besar lainnya.</p>

<h2>Komoditas yang Tersedia</h2>
<ul>
  <li>Beras premium</li>
  <li>Telur ayam</li>
  <li>Gula pasir</li>
  <li>Minyak goreng</li>
</ul>
<p>Seluruh komoditas dijual dengan harga lebih murah dibandingkan harga pasar, sehingga memberikan kemudahan akses bagi masyarakat dalam memenuhi kebutuhan pokok.</p>

<h2>Kolaborasi & Mitra</h2>
<p>Program ini dilaksanakan melalui kolaborasi dengan Paguyuban Jawa Tengah dan Badan Pangan Nasional untuk menjaga stabilitas pasokan dan keterjangkauan harga bahan pokok di tingkat masyarakat akar rumput.</p>

<h2>Dampak Sosial</h2>
<p>Pelaksanaan program mendapat respons yang sangat positif dari warga. Antusiasme masyarakat terlihat dari tingginya partisipasi serta tertibnya proses distribusi, yang memperkuat semangat kebersamaan dan kepedulian sosial.</p>
""",
    },

    "pengajian-umum": {
        "beneficiary_label": "Peserta Hadir",
        "description": "Kegiatan pengajian umum rutin yang diselenggarakan sebagai sarana dakwah, pembinaan keimanan, dan penguatan ukhuwah Islamiyah di tengah masyarakat. Dilaksanakan dalam rangka momen-momen penting keagamaan seperti Ramadan, Hari Besar Islam, dan program sosial YAPU.",
        "content": """
<h2>Tentang Program</h2>
<p>Program Pengajian Umum YAPU merupakan salah satu program inti dalam misi dakwah dan pembinaan umat. Kegiatan ini diselenggarakan untuk meningkatkan kesiapan spiritual masyarakat, memperkuat nilai-nilai keislaman dalam kehidupan sehari-hari, serta membangun ukhuwah Islamiyah yang kuat di tengah komunitas.</p>

<h2>Materi & Tema Kajian</h2>
<ul>
  <li>Penguatan iman dan ketakwaan</li>
  <li>Peningkatan kualitas ibadah wajib dan sunnah</li>
  <li>Pentingnya menjaga ukhuwah Islamiyah</li>
  <li>Semangat berbagi dan solidaritas sosial</li>
  <li>Nilai-nilai Islam Rahmatan lil 'Alamin dalam kehidupan bermasyarakat</li>
</ul>

<h2>Format Kegiatan</h2>
<p>Pengajian dilaksanakan secara tatap muka dengan menghadirkan penceramah yang kompeten dan berpengalaman. Kegiatan berlangsung di tempat terbuka (lapangan, masjid, atau aula) dengan tetap menjaga suasana yang tertib, khidmat, dan ramah bagi seluruh lapisan masyarakat.</p>

<h2>Sinergi dengan Program Lain</h2>
<p>Pengajian Umum seringkali dilaksanakan bersamaan dengan kegiatan sosial lainnya seperti santunan anak yatim, pembagian sembako, dan khitanan massal — sehingga menjadi satu rangkaian kegiatan yang holistik dan bermakna bagi masyarakat penerima manfaat.</p>
""",
    },

    "operasi-katarak": {
        "beneficiary_label": "Mata Dioperasi",
        "description": "Program operasi katarak gratis bagi masyarakat kurang mampu yang mengalami gangguan penglihatan. Dilaksanakan bekerja sama dengan dokter spesialis mata dan rumah sakit mitra untuk memulihkan penglihatan penerima manfaat secara aman dan profesional.",
        "content": """
<h2>Tentang Program</h2>
<p>Program Operasi Katarak YAPU merupakan wujud kepedulian di bidang kesehatan, khususnya untuk masyarakat yang menderita gangguan penglihatan akibat katarak namun tidak mampu menanggung biaya operasi. Melalui program ini, YAPU berupaya mengembalikan kualitas hidup penerima manfaat dengan memulihkan fungsi penglihatan mereka.</p>

<h2>Layanan yang Diberikan</h2>
<ul>
  <li>Pemeriksaan mata oleh dokter spesialis mata</li>
  <li>Tindakan operasi katarak tanpa biaya</li>
  <li>Obat-obatan pasca operasi</li>
  <li>Pemeriksaan kontrol lanjutan</li>
</ul>

<h2>Kolaborasi Medis</h2>
<p>Program ini dilaksanakan bersama dokter spesialis mata berpengalaman dan rumah sakit/klinik mitra yang memiliki fasilitas standar operasi katarak. Setiap peserta menjalani skrining terlebih dahulu untuk memastikan kondisi kesehatan yang layak untuk dioperasi.</p>

<h2>Dampak bagi Penerima</h2>
<p>Pemulihan penglihatan memberi dampak luar biasa bagi penerima manfaat — mereka kembali dapat melihat, beribadah dengan lebih baik, menjalani aktivitas sehari-hari secara mandiri, dan terbebas dari ketergantungan kepada orang lain.</p>
""",
    },

    "program-qurban": {
        "beneficiary_label": "Keluarga Menerima Qurban",
        "description": "Program penyaluran hewan qurban kepada keluarga dhuafa dan masyarakat yang membutuhkan setiap Idul Adha. Hewan qurban disalurkan langsung ke wilayah-wilayah terpencil dan kurang terjangkau untuk memastikan pemerataan manfaat.",
        "content": """
<h2>Tentang Program</h2>
<p>Program Qurban YAPU menghadirkan pengalaman berbagi daging qurban yang bermakna dan tepat sasaran setiap Idul Adha. Hewan qurban tidak hanya disalurkan di lingkungan perkotaan, tetapi juga menjangkau wilayah-wilayah terpencil yang jarang mendapatkan distribusi qurban.</p>

<h2>Mekanisme Penyaluran</h2>
<ul>
  <li>Penerimaan amanah qurban dari para donatur/shohibul qurban</li>
  <li>Pemotongan hewan dilaksanakan sesuai syariat Islam oleh panitia bersertifikat</li>
  <li>Daging dikemas dan didistribusikan langsung kepada keluarga penerima manfaat</li>
  <li>Penerima diutamakan dari kalangan dhuafa, fakir miskin, dan masyarakat di wilayah terpencil</li>
</ul>

<h2>Transparansi & Akuntabilitas</h2>
<p>Setiap donatur/shohibul qurban menerima laporan pelaksanaan dan dokumentasi penyaluran sebagai bentuk pertanggungjawaban amanah yang diberikan. YAPU berkomitmen untuk menjaga kepercayaan donatur melalui pengelolaan qurban yang transparan dan amanah.</p>

<h2>Jangkauan Program</h2>
<p>Program Qurban YAPU menjangkau berbagai wilayah di Jawa Barat, DKI Jakarta, Jawa Tengah, dan daerah-daerah yang membutuhkan perhatian lebih — menjadi wujud nyata semangat berbagi dan kepedulian umat.</p>
""",
    },
}

# ─── EXECUTION HISTORY DATA ──────────────────────────────────────────────────

EXECUTION_DATA = {
    "khitanan-massal": [
        {
            "title": "Bakti Sosial Marhaban Ya Ramadan 1447 H",
            "date_start": "2026-02-15",
            "date_end": "2026-02-15",
            "total_beneficiaries": 68,
            "summary": "Khitanan massal gratis untuk anak-anak dari keluarga dhuafa di Majenang, Kabupaten Cilacap. Didukung hampir 20 tenaga kesehatan termasuk dokter spesialis bedah dan Kepala Puskesmas. Peserta datang dari 7 kecamatan berbeda di Kabupaten Cilacap — jauh melampaui target awal yang hanya satu desa.",
            "report_url": "",
            "locations": [
                {"city": "UPTD Puskesmas Majenang II, Kab. Cilacap", "beneficiaries": 68, "note": "Dari 7 kecamatan di Kab. Cilacap"},
            ],
        },
    ],

    "pemberian-paket-sembako": [
        {
            "title": "Bakti Sosial Marhaban Ya Ramadan 1447 H — Cilacap",
            "date_start": "2026-02-14",
            "date_end": "2026-02-14",
            "total_beneficiaries": 215,
            "summary": "Penyaluran 200 paket sembako dan 15 paket beras 5 kg kepada warga di 6 dusun wilayah Majenang, Cilacap. Kolaborasi antara Bank Mandiri (CSR) dan YAPU.",
            "report_url": "",
            "locations": [
                {"city": "Dusun Jaringao, Majenang, Cilacap", "beneficiaries": 40, "note": "Paket sembako"},
                {"city": "Dusun Nagari, Majenang, Cilacap", "beneficiaries": 35, "note": "Paket sembako"},
                {"city": "Dusun Cigaru, Majenang, Cilacap", "beneficiaries": 35, "note": "Paket sembako"},
                {"city": "Dusun Cijeunjing, Majenang, Cilacap", "beneficiaries": 35, "note": "Paket sembako"},
                {"city": "Dusun Cibuyut, Majenang, Cilacap", "beneficiaries": 35, "note": "Paket sembako"},
                {"city": "Dusun Tarukahan, Majenang, Cilacap", "beneficiaries": 35, "note": "Paket sembako"},
            ],
        },
        {
            "title": "Bakti Sosial Marhaban Ya Ramadan 1447 H — Multi-Kota",
            "date_start": "2026-02-17",
            "date_end": "2026-02-17",
            "total_beneficiaries": 405,
            "summary": "Penyaluran paket sembako serentak di 7 wilayah Jabodetabek dan Jawa Barat — Bekasi, Jakarta Timur, Bandung, Garut, Cianjur, Bogor, dan Nagreg.",
            "report_url": "",
            "locations": [
                {"city": "Ciketing, Bekasi", "beneficiaries": 73, "note": ""},
                {"city": "Cipinang, Jakarta Timur", "beneficiaries": 20, "note": ""},
                {"city": "Nagreg, Bandung", "beneficiaries": 25, "note": ""},
                {"city": "Bojonggede, Bogor", "beneficiaries": 19, "note": ""},
                {"city": "Cisompet, Garut", "beneficiaries": 23, "note": ""},
                {"city": "Cidaun, Cianjur", "beneficiaries": 45, "note": ""},
                {"city": "Bandung dan sekitarnya", "beneficiaries": 200, "note": ""},
            ],
        },
    ],

    "santunan-anak-yatim": [
        {
            "title": "Bakti Sosial Marhaban Ya Ramadan 1447 H — Cilacap",
            "date_start": "2026-02-14",
            "date_end": "2026-02-14",
            "total_beneficiaries": 22,
            "summary": "Santunan tunai dan bingkisan bagi 22 anak yatim dalam rangkaian acara pengajian umum Marhaban Ya Ramadan di Villa Lembur Kuring, Majenang.",
            "report_url": "",
            "locations": [
                {"city": "Desa Cibeunying, Majenang, Kab. Cilacap", "beneficiaries": 22, "note": "Bersamaan dengan pengajian umum"},
            ],
        },
        {
            "title": "Bakti Sosial Marhaban Ya Ramadan 1447 H — Bekasi",
            "date_start": "2026-02-17",
            "date_end": "2026-02-17",
            "total_beneficiaries": 23,
            "summary": "Penyaluran santunan anak yatim di Ciketing, Bekasi — bagian dari gerakan perluasan jangkauan program Ramadan YAPU.",
            "report_url": "",
            "locations": [
                {"city": "Ciketing, Bekasi", "beneficiaries": 23, "note": ""},
            ],
        },
    ],

    "penanaman-pohon": [
        {
            "title": "Gerakan Tanam 10.000 Pohon — Tahap 1 (Pasca Longsor Cilacap)",
            "date_start": "2026-02-14",
            "date_end": "2026-02-14",
            "total_beneficiaries": 4000,
            "summary": "Penanaman 4.000 bibit pohon produktif di kawasan terdampak longsor Dusun Tarukahan, Desa Cibeunying, Majenang. Kerja sama dengan INSIMA, BPDAS Pemali Jratun, NU Cilacap, dan Dinas Lingkungan Hidup Jawa Tengah. Ini adalah bagian pertama dari target 10.000 pohon.",
            "report_url": "",
            "locations": [
                {"city": "Dusun Tarukahan, Desa Cibeunying, Majenang, Kab. Cilacap", "beneficiaries": 4000, "note": "4.000 bibit pohon produktif"},
            ],
        },
    ],

    "pasar-murah": [
        {
            "title": "Gerakan Pasar Murah — Marhaban Ya Ramadan 1447 H",
            "date_start": "2026-02-14",
            "date_end": "2026-02-14",
            "total_beneficiaries": 500,
            "summary": "Pasar murah menyediakan beras, telur, gula, dan minyak goreng dengan harga di bawah pasar kepada warga Desa Cibeunying, Majenang, Cilacap. Kolaborasi dengan Paguyuban Jawa Tengah dan Badan Pangan Nasional.",
            "report_url": "",
            "locations": [
                {"city": "Pasar Desa Cibeunying, Majenang, Kab. Cilacap", "beneficiaries": 500, "note": "Komoditas: beras, telur, gula, minyak goreng"},
            ],
        },
    ],

    "pengajian-umum": [
        {
            "title": "Pengajian Umum Marhaban Ya Ramadan 1447 H",
            "date_start": "2026-02-14",
            "date_end": "2026-02-14",
            "total_beneficiaries": 300,
            "summary": "Pengajian umum dalam rangka menyambut Bulan Suci Ramadan 1447 H. Berlangsung tertib dan khidmat dengan antusiasme tinggi dari masyarakat sekitar Desa Cibeunying, Majenang.",
            "report_url": "",
            "locations": [
                {"city": "Lapangan Badminton, Villa Lembur Kuring, Majenang, Kab. Cilacap", "beneficiaries": 300, "note": "Bersamaan dengan santunan yatim"},
            ],
        },
    ],
}

# ─── META DATA (title, category, status, order) PER PROGRAM ─────────────────

PROGRAM_META = {
    "khitanan-massal":       {"title": "Khitanan Massal",                "category": "kesehatan",  "status": "aktif",    "display_order": 3, "is_featured": True},
    "pemberian-paket-sembako":{"title": "Pemberian Paket Sembako",        "category": "sosial",     "status": "aktif",    "display_order": 1, "is_featured": True},
    "santunan-anak-yatim":   {"title": "Santunan Anak Yatim",            "category": "sosial",     "status": "aktif",    "display_order": 2, "is_featured": True},
    "penanaman-pohon":       {"title": "Penanaman Pohon",                "category": "lingkungan", "status": "aktif",    "display_order": 6, "is_featured": False},
    "pasar-murah":           {"title": "Pasar Murah",                    "category": "ekonomi",    "status": "aktif",    "display_order": 5, "is_featured": False},
    "pengajian-umum":        {"title": "Pengajian Umum",                 "category": "keagamaan",  "status": "aktif",    "display_order": 7, "is_featured": False},
    "operasi-katarak":       {"title": "Operasi Katarak",                "category": "kesehatan",  "status": "aktif",    "display_order": 4, "is_featured": True},
    "program-qurban":        {"title": "Program Qurban",                 "category": "sosial",     "status": "terencana","display_order": 8, "is_featured": False},
}

# ─── SEED LOGIC ──────────────────────────────────────────────────────────────

def run():
    print("Starting seed...\n")
    created_count = 0
    updated_count = 0
    execution_count = 0
    location_count = 0

    for slug, data in PROGRAM_DATA.items():
        meta = PROGRAM_META.get(slug, {})

        # Create or get the program
        program, was_created = Program.objects.get_or_create(
            slug=slug,
            defaults={
                "title":           meta.get("title", slug),
                "category":        meta.get("category", "sosial"),
                "status":          meta.get("status", "aktif"),
                "display_order":   meta.get("display_order", 0),
                "is_featured":     meta.get("is_featured", False),
                "description":     data["description"],
                "content":         data["content"],
                "beneficiary_label": data.get("beneficiary_label", "Penerima Manfaat"),
            }
        )

        if was_created:
            print(f"  [CREATED] {slug} — {program.title}")
            created_count += 1
        else:
            # Always update content fields
            program.description      = data["description"]
            program.content          = data["content"]
            program.beneficiary_label = data.get("beneficiary_label", "Penerima Manfaat")
            program.save()
            print(f"  [UPDATED] {slug} — {program.title}")
            updated_count += 1

        # Seed executions
        exec_list = EXECUTION_DATA.get(slug, [])
        for exec_data in exec_list:
            exec_data = dict(exec_data)  # copy to preserve original
            locations = exec_data.pop("locations", [])
            exec_obj, exec_created = ProgramExecution.objects.get_or_create(
                program=program,
                title=exec_data["title"],
                defaults=exec_data,
            )
            if not exec_created:
                for k, v in exec_data.items():
                    setattr(exec_obj, k, v)
                exec_obj.save()

            # Clear old locations then re-seed
            exec_obj.locations.all().delete()
            for loc in locations:
                ExecutionLocation.objects.create(execution=exec_obj, **loc)
                location_count += 1

            execution_count += 1
            status_str = "Created" if exec_created else "Updated"
            print(f"     -> {status_str} execution: {exec_obj.title} ({len(locations)} lokasi)")

    print(f"\nDone! {created_count} programs created, {updated_count} updated, {execution_count} executions seeded, {location_count} locations seeded.")

if __name__ == "__main__":
    run()

