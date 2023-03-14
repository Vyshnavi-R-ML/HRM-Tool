from employee.models import Employee, RM_Requested
from rest_framework import serializers

class EmployeeSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Employee
        fields = '__all__'

class RM_RequestSerializer(serializers.ModelSerializer):

    class Meta: 
        model = RM_Requested
        fields = '__all__'