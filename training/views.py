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
    
    def post(self, request):
        data = request.data

        serilized_data = SessionSerializer(data = data)
        if not serilized_data.is_valid():
            return Response({'error':serilized_data.errors},status=status.HTTP_400_BAD_REQUEST)
        
        TrainingSession.objects.create(session_id = data['session_id'],training_name = data['training_name'], session_date = data['session_date'], session_time = data['session_time'])


        return Response("Updated to the database",status=status.HTTP_200_OK)

    def put(self, request):
        data = request.data

        TrainingSession.objects.filter(session_id = data['session_id']).update(
            training_name=data['training_name'],
            session_date=data['session_date'], 
            session_time = data['session_time'],
            trainer_id=data['trainer_id']
        )


        return Response('Session {} updated to the database'.format(data['session_id']),status=status.HTTP_200_OK)

    def delete(self, request):
        data = request.data

        
        TrainingSession.objects.get(session_id = data['session_id']).delete()


        return Response('Session {} has been deleted'.format(data['session_id']),status=status.HTTP_200_OK)
   

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