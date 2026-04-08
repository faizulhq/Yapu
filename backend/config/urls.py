"""
YAPU URL Configuration
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('api/programs/', include('apps.programs.urls')),
    path('api/articles/', include('apps.articles.urls')),
    path('api/impact/', include('apps.impact.urls')),
    path('api/volunteers/', include('apps.volunteers.urls')),
    path('api/partners/', include('apps.partners.urls')),
    path('api/contacts/', include('apps.contacts.urls')),
    path('api/gallery/', include('apps.gallery.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT if hasattr(settings, 'MEDIA_ROOT') else '')

# Admin site customization
admin.site.site_header = 'YAPU Admin Panel'
admin.site.site_title = 'YAPU CMS'
admin.site.index_title = 'Selamat Datang di Panel Admin YAPU'
