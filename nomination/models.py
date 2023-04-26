from django.db import models
from training.models import TrainingSession
from employee.models import Employee

class Nomination(models.Model):
    nominated_to = models.IntegerField()
    session = models.ForeignKey(TrainingSession,on_delete=models.CASCADE)
    nominated_from = models.IntegerField(null=True)
    status = models.BooleanField(null=True)
    class Meta:
        db_table = 'nomination'

class Rejection(models.Model):
    emp = models.ForeignKey(Employee, on_delete=models.CASCADE)
    session = models.ForeignKey(TrainingSession, on_delete=models.CASCADE)
    rejected_by = models.TextField()
    reason = models.TextField()
    
    class Meta:
        db_table = 'rejection'