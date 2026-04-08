from django.db import models


class GalleryItem(models.Model):
    title = models.CharField(max_length=200, verbose_name='Judul')
    image = models.URLField(verbose_name='URL Foto (Cloudinary)')
    program = models.ForeignKey(
        'programs.Program',
        null=True, blank=True,
        on_delete=models.SET_NULL,
        verbose_name='Program Terkait'
    )
    article = models.ForeignKey(
        'articles.Article',
        null=True, blank=True,
        on_delete=models.SET_NULL,
        verbose_name='Artikel Terkait'
    )
    uploaded_at = models.DateTimeField(auto_now_add=True, verbose_name='Tanggal Upload')

    class Meta:
        verbose_name = 'Galeri Foto'
        verbose_name_plural = 'Galeri Foto'
        ordering = ['-uploaded_at']

    def __str__(self):
        return self.title
