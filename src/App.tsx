function App() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.elements.namedItem("taskInput") as HTMLInputElement;
    console.log(input.value);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
      >
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter your task"
            className="input input-bordered w-full mb-4"
            name="taskInput"
          />
          <button type="submit" className="btn btn-primary w-full">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
