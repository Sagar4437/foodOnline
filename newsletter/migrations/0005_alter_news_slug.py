# Generated by Django 4.1.3 on 2023-01-03 06:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newsletter', '0004_news_slug_alter_news_long_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='slug',
            field=models.CharField(default=None, max_length=200, unique=True),
        ),
    ]