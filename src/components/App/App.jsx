import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import TodoList from '../ToDoList/ToDoList';
import AddTodoForm from '../AddToDoForm/AddToDoForm';

export default function App() {

  // Define state vars for todos
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  // Keep to-dos in sync with database
  useEffect(() => { getTodos() }, []);

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
    <div className="container p-5">
      <Header appName="To-Do App" />
      <TodoList
        todos={todos}
        getTodos={getTodos} 
      />
      <AddTodoForm
        todoText={todoText}
        setTodoText={setTodoText}
        getTodos={getTodos} 
      />
    </div>
  );
  
}
