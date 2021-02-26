import React, { useState } from "react";
import "./App.css";

// Importing Component
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // input from form
  const [inputText, setInputText] = useState("");

  // todo items
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Lukas' To-Do List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList />
    </div>
  );
}

export default App;
