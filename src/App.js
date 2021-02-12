import React, {useState} from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); //an array of objects will be used
  const [filter, setFilter] = useState('all'); //Filter completed and non-completed
  

  return (
    <div className="App">
      <header>
      <h1>My ToDo List </h1>
      </header>
      <Form inputText={inputText} todos={todos}
       setTodos={setTodos} setInputText={setInputText} setFilter={setFilter}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
