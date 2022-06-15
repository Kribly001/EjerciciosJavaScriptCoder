/*Escribir la función esMultiploDe4 
en la que se reciba un número y devuelva true si es múltiplo y false si no lo es.*/

function esMultiploDe4(numero) {
    if ((numero % 4) == 0) {
        return true;
    } else {
        return false;
    }
}

const numeroingresado = parseInt(prompt("Ingresar numero para detectar si es multiplo de 4"));
console.log(esMultiploDe4(numeroingresado));
