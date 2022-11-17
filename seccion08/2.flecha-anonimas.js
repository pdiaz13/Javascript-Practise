//Funciones flecha
//es6 func flecha,  anonimas

const array = [1, 5, 6, 2, 7, 12, 8, 92];

//Funcion tradicional
//podemos acceder antes o despues
function doble(valor) {
  return valor * 2;
}

console.log(array.map(doble));
//[ 2, 10, 12, 4, 14, 24, 16, 184 ]

//-Funcion anonima (funcion sin nombre)
const array2 = array.map(function (valor) {
  return valor * 2;
});

// Funcion flecha  (tmb anonima porque no tiene nombre) solo se acceden despues de ser inicializadas

//const array2 = array.map((valor) => valor * 2)

console.log(array2);
//[ 2, 10, 12, 4, 14, 24, 16, 184 ]

//Definiendo la funcion tipo flecha
//Funcion flecha usar const

//console.log(dobleDelValor(8)); //Cannot access 'dobleDelValor' before initialization

const dobleDelValor = (valor) => valor * 2;

const array3 = array.map(dobleDelValor);

console.log(dobleDelValor(8));
//16
console.log(array3);
//[ 2, 10, 12, 4, 14, 24, 16, 184 ]
