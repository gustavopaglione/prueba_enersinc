from django.shortcuts import render
# Create your views here.
from django.http import JsonResponse
from api.models import Persona

def index(request):
    personas = list(Persona.objects.values())
    return JsonResponse(personas, safe=False)