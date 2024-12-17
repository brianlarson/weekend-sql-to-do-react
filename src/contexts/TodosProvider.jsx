import { useState } from "react";
import axios from 'axios';

import TodosContext from "./TodosContext";

function TodosProvider({ children }) {
  
  // Define state vars for todos
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  return (
    <TodosContext.Provider value={
      { todos, setTodos, todoText, setTodoText }
    }>
      {children}
    </TodosContext.Provider>
  );

}

export default TodosProvider;