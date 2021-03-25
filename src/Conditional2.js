import React, { Fragment } from "react";

const Conditional2 = (props) => {
  const { state } = props;

  return (
    <Fragment>
      {state === "Encendido" ? <h2>Encendido</h2> : <h2>Apagado</h2>}
    </Fragment>
  );
};

export default Conditional2;
