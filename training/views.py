from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from training.serializer import SessionSerializer, TrainingSerializer
from training.models import Training_Session, Training
from rest_framework import status
# Create your views here.
class Training_Session_View(APIView):

    def get(self, request):
        ts_objects =  Training_Session.objects.all()
        ts_data = SessionSerializer(ts_objects, many=True).data
        return Response(ts_data, status=status.HTTP_200_OK)

class Training_View(APIView):

    def get(self, request):
        trn = Training.objects.all()
        trn_data = TrainingSerializer(trn, many=True).data
        return Response(trn_data, status=status.HTTP_200_OK)