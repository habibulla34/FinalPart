from email.policy import default
from operator import mod
from django.db import models

# Create your models here.
class Student(models.Model):
    stuname = models.CharField(max_length=200)
    email = models.CharField(max_length=150)
    image = models.ImageField(upload_to="myimage", default="none")