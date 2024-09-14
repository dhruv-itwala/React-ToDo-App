import { useState } from "react";
import style from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDuedate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDuedate(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (todoName != null && dueDate != null) {
      onNewItem(todoName, dueDate);
      setDuedate("");
      setTodoName("");
    }
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            className={style.input}
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={style.input}
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2 text-center">
          <button
            type="button"
            className={style.btn}
            onClick={handleAddButtonClick}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
