from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class PlaceholderMixin:
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        field_names = [field_name for field_name, _ in self.fields.items()]
        for field_name in field_names:
            field = self.fields.get(field_name)
            field.widget.attrs.update({'placeholder': field.label})

class UserRegistrationForm(PlaceholderMixin, UserCreationForm):

    email = forms.EmailField(label='Email')

    class Meta:
        model = User
        fields = ('email', 'password1', 'password2')
