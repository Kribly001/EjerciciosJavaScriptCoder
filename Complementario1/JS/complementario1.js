let entrada = parseInt(prompt("Cantidad de alumnos a guardar"));
while(entrada <= 0){
    alert("No ingreso una cantidad valida");
    entrada = parseInt(prompt("Cantidad de alumnos a guardar"));
}
for (let i = 1; i <= entrada; i++) {
    let nombre = prompt("Nombre del alumno " + i);
    let edad = prompt("Edad");
    let notafinal = prompt("Nota final");
}
alert("Programa Finalizado se han guardado los datos");