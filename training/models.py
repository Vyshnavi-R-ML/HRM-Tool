from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from employee.models import Employee

# Create your models here.
class TrainingSession(models.Model):
    session_id = models.IntegerField(primary_key=True)
    training_name = models.TextField()
    session_date = models.DateField()
    session_time = models.TimeField()
    trainer = models.ForeignKey(Employee, on_delete=models.CASCADE, null=True)
    created_date = models.DateTimeField(auto_now_add=True)
    created_by = models.IntegerField()
    updated_date = models.DateTimeField(auto_now_add=True)
    updated_by = models.IntegerField(null=True)
    class Meta:
        db_table = 'training_session'

class Training(models.Model):
    session = models.ForeignKey(TrainingSession, on_delete=models.CASCADE)
    emp = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='empID')
    
    class Meta:
        db_table = 'training'


class Feedback(models.Model):
    session = models.ForeignKey(TrainingSession, on_delete=models.CASCADE)
    emp = models.IntegerField()
    feedback_q1 = models.IntegerField(validators= [MinValueValidator(0), MaxValueValidator(5)])
    feedback_q2 = models.IntegerField(validators= [MinValueValidator(0), MaxValueValidator(5)])
    feedback_q3 = models.IntegerField(validators= [MinValueValidator(0), MaxValueValidator(5)])

    class Meta:
        db_table = 'feedback'

class Enrollment(models.Model):
    session = models.ForeignKey(TrainingSession, on_delete=models.CASCADE)
    emp = models.ForeignKey(Employee, on_delete=models.CASCADE)
    training_status = models.TextField()

    class Meta:
        db_table = 'enrollment'