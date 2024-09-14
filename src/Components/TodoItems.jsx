import TodoItem from "./TodoItem";
//import style from "./Todoitems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={style.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          TodoName={item.name}
          TodoDate={item.date}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
