import axios from 'axios';

export default function Todo({ todo, todos, getTodos }) {
  
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

  // Function for deleting to-dos
  const deleteTodo = (todoId) => {
    if (confirm(`‼️ Are you sure you want to delete this to-do?`)) {
      axios({
        method: 'DELETE',
        url: `/api/todos/${todoId}`
      })
        .then((_) => {
          // console.log('DELETE request successful:', _.data);
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

  // Destructure the todo object and return our to-do item component
  const { id, text, isComplete, completedAt } = todo;
  return (
    <li className={`list-group-item ${isComplete ? "bg-dark fst-italic text-secondary" : "bg-dark-subtle"}`}>
      <div className="row g-3">
        <div className="col-8 d-flex align-items-center">

          {/* Complete button (checkbox style) */}
          <button
            onClick={() => toggleTodo(id)}
            className={`complete-btn btn ${isComplete ? "btn-outline-success" : "btn-outline-secondary"}`}
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
                <span className="badge rounded-pill bg-dark text-success border border-success fst-normal fw-light">
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
          <button 
            onClick={() => deleteTodo(id)} 
            className="btn btn-sm btn-outline-danger"
            style={{ 'width': 32, 'fontWeight': 'bold' }}
          >
            <small>X</small>
          </button>
        </div>
      </div>
    </li>
  );
}
