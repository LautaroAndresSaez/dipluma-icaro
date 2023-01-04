const dividir = require("./funciones/dividir");
const multiplicar = require("./funciones/multiplicar");
const restar = require("./funciones/restar");
const suma = require("./funciones/suma");

const action = "/";
const a = 20;
const b = 20;

switch (action) {
  case "/":
    console.log(dividir(a, b));
    break;
  case "*":
    console.log(multiplicar(a, b));
    break;
  case "-":
    console.log(restar(a, b));
    break;
  case "+":
    console.log(suma(a, b));
    break;
  default:
    console.log("Accion no reconocida");
}


