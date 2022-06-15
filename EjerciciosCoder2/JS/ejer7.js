/*Escriba un programa en donde se le pida al usuario ingresar el lugar a donde quiera viajar.Teniendo en cuenta estos valores:
- Colombia: $40- México: $50- Brasil: $30- Uruguay: $20- Chile: $20- Ecuador: $30
- Perú: $40- Estados Unidos: $50
Mostrarle al usuario cuál sería el costo de viajar al lugar que escribió.
NOTA: Tener en cuenta las mayúsculas y minúsculas al momento de ingresar el nombre del lugar*/

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