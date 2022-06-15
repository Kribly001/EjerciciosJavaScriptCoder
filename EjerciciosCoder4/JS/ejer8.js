/*Escribir la función areaRectangulo(base, altura),
 la cual recibe los parámetros base y altura que son números y tiene que devolver su area.
NOTA: La fórmula del área de un rectangulo es base * altura */

function areaRectangulo(base, altura) {
    const resultado = (base * altura);
    return resultado;
}

alert("Calculadora de area de un Rectangulo");
const base1 = parseInt(prompt("Ingresar la base del sector"));
const altura1 = parseInt(prompt("Ingresar altura del sector"));
console.log(areaRectangulo(base1, altura1));