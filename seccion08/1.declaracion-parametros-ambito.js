//Funciones

//----¿Que son las funciones?
//-Son bloques de código que se ejecutan con un fin específico
//-Se pueden utilizar antes o depues de declararlas indistintamente:

//function saludar(parametro1, parametro2, parametro3...){   }

//--Declarar funciones
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar("juan");
//Hola juan

//--Utilizar funciones
//Se pueden utilizar antes o depues de declararlas indistintamente
saludar("Pri"); //Hola Pri

//si no le paso el parámetro
saludar(); //Hola undefined

//si le paso una variable
let nomb = "Pepe";
saludar(nomb); //Hola Pepe

//Parámetros -- diferencia entre pasar(variables u objetos)

//--Pasar una variable y modificarla en la función (sólo se pasará el valor de la variable)
let nombre2 = "Juan";

function despedir(nombre) {
  nombre = "Diego";
  console.log(`Adiós ${nombre}`);
}

despedir(nombre2); //Adiós Diego ---Ya que hemos cambiado la variable nombre DENTRO DE LA FUNCION
console.log(nombre2); //Juan ---solo se pasa el valor de la variable

//Pasar un objeto y modificarlo en la función (se pasará la referencia al objeto)

//DE FORMA QUE SI LO QUE LE PASAMOS ES UN OBJETO, SI SE MODIFICAN LOS VALORES
let persona = { nombre: "Lucas", apellido: "González" };

function saludarPersona(objeto) {
  objeto.apellido = "Villada";
  console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

saludarPersona(persona); // Hola Lucas Villada
console.log(persona); //{ nombre: 'Lucas', apellido: 'Villada' }

//SI LO QUE LE PASAMOS ES UN OBJETO, SI SE MODIFICAN LOS VALORES

//-Ahora si intentamos llamar a la función sin pasarle ningun objeto, da un error(comentado para poder seguir trabajando):

//saludarPersona() //da el error: Cannot set propierties of undefinied (seting 'nombre')
//porque está intentando acceder a atributos de un objeto que no existe

//-Y si intento pasarle una variable (que no es un objeto)
saludarPersona(nombre2); // Hola undefined undefined

// Parametros opcionales

//Preparar un valor por defecto por si no se le pasa el parámetro indicado (de forma que sea opcional)
//function nombreFuncion(parametro1 = valorePorDefecto1, parametro2 = valorePorDefecto2, ...)
function imprimeNumero(numero = 70) {
  console.log(numero);
}

imprimeNumero(9); // 9
imprimeNumero(); //  70

//Parametros indeterminados
//factor de propagación como parámetros
//function nombreFuncion (...parametro){}
function imprimir(...parametros) {
  console.log(parametros);
}

imprimir(1, 3, 7, 9, "hola", { id: 4 });
//[1, 3, 7, 9, "hola", {id:4}]

//Devolver valores
//ej suma
//si queremos que la funcion devuelva algo poner return
function suma(...nums) {
  return nums.reduce((a, b) => a + b);
}
//guardar resultado
const s = suma(1, 2, 3, 4);
console.log(s);

//otro ejemplo:
function multiplicar(a = 1, b = 1) {
  return a * b;
}

console.log(multiplicar()); // 1
console.log(multiplicar(5)); //5
console.log(multiplicar(5, 10)); //50

//Ambito de variables (dentro y fuera de la funcion)

let variable = 0;

function resta(a = 0, b = 1) {
  let variable_interna = 25;
  console.log(variable); // 0 PODEMOS ACCEDER A CUALQUIER VARIABLE DESDE LA FUNCIÓN
}

resta(); // Simplemente la llamo para que se ejecute y ver los resultados

console.log(variable_interna); // da un error: (variable_interna is not definied)
//YA QUE variable_interna ESTÁ DEFIIDA DENTRO DE LA FUNCIÓN Y NO ES ACCESIBLE DESDE FUERA
