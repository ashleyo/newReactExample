import "./App.css";
import React from "react";
import TodoList from "./components/TodoList"

export default App;

const testFixture = [
  { id: 1, text: "Wash dishes", done: true },
  { id: 2, text: "Do laundry", done: false },
  { id: 3, text: "Take shower", done: false },
];

function App() {
  const [todos, setTodos] = React.useState(testFixture);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}


