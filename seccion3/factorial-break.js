//factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let factorial = 10;
let i = factorial;
while (true){
    if (i > 0){
        factorial *= i;
        i--;
    }else{
        break;
    }
}
console.log(factorial);