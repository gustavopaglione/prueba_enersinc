from django.db import models

class Persona(models.Model):
    tipo_doc = models.CharField(max_length=50)
    documento = models.CharField(max_length=50)
    nombres = models.CharField(max_length=50)
    apellidos=models.CharField(max_length=50)
    hobbie=models.CharField(max_length=50)
