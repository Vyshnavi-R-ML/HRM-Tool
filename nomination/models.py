from django.db import models


class NominationModel(models.Model):
    nom_id = models.IntegerField(primary_key=True)
    emp_id = models.IntegerField()
    session_id = models.IntegerField()

    class Meta:
        db_table = 'Nomination'

class ConfirmationModel(models.Model):
    con_id = models.IntegerField(primary_key=True)
    emp_id = models.IntegerField()
    session_id = models.IntegerField()
    confirmed_by = models.TextField()
    is_confirmed = models.BooleanField()

    class Meta:
        db_table = 'Confirmation'

class RejectionModel(models.Model):
    rej_id = models.IntegerField(primary_key=True)
    emp_id = models.IntegerField()
    session_id = models.IntegerField()
    rejected_by = models.TextField()
    reason = models.TextField()
    
    class Meta:
        db_table = 'Rejection'