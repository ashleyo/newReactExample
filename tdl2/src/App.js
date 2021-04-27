/*https://docs.google.com/spreadsheets/d/1L4N9X_uOnk4uDg109RJiTyx6kAXHc2XXl27-KJqNymk/edit#gid=0*/
import "./App.css";
import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList"
import Data from "./Data"

export default App;
/*
const testFixture = [
  { id: 1, text: "Wash dishes", done: false },
  { id: 2, text: "Do laundry", done: false },
  { id: 3, text: "Take shower", done: true },
];
*/
/*
 const getrows =  async () => { 
    const r = await Data;
    console.log("Data is", r)
  }
*/
/* const rows = getrows(); */
/* currently breaks adding items because rows is a Promise not an array ... */

function App() {

  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    let rows = []
    async function getTasks() {
      setLoading(true);
      rows = await Data; /*getrows(); */
      setTodos(rows);
      setLoading(false);
    }

    getTasks();
  }, []); 

  /* todos contains a RO here */
    
  return !loading ? (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  ) : ("Loading...")
}


/*

CRUD - 
C - new task needs to be added to sheet - key creation? stored with sheet?
R - need to be able to retrieve all rows for presentation (index view)
U - only change status (for now), description we'll deal with later
D - keys? again. Or filter by description.


U/D options ... 

i) Add/delete individual items from sheet - less data, tidier, more complex
ii) Write entire data set back on each change - more data, may not scale, simples


*/
