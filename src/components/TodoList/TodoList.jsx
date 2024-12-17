import { useTodos } from "../../contexts/TodosContext";
import axios from 'axios';

import Todo from "../TodoList/Todo";

export default function TodoList({ getTodos }) {
  const { todos } = useTodos();
  return (
    <section>
      <ul className="list-group">
        {todos.length === 0 && (
          <li className="list-group-item bg-transparent text-center text-secondary fst-italic">No to-dos found. Please add one.</li>
        )}
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} getTodos={getTodos} />
        ))}
      </ul>
    </section>
  );
}
