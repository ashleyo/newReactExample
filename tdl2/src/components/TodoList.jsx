// replace map with mutating methods
import "../App.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { GoogleSpreadsheet } from "google-spreadsheet";

export default TodoList;



function TodoList({ todos, setTodos }) {

  const forceUpdate = useForceUpdate()
  function useForceUpdate() {
    const [,forceUpdate] = useState();
    return React.useCallback(() => {
      forceUpdate(s => !s)
    }, []);
  }

  
  const handleToggle = (todo) => {
    const index = todos.findIndex((e) => e.id === todo.id)
    todos[index].done = todos[index].done.toLowerCase() === "true" ? "false" : "true";
    todos[index].save()
    forceUpdate()
  };

  return todos ?
    (
    <section className={"App-list-wrapper"}>
      <ul className={"App-list-list"}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span onClick={() => handleToggle(todo)}
              style={{
                textDecoration: (todo.done.toLowerCase() === "true") ? "line-through" : "",
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
  (<div><p>Empty</p><AddTodo setTodos={setTodos} /></div>)
}

function AddTodo({ setTodos }) {
  const inputRef = React.useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();
    let text = e.target.elements.addTodo.value;
    const newdo = {
      id: (min, max) => Math.floor(Math.random() * (max - min)) + min,
      text,
      done: "false",
    };
    

    setTodos((prevTodos) => { 
      console.log("modifying", prevTodos)
      prevTodos.addRow(newdo)}
      );
    inputRef.current.value = "";
  };
  return (
    <form onSubmit={handleAddTodo}>
      <div>
        <input name="addTodo" placeholder="Add todo" ref={inputRef} />
        
        <button className="App-fonticon-surround" type="submit">
          <FontAwesomeIcon className="App-fonticon" icon={faPlusSquare} />
        </button>
      </div>
    </form>
  );
}

function DeleteTodo({ todo, setTodos }) {
  function handleDeleteTodo() {
    setTodos((prevTodos) => {
      prevTodos[prevTodos.findIndex((e) => e.id === todo.id)].delete();   
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
