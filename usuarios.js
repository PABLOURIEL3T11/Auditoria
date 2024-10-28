const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'exampledb'
});

// Ruta de inicio de sesión protegida contra inyección SQL
app.get('/login', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    // Consulta SQL utilizando parámetros para evitar inyección SQL
    const query = "SELECT * FROM users WHERE username = ? AND password = ?";
    
    connection.query(query, [username, password], (error, results) => {
        if (error) {
            res.send("Error en la consulta");
            return;
        }

        if (results.length > 0) {
            res.send("Inicio de sesión exitoso");
        } else {
            res.send("Credenciales incorrectas");
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
