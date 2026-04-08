from django.urls import path
from .views import ContactCreateView, PartnershipCreateView

urlpatterns = [
    path('', ContactCreateView.as_view(), name='contact-create'),
    path('partnership/', PartnershipCreateView.as_view(), name='partnership-create'),
]
