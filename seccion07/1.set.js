//SET
//Los objetos Set son colecciones de valores. Se puede iterar sus elementos en el orden de su inserción.
//Un valor en un Set sólo puede estar una vez; éste es único en la colección

const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", { id: 5 }, { id: 5 }];

const miSet = new Set(array);

console.log(array);
//[ 1, 2, 3, 4, 5, 6, 1, 2, 5, 'hola', { id: 5 }, { id: 5 } ]
console.log(miSet);
//Set { 1, 2, 3, 4, 5, 6, 'hola', { id: 5 }, { id: 5 } }

//el set NO contiene el segundo 'Hola', ni los números PORQUE SON VALORES REPETIDOS
// SIN EMBARGO LOS OBJETOS NO SON VALORES, POR LO QUE AUNQUE SEAN IDÉNTICOS, SI LOS CONTENDRÁ

//Metodos set

//.add()
miSet.add(9);
console.log(miSet);
//Set { 1, 2, 3, 4, 5, 6, 'hola', { id: 5 }, { id: 5 }, 9 }

//.delete()
miSet.delete("hola");
console.log(miSet);
//Set { 1, 2, 3, 4, 5, 6, { id: 5 }, { id: 5 }, 9 }

//.clear()
//miSet.clear()
//console.log(miSet);

//.has()
console.log(miSet.has(5));

//.size
console.log(miSet.size); //9

//Iterar

//forEach()

miSet.forEach((valor) => console.log(valor));
/*1
2
3
4
5
6
{ id: 5 }
{ id: 5 }
9 */

//.values()
const iterador_miSet = miSet.values();
console.log(iterador_miSet); // { [Iterator] }

for (let item of iterador_miSet) console.log(item);
/*
1 
2 
3 
4 
5 
6 
{ id: 5 } 
{ id: 5 } 
9
*/

//... factor de propagación (set => arr)
const ar_miSet = [...miSet];
console.log(ar_miSet);
//[ 1, 2, 3, 4, 5, 6, { id: 5 }, { id: 5 }, 9 ]

console.log(ar_miSet[3]); //4
