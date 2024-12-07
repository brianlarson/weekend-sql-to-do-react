import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  // Define state vars for todos
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  // Fetch todos and update state to request a DOM render
  const getTodos = () => {
    axios({
      method: 'GET',
      url: '/api/todos'
    })
      .then((response) => {
        // console.log("GET request successful:", response.data);
        setTodos(response.data);
    })
      .catch((err) => {
        console.log("Error with GET request:", err);
    });
  }

  return (
    <>
      <div className="container p-5">

        {/* App header/title */}
        <header className="mb-4">
          <h1 className="h2 text-dark-emphasis">
            <span className="me-2">👍🏻</span> To-Do App
          </h1>
          <hr />
        </header>

        {/* To-do list */}
        <section>
          <ul className="list-group">
            {
              todos.map((todo) => {
                // Destructure the todo object
                const { id, text, isComplete, completedAt } = todo;
                return (    
                  <li key={id} className="list-group-item bg-dark-subtle"> {/* COMPLETED CLASSES: list-group-item bg-transparent fst-italic text-secondary */}
                    <div className="row g-3">
                      <div className="col-7 d-flex align-items-center">

                        {/* Complete button (checkbox style) */}
                        <button className="complete-btn btn btn-outline-secondary"> {/* COMPLETED CLASSES: complete-btn btn btn-outline-success */}
                          {/* Green checkmark icon (for completed items only, otherwise leave empty) */}
                          {/* <svg className="text-success" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="800" height="800" viewBox="0 0 17.837 17.837">
                            <path d="M16.145 2.571a.7.7 0 0 0-.99 0L6.92 10.804l-4.241-4.27a.698.698 0 0 0-.989 0L.204 8.019a.703.703 0 0 0 0 .99l6.217 6.258a.704.704 0 0 0 .99 0L17.63 5.047a.7.7 0 0 0 0-.994l-1.485-1.482z" />
                          </svg> */}
                        </button>

                        {/* To-do text and complete badge for done items */}
                        <div className="d-flex align-items-center ms-3">
                          <div>{text} {isComplete && `COMPLETED AT: ${completedAt}`}</div>
                          {/* <div className="ms-3">
                            <span className="badge rounded-pill bg-transparent text-success border border-success fst-normal fw-light">
                              Completed
                            </span>
                          </div> */}
                        </div>

                      </div>

                      {/* Completed/timestamp and delete button */}
                      <div className="col-5 d-flex align-items-center justify-content-end">
                        {/* <small className="me-4 fst-italic text-dark-subtle lh-1">Completed TIMESTAMP</small> */}
                        <button className="btn btn-sm btn-outline-danger">Delete</button>
                      </div>

                    </div>
                  </li>
                );
              })
            }
          </ul>
        </section>

        {/* Add to-do form */}
        <section className="list-group list-unstyled mt-4">
          <form className="form mx-0">
            <div className="row g-2">

              {/* Text input */}
              <div className="col-10">
                <label htmlFor="todoDescription" className="visually-hidden">To-do description</label>
                <input type="text" id="todoDescription" placeholder="Add a new to-do" className="form-control" />
              </div>

              {/* Add button */}
              <div className="col-2">
                <button type="submit" className="btn btn-primary w-100">Add</button>
              </div>

            </div>
          </form>
        </section>

      </div>
    </>
  );
}

export default App;
