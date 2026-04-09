from django.core.management.base import BaseCommand
from django.utils import timezone
from django.utils.text import slugify
from datetime import datetime


class Command(BaseCommand):
    help = 'Seed YAPU database with initial data'

    def handle(self, *args, **kwargs):
        self.stdout.write('[*] Seeding YAPU data...')
        self.seed_programs()
        self.seed_impact_stats()
        self.seed_impact_locations()
        self.seed_articles()
        self.seed_partners()
        self.stdout.write(self.style.SUCCESS('[OK] Seeding selesai!'))

    def seed_programs(self):
        from apps.programs.models import Program
        programs = [
            # Grid baris 1
            {
                'title': 'Pemberian Paket Sembako',
                'category': 'sosial',
                'status': 'aktif',
                'display_order': 1,
                'description': 'Distribusi paket kebutuhan pokok untuk meringankan beban masyarakat pra-sejahtera dan dhuafa di berbagai wilayah.',
                'content': '<p>YAPU mendistribusikan ribuan paket sembako bergizi kepada keluarga yang kesulitan secara ekonomi, untuk memastikan kebutuhan pangan mereka terpenuhi di masa-masa krisis.</p>',
                'image': 'https://res.cloudinary.com/drturcggf/image/upload/v1775537341/IMG_9657_ew9nrw.jpg',
                'is_featured': True,
            },
            {
                'title': 'Santunan Anak Yatim',
                'category': 'sosial',
                'status': 'aktif',
                'display_order': 2,
                'description': 'Program rutin penyantunan anak yatim yang mencakup bantuan pendidikan, pemenuhan kebutuhan pokok, dan pembinaan karakter secara berkelanjutan.',
                'content': '<p>YAPU berkomitmen untuk menyantuni lebih dari 1.000 anak yatim di berbagai wilayah. Program ini mencakup santunan bulanan, beasiswa pendidikan, dan kegiatan pembinaan karakter.</p>',
                'image': 'https://res.cloudinary.com/drturcggf/image/upload/v1775537341/IMG_9741_bk8fq5.jpg',
                'is_featured': True,
            },
            {
                'title': 'Khitanan Massal',
                'category': 'kesehatan',
                'status': 'aktif',
                'display_order': 3,
                'description': 'Layanan khitanan gratis bagi anak-anak dari keluarga kurang mampu, dilaksanakan bersama tenaga medis profesional dan relawan kesehatan YAPU.',
                'content': '<p>Program Khitanan Massal YAPU telah menjangkau lebih dari 300 peserta dari keluarga dhuafa. Kegiatan ini didukung tenaga medis profesional dan dilaksanakan secara gratis dengan standar kesehatan yang baik.</p>',
                'image': 'https://res.cloudinary.com/drturcggf/image/upload/v1775537337/IMG_5076_iwnnwg.jpg',
                'is_featured': True,
            },
            # Grid baris 2
            {
                'title': 'Operasi Katarak',
                'category': 'kesehatan',
                'status': 'aktif',
                'display_order': 4,
                'description': 'Layanan operasi katarak gratis bagi lansia dhuafa yang mengalami gangguan penglihatan, bekerja sama dengan rumah sakit dan dokter spesialis mata.',
                'content': '<p>YAPU bekerja sama dengan dokter spesialis mata untuk menyelenggarakan operasi katarak gratis bagi lansia yang kurang mampu. Program ini telah membantu lebih dari 60 peserta mendapatkan kembali penglihatannya.</p>',
                'image': 'https://res.cloudinary.com/drturcggf/image/upload/v1775537337/IMG_5076_iwnnwg.jpg',
                'is_featured': False,
            },
            {
                'title': 'Pasar Murah',
                'category': 'sosial',
                'status': 'selesai',
                'display_order': 5,
                'description': 'Penyediaan kebutuhan pokok dengan harga terjangkau bagi masyarakat berpenghasilan rendah, khususnya menjelang hari raya.',
                'content': '<p>Gerakan Pasar Murah YAPU hadir untuk meringankan beban masyarakat dalam memenuhi kebutuhan pokok. Berbagai komoditas seperti beras, minyak, gula, dan kebutuhan dapur lain dijual di bawah harga pasar.</p>',
                'image': 'https://res.cloudinary.com/drturcggf/image/upload/v1775537340/IMG_9577_qfdynt.jpg',
                'is_featured': False,
            },
            {
                'title': 'Penanaman Pohon',
                'category': 'lingkungan',
                'status': 'aktif',
                'display_order': 6,
                'description': 'Gerakan penghijauan melalui penanaman pohon di berbagai wilayah sebagai bentuk kepedulian YAPU terhadap kelestarian lingkungan hidup.',
                'content': '<p>Gerakan Penanaman Pohon adalah wujud nyata kepedulian YAPU terhadap lingkungan. Kegiatan ini melibatkan relawan, masyarakat lokal, dan pemerintah daerah dalam menanam pohon di lahan kritis dan area publik.</p>',
                'image': 'https://res.cloudinary.com/drturcggf/image/upload/v1775537340/IMG_1634_px9rdk.jpg',
                'is_featured': False,
            },
            # Grid baris 3
            {
                'title': 'Pengajian Umum',
                'category': 'keagamaan',
                'status': 'aktif',
                'display_order': 7,
                'description': 'Kegiatan keagamaan berupa pengajian umum dan tabligh akbar menghadirkan ulama terkemuka untuk memperkuat ukhuwah islamiyah dan syiar Islam.',
                'content': '<p>YAPU secara rutin menyelenggarakan pengajian umum dan tabligh akbar menghadirkan penceramah ternama. Kegiatan ini bertujuan memperkuat iman dan taqwa serta mempererat ukhuwah islamiyah di kalangan masyarakat.</p>',
                'image': 'https://res.cloudinary.com/drturcggf/image/upload/v1775537340/IMG_9573_datase.jpg',
                'is_featured': False,
            },
            {
                'title': 'Program Qurban',
                'category': 'sosial',
                'status': 'aktif',
                'display_order': 8,
                'description': 'Pengelolaan ibadah qurban secara amanah dan transparan, memastikan daging qurban tersalurkan kepada yang berhak di berbagai pelosok wilayah.',
                'content': '<p>Program Qurban YAPU hadir setiap Idul Adha untuk memfasilitasi umat dalam menunaikan ibadah qurban. YAPU telah menyalurkan lebih dari 170 hewan qurban kepada masyarakat yang membutuhkan di berbagai wilayah.</p>',
                'image': 'https://res.cloudinary.com/drturcggf/image/upload/v1775537365/IMG_1231_ml5syv.jpg',
                'is_featured': False,
            },
        ]
        count = 0
        for p in programs:
            slug = slugify(p['title'])
            if not Program.objects.filter(slug=slug).exists():
                Program.objects.create(slug=slug, **p)
                count += 1
        self.stdout.write(f'  [OK] {count} program ditambahkan')

    def seed_impact_stats(self):
        from apps.impact.models import ImpactStat
        stats = [
            {'icon': '🗺️', 'label': 'Lokasi Jangkauan', 'value': '27', 'order': 1},
            {'icon': '👥', 'label': 'Penerima Manfaat Dhuafa', 'value': '1.000+', 'order': 2},
            {'icon': '🧒', 'label': 'Anak Yatim Disantuni', 'value': '1.000+', 'order': 3},
            {'icon': '✂️', 'label': 'Peserta Khitan', 'value': '300+', 'order': 4},
            {'icon': '🐄', 'label': 'Hewan Qurban', 'value': '170+', 'order': 5},
            {'icon': '👁️', 'label': 'Peserta Katarak', 'value': '60+', 'order': 6},
        ]
        count = 0
        for s in stats:
            if not ImpactStat.objects.filter(label=s['label']).exists():
                ImpactStat.objects.create(**s)
                count += 1
        self.stdout.write(f'  [OK] {count} statistik dampak ditambahkan')

    def seed_impact_locations(self):
        from apps.impact.models import ImpactLocation
        locations = [
            {'name': 'Majenang', 'province': 'Jawa Tengah', 'latitude': -7.6589, 'longitude': 108.7767, 'beneficiaries_count': 300},
            {'name': 'Bekasi', 'province': 'Jawa Barat', 'latitude': -6.2383, 'longitude': 107.0000, 'beneficiaries_count': 96},
            {'name': 'Jakarta Timur', 'province': 'DKI Jakarta', 'latitude': -6.2251, 'longitude': 106.9004, 'beneficiaries_count': 20},
            {'name': 'Bandung', 'province': 'Jawa Barat', 'latitude': -6.9175, 'longitude': 107.6191, 'beneficiaries_count': 200},
            {'name': 'Garut', 'province': 'Jawa Barat', 'latitude': -7.2167, 'longitude': 107.9000, 'beneficiaries_count': 23},
            {'name': 'Cianjur', 'province': 'Jawa Barat', 'latitude': -6.8200, 'longitude': 107.1400, 'beneficiaries_count': 45},
            {'name': 'Bogor', 'province': 'Jawa Barat', 'latitude': -6.5971, 'longitude': 106.8060, 'beneficiaries_count': 19},
        ]
        count = 0
        for loc in locations:
            if not ImpactLocation.objects.filter(name=loc['name']).exists():
                ImpactLocation.objects.create(**loc)
                count += 1
        self.stdout.write(f'  [OK] {count} lokasi dampak ditambahkan')

    def seed_articles(self):
        from apps.articles.models import Article
        from apps.programs.models import Program

        baksos = Program.objects.filter(slug='bakti-sosial-ramadan').first()

        articles = [
            {
                'title': 'Laporan Bakti Sosial Marhaban Ya Ramadan 1447H',
                'slug': 'laporan-bakti-sosial-marhaban-ya-ramadan-1447h',
                'category': 'laporan',
                'excerpt': 'YAPU kembali menggelar rangkaian kegiatan Bakti Sosial Marhaban Ya Ramadan 1447H yang melibatkan ribuan penerima manfaat di berbagai wilayah, mulai dari Cilacap, Bekasi, Bandung, Garut, Cianjur, hingga Bogor.',
                'content': '''<h2>Alhamdulillah, YAPU Kembali Hadir untuk Umat</h2>
<p>Yayasan Amanah Peduli Umat (YAPU) kembali menggelar rangkaian kegiatan Bakti Sosial Marhaban Ya Ramadan 1447H pada tanggal 21 Februari 2026. Program ini menjangkau berbagai wilayah di Pulau Jawa dengan melibatkan ratusan relawan dan menyentuh kehidupan ribuan penerima manfaat.</p>

<h2>Rangkaian Kegiatan</h2>
<h3>1. Gerakan Tanam Pohon</h3>
<p>Sebagai bentuk kepedulian terhadap lingkungan, YAPU bersama relawan dan masyarakat setempat melaksanakan penanaman pohon di beberapa titik lokasi. Kegiatan ini merupakan bagian dari target besar Gerakan Tanam 10.000 Pohon YAPU.</p>

<h3>2. Pasar Murah</h3>
<p>Paket sembako dengan harga terjangkau disediakan untuk meringankan beban masyarakat berpenghasilan rendah menjelang Ramadan. Berbagai kebutuhan pokok seperti beras, minyak goreng, gula, dan tepung terigu tersedia dengan harga yang sangat terjangkau.</p>

<h3>3. Pengajian Umum</h3>
<p>Rangkaian acara dimeriahkan dengan pengajian umum yang menghadirkan ustaz tamu dari berbagai daerah. Kegiatan ini bertujuan menyambut bulan suci Ramadan dengan memperkuat keimanan dan ukhuwah islamiyah.</p>

<h3>4. Santunan Anak Yatim & Sembako</h3>
<p>YAPU menyerahkan santunan tunai dan paket sembako kepada ratusan anak yatim dan keluarga dhuafa di setiap titik pelaksanaan. Senyum dan kebahagiaan terpancar dari wajah para penerima manfaat yang merasakan langsung kepedulian YAPU.</p>

<h3>5. Khitanan Massal</h3>
<p>Program layanan kesehatan berupa khitanan massal dilaksanakan secara gratis di Cilacap, dengan melibatkan tenaga medis profesional dan didukung peralatan kesehatan yang memadai. Lebih dari 50 anak dari keluarga kurang mampu mendapat layanan ini.</p>

<h2>Wilayah Jangkauan</h2>
<ul>
<li><strong>Majenang, Cilacap</strong> — 300+ penerima manfaat</li>
<li><strong>Bekasi</strong> — 96+ penerima manfaat</li>
<li><strong>Bandung</strong> — 200+ penerima manfaat</li>
<li><strong>Garut</strong> — 23+ penerima manfaat</li>
<li><strong>Cianjur</strong> — 45+ penerima manfaat</li>
<li><strong>Bogor</strong> — 19+ penerima manfaat</li>
</ul>

<h2>Ucapan Terima Kasih</h2>
<p>Seluruh kegiatan ini tidak akan terwujud tanpa dukungan para donatur, relawan, dan mitra yang telah mempercayakan amanah kepada YAPU. Jazakumullahu khairan katsiran. Semoga Allah SWT membalas setiap kebaikan dengan berlipat-lipat kebaikan.</p>''',
                'cover_image': 'https://res.cloudinary.com/drturcggf/image/upload/v1775537369/IMG_9892_jriboh.jpg',
                'author': 'Tim YAPU',
                'published_at': timezone.make_aware(datetime(2026, 2, 21, 8, 0, 0)),
                'is_published': True,
                'related_program': baksos,
            },
        ]
        count = 0
        for a in articles:
            if not Article.objects.filter(slug=a['slug']).exists():
                Article.objects.create(**a)
                count += 1
        self.stdout.write(f'  [OK] {count} artikel ditambahkan')

    def seed_partners(self):
        from apps.partners.models import Partner
        partners = [
            {'name': 'Masjid Agung Bandung', 'order': 1},
            {'name': 'Rumah Sakit Hermina', 'order': 2},
            {'name': 'Dinas Sosial Kota Bandung', 'order': 3},
            {'name': 'Yayasan Peduli Anak Nusantara', 'order': 4},
            {'name': 'PT. Sejahtera Mandiri', 'order': 5},
            {'name': 'Komunitas Hijau Indonesia', 'order': 6},
            {'name': 'Baznas Jawa Barat', 'order': 7},
            {'name': 'Forum Zakat Bandung', 'order': 8},
        ]
        count = 0
        for p in partners:
            if not Partner.objects.filter(name=p['name']).exists():
                Partner.objects.create(**p)
                count += 1
        self.stdout.write(f'  [OK] {count} mitra ditambahkan')
