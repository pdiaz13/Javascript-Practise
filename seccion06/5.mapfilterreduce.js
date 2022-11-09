// trabajar con metodos mas avanzados 
//.map()
// nos devolverá un nuevo array según lo que le indiquemos en la función (Callback)
const array = ["San Juan", "Córdoba", "Buenos Aires", "Mendoza"];

const val = array.forEach(v => {
    console.log(v)
})

const arr = array.map((valor, indice) => `${indice +1 } - ${valor}`);
console.log(arr);


//.filter()
// Nos devolverá un array con los elementos que cumplan la condción

//Array de objetos
const arrayObj =[{nombre: "lucas", edad: 35},
{nombre: "matias", edad: 34},
{nombre: "miguel", edad: 28},
{nombre:"lucia", edad:3}
];

//forma extendida
//const personasMayores = arrayObj.filter(valor => {
//  if (valor.edad > 30){
 //       return true
  //  } else {
 //       return false
 //   }
//})

//forma simplificada
const personasMayores = arrayObj.filter(obj => obj.edad > 30);

console.log(personasMayores)
// [ { nombre: 'lucas', edad: 35 }, { nombre: 'matias', edad: 34 } 

//mostrar a todos menos a miguel
const nuevaLista = arrayObj.filter(obj => obj.nombre !== "miguel");
console.log(nuevaLista)
//[ { nombre: 'lucas', edad: 35 },{ nombre: 'matias', edad: 34 },{ nombre: 'lucia', edad: 3 } ]


//solo map y filter son muy usados en frameworks

//.reduce()
//obtiene un valor, un obj, un algo a partir de una lista

const valores = [3, 56, 23, 5, 90, 100];

const suma = valores.reduce((valorinicial, current, index, arrayoriginal) =>{
    console.log(valorinicial) //3 valor acumulado: al principio va a tener el primer valor del array
    // con el return 3, 59, 82, 87, 177
    ////(1º pasada: valor inicial, 2º pasada: valor inicial + siguiente elemento, y así mostrando el resultado de todas las operaciones excepto la última que ya se guarda en la constante suma que hemos definido)
    console.log(current) //en cada pasada mostrará los elementos que siguen al 1º (que ya está cargado en el acumulador)
    //56, 23, 5, 90, 100
    console.log(index) //muestra el valor del indice
    //1, 2, 3, 4, 5
    console.log(arrayoriginal) //muestra la lista original
    //[ 3, 56, 23, 5, 90, 100 ]

    return valorinicial + current
});

console.log(suma); //277
//muestra la suma de todos los valores

