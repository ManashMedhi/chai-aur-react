function App() {
  return (
    <div className="todo-list text-center">
      <h1>TODO LIST</h1>

      {/* ✅ ALIGN INPUT SECTION */}
      <div className="container">
        <div className="row justify-content-center align-items-center mb-3"> {/* alignment added */}
          <div className="col-4">
            <input type="text" className="form-control" placeholder="Enter Todo Here" /> {/* form-control for full width */}
          </div>
          <div className="col-4">
            <input type="date" className="form-control" /> {/* aligned input */}
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success w-100">Add</button> {/* btn full width */}
          </div>
        </div>
      </div>

      {/* ✅ TODO ITEM 1 */}
      <div className="container">
        <div className="row justify-content-center align-items-center mb-2"> {/* alignment added */}
          <div className="col-4">
            <div className="text-start">Buy Milk</div> {/* left-align text */}
          </div>
          <div className="col-4">
            <input type="date" className="form-control" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger w-100">Delete</button>
          </div>
        </div>
      </div>

      {/* ✅ TODO ITEM 2 */}
      <div className="container">
        <div className="row justify-content-center align-items-center mb-2"> {/* alignment added */}
          <div className="col-4">
            <div className="text-start">Goto College</div> {/* moved inside col-4 and aligned */}
          </div>
          <div className="col-4">
            <input type="date" className="form-control" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger w-100">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
