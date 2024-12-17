import { useContext } from "react";
import TodosContext from "../../contexts/TodosContext";
import Todo from "../TodoList/Todo";

export default function TodoList() {
  const { todos } = useContext(TodosContext);
  return (
    <section>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}
