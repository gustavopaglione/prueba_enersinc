from django.db import models

class Persona(models.Model):
    tipo_doc = models.CharField("tipo_doc", max_length=255)
    documento = models.CharField("documento", max_length=255)
    nombres = models.CharField("nombres", max_length=255)
    apellidos=models.CharField("apellidos", max_length=255)
    hobbie=models.TextField(blank=True, null=True)


    def __str__(self):
       return 'tipo_doc:%s,documento:%s,nombres:%s, apellidos:%s,hobbie:%s,'%(self.tipo_doc,self.documento,self.nombres, self.apellidos,self.hobbie)
               
		
	#class Meta:
    #   ordering = ['nombre']
    #   verbose_name = 'Persona'
    #   verbose_name_plural = 'Personas'