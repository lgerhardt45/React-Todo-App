import React, { useState, useEffect } from "react";
import "./App.css";

// Importing Component
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // States
  // input from form
  const [inputText, setInputText] = useState("");
  // todo items
  const [todos, setTodos] = useState([]);
  // filter
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // UseEffects
  // run only once
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    // handler is called everytime...
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
    saveLocalTodos();
  }, [todos, status]); // the element in here changes

  // functions
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Lukas' To-Do List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
