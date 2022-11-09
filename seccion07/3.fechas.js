//Fechas

//Obtener fecha del sistema
const fecha = new Date();
console.log(fecha); //fecha actual

//Inicializar fecha con datos
//--los meses empiezan en 0 (ene) - 11(dic)
//--new Date(Año, Mes, día, horas, minutos, segundos, milisegundos) son obligatorios Año y Mes
const fecha2 = new Date(1987, 10, 20, 1, 23, 52);
console.log(fecha2);

//Usando milisegundos
//-- tambien se pueden usar milisegundos negativos
const fecha3 = new Date(0); //indicamos el momento inicial desde el que se empieza a contar
console.log(fecha3);
//Wed Dec 31 1969 21:00:00 GMT-0300 (hora estándar de Argentina)

const fecha4 = new Date(10000000);
console.log(fecha4);
//Wed Dec 31 1969 23:46:40 GMT-0300 (hora estándar de Argentina)

//Definir fechas con strings
const fecha6 = new Date("October 13, 1979, 12:28:37");
console.log(fecha6);
//Sat Oct 13 1979 12:28:37 GMT-0300 (hora estándar de Argentina)

//Comparar fechas

//SABER SI UNA FECHA ES ANTERIOR O POSTERIOR
//--usando <, >
console.log(fecha > fecha2); //true
console.log(fecha2 > fecha4); //true
console.log(fecha4 > fecha2); //false

//SABER SI UNA FECHA IGUAL A OTRA
//no sirve usar el == o === (x)
console.log(fecha == fecha); // muestra true PORQUE SON EL MISMO OBJETO

//esta es la forma para comparar fechas
//fecha.getTime() obtiene la fecha en milisegundos
console.log(fecha2.getTime() === fecha4.getTime()); //false

//Obtener el dia, mes y año de una fecha

//Obtener el día
//--usando .getDate()
console.log(fecha6.getDate()); //13

//Obtener el mes (Recordar que comienza por Enero:0 Diciembre:11)
//--usando .getMonth()
console.log(fecha6.getMonth()); //9 (oct)

//Obtener el año
//--usando .getFullYear()
console.log(fecha6.getFullYear()); //1979

//Truco para mostrar una fecha en un string
console.log(fecha6); // Sat Oct 13 1979 12:28:37 GMT-0300 (hora estándar de Argentina
//pero ... Para mostrar la fecha local usar .toLocaleDateString()
console.log(fecha6.toLocaleDateString()); //13/10/1979

//pasándole el Locale (sería como el idioma)
//ver: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha6.toLocaleDateString("es-ES")); //dd/mm/aaaa en español
