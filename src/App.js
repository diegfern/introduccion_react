import "./styles.css";
//import Counter from "./Counter";
//import Cursos from "./Cursos.js";
import Props from "./Props.js";

// Const es un tipo de declaracion de variable
// que nos dice que la variable es la misma
// en todo su tiempo de vida.

// Let es un tipo de declaracion de variable
// que nos dice que la variable PUEDE cambiar
// en el transcurso de su vida
/*const notes = [
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
];*/

const courses = [
  {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2
      }
    ]
  }
];

const props = {
  firstName: "José",
  lastName: "Armenta",
  age: 26
};

export default function App() {
  return (
    <div>
      <Props props={props} />
    </div>
  );
}
