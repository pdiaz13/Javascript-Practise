//Iterar los valores de la lista
const array = [ "hola", 2, 5, 90, false, undefined];

//forma antigua (poco eficiente)
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}//hola  2 5 90 false undefined

//forma es6 
//asignamos a cada uno de los valores a la variable valor 
array.forEach(valor => {
    console.log(valor)
})//hola  2 5 90 false undefined

let suma = 0;
const arrayNums= [3, 6, 2, 77, 2, 3, 93, 19];
arrayNums.forEach(valor => {
    suma += valor;
console.log(valor)
})

console.log(suma);//205

//Buscar valor
const variable = arrayNums.find(valor =>{
    if (valor === 90){
        return true
    }
})

console.log(variable); //90

const listaObjetos =[
    {nombre: "lucas", edad: 35},
    {nombre: "matias", edad: 34},
    {nombre: "miguel", edad: 28},
    {nombre:"lucia", edad:3}
];

//const objeto = lista.listaObjetos.find(o =>{
//   if (o.nombre === "miguel"){
//        return true
//    }
//})

const objeto = lista.listaObjetos.find(o =>{
    return o.nombre === "miguel"
})

//forma mas eficiente const objeto = lista.listaObjetos.find(o => o.nombre === "miguel")

console.log(objeto.edad); //28

//accede a la prop edad del objeto
const {edad} = listaObjetos.find(o=>o.nombre === "miguel" )
console.log(objeto.edad); //28

