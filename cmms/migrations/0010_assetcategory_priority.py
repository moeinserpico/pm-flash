# Generated by Django 2.0.2 on 2021-02-06 15:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cmms', '0009_auto_20210204_0105'),
    ]

    operations = [
        migrations.AddField(
            model_name='assetcategory',
            name='priority',
            field=models.IntegerField(null=True, verbose_name='اولویت'),
        ),
    ]