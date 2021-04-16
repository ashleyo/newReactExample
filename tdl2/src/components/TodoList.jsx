import "../App.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default TodoList;

function TodoList({ todos, setTodos }) {

  const handleToggle = (todo) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? {
            ...t,
            done: !t.done,
          }
        : t
    );
    setTodos(updatedTodos);
  };

  return (todos.length) ?
    (
    <section className={"App-list-wrapper"}>
      <ul className={"App-list-list"}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span onClick={() => handleToggle(todo)}
              style={{
                textDecoration: todo.done ? "line-through" : "",
              }}
            >
              {todo.text}
            </span>
            <DeleteTodo todo={todo} setTodos={setTodos} />
          </li>
        ))}
      </ul>
      <AddTodo setTodos={setTodos} />
    </section>
  )
  :
  (<p>Empty</p>)
}

function AddTodo({ setTodos }) {
  const inputRef = React.useRef();
  const handleAddTodo = (e) => {
    e.preventDefault();
    let text = e.target.elements.addTodo.value;
    const newdo = {
      id: (min, max) => Math.floor(Math.random() * (max - min)) + min,
      text,
      done: false,
    };
    setTodos((prevTodos) => {
      return prevTodos.concat(newdo);
    });
    inputRef.current.value = "";
  };
  return (
    <form onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

function DeleteTodo({ todo, setTodos }) {
  function handleDeleteTodo() {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== todo.id);
    });
  }

  return (

    <FontAwesomeIcon style={{
        color:"red",
        fontWeight: "bold",
        marginLeft: 10,
        cursor: "pointer",
        }} 
        role="button"
        onClick={handleDeleteTodo}
        icon={faTimesCircle} />
  );
}
