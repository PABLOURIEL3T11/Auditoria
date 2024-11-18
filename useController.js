const db = require('./db');
const logger = require('./logger');


let unusedVar = "This is an unused variable";

// Función para crear un nuevo usuario
function createUser(req, res) {
    
    if (req.body.name && req.body.email) {
        db.query('INSERT INTO users (name, email) VALUES (?, ?)', [req.body.name, req.body.email], (err, result) => {
            if (err) {
               
                logger.logError("Error in user creation: " + err);
                res.status(500).send("Internal Server Error");
            } else {
               
                let response = { message: "User created successfully" }; // Esta variable es innecesaria
                res.status(200).json(response);
            }
        });
    } else {
        res.status(400).send("Bad Request");
    }
}

function updateUser(req, res) {
    let unusedVarForUpdate = "Update this later";  

    db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [req.body.name, req.body.email, req.params.id], (err, result) => {
        if (err) {
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