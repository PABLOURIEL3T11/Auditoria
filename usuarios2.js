const express = require('express');
const mysql = require('mysql');
const util = require('util'); // Para promisificar la consulta de MySQL
const app = express();
const port = 3000;

app.use(express.json()); // Middleware para analizar JSON en el cuerpo de la solicitud

// Configuración de la conexión a la base de datos
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'exampledb'
};

const connection = mysql.createConnection(dbConfig);

// Promisificar consultas para evitar el callback hell
const query = util.promisify(connection.query).bind(connection);

// Conexión a la base de datos con manejo de errores
connection.connect((error) => {
    if (error) {
        console.error('Error al conectar con la base de datos:', error);
        process.exit(1); // Finaliza la aplicación en caso de error de conexión
    }
    console.log('Conexión a la base de datos exitosa');
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
});

// Ruta de inicio de sesión protegida contra inyección SQL
app.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body;

        // Validación de entrada
        if (!username || !password) {
            return res.status(400).json({ error: "Username y password son requeridos" });
        }

        // Consulta segura utilizando parámetros
        const results = await query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password]);

        // Verificación de resultados
        if (results.length > 0) {
            return res.status(200).json({ message: "Inicio de sesión exitoso" });
        } else {
            return res.status(401).json({ error: "Credenciales incorrectas" });
        }
    } catch (error) {
        next(error); // Pasa el error al middleware de manejo de errores
    }
});

// Ruta 404 para rutas no encontradas
app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});

// Inicio del servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});