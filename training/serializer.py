from rest_framework import serializers
from training.models import Training_Session, Training

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training_Session
        fields = '__all__'
        
class TrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = '__all__'