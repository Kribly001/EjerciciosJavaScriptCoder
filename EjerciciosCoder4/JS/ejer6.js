/*Escribir una función que reciba 2 números como parámetros y devuelva:
a) Si el primer número es mayor que el segundo, devuelva 1
b) Si el segundo número es mayor que el primero, devuelva -1
c) Si ambos números son iguales, devuelva un 0*/

function dato(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(1);
    } else if (numero1 < numero2) {
        console.log(-1);
    } else if (numero1 === numero2) {
        console.log(0)
    }
}
alert("Detectar numeros")
const resultado1=parseInt(prompt("Ingresa el primer numero"));
const resultado2=parseInt(prompt("Ingresa el segundo numero"));
console.log(dato(resultado1, resultado2))