from rest_framework import generics
from .models import Partner
from .serializers import PartnerSerializer


class PartnerListView(generics.ListAPIView):
    serializer_class = PartnerSerializer
    queryset = Partner.objects.filter(is_active=True)
    pagination_class = None
