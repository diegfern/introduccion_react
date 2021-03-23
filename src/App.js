import "./styles.css";
//import Counter from "./Counter";
import Notas from "./Notas.js";

// Const es un tipo de declaracion de variable
// que nos dice que la variable es la misma
// en todo su tiempo de vida.

// Let es un tipo de declaracion de variable
// que nos dice que la variable PUEDE cambiar
// en el transcurso de su vida
const notes = [
  {
    id: 1,
    content: "HTML es muy facil",
    date: "2020-01-01",
    important: true
  },
  {
    id: 2,
    content: "Los navegadores solo pueden ejecutar Javascrtipt",
    date: "2020-01-20",
    important: false
  },
  {
    id: 3,
    content: "Nota 3",
    date: "2020-01-11",
    important: false
  }
];

export default function App() {
  return (
    <div>
      <Notas notes={notes} />
    </div>
  );
}
