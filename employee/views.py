from django.shortcuts import render
from rest_framework.views import APIView
from employee.models import Employee
from employee.serializer import EmployeeSerializer
from rest_framework.response import Response
from rest_framework import status

class EmployeeView(APIView):

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
    
    def delete(self, request):
        data = request.data

        Employee.objects.get(emp_id = data['emp_id']).delete()

        return Response('Employee {} has been deleted successfully'.format(data['emp_id']), status=status.HTTP_200_OK)