-- Creación de tablas con redundancia estructural
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    status ENUM('active', 'inactive', 'banned'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE active_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    status ENUM('active', 'inactive', 'banned'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE banned_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    banned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Duplicación en los datos de productos
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    category VARCHAR(100),
    price DECIMAL(10, 2)
);

CREATE TABLE inventory (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100),
    category VARCHAR(100),
    price DECIMAL(10, 2),
    stock INT
);

-- Procedimientos almacenados con duplicación lógica
DELIMITER $$

CREATE PROCEDURE GetActiveUsers()
BEGIN
    SELECT id, name, email 
    FROM users 
    WHERE status = 'active';
END$$

CREATE PROCEDURE FetchActiveUsers()
BEGIN
    SELECT id, name, email 
    FROM active_users;
END$$

-- Consultas repetitivas dentro de transacciones
START TRANSACTION;

SELECT id, name, email 
FROM users 
WHERE status = 'active';

SELECT id, name, email 
FROM users 
WHERE status = 'active';

SELECT COUNT(*) 
FROM products 
WHERE category = 'electronics';

SELECT COUNT(*) 
FROM inventory 
WHERE category = 'electronics';

COMMIT;

-- Vistas que repiten lógica existente
CREATE VIEW ElectronicsProducts AS
SELECT id, name, price 
FROM products 
WHERE category = 'electronics';

CREATE VIEW ElectronicsInventory AS
SELECT id, product_name, price 
FROM inventory 
WHERE category = 'electronics';
DELIMITER $$
CREATE PROCEDURE GetActiveUsers()
BEGIN
    SELECT * FROM users WHERE status = 'active';
END$$

DELIMITER $$
CREATE PROCEDURE GetInactiveUsers()
BEGIN
    SELECT * FROM users WHERE status = 'inactive';
END$$
