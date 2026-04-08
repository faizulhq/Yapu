from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class Article(models.Model):
    CATEGORY_CHOICES = [
        ('laporan', 'Laporan Kegiatan'),
        ('edukasi', 'Artikel Edukasi'),
        ('berita', 'Berita'),
    ]

    title = models.CharField(max_length=300, verbose_name='Judul Artikel')
    slug = models.SlugField(unique=True, verbose_name='Slug')
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, verbose_name='Kategori')
    excerpt = models.TextField(verbose_name='Ringkasan')
    content = RichTextUploadingField(verbose_name='Konten Lengkap', blank=True)
    cover_image = models.URLField(verbose_name='URL Cover (Cloudinary)', blank=True)
    author = models.CharField(max_length=100, verbose_name='Penulis', default='Tim YAPU')
    published_at = models.DateTimeField(verbose_name='Tanggal Publikasi')
    is_published = models.BooleanField(default=False, verbose_name='Diterbitkan')
    related_program = models.ForeignKey(
        'programs.Program',
        null=True, blank=True,
        on_delete=models.SET_NULL,
        verbose_name='Program Terkait'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Artikel'
        verbose_name_plural = 'Artikel'
        ordering = ['-published_at']

    def __str__(self):
        return self.title
