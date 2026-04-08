from rest_framework import generics
from .models import GalleryItem
from .serializers import GalleryItemSerializer


class GalleryListView(generics.ListAPIView):
    serializer_class = GalleryItemSerializer

    def get_queryset(self):
        queryset = GalleryItem.objects.all()
        program_slug = self.request.query_params.get('program')
        if program_slug:
            queryset = queryset.filter(program__slug=program_slug)
        return queryset
