let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));

if (edad < 2) {
  alert("Consulte con su veterinario");
} else if (edad >= 3) {
  alert(nombre + " Continue con los datos de internacion");
}

let peso = parseInt(prompt("Ingresa tu peso en kg"));
let estatura = parseInt(prompt("Ingresa tu estatura en cm"));

function calcularIMC() {
  let resultado = peso / ((estatura / 100) * (estatura / 100));
  return resultado;
}
