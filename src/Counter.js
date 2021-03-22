import React, { useState, Fragment } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (bool) => {
    if (bool) setCount(count + 1);
    else setCount(count - 1);
  };

  return (
    <Fragment>
      <button className="btn" onClick={() => handleClick(true)}>
        +1
      </button>
      <button className="btn" onClick={() => handleClick(false)}>
        -1
      </button>
      <p>Nuestro contador es {count}</p>
    </Fragment>
  );
};

export default Counter;
