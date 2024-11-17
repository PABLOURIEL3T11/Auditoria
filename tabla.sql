-- Code Smell: Falta de normalización
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    address VARCHAR(255), -- Redundante en cada usuario
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Code Smell: Sin restricciones adecuadas
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product_name VARCHAR(100), -- Redundante
    total DECIMAL(10, 2),
    order_date DATE
);

-- Code Smell: Falta de índices en columnas utilizadas frecuentemente
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    price DECIMAL(10, 2),
    category VARCHAR(50)
);
