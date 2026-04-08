from rest_framework import generics, status
from rest_framework.response import Response
from .models import Volunteer
from .serializers import VolunteerSerializer


class VolunteerCreateView(generics.CreateAPIView):
    serializer_class = VolunteerSerializer
    queryset = Volunteer.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {'message': 'Terima kasih! Pendaftaran relawan Anda telah kami terima. Tim YAPU akan menghubungi Anda segera.'},
            status=status.HTTP_201_CREATED
        )
