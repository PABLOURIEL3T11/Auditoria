-- Code Smell: SELECT * en lugar de seleccionar columnas específicas
SELECT * FROM users WHERE created_at > '2024-01-01';


SELECT * FROM users WHERE LOWER(name) = 'john doe';


SELECT name FROM users WHERE id IN (
    SELECT user_id FROM orders WHERE total > 1000
);
SELECT u.name, o.total 
FROM users u 
JOIN orders o ON u.id = o.user_id 
WHERE o.order_date > '2024-01-01';