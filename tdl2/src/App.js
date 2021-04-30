
import "./App.css";
import React, { useState, useEffect, useReducer } from "react";
import TodoList from "./components/TodoList"
import Data, {getUIData, toggleStatus, addRow, deleteRow} from "./Data"

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



function TestComp({dispatch}) {
  return (
    <p><button onClick={() => dispatch({type:'toggle'})}>Press</button>put stuff here</p>
  );
}


function App() {

  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [,setUpdateUI] = useState(Date.now())
  const [, dispatch] = useReducer(reducer, Date.now() );


  function reducer(id, action) {
    switch (action.type) {
      case 'toggle':
        //toggleStatus(id)
        console.log("toggle provided with id", id)
        setUpdateUI()
        return Data;
      case 'addrow': //in this case id should be the new row rather than an id
        //addRow(id)
        setUpdateUI()
        return Data;
      case 'deleterow':
        //deleteRow(id)
        setUpdateUI()
        return Data
      default:
        throw new Error(); 
    }
  }

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
        <TestComp dispatch={dispatch} />
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
