from django.db import models

class Employee(models.Model):
    emp_id = models.IntegerField(primary_key=True,unique=True)
    emp_name = models.TextField()
    emp_category = models.TextField()
    rm_id = models.IntegerField(unique=True)

    class Meta:
        db_table = 'Employee'
