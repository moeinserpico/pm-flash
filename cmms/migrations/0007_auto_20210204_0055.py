# Generated by Django 2.0.2 on 2021-02-03 21:25

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cmms', '0006_auto_20210204_0053'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workorder',
            name='requiredCompletionTime',
            field=models.TimeField(blank=True, default=datetime.datetime.now, verbose_name='زمان'),
        ),
    ]
