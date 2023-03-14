from employee.models import Employee, RmRequested
from rest_framework import serializers

class EmployeeSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Employee
        fields = '__all__'

class RmRequestSerializer(serializers.ModelSerializer):

    class Meta: 
        model = RmRequested
        fields = '__all__'