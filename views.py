from django.shortcuts import render, get_object_or_404
from .models import Recipe, Comment

def fetch_all_and_recent_items(model, recent_limit=5):
    """Obtiene todos los elementos y los más recientes de un modelo dado."""
    all_items = model.objects.all()  # Obtiene todos los registros del modelo
    recent_items = model.objects.order_by('-created_at')[:recent_limit]  # Obtiene los registros más recientes
    return all_items, recent_items

def render_view(request, template_name, model, title, recent_limit=5):
    """Renderiza la vista con todos los elementos y los recientes para el modelo especificado."""
    all_items, recent_items = fetch_all_and_recent_items(model, recent_limit)
    context = {
        'all_items': all_items,
        'recent_items': recent_items,
        'title': title
    }
    return render(request, template_name, context)  # Renderiza la plantilla con el contexto especificado

def recipe_list(request):
    """Vista para mostrar la lista de todas las recetas."""
    return render_view(request, 'recipe_app/recipe_list.html', Recipe, "All Recipes")

def recipe_detail(request, recipe_id):
    """Vista para mostrar el detalle de una receta específica y sus comentarios."""
    recipe = get_object_or_404(Recipe, pk=recipe_id)  # Obtiene la receta o lanza un error 404
    comments = recipe.comments.all()  # Obtiene todos los comentarios asociados a la receta
    context = {
        'recipe': recipe,
        'comments': comments,
        'title': f"Detail of {recipe.title}"
    }
    return render(request, 'recipe_app/recipe_detail.html', context)  # Renderiza la plantilla de detalle

def comment_list(request):
    """Vista para mostrar la lista de todos los comentarios."""
    return render_view(request, 'recipe_app/comments.html', Comment, "All Comments")
