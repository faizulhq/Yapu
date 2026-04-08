from rest_framework import generics
from .models import Article
from .serializers import ArticleListSerializer, ArticleDetailSerializer


class ArticleListView(generics.ListAPIView):
    serializer_class = ArticleListSerializer

    def get_queryset(self):
        queryset = Article.objects.filter(is_published=True)
        category = self.request.query_params.get('category')
        limit = self.request.query_params.get('limit')
        if category:
            queryset = queryset.filter(category=category)
        if limit:
            queryset = queryset[:int(limit)]
        return queryset


class ArticleDetailView(generics.RetrieveAPIView):
    serializer_class = ArticleDetailSerializer
    lookup_field = 'slug'
    queryset = Article.objects.filter(is_published=True)
