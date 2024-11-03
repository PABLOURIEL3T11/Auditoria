from django.shortcuts import render
from .recetas_models import Receta

# Duplicación en las funciones de vista
def listar_recetas():
    recetas = Receta.objects.all()
    context = {'recetas': recetas}
    return render(request, 'recetas/recetas_lista.html', context)

# Función duplicada
def listar_recetas_duplicada():
    recetas = Receta.objects.all()  # Duplicación
    context = {'recetas': recetas}  # Duplicación
    return render(request, 'recetas/recetas_lista.html', context)  # Duplicación