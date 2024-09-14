import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added : ${itemName} Date: ${itemDueDate}`);

    const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName, todoItemDate) => {
    console.log(todoItemName);
    const newTodoItems = todoItems.filter(
      (item) => item.name !== todoItemName && item.date !== todoItemDate
    );
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <div className="todo-border">
        {todoItems.length === 0 && (
          <div>
            <h1 className="h1text">Welcome</h1>
            <br />
            <h1>&nbsp;</h1>
          </div>
        )}

        <AddTodo onNewItem={handleNewItem} />

        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
      <WelcomeMessage />
    </center>
  );
}

export default App;
