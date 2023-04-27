/*Las compras de frutas y verduras se ofertaran de la siguiente forma: al valor unitario que se ingrese,se haran ofertas por cantidad, con dos rangos de kilaje. Se preguntara por la comarca o zona de entrega, para informar el costo del flete*/

const zona1 = 200;
const zona2 = 350;
const zona3 = 600;
const zona4 = 800;
let cliente = prompt("ingrese su nombre");

while (cliente === "") {
  alert("cliente invalido");
  cliente = prompt("ingrese su nombre");
}
alert("Bienvenido a fruteria verduleria boutique");

let zona = parseInt(prompt("ingrese su zona de residencia"));

while (zona === "") {
  alert("zona invalida");
  zona = parseInt(prompt("ingrese su zona de residencia"));
}
alert("ha ingresado un numero correcto");

switch (zona) {
  case 1:
    alert(`El costo de envio para el cliente ${cliente} es de $ ${zona1}`);
    break;
  case 2:
    alert(`El costo de envio para el cliente ${cliente} es de $ ${zona2}`);
    break;
  case 3:
    alert(`El costo de envio para el cliente ${cliente} es de $ ${zona3}`);
    break;
  case 4:
    alert(`El costo de envio para el cliente ${cliente} es de $ ${zona4}`);
    break;

  default:
    alert(`El Señor ${cliente} se encuentra fuera del radio de los envios`);
    break;
}

let precioBanana1 = 500;
let precioMandarina1 = 200;

let cantidadB1 = parseInt(prompt(" Ingrese la cantidad de bananas1"));

while (isNaN(cantidadB1)) {
  alert("ingreso un numero incorrecto");
  cantidadB1 = parseInt(prompt(" Ingrese la cantidad de bananas1"));
}
let cantidadM1 = parseInt(prompt(" Ingrese la cantidad de mandarina1"));

while (isNaN(cantidadM1)) {
  alert("ingreso un numero incorrecto");
  cantidadM1 = parseInt(prompt(" Ingrese la cantidad de mandarina1"));
}

let cantidad = cantidadB1 + cantidadM1;
alert(`El peso total de la compra es ${cantidad}`);

if (cantidad < 10) {
  let precioParcial =
    (precioBanana1 * cantidadB1) +( precioMandarina1 * cantidadM1);
  alert(
    `El costo de la mercaderia comprada sin flete es de $ ${precioParcial}`
  );
} else if (cantidad < 20) {
  let precioParcial =
    [(precioBanana1 * cantidadB1) + (precioMandarina1 * cantidadM1)] * 0.95;
  alert(
    `El costo de la mercaderia comprada sin flete es de $ ${precioParcial}`
  );
} 
else {
  let precioParcial =
    [(precioBanana1 * cantidadB1) + (precioMandarina1 * cantidadM1)] * 0.95;
  alert(
    `El costo de la mercaderia comprada sin flete es de $ ${precioParcial}`
  );
  }


