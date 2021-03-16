var numero = prompt("Introduce un número entero");

var resultado = calcularPar(numero);
alert("El número "+numero+" es "+resultado);

function calcularPar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}