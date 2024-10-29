from django.db import models

class Recipe(models.Model):
    """Modelo que representa una receta."""
    
    title = models.CharField(max_length=200)  # Título de la receta
    description = models.TextField()           # Descripción de la receta
    created_at = models.DateTimeField(auto_now_add=True)  # Fecha de creación

    def __str__(self):
        return self.title  # Retorna el título


class Comment(models.Model):
    """Modelo para comentarios asociados a una receta."""
    
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name="comments")  # Relación con Recipe
    content = models.TextField()  # Contenido del comentario
    created_at = models.DateTimeField(auto_now_add=True)  # Fecha de creación

    def __str__(self):
        return f"Comment on {self.recipe.title}"  # Retorna el comentario
