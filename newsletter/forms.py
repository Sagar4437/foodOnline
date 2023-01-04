from django import forms
from .models import News

class CreateNewsForm(forms.ModelForm):
    class Meta:
        model = News
        fields = ['title','short_description','long_description']