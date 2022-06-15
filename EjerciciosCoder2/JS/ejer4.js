/*Escriba un programa en donde el usuario ingrese 3 notas,
 calcule el promedio y si es mayor o igual a 4 le indique que está aprobado con un alert.*/

alert("Ingrese sus notas");
let nota1=prompt("Nota 1");
let nota2=prompt("Nota 2");
let nota3=prompt("Nota 3");
let promedio =(parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
alert("Su promedio es: " + promedio)
if (promedio >= 4) {
    alert("Estas aprobado! :D");
} else{
    alert("Estas desaprobado sigue intentando :(");
}