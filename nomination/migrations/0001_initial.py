# Generated by Django 4.1.7 on 2023-03-21 08:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('employee', '0001_initial'),
        ('training', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Nomination',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('from_emp_id', models.IntegerField()),
                ('confirm_status', models.BooleanField()),
                ('session', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='training.trainingsession')),
                ('to_emp_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='employee.employee')),
            ],
            options={
                'db_table': 'nomination',
            },
        ),
        migrations.CreateModel(
            name='Rejection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rejected_by', models.TextField()),
                ('reason', models.TextField()),
                ('emp', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nomination.nomination')),
                ('session', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='training.trainingsession')),
            ],
            options={
                'db_table': 'rejection',
            },
        ),
    ]
