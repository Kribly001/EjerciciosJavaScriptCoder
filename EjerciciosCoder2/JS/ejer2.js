/*El costo del helado es de $5. Escriba un programa 
en donde se le pida al usuario ingresar la cantidad de helados 
que quiere y mostrar cuánto le saldría*/

let cantidadhelados=prompt("¿Cuantos helados deseas? $5 cada uno");
let precio=5;
let total= cantidadhelados*precio;
alert("El precio total a pagar es $" + total);