/*Escriba un programa en donde el usuario ingrese 2 números e indique cuál es el mayor*/

alert("Ingresa dos numeros y se detectara cual es el mayor");
const numero1 = prompt("Ingresar numero 1");
const numero2 = prompt("Ingresa numero 2");
if (numero1 > numero2) {
    console.log("Numero 1 es mayor")
    alert("El numero 1 es mayor")
} else if (numero1 < numero2) {
    console.log("Numero 2 es mayor")
    alert("El numero 2 es mayor")
}