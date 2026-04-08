from rest_framework import serializers
from .models import Article


class ArticleListSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    related_program_title = serializers.CharField(source='related_program.title', read_only=True)

    class Meta:
        model = Article
        fields = ['id', 'title', 'slug', 'category', 'category_display',
                  'excerpt', 'cover_image', 'author', 'published_at',
                  'related_program', 'related_program_title']


class ArticleDetailSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    related_program_title = serializers.CharField(source='related_program.title', read_only=True)
    related_program_slug = serializers.CharField(source='related_program.slug', read_only=True)

    class Meta:
        model = Article
        fields = '__all__'
