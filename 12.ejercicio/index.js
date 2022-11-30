/*
- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

- Ejecuta la depuración de VSCode para visualizar la ejecución de la función
*/

function Fibo(num) {
  let lista = [1, 1];
  let sig = 2;
  for (let i = 2; i < num; i++) {
    lista = [...lista, sig];
    siguiente += lista[lista.length - 2];
  }
  return lista;
}

let prueba = Fibo(8);
console.log(prueba);
