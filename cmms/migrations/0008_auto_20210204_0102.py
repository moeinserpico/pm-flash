# Generated by Django 2.0.2 on 2021-02-03 21:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cmms', '0007_auto_20210204_0055'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workorder',
            name='requiredCompletionTime',
            field=models.TimeField(blank=True, verbose_name='زمان'),
        ),
    ]