/*

Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

- Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

*/

const familia = ["Ana", "Ale", "Lauti", "Luci", "Pri"];
const setFam = new Set(familia);
console.log(setFam);

setFam.add("Pri");
setFam.add("Javascript");

console.log(setFam);
