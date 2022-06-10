alert("Ingresa tu fecha de nacimiento");
let nacimiento=prompt();
if(nacimiento >= 2003){
    alert("Eres mayor a 18");
    let nombre=prompt("Ingresa tu nombre");
    let apellido=prompt("Ingresa tu apellido");
    alert("Hola " + nombre +  apellido + " eres mayor de edad")
}else{
    alert("No eres mayor aun");
}