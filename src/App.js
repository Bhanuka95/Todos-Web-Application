import React, {useState, useEffect} from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


function App() {

  const [loading, setLoading] = useState(false);

  //run only one time when the page is loading
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, []);
  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); //an array of objects will be used
  const [status, setStatus] = useState('all'); //Filter completed and non-completed
  const [filteredTodos, setFilteredTodos] = useState([]);

  //RUN once when the app start
useEffect(() => {
  getLocalTodos();
}, []);

  //USE EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;

      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
       
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  //USE LOCAL STORAGE TO SAVE TO DO ITEMS
const saveLocalTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const getLocalTodos = () => {
  if(localStorage.getItem("todos") === null){
    localStorage.setItem("todos", JSON.stringify([]));
  }
  else{
  let todoLocal = JSON.parse(localStorage.getItem("todos"));
  setTodos(todoLocal);
  }
};

  return (
    
    <div className="App">
      {
        loading ?
        
        <ClimbingBoxLoader
          size = {30}
          color={"#9013FE"}
          loading={loading}
        />
        :
        <div>
      
      <Navbar className="nav" > 
        <h1>Website todo</h1>
    </Navbar>  
    
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
      <Form inputText={inputText} todos={todos}
       setTodos={setTodos} setInputText={setInputText}
        setStatus={setStatus} />
      </div>
      }
      
      
    </div>
  );
}

export default App;
