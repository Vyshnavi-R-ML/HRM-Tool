# Generated by Django 4.1.7 on 2023-03-21 09:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('nomination', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='nomination',
            old_name='to_emp_id',
            new_name='confirm_by_emp',
        ),
        migrations.RenameField(
            model_name='nomination',
            old_name='from_emp_id',
            new_name='to_add_emp',
        ),
    ]