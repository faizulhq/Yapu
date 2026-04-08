from rest_framework import generics
from .models import Program
from .serializers import ProgramListSerializer, ProgramDetailSerializer


class ProgramListView(generics.ListAPIView):
    serializer_class = ProgramListSerializer

    def get_queryset(self):
        queryset = Program.objects.all()
        category = self.request.query_params.get('category')
        featured = self.request.query_params.get('featured')
        if category:
            queryset = queryset.filter(category=category)
        if featured == 'true':
            queryset = queryset.filter(is_featured=True)
        return queryset


class ProgramDetailView(generics.RetrieveAPIView):
    serializer_class = ProgramDetailSerializer
    lookup_field = 'slug'
    queryset = Program.objects.all()
