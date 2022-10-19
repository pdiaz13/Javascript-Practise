//metodos de strings

//longitud
let str = "Hola soy un string";
console.log(str.length);

//obtener partes de cadenas
//slice() substring() substr(esta obsoleto)
let slice_str = str.slice(0, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10);
console.log(substr_str);

//reemplazo
let cadena = "Hola mi nombre es prisci";
console.log(cadena.replace("prisci", "luchi"));

//expresion regular /g (global), reemplaza todas las instancias
//console.log(cadena.replace(/los/g, 'cinco')) 
//reemplazaria todos los 'los' por cinco


