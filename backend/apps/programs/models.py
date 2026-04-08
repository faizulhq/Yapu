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
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Program'
        verbose_name_plural = 'Program'
        ordering = ['-created_at']

    def __str__(self):
        return self.title
