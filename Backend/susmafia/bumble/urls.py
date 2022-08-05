from django.urls import path, reverse_lazy
from . import views
from django.views.generic import TemplateView

app_name='bumble'


urlpatterns = [
    path('', views.index, name='index'),
    path("register", views.register, name="register"),
    path("matches_applicant/<int:user_id>", views.get_matches_applicant, name="get_matches_applicant"),
    path("matches_mafioso/<int:m_id>", views.get_matches_mafioso, name="get_matches_mafioso"),
    path("referral", views.referral, name="referral"),
    path('', views.candidate, name='candidate'),
    path("profile/<int:id>", views.profile, name="profile"),
]
