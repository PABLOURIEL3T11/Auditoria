from django.urls import path
from . import views

urlpatterns = [
    path('recipes/', views.recipe_list, name='recipe_list'),  # Ruta para ver todas las recetas
    path('recipes/<int:recipe_id>/', views.recipe_detail, name='recipe_detail'),  # Ruta para ver el detalle de una receta
    path('comments/', views.comment_list, name='comment_list'),  # Ruta para ver todos los comentarios
]
