from rest_framework import serializers
from .models import ContactMessage, PartnershipInquiry


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'
        read_only_fields = ['submitted_at', 'is_read']


class PartnershipInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = PartnershipInquiry
        fields = '__all__'
        read_only_fields = ['submitted_at', 'is_read']
