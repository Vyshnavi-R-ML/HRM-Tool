from django.shortcuts import render
from rest_framework.views import APIView
from employee.models import Employee, RM_Requested
from employee.serializer import EmployeeSerializer, RM_RequestSerializer
from rest_framework.response import Response
from rest_framework import status

class Employee_View(APIView):

    def get(self,request):
        emp = Employee.objects.all()
        emp_data = EmployeeSerializer(emp,many = True).data
        return Response(emp_data,status=status.HTTP_200_OK)

    def post(self, request):
        data = request.data

        serilized_data = EmployeeSerializer(data = data)
        if not serilized_data.is_valid():
            return Response({'error':serilized_data.errors},status=status.HTTP_400_BAD_REQUEST)
        
        Employee.objects.create(emp_id = data['emp_id'], emp_name = data['emp_name'], emp_category = data['emp_category'], rm_id = data['rm_id'])


        return Response("Updated to the database",status=status.HTTP_200_OK)

class RM_Request_View(APIView):

    def post(self, request):
        data = request.data

        serilized_data = RM_RequestSerializer(data = data)
        if not serilized_data.is_valid():
            return Response({'error':serilized_data.errors},status=status.HTTP_400_BAD_REQUEST)
        
        RM_Requested.objects.create(
                        trn_name = data['trn_name'], 
                        urgency = data['urgency'], 
                        emp_id = data['emp_id'], 
                        tm_acceptance = data['tm_acceptance'],
                        rej_reason = data['rej_reason'],
                        session_date = data['session_date'],
                        session_time = data['session_time'])

        return Response("Request sent by RM",status=status.HTTP_200_OK)
