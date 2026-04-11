from django.db import models


class Volunteer(models.Model):
    INTEREST_CHOICES = [
        ('kesehatan', 'Kesehatan'),
        ('pendidikan', 'Pendidikan'),
        ('lingkungan', 'Lingkungan'),
        ('sosial', 'Sosial & Kemanusiaan'),
        ('teknologi', 'Teknologi & Dokumentasi'),
        ('logistik', 'Logistik & Operasional'),
        ('lainnya', 'Lainnya'),
    ]

    full_name = models.CharField(max_length=200, verbose_name='Nama Lengkap')
    email = models.EmailField(verbose_name='Email')
    phone = models.CharField(max_length=20, verbose_name='No. HP/WhatsApp')
    interest = models.CharField(max_length=100, choices=INTEREST_CHOICES, verbose_name='Bidang Minat')
    domicile = models.CharField(max_length=100, verbose_name='Domisili')
    message = models.TextField(blank=True, verbose_name='Pesan / Motivasi')
    submitted_at = models.DateTimeField(auto_now_add=True, verbose_name='Waktu Daftar')
    
    STATUS_CHOICES = [
        ('baru', 'Pendaftar Baru'),
        ('dihubungi', 'Sedang Dihubungi'),
        ('aktif', 'Telah Bergabung'),
        ('batal', 'Batal / Tidak Aktif'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='baru', verbose_name='Status')

    class Meta:
        verbose_name = 'Pendaftar Relawan'
        verbose_name_plural = 'Pendaftar Relawan'
        ordering = ['-submitted_at']

    def __str__(self):
        return f"{self.full_name} ({self.email})"
