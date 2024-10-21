// Función con múltiples responsabilidades
function calculateTotal(price, quantity, discount) {
    let subtotal = price * quantity;
    let discountAmount = subtotal * discount;
    let total = subtotal - discountAmount;
    console.log("El total es: $" + total);
    return total;
}

// Variables globales
let name = "John Doe";
let age = 30;

// Función sin tipado
function greet() {
    console.log("Hola, " + name + ". Tienes " + age + " años.");
}