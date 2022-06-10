let pais =prompt("Ingresa el nombre del pais a viajar")
switch (pais) {
    case "Colombia":
        alert("El valor del boleto es $40")
        break;
    case "Mexico":
        alert("El valor del boleto es $50")
        break;
    case "Brasil":
        alert("El valor del boleto es $30")
        break;
    case "Uruguay":
        alert("El valor del boleto es $20")
        break;
    case "Chile":
        alert("El valor del boleto es $20")
        break;
    case "Ecuador":
        alert("El valor del boleto es $30")
        break;
    case "Peru":
        alert("El valor del boleto es $40")
        break;
    case "EstadosUnidos":
        alert("El valor del boleto es $50")
        break;
    default:
        alert("De momento el pasaje a este pais no se encuentra disponible")    
        break;
}