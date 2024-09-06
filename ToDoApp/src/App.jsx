import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy milk",
      date: "06/12/2002",
    },
    {
      name: "Go to college",
      date: "30/07/2002",
    },
    {
      name: "Buy me food",
      date: "05/06/2020",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
