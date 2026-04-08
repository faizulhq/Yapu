from django.db import models


class ImpactStat(models.Model):
    label = models.CharField(max_length=100, verbose_name='Label')
    value = models.CharField(max_length=50, verbose_name='Nilai (misal: 1.000+)')
    icon = models.CharField(max_length=50, verbose_name='Icon (emoji atau nama)')
    order = models.IntegerField(default=0, verbose_name='Urutan')

    class Meta:
        verbose_name = 'Statistik Dampak'
        verbose_name_plural = 'Statistik Dampak'
        ordering = ['order']

    def __str__(self):
        return f"{self.icon} {self.label}: {self.value}"


class ImpactLocation(models.Model):
    name = models.CharField(max_length=100, verbose_name='Nama Wilayah')
    province = models.CharField(max_length=100, verbose_name='Provinsi')
    latitude = models.FloatField(verbose_name='Latitude')
    longitude = models.FloatField(verbose_name='Longitude')
    beneficiaries_count = models.IntegerField(verbose_name='Jumlah Penerima Manfaat')
    program = models.ForeignKey(
        'programs.Program',
        null=True, blank=True,
        on_delete=models.SET_NULL,
        verbose_name='Program Terkait'
    )

    class Meta:
        verbose_name = 'Lokasi Dampak'
        verbose_name_plural = 'Lokasi Dampak'
        ordering = ['-beneficiaries_count']

    def __str__(self):
        return f"{self.name}, {self.province}"
