from django.contrib import admin
from .models import GalleryItem


@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ['title', 'program', 'article', 'uploaded_at']
    list_filter = ['program']
    search_fields = ['title']
