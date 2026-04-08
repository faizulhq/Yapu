from django.urls import path
from .views import ImpactStatListView, ImpactLocationListView

urlpatterns = [
    path('stats/', ImpactStatListView.as_view(), name='impact-stats'),
    path('locations/', ImpactLocationListView.as_view(), name='impact-locations'),
]
