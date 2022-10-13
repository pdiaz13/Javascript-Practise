/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/ 
const fecha_nac = new Date(1995, 9, 15);

const libroFav ={
    titulo: "Bestiario",
    autor: "Julio Cortazar",
    fecha: 1951,
    url: "http://biblio3.url.edu.gt/Libros/Cortazar/Bestiario.pdf"
}

const lista = ["Priscila", 26, true, fecha_nac, libroFav ];

console.log(lista);
