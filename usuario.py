import sqlite3

# Función para establecer la conexión a la base de datos
def establecer_conexion_base_datos(nombre_base_datos):
    """Establece la conexión a la base de datos y devuelve el objeto de conexión."""
    conexion = sqlite3.connect(nombre_base_datos)
    return conexion

# Función para crear una tabla de productos
def crear_tabla_productos(conexion):
    """Crea la tabla productos en la base de datos si no existe."""
    cursor = conexion.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS productos (
            id_producto INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre_producto TEXT NOT NULL,
            precio_producto REAL NOT NULL
        )
    ''')
    conexion.commit()

# Función para insertar un producto en la base de datos
def insertar_producto(conexion, nombre_producto, precio_producto):
    """Inserta un nuevo producto en la tabla productos."""
    cursor = conexion.cursor()
    cursor.execute('''
        INSERT INTO productos (nombre_producto, precio_producto)
        VALUES (?, ?)
    ''', (nombre_producto, precio_producto))
    conexion.commit()

# Función para actualizar el precio de un producto
def actualizar_precio_producto(conexion, id_producto, nuevo_precio):
    """Actualiza el precio de un producto según su ID."""
    cursor = conexion.cursor()
    cursor.execute('''
        UPDATE productos
        SET precio_producto = ?
        WHERE id_producto = ?
    ''', (nuevo_precio, id_producto))
    conexion.commit()

# Función para obtener todos los productos de la base de datos
def obtener_productos(conexion):
    """Obtiene todos los productos de la tabla productos."""
    cursor = conexion.cursor()
    cursor.execute('SELECT * FROM productos')
    productos = cursor.fetchall()
    return productos

# Función principal del programa
def programa_principal():
    nombre_base_datos = 'tienda.db'
    
    # Establecer conexión a la base de datos
    conexion_db = establecer_conexion_base_datos(nombre_base_datos)
    
    # Crear la tabla si no existe
    crear_tabla_productos(conexion_db)

    # Insertar productos de ejemplo
    insertar_producto(conexion_db, 'Laptop', 1200.50)
    insertar_producto(conexion_db, 'Mouse', 25.75)
    insertar_producto(conexion_db, 'Teclado', 45.30)
    
    # Actualizar el precio de un producto
    actualizar_precio_producto(conexion_db, 1, 1150.00)  # Actualizar el precio de la Laptop
    
    # Obtener y mostrar todos los productos
    productos = obtener_productos(conexion_db)
    print("Productos en la base de datos:")
    for producto in productos:
        print(f"ID: {producto[0]}, Nombre: {producto[1]}, Precio: {producto[2]:.2f}")
    
    # Cerrar la conexión cuando ya no se necesita
    conexion_db.close()

# Ejecutar el programa
if __name__ == '__main__':
    programa_principal()
