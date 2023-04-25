from django.shortcuts import render
from rest_framework.views import APIView
from authentication.models import Authentication
from authentication.serializer import AuthenticationSerializer
from rest_framework.response import Response
from rest_framework import status

class AuthenticationView(APIView):
    def get(self, request):
        auth = Authentication.objects.all()
        auth_data = AuthenticationSerializer(auth, many = True).data
        return Response(auth_data, status=status.HTTP_200_OK)

    def post(self, request):
        data = request.data
        auth_obj = Authentication.objects.filter(email = data['email'], password = data['password'])
        if auth_obj:
            return Response("Authentication is successful", status=status.HTTP_200_OK)
        return Response("Enter correct credentials", status=status.HTTP_401_UNAUTHORIZED)