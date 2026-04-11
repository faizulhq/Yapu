from django.contrib import admin
from .models import Program, ProgramExecution, ExecutionLocation


class ExecutionLocationInline(admin.TabularInline):
    model = ExecutionLocation
    extra = 1
    fields = ['city', 'beneficiaries', 'note']


class ProgramExecutionInline(admin.StackedInline):
    model = ProgramExecution
    extra = 0
    show_change_link = True
    fields = ['title', 'date_start', 'date_end', 'total_beneficiaries', 'summary', 'report_url', 'order']
    ordering = ['-date_start']


@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'status', 'is_featured', 'created_at']
    list_filter = ['category', 'status', 'is_featured']
    search_fields = ['title', 'description']
    prepopulated_fields = {'slug': ('title',)}
    list_editable = ['is_featured', 'status']
    ordering = ['-created_at']
    inlines = [ProgramExecutionInline]


@admin.register(ProgramExecution)
class ProgramExecutionAdmin(admin.ModelAdmin):
    list_display = ['title', 'program', 'date_start', 'total_beneficiaries']
    list_filter = ['program']
    inlines = [ExecutionLocationInline]
    ordering = ['-date_start']
