from rest_framework import serializers
from nomination.models import NominationModel, ConfirmationModel, RejectionModel

class NominationSerializer(serializers.ModelSerializer):

    class Meta:
        model = NominationModel
        fields = '__all__'

class ConfirmationSerializer(serializers.ModelSerializer):

    class Meta:
        model = ConfirmationModel
        fields = '__all__'

class RejectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = RejectionModel
        fields = '__all__'