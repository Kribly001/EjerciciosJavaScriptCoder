/*Escribir una función que reciba 2 números como parámetros 
y devuelva el resultado de su multiplicación*/

function Multiplicacion (numero1, numero2) {

    const resultadoMultiplicacion =(numero1 * numero2);

    return resultadoMultiplicacion;

}

const primernumero=parseInt(prompt("Numero a multiplicar"));
const segundonumero=parseInt(prompt("Multiplicado"));
console.log(Multiplicacion(primernumero, segundonumero));