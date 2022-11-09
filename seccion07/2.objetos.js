//Objetos
//Declaración de un objeto objeto = { atributos del objeto con ':' al final de la key}

const obj = {
  id: 4,
  nombre: "juan",
  apellido: "gonzalez",
  isDeveloper: true,
  libros_fav: ["Rayuela", "Deshoras"],
  "4-juegos": [1, 2, 3, 4], //Para incluir símbolos como (-, +, /, *, ...) o números+letras la key como string
};

//Acceso a valores objeto.key o si la key es un String objeto["key"]
console.log(obj["4-Juegos"]); // [1, 2, 3, 4]
console.log(obj.nombre); // juan

//Acceder a propiedades usando variables
const prop = "isDeveloper";
console.log(obj[prop]); //true

//Replicar un objeto

//Forma incorrecta (X)
//-- cuando defino un obj apartir de otro, js copia el mismo objeto y asigna el cambio a ambos
const obj2 = obj;
console.log(obj2);

obj2.nombre = "Pri";
console.log(obj2.nombre); //Pri

console.log(obj.nombre); //Pri

//-- con tipos primitivos
let val1 = 4;
let val2 = val1;

val2 = 6;
console.log(val1); //4
console.log(val2); //6

//Forma correcta PARA REPLICAR EL OBJETO CORRECTAMENTE, SE HACE CON EL FACTOR DE PROPAGACIÓN DE ASÍ:
// nuevoObjeto = {...objetoACopiar}
const obj3 = { ...obj };
console.log(obj.nombre); //Pri
console.log(obj3.nombre); //Pri

obj3.nombre = "Nahir";
console.log(obj.nombre); //Pri
console.log(obj3.nombre); //Nahir

//Ordenar listas de objetos en función de un atributo

const listaPeliculas = [
  { titulo: "Lo que el viento se llevó", anyo: 1939 },
  { titulo: "Titanic", anyo: 1997 },
  { titulo: "Mohana", anyo: 2016 },
  { titulo: "El efecto mariposa", anyo: 2004 },
  { titulo: "Ted", anyo: 2012 },
];

console.log(listaPeliculas);

//.sort() -> muta el valor del array original

listaPeliculas.sort((a, b) => a.anyo - b.anyo); // (?) o por titulo a.titulo - b.titulo
console.log(listaPeliculas);
/*
[ { titulo: 'Lo que el viento se llevó', anyo: 1939 },
  { titulo: 'Titanic', anyo: 1997 },
  { titulo: 'El efecto mariposa', anyo: 2004 },
  { titulo: 'Ted', anyo: 2012 },
  { titulo: 'Mohana', anyo: 2016 } ]
*/
