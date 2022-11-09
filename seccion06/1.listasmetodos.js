//Trabajar con arrays
//pueden tener todo tipo de dato
//let array = new Array ();

let var1 = 15;
let array = [1, 2, 3, 4, var1];

console.log(array); 

//Acceder a valores de array a traves de su posicion
console.log(array[0]);
console.log(array[2]);
console.log(array[4]);

//Metodos para introducir nuevos valores
//valores al final .push() 
array.push("Final", true);
console.log(array); //[ 1, 2, 3, 4, 15, 'Final', true ]

//valores al principio .unshift()
array.unshift("Inicio");
console.log(array);

//Metodos para eliminar valores 
//valores al final .pop()
array.pop();
console.log(array); // [ 'Inicio', 1, 2, 3, 4, 15, 'Final' ]

//valores al principio .shift()
array.shift();
console.log(array); //[ 1, 2, 3, 4, 15, 'Final' ]

//Metodo para eliminar, modificar o añadir valores
const arr3 = [1, 2, 3, 4, 5, 6 ];

//eliminar
arr3.splice(2, 2); // 1 -> 3 2 -> 3 y 4
console.log(arr3); // 1,2,4,5,6

//añadir
arr3.splice(2, 0, "Hello")
console.log(arr3); // 1,2, "Hello", 3,4,5,6

//modificar
arr3.splice(1, 1, 6);
console.log(arr3); // 1,6,3,4,5,6



