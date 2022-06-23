const alumnos = ["Agustin", "Gabriel", "Mateo", "Nahuel", "Pedro"]

function names() {
    let mascota = [];
    for (var i = 0; i <= 4; i++) {
        var x = prompt("Ingresar la mascota de: " + alumnos[i]);
        mascota[i] = x;
    }
    console.log(alumnos[0] + " tiene un " + mascota[0]);
    console.log(alumnos[1] + " tiene un " + mascota[1]);
    console.log(alumnos[2] + " tiene un " + mascota[2]);
    console.log(alumnos[3] + " tiene un " + mascota[3]);
    console.log(alumnos[4] + " tiene un " + mascota[4]);
}
alert("Ingresar la mascota de cada alumno");
names();