//- Una variable que contenga tu altura en centímetros (entero)
let alturaInt = 165;

//- Una variable que contenga tu altura en metros (número de coma flotante)
let alturaFloat = 1.65;

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 65.2;

//- Una variable que contenga tu altura en metros redondeada hacia arriba
let altura = alturaFloat.toFixed();
console.log(altura);
//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoK = Math.floor(peso);
console.log(pesoK);
//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max = (Number.MAX_VALUE + 1) === Number.MAX_VALUE;
console.log(max);