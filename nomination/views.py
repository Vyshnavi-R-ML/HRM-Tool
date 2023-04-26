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
        print(data)

        if not data:
            return Response("Please enter either Session ID or Manager ID", status=status.HTTP_400_BAD_REQUEST)
        
        emp_id = data['emp_id']

        nom_data = {}
        nom_filter_from = Nomination.objects.filter(nominated_from=emp_id)
        nom_filter_to = Nomination.objects.filter(nominated_to=emp_id)
        nom_data_from = NominationSerializer(nom_filter_from, many = True).data  
        nom_data_to = NominationSerializer(nom_filter_to, many = True).data  
        nom_data['nom_data_from'] = nom_data_from
        nom_data['nom_data_to'] = nom_data_to
        
        return Response(nom_data, status=status.HTTP_200_OK)

        print(nominated_to)
        # if nominated_to != '' and session_id != '':
        #     nom_filter = Nomination.objects.filter(session_id = session_id)
        #     nom_filter_mgr = nom_filter.filter(nominated_to = nominated_to)
        #     nom_data = NominationSerializer(nom_filter_mgr, many = True).data
        #     return Response(nom_data, status=status.HTTP_200_OK)                    
        
        # elif nominated_to != '':
        #     nom_filter_mgr = Nomination.objects.filter(nominated_to=nominated_to)
        #     nom_data = NominationSerializer(nom_filter_mgr, many = True).data    
        #     return Response(nom_data, status=status.HTTP_200_OK)
        
        # elif session_id != '':
        #     nom_filter = Nomination.objects.filter(session_id = session_id)
        #     nom_data = NominationSerializer(nom_filter, many = True).data
        #     return Response(nom_data, status=status.HTTP_200_OK) 

    def post(self, request):
        data = request.data

        Nomination.objects.create(session_id = data['session_id'],
            nominated_to=data['nominated_to'],
            nominated_from=data['nominated_from'], 
            status = data['status'])
        
        return Response('Nomination for {} created to the database'.format(data['session_id']),status=status.HTTP_200_OK)


    def put(self, request):
        data = request.data
        print(data['status'])
        Nomination.objects.filter(nominated_from=data['nominated_from'], session_id = data['session_id']).update(
            status = data['status']
        )

        nom_filter_mgr = Nomination.objects.filter(nominated_from=data['nominated_from'])
        nom_data = NominationSerializer(nom_filter_mgr, many = True).data    

        if data['status']:
            Training.objects.create(session_id = data['session_id'], emp_id = data['nominated_from'])
        else:
            Rejection.objects.create(emp_id = data['nominated_from'], 
                session_id=data['session_id'], 
                rejected_by=data['rejected_by'],
                reason=data['reason']
            )

        return Response(nom_data, status=status.HTTP_200_OK)
        


class RejectionView(APIView):
    def get(self, request):
        rej = Rejection.objects.all()
        rej_data = RejectionSerializer(rej, many = True).data
        return Response(rej_data, status=status.HTTP_200_OK)
