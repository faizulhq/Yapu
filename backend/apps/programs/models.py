from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class Program(models.Model):
    CATEGORY_CHOICES = [
        ('sosial', 'Sosial'),
        ('kesehatan', 'Kesehatan'),
        ('lingkungan', 'Lingkungan'),
        ('keagamaan', 'Keagamaan'),
        ('pendidikan', 'Pendidikan'),
        ('ekonomi', 'Ekonomi'),
    ]
    STATUS_CHOICES = [
        ('aktif', 'Aktif'),
        ('selesai', 'Selesai'),
        ('terencana', 'Terencana'),
    ]

    title = models.CharField(max_length=200, verbose_name='Judul Program')
    slug = models.SlugField(unique=True, verbose_name='Slug')
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, verbose_name='Kategori')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='aktif', verbose_name='Status')
    description = models.TextField(verbose_name='Deskripsi Singkat')
    content = RichTextUploadingField(verbose_name='Konten Detail', blank=True)
    image = models.URLField(verbose_name='URL Foto (Cloudinary)', blank=True)
    is_featured = models.BooleanField(default=False, verbose_name='Tampilkan di Beranda')
    beneficiary_label = models.CharField(
        max_length=100, default='Penerima Manfaat',
        verbose_name='Label Statistik',
        help_text='Label untuk kolom penerima manfaat, misal: Pohon Ditanam, Peserta Hadir, Paket Disalurkan'
    )
    display_order = models.PositiveIntegerField(default=0, verbose_name='Urutan Tampil')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Program'
        verbose_name_plural = 'Program'
        ordering = ['display_order', 'created_at']

    def __str__(self):
        return self.title


class ProgramExecution(models.Model):
    """Satu sesi/periode pelaksanaan program (misal: Bakti Sosial Ramadan 1447H)"""
    program = models.ForeignKey(
        Program, on_delete=models.CASCADE,
        related_name='executions', verbose_name='Program'
    )
    title = models.CharField(max_length=200, verbose_name='Nama Kegiatan')
    date_start = models.DateField(verbose_name='Tanggal Mulai')
    date_end = models.DateField(blank=True, null=True, verbose_name='Tanggal Selesai')
    total_beneficiaries = models.PositiveIntegerField(default=0, verbose_name='Total Penerima Manfaat')
    summary = models.TextField(blank=True, verbose_name='Ringkasan Kegiatan')
    report_url = models.URLField(blank=True, verbose_name='Link Laporan/LPJ (opsional)')
    order = models.PositiveIntegerField(default=0, verbose_name='Urutan Tampil')

    class Meta:
        verbose_name = 'Riwayat Pelaksanaan'
        verbose_name_plural = 'Riwayat Pelaksanaan'
        ordering = ['-date_start']

    def __str__(self):
        return f"{self.program.title} — {self.title}"


class ExecutionLocation(models.Model):
    """Satu lokasi dalam satu sesi pelaksanaan program"""
    execution = models.ForeignKey(
        ProgramExecution, on_delete=models.CASCADE,
        related_name='locations', verbose_name='Pelaksanaan'
    )
    city = models.CharField(max_length=150, verbose_name='Kota / Lokasi')
    beneficiaries = models.PositiveIntegerField(default=0, verbose_name='Penerima Manfaat di Lokasi Ini')
    note = models.CharField(max_length=300, blank=True, verbose_name='Catatan Tambahan')

    class Meta:
        verbose_name = 'Lokasi Pelaksanaan'
        verbose_name_plural = 'Lokasi Pelaksanaan'

    def __str__(self):
        return f"{self.city} ({self.beneficiaries} penerima)"
