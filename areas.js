// Función genérica para calcular el área
function calcularArea(forma, medida1, medida2 = null) {
    if (forma === 'cuadrado') {
        return medida1 * medida1; // Cálculo del área de un cuadrado
    } else if (forma === 'rectangulo') {
        return medida1 * medida2; // Cálculo del área de un rectángulo
    }
    throw new Error('Forma no soportada');
}

// Uso de la función genérica para evitar duplicación
let resultado1 = calcularArea('cuadrado', 5);
let resultado2 = calcularArea('rectangulo', 4, 3);

// Simplificación del cálculo de suma
let suma = Array.from({ length: 10 }, (_, i) => i).reduce((acc, val) => acc + val, 0);

// Refactorización de la función larga y compleja
function procesarDatos(datos) {
    return datos.map(elemento =>
        elemento > 10 ? elemento * 2 : elemento / 2
    );
}

// Ejemplo de uso
let datos = [5, 15, 8, 20];
let resultadoProcesado = procesarDatos(datos);

console.log("Resultado área cuadrado:", resultado1);
console.log("Resultado área rectángulo:", resultado2);
console.log("Suma total:", suma);
console.log("Datos procesados:", resultadoProcesado);
