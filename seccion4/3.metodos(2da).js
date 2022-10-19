// metodos 2da parte
let input = "Libra";
let db = "libra";

//toLowerCase() - toUpperCase
console.log(input.toUpperCase());
console.log(input.toLowerCase());
console.log(input.toLowerCase() === db.toLowerCase()); //true 

console.log(db.toUpperCase());

//concatenar
let str_1 = "soy la primera cadena";
let str_2 = " soy la segunda cadena";

console.log(str_1.concat(str_2));
console.log(str_1 + str_2);
console.log(`${str_1} ${str_2}`);

//eliminar espacios
let str_3 ="Hola soy un string con espacios al final";
console.log(str_3.length)
//trim()
console.log(str_3.trim().length)
console.log(str_3.trimEnd().length)
console.log(str_3.trimStart().length)

//obtener el caracter que hay en cierta posicion
let str_4 = "Hola soy el string numero 4";

console.log(str_4.charAt(3))
console.log(str_4[5]);

//Obtener la posicion de una palabra
let str_5 = "hola soy pri y me gusta el ballet. pri";

console.log(str_5.indexOf("pri"));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("pri"));

