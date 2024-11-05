SELECT *
FROM usuarios u
JOIN pedidos p ON u.id = p.usuario_id
JOIN productos pr ON p.producto_id = pr.id
WHERE u.nombre LIKE '%juan%'
  AND u.fecha_registro < '2023-01-01'
  AND p.fecha_pedido = (
      SELECT MAX(fecha_pedido)
      FROM pedidos
      WHERE usuario_id = u.id
  )
ORDER BY u.nombre, u.apellido DESC;
