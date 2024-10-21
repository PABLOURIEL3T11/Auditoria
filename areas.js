function calcularAreaCuadrado(lado) {
    return lado * lado;
  }
  
  function calcularAreaRectangulo(base, altura) {
    return base * altura;
  }
  
  // Duplicación de código: cálculo de un producto
  let resultado1 = calcularAreaCuadrado(5);
  let resultado2 = calcularAreaRectangulo(4, 3);
  
  // Complejidad innecesaria: bucle innecesario
  let suma = 0;
  for (let i = 0; i < 10; i++) {
    suma += i;
  }
  
  // Función larga y compleja
  function procesarDatos(datos) {
    let resultado = [];
    for (let i = 0; i < datos.length; i++) {
      let elemento = datos[i];
      if (elemento > 10) {
        resultado.push(elemento * 2);
      } else {
        resultado.push(elemento / 2);
      }
    }
    return resultado;
  }