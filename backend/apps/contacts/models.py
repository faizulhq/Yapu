from django.db import models


class ContactMessage(models.Model):
    STATUS_CHOICES = [
        ('baru', 'Pesan Baru'),
        ('selesai', 'Sudah Selesai'),
    ]

    full_name = models.CharField(max_length=200, verbose_name='Nama Lengkap')
    email = models.EmailField(verbose_name='Email')
    phone = models.CharField(max_length=20, blank=True, verbose_name='No. Telepon')
    message = models.TextField(verbose_name='Pesan')
    submitted_at = models.DateTimeField(auto_now_add=True, verbose_name='Waktu Kirim')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='baru', verbose_name='Status')

    class Meta:
        verbose_name = 'Pesan Kontak'
        verbose_name_plural = 'Pesan Kontak'
        ordering = ['-submitted_at']

    def __str__(self):
        return f"{self.full_name} — {self.submitted_at.strftime('%d/%m/%Y')}"


class PartnershipInquiry(models.Model):
    PARTNERSHIP_TYPES = [
        ('donasi', 'Donasi / Sponsorship'),
        ('program', 'Kolaborasi Program'),
        ('logistik', 'Bantuan Logistik'),
        ('media', 'Media & Publikasi'),
        ('lainnya', 'Lainnya'),
    ]

    STATUS_CHOICES = [
        ('baru', 'Baru'),
        ('diskusi', 'Sedang Diskusi'),
        ('deal', 'Deal / Disetujui'),
        ('batal', 'Batal / Ditolak'),
    ]

    institution_name = models.CharField(max_length=200, verbose_name='Nama Lembaga')
    pic_name = models.CharField(max_length=200, verbose_name='Nama PIC')
    email = models.EmailField(verbose_name='Email')
    phone = models.CharField(max_length=20, verbose_name='Telepon')
    partnership_type = models.CharField(max_length=50, choices=PARTNERSHIP_TYPES, verbose_name='Jenis Kemitraan')
    message = models.TextField(verbose_name='Pesan')
    submitted_at = models.DateTimeField(auto_now_add=True, verbose_name='Waktu Kirim')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='baru', verbose_name='Status')

    class Meta:
        verbose_name = 'Pengajuan Kemitraan'
        verbose_name_plural = 'Pengajuan Kemitraan'
        ordering = ['-submitted_at']

    def __str__(self):
        return f"{self.institution_name} — {self.pic_name}"
