//switch

let nota = 5;

switch (nota){
    case 5:
        console.log("Sobresaliente");
        break;
    case 4:
        console.log("Buen trabajo");
        break;
    case 3:
        console.log("Suficiente");
        break;
    case 2:
        console.log("No has aprobado");
        break;
    case 1:
        console.log("Estudia un poco mas");
        break;
    default: //buena practica agregar un valor por defecto
        console.log("Error"); 
        break;
}
