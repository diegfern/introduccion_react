import React, { useState, Fragment, useEffect } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const handleButton = () => {
    setShowCompleted(!showCompleted);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    setTodos(todos.filter((todo) => todo.id <= 20));
  };

  const todosFilter = showCompleted
    ? todos.filter((todo) => todo.completed === true)
    : todos;

  //console.log(todos);
  return (
    <Fragment>
      <h1>Listas To-Do</h1>
      {todos.length === 0 ? (
        <Fragment>
          <p>No hay Listas to-do aún</p>
        </Fragment>
      ) : (
        <Fragment>
          <button onClick={handleButton}>
            Mostrar {showCompleted ? "todo" : "'to-dos' completados"}
          </button>
          <ul>
            {todosFilter.map((todo) => {
              const { id, title } = todo;
              return (
                <li key={id}>
                  {id} {title}
                </li>
              );
            })}
          </ul>
        </Fragment>
      )}
    </Fragment>
  );
};

export default TodoList;
