from django.contrib import admin
from .models import ContactMessage, PartnershipInquiry
import csv
from django.http import HttpResponse


def export_contacts_csv(modeladmin, request, queryset):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="pesan_kontak.csv"'
    writer = csv.writer(response)
    writer.writerow(['Nama', 'Email', 'Telepon', 'Pesan', 'Waktu Kirim', 'Sudah Dibaca'])
    for c in queryset:
        writer.writerow([c.full_name, c.email, c.phone, c.message, c.submitted_at, c.is_read])
    return response

export_contacts_csv.short_description = 'Export ke CSV'


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'phone', 'submitted_at', 'is_read']
    list_filter = ['is_read']
    list_editable = ['is_read']
    search_fields = ['full_name', 'email']
    actions = [export_contacts_csv]
    readonly_fields = ['submitted_at']


@admin.register(PartnershipInquiry)
class PartnershipInquiryAdmin(admin.ModelAdmin):
    list_display = ['institution_name', 'pic_name', 'email', 'partnership_type', 'submitted_at', 'is_read']
    list_filter = ['partnership_type', 'is_read']
    list_editable = ['is_read']
    search_fields = ['institution_name', 'pic_name', 'email']
    readonly_fields = ['submitted_at']
