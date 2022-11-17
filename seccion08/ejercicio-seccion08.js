/*
- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
*/

// 1.

function verdad() {
  return true;
}

console.log(verdad());
//true

//2.
function asinc() {
  setTimeout(function () {
    console.log("Hola soy una promesa");
  }, 5000);
}

asinc();
//tarda 5 segundos en mostrarse "Hola soy una promesa"

//3.
function* generarIndex() {
  let index = 0;
  while (true) {
    if (index % 2 == 0) {
      yield index;
    }
    index++;
  }
}

const gen = generarIndex();

console.log(gen.next()); //{ value: 0, done: false }
console.log(gen.next()); //{ value: 2, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 6, done: false }
console.log(gen.next()); // { value: 8, done: false }
console.log(gen.next()); // { value: 10, done: false }
console.log(gen.next()); // { value: 12, done: false }
console.log(gen.next()); // { value: 14, done: false }
