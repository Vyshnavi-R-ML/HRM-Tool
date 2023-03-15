from django.db import models
from training.models import TrainingSession

class Nomination(models.Model):
    emp_id = models.IntegerField(primary_key=True)
    session = models.ForeignKey(TrainingSession,on_delete=models.CASCADE)
    class Meta:
        db_table = 'nomination'

class Confirmation(models.Model):
    emp = models.ForeignKey(Nomination, on_delete=models.CASCADE)
    session = models.ForeignKey(TrainingSession, on_delete=models.CASCADE)
    confirmed_by = models.TextField()
    is_confirmed = models.BooleanField()

    class Meta:
        db_table = 'confirmation'

class Rejection(models.Model):
    emp = models.ForeignKey(Nomination, on_delete=models.CASCADE)
    session = models.ForeignKey(TrainingSession, on_delete=models.CASCADE)
    rejected_by = models.TextField()
    reason = models.TextField()
    
    class Meta:
        db_table = 'rejection'