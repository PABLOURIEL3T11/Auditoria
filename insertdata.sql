-- Code Smell: Inserciones repetitivas (deberían ser automáticas o masivas)
INSERT INTO users (name, email, address) VALUES ('John Doe', 'john@example.com', '123 Main St');
INSERT INTO users (name, email, address) VALUES ('Jane Smith', 'jane@example.com', '456 Oak St');

INSERT INTO orders (user_id, product_name, total, order_date) 
VALUES (1, 'Laptop', 1200.00, '2024-11-17');
INSERT INTO orders (user_id, product_name, total, order_date) 
VALUES (2, 'Smartphone', 800.00, '2024-11-16');