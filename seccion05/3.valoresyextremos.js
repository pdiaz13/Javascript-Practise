//Operador .valueOf() - Obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3); //definir num apartir de un prototipo
//new nos permite inicializar un numero

console.log(b); // NUmber 3 {}
console.log(a + b); // suma valores

console.log(a.valueOf());// 2
console.log(b.valueOf());// 3

let str = new String(" Hola soy un String");
console.log(str); 
/*
0: ' ',
  1: 'H',
  2: 'o',
  3: 'l',
  4: 'a',
  5: ' ',
  6: 's',
  7: 'o',
  8: 'y',
  9: ' ',
  10: 'u',
  11: 'n',
  12: ' ',
  13: 'S',
  14: 't',
  15: 'r',
  16: 'i',
  17: 'n',
  18: 'g' 
*/
console.log(str.valueOf()); //Hola soy un String

//Nan (not a number) - Infinity
let n = Number('adios');
console.log(n); //NaN

console.log(isNaN(n));

let numerador = 19;
let divisor = 0;

console.log(numerador / divisor); //Infinity 

let divisor2 = null;
console.log(numerador / divisor2); // Infinity

//N Hexadecimales
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16)); //239031
console.log(typeof numHex);

//De strings a valores numericos
let numero = '5.89';
let num2 = 17.2;
console.log(typeof numero); //string
console.log(numero + num2); //los concatena

console.log(typeof Number(numero)); //numero
console.log(Number(numero) + num2); //los suma

console.log(parseInt(numero)); // 5
console.log(parseFloat(numero)); // 5.89

// Obtener los valores max y min
//obtienen los valores mx y min de js
let min_precision = Number.EPSILON;
let min_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;

console.log(min_precision); //2.220446049250313e-16
console.log(min_valor_js); //5e-324
console.log(max_valor_js); //1.7976931348623157e+308
