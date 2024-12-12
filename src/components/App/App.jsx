import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Header/Header';

function App() {

  // Define state vars for todos
  const [todos, setTodos] = useState([]);
  const [todoText, setToDoText] = useState('');

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
  
  // Add to-do to database and re-fetch to-dos to update DOM
  const addTodo = () => {
    axios({
      method: 'POST',
      url: '/api/todos',
      data: { text: todoText }
    })
      .then((response) => {
        // console.log('POST request successful:', response.data);
        getTodos();
    })
      .catch((err) => {
        console.log('Error with GET request:', err);
    });
  };

  // Handle adding to-dos with form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    todoText ? addTodo() : alert(`‼️ Please add a description for your new to-do`);
    setToDoText('');
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
      .then((response) => {
        console.log('PUT request successful:', response.data);
        getTodos();
    })
      .catch((err) => {
        console.log('Error with PUT request:', err);
    });
  };

  // Function for deleting to-dos
  const deleteTodo = (todoId) => {
    if (confirm(`‼️ Are you sure you want to delete this to-do?`)) {
      axios({
        method: 'DELETE',
        url: `/api/todos/${todoId}`
      })
        .then((response) => {
          // console.log('DELETE request successful:', response.data);
          getTodos();
      })
        .catch((err) => {
          console.log('Error with DELETE request:', err);
      });
    }
  };

  // Function to convert timestamptz data type value from database
  // to human-readable
  const convertTimestamp = (timestamptz) => {
    const formatArgs = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    const dateObj = new Date(timestamptz);
    const timestamp = new Intl.DateTimeFormat('en-US', formatArgs).format(dateObj);
    return timestamp;
  };

  return (
    <div className="container p-5">

      {/* App header/title */}
      <Header appName="TestTo-Do App" />

      {/* To-do list */}
      <section>
        <ul className="list-group">
          {todos.map((todo) => {
            // Destructure the todo object
            const { id, text, isComplete, completedAt } = todo;
            return (    
              <li key={id} className={`list-group-item ${isComplete ? 'bg-transparent fst-italic text-secondary' : 'bg-dark-subtle'}`}>
                <div className="row g-3">

                  <div className="col-8 d-flex align-items-center">
                    {/* Complete button (checkbox style) */}
                    <button 
                      onClick={() => toggleTodo(id)}
                      className={`complete-btn btn ${isComplete ? 'btn-outline-success' : 'btn-outline-secondary'}`}
                    > 
                      {/* Green checkmark icon (for completed items only, otherwise leave empty) */}
                      {isComplete && (
                        <svg className="text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="800" height="800" viewBox="0 0 17.837 17.837">
                          <path d="M16.145 2.571a.7.7 0 0 0-.99 0L6.92 10.804l-4.241-4.27a.698.698 0 0 0-.989 0L.204 8.019a.703.703 0 0 0 0 .99l6.217 6.258a.704.704 0 0 0 .99 0L17.63 5.047a.7.7 0 0 0 0-.994l-1.485-1.482z" />
                        </svg>
                      )}
                    </button>

                    {/* To-do text and complete badge for done items */}
                    <div className="d-flex align-items-center ms-3">
                      <div>{text}</div>
                      {isComplete && (
                        <div className="mx-3">
                          <span className="badge rounded-pill bg-transparent text-success border border-success fst-normal fw-light">
                            Completed
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Completed/timestamp and delete button */}
                  <div className="col-4 d-flex align-items-center justify-content-end">
                    {isComplete && (
                      <small className="me-4 fst-italic text-dark-subtle lh-1">
                        On {convertTimestamp(completedAt)}
                      </small>
                    )}
                    <button onClick={() => deleteTodo(id)} className="btn btn-sm btn-outline-danger">Delete</button>
                  </div>

                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Add to-do form */}
      <section className="list-group list-unstyled mt-4">
        <form onSubmit={handleSubmit} className="form mx-0">
          <div className="row g-2">

            {/* Text input */}
            <div className="col-10">
              <label htmlFor="todoDescription" className="visually-hidden">
                To-do description
              </label>
              <input 
                onChange={(e) => setToDoText(e.target.value)}
                value={todoText}
                type="text" 
                id="todoDescription" 
                placeholder="Add a new to-do" 
                className="form-control" 
              />
            </div>

            {/* Add button */}
            <div className="col-2">
              <button type="submit" className="btn btn-primary w-100">Add</button>
            </div>

          </div>
        </form>
      </section>

    </div>
  );
}

export default App;
