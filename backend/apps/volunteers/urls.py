from django.urls import path
from .views import VolunteerCreateView

urlpatterns = [
    path('', VolunteerCreateView.as_view(), name='volunteer-create'),
]
