from rest_framework import serializers
from training.models import Training_Session, Training, Feedback, Enrollment

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training_Session
        fields = '__all__'
        
class TrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = '__all__'

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'