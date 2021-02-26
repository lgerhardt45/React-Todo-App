import React from "react";

const Form = ({ todos, setTodos, inputText, setInputText, setStatus, filteredTodos }) => {
  //here I can write JavaScript code and functions

  const inputTextHandler = (e) => {
    console.log(e.target);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    // don't refresh the page on submission click
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);

    // reset input
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value) // update the status (up level to the changed value)
  }

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
