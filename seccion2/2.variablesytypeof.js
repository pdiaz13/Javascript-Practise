//variables

var variable;
let variableLet;

//const constante; ctrl + } para comentar

var a =1;
console.log(a);

a =4;
console.log(a);

const constante = "Hola soy una const";
console.log(constante);
// constante = "Adios"; X

let b = 3;
console.log(b);

b= 5;
console.log(b);

//var vs let
var variable = "Hola soy una variable VAR";
for(var i = 0; i < 3; i ++){
    var variable = "soy la segunda variable"
} //es mala practica la declaracion
console.log(variable)
//la declaracion var puede abarcar distintas partes de la estructura
// // -------------------------------------------------------
let variable_Let = "Hola soy una variable Let";
for(var i = 0; i < 3; i ++){
    let variable_Let = "soy la segunda variable"
} //mala practica
console.log(variable_Let)
//let abarca la misma parte de la estructura de un programa

//typeof (mala practica)
console.log(typeof 1);
console.log(typeof "2");
console.log(typeof " ");
