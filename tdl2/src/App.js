import "./App.css";
import React from "react";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Wash dishes", done: true },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <TodoList setTodos={setTodos} todos={todos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}

export default App;

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
    <section>
      <ul>
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
    <div
      onClick={handleDeleteTodo}
      role="button"
      style={{
        display: "inline-block",
        color: "red",
        fontWeight: "bold",
        marginLeft: 10,
        cursor: "pointer",
      }}
    >
      x
    </div>
  );
}
