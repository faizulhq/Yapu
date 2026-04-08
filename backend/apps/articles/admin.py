from django.contrib import admin
from .models import Article


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'author', 'published_at', 'is_published']
    list_filter = ['category', 'is_published']
    search_fields = ['title', 'excerpt', 'author']
    prepopulated_fields = {'slug': ('title',)}
    list_editable = ['is_published']
    ordering = ['-published_at']
    date_hierarchy = 'published_at'
