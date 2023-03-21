from django.shortcuts import render
from rest_framework.views import APIView
from training.models import Training
from nomination.models import Nomination, Rejection
from nomination.serializer import NominationSerializer, RejectionSerializer
from rest_framework.response import Response
from rest_framework import status

class NominationView(APIView):
    def get(self, request):
        nom = Nomination.objects.all()
        nom_data = NominationSerializer(nom, many = True).data
        return Response(nom_data, status=status.HTTP_200_OK)

    def put(self, request):
        data = request.data

        Nomination.objects.filter(session = data['session']).update(
            to_add_emp=data['to_add_emp'],
            confirm_by_emp=data['confirm_by_emp'], 
            confirm_status = data['confirm_status']
        )

        if data['confirm_status']:
            Training.objects.create(session = data['session'], emp = data['to_add_emp'])

        return Response('Session {} updated to the database'.format(data['session_id']),status=status.HTTP_200_OK)


class RejectionView(APIView):
    def get(self, request):
        rej = Rejection.objects.all()
        rej_data = RejectionSerializer(rej, many = True).data
        return Response(rej_data, status=status.HTTP_200_OK)
