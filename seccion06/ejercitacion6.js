//Crea un archivo JS que contenga las siguientes líneas

//- Una variable que contenga la lista de la compra (mínimo 5 elementos)

const listCompras = ["Harina", "Manteca", "Azucar", "Chocolate", "Vainilla"];

//- Modifica la lista de la compra y añádele "Aceite de Girasol"

listCompras.push("Aceite de Girasol");
console.log(listCompras);
/*
[ 'Harina',
  'Manteca',
  'Azucar',
  'Chocolate',
  'Vainilla',
  'Aceite de Girasol' ]
*/

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

listCompras.pop();
console.log(listCompras);
/*
[ 'Harina',
  'Manteca',
  'Azucar',
  'Chocolate',
  'Vainilla' ]
*/

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const listPelis = [
  { titulo: "Star Wars III", director: "George Lucas", fecha: "2005" },
  { titulo: "John Wick II", director: "Chad Stahelski", fecha: "2017" },
  { titulo: "El Padrino", director: "Francis Ford Coppola", fecha: "1972" },
];

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const resultado = listPelis.filter((titulo) => titulo.fecha > 2010);
console.log(resultado);

/*
[ { titulo: 'John Wick II',
    director: 'Chad Stahelski',
    fecha: '2017' } ]
*/

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = listPelis.map((titulo) => titulo.director);
console.log(directores);
/*
[ 'George Lucas', 'Chad Stahelski', 'Francis Ford Coppola' ]
*/

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const titulos = listPelis.map((titulo) => titulo.titulo);
console.log(titulos);
/*
[ 'Star Wars III', 'John Wick II', 'El Padrino' ]
*/

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const listaNueva = directores.concat(titulos);
console.log(listaNueva);
/*
[ 'George Lucas',
  'Chad Stahelski',
  'Francis Ford Coppola',
  'Star Wars III',
  'John Wick II',
  'El Padrino' ]
*/

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaNueva2 = [...directores, ...titulos];
console.log(listaNueva2);
/*
[ 'George Lucas',
  'Chad Stahelski',
  'Francis Ford Coppola',
  'Star Wars III',
  'John Wick II',
  'El Padrino' ]
*/
