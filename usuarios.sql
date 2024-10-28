const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Conexión a la base de datos (no se debe incluir información sensible en el código fuente)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'exampledb'
});

L
app.get('/login', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";

    connection.query(query, (error, results) => {
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

app.get('/profile', (req, res) => {
    const userInput = req.query.username;

    
    res.send(`<h1>Perfil de usuario</h1><p>Nombre: ${userInput}</p>`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});