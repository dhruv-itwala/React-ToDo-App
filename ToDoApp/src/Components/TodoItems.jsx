import TodoItem from "./TodoItem";
import style from "./Todoitems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={style.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem TodoName={item.name} TodoDate={item.date} />
      ))}
    </div>
  );
};

export default TodoItems;
