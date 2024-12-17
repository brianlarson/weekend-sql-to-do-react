import Header from "../Header/Header";
import TodoList from "../ToDoList/ToDoList";
// import AddTodoForm from "../AddToDoForm/AddToDoForm";

import TodosProvider from "../../contexts/TodosProvider";

export default function App() {
  return (
    <div className="container p-5">
      <TodosProvider>
        <Header appName="To-Do App" />
        <TodoList />
        {/* <AddTodoForm
          todoText={todoText}
          setTodoText={setTodoText}
          getTodos={getTodos}
        /> */}
      </TodosProvider>
    </div>
  );
}
