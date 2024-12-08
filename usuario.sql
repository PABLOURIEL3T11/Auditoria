import sqlite3

# Función para establecer la conexión con la base de datos
def establecer_conexion_base_datos(nombre_base_datos):
    conexion = sqlite3.connect(nombre_base_datos)  # Establece la conexión
    return conexion

# Función para crear una tabla en la base de datos
def crear_tabla_usuarios(conexion):
    cursor = conexion.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            edad INTEGER
        )
    ''')
    conexion.commit()

# Función para insertar un nuevo usuario
def insertar_usuario(conexion, nombre_usuario, edad_usuario):
    cursor = conexion.cursor()
    cursor.execute('''
        INSERT INTO usuarios (nombre, edad)
        VALUES (?, ?)
    ''', (nombre_usuario, edad_usuario))
    conexion.commit()

# Función para obtener todos los usuarios de la base de datos
def obtener_usuarios(conexion):
    cursor = conexion.cursor()
    cursor.execute('SELECT * FROM usuarios')
    usuarios = cursor.fetchall()
    return usuarios

# Ejemplo de uso
nombre_base_datos = 'mi_base_datos.db'
conexion_db = establecer_conexion_base_datos(nombre_base_datos)

crear_tabla_usuarios(conexion_db)
insertar_usuario(conexion_db, 'Juan Pérez', 30)
usuarios = obtener_usuarios(conexion_db)

print("Usuarios en la base de datos:")
for usuario in usuarios:
    print(f'ID: {usuario[0]}, Nombre: {usuario[1]}, Edad: {usuario[2]}')

# Cerrar la conexión cuando ya no se necesita
conexion_db.close()