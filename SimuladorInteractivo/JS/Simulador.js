alert("Bienvenido a Mr Calculadora");

function calculoSuma(numeroA, numeroB) {
    const resultado1 = numeroA + numeroB;
    return resultado1;
}

function calculoResta(numeroA, numeroB) {
    const resultado1 = (numeroA - numeroB);
    return resultado1;
}

function calculoMulti(numeroA, numeroB) {
    const resultado1 = (numeroA * numeroB);
    return resultado1;
}

function calculoDivision(numeroA, numeroB) {
    const resultado1 = (numeroA / numeroB);
    return resultado1;
}

let tipo = parseInt(prompt("¿Que Calculo desea realizar? Ingresar numero: 1-suma, 2-resta, 3-multiplicacion o 4-division"));
while (tipo <= 0 || tipo > 4) {
    alert("No ingreso una cantidad valida");
    tipo = parseInt(prompt("¿Que Calculo desea realizar? Ingresar numero: 1-suma, 2-resta, 3-multiplicacion o 4-division"));
}
const numero1 = parseInt(prompt("Ingrese primer valor a calcular"));
const numero2 = parseInt(prompt("Ingrese segundo valor a calcular"));
switch (tipo) {
    case 1:
        console.log(calculoSuma(numero1, numero2));
        break;
    case 2:
        console.log(calculoResta(numero1, numero2));
        break;
    case 3:
        console.log(calculoMulti(numero1, numero2));
        break;
    case 4:
        console.log(calculoDivision(numero1, numero2));
        break;
}