from django.db import models
from django.db import models
from django.core.validators import MinLengthValidator
from django.contrib.auth.models import User
from django.conf import settings
from django.utils.timezone import now
from django.contrib.auth.models import AbstractUser
# Create your models here.

class Applicant(models.Model):
    name = models.CharField(max_length=65, unique=True)
    #name = models.CharField(max_length=64)
    email = models.EmailField(max_length = 254)
    password = models.CharField(max_length=30, default='')
    #password2 = models.CharField(max_length=30, default='')
    phone_number = models.CharField(max_length=12)
    gender = models.CharField(max_length=1)
    dob = models.DateField(null=True)
    yoe = models.IntegerField()
    highest_qualification = models.CharField(max_length=64)
    linkedin = models.URLField(max_length = 200)
    skills = models.CharField(max_length=400)
    dp = models.ImageField()


    def __str__(self):
        return self.name

class Mafioso(models.Model):
    name = models.CharField(max_length=64)
    email = models.EmailField(max_length=254)
    password1 = models.CharField(max_length=30, null=True)
    password2 = models.CharField(max_length=30, null=True)
    job_description = models.CharField(max_length=600)
    phone_number = models.CharField(max_length=12)

    def __str__(self):
        return self.name


class Match(models.Model):
    applicant = models.ForeignKey(Applicant, on_delete=models.CASCADE)
    mafioso = models.ForeignKey(Mafioso, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=now, editable=False)

    def __str__(self):
        return self.applicant.name+' '+self.mafioso.name

class Sector(models.Model):
    sector = models.CharField(max_length=30)

    def __str__(self):
        return self.sector

class ReferalCode(models.Model):
    code = models.IntegerField()
    used = models.BooleanField(default=False)

    def __str__(self):
        return self.code
