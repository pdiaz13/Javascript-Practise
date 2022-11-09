//.some()

const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2];

//si el valor es menor que 0
const res = array.some((valor) => valor < 0);
console.log(res); //true por el -2

//si un valor determinado existe
const existe = array.some((valor) => valor === 9);
console.log(existe); //true

//con objetos
const listaObjetos = [
  { nombre: "Lucas", edad: 35 },
  { nombre: "Matias", edad: 34 },
  { nombre: "Miguel", edad: 28 },
  { nombre: "Lucia", edad: 3 },
];

const existeMiguel = listaObjetos.some(
  (persona) => persona.nombre === "Miguel"
);
console.log(existeMiguel); //t

//obtener una lista a partir de un objeto iterable
const str = "Hola soy Prisci";
console.log(str[5]);

const arr_str = Array.from(str);
console.log(arr_str); //['h', 'o', 'l', 'a']

//****obtenemos una lista a partir de un Array.from(Set([elementos separados por comas]))
const set = new Set([2, 3, "hola", true, 4]) // declaramos el Set

const ar_set = Array.from(set);

console.log(set)// muestra: Set { 2, 3, 'hola', true, 4 }
console.log(ar_set)// muestra: [ 2, 3, 'hola', true, 4 ]

//**** Obtener un iterable de todos los índices de nuestro array nombreArray.keys()
const keys = array.keys()


console.log(keys) // muestra:{ [Iterator] }
console.log(typeof(keys)) // muestra: object

//acceder a las keys del array, creando un array a partir de keys
const ar_keys = Array.from(keys)

console.log(ar_keys) // devuelve los indices que había en array: [0, 1, 2, 3,....10]