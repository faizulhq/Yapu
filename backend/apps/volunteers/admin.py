from django.contrib import admin
from .models import Volunteer
import csv
from django.http import HttpResponse


def export_volunteers_csv(modeladmin, request, queryset):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="relawan.csv"'
    writer = csv.writer(response)
    writer.writerow(['Nama', 'Email', 'HP', 'Bidang Minat', 'Domisili', 'Pesan', 'Waktu Daftar', 'Status'])
    for v in queryset:
        writer.writerow([v.full_name, v.email, v.phone, v.interest, v.domicile, v.message, v.submitted_at, v.get_status_display()])
    return response

export_volunteers_csv.short_description = 'Export ke CSV'


@admin.register(Volunteer)
class VolunteerAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'phone', 'interest', 'domicile', 'submitted_at', 'status']
    list_filter = ['interest', 'status']
    list_editable = ['status']
    search_fields = ['full_name', 'email', 'domicile']
    actions = [export_volunteers_csv]
    readonly_fields = ['submitted_at']
