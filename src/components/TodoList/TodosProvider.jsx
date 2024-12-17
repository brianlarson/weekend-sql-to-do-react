import { useState } from "react";
import TodosContext from "../../contexts/TodosContext";

function TodosProvider({ children }) {
  
  // Define state vars for todos
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  return (
    <TodosContext.Provider value={{ todos, todoText, setTodos, setTodoText }}>
      {children}
    </TodosContext.Provider>
  );

}

export default TodosProvider;