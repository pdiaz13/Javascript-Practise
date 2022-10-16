//Casos especificos - break continue
let lista =[1, 2, 3, 4, 5, 6, 7, 8];

//declaracion de bucle 
    //pasa por pantalla toda la lista
for(let i= 0; i < lista.length; i++){
    //continue- vuelve arriba por es no se imprime 1 2 4 5 6
    if (lista[i] === 3){
        continue;
    }

    console.log(lista[i]);
    //break- si es mayor a 5 que se salga del bucle 1 2 3 4 5 6
    if (lista[i] > 5){
        break;
    }
}


//ambito de un bucle (alcance de las variables)
 //depende del tipo de variable 
 //recomendable declarar la indexacion con es6 let
 // alcance local del bucle
