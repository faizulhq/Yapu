from django.contrib import admin
from .models import ImpactStat, ImpactLocation


@admin.register(ImpactStat)
class ImpactStatAdmin(admin.ModelAdmin):
    list_display = ['icon', 'label', 'value', 'order']
    list_editable = ['value', 'order']
    ordering = ['order']


@admin.register(ImpactLocation)
class ImpactLocationAdmin(admin.ModelAdmin):
    list_display = ['name', 'province', 'beneficiaries_count', 'program']
    list_filter = ['province']
    search_fields = ['name', 'province']
