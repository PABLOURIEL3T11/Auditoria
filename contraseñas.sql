-- Crear una tabla que almacena contraseñas en texto plano (¡mala práctica!)
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL -- Contraseña en texto plano
);

-- Insertar datos con contraseñas sin cifrar
INSERT INTO users (username, password) 
VALUES ('user1', 'mypassword123'), 
       ('user2', 'password456'), 
       ('user3', '123456');

-- Consultar la tabla expone las contraseñas directamente
SELECT * FROM users;