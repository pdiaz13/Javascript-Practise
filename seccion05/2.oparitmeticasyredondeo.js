//Principales operaciones aritmeticas
let a = 3.1;
let b = 4.1;

//suma
console.log(a+b)

//resta
console.log(a - b);

//division
console.log(a / b);

//multiplicacion
console.log(a * b);

//Representacion de los numeros en cadenas de texto
console.log(typeof a)
let a_s= a.toString();

console.log(a_s);
console.log(typeof a_s);

//Redondeo de numeros decimales
let c = 3.3;
let d = c * 3;

console.log(d);
//.toFixed()
console.log(d.toFixed(1)); //9.9
console.log(d.toFixed(4)); //9.9000
console.log(typeof d.toFixed(4)); //string

let e = 1839.1232456789;
//.toPrecision()
console.log(e.toPrecision(7));