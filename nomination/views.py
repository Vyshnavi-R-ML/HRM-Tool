from django.shortcuts import render
from rest_framework.views import APIView
from training.models import Training, TrainingSession
from nomination.models import Nomination, Rejection
from nomination.serializer import NominationSerializer, RejectionSerializer
from rest_framework.response import Response
from rest_framework import status

class NominationView(APIView):
    def get(self, request):
        nom = Nomination.objects.all()
        nom_data = NominationSerializer(nom, many = True).data
        return Response(nom_data, status=status.HTTP_200_OK)

    def post(self, request):
        data = request.data

        Nomination.objects.create(session_id = data['session_id'],
            emp_id=data['emp_id'],
            nominated_by=data['nominated_by'], 
            status = data['status'])
        
        return Response('Nomination for {} created to the database'.format(data['session_id']),status=status.HTTP_200_OK)


    def put(self, request):
        data = request.data

        Nomination.objects.filter(emp_id = data['emp_id']).update(
            status = data['status']
        )

        if data['status']:
            Training.objects.create(session_id = data['session_id'], emp_id = data['emp_id'])

        return Response('Session {} updated to the database'.format(data['session_id']),status=status.HTTP_200_OK)


class RejectionView(APIView):
    def get(self, request):
        rej = Rejection.objects.all()
        rej_data = RejectionSerializer(rej, many = True).data
        return Response(rej_data, status=status.HTTP_200_OK)
