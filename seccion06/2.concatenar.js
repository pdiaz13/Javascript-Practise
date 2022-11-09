//como unir dos listas .concat(lista2)

const lista1 = ["hola", 2, false, null];
const lista2 = ["adios", 8, true, undefined];

console.log(lista1.concat(lista2)); //[ 'hola', 2, false, null, 'adios', 8, true, undefined ]
//no modifica los valores de las listas

const lista3 = lista1.concat(lista2);
console.log(lista3);

//como unir dos listas con el factor de propagación 
//cada valor de la lista por separadp
console.log(...lista3); //hola 2 false null adios 8 true undefined

//union como con concat
const lista4 =[...lista1, ...lista2];
console.log(lista4); //[ 'hola', 2, false, null, 'adios', 8, true, undefined ]

//ERROR 
//lista de dos elementos (lista1, lista2)
const lista5 = [lista1, lista2];
console.log(lista5); //[ [ 'hola', 2, false, null ], [ 'adios', 8, true, undefined ] ]

