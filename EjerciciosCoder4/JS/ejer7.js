/*Escribir una función que reciba 4 números como parámetros y devuelva su promedio.*/

function promedio(datopromedio){
    return datopromedio / 4;
}

function sumanumeros(numero1, numero2, numero3, numero4){
    const resultado= promedio(numero1 + numero2 + numero3 + numero4)
    return resultado;
}

const resultado1=parseInt(prompt("Ingresa el primer numero"));
const resultado2=parseInt(prompt("Ingresa el segundo numero"));
const resultado3=parseInt(prompt("Ingresa el tercer numero"));
const resultado4=parseInt(prompt("Ingresa el cuarto numero"));
console.log(sumanumeros(resultado1, resultado2, resultado3, resultado4));