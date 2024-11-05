SELECT name, email, age, created_at
FROM users
WHERE name LIKE '%John%'
  OR email LIKE '%john@example.com%'
  OR age > 30
ORDER BY created_at DESC;
