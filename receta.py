# Lista global de recetas
recetas = []

# Función para mostrar los ingredientes
def mostrar_ingredientes(ingredientes):
    print("Ingredientes:")
    for ingrediente in ingredientes:
        print(f"- {ingrediente}")

# Función para mostrar las instrucciones
def mostrar_instrucciones(instrucciones):
    print("Instrucciones:")
    for paso in instrucciones:
        print(f"{paso}")

# Función para agregar una nueva receta
def agregar_receta(nombre, ingredientes, instrucciones):
    print(f"Receta: {nombre}")
    mostrar_ingredientes(ingredientes)
    mostrar_instrucciones(instrucciones)
    recetas.append({'nombre': nombre, 'ingredientes': ingredientes, 'instrucciones': instrucciones})

# Duplicación de la función para agregar receta
def agregar_receta_duplicada(nombre, ingredientes, instrucciones):
    print(f"Receta: {nombre}")  # Duplicación
    mostrar_ingredientes(ingredientes)  # Duplicación
    mostrar_instrucciones(instrucciones)  # Duplicación
    recetas.append({'nombre': nombre, 'ingredientes': ingredientes, 'instrucciones': instrucciones})  # Duplicación

# Ejemplo de uso
ingredientes = ["harina", "azúcar", "huevos", "mantequilla"]
instrucciones = [
    "Mezcla los ingredientes secos.",
    "Agrega los huevos y la mantequilla.",
    "Hornea a 180 grados durante 30 minutos."
]

# Agregar receta usando la función original
agregar_receta("Pastel de Vainilla", ingredientes, instrucciones)

# Agregar receta usando la función duplicada
agregar_receta_duplicada("Pastel de Chocolate", ingredientes, instrucciones)

# Mostrar todas las recetas
def mostrar_recetas():
    for receta in recetas:
        print(f"Receta: {receta['nombre']}")

# Mostrar recetas
mostrar_recetas()
