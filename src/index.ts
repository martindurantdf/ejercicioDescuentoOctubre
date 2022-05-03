/**
 •Una tienda al cumplir años en Octubre ofrece
un descuento del 15% a sus clientes en todas
sus compras
•Desarrolle un algoritmo que dada una compra:
precio unitario, cantidad y el mes, indicados
por el usuario, determine si el cliente tiene
descuento o no
 */

const OCTUBRE = 10;
const DESCUENTO = 0.15;
let precioUnitario: number = Number(
  prompt("Ingrese el precio unitario del producto: ")
);
let cantidad: number = Number(prompt("Ingrese la cantidad de productos: "));
let mesDeCompra: number = Number(
  prompt("Ingrese el mes de compra (en número): ")
);
let precioFinal: number = 0;

precioFinal = precioUnitario * cantidad;
if (mesDeCompra === OCTUBRE) {
  precioFinal = precioFinal - precioFinal * DESCUENTO;
  console.log(
    "Su compra obtuvo el 15% de descuento, el monto a pagar es: ",
    precioFinal
  );
} else {
  console.log(
    "Su compra no obtuvo descuento, el monto a pagar es: ",
    precioFinal
  );
}
