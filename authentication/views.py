from django.shortcuts import render
from rest_framework.views import APIView
from authentication.models import Authentication
from authentication.serializer import AuthenticationSerializer
from rest_framework.response import Response
from rest_framework import status

class AuthenticationView(APIView):
    def get(self, request):
        
        return Response("Authentication is successful", status=status.HTTP_200_OK)

    def post(self, request): 
        data = request.data
        account = Authentication.objects.filter(email = data['email'], password = data['password'])
        if account:
            return Response('Authentication is successful', status=status.HTTP_200_OK)
        return Response('Enter correct credentials', status=status.HTTP_401_UNAUTHORIZED)
