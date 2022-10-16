//factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

let factorial = 10;
let i = factorial;

while (i > 0){
    factorial *= i ;
    i--;
}

console.log(factorial);