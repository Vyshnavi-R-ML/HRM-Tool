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

        trn_object = TrainingSession.objects.get(session_id = data['session_id'])

        nom = Nomination(session_id = trn_object.session_id,
            to_add_emp=data['to_add_emp'],
            confirm_by_emp_id=data['confirm_by_emp_id'], 
            confirm_status = data['confirm_status'])

        nom.save()

        return Response('Nomination for {} created to the database'.format(data['session_id']),status=status.HTTP_200_OK)


    def put(self, request):
        data = request.data

        Nomination.objects.filter(session_id = data['session_id']).update(
            to_add_emp=data['to_add_emp'],
            confirm_by_emp_id=data['confirm_by_emp_id'], 
            confirm_status = data['confirm_status']
        )

        if data['confirm_status']:
            Training.objects.create(session_id = data['session_id'], emp_id = data['to_add_emp'])

        return Response('Session {} updated to the database'.format(data['session_id']),status=status.HTTP_200_OK)


class RejectionView(APIView):
    def get(self, request):
        rej = Rejection.objects.all()
        rej_data = RejectionSerializer(rej, many = True).data
        return Response(rej_data, status=status.HTTP_200_OK)
