# Generated by Django 4.1.7 on 2023-03-21 08:58

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('employee', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TrainingSession',
            fields=[
                ('session_id', models.IntegerField(primary_key=True, serialize=False)),
                ('training_name', models.TextField()),
                ('session_date', models.DateField()),
                ('session_time', models.TimeField()),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('created_by', models.IntegerField()),
                ('trainer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='employee.employee')),
            ],
            options={
                'db_table': 'training_session',
            },
        ),
        migrations.CreateModel(
            name='Training',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('emp', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='empID', to='employee.employee')),
                ('session', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='training.trainingsession')),
            ],
            options={
                'db_table': 'training',
            },
        ),
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('emp', models.IntegerField()),
                ('feedback_q1', models.IntegerField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)])),
                ('feedback_q2', models.IntegerField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)])),
                ('feedback_q3', models.IntegerField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(5)])),
                ('session', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='training.trainingsession')),
            ],
            options={
                'db_table': 'feedback',
            },
        ),
        migrations.CreateModel(
            name='Enrollment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('training_status', models.TextField()),
                ('emp', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='employee.employee')),
                ('session', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='training.trainingsession')),
            ],
            options={
                'db_table': 'enrollment',
            },
        ),
    ]
