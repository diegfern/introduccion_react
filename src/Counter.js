import React, { useState, Fragment } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClickAdd = () => {
    setCount(count + 1);
  };
  const handleClickSub = () => {
    setCount(count - 1);
  };

  return (
    <Fragment>
      <button className="btn" onClick={() => handleClickAdd()}>
        +1
      </button>
      <button className="btn" onClick={() => handleClickSub()}>
        -1
      </button>
      <p>Nuestro contador es {count}</p>
    </Fragment>
  );
};

export default Counter;
