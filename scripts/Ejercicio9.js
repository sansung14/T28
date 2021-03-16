function texto(cadena) {

  var resultado = "La cadena \""+cadena+"\" ";

  if(cadena == cadena.toUpperCase()) {
    resultado += " está formada sólo por mayúsculas";
  }else if(cadena == cadena.toLowerCase()) {
    resultado += " está formada sólo por minúsculas";
  }else {
    resultado += " está formada por mayúsculas y minúsculas";
  }

  return resultado;
}

alert(texto("COMPROBANDO QUE FUNCIONA EL SCRIPT"));
alert(texto("Soy Don Quijote"));
alert(texto("que ojos mas grandes tienes"));