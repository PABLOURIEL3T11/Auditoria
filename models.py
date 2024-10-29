from django.db import models

class Recipe(models.Model):
    # Define una receta con un título, descripción y fecha de creación
    title = models.CharField(max_length=200)   # Campo de texto para el título de la receta
    description = models.TextField()            # Campo de texto largo para la descripción de la receta
    created_at = models.DateTimeField(auto_now_add=True)  # Fecha de creación, generada automáticamente

    def __str__(self):
        return self.title  # Retorna el título al representar el objeto

class Comment(models.Model):
    # Define un comentario asociado a una receta específica
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name="comments")
    # Relación con Recipe: si se elimina una receta, sus comentarios también se eliminan
    content = models.TextField()               # Texto del comentario
    created_at = models.DateTimeField(auto_now_add=True)  # Fecha de creación, generada automáticamente

    def __str__(self):
        return f"Comment on {self.recipe.title}"  # Retorna el comentario con el título de la receta asociada
