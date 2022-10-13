// listas, arrays
//conjunto de variables puestas en orden

const lista = [1, "hola", true, undefined, null];
//  crear lista con new
const lista2 = new Array(2, "hola", true, undefined, null);
// lista con espacios
const lista3 = new Array(3);
// agregar valores
lista3[0] = "soy el primer elemento";
//listas anidadas
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista3);
console.log(lista4);

//Objetos
//la const es movil no los valores
const movil = { //aributos
    altura: 10,
    anchura: 5,
    marca: "xiaomi",
    isWhite: false,
    contactos: ["mica", "lucia"], //lista
    tarjeta: { //objeto
        marca: "nini",
        almacenamiento: 26
    },
    "altura-tarjeta":4 //nuevo atributo
}
//nuevas propiedades
movil.anio = 2019;
//cambiar prop
movil.marca = "samsung";

console.log(movil.tarjeta.marca);

//Fechas
// librerias: moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); //utilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2022");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 14);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() +1; //sumarle 1 porque empieza desde 0
const anio = ahora.getFullYear();

console.log(dia, mes, anio);
