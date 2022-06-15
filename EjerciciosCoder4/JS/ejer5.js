/*Escribir una función que reciba 2 números como parámetros y devuelva el que es mayor*/

function numeromayor(numero1, numero2){
    if(numero1>numero2){
        console.log("Mayor " + numero1)
    }else{
        console.log("Mayor " + numero2)
    }
}

alert("Ingresa 2 numeros y se detectara el mayor");
const primerNumero = parseInt(prompt("Ingresa primer numero"))
const segundoNumero = parseInt(prompt("Ingresa primer numero"))
console.log(numeromayor(primerNumero, segundoNumero));
