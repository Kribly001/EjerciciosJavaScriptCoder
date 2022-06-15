/*Escriba un programa donde se le solicite el año de nacimiento. Si es mayor a 18 se le tiene que pedir que 
ingrese su nombre y apellido para mostrarle un texto con el formato: “Hola nombre apellido, tu edad actual es: edad”. Ejemplo: “Hola Rodrigo Río, tu edad actual es 25”.
NOTA: Solo solicitar el nombre y apellido si es mayor a 18.*/

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