from rest_framework import generics
from .models import ImpactStat, ImpactLocation
from .serializers import ImpactStatSerializer, ImpactLocationSerializer


class ImpactStatListView(generics.ListAPIView):
    serializer_class = ImpactStatSerializer
    queryset = ImpactStat.objects.all()
    pagination_class = None


class ImpactLocationListView(generics.ListAPIView):
    serializer_class = ImpactLocationSerializer
    queryset = ImpactLocation.objects.all()
    pagination_class = None
