// Archivo: userController.js

const db = require('./db');
const logger = require('./logger');

// Función para crear un nuevo usuario
function createUser(req, res) {
    // Validación de parámetros
    if (req.body.name && req.body.email) {
        db.query('INSERT INTO users (name, email) VALUES (?, ?)', [req.body.name, req.body.email], (err, result) => {
            if (err) {
                // Manejo de error
                logger.logError("Error in user creation: " + err);
                res.status(500).send("Internal Server Error");
            } else {
                res.status(200).json({ message: "User created successfully" });
            }
        });
    } else {
        res.status(400).send("Bad Request");
    }
}

// Función para actualizar un usuario
function updateUser(req, res) {
    db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [req.body.name, req.body.email, req.params.id], (err, result) => {
        if (err) {
            // Manejo de error
            logger.logError("Error in user update: " + err);
            res.status(500).send("Internal Server Error");
        } else {
            res.status(200).send("User updated successfully");
        }
    });
}

module.exports = {
    createUser,
    updateUser
};
