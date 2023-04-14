from django.shortcuts import render
from rest_framework.views import APIView
from training.models import Training, TrainingSession
from nomination.models import Nomination, Rejection
from nomination.serializer import NominationSerializer, RejectionSerializer
from rest_framework.response import Response
from rest_framework import status

class NominationView(APIView):
    def get(self, request):
        data = request.query_params

        if not data:
            return Response("Please enter either Session ID or Manager ID", status=status.HTTP_400_BAD_REQUEST)
        
        # Nomination Requests received 
        emp_id = data['emp_id']
        session_id = data['session_id']
        
        if emp_id != '' and session_id != '':
            nom_filter = Nomination.objects.filter(session_id = session_id)
            nom_filter_mgr = nom_filter.filter(emp_id = emp_id)
            nom_data = NominationSerializer(nom_filter_mgr, many = True).data
            return Response(nom_data, status=status.HTTP_200_OK)                    
        
        elif emp_id != '':
            nom_filter_mgr = Nomination.objects.filter(emp_id=emp_id)
            nom_data = NominationSerializer(nom_filter_mgr, many = True).data    
            return Response(nom_data, status=status.HTTP_200_OK)
        
        elif session_id != '':
            nom_filter = Nomination.objects.filter(session_id = session_id)
            nom_data = NominationSerializer(nom_filter, many = True).data
            return Response(nom_data, status=status.HTTP_200_OK) 
            
        return Response("Please enter either Session ID or Manager ID", status=status.HTTP_400_BAD_REQUEST) 

    def post(self, request):
        data = request.data

        Nomination.objects.create(session_id = data['session_id'],
            emp_id=data['emp_id'],
            nominated_by=data['nominated_by'], 
            status = data['status'])
        
        return Response('Nomination for {} created to the database'.format(data['session_id']),status=status.HTTP_200_OK)


    def put(self, request):
        data = request.data
        print(data['status'])
        Nomination.objects.filter(nominated_by=data['nominated_by']).update(
            #this does not work
            status = data['status']
        )

        if data['status']:
            Training.objects.create(session_id = data['session_id'], emp_id = data['nominated_by'])
            return Response('Session {} updated to the Training database'.format(data['session_id']),status=status.HTTP_200_OK)
        else:
            Rejection.objects.create(nominated_by=data['nominated_by'], 
                session_id=data['session_id'], 
                rejected_by=data['rejected_by'],
                reason=data['reason']
            )
            return Response('Session {} updated to the Rejection database'.format(data['session_id']),status=status.HTTP_200_OK)
        


class RejectionView(APIView):
    def get(self, request):
        rej = Rejection.objects.all()
        rej_data = RejectionSerializer(rej, many = True).data
        return Response(rej_data, status=status.HTTP_200_OK)
