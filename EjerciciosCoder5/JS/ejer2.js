/*Crear una clase llamada Persona que contenga los atributos: nombre, edad y DNI. 
Crear su constructor y tiene que poseer 2 métodos: 
mostrar() que muestre los datos de la persona 
esMayor() que devuelva un valor booleano si es mayor de edad o no*/

class Persona {
    constructor(nombre, edad, DNI) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
    }
    mostrar() {
        console.log("Su nombre es " + this.nombre);
        console.log("Su edad " + this.edad);
        console.log("Su DNI " + this.DNI);
    }
    esMayor() {
        let result = false;
        console.log("Eres mayor de 18?")
        if (this.edad >= 18) {
            result = true;
        }
        return console.log(result);
    }
}
const nombre = prompt("Porfavor ingrese su nombre");
const edad = parseInt(prompt("Su edad"));
const DNI = parseInt(prompt("Su dni"));
const persona = new Persona(nombre, edad, DNI);
persona.mostrar();
persona.esMayor();