import Header from "../Header/Header";
import TodoList from "../ToDoList/ToDoList";
import AddTodoForm from "../AddToDoForm/AddToDoForm";

export default function App() {
  return (
    <div className="container p-5">
      <Header appName="To-Do App" />
      <TodoList />
      <AddTodoForm />
    </div>
  );
}
