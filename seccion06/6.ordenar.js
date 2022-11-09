//.sort() => modifica el array
const array = [2, 5, 9, 15, 1, 2, 0, 4];

console.log(array)

array.sort((a, b) => {
    if (a < b){
        return -1;  //El -1 le indica que a tdebe tener un índice anterior a b
    } else if (a>1) {
        return 1;
    }else { // Si a === b
        return 0 //lo deja igual
    }
})

console.log(array)

// ordenar array numerico
const arrayN = [2, 5, 9, 15, 1, 2, 0, 4];
array.sort((a, b) => a-b);
console.log(arrayN);
//[ 2, 5, 9, 15, 1, 2, 0, 4 ]

/////////////////////////
//arrays objetos
const listaObjetos =[
    {nombre: "lucas", edad: 35},
    {nombre: "matias", edad: 34},
    {nombre: "miguel", edad: 28},
    {nombre:"lucia", edad:3}
];


listaObjetos.sort((a, b) =>{
    if (a.edad < b.edad){
        return -1
    } else if (a.edad > b.edad){
        return +1
    } else{
        return 0
    }
});

console.log(listaObjetos);
//[ { nombre: 'lucia', edad: 3 },{ nombre: 'miguel', edad: 28 },{ nombre: 'matias', edad: 34 },{ nombre: 'lucas', edad: 35 } ]

listaObjetos.sort((a, b) => a.edad - b.edad);
console.log(listaObjetos);
//[ { nombre: 'lucia', edad: 3 },{ nombre: 'miguel', edad: 28 },{ nombre: 'matias', edad: 34 },{ nombre: 'lucas', edad: 35 } ]