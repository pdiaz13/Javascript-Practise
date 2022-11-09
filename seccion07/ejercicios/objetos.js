/*

Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

*/
//--------------
const obj = {
  nombre: "priscila",
  apellido: "diaz",
  edad: 26,
  altura: 165,
  eresDesarrollador: true,
};

//------------------
const edad = obj.edad;
console.log(edad); //26

//---------------
const obj2 = {
  nombre: "zarina",
  apellido: "gonzalez",
  edad: 25,
  altura: 159,
  eresDesarrollador: false,
};

const obj3 = {
  nombre: "agustin",
  apellido: "martin",
  edad: 29,
  altura: 180,
  eresDesarrollador: false,
};

const lista = [{ ...obj }, { ...obj2 }, { ...obj3 }];
console.log(lista);

/*
[ { nombre: 'priscila',
    apellido: 'diaz',
    edad: 26,
    altura: 165,
    eresDesarrollador: true },
  { nombre: 'zarina',
    apellido: 'gonzalez',
    edad: 25,
    altura: 159,
    eresDesarrollador: false },
  { nombre: 'agustin',
    apellido: 'martin',
    edad: 23,
    altura: 180,
    eresDesarrollador: false } ]
*/

const edades = lista.sort((a, b) => b.edad - a.edad);
console.log(edades);

/*
[ { nombre: 'agustin',
    apellido: 'martin',
    edad: 29,
    altura: 180,
    eresDesarrollador: false },
  { nombre: 'priscila',
    apellido: 'diaz',
    edad: 26,
    altura: 165,
    eresDesarrollador: true },
  { nombre: 'zarina',
    apellido: 'gonzalez',
    edad: 25,
    altura: 159,
    eresDesarrollador: false } ]
*/
