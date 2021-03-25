import React, { Fragment } from "react";

// Asincronia es algo muy fundamental en JS
// Lenguaje de programacion que se ejecuta en un solo hilo, es decir,
// Solo puede ejecutar una cosa a la vez en todo su proceso
// de vida

// Asincrono: La respuesta sucede a futuro, una operacion
// asincrona no esperara el resultado.

//Sincrono> la respuesta esta sucediendo en el presente,
// Esta operacion esperara el resultado.

const Asincrono = () => {
  const uno = () => {
    setTimeout(() => {
      console.log("Uno");
    }, 0);
    dos();
    console.log("Tres");
  };

  const dos = () => {
    setTimeout(() => {
      console.log("Dos");
    }, 1000);
  };

  const handleClick = () => {
    console.log("Inicio");
    uno();
    console.log("fin");
  };

  return (
    <Fragment>
      <button onClick={handleClick}>Click</button>
    </Fragment>
  );
};

export default Asincrono;
