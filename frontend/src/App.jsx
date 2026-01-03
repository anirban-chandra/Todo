import { useState, useEffect } from 'react'
import './App.css'
import {CreateTodo} from './components/CreateTodo'
import {Todos} from './components/Todos'
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todo")
      .then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch(err => console.error("Error fetching todos:", err));
  }, []);

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos ={todos}></Todos>
    </div>
  )
}

export default App
