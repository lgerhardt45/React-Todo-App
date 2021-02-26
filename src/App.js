import "./App.css";

// Importing Component
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Lukas' To-Do List</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
