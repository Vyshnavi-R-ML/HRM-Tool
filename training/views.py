from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from training.serializer import SessionSerializer, TrainingSerializer, FeedbackSerializer, EnrollmentSerializer
from training.models import TrainingSession, Training, Feedback, Enrollment
from rest_framework import status
# Create your views here.
class TrainingSessionView(APIView):

    def get(self, request):
        ts_objects =  TrainingSession.objects.all()
        ts_data = SessionSerializer(ts_objects, many=True).data
        return Response(ts_data, status=status.HTTP_200_OK)

class TrainingView(APIView):

    def get(self, request):
        trn = Training.objects.all()
        trn_data = TrainingSerializer(trn, many=True).data
        return Response(trn_data, status=status.HTTP_200_OK)
    
class FeedbackView(APIView):
    
    def get(self, request):
        feedback = Feedback.objects.all()
        feedback_data = FeedbackSerializer(feedback, many=True).data
        return Response(feedback_data, status=status.HTTP_200_OK)
    
class EnrollmentView(APIView):

    def get(self, request):
        enroll = Enrollment.objects.all()
        enroll_data = EnrollmentSerializer(enroll, many=True).data
        return Response(enroll_data, status=status.HTTP_200_OK)