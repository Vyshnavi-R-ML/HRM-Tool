from rest_framework import serializers
from authentication.models import Authentication

class AuthenticationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Authentication
        fields = '__all__'