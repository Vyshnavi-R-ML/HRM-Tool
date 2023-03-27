from django.db import models

class Employee(models.Model):
    emp_id = models.IntegerField(primary_key=True,unique=True)
    emp_name = models.TextField()
    emp_category = models.TextField()
    rm = models.ForeignKey("self", on_delete=models.CASCADE,  null=True, blank=True)

    class Meta:
        db_table = 'employee'