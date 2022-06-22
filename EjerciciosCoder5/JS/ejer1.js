/*Crear una clase llamada Cancion que contenga los atributos: titulo y autor. 
Crear su constructor y tiene que poseer los siguientes métodos:
mostrarTitulo() que muestre el título de la canción
mostrarAutor() que muestre el autor de la canción*/

class Cancion {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    mostrarTitulo() {
        console.log(this.titulo)
    }
    mostrarAutor() {
        console.log(this.autor)
    }
}
const cantante1 = new Cancion("Plan A", "Paulo Londra")
cantante1.mostrarTitulo();
cantante1.mostrarAutor();

