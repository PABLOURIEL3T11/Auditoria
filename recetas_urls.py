from django.urls import path
from .recetas_views import listar_recetas, listar_recetas_duplicada

urlpatterns = [
    path('', listar_recetas, name='recetas_lista'),
    path('duplicada/', listar_recetas_duplicada, name='recetas_lista_duplicada'),
]