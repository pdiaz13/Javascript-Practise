//strings

let str = "Hola soy un texto";
let str_sng= 'Hola soy un texto con comillas simples'

console.log(str);
console.log(str_sng);

let str_comillas = "El otro dia me dijo \"ve a sacar la basura\"";
let str_comillas2= "el otro dia me dijo 've a sacar la basura'";
let str_comillas3= 'el otro dia me dijo "ve a sacar la basura"';

console.log(str_comillas);

//comillas invertidas
let str_backticks = `Hola esto es un string con backticks`;
//agrega variables a texto
let nombre = "Pri";
let saludo = `Hola ${nombre} bienvenido`;

console.log(saludo);

//Plantillas HTML (escribir codigo html con backticks)
let plantilla = `<html>
    <h1> titulo </h1>
    <p> este es un parrafo </p>
</html>`;

console.log(plantilla);
