//Bucles For

/*
for (inicializacion; condicion; actualizacion){
    //esto es el bucle
}

i= i+1
i+=1
i++
*/

//ejecuta el bucle 10 veces----  i = i+3 iria de 3 en 3 
for (let i = 0; i < 10; i++) {
console.log(i)
}
//recorrer lista
let lista = [1, 4, 6, 2, 3, 7, 10, 12];
// lo mas normal, hay formas mejores
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}

//for... of
//mas especifico, declara valor a cada elemento de la lista

for (let valor of lista) {
    console.log(valor)
}

//forEach
lista.forEach(valor => {
    console.log(valor)
})

//for... in

let persona = {
    nombre: "Pri",
    edad: 26,
    isDeveloper: true
}
//accede a nombre
console.log(persona.nombre);

//acceder a edad desde una variable, entre corchetes
let prop = "edad";
console.log(persona[edad])


for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}