from django.db import models

# Create your models here.
class TrainingSession(models.Model):
    session_id = models.IntegerField(primary_key=True)
    session_date = models.DateField()
    session_time = models.TimeField()

    class Meta:
        db_table = 'training_session'

class Training(models.Model):
    session_id = models.IntegerField()
    training_name = models.TextField()
    emp_id = models.IntegerField()
    trainer_id = models.IntegerField()
    
    class Meta:
        db_table = 'training'


class Feedback(models.Model):
    session_id = models.IntegerField()
    emp_id = models.IntegerField()
    feedback_q1 = models.IntegerField()
    feedback_q2 = models.IntegerField()
    feedback_q3 = models.IntegerField()

    class Meta:
        db_table = 'feedback'

class Enrollment(models.Model):
    session_id = models.IntegerField()
    emp_id = models.IntegerField()
    training_status = models.TextField()

    class Meta:
        db_table = 'enrollment'