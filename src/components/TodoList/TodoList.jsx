import { useEffect, useContext } from "react";
import axios from 'axios';

import TodosContext from "../../contexts/TodosContext";
import Todo from "../TodoList/Todo";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);

  // Keep to-dos in sync with database
  useEffect(() => { 
    getTodos(); 
  }, []);

  // Fetch latest todos and update state to request a DOM render
  const getTodos = () => {
    axios({
      method: 'GET',
      url: '/api/todos'
    })
      .then((response) => {
        // console.log('GET request successful:', response.data);
        setTodos(response.data);
    })
      .catch((err) => {
        console.log('Error with GET request:', err);
    });
  };

  return (
    <section>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} getTodos={getTodos} />
        ))}
      </ul>
    </section>
  );
}
