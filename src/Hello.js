import React from "react";

const Hello = (props) => {
  console.log("Props", props);
  const { name, age } = props;
  return (
    <div>
      <p>
        Hello {name}. You're {age} old
      </p>
    </div>
  );
};

export default Hello;
