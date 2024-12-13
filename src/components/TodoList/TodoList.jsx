import Todo from "../TodoList/Todo";

export default function TodoList({ todos, getTodos }) {
  return (
    <section>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo 
            key={todo.id}
            todo={todo}
            todos={todos}
            getTodos={getTodos}
          />
        ))}
      </ul>
    </section>
  );
}
