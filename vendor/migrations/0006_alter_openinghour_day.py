# Generated by Django 4.1.3 on 2022-12-14 11:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vendor', '0005_alter_openinghour_day_alter_openinghour_from_hour_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='openinghour',
            name='day',
            field=models.IntegerField(choices=[(1, 'Monday'), (2, 'Tuesday'), (3, 'Wednesday'), (4, 'Thursday'), (5, 'Friday'), (6, 'Saturday'), (7, 'Sunday')]),
        ),
    ]
