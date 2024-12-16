import { useContext } from "react";
import { TodosContext, TodosProvider } from "../../contexts/TodosContext";

import Header from "../Header/Header";
import TodoList from "../ToDoList/ToDoList";
import AddTodoForm from "../AddToDoForm/AddToDoForm";

export default function App() {
  const { todos } = useContext(TodosContext);
  return (
    <TodosProvider todos={todos}>
      <div className="container p-5">
        {/* <Header appName="To-Do App" />
        <TodoList todos={todos} getTodos={getTodos} />
        <AddTodoForm
          todoText={todoText}
          setTodoText={setTodoText}
          getTodos={getTodos}
        /> */}
      </div>
    </TodosProvider>
  );
}
