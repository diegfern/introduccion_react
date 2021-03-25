import React, { useState, useEffect } from "react";

const Nota = (props) => {
  const { note } = props;

  return <li>{note.content}</li>;
};

const Notas = (props) => {
  const { notes } = props;
  const [notas, setNotas] = useState(notes);
  const [nuevanota, setNuevaNota] = useState("");
  const [showImportant, setShowImportant] = useState(false);
  // setNotas puede ir en cualquier lado, excepto
  // en mi return (render)
  // notas si puede ir en cualquier lado

  useEffect(() => {
    console.log("Notas", notas);
  }, [notas]);

  const handleClick = () => {
    //Esto es una funcion anidada
  };

  const addNote = (e) => {
    e.preventDefault();
    // Prevent default nos sirve para
    // prevenir el comportamiento NORMAL del evento.
    // Comportamiento normal: enviarnos a otra pag
    const noteObject = {
      content: nuevanota,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notas.length + 1
    };

    setNotas(notas.concat(noteObject));
    setNuevaNota("");
  };

  // Ecmascript 6
  // Map: Permite manipular los array

  //Linea 14: note hace referencia sobre el objeto que se le pasa
  //como parametro.
  //Puede ser llamado como Item o El sigular del objeto

  const handleButton = () => {
    setShowImportant(!showImportant);
  };

  const notasAMostrar = showImportant
    ? notas.filter((note) => note.important === true)
    : notas;

  console.log("Notas a mostrar", notasAMostrar);

  const handleNoteChange = (e) => {
    const { target } = e;
    const { value } = target;
    //console.log("Mi nota es", e.target.value);
    //console.log("Mi nota es", value);

    setNuevaNota(value);
  };

  // Existen diversos eventos
  // onSubmit
  // onClick
  // onChange
  // onMouseEnter
  // onMouseLeave
  return (
    <div>
      <h1>Notas</h1>
      <button onClick={handleButton}>
        Mostrar {showImportant ? "todos" : "importantes"}
      </button>
      <ul>
        {notasAMostrar.map((note) => (
          <Nota key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={nuevanota} onChange={handleNoteChange} />
        <button type="submit">Guardar nota</button>
      </form>
    </div>
  );
};

export default Notas;
