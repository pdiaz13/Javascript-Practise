/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

const hoy = new Date();
console.log(hoy);
//Wed Nov 09 2022 19:15:55 GMT-0300 (hora estándar de Argentina)

const nac_fecha = new Date(1995, 9, 15);
console.log(nac_fecha);
//Sun Oct 15 1995 00:00:00 GMT-0300 (hora estándar de Argentina)

const tarde = hoy > nac_fecha;
console.log(tarde);
//true

const dia_nac = nac_fecha.getDate();
console.log(dia_nac);
//15

const mes_nac = nac_fecha.getMonth();
console.log(mes_nac);
//9

const anio_nac = nac_fecha.getFullYear();
console.log(anio_nac);
//1995
