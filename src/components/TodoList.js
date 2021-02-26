import React from "react";

// Import components
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {


  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          /> // give each todo the whole list to manage itself in there
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
