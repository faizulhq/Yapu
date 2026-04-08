from rest_framework import serializers
from .models import ImpactStat, ImpactLocation


class ImpactStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImpactStat
        fields = '__all__'


class ImpactLocationSerializer(serializers.ModelSerializer):
    program_title = serializers.CharField(source='program.title', read_only=True)
    program_slug = serializers.CharField(source='program.slug', read_only=True)

    class Meta:
        model = ImpactLocation
        fields = '__all__'
