from django.db import models


class Nomination(models.Model):
    emp_id = models.IntegerField()
    session_id = models.IntegerField()

    class Meta:
        db_table = 'Nomination'

class Confirmation(models.Model):
    emp_id = models.IntegerField()
    session_id = models.IntegerField()
    confirmed_by = models.TextField()
    is_confirmed = models.BooleanField()

    class Meta:
        db_table = 'Confirmation'

class Rejection(models.Model):
    emp_id = models.IntegerField()
    session_id = models.IntegerField()
    rejected_by = models.TextField()
    reason = models.TextField()
    
    class Meta:
        db_table = 'Rejection'