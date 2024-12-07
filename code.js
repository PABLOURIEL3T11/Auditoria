// Función con responsabilidades más claras y nombres descriptivos
function calculateTotal(pricePerUnit, quantity, discountRate) {
    const subtotal = pricePerUnit * quantity; // Calcular subtotal
    const discountAmount = subtotal * discountRate; // Calcular descuento
    const finalTotal = subtotal - discountAmount; // Total después del descuento

    console.log("El total es: $" + finalTotal.toFixed(2)); // Mostrar resultado
    return finalTotal; // Retornar resultado
}

// Función con parámetros en lugar de depender de variables globales
function greet(personName, personAge) {
    console.log(`Hola, ${personName}. Tienes ${personAge} años.`);
}

// Ejecución de ejemplo
calculateTotal(100, 2, 0.1); // Precio: $100, Cantidad: 2, Descuento: 10%
greet("John Doe", 30); // Llamar función con valores específicos
