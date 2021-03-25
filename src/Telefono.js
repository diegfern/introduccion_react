import React, { useState, Fragment } from "react";

const Person = (props) => {
  const { person } = props;

  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
    </tr>
  );
  {
    /*<li>Nombre: {persona.name} - Número: {persona.number}</li>*/
  }
};

const Telefono = () => {
  const [persons, setPersons] = useState([
    {
      name: "Hoose",
      number: "3141066664"
    },
    {
      name: "Diego",
      number: "9663436311"
    }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleAddButton = (e) => {
    e.preventDefault();
    if (newName === "" || newNumber <= 0 || newNumber >= 10000000000) {
      return;
    }

    if (persons.filter((person) => person.number === newNumber).length === 1) {
      //console.log("Número duplicado.");
      alert("Numero Duplicado.");
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber
    };
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
    //console.log("PersonObject", personObject);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    if (!Number(e.target.value) && e.target.value !== "") {
      return;
    }
    setNewNumber(e.target.value);
  };

  return (
    <Fragment>
      <h2>Guía telefónica</h2>
      <form>
        <div>
          Nombre: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Numero: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={handleAddButton}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <tbody>
          <tr>
            <td>Nombre</td>
            <td>Número</td>
          </tr>
          {persons.map((person) => (
            <Person key={person.number} person={person} />
          ))}
        </tbody>
      </table>
      {/* MOSTRAR GUÍA AQUÍ */}
    </Fragment>
  );
};

export default Telefono;
