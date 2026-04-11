from django.contrib import admin
from .models import ContactMessage, PartnershipInquiry
import csv
from django.http import HttpResponse


def export_contacts_csv(modeladmin, request, queryset):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="pesan_kontak.csv"'
    writer = csv.writer(response)
    writer.writerow(['Nama', 'Email', 'Telepon', 'Pesan', 'Waktu Kirim', 'Status'])
    for c in queryset:
        writer.writerow([c.full_name, c.email, c.phone, c.message, c.submitted_at, c.get_status_display()])
    return response

export_contacts_csv.short_description = 'Export ke CSV'


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'phone', 'submitted_at', 'status']
    list_filter = ['status']
    list_editable = ['status']
    search_fields = ['full_name', 'email']
    actions = [export_contacts_csv]
    readonly_fields = ['submitted_at']


@admin.register(PartnershipInquiry)
class PartnershipInquiryAdmin(admin.ModelAdmin):
    list_display = ['institution_name', 'pic_name', 'email', 'partnership_type', 'submitted_at', 'status']
    list_filter = ['partnership_type', 'status']
    list_editable = ['status']
    search_fields = ['institution_name', 'pic_name', 'email']
    readonly_fields = ['submitted_at']
