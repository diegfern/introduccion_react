import React, { useState, Fragment, useEffect } from "react";

// https://www.restapitutorial.com/
// REST es un protocolo HTTP que se comunica
// traves de un JSON que nos permite realizar
// las siguientes operaciones:
// Create
// Rread
// Update
// Delete

// Metodos
// POST - Es para crear un nuevo 'resource'.
// GET - Es para obtener un 'resource' o varios 'resources'.
// PUT / PATCH - Es para eliminar un 'resource'.
// DELETE - Es para actualizar el 'resource'.

// Codigos de estado mas comunes.
// 200 - Que todo salio bien.
// 201 - Que se creo algo correctamente.
// 400 - La data que envio el cliente, no es correcta.
// 401 - No tienes autorizacion para acceder ahi.
// 403 - Que esta prohibido el acceso para uno ahi.
// 404 - No existe.
// 500 - Error interno del servidor.

// Cuales son las ventajas de usar Rest
// Permite separar el cliente del servidor.
// Nuestro cliente, seria React.
// Nuestro servidor, podria ser NodeJS, Python, PHP, GO, Exlang.

//Como esta serparado el cliente del servidor, la depuracion
// de errores es mas sencilla.

// Nos permite tener escalabilidad. Podemos dedicar esfuerzos
// en diferentes lados (Es servidor, y nuestro cliente.)

const Rest = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("1ra vez renderizado");
    handleLoadUsers();
  }, []);
  // Cuando sea la primera vez
  // Que mi componente se renderice a 'que se monte'
  // ejecuta una accion
  const handleLoadUsers = async () => {
    console.log("Cargando Usuarios..");

    /*fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then((json) => {
    console.log(json)
    console.log("Fin");
  }); */

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);

    //console.log("users", users);
    //console.log("fin");
  };

  console.log("Users", users);

  return (
    <Fragment>
      <h1>Usuarios</h1>
      {users.length === 0 ? (
        <Fragment>
          <p>No hay usuarios aun</p>
          {/*<button onClick={handleLoadUsers}>Carga mis usuarios</button>*/}
        </Fragment>
      ) : (
        <Fragment>
          <p>Hay usuarios</p>
          <ul>
            {users.map((user, idx) => {
              const { name, email } = user;
              return (
                <li key={idx}>
                  {name} {email}
                </li>
              );
            })}
          </ul>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Rest;
