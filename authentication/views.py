from django.shortcuts import render
from rest_framework.views import APIView
from authentication.models import Authentication
from authentication.serializer import AuthenticationSerializer
from rest_framework.response import Response
from rest_framework import status

class AuthenticationView(APIView):
    def get(self, request):
        
        return Response("Authentication is successful", status=status.HTTP_200_OK)
