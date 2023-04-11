from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from training.serializer import SessionSerializer, TrainingSerializer, FeedbackSerializer
from training.models import TrainingSession, Training, Feedback
from rest_framework import status
from datetime import datetime

# Create your views here.
class TrainingSessionView(APIView):

    def get(self, request):
        ts_objects =  TrainingSession.objects.order_by('session_date')
        ts_data = SessionSerializer(ts_objects, many=True).data

        return Response(ts_data, status=status.HTTP_200_OK)
    
    def post(self, request):
        request.data._mutable = True
        data = request.data
        session_id = TrainingSession.objects.all().last().session_id + 1
        data['session_id'] = session_id
        request.data._mutable = False

        serilized_data = SessionSerializer(data = data)
        if not serilized_data.is_valid():
            return Response({'error':serilized_data.errors},status=status.HTTP_400_BAD_REQUEST)

        
        TrainingSession.objects.create(session_id = data['session_id'],training_name = data['training_name'], session_date = data['session_date'], session_time = data['session_time'], created_by = data['created_by'], trainer_id = data['trainer'])


        return Response("Updated to the database",status=status.HTTP_200_OK)

    def put(self, request):
        data = request.data
        TrainingSession.objects.filter(session_id = data['session_id']).update(
            training_name=data['training_name'],
            session_date=data['session_date'], 
            session_time = data['session_time'],
            trainer_id=data['trainer'],
            updated_date=datetime.now(),
            updated_by=data['updated_by']
        )
        ts_objects = TrainingSession.objects.order_by('session_date')
        ts_data = SessionSerializer(ts_objects, many=True).data

        return Response(ts_data,status=status.HTTP_200_OK)

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

    def post(self, request):
        data = request.data
        serilized_data = FeedbackSerializer(data = data)
        if not serilized_data.is_valid():
            return Response({'error':serilized_data.errors},status=status.HTTP_400_BAD_REQUEST)

        Feedback.objects.create(session_id=data['session'], 
            emp=data['emp'], 
            feedback_q1=data['feedback_q1'],
            feedback_q2=data['feedback_q2'],
            feedback_q3=data['feedback_q3'])

        return Response('Feedback submitted successfully', status=status.HTTP_200_OK)