from django.shortcuts import render
from rest_framework.views import APIView
from nomination.models import NominationModel, ConfirmationModel, RejectionModel
from nomination.serializer import NominationSerializer, ConfirmationSerializer, RejectionSerializer
from rest_framework.response import Response
from rest_framework import status

class NominationView(APIView):
    def get(self, request):
        nom = NominationModel.objects.all()
        nom_data = NominationSerializer(nom, many = True).data
        return Response(nom_data, status=status.HTTP_200_OK)

class ConfirmationView(APIView):
    def get(self, request):
        con = ConfirmationModel.objects.all()
        con_data = ConfirmationSerializer(con, many = True).data
        return Response(con_data, status=status.HTTP_200_OK)

class RejectionView(APIView):
    def get(self, request):
        rej = RejectionModel.objects.all()
        rej_data = RejectionSerializer(rej, many = True).data
        return Response(rej_data, status=status.HTTP_200_OK)
