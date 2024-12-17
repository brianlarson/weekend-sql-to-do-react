import { useTodos } from "../../contexts/TodosContext";

import Todo from "../TodoList/Todo";

export default function TodoList({ getTodos }) {
  const { todos } = useTodos();
  return (
    <section>
      <ul className="list-group">
        {todos.length === 0 && (
          <li className="list-group-item bg-transparent text-center text-secondary fs-5">
            🫤 <span className="fst-italic ms-2">No to-dos found. Please add some.</span>
          </li>
        )}
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} getTodos={getTodos} />
        ))}
      </ul>
    </section>
  );
}
