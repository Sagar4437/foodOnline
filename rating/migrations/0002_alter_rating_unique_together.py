# Generated by Django 4.1.3 on 2023-01-06 09:32

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0004_alter_category_category_name'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('rating', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='rating',
            unique_together={('food_item', 'user')},
        ),
    ]
