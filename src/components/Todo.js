import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  // Events
  const deleteHandler = (e) => {
    setTodos(todos.filter((el) => el.id !== todo.id)); // filter out the id-matching todo item
  };

  const completeHandler = (e) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed, // all other attributes of item
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
