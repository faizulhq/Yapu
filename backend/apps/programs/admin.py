from django.contrib import admin
from .models import Program


@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'status', 'is_featured', 'created_at']
    list_filter = ['category', 'status', 'is_featured']
    search_fields = ['title', 'description']
    prepopulated_fields = {'slug': ('title',)}
    list_editable = ['is_featured', 'status']
    ordering = ['-created_at']
