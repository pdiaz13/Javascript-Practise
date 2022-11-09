//Obtener lista a partir de otra
const array = ["hola", 1, 2, 3, true, null, "adios"];

console.log(array.slice(1, 6)); //[ 1, 2, 3, true, null ]

const array2 = array.slice(3, 6);
console.log(array2);

const array3 = array.slice(-3, -1);
console.log(array3);