import { useState, useEffect } from "react";
import axios from 'axios';

import TodosContext from "./TodosContext";

function TodosProvider({ children }) {
  
  // Define state vars for todos
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  
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

  // Function for toggling completion status of to-dos
  const toggleTodo = (todoId) => {
    const todoToUpdate = todos.find((todo) => todo.id === todoId);
    axios({
      method: 'PUT',
      url: '/api/todos',
      data: { 
        id: todoId, 
        isComplete: todoToUpdate.isComplete 
      }
    })
      .then((_) => {
        // console.log('PUT request successful:', _.data);
        getTodos();
    })
      .catch((err) => {
        console.log('Error with PUT request:', err);
    });
  };

  return (
    <TodosContext.Provider value={
      { todos, setTodos, todoText, setTodoText, getTodos, toggleTodo }
    }>
      {children}
    </TodosContext.Provider>
  );

}

export default TodosProvider;