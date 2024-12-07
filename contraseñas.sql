-- Crear una tabla que almacena hashes de contraseñas en lugar de texto plano
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password_hash VARCHAR(255) NOT NULL -- Almacenar el hash de la contraseña
);

-- Insertar datos con contraseñas ya hasheadas (el hash se genera desde la aplicación)
-- Ejemplo: Los valores hash se generan con bcrypt o un algoritmo similar en el backend
INSERT INTO users (username, password_hash) 
VALUES ('user1', '$2b$10$hashparauser1'), 
       ('user2', '$2b$10$hashparauser2'), 
       ('user3', '$2b$10$hashparauser3');

-- Consultar la tabla no expone contraseñas en texto plano
SELECT * FROM users;
