import { useState, useEffect } from "react";
import axios from "axios";

export function useTodos() {

  // Define state vars for todos list
  const [todos, setTodos] = useState([]);

  // Keep to-dos in sync with database
  useEffect(() => { 
    getTodos(); 
  }, [todos]);

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

  return { todos, setTodos, getTodos };

}