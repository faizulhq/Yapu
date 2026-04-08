from rest_framework import serializers
from .models import Program


class ProgramListSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)

    class Meta:
        model = Program
        fields = ['id', 'title', 'slug', 'category', 'category_display',
                  'status', 'status_display', 'description', 'image',
                  'is_featured', 'created_at']


class ProgramDetailSerializer(serializers.ModelSerializer):
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    status_display = serializers.CharField(source='get_status_display', read_only=True)

    class Meta:
        model = Program
        fields = '__all__'
