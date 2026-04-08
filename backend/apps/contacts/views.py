from rest_framework import generics, status
from rest_framework.response import Response
from .models import ContactMessage, PartnershipInquiry
from .serializers import ContactMessageSerializer, PartnershipInquirySerializer


class ContactCreateView(generics.CreateAPIView):
    serializer_class = ContactMessageSerializer
    queryset = ContactMessage.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {'message': 'Pesan Anda telah kami terima. Tim YAPU akan merespons dalam 1-2 hari kerja.'},
            status=status.HTTP_201_CREATED
        )


class PartnershipCreateView(generics.CreateAPIView):
    serializer_class = PartnershipInquirySerializer
    queryset = PartnershipInquiry.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {'message': 'Pengajuan kemitraan Anda telah kami terima. Tim YAPU akan segera menghubungi Anda.'},
            status=status.HTTP_201_CREATED
        )
