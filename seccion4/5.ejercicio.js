// Una cadena de texto con tu Nombre
let nombre ="Priscila";

//Otra cadena de texto con tu Apellido
let apellido = " Diaz";

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre + apellido;
console.log(estudiante);

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus); 

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let letrasNum = estudiante.length;
console.log(letrasNum);
// Una variable que contenga la primera letra del Nombre
let primeraLetra = nombre.charAt(0);
console.log(primeraLetra);
// Otra variable que contenga la última letra del Apellido
let primeraLetraAp = apellido.charAt(0);
console.log(primeraLetraAp);
// Una cadena de texto que elimine los espacios de la variable "estudiante"
let eliminarEspacios = estudiante.replace(" ", "");
console.log(eliminarEspacios);
//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let bool = estudiante.includes(nombre);
console.log(bool);