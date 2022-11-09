//comparar
//Nos dirá si TODOs los elementos de la lista cumplen una condición

const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];

//const resultado = array.every(valor => {
//    if(typeof valor === "number"){
//        return true
//   } else{
//        return false
//    }
//}); true

const resultado = array.every(valor => valor > 0);
console.log(resultado);
//false

////comparacion listas

const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2); 
//muestra false, aunque son idénticos, porque las listas no se pueden comparar de esta manera

//para hacerlo 1º creamos una función
const compararArrays = (array_1, array_2) =>{
    if (array_1.length !== array_2.length) return false //comprobamos si no miden lo mismo, (si no lo son, devuelve false y sale de la función)
    const res = array_1.every((valor, indice) =>{
        if (valor === array_2[indice]) return true //comparamos si el valor de array_1[indice] es idéntido a array_2[indice] 
        return false // si no se cumple lo anterior sale de la función devolviendo false
    })
    return res //si no ha salido al comparar las longitudes, devolveremos lo que esté en res
}
console.log(compararArrays(ar1, ar2)); // muestra el resultado que es true

///lo mismo de forma mas simplificada
const compararArrays2 = (array_1, array_2) => {
    if (array_1.length !== array_2.length) 
    return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}
console.log(compararArrays2(ar1, ar2)); //muestra true
