function AddToDoForm({ todoText, handleChange, handleSubmit }) {
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
            <button type="submit" className="btn btn-primary w-100">Add</button>
          </div>

        </div>
      </form>
    </section>
  );
}

export default AddToDoForm;
