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