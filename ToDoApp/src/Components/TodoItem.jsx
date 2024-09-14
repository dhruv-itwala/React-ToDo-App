import style from "./AddTodo.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoItem({ TodoName, TodoDate, onDeleteClick }) {
  return (
    <div className={("container text-center", style.container)}>
      <div className="row align-items-center">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2 text-end">
          <button
            type="button"
            className={style.deletebtn}
            onClick={() => onDeleteClick(TodoName, TodoDate)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
