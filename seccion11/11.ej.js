/*
- Una clase llamada "Estudiante" que tenga:

- Una variable llamada nombre

- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

- Crea una nueva instancia de "Estudiante"

- Haz la llamada al método obtenDatos
*/

class Estudiante {
  #nombre;
  #asignaturas = ["Javascript ", "HTML ", "CSS"];

  constructor(nombre) {
    this.#nombre = nombre;
  }

  obtenDatos() {
    console.log(
      `Mi nombre es: ${this.#nombre} y mis asignaturas son: ${
        this.#asignaturas
      }`
    );
  }
}

const nuevoEstudiante = new Estudiante("Priscila");
nuevoEstudiante.obtenDatos();
//Mi nombre es: Priscila y mis asignaturas son: Javascript ,HTML ,CSS
