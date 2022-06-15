//Escribir la función esPar que reciba un número y devuelva true si es par y false si no lo es:

function esPar(numero) {
    if ((numero % 2) == 0) {
        return true;
    } else {
        return false;
    }
}

const numeroingresado = parseInt(prompt("Ingresar numero para detectar si es par"));
console.log(esPar(numeroingresado));