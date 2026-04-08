from django.db import models


class Partner(models.Model):
    name = models.CharField(max_length=200, verbose_name='Nama Mitra')
    logo = models.URLField(verbose_name='URL Logo (Cloudinary)', blank=True)
    website = models.URLField(blank=True, verbose_name='Website')
    is_active = models.BooleanField(default=True, verbose_name='Aktif')
    order = models.IntegerField(default=0, verbose_name='Urutan')

    class Meta:
        verbose_name = 'Mitra'
        verbose_name_plural = 'Mitra'
        ordering = ['order']

    def __str__(self):
        return self.name
