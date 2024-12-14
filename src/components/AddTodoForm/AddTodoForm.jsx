import axios from 'axios';

export default function AddTodoForm({ todoText, setTodoText, getTodos }) {

  // Add to-do to database and re-fetch to-dos to update DOM
  const addTodo = () => {
    axios({
      method: 'POST',
      url: '/api/todos',
      data: { text: todoText }
    })
      .then((_) => {
        // console.log('POST request successful:', _.data);
        getTodos();
    })
      .catch((err) => {
        console.log('Error with GET request:', err);
    });
  };

  // Handle changes to add to-do input element
  const handleChange = ({ target }) => {
    setTodoText(target.value);
  }

  // Handle adding to-dos with form submission
  const handleSubmit = () => {
    todoText ? addTodo() : alert(`‼️ Please add a description for your new to-do`);
    setTodoText('');
  };

  return (
    <section className="list-group list-unstyled mt-4">
      <form onSubmit={handleSubmit} className="form mx-0">
        <div className="row g-2">

          {/* Text input */}
          <div className="col-10">
            <label htmlFor="todoDescription" className="visually-hidden">
              To-do description
            </label>
            <input
              onChange={handleChange}
              value={todoText}
              type="text"
              id="todoDescription"
              placeholder="Add a new to-do"
              className="form-control"
            />
          </div>

          {/* Add button */}
          <div className="col-2">
            <button type="submit" className="btn btn-primary w-100">
              Add
            </button>
          </div>

        </div>
      </form>
    </section>
    
  );
}
