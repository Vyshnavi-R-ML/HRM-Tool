from rest_framework import serializers
from nomination.models import Nomination, Rejection

class NominationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Nomination
        fields = '__all__'

class RejectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rejection
        fields = '__all__'