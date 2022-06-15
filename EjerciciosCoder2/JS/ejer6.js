/*Escriba un programa que permita calcular el costo total del producto con su IVA. Para esto, 
solicite al usuario el precio del producto, calcule 
su IVA (21%) y muéstrele en pantalla con un alert el precio final.*/

alert("Calculadora IVA");
let precio=parseInt(prompt("Ingrese el precio del producto"));
let neto=1.21;
let resultadoneto= precio*neto;
alert("El precio final con IVA incluido es $" + resultadoneto);