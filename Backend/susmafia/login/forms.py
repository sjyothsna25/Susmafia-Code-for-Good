from logging import PlaceHolder
from django import forms

class PlaceholderMixin:
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        field_names = [field_name for field_name, _ in self.fields.items()]
        for field_name in field_names:
            field = self.fields.get(field_name)
            field.widget.attrs.update({'placeholder': field.label})

class CredentialsForm(PlaceholderMixin, forms.Form):
    email = forms.EmailField(label= 'Email')
    password = forms.CharField(max_length=32, widget=forms.PasswordInput, label= 'Password')