// Crear una clase llamada Cuenta que contenga los siguientes atributos: titular
//  (que es una persona) y cantidad (que pueden ser decimales). 
//  Crear su constructor y tiene que poseer los siguientes métodos:
// mostrar() que muestra los datos de la cuenta
// ingresar(cantidad) ingresa cantidad de dinero a la cuenta (Si la cantidad es negativa no se hace nada)
// retirar(cantidad) se retira una cantidad de la cuenta.

class Cuenta {
    constructor(titular, cantidad) {
        this.titular = titular;
        this.cantidad = cantidad;
    }

    mostrar() {
        console.log("Titular de la cuenta es " + this.titular)
    }

    ingresa(cantidad) {
        return console.log("Total dinero en cuenta $" + cantidad);
    }
    retirar(cantidad) {
        console.log("Usted retiro $" + cantidad)
        let restante = (this.cantidad - cantidad)
        console.log("Le queda $" + restante + " restantes en su cuenta")
    }

}
const titular = prompt("Ingresar titular de la cuenta");
const cantidad = prompt("Cantidad de dinero en cuenta")
const cuenta = new Cuenta(titular, cantidad);
cuenta.mostrar(titular);
cuenta.ingresa(cantidad);
let opciones = parseInt(prompt("Que operacion desea realizar? 1=Salir, 2=RetirarDinero"));
while (opciones > 2 || opciones < 1) {
    alert("No ingreso una cantidad valida");
    opciones = parseInt(prompt("Que operacion desea realizar? 1=Salir, 2=RetirarDinero"));
}
switch (opciones) {
    case 1:
        alert("Finalizado")
        break;
    case 2:
        retiro = prompt("Ingresa cuanto deseas retirar");
        cuenta.retirar(retiro);
        break;
}