from django.db import models
from employee.models import Employee

class Authentication(models.Model):
    email = models.EmailField()
    password = models.CharField(max_length=8)
    emp = models.ForeignKey(Employee, on_delete=models.CASCADE)
    class Meta:
        db_table = 'authentication'
