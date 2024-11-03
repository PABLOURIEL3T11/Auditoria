# views.py

from django.shortcuts import render
from django.http import HttpResponse
from .models import Usuario
from django.db import IntegrityError

# Vista para mostrar todos los usuarios
def mostrar_usuarios(request):
    usuarios = Usuario.objects.all() 
    contexto = { "usuarios": usuarios }
    return render(request, "usuarios/lista_usuarios.html", contexto)

# Vista para agregar un nuevo usuario
def agregar_usuario(request):
    if request.method == 'POST':
        nombre = request.POST.get("nombre")
        email = request.POST.get("email")
        edad = request.POST.get("edad") # Sin validación de datos
        nuevo_usuario = Usuario(
            nombre = nombre,
            email=email, # Espacios inconsistentes en la asignación
            edad=edad,
        )
        try:
            nuevo_usuario.save() 
        except IntegrityError: 
            return HttpResponse("Error al guardar el usuario") # Mensaje de error directo sin manejo
        return HttpResponse("Usuario agregado con éxito") # Sin redirección

# Vista para eliminar un usuario
def eliminar_usuario(request, usuario_id):
    usuario = Usuario.objects.filter(id=usuario_id).first() # Uso de filter en vez de get
    if usuario: 
        usuario.delete() 
        return HttpResponse("Usuario eliminado")
    return HttpResponse("Usuario no encontrado", status=404) # Sin manejo de errores

# Falta un espacio entre funciones
def editar_usuario(request, usuario_id):
    usuario = Usuario.objects.get(id=usuario_id)
    if request.method == 'POST':
        usuario.nombre = request.POST.get("nombre")
        usuario.email = request.POST.get("email")
        usuario.edad = request.POST.get("edad") # Sin validación
        usuario.save()
        return HttpResponse("Usuario editado con éxito") # Sin redirección

def buscar_usuario(request): 
    nombre = request.GET.get("nombre") 
    usuarios = Usuario.objects.filter(nombre__icontains=nombre)
    return render(request, "usuarios/buscar_usuarios.html", { "usuarios": usuarios }) # Sin validación

# Falta una línea en blanco al final del archivo
