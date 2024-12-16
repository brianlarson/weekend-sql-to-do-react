import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create todos context with hook/API
export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  
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

  return (
    <TodosContext.Provider value={{ todos, setTodos, todoText, setTodoText, getTodos }}>
      {children}
    </TodosContext.Provider>
  );

}
