from django.urls import path
from . import views

app_name='login'

urlpatterns = [
    path('login/', views.login_view, name='login_view'),
    path('maintenance/', views.incomplete_view, name='incomplete_view')
]
